import { apiService } from '@/shared/api/api-service';
import { ChatRoomResponseSchema, type ChatRoomDto, type ChatRoomResponse } from '../schemas';
import { CHAT_ROOM_PATH } from '../const/chatRoom-path';
import { Logger } from '@/shared/lib/logger';
import z from 'zod';
const logger = new Logger('chatRoomApi');
export const chatRoomApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getPrivateRoom: builder.query<ChatRoomResponse, ChatRoomDto>({
            query: (dto: ChatRoomDto) => ({ url: CHAT_ROOM_PATH.PRIVATE, method: 'GET', params: dto }),
            transformResponse: (response: unknown) => {
                try {
                    return ChatRoomResponseSchema.parse(response);
                } catch (error) {
                    if (error instanceof z.ZodError) {
                        logger.error('Failed to parse chat room response:', error.issues);
                    }
                    throw new Error('Invalid API response structure for chat room.');
                }
            },
        }),
    }),
});
export const { useGetPrivateRoomQuery, useLazyGetPrivateRoomQuery } = chatRoomApi;
