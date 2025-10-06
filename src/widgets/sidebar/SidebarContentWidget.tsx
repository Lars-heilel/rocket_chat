import { SearchForm, SearchResultsContainer, useUserSearch } from '@/features/search';
import { useDisclosure } from '@/shared/lib';
import { Spinner } from '@/shared/ui';
import React from 'react';
import { TabsManagementWidget } from '../tabs-manager';

export function SidebarContentWidget() {
    const { isOpen: isSearchActive, open: activateSearch, close: deactivateSearch } = useDisclosure();
    const { searchQuery, setSearchQuery, queryResult } = useUserSearch();
    return (
        <>
            <SearchForm
                isActive={isSearchActive}
                close={deactivateSearch}
                value={searchQuery}
                onChange={setSearchQuery}
                openSearch={activateSearch}
            />
            {isSearchActive ? (
                <SearchResultsContainer searchQuery={searchQuery} queryResult={queryResult} />
            ) : (
                <React.Suspense fallback={<Spinner />}>
                    <TabsManagementWidget />
                </React.Suspense>
            )}
        </>
    );
}
