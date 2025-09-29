import { Button } from '@/shared/shadcn-ui';
import { Input } from '@/shared/shadcn-ui/ui/input';
import { Search, X } from 'lucide-react';

interface SearchFormProps {
    openSearch: () => void;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    close: () => void;
    isActive: boolean;
}
export function SearchForm({ openSearch, value, onChange, close, isActive }: SearchFormProps) {
    return (
        <div className="relative flex gap-3 w-full p-2">
            <Search className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                onFocus={openSearch}
                className="w-full pl-10"
                placeholder="Search..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {isActive ? (
                <Button variant="default" onClick={close}>
                    <X></X>
                </Button>
            ) : null}
        </div>
    );
}
