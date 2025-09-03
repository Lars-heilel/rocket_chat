import { ScrollArea } from '@components/scroll-area';
import { useChatHistoryQuery } from '../model';
import { Spiner } from '@/shared/components/ui/spiner';
import { UsersContainer, type Users } from '@/entities/user';
interface ChatMessageProps {
    currentUser: Users;
    friend: Users;
}
export function ChatMessages({ currentUser, friend }: ChatMessageProps) {
    const {
        currentData,
        data: newMessageArray,
        isLoading,
        isError,
    } = useChatHistoryQuery({ userId: currentUser.id, secondUserId: friend.id, limit: 20 });
    const renderContent = () => {
        if (isLoading) {
            return <Spiner />;
        }
        if (isError) <div>Ошибка загрузки сообщений</div>;
        if (newMessageArray) {
            return newMessageArray.map((message) => {
                const isMyMessage = message.senderId === currentUser.id;
                return (
                    <div key={message.id}>
                        {isMyMessage ? <UsersContainer userData={currentUser} /> : <UsersContainer userData={friend} />}
                        <p>{message.content}</p>
                    </div>
                );
            });
        }
        return currentData?.map((message) => {
            const isMyMessage = message.senderId === currentUser.id;
            return (
                <div key={message.id}>
                    {isMyMessage ? <UsersContainer userData={currentUser} /> : <UsersContainer userData={friend} />}
                    <p>{message.content}</p>
                </div>
            );
        });
    };
    return (
        <ScrollArea className="flex-1">
            <div className="flex flex-col gap-4 p-4">{renderContent()}</div>
        </ScrollArea>
    );
}
