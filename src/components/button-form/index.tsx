import { SpinnerLoading } from "../spinner-loading";
import { Button } from "./styles";

interface ButtonFormProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function ButtonForm({ title, ...props }: ButtonFormProps) {
  return (
    <Button {...props}>{props.disabled ? <SpinnerLoading /> : title}</Button>
  );
}
