import { z } from 'zod';
export const resendVerifyEmailSchema = z.object({
    email: z.email('example@email.com'),
});

export type ResendVerifyEmailFormData = z.infer<typeof resendVerifyEmailSchema>;
