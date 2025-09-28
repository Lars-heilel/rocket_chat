import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { rtkErrorParser, useAppDispatch } from '@/shared/lib';
import { FRONTEND_ROUTES } from '@/shared/config';
import { logOut, useLogoutMutation } from '@/entities/session';
export function useLogout() {
    const [logout, { ...mutationProps }] = useLogoutMutation();
    const errorMessage = rtkErrorParser(mutationProps.error);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const hanldeLogout = useCallback(async () => {
        await logout()
            .unwrap()
            .then(() => {
                dispatch(logOut());
                navigate(FRONTEND_ROUTES.LOGIN);
            });
    }, [dispatch, logout, navigate]);
    return { hanldeLogout, ...mutationProps, errorMessage };
}
