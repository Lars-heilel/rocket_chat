import { AuthCard } from '../ui/auth-card';
import { Link } from 'react-router';
import { BaseAuthForm } from '../ui/base-auth-form';
import { FRONTEND_PATHS } from '@/app/router/all-path';
import { loginFormFields } from '../config/form-fields-config';
import { useLogin } from '../hooks/useLogin';
export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { form, onSubmit, isLoading, isError, errorMessage } = useLogin();
    return (
        <AuthCard
            isError={isError}
            errorMessage={errorMessage}
            title="Sign in to your account"
            className={className}
            footerContent={
                <>
                    <span>Need an account?</span>
                    <Link className="hover:underline" to={FRONTEND_PATHS.REGISTER}>
                        {'Register'}
                    </Link>
                </>
            }
            {...props}
        >
            <BaseAuthForm
                isLoading={isLoading}
                form={form}
                onSubmit={onSubmit}
                fields={loginFormFields}
                btnTitle="Login"
            ></BaseAuthForm>
        </AuthCard>
    );
}
