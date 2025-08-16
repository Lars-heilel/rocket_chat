import { z } from "zod";
import {
  EmailZodSchema,
  NameZodSchema,
  PasswordZodSchema,
} from "./reusedSchemas";

export const registerSchema = z
  .object({
    email: EmailZodSchema,
    name: NameZodSchema,
    password: PasswordZodSchema,
    confirmPassword: PasswordZodSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
export type RegisterFormData = z.infer<typeof registerSchema>;
