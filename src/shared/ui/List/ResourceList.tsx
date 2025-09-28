import { cn } from '@/shared/lib/utils';
import { Spinner } from '@/shared/ui';
import type { ReactNode } from 'react';

interface ResourceListProps<T> {
    isLoading: boolean;
    isError: boolean;
    data: T[];
    errorState: ReactNode;
    emptyState: ReactNode;
    renderItem: (item: T) => ReactNode;
    className?: string;
}

export function ResourceList<T>({ isLoading, isError, data, errorState, emptyState, renderItem, className }: ResourceListProps<T>) {
    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return errorState;
    }

    if (data.length === 0) {
        return emptyState;
    }

    return <div className={cn('flex  h-full flex-col', className)}>{data.map(renderItem)}</div>;
}
