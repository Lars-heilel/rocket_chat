import { Link } from 'react-router';
import { useForgotPassword } from '../model';
import { BaseForm, FormCard, SuccessDisplay } from '@/shared/ui';
import { RequsetResetPasswordFormFields, RequsetResetPasswordTxtContent } from '../config';
export function RequestResetPasswordForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { form, onSubmit, isSuccess, isError, isLoading, data, errorMessage } = useForgotPassword();
    const content = RequsetResetPasswordTxtContent;
    return (
        <FormCard
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
                    fields={RequsetResetPasswordFormFields}
                    btnTitle={content.form.buttonText}
                />
            )}
        </FormCard>
    );
}
