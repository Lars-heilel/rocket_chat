import { Logger } from '@/shared/lib';
import { z } from 'zod';

type LogLevel = 'warn' | 'error';

export function zodResponseValidator<T extends z.ZodType>(
    response: unknown,
    schema: T,
    context: string,
    logLevel: LogLevel = 'error',
): z.infer<T> {
    const logger = new Logger(context);
    const validation = schema.safeParse(response);

    if (!validation.success) {
        const formattedErrors = validation.error.issues
            .map((issue) => `  - Path: ${issue.path.join('.') || 'root'}, Message: ${issue.message}`)
            .join('\n');

        const errorMessage = `API Response validation failed:\n${formattedErrors}`;
        if (logLevel === 'error') {
            logger.error(errorMessage, { rawResponse: response });
        } else {
            logger.warn(errorMessage, { rawResponse: response });
        }
        throw new Error('Invalid server response structure.');
    }
    return validation.data;
}
