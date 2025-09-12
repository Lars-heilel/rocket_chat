import { z } from 'zod';

import { UsersSchema } from '@/entities/user';
export const FriendshipStatusSchema = z.enum(['PENDING', 'ACCEPTED', 'REJECTED']);

export const FriendshipSchema = z.object({
    id: z.uuid(),
    requesterId: z.uuid(),
    addresseeId: z.uuid(),
    status: FriendshipStatusSchema,
    createAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),
});

export const FriendshipWithUsersSchema = FriendshipSchema.extend({
    requester: UsersSchema,
    addressee: UsersSchema,
});
export const FriendshipWithUsersArraySchema = z.array(FriendshipWithUsersSchema);

export type Friendship = z.infer<typeof FriendshipSchema>;
export type FriendshipWithUsers = z.infer<typeof FriendshipWithUsersSchema>;
