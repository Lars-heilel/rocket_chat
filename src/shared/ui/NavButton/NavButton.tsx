import { Button } from '@/shared/shadcn-ui/ui/button';
import { Link } from 'react-router';
interface NavButtonProps {
    variant?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    to: string;
    text: string;
}
export function NavButton({ size, variant, text, to }: NavButtonProps) {
    return (
        <Button size={size} variant={variant} asChild>
            <Link to={to}>{text}</Link>
        </Button>
    );
}
