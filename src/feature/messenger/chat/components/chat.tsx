import { ChatHeader } from '../ui/chat-header';
import { ChatInput } from '../ui/chat-input';
import { ChatMessages } from '../ui/chat-messages';

export function ChatWindow() {
    const selectedChat = {
        name: 'Иван Иванов',
        avatar: 'https://github.com/ivan.png',
    };

    if (!selectedChat) {
        return (
            <div className="flex  h-full flex-col items-center justify-center bg-muted/50">
                <p>Выберите чат, чтобы начать общение</p>
            </div>
        );
    }

    return (
        <div className="flex h-screen flex-col">
            <ChatHeader contactName={selectedChat.name} contactAvatar={selectedChat.avatar} />
            <ChatMessages />
            <ChatInput />
        </div>
    );
}
