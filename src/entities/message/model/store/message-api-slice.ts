import { apiService } from '@/shared/api/api-service';
import { socketService } from '@/shared/api/socket';
import { SOCKET_EVENTS } from '@/shared/api/socket-events.const';
import { MESSAGE_PATH, MessageSchema, type GetHistoryDto, type Message } from '@/entities/message';
import type { RootState } from '@/app/store/reduxStore';
import { toast } from 'sonner';
import { Logger } from '@/shared/lib/logger';
const logger = new Logger('messageApiSlice');
export const messageApiSlice = apiService.injectEndpoints({
    endpoints: (builder) => ({
        chatHistory: builder.query<Message[], GetHistoryDto>({
            query: (dto) => ({ url: MESSAGE_PATH.HISTORY, params: dto }),
            async onCacheEntryAdded(_arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved, getState }) {
                const socket = socketService.getSocket();
                if (!socket) {
                    return;
                }
                await cacheDataLoaded;
                const messageListener = (newMessageData: Message) => {
                    const validation = MessageSchema.safeParse(newMessageData);
                    if (!validation.success) {
                        logger.error('Received invalid message structure from WebSocket:', validation.error);
                        return;
                    }
                    const newMessage = validation.data;
                    const selectedRoomId = (getState() as RootState).chatRoom.selectedChatId;
                    logger.debug(` id выбраной комнаты ${selectedRoomId}`);
                    if (newMessage.chatRoomId === selectedRoomId) {
                        updateCachedData((draft) => {
                            if (!draft.some((msg) => msg.id === newMessage.id)) {
                                draft.push(newMessage);
                            }
                        });
                    } else {
                        toast.info(`new message from ${newMessage.sender.name}:${newMessage.content}`);
                    }
                };
                socket.on(SOCKET_EVENTS.SERVER.NEW_MESSAGE, messageListener);
                await cacheEntryRemoved;
                socket.off(SOCKET_EVENTS.SERVER.NEW_MESSAGE, messageListener);
            },
        }),
    }),
});
export const { useChatHistoryQuery, useLazyChatHistoryQuery } = messageApiSlice;
