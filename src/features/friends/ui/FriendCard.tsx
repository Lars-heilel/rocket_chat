import { useMemo } from 'react';

import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';

import { selectedChatRoom, useLazyGetPrivateRoomQuery } from '@/entities/chat-room';
import { useGetMyProfileQuery, UsersContainer } from '@/entities/user';
import { Button } from '@/shared/components/ui/button';
import { useAppDispatch } from '@/shared/hooks/use-redux-hooks';
import { Logger } from '@/shared/lib/logger';

import { useDeleteFriendMutation } from '../model/store/friendship-api-slice';

import type { FriendshipWithUsers } from '../model/schemas/friendship.schema';





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
        <div onClick={() => handleSelectChatRoom()} className="flex items-center justify-between rounded-md p-2 hover:bg-muted/50">
            <UsersContainer userData={friend} />
            <Button
                size="icon"
                variant="ghost"
                onClick={(e) => {
                    e.stopPropagation();
                    handleDelete();
                }}
                disabled={isLoading}
                aria-label="Delete friend"
            >
                <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
        </div>
    );
}
