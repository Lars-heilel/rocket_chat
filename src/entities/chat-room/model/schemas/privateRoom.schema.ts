import { z } from 'zod';

export const ChatRoomResponseSchema = z.object({
    id: z.uuid(),
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),
});
export type ChatRoomResponse = z.infer<typeof ChatRoomResponseSchema>;

export type ChatRoomDto = {
    friendId: string;
};
