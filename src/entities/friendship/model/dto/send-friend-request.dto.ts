import z from 'zod';
export const SendFriendRequestSchema = z.object({
    userId: z.uuid(),
});
export type SendFriendRequestDto = z.infer<typeof SendFriendRequestSchema>;
