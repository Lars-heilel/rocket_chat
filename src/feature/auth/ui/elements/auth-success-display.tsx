import { Button } from '@/shared/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';

interface AuthSuccessDisplayProps {
    title: string;
    description?: string;
    actionLink: {
        to: string;
        label: string;
    };
    className?: string;
}

export function AuthSuccessDisplay({
    title,
    description,
    actionLink,
    className,
}: AuthSuccessDisplayProps) {
    return (
        <div
            className={`flex flex-col items-center justify-center space-y-4 text-center ${className}`}
        >
            <CheckCircle2 className="h-12 w-12 text-green-500" />
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                {description && <p className="text-sm text-muted-foreground">{description}</p>}
            </div>
            <Button asChild className="mt-4">
                <Link to={actionLink.to}>{actionLink.label}</Link>
            </Button>
        </div>
    );
}
