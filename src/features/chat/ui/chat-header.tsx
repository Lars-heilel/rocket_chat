import { SidebarTrigger } from '@/shared/shadcn-ui/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

export function ChatHeader({ contactName }: { contactName: string }) {
    return (
        <div className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="md:hidden" />
            <Avatar>
                <AvatarImage alt={contactName} />
                <AvatarFallback>{contactName.charAt(0)}</AvatarFallback>
            </Avatar>
            <h2 className="text-lg font-semibold">{contactName}</h2>
        </div>
    );
}
