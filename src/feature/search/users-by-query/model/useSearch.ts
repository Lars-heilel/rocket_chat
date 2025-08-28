import { useState, useEffect } from 'react';
import { useLazySearchUsersQuery, type FindUsersDto } from '@/entities/user';
import { useDebounce } from '@/shared/hooks/use-debounce';
import { useDisclosure } from '@/shared/hooks/use-disclosure';

export function useUserSearch(debounceDelay = 500) {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const debouncedSearchQuery = useDebounce(searchQuery, debounceDelay);
    const [triggerSearch, { ...queryResult }] = useLazySearchUsersQuery();
    const { ...disclosure } = useDisclosure();
    useEffect(() => {
        const query = debouncedSearchQuery.trim();
        if (query) {
            const searchParams: FindUsersDto = { name: query };

            triggerSearch(searchParams);
        }
    }, [debouncedSearchQuery, triggerSearch]);
    return {
        searchQuery,
        setSearchQuery,
        queryResult,
        disclosure,
    };
}
