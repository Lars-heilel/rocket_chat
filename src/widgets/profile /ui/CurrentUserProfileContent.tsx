import { UsersContainer, type Users } from '@/entities/user';
import { Logout } from '@/features/auth/logout';
import { ChangeTheme } from '@/features/profile-action/change-theme';
import { ProfileEditButton } from '@/features/profile-action/edit-profile';
import { Command, CommandList, CommandGroup } from '@/shared/shadcn-ui';

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
                        <ProfileEditButton />
                        <ChangeTheme />
                        <Logout />
                    </CommandGroup>
                </CommandList>
            </Command>
        </div>
    );
}
