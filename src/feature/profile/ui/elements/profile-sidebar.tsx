import { Sidebar } from '@components/sidebar';

import { ProfileMenu } from './profile-menu';
import { ProfileSidebarFooter } from './profile-sidebar-footer';
import type { Users } from '@/entities/user';
import { ProfileSidebarHeader } from './profile-sidebar-header';

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
