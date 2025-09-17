import { useGetMyProfileQuery, UsersContainer, UsersContainerSkeleton } from '@/entities/user';
import { Button } from '@/shared/shadcn-ui/ui/button';
import { SidebarHeader } from '@/shared/shadcn-ui/ui/sidebar';
import { ArrowLeftCircleIcon } from 'lucide-react';

interface ProfileSidebarHeaderProps {
    onClose: () => void;
}

export function ProfileSidebarHeader({ onClose }: ProfileSidebarHeaderProps) {
    const { data: userData, isSuccess } = useGetMyProfileQuery();
    return (
        <SidebarHeader>
            <Button variant="ghost" size="lg" onClick={onClose}>
                <ArrowLeftCircleIcon />
                <p className="font-bold">Return to contacts</p>
            </Button>
            {isSuccess ? <UsersContainer userData={userData} /> : <UsersContainerSkeleton />}
        </SidebarHeader>
    );
}
