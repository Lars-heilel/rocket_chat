import { UsersContainer } from '@/entities/user';
import type { Users } from '@/entities/user';
import { SidebarHeader } from '@/shared/shadcn-ui/ui/sidebar';
import { Button } from '@/shared/shadcn-ui/ui/button';
import { ArrowLeftCircleIcon } from 'lucide-react';

interface ProfileSidebarHeaderProps {
    userData: Users;
    onClose: () => void;
}

export function ProfileSidebarHeader({ userData, onClose }: ProfileSidebarHeaderProps) {
    return (
        <SidebarHeader>
            <div className="flex items-center justify-center">
                <Button variant="secondary" size="lg" onClick={onClose} className="mr-2">
                    <ArrowLeftCircleIcon></ArrowLeftCircleIcon>
                </Button>
                <UsersContainer userData={userData} />
            </div>
        </SidebarHeader>
    );
}
