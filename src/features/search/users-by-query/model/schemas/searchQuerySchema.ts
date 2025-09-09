import z from 'zod';

import { FindUserSchema } from '@/entities/user';

function buildSearchData(query: string) {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(query);
    if (isEmail) return { email: query };

    const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(query);
    if (isUUID) return { id: query };

    return { name: query };
}

export const SearchQuerySchema = z.preprocess((arg) => {
    if (typeof arg === 'string') {
        return buildSearchData(arg);
    }
    return arg;
}, FindUserSchema);
