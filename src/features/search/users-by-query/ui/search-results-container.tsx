import { Frown, Search, X } from 'lucide-react';

import { UserList } from '@/entities/user';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Spiner } from '@/shared/components/ui/spiner';

import type { UseUserSearchResult } from '../model';


interface SearchResultsContainerProps {
    close: () => void;
    queryResult: UseUserSearchResult['queryResult'];
    searchQuery: string;
}

export function SearchResultsContainer({
    close,
    queryResult,
    searchQuery,
}: SearchResultsContainerProps) {
    const { data: users, isFetching, isSuccess, isError } = queryResult;

    const InitialState = () => (
        <div className="flex h-full flex-col items-center justify-center p-4 text-center text-muted-foreground">
            <Search className="h-10 w-10 mb-4" />
            <h3 className="font-semibold text-lg">Find new friends</h3>
            <p className="text-sm">Use the search to find users and start a conversation.</p>
        </div>
    );

    const renderContent = () => {
        if (!searchQuery) {
            return <InitialState />;
        }

        if (isFetching) {
            return <Spiner />;
        }
        if (isError) {
            return (
                <div className="flex flex-col items-center justify-center text-center text-destructive p-4">
                    <Frown className="h-10 w-10 mb-4" />
                    <h3 className="font-semibold text-lg">Something went wrong</h3>
                    <p className="text-sm">Failed to perform the search. Please try again.</p>
                </div>
            );
        }

        if (isSuccess) {
            if (users && users.length > 0) {
                return (
                    <div className="p-1">
                        <UserList users={users} />
                    </div>
                );
            }
            return (
                <div className="flex h-full flex-col items-center justify-center p-4 text-center text-muted-foreground">
                    <Frown className="h-10 w-10 mb-4" />
                    <h3 className="font-semibold text-lg">No users found</h3>
                    <p className="text-sm">Try changing your search query.</p>
                </div>
            );
        }

        return <InitialState />;
    };

    return (
        <Card className="relative flex h-full w-full max-w-md flex-col overflow-hidden">
            <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 h-6 w-6"
                onClick={close}
            >
                <X className="h-4 w-4" />
            </Button>
            <CardContent className="flex-grow overflow-y-auto">{renderContent()}</CardContent>
        </Card>
    );
}
