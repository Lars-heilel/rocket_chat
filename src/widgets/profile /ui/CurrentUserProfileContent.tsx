import { LogOut } from 'lucide-react';
import { Command, CommandGroup, CommandItem, CommandList } from '@/shared/shadcn-ui/ui/command';
import { UsersContainer, type Users } from '@/entities/user';
import { ProfileEdit } from '@/features/profile/edit-profile/EditProfile';
import { ChangeTheme } from '@/features/setting/change-theme/ChangeTheme';

interface CurrentUserProfileContentProps {
    userData: Users;
}

export function CurrentUserProfileContent({ userData }: CurrentUserProfileContentProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="p-4">
                <UsersContainer userData={userData} />
            </div>
            <Command>
                <CommandList>
                    <CommandGroup heading="Settings">
                        <ProfileEdit />
                        <CommandItem>
                            <ChangeTheme />
                        </CommandItem>
                        <CommandItem className="text-red-500">
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </div>
    );
}
