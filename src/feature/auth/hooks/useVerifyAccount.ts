import { JwtTokenSchema, MailParamsTokenSchema } from '../schemas';
import { useNavigate, useSearchParams } from 'react-router';
import { useVerifyAccountMutation } from '@/shared/api/api-service';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/authSlices';
import { FRONTEND_PROTECTED_PATH } from '@/app/router/all-path';

export function useVerifyAccount() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const paramsData = searchParams.get('token');
  const [request, { isSuccess }] = useVerifyAccountMutation();
  const dispatch = useDispatch();
  async function handleVarify() {
    const validate = await MailParamsTokenSchema.safeParseAsync(paramsData);
    if (validate.success) {
      const response = await request({ token: validate.data }).unwrap();
      const parseResult = await JwtTokenSchema.safeParseAsync(response);
      if (!parseResult.success) {
        throw new Error(`${parseResult.error}`);
      } else {
        dispatch(setCredentials(parseResult.data));
        navigate(`${FRONTEND_PROTECTED_PATH.MESSENGER}`);
      }
    } else {
      console.error('Ошибка валидации токена:', validate.error.message);
    }
  }
  return {
    handleVarify,
    isSuccess,
  };
}
