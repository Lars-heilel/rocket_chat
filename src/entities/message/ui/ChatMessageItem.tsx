import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import type { Users } from '@/entities/user';
import { cn } from '@/shared/lib/utils';
import type { Message } from '../model';

interface ChatMessageItemProps extends React.ComponentProps<'div'> {
    message: Message;
    currentUser: Users;
    friend: Users;
}

export function ChatMessageItem({ message, currentUser, friend, ...props }: ChatMessageItemProps) {
    const isMyMessage = message.senderId === currentUser.id;
    const author = isMyMessage ? currentUser : friend;
    const messageTime = new Date(message.createAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div {...props} className="flex items-end gap-3">
            <Avatar className="h-8 w-8 border-2 border-amber-50 rounded-full  text-center ">
                <AvatarImage alt={author.name} />
                <AvatarFallback>{author.name.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <div>
                <div
                    className={cn(
                        'max-w-xs md:max-w-md rounded-lg px-4 py-2 text-sm',
                        'break-words',

                        isMyMessage ? 'bg-primary text-primary-foreground' : 'bg-muted',
                    )}
                >
                    <p>{message.content}</p>
                    <p className={cn('text-xs mt-1 text-right', isMyMessage ? 'text-primary-foreground/70' : 'text-muted-foreground/70')}>
                        {messageTime}
                    </p>
                </div>
            </div>
        </div>
    );
}
