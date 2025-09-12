import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { FormFieldConfig } from './types';
import { Button } from '@/shared/shadcn-ui/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/shadcn-ui/ui/form';
import { Input } from '@/shared/shadcn-ui/ui/input';
import { Loader2 } from 'lucide-react';

interface BaseFormProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    onSubmit: (values: T) => void;
    btnTitle: string;
    fields: FormFieldConfig<T>[];
    isLoading: boolean;
}

export function BaseForm<T extends FieldValues>({ form, onSubmit, btnTitle, fields, isLoading }: BaseFormProps<T>) {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {fields.map((fieldConfig) => (
                    <FormField
                        key={fieldConfig.name}
                        control={form.control}
                        name={fieldConfig.name}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex justify-between">
                                    <span>{fieldConfig.label}</span>
                                    {fieldConfig.formLabelChildren}
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder={fieldConfig.placeholder} type={fieldConfig.type} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
                <Button disabled={isLoading} size={'lg'} className="w-full" type="submit">
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </>
                    ) : (
                        btnTitle
                    )}
                </Button>
            </form>
        </Form>
    );
}
