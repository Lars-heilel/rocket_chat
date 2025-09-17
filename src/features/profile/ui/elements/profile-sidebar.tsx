import { ProfileMenu } from './profile-menu';
import { ProfileSidebarFooter } from './profile-sidebar-footer';
import { ProfileSidebarHeader } from './profile-sidebar-header';
import { Sidebar } from '@/shared/shadcn-ui/ui/sidebar';

interface ProfileSidebarI {
    onClose: () => void;
}
export function ProfileSidebar({ onClose }: ProfileSidebarI) {
    return (
        <Sidebar>
            <ProfileSidebarHeader onClose={onClose} />
            <ProfileMenu />
            <ProfileSidebarFooter />
        </Sidebar>
    );
}
