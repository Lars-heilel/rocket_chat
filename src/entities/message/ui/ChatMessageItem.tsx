import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

import type { Users } from '@/entities/user';
import { cn } from '@/shared/lib/utils';
import type { MessageResponse } from '../model';

interface ChatMessageItemProps {
    message: MessageResponse;
    currentUser: Users;
    friend: Users;
}

export function ChatMessageItem({ message, currentUser, friend }: ChatMessageItemProps) {
    const isMyMessage = message.senderId === currentUser.id;
    const author = isMyMessage ? currentUser : friend;
    const messageTime = new Date(message.createAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className={cn('flex items-end gap-3', isMyMessage ? 'justify-end' : 'justify-start')}>
            {!isMyMessage && (
                <Avatar className="h-8 w-8">
                    <AvatarImage alt={author.name} />
                    <AvatarFallback>{author.name.substring(0, 1)}</AvatarFallback>
                </Avatar>
            )}
            <div
                className={cn(
                    'max-w-xs md:max-w-md rounded-lg px-4 py-2 text-sm',
                    isMyMessage ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none',
                )}
            >
                <p>{message.content}</p>
                <p
                    className={cn(
                        'text-xs mt-1',
                        isMyMessage ? 'text-primary-foreground/70' : 'text-muted-foreground/70',
                        isMyMessage ? 'text-right' : 'text-left',
                    )}
                >
                    {messageTime}
                </p>
            </div>

            {isMyMessage && (
                <Avatar className="h-8 w-8">
                    <AvatarImage alt={author.name} />
                    <AvatarFallback>{author.name.substring(0, 1)}</AvatarFallback>
                </Avatar>
            )}
        </div>
    );
}
