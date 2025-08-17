import {z} from "zod";
import {EmailZodSchema} from "./reusedSchemas";

export const resendConfirmationSchema = z.object({
  email: EmailZodSchema,
});

export type ResendConfirmationFormData = z.infer<
  typeof resendConfirmationSchema
>;
