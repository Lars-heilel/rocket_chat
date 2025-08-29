import { UsersContainer, UsersContainerSkeleton } from '@/entities/user';
import { Button } from '@/shared/components/ui/button';
import { useViewProfile } from '../../model';
import { ProfileSidebar } from '../elements';

export function ViewProfile() {
    const { data, isOpen, toggleOpen, isLoading } = useViewProfile();
    if (isLoading) {
        return <UsersContainerSkeleton />;
    }
    if (!data) {
        return;
    }
    return (
        <>
            <Button onClick={toggleOpen} variant="ghost">
                <UsersContainer userData={data} />
            </Button>
            {isOpen && <ProfileSidebar onClose={toggleOpen} userData={data} />}
        </>
    );
}
