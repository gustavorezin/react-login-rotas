import { forwardRef } from "react";
import { Input } from "./styles";

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  labelTitle: string;
  hasError: boolean;
}

export const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ hasError, labelName, labelTitle, ...props }, ref) => {
    return (
      <>
        <label htmlFor={labelName}>{labelTitle}</label>
        <Input {...props} ref={ref} $hasError={hasError} />
      </>
    );
  }
);
