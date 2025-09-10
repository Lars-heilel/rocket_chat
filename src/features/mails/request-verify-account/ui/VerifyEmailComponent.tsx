import { Loader2, MailCheck } from 'lucide-react';
import { Link } from 'react-router';
import { resendVerifyEmailContent } from '../config';
import { ErrorDisplay, FormCard, SuccessDisplay } from '@/shared/ui';
import { Button } from '@/shared/shadcn-ui/ui/button';
import { useVerifyAccount } from '../model';

export function VerifyEmailFeature({ className, ...props }: React.ComponentProps<'div'>) {
    const { isError, isSuccess, errorMessage, tokenError, tokenErrorMessage, isLoading, handleVerify } = useVerifyAccount();
    const content = resendVerifyEmailContent;

    const renderContent = () => {
        if (isError || tokenError) {
            return (
                <ErrorDisplay
                    title={content.error.verificationFailed.title}
                    description={content.error.verificationFailed.description({
                        errorMessage,
                        tokenErrorMessage,
                    })}
                    actionLink={content.error.verificationFailed.actionLink}
                />
            );
        }
        if (isSuccess) {
            return <SuccessDisplay title={content.success.title} actionLink={content.success.actionLink} />;
        }
        return (
            <div className="flex flex-col items-center space-y-4 text-center">
                <MailCheck className="h-16 w-16 text-muted-foreground" />
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{content.main.header}</h3>
                    <p className="text-sm text-muted-foreground">{content.main.description}</p>
                </div>
                <Button onClick={handleVerify} disabled={isLoading} size={'lg'} className="w-full">
                    {isLoading ? <Loader2 /> : content.main.buttonText}
                </Button>
            </div>
        );
    };

    return (
        <FormCard
            title={content.main.title}
            className={className}
            footerContent={
                isSuccess || isError || tokenError ? null : (
                    <>
                        <span>{content.main.footerText}</span>
                        <Link className="hover:underline" to={content.main.footerLink.to}>
                            {content.main.footerLink.label}
                        </Link>
                    </>
                )
            }
            {...props}
        >
            {renderContent()}
        </FormCard>
    );
}
