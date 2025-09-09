import { Command, CommandGroup, CommandList, CommandSeparator } from '@components/command';
import { SidebarContent } from '@components/sidebar';

import { ChangeTheme } from './menu-elements/ChangeTheme';
import { ProfileEdit } from './menu-elements/EditProfile';
import { Logout } from './menu-elements/Logout';

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
