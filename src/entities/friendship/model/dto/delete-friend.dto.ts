import z from 'zod';

export const DeleteFriendSchema = z.object({
    friendshipId: z.string(),
});
export type DeleteFriendDto = z.infer<typeof DeleteFriendSchema>;
