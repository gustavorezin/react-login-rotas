import { useAuth } from "@/hooks/useAuth";
import { ReactNode, createContext } from "react";

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextType {
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  newUser: (
    username: string,
    password: string,
    isAdmin: boolean
  ) => Promise<boolean>;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProps) {
  const { login, logout, newUser } = useAuth();

  return (
    <AuthContext.Provider value={{ login, logout, newUser }}>
      {children}
    </AuthContext.Provider>
  );
}
