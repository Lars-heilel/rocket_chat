import { UsersContainer, type Users } from '@/entities/user';
import { EmptyStateList, ListItemWrapper, ResourceList } from '@/shared/ui/List';
import { Frown } from 'lucide-react';
interface FriendlistProps {
    isLoading: boolean;
    isError: boolean;
    friendshipData: Users[];
}

export default function Friendlist({ isError, isLoading, friendshipData }: FriendlistProps) {
    return (
        <ResourceList
            isLoading={isLoading}
            isError={isError}
            data={friendshipData}
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
