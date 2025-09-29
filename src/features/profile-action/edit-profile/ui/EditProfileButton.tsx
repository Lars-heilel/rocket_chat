import { Edit, Loader2 } from 'lucide-react';
import { useGetMyProfileQuery } from '@/entities/user';
import { useDisclosure } from '@/shared/lib/hooks/use-disclosure';

import { CommandItem } from '@/shared/shadcn-ui/ui/command';
import { EditProfileDialog } from './EditProfileDialog';

export function ProfileEditButton() {
    const { data: userData, isLoading } = useGetMyProfileQuery();
    const { isOpen, open, close } = useDisclosure();

    if (isLoading) {
        return (
            <CommandItem disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Loading...</span>
            </CommandItem>
        );
    }

    if (!userData) {
        return null;
    }
    return (
        <>
            <CommandItem onSelect={open}>
                <Edit className="mr-2 h-4 w-4" />
                <span>Edit profile</span>
            </CommandItem>

            <EditProfileDialog isOpen={isOpen} onClose={close} userData={userData} />
        </>
    );
}
