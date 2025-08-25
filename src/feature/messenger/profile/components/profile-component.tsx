import { Button } from '@/shared/components/ui/button';
import { useProfile } from '../hooks/useProfile';
import { MyProfileSkeleton } from '../ui/profile-skeleton';
import { ProfileSidebar } from '../ui/profile-sidebar';
import { ProfileHeader } from '../ui/profile-header';

export function MyProfileComponent() {
    const { data, isOpen, toggleOpen, isLoading } = useProfile();
    if (isLoading) {
        return <MyProfileSkeleton />;
    }
    return (
        <>
            <Button
                onClick={toggleOpen}
                variant="ghost"
                className="h-auto w-full justify-start p-2"
            >
                <ProfileHeader userData={data} />
            </Button>
            {isOpen && <ProfileSidebar onClose={toggleOpen} userData={data} />}
        </>
    );
}
