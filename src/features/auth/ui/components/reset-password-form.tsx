import { Link } from 'react-router';

import { resetPasswordFormFields } from '@/feature/auth/config/form-fields-config';
import { useResetPassword } from '@/feature/auth/model/hooks/useResetPassword';
import { AuthCard } from '@/feature/auth/ui/elements/auth-card';
import { AuthSuccessDisplay } from '@/feature/auth/ui/elements/auth-success-display';
import { BaseAuthForm } from '@/feature/auth/ui/elements/base-auth-form';

import { AUTH_CONTENT_CONFIG } from '../../config/text-content-config';
import { AuthErrorDisplay } from '../elements/auth-error-display';

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
    const content = AUTH_CONTENT_CONFIG.resetPassword;
    return (
        <AuthCard
            title={content.form.title}
            isError={isError}
            errorMessage={errorMessage}
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
            {tokenError ? (
                <AuthErrorDisplay
                    title={content.error.invalidToken.title}
                    description={content.error.invalidToken.description({ tokenErrorMessage })}
                    actionLink={content.error.invalidToken.actionLink}
                />
            ) : isSuccess && data?.message ? (
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
                    fields={resetPasswordFormFields}
                    btnTitle={content.form.buttonText}
                />
            )}
        </AuthCard>
    );
}
