export interface ChatRoomIdInterface {
    currentUserId: string;
    friendId: string;
}
export function generateChatRoomId({ currentUserId, friendId }: ChatRoomIdInterface): string {
    const sortedIds = [currentUserId, friendId].sort();
    return sortedIds.join('&');
}
