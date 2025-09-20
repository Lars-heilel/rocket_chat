import { useGetFriendListQuery } from '@/entities/friendship';
import { useGetMyProfileQuery } from '@/entities/user';
import { useMemo } from 'react';

export function useFriendList() {
    const { data: currentUser } = useGetMyProfileQuery();
    const { data: friendlistData, isError, isLoading, isSuccess } = useGetFriendListQuery();
    const friends = useMemo(() => {
        if (!currentUser || !friendlistData) {
            return [];
        }
        return friendlistData?.map((friendship) => {
            if (friendship.requesterId === currentUser?.id) {
                return friendship.addressee;
            } else {
                return friendship.requester;
            }
        });
    }, [currentUser, friendlistData]);
    return { friends, isError, isSuccess, isLoading };
}
