import { BaseForm, FormCard } from '@/shared/ui';
import type { LoginFormProps } from './LoginForm.props';
import { loginFormFields, loginContent } from '../config';

export function LoginForm({ form, isError, isLoading, errorMessage, onSubmit }: LoginFormProps) {
    const { cardContent } = loginContent;
    return (
        <FormCard
            isError={isError}
            errorMessage={errorMessage}
            title={cardContent.title}
            footerContent={
                <>
                    <span>{cardContent.footerText}</span>
                    {cardContent.footerLink}
                </>
            }
        >
            <BaseForm isLoading={isLoading} form={form} onSubmit={onSubmit} fields={loginFormFields} btnTitle={cardContent.buttonText} />
        </FormCard>
    );
}
