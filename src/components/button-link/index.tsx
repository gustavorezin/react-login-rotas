import { LinkProps } from "react-router-dom";
import { LinkButton } from "./styles";

interface ButtonLinkProps extends LinkProps {
  title: string;
}

export function ButtonLink({ title, ...props }: ButtonLinkProps) {
  return <LinkButton {...props}>{title}</LinkButton>;
}
