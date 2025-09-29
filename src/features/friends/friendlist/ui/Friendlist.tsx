import { UsersContainer, type Users } from '@/entities/user';
import { EmptyStateList, ListItemWrapper, ResourceList } from '@/shared/ui/List';
import { Frown } from 'lucide-react';

interface FriendlistProps {
    isLoading: boolean;
    isError: boolean;
    friendData: Users[];
}

export default function Friendlist({ isError, isLoading, friendData }: FriendlistProps) {
    return (
        <ResourceList
            isLoading={isLoading}
            isError={isError}
            data={friendData}
            errorState={<EmptyStateList icon={<Frown />} title="Failed to load friends" className="text-destructive" />}
            emptyState={<EmptyStateList icon={<Frown />} title="No friends yet" />}
            renderItem={(friend) => (
                <ListItemWrapper key={friend.id}>
                    <UsersContainer userData={friend} />
                </ListItemWrapper>
            )}
        />
    );
}
