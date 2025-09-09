import * as React from 'react';

import { ViewProfile } from '@/feature/profile';

import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from '@components/sidebar';

import { ChatWidget } from '../messenger/ChatWidget';
import { SidebarContentPanelWidget } from '../messenger/SidebarContentPanelWidget';
export function MessengerLayout({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-screen overflow-hidden bg-background">
                <Sidebar {...props}>
                    <SidebarHeader>
                        <ViewProfile />
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarContentPanelWidget />
                    </SidebarContent>
                </Sidebar>
                <ChatWidget />
            </div>
        </SidebarProvider>
    );
}
