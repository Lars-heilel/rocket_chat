import { CommandItem } from '@/shared/components/ui/command';
import { useDisclosure } from '@/shared/hooks/use-disclosure';
import { LogOut } from 'lucide-react';
import { LogoutConfirmDialog } from './LogoutConfirmDialog';
import { useLogout } from '@/feature/auth';

export function Logout() {
    const { hanldeLogout, isLoading } = useLogout();
    const { isOpen, open, close } = useDisclosure();

    return (
        <>
            <CommandItem onSelect={open} className="text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
            </CommandItem>
            <LogoutConfirmDialog
                isOpen={isOpen}
                onClose={close}
                onConfirm={hanldeLogout}
                isLoading={isLoading}
            />
        </>
    );
}
