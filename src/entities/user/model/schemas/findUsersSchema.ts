import { z } from 'zod';
export const FindUserSchema = z.object({
    email: z.email().optional(),
    name: z.string().optional(),
    id: z.string().optional(),
});
export type FindUsersDto = z.infer<typeof FindUserSchema>;
