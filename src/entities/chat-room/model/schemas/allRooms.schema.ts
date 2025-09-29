import { MessageSchema } from '@/entities/message';
import { UsersSchema } from '@/entities/user';
import z from 'zod';

export const allChatRoomSchema = z.object({
    id: z.uuid(),
    updatedAt: z.iso.datetime(),
    participant: UsersSchema,
    lastMessage: MessageSchema.nullable(),
    unreadCount: z.number().int().nonnegative(),
});
export type AllChatRoom = z.infer<typeof allChatRoomSchema>;
