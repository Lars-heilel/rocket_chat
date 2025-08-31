import { Navigate, Outlet } from 'react-router';
import { useAppSelector } from '@/shared/hooks/use-redux-hooks';
import { AUTH_FRONTEND_PATH } from '@/feature/auth/model/const';
import { Spiner } from '@/shared/components/ui/spiner';

export function ProtectedRoute() {
    const token = useAppSelector((state) => state.session.token);
    const isInitialized = useAppSelector((state) => state.session._isInitialized);
    if (!isInitialized) {
        return <Spiner />;
    }
    return token ? <Outlet /> : <Navigate to={AUTH_FRONTEND_PATH.LOGIN} replace />;
}
