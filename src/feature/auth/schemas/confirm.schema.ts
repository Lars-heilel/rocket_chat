import z from "zod";
import {TokenZodSchema} from "./reusedSchemas";
import {UserSchema} from "@/shared/lib/zod/schemas/userSchema";

export const ConfirmEmailResponseSchema = z.object({
  token: TokenZodSchema,
  user: UserSchema,
});

export type ConfirmEmailResponse = z.infer<typeof ConfirmEmailResponseSchema>;
