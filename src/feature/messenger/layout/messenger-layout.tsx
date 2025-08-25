import * as React from 'react';
import { SearchForm } from '@/feature/messenger/search/search-form';
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from '@components/sidebar';
import { MyProfileComponent } from '@/feature/messenger/profile/components/profile-component';
import { FirendsSwitch } from '../friends/friends-switch';
import { ChatWindow } from '../chat/components/chat';

export function MessengerLayout({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-screen overflow-hidden bg-background">
                <Sidebar {...props}>
                    <SidebarHeader className="p-2">
                        <MyProfileComponent />
                        <SearchForm />
                    </SidebarHeader>
                    <SidebarContent className="p-0">
                        <FirendsSwitch />
                    </SidebarContent>
                </Sidebar>
                <main className="flex flex-1 flex-col">
                    <ChatWindow />
                </main>
            </div>
        </SidebarProvider>
    );
}
