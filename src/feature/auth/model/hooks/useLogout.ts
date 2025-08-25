import { useNavigate } from 'react-router';
import { useLogoutMutation } from '../store/auth-api-slice';
import { AUTH_FRONTEND_PATH } from '../const';
import { useAppDispatch } from '@/shared/hooks/use-redux-hooks';
import { logOut } from '@/entities/session/store/sessionSlice';
import { clearUser } from '@/entities/user/model';
import { rtkQueryTypeguard } from '@/shared/api/types/rtk-query.typeguard';
import { useCallback } from 'react';

export function useLogout() {
    const [logout, { ...mutationProps }] = useLogoutMutation();
    const errorMessage = rtkQueryTypeguard(mutationProps.error);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const hanldeLogout = useCallback(async () => {
        await logout()
            .unwrap()
            .then(() => {
                dispatch(clearUser(), dispatch(logOut(), navigate(AUTH_FRONTEND_PATH.LOGIN)));
            });
    }, [dispatch, logout, navigate]);
    return { hanldeLogout, ...mutationProps, errorMessage };
}
