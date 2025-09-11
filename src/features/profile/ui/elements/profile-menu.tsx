import { SidebarContent } from '@/shared/shadcn-ui/ui/sidebar';
import { ChangeTheme } from './menu-elements/ChangeTheme';
import { ProfileEdit } from './menu-elements/EditProfile';
import { Logout } from './menu-elements/Logout';
import { Command, CommandGroup, CommandList, CommandSeparator } from '@/shared/shadcn-ui/ui/command';

export function ProfileMenu() {
    return (
        <SidebarContent>
            <Command>
                <CommandList>
                    <CommandGroup heading="Setting">
                        <ProfileEdit />
                        <ChangeTheme />
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup>
                        <Logout />
                    </CommandGroup>
                </CommandList>
            </Command>
        </SidebarContent>
    );
}
