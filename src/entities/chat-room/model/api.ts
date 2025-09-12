import z from 'zod';
import { Logger } from '@/shared/lib';
import { apiService } from '@/shared/api';
import { BACKEND_ROUTES } from '@/shared/config';
import type { GetPrivateRoomDto } from './dto';
import { chatRoomSchema, type ChatRoom } from './schemas';

const logger = new Logger('chatRoomApi');
export const chatRoomApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getPrivateRoom: builder.query<ChatRoom, GetPrivateRoomDto>({
            query: (dto: GetPrivateRoomDto) => ({ url: BACKEND_ROUTES.CHAT_ROOM_PRIVATE, method: 'GET', params: dto }),
            transformResponse: (response: unknown) => {
                try {
                    return chatRoomSchema.parse(response);
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
