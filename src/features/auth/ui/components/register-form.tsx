import { Link } from 'react-router';

import { registerFormFields } from '@/feature/auth/config/form-fields-config';
import { useRegister } from '@/feature/auth/model/hooks/useRegister';
import { AuthCard } from '@/feature/auth/ui/elements/auth-card';
import { AuthSuccessDisplay } from '@/feature/auth/ui/elements/auth-success-display';
import { BaseAuthForm } from '@/feature/auth/ui/elements/base-auth-form';

import { AUTH_CONTENT_CONFIG } from '../../config/text-content-config';

export function RegisterForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { form, onSubmit, isSuccess, data, isError, isLoading, errorMessage } = useRegister();
    const content = AUTH_CONTENT_CONFIG.register;
    return (
        <AuthCard
            isError={isError}
            errorMessage={errorMessage}
            title={isSuccess ? content.success.title : content.form.title}
            className={className}
            footerContent={
                isSuccess ? null : (
                    <>
                        <span>{content.form.footerText}</span>
                        <Link className="hover:underline" to={content.form.footerLink.to}>
                            {content.form.footerLink.label}
                        </Link>
                    </>
                )
            }
            {...props}
        >
            {isSuccess && data?.message ? (
                <AuthSuccessDisplay
                    title={content.success.title}
                    description={content.success.description(data)}
                    actionLink={content.success.actionLink}
                />
            ) : (
                <BaseAuthForm
                    isLoading={isLoading}
                    form={form}
                    onSubmit={onSubmit}
                    fields={registerFormFields}
                    btnTitle={content.form.buttonText}
                />
            )}
        </AuthCard>
    );
}
