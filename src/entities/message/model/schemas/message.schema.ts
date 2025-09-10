import z from 'zod';
import { UsersSchema } from '@/entities/user';
export const MessageSchema = z.object({
    id: z.uuid(),
    content: z.string().min(1, 'Content is required'),
    createAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),

    senderId: z.uuid(),
    chatRoomId: z.uuid(),
    read: z.boolean(),
    sender: UsersSchema,
});
export type Message = z.infer<typeof MessageSchema>;
