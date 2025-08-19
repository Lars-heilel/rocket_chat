import { AuthCard } from '../ui/auth-card';
import { Link } from 'react-router';
import { BaseAuthForm } from '../ui/base-auth-form';
import { registerFormFields } from '../config/form-fields-config';
import { FRONTEND_PATHS } from '@/app/router/all-path';
import { useRegister } from '../hooks/useRegister';

export function RegisterForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { form, onSubmit, isSuccess, resMessage } = useRegister();
    return (
        <AuthCard
            title="Sign up new account"
            errorTitle="Register error occurred"
            className={className}
            footerContent={
                <>
                    <span>Return to login?</span>
                    <Link className="hover:underline" to={FRONTEND_PATHS.LOGIN}>
                        {'Login'}
                    </Link>
                </>
            }
            {...props}
        >
            {isSuccess ? (
                <div className="text-3xl">{resMessage}</div>
            ) : (
                <BaseAuthForm
                    form={form}
                    onSubmit={onSubmit}
                    fields={registerFormFields}
                    btnTitle="Sign up"
                ></BaseAuthForm>
            )}
        </AuthCard>
    );
}
