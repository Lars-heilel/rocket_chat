import { z } from 'zod';

export const GetHistoryQuerySchema = z.object({
    userId: z.string().min(1),
    secondUserId: z.string().min(1),
    limit: z.coerce.number().min(1).max(100),
    cursor: z
        .object({
            id: z.string().optional(),
            createAt: z.iso.datetime().optional(),
        })
        .optional(),
});

export type GetHistoryDto = z.infer<typeof GetHistoryQuerySchema>;
