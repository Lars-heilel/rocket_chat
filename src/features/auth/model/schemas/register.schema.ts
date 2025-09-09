import { z } from 'zod';

import { PasswordRegex } from '../const/regex-const';

export const registerSchema = z
  .object({
    email: z.email('example@email.com'),
    name: z.string().min(2),
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
export type RegisterFormData = z.infer<typeof registerSchema>;
