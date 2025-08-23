import { AuthCard } from '../ui/auth-card';
import { Link } from 'react-router';
import { BaseAuthForm } from '../ui/base-auth-form';
import { registerFormFields } from '../config/form-fields-config';
import { FRONTEND_PATHS } from '@/app/router/all-path';
import { useRegister } from '../hooks/useRegister';
import { AuthSuccessDisplay } from '../ui/auth-success-display';

export function RegisterForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { form, onSubmit, isSuccess, data, isError, isLoading, errorMessage } = useRegister();

    return (
        <AuthCard
            isError={isError}
            errorMessage={errorMessage}
            title={isSuccess ? 'Success!' : 'Sign up new account'}
            className={className}
            footerContent={
                isSuccess ? null : (
                    <>
                        <span>Return to login?</span>
                        <Link className="hover:underline" to={FRONTEND_PATHS.LOGIN}>
                            {'Login'}
                        </Link>
                    </>
                )
            }
            {...props}
        >
            {isSuccess && data?.message ? (
                <AuthSuccessDisplay
                    title="Registration was successful!"
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
                    fields={registerFormFields}
                    btnTitle="Register"
                />
            )}
        </AuthCard>
    );
}
