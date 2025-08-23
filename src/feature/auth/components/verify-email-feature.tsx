import { FRONTEND_PATHS, FRONTEND_PROTECTED_PATH } from '@/app/router/all-path';
import { AuthCard } from '../ui/auth-card';
import { Link } from 'react-router';
import { useVerifyAccount } from '../hooks/useVerifyAccount';
import { AuthSuccessDisplay } from '../ui/auth-success-display';
import { AuthErrorDisplay } from '../ui/auth-error-display';
import { BtnLoader } from '../ui/btn-loader';
import { Button } from '@/shared/components/ui/button';
import { MailCheck } from 'lucide-react';

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
    const renderContent = () => {
        if (isError || tokenError) {
            return (
                <AuthErrorDisplay
                    title="Verification Failed"
                    description={errorMessage || tokenErrorMessage}
                    actionLink={{
                        to: FRONTEND_PATHS.RESEND_CONFIRMATION,
                        label: 'Request a new link',
                    }}
                />
            );
        }
        if (isSuccess) {
            return (
                <AuthSuccessDisplay
                    title="Verification was successful!"
                    actionLink={{
                        to: FRONTEND_PROTECTED_PATH.MESSENGER,
                        label: 'Сontinue',
                    }}
                />
            );
        }
        return (
            <div className="flex flex-col items-center space-y-4 text-center">
                <MailCheck className="h-16 w-16 text-muted-foreground" />

                <div className="space-y-1">
                    <h3 className="text-xl font-semibold">One last step</h3>
                    <p className="text-sm text-muted-foreground">
                        Click the button below to confirm your account.
                    </p>
                </div>
                <Button
                    onClick={handleVerify}
                    disabled={isLoading}
                    size={'lg'}
                    className="w-full"
                    type="submit"
                >
                    {isLoading ? <BtnLoader /> : 'Confirm Account'}
                </Button>
            </div>
        );
    };
    return (
        <AuthCard
            title="Verification"
            className={className}
            footerContent={
                isSuccess || isError || tokenError ? null : (
                    <>
                        <span>Something went wrong?</span>
                        <Link className="hover:underline" to={FRONTEND_PATHS.LOGIN}>
                            {'Return to home'}
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
