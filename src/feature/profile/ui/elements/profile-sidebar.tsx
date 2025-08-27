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
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-background">
            <Sidebar>
                <ProfileSidebarHeader userData={userData} onClose={onClose} />
                <ProfileMenu />
                <ProfileSidebarFooter />
            </Sidebar>
        </div>
    );
}
