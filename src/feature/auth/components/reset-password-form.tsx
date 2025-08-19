import { AuthCard } from '../ui/auth-card';
import { Link } from 'react-router';
import { BaseAuthForm } from '../ui/base-auth-form';
import { resetPasswordFormFields } from '../config/form-fields-config';
import { FRONTEND_PATHS } from '@/app/router/all-path';
import { useResetPassword } from '../hooks/useResetPassword';

export function ResetPasswordForm({ className, ...props }: React.ComponentProps<'div'>) {
  const { form, onSubmit, isSuccess, resMessage } = useResetPassword();
  return (
    <AuthCard
      title="Enter new password"
      errorTitle="Reset password failed"
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
          fields={resetPasswordFormFields}
          btnTitle="Reset"
        ></BaseAuthForm>
      )}
    </AuthCard>
  );
}
