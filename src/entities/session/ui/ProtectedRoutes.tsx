import { Navigate, Outlet } from 'react-router';
import { Spiner } from '@/shared/components/ui/spiner';
import { useAppSelector } from '@/shared/hooks/use-redux-hooks';
import { FRONTEND_ROUTES } from '@/shared/config';

export function ProtectedRoute() {
    const token = useAppSelector((state) => state.session.token);
    const isInitialized = useAppSelector((state) => state.session._isInitialized);
    if (!isInitialized) {
        return <Spiner />;
    }
    return token ? <Outlet /> : <Navigate to={FRONTEND_ROUTES.LOGIN} replace />;
}
