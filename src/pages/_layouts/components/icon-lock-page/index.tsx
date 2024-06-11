import { Lock, LockOpen } from "@phosphor-icons/react";
import { IconContainer, TextOnHover } from "./styles";

interface IconLockPageProps {
  typePage: "PÚBLICA" | "PRIVADA";
}

export function IconLockPage({ typePage }: IconLockPageProps) {
  const icon =
    typePage === "PRIVADA" ? <Lock size={24} /> : <LockOpen size={24} />;

  return (
    <IconContainer $typePage={typePage}>
      {icon}
      <TextOnHover>ROTA {typePage}</TextOnHover>
    </IconContainer>
  );
}
