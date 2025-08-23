import { AuthCard } from '../ui/auth-card';
import { FRONTEND_PATHS } from '@/app/router/all-path';
import { Link } from 'react-router';
import { BaseAuthForm } from '../ui/base-auth-form';
import { forgotPasswordFormFields } from '../config/form-fields-config';
import useForgotPassword from '../hooks/useForgotPassword';
import { AuthSuccessDisplay } from '../ui/auth-success-display';

export function ForgotPasswordForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { form, onSubmit, isSuccess, isError, isLoading, data, errorMessage } =
        useForgotPassword();

    return (
        <AuthCard
            title="Password recovery request"
            isError={isError}
            errorMessage={errorMessage}
            className={className}
            footerContent={
                isSuccess ? null : (
                    <>
                        <span>Return to sign in</span>
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
                    fields={forgotPasswordFormFields}
                    btnTitle="Continue"
                ></BaseAuthForm>
            )}
        </AuthCard>
    );
}
