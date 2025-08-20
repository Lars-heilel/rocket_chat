import z from 'zod';

export const JwtTokenSchema = z.object({
  token: z.jwt(),
});
export type JwtTokenResponse = z.infer<typeof JwtTokenSchema>;
