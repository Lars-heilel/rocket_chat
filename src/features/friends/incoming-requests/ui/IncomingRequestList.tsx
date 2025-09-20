import type { FriendshipWithUsers } from '@/entities/friendship';
import { UsersContainer } from '@/entities/user';
import { Spinner } from '@/shared/ui';
import { Frown } from 'lucide-react';

interface IncomingRequestlistProps {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    requestData: FriendshipWithUsers[];
    updateStatusButtons: React.ReactNode;
}
export default function IncomingRequestList({ isError, isLoading, isSuccess, requestData, updateStatusButtons }: IncomingRequestlistProps) {
    const renderRequestListContent = () => {
        if (isLoading) {
            return <Spinner />;
        }
        if (isError) {
            return (
                <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-destructive">
                    <Frown />
                    <span>sorry, there was an error loading your requests list</span>
                </div>
            );
        }
        if (isSuccess && requestData.length === 0) {
            return (
                <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-muted-foreground">
                    <Frown />
                    <span>No requests received from other users</span>
                </div>
            );
        } else {
            <div className="flex flex-col items-start p-5 border-b-2 border-t-2 gap-2 hover:bg-amber-50/5">
                {requestData.map((requestItem) => (
                    <UsersContainer userData={requestItem.requester} key={requestItem.id}>
                        {updateStatusButtons}
                    </UsersContainer>
                ))}
            </div>;
            return;
        }
    };
    return renderRequestListContent();
}
