import { UsersContainer, type Users } from '@/entities/user';
import { Spinner } from '@/shared/ui';
import { Frown } from 'lucide-react';
interface FriendlistProps {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    friendshipData: Users[];
}
export default function Friendlist({ isError, isLoading, isSuccess, friendshipData }: FriendlistProps) {
    const renderFriendListContent = () => {
        if (isLoading) {
            return <Spinner />;
        }
        if (isError) {
            return (
                <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-destructive">
                    <Frown />
                    <span>sorry, there was an error loading your friends list</span>
                </div>
            );
        }
        if (isSuccess && friendshipData.length === 0) {
            return (
                <div className="flex h-full flex-col items-center justify-center ...">
                    <Frown />
                    <span>You don't have any friends yet.</span>
                </div>
            );
        } else {
            return (
                <div className="flex flex-col items-start p-5 border-b-2 border-t-2 gap-2 hover:bg-amber-50/5">
                    {friendshipData.map((friend) => (
                        <UsersContainer key={friend.id} userData={friend} />
                    ))}
                </div>
            );
        }
    };
    return renderFriendListContent();
}
