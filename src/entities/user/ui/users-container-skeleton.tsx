import { Skeleton } from '@/shared/components/ui/skeleton';

export function UsersContainerSkeleton() {
    return (
        <div className="flex w-full items-center p-2">
            <Skeleton className="mr-2 h-8 w-8 rounded-full" />
            <div className="flex flex-col gap-1">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-40 " />
            </div>
        </div>
    );
}
