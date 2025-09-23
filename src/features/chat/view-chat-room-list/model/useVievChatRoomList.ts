import { useGetAllRoomsQuery } from '@/entities/chat-room';
import { useMemo } from 'react';

export function useViewChatRoomList() {
    const { data: chatRoomData, isError, isLoading } = useGetAllRoomsQuery();
    const rooms = useMemo(() => {
        if (!chatRoomData) {
            return [];
        }
        return [...chatRoomData];
    }, [chatRoomData]);
    return { rooms, isError, isLoading };
}
