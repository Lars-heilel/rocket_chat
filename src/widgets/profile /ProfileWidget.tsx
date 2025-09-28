import { useGetMyProfileQuery, UsersContainer, UsersContainerSkeleton } from '@/entities/user';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/shared/shadcn-ui/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
export function ProfileWidget() {
    const { data: currentUser, isLoading, isSuccess } = useGetMyProfileQuery();
    return (
        <Dialog>
            <DialogTrigger>
                <DialogTitle>My profile</DialogTitle>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    {isLoading ? <UsersContainerSkeleton /> : isSuccess ? <UsersContainer userData={currentUser} /> : null}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
