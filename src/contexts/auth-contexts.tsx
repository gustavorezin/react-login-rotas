import { signIn } from "@/api/sign-in";
import { useMutation } from "@tanstack/react-query";
import { ReactNode, createContext, useState } from "react";

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const auth = localStorage.getItem("auth");
    return auth === "true";
  });

  const { mutateAsync: authenticateFn } = useMutation({
    mutationFn: signIn,
  });

  const login = async (username: string, password: string) => {
    try {
      await authenticateFn({ username, password });
      setIsAuthenticated(true);
      localStorage.setItem("auth", "true");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = async () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
