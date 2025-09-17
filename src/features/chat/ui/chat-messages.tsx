import { ScrollArea, ScrollAreaViewport } from '@radix-ui/react-scroll-area';
import { ChatMessageItem, useChatHistoryQuery } from '@/entities/message';
import { type Users } from '@/entities/user';
import { Spinner } from '@/shared/ui';
import { useEffect, useRef } from 'react';
interface ChatMessageProps {
    currentUser: Users;
    friend: Users;
    roomId: string;
}

export function ChatMessages({ currentUser, friend, roomId }: ChatMessageProps) {
    const { data: messages, isLoading, isError } = useChatHistoryQuery({ chatRoomId: roomId, limit: 20 });
    const bottonTriggerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (bottonTriggerRef.current) {
            bottonTriggerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [messages]);
    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="flex justify-center items-center h-full">
                    <Spinner />
                </div>
            );
        }
        if (isError) {
            return <div className="flex justify-center items-center h-full text-destructive">There was an error loading messages</div>;
        }
        if (messages && messages.length > 0) {
            const sortedMessages = [...messages].sort((a, b) => new Date(a.createAt).getTime() - new Date(b.createAt).getTime());

            return sortedMessages.map((message) => (
                <ChatMessageItem key={message.id} message={message} currentUser={currentUser} friend={friend} />
            ));
        }
        return <div className="flex justify-center items-center h-full text-muted-foreground">no messages yet</div>;
    };

    return (
        <ScrollArea className="flex-1 overflow-auto">
            
                <div className="p-4 space-y-4">
                    {renderContent()} <div ref={bottonTriggerRef}></div>
                </div>
           
        </ScrollArea>
    );
}
