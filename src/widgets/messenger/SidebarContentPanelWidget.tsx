import { FirendsSwitch } from '@/features/friends/ui/friends-switch';
import { SearchForm, SearchResultsContainer, useUserSearch } from '@/features/search';
import { useDisclosure } from '@/shared/lib/hooks/use-disclosure';

export function SidebarContentPanelWidget() {
    const { isOpen: isSearchActive, open: activateSearch, close: deactivateSearch } = useDisclosure();
    const { searchQuery, setSearchQuery, queryResult } = useUserSearch();
    const handleCloseAndClearSearch = () => {
        deactivateSearch();
        setSearchQuery('');
    };
    return (
        <>
            <SearchForm value={searchQuery} onChange={setSearchQuery} openSearch={activateSearch} />
            {isSearchActive ? (
                <SearchResultsContainer searchQuery={searchQuery} queryResult={queryResult} close={handleCloseAndClearSearch} />
            ) : (
                <FirendsSwitch />
            )}
        </>
    );
}
