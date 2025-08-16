import { z } from "zod";
import { EmailZodSchema } from "./reusedSchemas";
export const forgotPasswordSchema = z.object({
  email: EmailZodSchema,
});
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
