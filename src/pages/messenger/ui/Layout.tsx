import * as React from 'react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider } from '@/shared/shadcn-ui/ui/sidebar';
import { ChatWidget } from '@/widgets/chat-window';
import { ProfileWidget } from '@/widgets/profile /ProfileWidget';
import { AppInfo } from '@/shared/ui';
import { useGetMyProfileQuery } from '@/entities/user';
import { SidebarContentWidget } from '@/widgets/sidebar';

export function MessengerLayout({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { data: currentUser, isLoading, isSuccess } = useGetMyProfileQuery();
    return (
        <SidebarProvider>
            <div className="flex h-screen w-screen overflow-hidden bg-background">
                <Sidebar {...props}>
                    <SidebarHeader className="p-0">
                        <ProfileWidget isLoading={isLoading} isSuccess={isSuccess} currentUser={currentUser} />
                    </SidebarHeader>
                    <SidebarContent className="p-0">
                        <SidebarContentWidget />
                    </SidebarContent>
                    <SidebarFooter className="border-t p-3">
                        <AppInfo />
                    </SidebarFooter>
                </Sidebar>
                <ChatWidget />
            </div>
        </SidebarProvider>
    );
}
