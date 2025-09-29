import { z } from 'zod';
export const sendMessageSchema = z.object({
    content: z
        .string()
        .trim()
        .min(1, { message: 'Message cannot be empty.' })
        .max(2000, { message: 'Message cannot exceed 2000 characters.' }),
});

export type SendMessageDto = z.infer<typeof sendMessageSchema>;
