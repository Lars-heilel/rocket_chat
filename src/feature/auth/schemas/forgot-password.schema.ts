import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.email('example@email.com'),
});
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
