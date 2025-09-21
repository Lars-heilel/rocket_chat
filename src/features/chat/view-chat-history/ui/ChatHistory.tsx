import type { RefObject } from 'react';
import { ChatMessageItem, type Message } from '@/entities/message';
import type { Users } from '@/entities/user';
import { ScrollArea } from '@/shared/shadcn-ui/ui/scroll-area';
import { Spinner } from '@/shared/ui';

interface ChatMessagesProps {
    messages: Message[];
    isLoading: boolean;
    isError: boolean;
    currentUser: Users;
    friend: Users;
    bottomTriggerRef: RefObject<HTMLDivElement | null>;
}

export function ChatHistory({ messages, isLoading, isError, currentUser, friend, bottomTriggerRef }: ChatMessagesProps) {
    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="flex justify-center items-center h-full">
                    <Spinner />
                </div>
            );
        }
        if (isError) {
            return <div className="flex justify-center items-center h-full text-destructive">Error loading messages</div>;
        }
        if (messages.length > 0) {
            return messages.map((message) => (
                <ChatMessageItem key={message.id} message={message} currentUser={currentUser} friend={friend} />
            ));
        }
        return <div className="flex justify-center items-center h-full text-muted-foreground">No messages yet</div>;
    };

    return (
        <ScrollArea className="flex-1 overflow-auto">
            <div className="p-4 space-y-4">
                {renderContent()}
                <div ref={bottomTriggerRef} />
            </div>
        </ScrollArea>
    );
}
