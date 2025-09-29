import type { FriendshipWithUsers } from '@/entities/friendship';
import { UsersContainer } from '@/entities/user';
import { EmptyStateList, ListItemWrapper, ResourceList } from '@/shared/ui/List';
import { Frown } from 'lucide-react';
import { UpdateFriendsStatusButtons, useAcceptOrRejectRequest } from '../../accept-or-reject-request';

interface IncomingRequestlistProps {
    isLoading: boolean;
    isError: boolean;
    requestData: FriendshipWithUsers[];
}

export default function IncomingRequestList({ isError, isLoading, requestData }: IncomingRequestlistProps) {
    const { handleAccept, handleReject, isLoading: updateStatusLoading } = useAcceptOrRejectRequest();
    return (
        <ResourceList
            isLoading={isLoading}
            isError={isError}
            data={requestData}
            errorState={<EmptyStateList icon={<Frown />} title="Failed to load requests" className="text-destructive" />}
            emptyState={<EmptyStateList icon={<Frown />} title="No incoming requests" />}
            renderItem={(request) => (
                <ListItemWrapper key={request.id}>
                    <UsersContainer userData={request.requester}></UsersContainer>
                    <UpdateFriendsStatusButtons
                        friendshipId={request.id}
                        handleAccept={handleAccept}
                        handleReject={handleReject}
                        isLoading={updateStatusLoading}
                    />
                </ListItemWrapper>
            )}
        />
    );
}
