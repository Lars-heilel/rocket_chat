import { useGetMyProfileQuery } from '@/entities/user';
import { useAppSelector } from '@/shared/lib/redux/use-redux-hooks';

import { ChatHeader } from '../chat-header';
import { ChatInput } from '../chat-input';
import { ChatMessages } from '../chat-messages';

export function ChatWindow() {
    const { selectedChatId, friendData } = useAppSelector((state) => state.chatRoom);
    const { data: currentUser } = useGetMyProfileQuery();
    const renderContent = () => {
        if (!selectedChatId) {
            return (
                <div className="flex  h-full flex-col items-center justify-center bg-muted/50">
                    <p>Выберите чат, чтобы начать общение</p>
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
