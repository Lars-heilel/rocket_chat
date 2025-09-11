import { Loader2, MailCheck } from 'lucide-react';
import { verifyEmailContent } from '../config';
import { useVerifyAccount } from '../model';
import { ErrorDisplay, FormCard, SuccessDisplay } from '@/shared/ui';
import { Button } from '@/shared/shadcn-ui/ui/button';
export function VerifyEmailComponent({ className, ...props }: React.ComponentProps<'div'>) {
    const { isError, isSuccess, errorMessage, paramsError, paramsErrorMessage, isLoading, handleVerify } = useVerifyAccount();
    const { error, success, main } = verifyEmailContent;

    const renderContent = () => {
        if (isError || paramsError) {
            return <ErrorDisplay description={isError ? errorMessage : paramsErrorMessage} children={error.actionLinks} />;
        }
        if (isSuccess) {
            return <SuccessDisplay title={success.title} description={success.description} children={success.actionLink} />;
        }
        return (
            <div className="flex flex-col items-center space-y-4 text-center">
                <MailCheck className="h-16 w-16 text-muted-foreground" />
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{main.header}</h3>
                    <p className="text-sm text-muted-foreground">{main.description}</p>
                </div>
                <Button onClick={handleVerify} disabled={isLoading} size={'lg'} className="w-full">
                    {isLoading ? <Loader2 /> : main.buttonText}
                </Button>
            </div>
        );
    };

    return (
        <FormCard title={main.title} className={className} {...props}>
            {renderContent()}
        </FormCard>
    );
}
