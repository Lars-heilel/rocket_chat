import { apiService } from '@/shared/api';
import { BACKEND_ROUTES } from '@/shared/config';
import type { GetPrivateRoomDto } from './dto';
import { chatRoomSchema, type ChatRoom } from './schemas';
import type { AllChatRoom } from './schemas/allRooms.schema';

export const chatRoomApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getPrivateRoom: builder.query<ChatRoom, GetPrivateRoomDto>({
            query: (dto: GetPrivateRoomDto) => ({ url: BACKEND_ROUTES.CHAT_ROOM_PRIVATE, method: 'GET', params: dto }),
            responseSchema: chatRoomSchema,
        }),
        getAllRooms: builder.query<AllChatRoom[], void>({
            query: () => ({ url: BACKEND_ROUTES.ALL_CHAT_ROOMS, method: 'GET' }),
            providesTags: (result) =>
                result
                    ? [...result.map(({ lastMessage }) => ({ type: 'Rooms' as const, lastMessage })), { type: 'Rooms', id: 'LIST' }]
                    : [{ type: 'Rooms', id: 'LIST' }],
        }),
    }),
});
export const { useGetPrivateRoomQuery, useLazyGetPrivateRoomQuery, useGetAllRoomsQuery, useLazyGetAllRoomsQuery } = chatRoomApi;
