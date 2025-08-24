import { UserPlus, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/tabs';
import { ContactList } from '@/feature/friends/contacts';
// Моковые данные для примера
const friends = [
    { id: 1, name: 'Иван Иванов', avatar: 'https://github.com/ivan.png' },
    { id: 2, name: 'Мария Кузнецова', avatar: 'https://github.com/maria.png' },
    // ... другие друзья
];

const friendRequests = [{ id: 3, name: 'Петр Петров', avatar: 'https://github.com/petr.png' }];

export function FirendsSwitch() {
    return (
        <Tabs defaultValue="friends" className="flex h-full flex-col">
            <TabsList className="mx-2 grid w-auto grid-cols-2">
                <TabsTrigger value="friends">
                    <Users className="mr-2 h-4 w-4" />
                    Друзья
                </TabsTrigger>
                <TabsTrigger value="requests">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Запросы
                </TabsTrigger>
            </TabsList>
            <TabsContent value="friends" className="flex-1 overflow-y-auto">
                <ContactList contacts={friends} />
            </TabsContent>
            <TabsContent value="requests" className="flex-1 overflow-y-auto">
                <ContactList contacts={friendRequests} />
            </TabsContent>
        </Tabs>
    );
}
