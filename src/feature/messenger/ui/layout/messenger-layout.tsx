import { AppSidebar } from "@/feature/messenger/components/app-sidebar";
import { SidebarProvider } from "@components/sidebar";
import { ChatWindow } from "../../components/chat";
export default function MessengerLayout() {
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
