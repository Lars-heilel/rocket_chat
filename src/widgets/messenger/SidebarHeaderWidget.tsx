import { ViewProfile } from '@/feature/profile/ui/components/view-profile';
import { SearchForm } from '@/feature/search/users-by-query/ui/search-form';
export function SidebarHeaderWidget() {
    return (
        <>
            {' '}
            <ViewProfile />
            <SearchForm />
        </>
    );
}
