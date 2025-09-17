import { UsersContainer, type Users } from '@/entities/user';
import { SidebarTrigger } from '@/shared/shadcn-ui/ui/sidebar';
import { ArrowRight } from 'lucide-react';
interface ChatHeaderProps {
    userData?: Users;
}
export function ChatHeader({ userData }: ChatHeaderProps) {
    return (
        <div className="flex justify-between h-16 shrink-0 items-center gap-2 border-b px-4">
            {userData ? <UsersContainer userData={userData}></UsersContainer> : null}
            <div className="flex items-center gap-4 md:hidden ">
                <p>Sidebar</p>
                <ArrowRight></ArrowRight>
                <SidebarTrigger />
            </div>
        </div>
    );
}
