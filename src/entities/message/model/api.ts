import { toast } from 'sonner';
import { MessagesArraySchema, type Message } from './schemas';
import type { GetHistoryDto } from './dto';
import { BACKEND_ROUTES } from '@/shared/config';
import { apiService, SOCKET_EVENTS, socketService } from '@/shared/api';
import { Logger } from '@/shared/lib';
import type { RootState } from '@/app/store/reduxStore';
const logger = new Logger('messageApiSlice');
export const messageApiSlice = apiService.injectEndpoints({
    endpoints: (builder) => ({
        chatHistory: builder.query<Message[], GetHistoryDto>({
            query: (dto) => ({ url: BACKEND_ROUTES.MESSAGE_HISTORY, params: dto }),
            serializeQueryArgs: ({ queryArgs }) => {
                return { chatRoomId: queryArgs.chatRoomId };
            },
            responseSchema: MessagesArraySchema,
            merge: (currentCache, newItems) => {
                const existingMessageIds = new Set(currentCache.map((msg) => msg.id));
                const filterUnique = newItems.filter((item) => !existingMessageIds.has(item.id));
                currentCache.unshift(...filterUnique);
            },
            async onCacheEntryAdded(_arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved, getState }) {
                const socket = socketService.getSocket();
                if (!socket) {
                    return;
                }
                await cacheDataLoaded;
                const messageListener = (newMessageData: Message) => {
                    const selectedRoomId = (getState() as RootState).chatRoom.selectedChatId;
                    logger.debug(` id выбраной комнаты ${selectedRoomId}`);
                    if (newMessageData.chatRoomId === selectedRoomId) {
                        updateCachedData((draft) => {
                            if (!draft.some((msg) => msg.id === newMessageData.id)) {
                                draft.push(newMessageData);
                            }
                        });
                    } else {
                        toast.info(`new message from ${newMessageData.sender.name}:${newMessageData.content}`);
                    }
                };
                socket.on(SOCKET_EVENTS.NEW_MESSAGE, messageListener);
                await cacheEntryRemoved;
                socket.off(SOCKET_EVENTS.NEW_MESSAGE, messageListener);
            },
        }),
    }),
});
export const { useChatHistoryQuery, useLazyChatHistoryQuery } = messageApiSlice;
