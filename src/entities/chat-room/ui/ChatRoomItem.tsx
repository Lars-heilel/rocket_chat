import { UsersContainer, type Users } from '@/entities/user';
import { useSelectChatRoom, type ChatRoomPreview } from '../model';
import { ListItemWrapper } from '@/shared/ui/List';

interface ChatRoomItemProp extends React.ComponentProps<'div'> {
    chatRoomData: ChatRoomPreview;
    currentUser: Users;
}

export function ChatRoomItem({ chatRoomData, currentUser }: ChatRoomItemProp) {
    const { participant, lastMessage } = chatRoomData;
    const { handleSelectChatRoom } = useSelectChatRoom();
    const lastMessageSender = lastMessage?.senderId === currentUser.id;
    return (
        <ListItemWrapper
            onClick={() => {
                handleSelectChatRoom(chatRoomData);
            }}
        >
            <div className=" flex gap-5 items-center">
                <UsersContainer userData={participant} />
                {/* <p className="h-6 w-6 rounded-full bg-gray-500 dark:bg-white dark:text-black flex justify-center items-center">
                    {unreadCount}
                </p> */}
            </div>

            <div className="flex items-center gap-2">
                <p className="text-xm  text-center">{lastMessageSender ? 'me:' : `${participant.name.slice(0, 4)}:`}</p>
                <p className="text-sm text-muted-foreground truncate">{`${lastMessage?.content.slice(0, 19)}...`}</p>
            </div>
        </ListItemWrapper>
    );
}
