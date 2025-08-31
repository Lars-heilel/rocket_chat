import { apiService } from '@/shared/api/api-service';
import { FRIENDSHIP_PATH_BACKEND } from '../const/friendship-path';
import type { FriendshipWithUsers, SendFriendRequestDto, UpdateFriendshipStatusDto } from '../schemas/friendship.schema';
import { socketService } from '@/shared/api/socket';
import { SOCKET_EVENTS } from '@/shared/api/socket-events.const';
import { toast } from 'sonner';
const friendshipApiSlice = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getFriendList: builder.query<FriendshipWithUsers[], void>({
            query: () => ({
                url: FRIENDSHIP_PATH_BACKEND.FRIENDLIST,
                method: 'GET',
            }),
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Friends' as const, id })), { type: 'Friends', id: 'LIST' }]
                    : [{ type: 'Friends', id: 'LIST' }],
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
                url: FRIENDSHIP_PATH_BACKEND.FRIENDSHIP,
                method: 'GET',
            }),
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
                url: FRIENDSHIP_PATH_BACKEND.FRIENDSHIP,
                method: 'POST',
                body,
            }),
        }),

        updateFriendshipStatus: builder.mutation<FriendshipWithUsers, { friendshipId: string; body: UpdateFriendshipStatusDto }>({
            query: ({ friendshipId, body }) => ({
                url: `${FRIENDSHIP_PATH_BACKEND.FRIENDSHIP}/${friendshipId}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: [
                { type: 'Friends', id: 'LIST' },
                { type: 'Requests', id: 'LIST' },
            ],
        }),
        deleteFriend: builder.mutation<{ message: string }, { friendshipId: string }>({
            query: ({ friendshipId }) => ({
                url: `${FRIENDSHIP_PATH_BACKEND.FRIENDSHIP}/${friendshipId}`,
                method: 'DELETE',
            }),
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
