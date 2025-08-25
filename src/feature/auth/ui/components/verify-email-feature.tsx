import { Link } from 'react-router';
import { Button } from '@/shared/components/ui/button';
import { MailCheck } from 'lucide-react';
import { useVerifyAccount } from '../../model/hooks/useVerifyAccount';
import { AuthCard } from '../elements/auth-card';
import { BtnLoader } from '../elements/btn-loader';
import { AuthErrorDisplay } from '../elements/auth-error-display';
import { AuthSuccessDisplay } from '../elements/auth-success-display';
import { AUTH_CONTENT_CONFIG } from '../../config/text-content-config';

export function VerifyEmailFeature({ className, ...props }: React.ComponentProps<'div'>) {
    const {
        isError,
        isSuccess,
        errorMessage,
        tokenError,
        tokenErrorMessage,
        isLoading,
        handleVerify,
    } = useVerifyAccount();
    const content = AUTH_CONTENT_CONFIG.verifyEmail;

    const renderContent = () => {
        if (isError || tokenError) {
            return (
                <AuthErrorDisplay
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
            return (
                <AuthSuccessDisplay
                    title={content.success.title}
                    actionLink={content.success.actionLink}
                />
            );
        }
        return (
            <div className="flex flex-col items-center space-y-4 text-center">
                <MailCheck className="h-16 w-16 text-muted-foreground" />
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{content.main.header}</h3>
                    <p className="text-sm text-muted-foreground">{content.main.description}</p>
                </div>
                <Button onClick={handleVerify} disabled={isLoading} size={'lg'} className="w-full">
                    {isLoading ? <BtnLoader /> : content.main.buttonText}
                </Button>
            </div>
        );
    };

    return (
        <AuthCard
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
        </AuthCard>
    );
}
