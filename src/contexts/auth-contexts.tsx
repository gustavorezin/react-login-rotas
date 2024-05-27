import { ReactNode, createContext, useState } from "react";
import { fakeTimerWait } from "../utils/fake-timer-wait";

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function login() {
    fakeTimerWait();
    setIsAuthenticated(true);
    localStorage.setItem("auth", "true");
  }

  async function logout() {
    fakeTimerWait();
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
