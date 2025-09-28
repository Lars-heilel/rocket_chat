import { ChatMessageItem, type Message } from '@/entities/message';
import type { Users } from '@/entities/user';
import { Spinner } from '@/shared/ui';
import type { RefObject } from 'react';

interface ChatMessagesProps {
    messages: Message[] | undefined;
    isLoading: boolean;
    isError: boolean;
    currentUser: Users;
    friend: Users;
    newMessageAnchorRef: RefObject<HTMLDivElement | null>;
    paginationTriggerRef: (node?: Element | null | undefined) => void;
    scrollContainerRef: RefObject<HTMLDivElement | null>;
}

export function ChatHistory({
    messages,
    isLoading,
    isError,
    currentUser,
    friend,
    paginationTriggerRef,
    scrollContainerRef,
    newMessageAnchorRef,
}: ChatMessagesProps) {
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
        if (messages && messages.length > 0) {
            return messages.map((message, index) => (
                <ChatMessageItem
                    ref={index === 0 ? paginationTriggerRef : null}
                    key={message.id}
                    message={message}
                    currentUser={currentUser}
                    friend={friend}
                />
            ));
        }
        return <div className="flex justify-center items-center h-full text-muted-foreground">No messages yet</div>;
    };

    return (
        <div ref={scrollContainerRef} className=" overflow-auto p-4 space-y-4">
            {renderContent()}
            <div ref={newMessageAnchorRef} />
        </div>
    );
}
