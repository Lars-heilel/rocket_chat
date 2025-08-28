import { useState, useEffect, useMemo } from 'react';
import { useLazySearchUsersQuery, type Users } from '@/entities/user';
import { useDebounce } from '@/shared/hooks/use-debounce';
import { SearchQuerySchema } from '../schemas/searchQuerySchema';
import { Logger } from '@/shared/lib/logger';
import { useAppSelector } from '@/shared/hooks/use-redux-hooks';
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
    const me = useAppSelector((state) => state.user.me);
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
