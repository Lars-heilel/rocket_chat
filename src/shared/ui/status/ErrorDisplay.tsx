import { AlertTriangle } from 'lucide-react';
interface ErrorDisplayProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
}

export function ErrorDisplay({ title, description, children }: ErrorDisplayProps) {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <AlertTriangle className="h-12 w-12 text-destructive" />
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                {description && <p className="text-lg text-red-400">{description}</p>}
            </div>
            {children}
        </div>
    );
}
