import { ReactNode, createContext, useState } from "react";

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const auth = localStorage.getItem("auth");
    return auth === "true";
  });

  const login = async () => {
    setIsAuthenticated(true);
    localStorage.setItem("auth", "true");
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
