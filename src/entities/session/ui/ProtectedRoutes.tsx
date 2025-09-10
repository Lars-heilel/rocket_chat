import { Navigate, Outlet } from 'react-router';
import { useAppSelector } from '@/shared/lib/redux/use-redux-hooks';
import { FRONTEND_ROUTES } from '@/shared/config';
import { Spinner } from '@/shared/ui';

export function ProtectedRoute() {
    const token = useAppSelector((state) => state.session.token);
    const isInitialized = useAppSelector((state) => state.session._isInitialized);
    if (!isInitialized) {
        return <Spinner size="lg" />;
    }
    return token ? <Outlet /> : <Navigate to={FRONTEND_ROUTES.LOGIN} replace />;
}
