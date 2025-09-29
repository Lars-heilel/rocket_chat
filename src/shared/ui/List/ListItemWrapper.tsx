// file: @/shared/ui/List/ListItemWrapper.tsx

import { cn } from '@/shared/lib/utils';
import type { ReactNode } from 'react';

interface ListItemWrapperProps extends React.ComponentProps<'div'> {
    children: ReactNode;
    className?: string;
}

export function ListItemWrapper({ children, className, ...props }: ListItemWrapperProps) {
    return (
        <div {...props} className={cn('flex flex-col border-b-2 border-t-2 p-4 gap-3 hover:bg-amber-50/5', className)}>
            <> {children}</>
        </div>
    );
}
