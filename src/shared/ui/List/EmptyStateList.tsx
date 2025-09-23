import { cn } from '@/shared/lib/utils';
import type { ReactNode } from 'react';

interface EmptyStateListProps {
    icon: ReactNode;
    title: string;
    description?: string;
    className?: string;
}

export function EmptyStateList({ icon, title, description, className }: EmptyStateListProps) {
    return (
        <div className={cn('flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-muted-foreground', className)}>
            {icon}
            <span className="font-bold">{title}</span>
            {description && <span className="text-sm">{description}</span>}
        </div>
    );
}
