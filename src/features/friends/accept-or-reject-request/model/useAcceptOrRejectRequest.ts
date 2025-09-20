import { useUpdateFriendshipStatusMutation } from '@/entities/friendship';
export function useAcceptOrRejectRequest() {
    const [updateStatus, { isLoading }] = useUpdateFriendshipStatusMutation();
    const handleAccept = (friendshipId: string) => {
        updateStatus({ friendshipId, body: { type: 'ACCEPTED' } });
    };
    const handleReject = (friendshipId: string) => {
        updateStatus({ friendshipId, body: { type: 'REJECTED' } });
    };
    return { isLoading, handleAccept, handleReject };
}
