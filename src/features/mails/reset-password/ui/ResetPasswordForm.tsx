import { useResetPassword } from '../model';
import { resetPasswordContent, resetPasswordFormFields } from '../config';
import { BaseForm, ErrorDisplay, FormCard, SuccessDisplay } from '@/shared/ui';

export function ResetPasswordForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { form, onSubmit, isLoading, isSuccess, isError, errorMessage, tokenError, tokenErrorMessage, data } = useResetPassword();
    const { cardContent, success, error } = resetPasswordContent;
    return (
        <FormCard
            title={isSuccess ? data.message : cardContent.title}
            isError={isError}
            errorMessage={errorMessage}
            className={className}
            footerContent={isSuccess ? null : <>{cardContent.footerLink}</>}
            {...props}
        >
            {tokenError ? (
                <ErrorDisplay title={error.title} description={isError ? errorMessage : tokenErrorMessage} children={error.actionLinkS} />
            ) : isSuccess && data?.message ? (
                <SuccessDisplay description={success.description} children={success.actionLink} />
            ) : (
                <BaseForm
                    isLoading={isLoading}
                    form={form}
                    onSubmit={onSubmit}
                    fields={resetPasswordFormFields}
                    btnTitle={cardContent.buttonText}
                />
            )}
        </FormCard>
    );
}
