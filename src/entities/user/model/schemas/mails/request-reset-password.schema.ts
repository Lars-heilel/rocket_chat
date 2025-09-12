import { z } from 'zod';

export const RequestResetPasswordSchema = z.object({
    email: z.email('example@email.com'),
});
export type RequestResetPasswordFormData = z.infer<typeof RequestResetPasswordSchema>;
