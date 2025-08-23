import z from 'zod';
export const LoginSchema = z.object({
  email: z.email('example@email.com'),
  password: z.string().min(8),
});
export type LoginFormData = z.infer<typeof LoginSchema>;
