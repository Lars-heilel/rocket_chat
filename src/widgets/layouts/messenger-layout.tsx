import * as React from 'react';
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from '@components/sidebar';
import { ChatWidget } from '../messenger/ChatWidget';
import { SidebarContentPanelWidget } from '../messenger/SidebarContentPanelWidget';
import { SidebarHeaderWidget } from '../messenger/SidebarHeaderWidget';
export function MessengerLayout({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-screen overflow-hidden bg-background">
                <Sidebar {...props}>
                    <SidebarHeader className="p-2">
                        <SidebarHeaderWidget />
                    </SidebarHeader>
                    <SidebarContent className="p-0">
                        <SidebarContentPanelWidget />
                    </SidebarContent>
                </Sidebar>
                <ChatWidget />
            </div>
        </SidebarProvider>
    );
}
