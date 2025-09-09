import { useCallback } from 'react';

import { useNavigate } from 'react-router';

import { logOut } from '@/entities/session/model/sessionSlice';
import { useAppDispatch } from '@/shared/hooks/use-redux-hooks';
import { rtkErrorParser } from '@/shared/lib/RTK/rtkErrorParser';

import { AUTH_FRONTEND_PATH } from '../const';
import { useLogoutMutation } from '../store/auth-api-slice';

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
                navigate(AUTH_FRONTEND_PATH.LOGIN);
            });
    }, [dispatch, logout, navigate]);
    return { hanldeLogout, ...mutationProps, errorMessage };
}
