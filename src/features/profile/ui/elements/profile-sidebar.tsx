import type { Users } from '@/entities/user';
import { ProfileMenu } from './profile-menu';
import { ProfileSidebarFooter } from './profile-sidebar-footer';
import { ProfileSidebarHeader } from './profile-sidebar-header';
import { Sidebar } from '@/shared/shadcn-ui/ui/sidebar';

interface ProfileSidebarI {
    userData: Users;
    onClose: () => void;
}
export function ProfileSidebar({ userData, onClose }: ProfileSidebarI) {
    return (
        <Sidebar>
            <ProfileSidebarHeader userData={userData} onClose={onClose} />
            <ProfileMenu />
            <ProfileSidebarFooter />
        </Sidebar>
    );
}
