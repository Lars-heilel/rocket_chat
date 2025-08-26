import { UsersContainer, UsersContainerSkeleton } from '@/entities/user';
import { Button } from '@/shared/components/ui/button';
import { ProfileSidebar } from '../elements/profile-sidebar';
import { useProfile } from '../../model/hooks/useProfile';

export function ViewProfile() {
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
