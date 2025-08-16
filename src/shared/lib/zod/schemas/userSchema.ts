import z from "zod";
export const UserSchema = z.object({
  id: z.uuid(),
  email: z.email(),
  name: z.string(),
  isConfirmed: z.boolean(),
  createdAt: z.date(),
});
export type User = z.infer<typeof UserSchema>;
