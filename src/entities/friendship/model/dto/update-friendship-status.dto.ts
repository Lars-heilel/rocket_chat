import z from 'zod';

const UpdateFriendshipStatusBodySchema = z.object({
    type: z.enum(['ACCEPTED', 'REJECTED']),
});

export const UpdateFriendshipStatusSchema = z.object({
    friendshipId: z.string(),
    body: UpdateFriendshipStatusBodySchema,
});

export type UpdateFriendshipStatusDto = z.infer<typeof UpdateFriendshipStatusSchema>;
