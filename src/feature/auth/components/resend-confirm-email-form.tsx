import { AuthCard } from '../ui/auth-card';
import { Link } from 'react-router';
import { BaseAuthForm } from '../ui/base-auth-form';
import { resendConfirmationEmailFormFields } from '../config/form-fields-config';
import { FRONTEND_PATHS } from '@/app/router/all-path';
import useResendConfirmEmail from '../hooks/useResendConfirmEmail';
import { AuthSuccessDisplay } from '../ui/auth-success-display';

export function ResendConfirmEmailForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { onSubmit, form, isSuccess, isLoading, isError, errorMessage, data } =
        useResendConfirmEmail();

    return (
        <AuthCard
            isError={isError}
            title="Resend confirmation email"
            errorMessage={errorMessage}
            className={className}
            footerContent={
                isSuccess ? null : (
                    <>
                        <span>Return to login?</span>
                        <Link className="hover:underline" to={FRONTEND_PATHS.LOGIN}>
                            {'Sign in'}
                        </Link>
                    </>
                )
            }
            {...props}
        >
            {isSuccess && data?.message ? (
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
                    fields={resendConfirmationEmailFormFields}
                    btnTitle="Continue"
                ></BaseAuthForm>
            )}
        </AuthCard>
    );
}
