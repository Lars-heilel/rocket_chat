import { useEffect, type ReactNode } from 'react';
import { logOut, setCredentials } from '@/entities/session/store/sessionSlice';
import { Spiner } from '@/shared/components/ui/spiner';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/use-redux-hooks';
import { JwtTokenSchema } from '@/entities/session/schema/jwt-token.schema';
import { useRefreshMutation } from '@/feature/auth/model/store/auth-api-slice';

export function AuthProvider({ children }: { children: ReactNode }) {
    const token = useAppSelector((state) => state.session.token);
    const [refresh, { isLoading }] = useRefreshMutation();
    const dispatch = useAppDispatch();
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
