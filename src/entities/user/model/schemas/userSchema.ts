import z from 'zod';

export const UsersSchema = z.object({
    id: z.uuid(),
    email: z.email(),
    name: z.string(),
    isConfirmed: z.boolean(),
    createdAt: z.iso.datetime(),
});
export type Users = z.infer<typeof UsersSchema>;
