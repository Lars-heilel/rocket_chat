import { AuthCard } from '../ui/auth-card';
import { Link } from 'react-router';
import { BaseAuthForm } from '../ui/base-auth-form';
import { resetPasswordFormFields } from '../config/form-fields-config';
import { FRONTEND_PATHS } from '@/app/router/all-path';
import { useResetPassword } from '../hooks/useResetPassword';
import { AuthSuccessDisplay } from '../ui/auth-success-display';
import { AuthErrorDisplay } from '../ui/auth-error-display';

export function ResetPasswordForm({ className, ...props }: React.ComponentProps<'div'>) {
    const {
        form,
        onSubmit,
        isLoading,
        isSuccess,
        isError,
        errorMessage,
        tokenError,
        tokenErrorMessage,
        data,
    } = useResetPassword();
    return (
        <AuthCard
            title="Enter new password"
            isError={isError}
            errorMessage={errorMessage}
            className={className}
            footerContent={
                <>
                    <span>Return to login?</span>
                    <Link className="hover:underline" to={FRONTEND_PATHS.LOGIN}>
                        {'Sign in'}
                    </Link>
                </>
            }
            {...props}
        >
            {tokenError ? (
                <AuthErrorDisplay
                    title="Link Invalid"
                    description={tokenErrorMessage}
                    actionLink={{
                        to: FRONTEND_PATHS.FORGOT_PASSWORD,
                        label: 'Request a new link',
                    }}
                />
            ) : isSuccess && data?.message ? (
                <AuthSuccessDisplay
                    title="Success!"
                    description={data.message}
                    actionLink={{
                        to: FRONTEND_PATHS.LOGIN,
                        label: 'Return to login',
                    }}
                />
            ) : (
                <BaseAuthForm
                    isLoading={isLoading}
                    form={form}
                    onSubmit={onSubmit}
                    fields={resetPasswordFormFields}
                    btnTitle="Reset"
                ></BaseAuthForm>
            )}
        </AuthCard>
    );
}
