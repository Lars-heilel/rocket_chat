import { toast } from 'sonner';
import { MessageSchema, type Message } from './schemas';
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
                socket.on(SOCKET_EVENTS.NEW_MESSAGE, messageListener);
                await cacheEntryRemoved;
                socket.off(SOCKET_EVENTS.NEW_MESSAGE, messageListener);
            },
        }),
    }),
});
export const { useChatHistoryQuery, useLazyChatHistoryQuery } = messageApiSlice;
