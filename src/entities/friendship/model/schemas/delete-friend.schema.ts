import z from 'zod';

export const deleteFriendResponseSchema = z.object({
    message: z.string(),
});
export type DeleteFriendResponse = z.infer<typeof deleteFriendResponseSchema>;
