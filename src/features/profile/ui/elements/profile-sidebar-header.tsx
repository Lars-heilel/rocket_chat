import { ArrowLeft } from 'lucide-react';
import { UsersContainer } from '@/entities/user';
import type { Users } from '@/entities/user';
import { SidebarHeader } from '@/shared/shadcn-ui/ui/sidebar';
import { Button } from '@/shared/shadcn-ui/ui/button';

interface ProfileSidebarHeaderProps {
    userData: Users;
    onClose: () => void;
}

export function ProfileSidebarHeader({ userData, onClose }: ProfileSidebarHeaderProps) {
    return (
        <SidebarHeader>
            <Button variant="ghost" size="icon" onClick={onClose} className="mr-2">
                <ArrowLeft className="h-4 w-4" />
            </Button>
            <UsersContainer userData={userData} />
        </SidebarHeader>
    );
}
