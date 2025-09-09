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

export const SendFriendRequestSchema = z.object({
    userId: z.uuid({ message: 'Неверный формат ID пользователя' }),
});

export const UpdateFriendshipStatusSchema = z.object({
    type: z.enum(['ACCEPTED', 'REJECTED']),
});

export type Friendship = z.infer<typeof FriendshipSchema>;
export type FriendshipWithUsers = z.infer<typeof FriendshipWithUsersSchema>;
export type SendFriendRequestDto = z.infer<typeof SendFriendRequestSchema>;
export type UpdateFriendshipStatusDto = z.infer<typeof UpdateFriendshipStatusSchema>;
