import z from 'zod';

export const UsersResponseSchema = z.object({
    id: z.uuid(),
    email: z.email(),
    name: z.string(),
    isConfirmed: z.boolean(),
    createdAt: z.iso.datetime(),
});
export type UsersResponse = z.infer<typeof UsersResponseSchema>;
