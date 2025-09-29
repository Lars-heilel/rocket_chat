import { UsersContainer, UsersContainerSkeleton, type Users } from '@/entities/user';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/shared/shadcn-ui/ui/dialog';
import { CurrentUserProfileContent } from './ui';
import { DialogTitle } from '@radix-ui/react-dialog';
interface ProfileWidgetProps {
    currentUser: Users | undefined;
    isLoading: boolean;
    isSuccess: boolean;
}
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
                    {isSuccess && currentUser && <CurrentUserProfileContent userData={currentUser} />}
                    {/* {isFriend && <FriendProfileContent friendId={userId!} />} */}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
