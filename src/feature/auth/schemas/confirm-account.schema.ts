import z from 'zod';
export const ConfirmEmailResponseSchema = z.object({
  token: z.jwt(),
});

export type ConfirmEmailResponse = z.infer<typeof ConfirmEmailResponseSchema>;
