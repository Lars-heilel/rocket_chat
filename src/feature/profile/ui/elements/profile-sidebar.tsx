import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@components/sidebar';
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@components/command';
import { Button } from '@/shared/components/ui/button';
import { ArrowLeft, Edit, LogOut, Palette } from 'lucide-react';
import { ModeToggle } from '@/shared/components/ui/mode-toggle';
import type { Users } from '@/entities/user/model';
import { UsersContainer } from '@/entities/user/ui';
interface ProfileSidebarI {
    userData: Users;
    onClose: () => void;
}
export function ProfileSidebar({ userData, onClose }: ProfileSidebarI) {
    return (
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-background">
            <Sidebar>
                <SidebarHeader className="flex items-center p-2 border-b">
                    <Button variant="ghost" size="icon" onClick={onClose} className="mr-2">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <UsersContainer userData={userData} />
                </SidebarHeader>
                <SidebarContent>
                    <Command>
                        <CommandList>
                            <CommandGroup heading="Setting">
                                <CommandItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    <span>Edit profile</span>
                                </CommandItem>
                                <CommandItem>
                                    <Palette className="mr-2 h-4 w-4" />
                                    <span>Change theme</span>
                                </CommandItem>
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup>
                                <CommandItem className="text-destructive">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>LogOut</span>
                                </CommandItem>
                                <ModeToggle />
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </SidebarContent>

                <SidebarFooter className="border-t">
                    <div className="flex flex-col p-3">
                        <span className="font-bold">Rocket-chat</span>
                        <p className="text-sm text-muted-foreground">v 1.4.88</p>
                    </div>
                </SidebarFooter>
            </Sidebar>
        </div>
    );
}
