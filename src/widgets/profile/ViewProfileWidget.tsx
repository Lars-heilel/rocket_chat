import { useGetMyProfileQuery, UsersContainer, UsersContainerSkeleton } from '@/entities/user';
import { useDisclosure } from '@/shared/lib';
import { Button } from '@/shared/shadcn-ui/ui/button';
import { ProfilePanel } from './ui/ProfilePanel';

export function ViewProfileWidget() {
    const { data, isLoading, isSuccess } = useGetMyProfileQuery();
    const { toggle: toggleOpen, isOpen } = useDisclosure();
    const renderContent = () => {
        if (isLoading) {
            return <UsersContainerSkeleton />;
        }
        if (isSuccess) {
            return (
                <div className="flex flex-1 justify-center items-center">
                    <Button onClick={toggleOpen} variant="ghost">
                        <UsersContainer userData={data} />
                    </Button>
                    {isOpen && <ProfilePanel />}
                </div>
            );
        }
    };
    return renderContent();
}
