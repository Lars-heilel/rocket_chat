import { Alert, AlertDescription, AlertTitle } from '@/shared/shadcn-ui/ui/alert';
import { TriangleAlert } from 'lucide-react';

interface ApiErrorAlertProps {
    title?: string;
    description?: string;
}

export function ApiErrorAlert({ title = 'Error', description }: ApiErrorAlertProps) {
    if (!title) return null;
    return (
        <Alert variant="destructive">
            <TriangleAlert className="h-4 w-4" />
            <AlertTitle>{title}</AlertTitle>
            {description && <AlertDescription>{description}</AlertDescription>}
        </Alert>
    );
}
