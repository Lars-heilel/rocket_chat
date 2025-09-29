import { selectedChatRoom, type ChatRoomPreview } from '@/entities/chat-room';
import { socketService } from '@/shared/api';
import { useAppDispatch } from '@/shared/lib';
import { toast } from 'sonner';

export function useSelectChatRoom() {
    const dispatch = useAppDispatch();
    const handleSelectChatRoom = async (roomData: ChatRoomPreview) => {
        if (!roomData) {
            return toast.error('Could not open chat. Please try again.');
        }
        try {
            socketService.joinRoom(roomData.id);
            dispatch(selectedChatRoom({ roomId: roomData.id, friend: roomData.participant }));
        } catch (error) {
            toast.error('Could not open chat. Please try again.');
            console.error('Failed to get or create private room', error);
        }
    };
    return { handleSelectChatRoom };
}
