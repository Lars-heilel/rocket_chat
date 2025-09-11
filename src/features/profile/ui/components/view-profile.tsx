import { useGetMyProfileQuery, UsersContainer, UsersContainerSkeleton } from '@/entities/user';
import { useDisclosure } from '@/shared/lib/hooks/use-disclosure';
import { ProfileSidebar } from '../elements';
import { Button } from '@/shared/shadcn-ui/ui/button';

export function ViewProfile() {
    const { data, isLoading, isSuccess } = useGetMyProfileQuery();
    const { toggle: toggleOpen, isOpen } = useDisclosure();
    const renderContent = () => {
        if (isLoading) {
            return <UsersContainerSkeleton />;
        }
        if (isSuccess) {
            return (
                <>
                    <Button onClick={toggleOpen} variant="ghost">
                        <UsersContainer userData={data} />
                    </Button>
                    {isOpen && <ProfileSidebar onClose={toggleOpen} userData={data} />}
                </>
            );
        }
    };
    return renderContent();
}
