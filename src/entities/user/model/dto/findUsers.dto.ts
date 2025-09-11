import z from 'zod';

export type FindUsersDto = {
    email?: string | undefined;
    name?: string | undefined;
    id?: string | undefined;
};
export const FindUserSchema = z.object({
    email: z.email().optional(),
    name: z.string().optional(),
    id: z.uuid().optional(),
});
