import { Link } from 'react-router';
import { useResetPassword } from '../model';
import { resetPasswordContent, resetPasswordFormFields } from '../config';
import { BaseForm, ErrorDisplay, FormCard, SuccessDisplay } from '@/shared/ui';

export function ResetPasswordForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { form, onSubmit, isLoading, isSuccess, isError, errorMessage, tokenError, tokenErrorMessage, data } = useResetPassword();
    const content = resetPasswordContent;
    return (
        <FormCard
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
                <ErrorDisplay
                    title={content.error.invalidToken.title}
                    description={content.error.invalidToken.description({ tokenErrorMessage })}
                    actionLink={content.error.invalidToken.actionLink}
                />
            ) : isSuccess && data?.message ? (
                <SuccessDisplay
                    title={content.success.title}
                    description={content.success.description(data)}
                    actionLink={content.success.actionLink}
                />
            ) : (
                <BaseForm
                    isLoading={isLoading}
                    form={form}
                    onSubmit={onSubmit}
                    fields={resetPasswordFormFields}
                    btnTitle={content.form.buttonText}
                />
            )}
        </FormCard>
    );
}
