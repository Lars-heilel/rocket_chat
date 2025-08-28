import { UserList } from '@/entities/user';
import { Search } from 'lucide-react';
export function SearchResultsContainer() {
    return (
        <div className="flex h-full flex-col items-center justify-center p-4 text-center text-muted-foreground">
            <Search className="h-10 w-10 mb-4" />
            <h3 className="font-semibold text-lg">Find new friends</h3>
            <p className="text-sm">Search for users to start a conversation.</p>
        </div>
    );
}
