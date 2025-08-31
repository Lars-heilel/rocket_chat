import { FirendsSwitch } from '@/feature/friends/ui/friends-switch';
import { SearchForm, useUserSearch } from '@/feature/search';
import { SearchResultsContainer } from '@/feature/search/users-by-query/ui/search-results-container';
import { useDisclosure } from '@/shared/hooks/use-disclosure';

export function SidebarContentPanelWidget() {
    const {
        isOpen: isSearchActive,
        open: activateSearch,
        close: deactivateSearch,
    } = useDisclosure();
    const { searchQuery, setSearchQuery, queryResult } = useUserSearch();
    const handleCloseAndClearSearch = () => {
        deactivateSearch();
        setSearchQuery('');
    };
    return (
        <>
            <SearchForm value={searchQuery} onChange={setSearchQuery} openSearch={activateSearch} />
            {isSearchActive ? (
                <SearchResultsContainer
                    searchQuery={searchQuery}
                    queryResult={queryResult}
                    close={handleCloseAndClearSearch}
                />
            ) : (
                <FirendsSwitch />
            )}
        </>
    );
}
