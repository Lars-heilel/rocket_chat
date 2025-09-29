import { useLazyChatHistoryQuery } from '@/entities/message';
import { Logger, rtkErrorParser } from '@/shared/lib';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
export function useChatHistory(chatRoomId: string | null) {
    const logger = useMemo(() => new Logger('useChatHistory'), []);
    const PAGINATION_LIMIT = 50;
    const [trigger, { isLoading, isFetching, isError, error, data: historyData }] = useLazyChatHistoryQuery();
    const [canLoadMore, setCanLoadMore] = useState(true);
    const [firstLoadingDone, setFirstLoadingDone] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const prevScrollHeightRef = useRef<number | null>(null);
    const {
        ref: newMessageAnchorRef,
        inView: newMessageAnchorInView,
        entry: newMessageAnchorEntry,
    } = useInView({
        threshold: 0,
    });
    //first loading
    useEffect(() => {
        const firstLoadingHystory = async () => {
            try {
                if (chatRoomId) {
                    logger.debug(`try first loading history for chatRoom №:${chatRoomId}`);
                    const response = await trigger({ chatRoomId, limit: PAGINATION_LIMIT }).unwrap();
                    setFirstLoadingDone(true);
                    if (response.length < PAGINATION_LIMIT) {
                        logger.warn(`the received message history is too short for another request ${response.length}<${PAGINATION_LIMIT}`);
                        setCanLoadMore(false);
                        setFirstLoadingDone(false);
                    }
                }
            } catch (err) {
                logger.error(`fitst loading history error:${err}`);
            }
        };
        firstLoadingHystory();
    }, [chatRoomId, logger, trigger]);
    useLayoutEffect(() => {
        if (firstLoadingDone) {
            newMessageAnchorEntry?.target.scrollIntoView();
            setFirstLoadingDone(false);
        }
    }, [firstLoadingDone, newMessageAnchorEntry]);
    const sortedMessage = useMemo(() => {
        if (historyData) {
            return [...historyData].sort((a, b) => new Date(a.createAt).getTime() - new Date(b.createAt).getTime());
        }
    }, [historyData]);

    const fetchOldMessages = useCallback(async () => {
        if (!isLoading && !isFetching && chatRoomId && historyData && canLoadMore)
            try {
                logger.debug(`try loading old messages for chatRoom №:${chatRoomId}`);
                const { id: lastMessageId, createAt: lastMessageCreatedAt } = historyData[0];
                if (scrollContainerRef.current) {
                    prevScrollHeightRef.current = scrollContainerRef.current.scrollHeight;
                }
                const response = await trigger({ chatRoomId, limit: PAGINATION_LIMIT, lastMessageCreatedAt, lastMessageId }).unwrap();
                if (response[0].id === lastMessageId) {
                    logger.warn(
                        `resId:${response[0].id.slice(0, 4)} === lastMessageId:${lastMessageId.slice(0, 4)} the entire message history has been loaded, further requests are prohibited`,
                    );
                    setCanLoadMore(false);
                }
            } catch (err) {
                logger.error(`${err}`);
            }
    }, [chatRoomId, logger, isFetching, isLoading, trigger, historyData, canLoadMore]);

    const { ref: paginationAnchorRef } = useInView({
        threshold: 0,
        onChange: (inView) => {
            if (inView) {
                logger.debug('Pagination anchor is in view, attempting to fetch.');
                fetchOldMessages();
            }
        },
    });
    useLayoutEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (prevScrollHeightRef.current && scrollContainer) {
            const scrollHeightDiff = scrollContainer.scrollHeight - prevScrollHeightRef.current;
            if (scrollHeightDiff > 0) {
                scrollContainer.scrollTop += scrollHeightDiff;
            }
            prevScrollHeightRef.current = null;
        }
    }, [isFetching]);

    const errorMessage = useMemo(() => {
        if (isError && error) {
            return rtkErrorParser(error);
        }
        return null;
    }, [isError, error]);
    const scrollToBottom = useCallback(() => {
        newMessageAnchorEntry?.target.scrollIntoView();
    }, [newMessageAnchorEntry]);
    useLayoutEffect(() => {
        if (!isFetching && sortedMessage && newMessageAnchorInView) {
            newMessageAnchorEntry?.target.scrollIntoView();
        }
    }, [newMessageAnchorEntry, newMessageAnchorInView, isFetching, sortedMessage]);

    return {
        errorMessage,
        paginationAnchorRef,
        isError,
        isLoading,
        isFetching,
        canLoadMore,
        setCanLoadMore,
        sortedMessage,
        newMessageAnchorRef,
        scrollContainerRef,
        scrollToBottom,
        newMessageAnchorInView,
    };
}
