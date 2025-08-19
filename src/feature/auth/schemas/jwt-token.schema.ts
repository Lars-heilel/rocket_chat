import z from 'zod';

export const JwtTokenSchema = z.object({
  token: z.jwt().min(1),
});
export type JwtTokenResponse = z.infer<typeof JwtTokenSchema>;
