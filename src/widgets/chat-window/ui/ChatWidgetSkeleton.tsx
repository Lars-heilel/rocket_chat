const MessageSkeleton = ({ isRight = false }) => (
    <div className={`flex items-end gap-2 ${isRight ? 'justify-end' : ''}`}>
        {!isRight && <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />}
        <div className="h-10 w-48 max-w-[70%] rounded-lg bg-gray-200 dark:bg-gray-700" />
    </div>
);

export function ChatWidgetSkeleton() {
    return (
        <div className="flex h-screen w-full animate-pulse flex-col justify-between">
            <div className="flex items-center gap-3 border-b p-4">
                <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600" />
                <div className="flex flex-col gap-1">
                    <div className="h-4 w-32 rounded-md bg-gray-300 dark:bg-gray-600" />
                    <div className="h-3 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
                </div>
            </div>

            <div className="flex-grow space-y-4 p-4">
                <MessageSkeleton />
                <MessageSkeleton isRight />
                <MessageSkeleton />
                <MessageSkeleton />
                <MessageSkeleton isRight />
            </div>

            <div className="border-t p-4">
                <div className="h-12 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
            </div>
        </div>
    );
}
