import { Link } from 'react-router';
import { useLogin } from '@/feature/auth/model/hooks/useLogin';
import { loginFormFields } from '@/feature/auth/config/form-fields-config';
import { AuthCard } from '@/feature/auth/ui/elements/auth-card';
import { BaseAuthForm } from '@/feature/auth/ui/elements/base-auth-form';
import { AUTH_CONTENT_CONFIG } from '../../config/text-content-config';

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { form, onSubmit, isLoading, isError, errorMessage } = useLogin();
    const content = AUTH_CONTENT_CONFIG.login;

    return (
        <AuthCard
            isError={isError}
            errorMessage={errorMessage}
            title={content.form.title}
            className={className}
            footerContent={
                <>
                    <span>{content.form.footerText}</span>
                    <Link className="hover:underline" to={content.form.footerLink.to}>
                        {content.form.footerLink.label}
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
                btnTitle={content.form.buttonText}
            />
        </AuthCard>
    );
}
