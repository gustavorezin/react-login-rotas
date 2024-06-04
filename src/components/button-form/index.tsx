import { Button } from "./styles";

interface ButtonFormProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function ButtonForm({ title, ...props }: ButtonFormProps) {
  return <Button {...props}>{title}</Button>;
}
