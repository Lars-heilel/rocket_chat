import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/reduxStore';
import { useRefreshMutation } from '@/shared/api/api-service';
import { useEffect, type ReactNode } from 'react';
import { logOut, setCredentials } from '@/feature/auth/store/authSlices';
import { JwtTokenSchema } from '@/feature/auth/schemas';

export function AuthProvider({ children }: { children: ReactNode }) {
  const { token } = useSelector((state: RootState) => state.auth);
  const [refresh, { isSuccess }] = useRefreshMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    const refreshSession = async () => {
      const response = await refresh().unwrap();
      const validate = await JwtTokenSchema.safeParseAsync(response);
      if (validate.success) {
        dispatch(setCredentials(response));
      } else {
        dispatch(logOut());
      }
    };
    if (!token) {
      refreshSession();
    }
  }, [dispatch, refresh, token]);
  if (isSuccess) {
    return children;
  }
}
