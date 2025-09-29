import { ChatRoomItem, type ChatRoomPreview } from '@/entities/chat-room';
import type { Users } from '@/entities/user';

import { EmptyStateList, ResourceList } from '@/shared/ui/List';
import { Frown, MessageSquare } from 'lucide-react';

interface ChatRoomlistProps extends React.ComponentProps<'div'> {
    isLoading: boolean;
    isError: boolean;
    chatRooms: ChatRoomPreview[];
    currentUser: Users;
}

export default function ChatRoomlist({ isError, isLoading, chatRooms, currentUser }: ChatRoomlistProps) {
    return (
        <ResourceList
            isLoading={isLoading}
            isError={isError}
            data={chatRooms}
            errorState={
                <EmptyStateList icon={<Frown />} title="Sorry, there was an error loading your chats." className="text-destructive" />
            }
            emptyState={<EmptyStateList icon={<MessageSquare />} title="No active chats yet" />}
            renderItem={(chat) => <ChatRoomItem currentUser={currentUser} key={chat.id} chatRoomData={chat} />}
        />
    );
}
