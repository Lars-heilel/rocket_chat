import { AppSidebar } from '@/feature/messenger/components/app-sidebar';
import { ChatWindow } from '@/feature/messenger/components/chat';
import { SidebarProvider } from '@components/sidebar';

export function Component() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden bg-background">
        <AppSidebar />
        <main className="flex flex-1 flex-col">
          <ChatWindow />
        </main>
      </div>
    </SidebarProvider>
  );
}
