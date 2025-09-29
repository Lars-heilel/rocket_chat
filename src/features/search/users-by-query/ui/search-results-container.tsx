import { Frown, Plus, Search } from 'lucide-react';
import type { UseUserSearchResult } from '../model';
import { EmptyStateList, ListItemWrapper, ResourceList } from '@/shared/ui/List';
import { UsersContainer } from '@/entities/user';
import { Button } from '@/shared/shadcn-ui';
import { useAddFriend } from '@/features/friends/add';
interface SearchResultsContainerProps {
    queryResult: UseUserSearchResult['queryResult'];
    searchQuery: string;
}

export function SearchResultsContainer({ queryResult }: SearchResultsContainerProps) {
    const { data: users, isFetching, isError } = queryResult;
    const { handleAddFriend } = useAddFriend();
    return (
        <>
            <ResourceList
                isLoading={isFetching}
                isError={isError}
                data={users || []}
                errorState={
                    <EmptyStateList icon={<Frown />} title="Failed to perform the search. Please try again." className="text-destructive" />
                }
                emptyState={
                    <EmptyStateList
                        icon={<Search className="h-10 w-10 mb-4" />}
                        title="Use the search to find users and start a conversation."
                    />
                }
                renderItem={(users) => (
                    <ListItemWrapper key={users.id}>
                        <UsersContainer userData={users}></UsersContainer>
                        <Button variant="default" size="lg" onClick={() => handleAddFriend({ userId: users.id })}>
                            <Plus></Plus> add friend
                        </Button>
                    </ListItemWrapper>
                )}
            />
        </>
    );
}
