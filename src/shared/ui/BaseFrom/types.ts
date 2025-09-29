import type { Path } from 'react-hook-form';
import type { ReactNode, HTMLInputTypeAttribute } from 'react';
export interface FormFieldConfig<T> {
    name: Path<T>;
    label?: string;
    placeholder: string;
    type?: HTMLInputTypeAttribute;
    formLabelChildren?: ReactNode;
}
