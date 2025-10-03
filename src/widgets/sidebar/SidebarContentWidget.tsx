import { SearchForm, useUserSearch } from '@/features/search';
import { useDisclosure } from '@/shared/lib';
import { Spinner } from '@/shared/ui';
import React from 'react';

export function SidebarContentWidget() {
    const { isOpen: isSearchActive, open: activateSearch, close: deactivateSearch } = useDisclosure();
    const { searchQuery, setSearchQuery, queryResult } = useUserSearch();
    const LazySearchResultsContainer = React.lazy(() =>
        import('@/features/search/users-by-query/ui/search-results-container').then((module) => ({
            default: module.SearchResultsContainer,
        })),
    );
    const LazyTabsManagementWidget = React.lazy(() =>
        import('@/widgets/tabs-manager/TabsManagementWidget').then((module) => ({ default: module.TabsManagementWidget })),
    );
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
                <LazySearchResultsContainer searchQuery={searchQuery} queryResult={queryResult} />
            ) : (
                <React.Suspense fallback={<Spinner />}>
                    <LazyTabsManagementWidget />
                </React.Suspense>
            )}
        </>
    );
}
