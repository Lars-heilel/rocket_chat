import z from "zod";
import {EmailZodSchema, TokenZodSchema} from "./reusedSchemas";
import {UserSchema} from "@/shared/lib/zod/schemas/userSchema";

export const LoginSchema = z.object({
  email: EmailZodSchema,
  password: z.string().min(1, "Field cannot be empty"),
});

export type LoginFormData = z.infer<typeof LoginSchema>;

export const LoginResponseSchema = z.object({
  token: TokenZodSchema,
  user: UserSchema,
});

export type LoginResponse = z.infer<typeof LoginResponseSchema>;
