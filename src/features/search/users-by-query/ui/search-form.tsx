import { Search } from 'lucide-react';

import { Input } from '@/shared/components/ui/input';

interface SearchFormProps {
    openSearch: () => void;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
}
export function SearchForm({ openSearch, value, onChange }: SearchFormProps) {
    return (
        <div className="relative w-full p-2">
            <Search className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                onFocus={openSearch}
                className="w-full pl-10"
                placeholder="Search..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
