import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { cn } from '@/shared/lib/utils';

import { AuthApiError } from './authApiError';

interface AuthCardProps extends React.ComponentProps<'div'> {
    title: string;
    children: React.ReactNode;
    footerContent: React.ReactNode;
    isError?: boolean;
    errorMessage?: string;
}
export function AuthCard({
    title,
    isError,
    errorMessage,
    children,
    footerContent,
    className,
    ...props
}: AuthCardProps) {
    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    {isError ? (
                        <AuthApiError title={errorMessage} />
                    ) : (
                        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                    )}
                </CardHeader>
                <CardContent>{children}</CardContent>
                <CardFooter className="flex justify-between">{footerContent}</CardFooter>
            </Card>
        </div>
    );
}
