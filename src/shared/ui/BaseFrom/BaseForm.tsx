import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { FormFieldConfig } from './types';
import { Button, type buttonVariants } from '@/shared/shadcn-ui/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/shadcn-ui/ui/form';
import { Input } from '@/shared/shadcn-ui/ui/input';
import { Loader2 } from 'lucide-react';
import type { VariantProps } from 'class-variance-authority';
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
    const renderContent = () => (
        <>
            {fields.map((fieldConfig) => (
                <FormField
                    key={fieldConfig.name}
                    control={form.control}
                    name={fieldConfig.name}
                    render={({ field }) => (
                        <FormItem className="flex-1">
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
                                    <Textarea className="resize-none " placeholder={fieldConfig.placeholder} {...field} />
                                )}
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            ))}
            <Button variant={btnVariant} className="w-full" size={btnSize} disabled={isLoading} type="submit">
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
        </>
    );

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {variant === 'input' ? renderContent() : <div className="grid gap-2">{renderContent()}</div>}
            </form>
        </Form>
    );
}
