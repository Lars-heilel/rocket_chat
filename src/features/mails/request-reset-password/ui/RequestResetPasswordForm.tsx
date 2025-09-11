import { useForgotPassword } from '../model';
import { BaseForm, FormCard, SuccessDisplay } from '@/shared/ui';
import { RequsetResetPasswordFormFields, RequsetResetPasswordContent } from '../config';
export function RequestResetPasswordForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { form, onSubmit, isSuccess, isError, isLoading, data, errorMessage } = useForgotPassword();
    const { cardContent, success } = RequsetResetPasswordContent;
    return (
        <FormCard
            title={cardContent.title}
            isError={isError}
            errorMessage={errorMessage}
            className={className}
            footerContent={isSuccess ? null : <>{cardContent.footerLink}</>}
            {...props}
        >
            {isSuccess && data?.message ? (
                <SuccessDisplay title={success.title} description={data.message} children={success.actionLink} />
            ) : (
                <BaseForm
                    isLoading={isLoading}
                    form={form}
                    onSubmit={onSubmit}
                    fields={RequsetResetPasswordFormFields}
                    btnTitle={cardContent.buttonText}
                />
            )}
        </FormCard>
    );
}
