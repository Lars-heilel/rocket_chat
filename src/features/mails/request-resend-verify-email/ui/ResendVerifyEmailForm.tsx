import { Link } from 'react-router';
import useResendVerifyEmail from '../model/useRequestVerifyEmail';
import { BaseForm, FormCard, SuccessDisplay } from '@/shared/ui';
import { ResendVerifyMailFormFields, ResendVerifyMailTxtContent } from '../config';

export function ResendVerifyEmailForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { onSubmit, form, isSuccess, isLoading, isError, errorMessage, data } = useResendVerifyEmail();
    const content = ResendVerifyMailTxtContent;
    return (
        <FormCard
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
                    fields={ResendVerifyMailFormFields}
                    btnTitle={content.form.buttonText}
                />
            )}
        </FormCard>
    );
}
