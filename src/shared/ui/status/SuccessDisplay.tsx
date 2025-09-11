import { CheckCircle2 } from 'lucide-react';
interface SuccessDisplayProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
}

export function SuccessDisplay({ title, description, children }: SuccessDisplayProps) {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                {description && <p className="text-lg ">{description}</p>}
            </div>
            {children}
        </div>
    );
}
