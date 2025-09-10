import { Link } from 'react-router';
import { Button } from '@/shared/shadcn-ui/ui/button';
import { CheckCircle2 } from 'lucide-react';

interface DisplayActionLink {
    to: string;
    label: string;
}

interface SuccessDisplayProps {
    title: string;
    description?: string;
    actionLink: DisplayActionLink;
}

export function SuccessDisplay({ title, description, actionLink }: SuccessDisplayProps) {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
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
