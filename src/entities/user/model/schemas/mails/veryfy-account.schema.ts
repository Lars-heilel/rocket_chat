import z from 'zod';
export const VerifyAccountResponseSchema = z.object({
    token: z.jwt(),
});

export type VerifyAccountResponse = z.infer<typeof VerifyAccountResponseSchema>;
