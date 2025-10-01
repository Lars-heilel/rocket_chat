import { UsersContainer, UsersContainerSkeleton, type Users } from '@/entities/user';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/shared/shadcn-ui/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import React from 'react';
interface ProfileWidgetProps {
    currentUser: Users | undefined;
    isLoading: boolean;
    isSuccess: boolean;
}
const LazyCurrentUserProfileContent = React.lazy(() =>
    import('./ui/CurrentUserProfileContent').then((module) => ({ default: module.CurrentUserProfileContent })),
);
// import { FriendProfileContent } from './ui/FriendProfileContent';
export function ProfileWidget({ isLoading, isSuccess, currentUser }: ProfileWidgetProps) {
    return (
        <Dialog>
            <DialogTrigger>
                <DialogTitle></DialogTitle>
                <div className="border-b-2 p-2.5 hover:bg-gray-400/20">
                    {isLoading ? <UsersContainerSkeleton /> : <UsersContainer userData={currentUser!} />}
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    {isLoading && <UsersContainerSkeleton />}
                    {isSuccess && currentUser && <LazyCurrentUserProfileContent userData={currentUser} />}
                    {/* {isFriend && <FriendProfileContent friendId={userId!} />} */}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
