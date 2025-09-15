import { toast } from 'sonner';
import { apiService, SOCKET_EVENTS, socketService } from '@/shared/api';
import { BACKEND_ROUTES } from '@/shared/config';
import {
    deleteFriendResponseSchema,
    FriendshipWithUsersArraySchema,
    FriendshipWithUsersSchema,
    type DeleteFriendResponse,
    type FriendshipWithUsers,
} from './schemas';
import type { DeleteFriendDto, SendFriendRequestDto, UpdateFriendshipStatusDto } from './dto';
const friendshipApiSlice = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getFriendList: builder.query<FriendshipWithUsers[], void>({
            query: () => ({
                url: BACKEND_ROUTES.FRIEND_LIST,
                method: 'GET',
            }),
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Friends' as const, id })), { type: 'Friends', id: 'LIST' }]
                    : [{ type: 'Friends', id: 'LIST' }],
            responseSchema: FriendshipWithUsersArraySchema,
            async onCacheEntryAdded(_arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
                const socket = socketService.getSocket();
                if (!socket) {
                    return;
                }

                await cacheDataLoaded;

                const acceptedListener = (newFriendship: FriendshipWithUsers) => {
                    updateCachedData((draft) => {
                        draft.push(newFriendship);
                    });
                    toast.success(`You and ${newFriendship.addressee.name} are now friends! 🎉`);
                };

                const deletedListener = (event: { friendshipId: string }) => {
                    updateCachedData((draft) => {
                        return draft.filter((friend) => friend.id !== event.friendshipId);
                    });
                };

                socket.on(SOCKET_EVENTS.SERVER.FRIENDSHIP_REQUEST_ACCEPTED, acceptedListener);
                socket.on(SOCKET_EVENTS.SERVER.FRIENDSHIP_DELETED, deletedListener);

                await cacheEntryRemoved;

                socket.off(SOCKET_EVENTS.SERVER.FRIENDSHIP_REQUEST_ACCEPTED, acceptedListener);
                socket.off(SOCKET_EVENTS.SERVER.FRIENDSHIP_DELETED, deletedListener);
            },
        }),

        getIncomingRequests: builder.query<FriendshipWithUsers[], void>({
            query: () => ({
                url: BACKEND_ROUTES.FRIENDSHIP,
                method: 'GET',
            }),
            responseSchema: FriendshipWithUsersArraySchema,
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Requests' as const, id })), { type: 'Requests', id: 'LIST' }]
                    : [{ type: 'Requests', id: 'LIST' }],
            async onCacheEntryAdded(_arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
                const socket = socketService.getSocket();
                if (!socket) {
                    return;
                }

                await cacheDataLoaded;
                const receivedListener = (newRequest: FriendshipWithUsers) => {
                    updateCachedData((draft) => {
                        draft.push(newRequest);
                    });
                    toast.info(`You have a new friend request from ${newRequest.requester.name}!`);
                };

                socket.on(SOCKET_EVENTS.SERVER.FRIENDSHIP_REQUEST_RECEIVED, receivedListener);
                await cacheEntryRemoved;
                socket.off(SOCKET_EVENTS.SERVER.FRIENDSHIP_REQUEST_RECEIVED, receivedListener);
            },
        }),

        sendFriendRequest: builder.mutation<FriendshipWithUsers, SendFriendRequestDto>({
            query: (body) => ({
                url: BACKEND_ROUTES.FRIENDSHIP,
                method: 'POST',
                body,
            }),
            responseSchema: FriendshipWithUsersSchema,
            invalidatesTags: (_result, _error, arg) => [{ type: 'Users', id: arg.userId }],
        }),

        updateFriendshipStatus: builder.mutation<FriendshipWithUsers, UpdateFriendshipStatusDto>({
            query: ({ friendshipId, body }) => ({
                url: `${BACKEND_ROUTES.FRIENDSHIP}/${friendshipId}`,
                method: 'PATCH',
                body,
            }),
            responseSchema: FriendshipWithUsersSchema,
            invalidatesTags: [
                { type: 'Friends', id: 'LIST' },
                { type: 'Requests', id: 'LIST' },
            ],
        }),
        deleteFriend: builder.mutation<DeleteFriendResponse, DeleteFriendDto>({
            query: ({ friendshipId }) => ({
                url: `${BACKEND_ROUTES.FRIENDSHIP}/${friendshipId}`,
                method: 'DELETE',
            }),
            responseSchema: deleteFriendResponseSchema,
            invalidatesTags: (_result, _error, { friendshipId }) => [
                { type: 'Friends', id: 'LIST' },
                { type: 'Friends', id: friendshipId },
            ],
        }),
    }),
});

export const {
    useGetFriendListQuery,
    useLazyGetFriendListQuery,
    useGetIncomingRequestsQuery,
    useLazyGetIncomingRequestsQuery,
    useSendFriendRequestMutation,
    useUpdateFriendshipStatusMutation,
    useDeleteFriendMutation,
} = friendshipApiSlice;
