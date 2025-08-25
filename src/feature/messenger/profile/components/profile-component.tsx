import { Button } from '@/shared/components/ui/button';
import { useProfile } from '../hooks/useProfile';
import { ProfileSidebar } from '../ui/profile-sidebar';
import { UsersContainer, UsersContainerSkeleton } from '@/entities/user/ui';

export function MyProfileComponent() {
    const { data, isOpen, toggleOpen, isLoading } = useProfile();
    if (isLoading) {
        return <UsersContainerSkeleton />;
    }
    if (!data) {
        return;
    }
    return (
        <>
            <Button
                onClick={toggleOpen}
                variant="ghost"
                className="h-auto w-full justify-start p-2"
            >
                <UsersContainer userData={data} />
            </Button>
            {isOpen && <ProfileSidebar onClose={toggleOpen} userData={data} />}
        </>
    );
}
