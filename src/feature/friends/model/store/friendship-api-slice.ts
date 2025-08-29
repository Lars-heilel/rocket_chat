import { apiService } from '@/shared/api/api-service';
import { FRIENDSHIP_PATH_BACKEND } from '../const/friendship-path';
import type { FriendshipWithUsers, SendFriendRequestDto, UpdateFriendshipStatusDto } from '../schemas/friendship.schema';

const friendshipApiSlice = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getFriendList: builder.query<FriendshipWithUsers[], void>({
            query: () => ({
                url: FRIENDSHIP_PATH_BACKEND.FRIENDLIST,
                method: 'GET',
            }),
        }),
        getIncomingRequests: builder.query<FriendshipWithUsers[], void>({
            query: () => ({
                url: FRIENDSHIP_PATH_BACKEND.FRIENDSHIP,
                method: 'GET',
            }),
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
        }),
        deleteFriend: builder.mutation<{ message: string }, { friendshipId: string }>({
            query: ({ friendshipId }) => ({
                url: `${FRIENDSHIP_PATH_BACKEND.FRIENDSHIP}/${friendshipId}`,
                method: 'DELETE',
            }),
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
