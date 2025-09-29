import { SearchForm, SearchResultsContainer, useUserSearch } from '@/features/search';
import { useDisclosure } from '@/shared/lib';
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
            {isSearchActive ? <SearchResultsContainer searchQuery={searchQuery} queryResult={queryResult} /> : <TabsManagementWidget />}
        </>
    );
}
