export type GetHistoryDto = {
    chatRoomId: string;
    limit: number;
    lastMessageId?: string;
    lastMessageCreatedAt?: string;
};
