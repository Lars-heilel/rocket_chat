import { z } from 'zod';

export const chatRoomSchema = z.object({
    id: z.uuid(),
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),
});

export type ChatRoomResponse = z.infer<typeof chatRoomSchema>;
