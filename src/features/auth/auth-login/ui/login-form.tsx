import { Link } from 'react-router';
import { loginFormFields, loginTxtContent } from '../config';
import { BaseForm, FormCard } from '@/shared/ui';
import { useLogin } from '../model';

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { form, onSubmit, isLoading, isError, errorMessage } = useLogin();
    const content = loginTxtContent;

    return (
        <FormCard
            isError={isError}
            errorMessage={errorMessage}
            title={content.form.title}
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
            <BaseForm isLoading={isLoading} form={form} onSubmit={onSubmit} fields={loginFormFields} btnTitle={content.form.buttonText} />
        </FormCard>
    );
}
