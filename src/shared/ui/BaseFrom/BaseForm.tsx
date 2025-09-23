import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { FormFieldConfig } from './types';
import { Button, type buttonVariants } from '@/shared/shadcn-ui/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/shadcn-ui/ui/form';
import { Input } from '@/shared/shadcn-ui/ui/input';
import { Loader2 } from 'lucide-react';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils';
import { Textarea } from '@/shared/shadcn-ui/ui/textarea';
type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface BaseFormProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    onSubmit: (values: T) => void;
    btnTitle?: string;
    btnChildren?: React.ReactNode;
    btnVariant?: ButtonVariantProps['variant'];
    btnSize?: ButtonVariantProps['size'];
    fields: FormFieldConfig<T>[];
    isLoading: boolean;
    variant?: 'textarea' | 'input';
}

export function BaseForm<T extends FieldValues>({
    variant = 'input',
    form,
    onSubmit,
    btnTitle,
    fields,
    isLoading,
    btnChildren,
    btnVariant,
    btnSize,
}: BaseFormProps<T>) {
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
                                {variant === 'textarea' ? null : (
                                    <FormLabel className="flex justify-between">
                                        <span>{fieldConfig.label}</span>
                                        {fieldConfig.formLabelChildren}
                                    </FormLabel>
                                )}
                                <FormControl>
                                    {variant === 'input' ? (
                                        <Input placeholder={fieldConfig.placeholder} type={fieldConfig.type} {...field} />
                                    ) : (
                                        <Textarea placeholder={fieldConfig.placeholder} {...field} />
                                    )}
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
                <Button variant={btnVariant} size={btnSize} disabled={isLoading} type="submit" className={cn('w-full')}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </>
                    ) : (
                        <>
                            {btnTitle}
                            {btnChildren}
                        </>
                    )}
                </Button>
            </form>
        </Form>
    );
}
