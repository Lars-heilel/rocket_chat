import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, type ForgotPasswordFormData } from "../schemas";
import { useForm } from "react-hook-form";
import { useForgotPasswordMutation } from "@/shared/api/api-service";
import { useState } from "react";

export default function useForgotPassword() {
  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
    defaultValues: { email: "" },
  });
  const [resMessage, setResMessage] = useState("");
  const [request, { isSuccess, isLoading, error }] =
    useForgotPasswordMutation();
  async function onSubmit(data: ForgotPasswordFormData) {
    const response = await request(data).unwrap();
    setResMessage(response.message);
  }
  return {
    form,
    onSubmit,
    resMessage,
    isLoading,
    isSuccess,
    error,
  };
}
