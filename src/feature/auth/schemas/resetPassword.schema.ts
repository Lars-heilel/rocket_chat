import { z } from 'zod';
import { PasswordRegex } from '../const/regex-const';

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .regex(PasswordRegex.REGEX, PasswordRegex.MESSAGE)
      .min(PasswordRegex.MIN_LENGTH),
    confirmPassword: z
      .string()
      .regex(PasswordRegex.REGEX, PasswordRegex.MESSAGE)
      .min(PasswordRegex.MIN_LENGTH),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type ResetPasswordApiData = {
  password: string;
  mailParamsToken: string;
};
