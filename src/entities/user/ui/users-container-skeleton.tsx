import { Skeleton } from '@/shared/components/ui/skeleton';
export function UsersContainerSkeleton() {
    return (
        <div className="flex items-center">
            <Skeleton className="mr-2 h-8 w-8 rounded-full" />
            <div className="flex flex-col gap-y-1">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-3.5 w-40" />
            </div>
        </div>
    );
}
