import { ScrollArea } from '@components/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@components/avatar';
const messages = [
    {
        id: 1,
        sender: 'Иван Иванов',
        text: 'Привет! Как дела?',
        time: '10:30',
        own: false,
    },
    {
        id: 2,
        sender: 'Вы',
        text: 'Привет! Все отлично, спасибо!',
        time: '10:31',
        own: true,
    },
];

export function ChatMessages() {
    return (
        <ScrollArea className="flex-1">
            <div className="flex flex-col gap-4 p-4">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex items-end gap-2 ${
                            msg.own ? 'justify-end' : 'justify-start'
                        }`}
                    >
                        {!msg.own && (
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="https://github.com/ivan.png" />
                                <AvatarFallback>И</AvatarFallback>
                            </Avatar>
                        )}
                        <div
                            className={`max-w-xs rounded-lg p-3 ${
                                msg.own ? 'bg-primary text-primary-foreground' : 'bg-muted'
                            }`}
                        >
                            <p className="text-sm">{msg.text}</p>
                            <p className="mt-1 text-right text-xs text-muted-foreground">
                                {msg.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </ScrollArea>
    );
}
