import { Link } from 'react-router';
import { Button } from '@/shared/shadcn-ui/ui/button';
import { AlertTriangle } from 'lucide-react';

interface DisplayActionLink {
    to: string;
    label: string;
}

interface ErrorDisplayProps {
    title: string;
    description?: string;
    actionLink: DisplayActionLink;
}

export function ErrorDisplay({ title, description, actionLink }: ErrorDisplayProps) {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <AlertTriangle className="h-12 w-12 text-destructive" />
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
