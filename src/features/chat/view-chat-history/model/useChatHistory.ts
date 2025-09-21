import { useEffect, useMemo, useRef } from 'react';
import { useChatHistoryQuery } from '@/entities/message';

export function useChatHistory(roomId: string | null) {
    const { data: messages, isLoading, isError } = useChatHistoryQuery({ chatRoomId: roomId!, limit: 50 }, { skip: !roomId });

    const bottomTriggerRef = useRef<HTMLDivElement>(null);

    const sortedMessages = useMemo(() => {
        if (!messages) {
            return [];
        }
        return [...messages].sort((a, b) => new Date(a.createAt).getTime() - new Date(b.createAt).getTime());
    }, [messages]);

    useEffect(() => {
        bottomTriggerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [sortedMessages]);

    return {
        messages: sortedMessages,
        isLoading,
        isError,
        bottomTriggerRef,
    };
}
