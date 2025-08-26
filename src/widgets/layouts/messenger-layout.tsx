import * as React from 'react';
import { SearchForm } from '@/feature/messenger/search/search-form';
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from '@components/sidebar';
import { FirendsSwitch } from '../../feature/messenger/friends/friends-switch';
import { ChatWindow } from '../../feature/messenger/chat/components/chat';
import { ViewProfile } from '@/feature/profile/ui/components/view-profile';

export function MessengerLayout({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-screen overflow-hidden bg-background">
                <Sidebar {...props}>
                    <SidebarHeader className="p-2">
                        <ViewProfile />
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
