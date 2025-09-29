import { MessageSchema } from '@/entities/message';
import { UsersSchema } from '@/entities/user';
import { z } from 'zod';
export const chatRoomSchema = z.object({
    id: z.uuid(),
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),
});

export type ChatRoom = z.infer<typeof chatRoomSchema>;

export const chatRoomPreviewSchema = z.object({
    id: z.uuid(),
    updatedAt: z.iso.datetime(),
    participant: UsersSchema,
    lastMessage: MessageSchema.nullable(),
    unreadCount: z.number().int().nonnegative(),
});

export const chatRoomListSchema = z.array(chatRoomPreviewSchema);
export type ChatRoomPreview = z.infer<typeof chatRoomPreviewSchema>;
export type ChatRoomList = z.infer<typeof chatRoomListSchema>;
