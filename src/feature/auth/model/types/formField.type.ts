export interface FormFieldProps {
  name: "email" | "password" | "confirmPassword" | "userName";
  label: string;
  placeholder: "example@mail.com" | "*******";
  type: React.HTMLInputTypeAttribute;
  formLabelChildren?: React.ReactNode;
}
