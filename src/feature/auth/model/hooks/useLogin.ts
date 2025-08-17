import {
  LoginResponseSchema,
  LoginSchema,
  type LoginFormData,
} from "../schemas/loginFromSchema";
import { useLoginMutation } from "@/shared/api/api-service";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setCredentials } from "../slices/authSlices";
import { FRONTEND_PROTECTED_PATH } from "@/app/router/all-path";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
export function useLogin() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [login, { isError, isLoading, isSuccess }] = useLoginMutation();
  const nav = useNavigate();
  const dispatch = useDispatch();
  async function onSubmit(data: LoginFormData) {
    try {
      const response = await login(data).unwrap();
      const parseResult = await LoginResponseSchema.safeParseAsync(response);
      if (!parseResult.success) {
        throw new Error(`${parseResult.error}`);
      } else {
        dispatch(setCredentials(parseResult.data));
        nav(`${FRONTEND_PROTECTED_PATH.MESSENGER}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
  return { form, isError, isLoading, isSuccess, onSubmit };
}
