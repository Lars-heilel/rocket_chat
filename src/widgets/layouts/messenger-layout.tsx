import * as React from 'react';
import { SidebarContentPanelWidget } from '../messenger/SidebarContentPanelWidget';
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from '@/shared/shadcn-ui/ui/sidebar';
import { ViewProfile } from '@/features/profile';
import { ChatWidget } from '../chat-widget/ChatWidget';
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
