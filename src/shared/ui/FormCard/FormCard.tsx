import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/shadcn-ui/ui/card';
import { ApiErrorAlert } from '../status/ApiErrorAlert';

interface FormCardProps {
    title: string;
    children: React.ReactNode;
    footerContent?: React.ReactNode;
    isError?: boolean;
    errorMessage?: string;
}

export function FormCard({ title, isError, errorMessage, children, footerContent }: FormCardProps) {
    return (
        <Card>
            <CardHeader className="text-center">
                {isError && errorMessage ? (
                    <ApiErrorAlert title={errorMessage} />
                ) : (
                    <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                )}
            </CardHeader>
            <CardContent>{children}</CardContent>
            {footerContent && <CardFooter className="flex justify-center gap-5 text-sm">{footerContent}</CardFooter>}
        </Card>
    );
}
