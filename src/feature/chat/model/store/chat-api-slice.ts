import { apiService } from '@/shared/api/api-service';
import type { GetHistoryDto, Message } from '../schemas';
import { CHAT_PATH_BACKEND } from '../const';
import { socketService } from '@/shared/api/socket';
import { SOCKET_EVENTS } from '@/shared/api/socket-events.const';

export const chatApiSlice = apiService.injectEndpoints({
    endpoints: (builder) => ({
        chatHistory: builder.query<Message[], GetHistoryDto>({
            query: (dto) => ({ url: CHAT_PATH_BACKEND.HISTORY, params: dto }),
            async onCacheEntryAdded(_arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
                const socket = socketService.getSocket();
                if (!socket) {
                    return;
                }
                await cacheDataLoaded;
                const messageListener = (sentNewMessage: Message) => {
                    updateCachedData((draft) => {
                        draft.push(sentNewMessage);
                    });
                };
                socket.on(SOCKET_EVENTS.SERVER.NEW_MESSAGE_SENT, messageListener);
                socket.on(SOCKET_EVENTS.SERVER.NEW_MESSAGE, messageListener);
                await cacheEntryRemoved;
                socket.off(SOCKET_EVENTS.SERVER.NEW_MESSAGE, messageListener);
                socket.off(SOCKET_EVENTS.SERVER.NEW_MESSAGE_SENT, messageListener);
            },
        }),
    }),
});
export const { useChatHistoryQuery, useLazyChatHistoryQuery } = chatApiSlice;
