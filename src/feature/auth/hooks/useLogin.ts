import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginSchema,
  type LoginFormData,
} from "../model/schemas/zodLoginFromSchema";
export function useLogin() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(data: LoginFormData) {}

  return {
    form,
    onSubmit,
  };
}
