import { Link } from 'react-router';
import { useRegister } from '../model';
import { registerFormFields, RegisterTxtContent } from '../config';
import { BaseForm, FormCard, SuccessDisplay } from '@/shared/ui';
export function RegisterForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { form, onSubmit, isSuccess, data, isError, isLoading, errorMessage } = useRegister();
    const content = RegisterTxtContent;
    return (
        <FormCard
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
                    fields={registerFormFields}
                    btnTitle={content.form.buttonText}
                />
            )}
        </FormCard>
    );
}
