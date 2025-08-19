import { AuthCard } from '../ui/auth-card';
import { Link } from 'react-router';
import { BaseAuthForm } from '../ui/base-auth-form';
import { resendConfirmationEmailFormFields } from '../config/form-fields-config';
import { FRONTEND_PATHS } from '@/app/router/all-path';
import useResendConfirmEmail from '../hooks/useResendConfirmEmail';

export function ResendConfirmEmailForm({ className, ...props }: React.ComponentProps<'div'>) {
  const { onSubmit, form, isSuccess, resMessage } = useResendConfirmEmail();
  return (
    <AuthCard
      title="Resend confirmation email"
      errorTitle="aboba"
      className={className}
      footerContent={
        <>
          <span>Return to login?</span>
          <Link className="hover:underline" to={FRONTEND_PATHS.LOGIN}>
            {'Sign in'}
          </Link>
        </>
      }
      {...props}
    >
      {isSuccess ? (
        <div className="text-3xl">{resMessage}</div>
      ) : (
        <BaseAuthForm
          form={form}
          onSubmit={onSubmit}
          fields={resendConfirmationEmailFormFields}
          btnTitle="Resend"
        ></BaseAuthForm>
      )}
    </AuthCard>
  );
}
