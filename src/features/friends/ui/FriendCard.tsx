import { useMemo } from 'react';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { selectedChatRoom, useLazyGetPrivateRoomQuery } from '@/entities/chat-room';
import { useGetMyProfileQuery, UsersContainer } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/redux/use-redux-hooks';
import { Logger } from '@/shared/lib/logger';
import { useDeleteFriendMutation } from '../../../entities/friendship/model/api';
import type { FriendshipWithUsers } from '../../../entities/friendship/model/schemas/friendship.schema';
import { Button } from '@/shared/shadcn-ui/ui/button';

interface FriendCardProps {
    friendship: FriendshipWithUsers;
}

export function FriendCard({ friendship }: FriendCardProps) {
    const logger = useMemo(() => new Logger('FriendCard'), []);
    const [deleteFriend, { isLoading }] = useDeleteFriendMutation();
    const { data: currentUser } = useGetMyProfileQuery();
    const friend = friendship.requesterId === currentUser?.id ? friendship.addressee : friendship.requester;
    const dispatch = useAppDispatch();
    const handleDelete = () => {
        deleteFriend({ friendshipId: friendship.id });
    };
    const [getChatRoom, { isLoading: isRoomLoading }] = useLazyGetPrivateRoomQuery();
    const handleSelectChatRoom = async () => {
        if (!currentUser && friend) {
            logger.error(`данные о пользователях не получены `);
            return;
        }
        if (isRoomLoading) {
            return;
        }
        try {
            const roomId = await getChatRoom({ friendId: friend.id }).unwrap();
            logger.log(
                `Id комнаты ${JSON.stringify(roomId)} Мои данные ${JSON.stringify(currentUser)},данные друга:${JSON.stringify(friend)}`,
            );

            dispatch(selectedChatRoom({ roomId: roomId.id, friend }));
        } catch (error) {
            toast.error('Could not open chat. Please try again.');
            console.error('Failed to get or create private room', error);
        }
    };
    return (
        <div
            onClick={() => handleSelectChatRoom()}
            className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-muted/50 transition-colors"
        >
            <div className="flex items-center gap-3">
                <UsersContainer userData={friend} />
            </div>
            <Button
                size="sm"
                variant="ghost"
                onClick={(e) => {
                    e.stopPropagation();
                    handleDelete();
                }}
                disabled={isLoading}
                aria-label="Delete friend"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
        </div>
    );
}
