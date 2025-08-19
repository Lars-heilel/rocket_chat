import z from 'zod';
import { PasswordRegex } from '../const/regex-const';
export const LoginSchema = z.object({
  email: z.email('example@email.com'),
  password: z
    .string()
    .regex(PasswordRegex.REGEX, PasswordRegex.MESSAGE)
    .min(PasswordRegex.MIN_LENGTH),
});
export type LoginFormData = z.infer<typeof LoginSchema>;
