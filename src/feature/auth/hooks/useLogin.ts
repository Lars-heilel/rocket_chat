import { useLoginMutation } from '@/shared/api/api-service';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setCredentials } from '../store/authSlices';
import { FRONTEND_PROTECTED_PATH } from '@/app/router/all-path';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginSchema, type LoginFormData } from '../schemas';
import { Logger } from '@/shared/lib/logger';
import { rtkQueryTypeguard } from '@/shared/api/types/rtk-query.typeguard';

export function useLogin() {
    const logger = new Logger('useLogin');
    const form = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const [login, { ...mutationProps }] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errorMessage = rtkQueryTypeguard(mutationProps.error);
    async function onSubmit(data: LoginFormData) {
        logger.debug(`Попытка входа `);
        const response = await login(data).unwrap();
        if (response.token) {
            logger.log(`Вход успешен`);
            dispatch(setCredentials(response));
            navigate(FRONTEND_PROTECTED_PATH.MESSENGER);
        }
    }
    return { form, onSubmit, ...mutationProps, errorMessage };
}
