import { ArrowLeft } from 'lucide-react';
import { UsersContainer } from '@/entities/user';
import type { Users } from '@/entities/user';
import { Button } from '@/shared/shadcn-ui/ui/button';

interface ProfileSidebarHeaderProps {
    userData: Users;
    onClose: () => void;
}

export function ProfileSidebarHeader({ userData, onClose }: ProfileSidebarHeaderProps) {
    return (
        <div>
            <Button variant="ghost" size="icon" onClick={onClose} className="mr-2">
                <ArrowLeft className="h-4 w-4" />
            </Button>
            <UsersContainer userData={userData} />
        </div>
    );
}
