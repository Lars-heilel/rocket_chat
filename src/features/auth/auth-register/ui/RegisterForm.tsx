import { registerFormFields, RegisterContent } from '../config';
import { BaseForm, FormCard, SuccessDisplay } from '@/shared/ui';
import type { RegisterFormProps } from './RegisterForm.props';
export function RegisterForm({ form, onSubmit, isSuccess, data, isError, isLoading, errorMessage }: RegisterFormProps) {
    const { success, cardContent } = RegisterContent;
    return (
        <FormCard
            isError={isError}
            errorMessage={errorMessage}
            title={isSuccess ? success.title : cardContent.title}
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
                <SuccessDisplay description={success.description} children={success.actionLinks} />
            ) : (
                <BaseForm
                    isLoading={isLoading}
                    form={form}
                    onSubmit={onSubmit}
                    fields={registerFormFields}
                    btnTitle={cardContent.buttonText}
                />
            )}
        </FormCard>
    );
}
