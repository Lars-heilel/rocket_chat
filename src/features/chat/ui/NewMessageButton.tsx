import { Button } from '@/shared/shadcn-ui/ui/button';
import { ArrowDown01Icon } from 'lucide-react';
interface NewMessageButtonProps {
    count: number;
}
export function NewMessageButton({ count }: NewMessageButtonProps) {
    return (
        <Button variant="default">
            <span>{count}</span>
            <ArrowDown01Icon></ArrowDown01Icon>
        </Button>
    );
}
