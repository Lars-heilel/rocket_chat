import { useGetMyProfileQuery, UsersContainer } from '@/entities/user';
import { Button } from '@/shared/components/ui/button';
import { Trash2 } from 'lucide-react';
import { useDeleteFriendMutation } from '../model/store/friendship-api-slice';
import type { FriendshipWithUsers } from '../model/schemas/friendship.schema';

interface FriendCardProps {
    friendship: FriendshipWithUsers;
}

export function FriendCard({ friendship }: FriendCardProps) {
    const [deleteFriend, { isLoading }] = useDeleteFriendMutation();
    const { data } = useGetMyProfileQuery();
    const friend = friendship.requesterId === data?.id ? friendship.addressee : friendship.requester;

    const handleDelete = () => {
        deleteFriend({ friendshipId: friendship.id });
    };

    return (
        <div className="flex items-center justify-between rounded-md p-2 hover:bg-muted/50">
            <UsersContainer userData={friend} />
            <Button size="icon" variant="ghost" onClick={handleDelete} disabled={isLoading} aria-label="Delete friend">
                <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
        </div>
    );
}
