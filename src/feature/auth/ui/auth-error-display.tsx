import { Button } from '@/shared/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router';

interface AuthErrorDisplayProps {
    title: string;
    description?: string;
    actionLink: {
        to: string;
        label: string;
    };
    className?: string;
}

export function AuthErrorDisplay({
    title,
    description,
    actionLink,
    className,
}: AuthErrorDisplayProps) {
    return (
        <div
            className={`flex flex-col items-center justify-center space-y-4 text-center ${className}`}
        >
            <AlertTriangle className="h-12 w-12 text-red-500" />
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                {description && <p className="text-sm text-muted-foreground">{description}</p>}
            </div>
            <Button variant="destructive" asChild className="mt-4">
                <Link to={actionLink.to}>{actionLink.label}</Link>
            </Button>
        </div>
    );
}
