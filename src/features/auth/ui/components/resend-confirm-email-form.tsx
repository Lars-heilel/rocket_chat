import { Link } from 'react-router';

import { resendConfirmationEmailFormFields } from '@/feature/auth/config/form-fields-config';
import useResendConfirmEmail from '@/feature/auth/model/hooks/useResendConfirmEmail';
import { AuthCard } from '@/feature/auth/ui/elements/auth-card';
import { AuthSuccessDisplay } from '@/feature/auth/ui/elements/auth-success-display';
import { BaseAuthForm } from '@/feature/auth/ui/elements/base-auth-form';

import { AUTH_CONTENT_CONFIG } from '../../config/text-content-config';

export function ResendConfirmEmailForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { onSubmit, form, isSuccess, isLoading, isError, errorMessage, data } =
        useResendConfirmEmail();
    const content = AUTH_CONTENT_CONFIG.resendConfirmEmail;
    return (
        <AuthCard
            isError={isError}
            title={content.form.title}
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
                    fields={resendConfirmationEmailFormFields}
                    btnTitle={content.form.buttonText}
                />
            )}
        </AuthCard>
    );
}
