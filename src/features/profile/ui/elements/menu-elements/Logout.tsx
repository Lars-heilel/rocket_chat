import { LogOut } from 'lucide-react';
import { useDisclosure } from '@/shared/lib/hooks/use-disclosure';
import { LogoutConfirmDialog } from './LogoutConfirmDialog';
import { useLogout } from '@/features/auth';
import { CommandItem } from '@/shared/shadcn-ui/ui/command';

export function Logout() {
    const { hanldeLogout, isLoading } = useLogout();
    const { isOpen, open, close } = useDisclosure();

    return (
        <>
            <CommandItem onSelect={open} className="text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
            </CommandItem>
            <LogoutConfirmDialog isOpen={isOpen} onClose={close} onConfirm={hanldeLogout} isLoading={isLoading} />
        </>
    );
}
