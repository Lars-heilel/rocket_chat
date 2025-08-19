import z from 'zod';
export const MailParamsTokenSchema = z.string().min(1);
