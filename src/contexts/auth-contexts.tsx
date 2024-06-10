import { UserDTO } from "@/api/get-users";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode, createContext, useState } from "react";

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextType {
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  newUser: (
    username: string,
    password: string,
    isAdmin: boolean
  ) => Promise<void>;
  user: UserDTO | null;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<UserDTO | null>(null);

  const { login, logout, newUser } = useAuth({ setUser });

  return (
    <AuthContext.Provider value={{ login, logout, newUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}
