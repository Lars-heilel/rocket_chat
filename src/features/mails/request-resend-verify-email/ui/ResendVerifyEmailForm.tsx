import useResendVerifyEmail from '../model/useRequestVerifyEmail';
import { BaseForm, FormCard, SuccessDisplay } from '@/shared/ui';
import { ResendVerifyMailFormFields, ResendVerifyMailContent } from '../config';

export function ResendVerifyEmailForm() {
    const { onSubmit, form, isSuccess, isLoading, isError, errorMessage, data } = useResendVerifyEmail();
    const { cardContent, success } = ResendVerifyMailContent;
    return (
        <FormCard
            isError={isError}
            title={cardContent.title}
            errorMessage={errorMessage}
            footerContent={
                isSuccess ? null : (
                    <>
                        <span>{cardContent.footerText}</span>
                        {cardContent.footerLink}
                    </>
                )
            }
        >
            {isSuccess && data?.message ? (
                <SuccessDisplay description={success.description(data)} children={success.actionLink} />
            ) : (
                <BaseForm
                    isLoading={isLoading}
                    form={form}
                    onSubmit={onSubmit}
                    fields={ResendVerifyMailFormFields}
                    btnTitle={cardContent.buttonText}
                />
            )}
        </FormCard>
    );
}
