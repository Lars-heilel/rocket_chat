import { useGetMyProfileQuery } from '@/entities/user';
import { FRONTEND_ROUTES } from '@/shared/config';
import { Spinner } from '@/shared/ui';
import { Navigate, Outlet } from 'react-router';

export function ProtectedRoute() {
    const { data: currentUser, isLoading } = useGetMyProfileQuery();
    if (isLoading) {
        return <Spinner></Spinner>;
    }
    return currentUser ? <Outlet /> : <Navigate to={FRONTEND_ROUTES.LOGIN} replace />;
}
