import { ScrollArea } from '@radix-ui/react-scroll-area';

import { ChatMessageItem, useChatHistoryQuery } from '@/entities/message';
import { type Users } from '@/entities/user';
import { Spiner } from '@/shared/components/ui/spiner';


interface ChatMessageProps {
    currentUser: Users;
    friend: Users;
    roomId: string;
}

export function ChatMessages({ currentUser, friend, roomId }: ChatMessageProps) {
    const { data: messages, isLoading, isError } = useChatHistoryQuery({ chatRoomId: roomId, limit: 20 });
    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="flex justify-center items-center h-full">
                    <Spiner />
                </div>
            );
        }
        if (isError) {
            return <div className="flex justify-center items-center h-full text-destructive">Ошибка загрузки сообщений</div>;
        }
        if (messages && messages.length > 0) {
            const sortedMessages = [...messages].sort((a, b) => new Date(a.createAt).getTime() - new Date(b.createAt).getTime());

            return sortedMessages.map((message) => (
                <ChatMessageItem key={message.id} message={message} currentUser={currentUser} friend={friend} />
            ));
        }
        return <div className="flex justify-center items-center h-full text-muted-foreground">Сообщений пока нет</div>;
    };

    return (
        <ScrollArea className="flex-1 overflow-auto">
            <div className="p-4 sm:p-6  space-y-4">{renderContent()}</div>
        </ScrollArea>
    );
}
