import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form';
import { Input } from '@/shared/components/ui/input';
import { Button } from '@/shared/components/ui/button';
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { FormFieldProps } from '../config/form-fields-config';
import { BtnLoader } from './btn-loader';

interface BaseAuthFormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  onSubmit: (values: T) => void;
  btnTitle: string;
  fields: FormFieldProps<T>[];
  isLoading: boolean;
}
export function BaseAuthForm<T extends FieldValues>({
  form,
  onSubmit,
  btnTitle,
  fields,
  isLoading,
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
        <Button disabled={isLoading} size={'lg'} className="w-full" type="submit">
          {isLoading ? <BtnLoader></BtnLoader> : btnTitle}
        </Button>
      </form>
    </Form>
  );
}
