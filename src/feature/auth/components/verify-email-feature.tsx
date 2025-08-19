import { FRONTEND_PATHS } from '@/app/router/all-path';
import { AuthCard } from '../ui/auth-card';

import { Link } from 'react-router';
import { Button } from '@/shared/components/ui/button';
import { useVerifyAccount } from '../hooks/useVerifyAccount';

export function VerifyEmailFeature({ className, ...props }: React.ComponentProps<'div'>) {
  const { handleVarify } = useVerifyAccount();
  return (
    <AuthCard
      title="Confirmation"
      errorTitle="aboba"
      className={className}
      footerContent={
        <>
          <span>Return to login?</span>
          <Link className="hover:underline" to={FRONTEND_PATHS.LOGIN}>
            {'Login'}
          </Link>
        </>
      }
      {...props}
    >
      <div>
        <Button onClick={handleVarify}>Нажми шоб продолжить</Button>
      </div>
    </AuthCard>
  );
}
