import { Loader2 } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-16 w-16',
};

interface SpinnerProps {
    size?: keyof typeof sizeClasses;
    className?: string;
    showText?: boolean;
    text?: string;
}

export function Spinner({ size = 'md', className, showText = true, text = 'Loading...' }: SpinnerProps) {
    const spinnerSizeClass = sizeClasses[size];

    return (
        <div role="status" className={cn('flex flex-col items-center justify-center gap-2 text-primary', className)}>
            <Loader2 className={cn('animate-spin', spinnerSizeClass)} />
            {showText && <span className="sr-only">{text}</span>}
            {showText && <p>{text}</p>}
        </div>
    );
}
