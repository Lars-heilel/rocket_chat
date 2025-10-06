import * as React from 'react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider } from '@/shared/shadcn-ui/ui/sidebar';
import { ProfileWidget } from '@/widgets/profile /ProfileWidget';
import { AppInfo, Spinner } from '@/shared/ui';
import { SidebarContentWidget } from '@/widgets/sidebar';
export function MessengerLayout({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const LazyChatWidget = React.lazy(() => import('@/widgets/chat-window/ChatWidget').then((module) => ({ default: module.ChatWidget })));
    return (
        <SidebarProvider>
            <div className="flex h-screen w-screen overflow-hidden bg-background">
                <Sidebar {...props}>
                    <SidebarHeader className="p-0">
                        <ProfileWidget />
                    </SidebarHeader>
                    <SidebarContent className="p-0">
                        <SidebarContentWidget />
                    </SidebarContent>
                    <SidebarFooter className="border-t p-3">
                        <AppInfo />
                    </SidebarFooter>
                </Sidebar>
                <React.Suspense fallback={<Spinner />}>
                    <LazyChatWidget></LazyChatWidget>
                </React.Suspense>
            </div>
        </SidebarProvider>
    );
}
