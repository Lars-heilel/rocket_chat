import type { FriendshipWithUsers } from '@/entities/friendship';
import { UsersContainer } from '@/entities/user';
import { EmptyStateList, ListItemWrapper, ResourceList } from '@/shared/ui/List';
import { Frown } from 'lucide-react';

interface IncomingRequestlistProps {
    isLoading: boolean;
    isError: boolean;
    requestData: FriendshipWithUsers[];
    updateStatusButtons: React.ReactNode;
}

export default function IncomingRequestList({ isError, isLoading, requestData, updateStatusButtons }: IncomingRequestlistProps) {
    return (
        <ResourceList
            isLoading={isLoading}
            isError={isError}
            data={requestData}
            errorState={<EmptyStateList icon={<Frown />} title="Failed to load requests" className="text-destructive" />}
            emptyState={<EmptyStateList icon={<Frown />} title="No incoming requests" />}
            renderItem={(request) => (
                <ListItemWrapper key={request.id}>
                    <UsersContainer userData={request.requester}>{updateStatusButtons}</UsersContainer>
                </ListItemWrapper>
            )}
        />
    );
}
