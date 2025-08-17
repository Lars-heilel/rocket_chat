import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import type { FormFieldProps } from "../config/form-fields-config";

interface BaseAuthFormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  onSubmit: (values: T) => void;
  btnTitle: string;
  fields: FormFieldProps<T>[];
}
export function BaseAuthForm<T extends FieldValues>({
  form,
  onSubmit,
  btnTitle,
  fields,
}: BaseAuthFormProps<T>) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {fields.map((fieldsConfig) => (
          <FormField
            key={fieldsConfig.name}
            control={form.control}
            name={fieldsConfig.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-between">
                  <span>{fieldsConfig.label}</span>
                  {fieldsConfig.formLabelChildren}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={fieldsConfig.placeholder}
                    type={fieldsConfig.type}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button size={"lg"} className="w-full" type="submit">
          {btnTitle}
        </Button>
      </form>
    </Form>
  );
}
