import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/reduxStore';
import { useRefreshMutation } from '@/shared/api/api-service';
import { useEffect, type ReactNode } from 'react';
import { logOut, setCredentials } from '@/feature/auth/store/authSlices';
import { JwtTokenSchema } from '@/feature/auth/schemas';
import { Spiner } from '@/shared/components/ui/spiner';

export function AuthProvider({ children }: { children: ReactNode }) {
    const { token } = useSelector((state: RootState) => state.auth);
    const [refresh, { isLoading }] = useRefreshMutation();
    const dispatch = useDispatch();
    useEffect(() => {
        const refreshSession = async () => {
            try {
                const response = await refresh().unwrap();
                const validate = await JwtTokenSchema.safeParseAsync(response);
                if (validate.success) {
                    dispatch(setCredentials(response));
                } else {
                    dispatch(logOut());
                }
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error: unknown) {
                dispatch(logOut());
            }
        };

        if (!token) {
            refreshSession();
        }
    }, [dispatch, refresh, token]);

    if (isLoading) {
        return <Spiner />;
    }
    return children;
}
