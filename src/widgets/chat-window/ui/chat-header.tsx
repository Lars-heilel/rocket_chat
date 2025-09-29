import { UsersContainer, type Users } from '@/entities/user';
import { SidebarTrigger } from '@/shared/shadcn-ui/ui/sidebar';

interface ChatHeaderProps {
    userData?: Users;
}
export function ChatHeader({ userData }: ChatHeaderProps) {
    return (
        <div className="flex justify-start h-16 p-6  items-center gap-2 border-b px-4">
            <SidebarTrigger />
            {userData ? <UsersContainer userData={userData}></UsersContainer> : null}
        </div>
    );
}
