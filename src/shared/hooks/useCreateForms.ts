import {zodResolver} from "@hookform/resolvers/zod";
import {type Mode, useForm, type UseFormReturn} from "react-hook-form";
import type {ZodObject} from "zod";

interface IUseFormConfig {
  schema: ZodObject;
  mode: Mode;
  defaultValues: {
    email?: string;
    password?: string;
    confirmPassword?: string;
    userName?: string;
  };
}
export function useCreateForms({
  schema,
  mode,
  defaultValues,
}: IUseFormConfig): UseFormReturn {
  const form = useForm({
    resolver: zodResolver(schema),
    mode,
    defaultValues,
  });
  return form;
}
