import { loginFormFields, loginTxtContent } from '../config';
import { BaseForm, FormCard } from '@/shared/ui';
import { useLogin } from '../model';

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { form, onSubmit, isLoading, isError, errorMessage } = useLogin();
    const { cardContent } = loginTxtContent;

    return (
        <FormCard
            isError={isError}
            errorMessage={errorMessage}
            title={cardContent.title}
            className={className}
            footerContent={
                <>
                    <span>{cardContent.footerText}</span>
                    {cardContent.footerLink}
                </>
            }
            {...props}
        >
            <BaseForm isLoading={isLoading} form={form} onSubmit={onSubmit} fields={loginFormFields} btnTitle={cardContent.buttonText} />
        </FormCard>
    );
}
