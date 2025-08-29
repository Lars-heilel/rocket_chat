import { Avatar, AvatarFallback, AvatarImage } from '@components/avatar';
import { Button } from '@components/button';
import { ScrollArea } from '@components/scroll-area';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const friends = [
    { id: 1, name: 'Иван Иванов', avatar: 'https://github.com/ivan.png' },
    { id: 2, name: 'Мария Кузнецова', avatar: 'https://github.com/maria.png' },
    // ... другие друзья
];
export function ContactList({ contacts }: { contacts: typeof friends }) {
    return (
        <ScrollArea className="flex-1">
            <div className="flex flex-col gap-1 p-2">
                {contacts.map((contact) => (
                    <Button
                        key={contact.id}
                        variant="ghost"
                        className="h-auto w-full justify-start p-2"
                    >
                        <Avatar className="mr-2 h-8 w-8">
                            <AvatarImage src={contact.avatar} alt={contact.name} />
                            <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{contact.name}</span>
                    </Button>
                ))}
            </div>
        </ScrollArea>
    );
}
