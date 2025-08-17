import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/shared/components/ui/form";
import {Input} from "@/shared/components/ui/input";
import {Button} from "@/shared/components/ui/button";
import type {UseFormReturn} from "react-hook-form";
import type {FormFieldProps} from "../const/form-fields-config";

interface BaseAuthFormProps {
  form: UseFormReturn;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: any) => void;
  btnTitle: string;
  fields: FormFieldProps[];
}
export function BaseAuthForm({
  form,
  onSubmit,
  btnTitle,
  fields,
}: BaseAuthFormProps) {
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
