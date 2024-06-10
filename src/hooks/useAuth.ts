import { UserDTO } from "@/api/get-users";
import { signIn } from "@/api/sign-in";
import { signUp } from "@/api/sign-up";
import { useMutation } from "@tanstack/react-query";

interface UseAuthProps {
  setUser: (user: UserDTO | null) => void;
}

export function useAuth({ setUser }: UseAuthProps) {
  const { mutateAsync: authenticateFn } = useMutation({
    mutationFn: signIn,
  });

  const { mutateAsync: registerFn } = useMutation({
    mutationFn: signUp,
  });

  const login = async (username: string, password: string) => {
    try {
      const user = await authenticateFn({ username, password });
      localStorage.setItem("auth", "true");
      setUser({ username: user.username, isAdmin: user.isAdmin });
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  };

  const logout = async () => {
    localStorage.removeItem("auth");
    setUser(null);
  };

  const newUser = async (
    username: string,
    password: string,
    isAdmin: boolean
  ) => {
    try {
      await registerFn({ username, password, isAdmin });
      await login(username, password);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  };

  return { login, logout, newUser };
}
