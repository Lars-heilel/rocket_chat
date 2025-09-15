import { useGetMyProfileQuery } from '@/entities/user';
import { useAppSelector } from '@/shared/lib/redux/use-redux-hooks';

import { ChatHeader } from '../chat-header';
import { ChatInput } from '../chat-input';
import { ChatMessages } from '../chat-messages';
import { SidebarTrigger } from '@/shared/shadcn-ui/ui/sidebar';

export function ChatWindow() {
    const { selectedChatId, friendData } = useAppSelector((state) => state.chatRoom);
    const { data: currentUser } = useGetMyProfileQuery();
    const renderContent = () => {
        if (!selectedChatId) {
            return (
                <div className="min-h-screen flex flex-col justify-between items-center">
                    <div className="border-2 w-full p-4 flex justify-end">
                        <SidebarTrigger></SidebarTrigger>
                    </div>
                    <div className="flex-grow flex items-center justify-center">
                        <p>Select chat to start chatting</p>
                    </div>
                </div>
            );
        }
        if (currentUser)
            if (friendData) {
                return (
                    <div className="flex h-screen flex-col">
                        <ChatHeader contactName={friendData?.name} />
                        <ChatMessages roomId={selectedChatId} currentUser={currentUser} friend={friendData} />
                        <ChatInput />
                    </div>
                );
            }
    };

    return renderContent();
}
