import { Link } from 'react-router';

import { forgotPasswordFormFields } from '../../config/form-fields-config';
import { AUTH_CONTENT_CONFIG } from '../../config/text-content-config';
import { useForgotPassword } from '../../model/hooks/useForgotPassword';
import { AuthCard } from '../elements/auth-card';
import { AuthSuccessDisplay } from '../elements/auth-success-display';
import { BaseAuthForm } from '../elements/base-auth-form';

export function ForgotPasswordForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { form, onSubmit, isSuccess, isError, isLoading, data, errorMessage } =
        useForgotPassword();
    const content = AUTH_CONTENT_CONFIG.forgotPassword;
    return (
        <AuthCard
            title={content.form.title}
            isError={isError}
            errorMessage={errorMessage}
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
                    fields={forgotPasswordFormFields}
                    btnTitle={content.form.buttonText}
                />
            )}
        </AuthCard>
    );
}
