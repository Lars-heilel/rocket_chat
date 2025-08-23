import { z } from 'zod';
export const resendConfirmationSchema = z.object({
  email: z.email('example@email.com'),
});

export type ResendConfirmationFormData = z.infer<typeof resendConfirmationSchema>;
