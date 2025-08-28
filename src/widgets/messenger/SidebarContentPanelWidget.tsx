import { FirendsSwitch } from '@/feature/friends/friends-switch';
import { SearchResultsContainer } from '@/feature/search/users-by-query/ui/search-results-container';
export function SidebarContentPanelWidget() {
    return (
        <>
            <FirendsSwitch />
            <SearchResultsContainer />
        </>
    );
}
