import { useGetMyProfileQuery, UsersContainer, UsersContainerSkeleton } from '@/entities/user';
import { Button } from '@/shared/shadcn-ui';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/shared/shadcn-ui/ui/dialog';
import { CurrentUserProfileContent } from './ui';

// import { FriendProfileContent } from './ui/FriendProfileContent';
export function ProfileWidget() {
    const { data: currentUser, isLoading, isSuccess } = useGetMyProfileQuery();
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" className="w-full rounded-full h-full">
                    {isLoading ? <UsersContainerSkeleton /> : <UsersContainer userData={currentUser!} />}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    {isLoading && <UsersContainerSkeleton />}
                    {isSuccess && <CurrentUserProfileContent userData={currentUser} />}
                    {/* {isFriend && <FriendProfileContent friendId={userId!} />} */}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
