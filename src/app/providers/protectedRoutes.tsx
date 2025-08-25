import { Navigate, Outlet } from 'react-router';
import { FRONTEND_PATHS } from '../router/all-path';
import { useAppSelector } from '@/shared/hooks/use-redux-hooks';

export function ProtectedRoute() {
    const token = useAppSelector((state) => state.session.token);
    return token ? <Outlet></Outlet> : <Navigate to={FRONTEND_PATHS.LOGIN} replace></Navigate>;
}
