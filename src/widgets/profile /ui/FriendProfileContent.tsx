import { UsersContainer, type Users } from '@/entities/user';
import { useDeleteFriends } from '@/features/friends/delete';
import { Button } from '@/shared/shadcn-ui/ui/button';
import { UserMinus, ShieldAlert } from 'lucide-react';
import { Loader2 } from 'lucide-react';
interface FriendProfileContentProps {
    friend: Users;
}
export function FriendProfileContent({ friend }: FriendProfileContentProps) {
    const { handleDelete, isLoading } = useDeleteFriends(friend.id);
    return (
        <div className="flex flex-col gap-4 p-4">
            <UsersContainer userData={friend} />
            <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" className="w-full justify-start">
                    <ShieldAlert className="mr-2 h-4 w-4" />
                    Report User
                </Button>

                <Button variant="destructive" className="w-full justify-start" onClick={handleDelete} disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <UserMinus className="mr-2 h-4 w-4" />}
                    Remove Friend
                </Button>
            </div>
        </div>
    );
}
