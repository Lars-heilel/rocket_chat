import { Navigate, Outlet } from 'react-router';

import { useAppSelector } from '@/shared/hooks/use-redux-hooks';
import { AUTH_FRONTEND_PATH } from '@/feature/auth/model/const';

export function ProtectedRoute() {
    const token = useAppSelector((state) => state.session.token);
    return token ? <Outlet></Outlet> : <Navigate to={AUTH_FRONTEND_PATH.LOGIN} replace></Navigate>;
}
