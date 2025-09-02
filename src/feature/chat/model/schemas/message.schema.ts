import z from 'zod';

export const MessageSchema = z.object({
    id: z.string().min(1, 'ID is required'),
    content: z.string().min(1, 'Content is required'),
    createAt: z.date(),
    senderId: z.string().min(1, 'Sender ID is required'),
    receiverId: z.string().min(1, 'Receiver ID is required'),
    updatedAt: z.date(),
    read: z.boolean(),
});
export type Message = z.infer<typeof MessageSchema>;
