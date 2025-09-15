import { useState, useEffect, useMemo } from 'react';
import { useGetMyProfileQuery, useLazySearchUsersQuery, type Users } from '@/entities/user';
import { useDebounce } from '@/shared/lib/hooks/use-debounce';
import { Logger } from '@/shared/lib/logger';
import { SearchQuerySchema } from '../schemas/searchQuerySchema';
export function isNotMe(value: string, me: Users): boolean {
    const logger = new Logger('isNotMe');
    logger.debug(`Входные значения для проверки value:${value},me:${JSON.stringify(me)}`);
    if (value !== me.email && value !== me.id && value !== me.name) {
        logger.log(`Успех`);
        return true;
    } else {
        logger.error(`Данные совпадают`);
        return false;
    }
}
export function useUserSearch() {
    const logger = useMemo(() => new Logger('isNotMe'), []);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const debouncedSearchQuery = useDebounce(searchQuery, 1000);
    const [triggerSearch, queryResult] = useLazySearchUsersQuery();
    const { data: me } = useGetMyProfileQuery();
    useEffect(() => {
        if (!me) {
            logger.error(` данные не получены из стора ${me}`);
            return;
        }
        const query = debouncedSearchQuery.trim();
        if (query === '') {
            return;
        }
        const isMe = isNotMe(query, me);
        if (!isMe) {
            return;
        } else {
            const validateResult = SearchQuerySchema.safeParse(query);
            if (validateResult.success) {
                triggerSearch(validateResult.data);
            } else {
                return;
            }
        }
    }, [debouncedSearchQuery, triggerSearch, me, logger]);
    return {
        searchQuery,
        setSearchQuery,
        queryResult,
    };
}
export type UseUserSearchResult = ReturnType<typeof useUserSearch>;
