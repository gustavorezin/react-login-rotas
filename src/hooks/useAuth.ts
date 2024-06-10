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
      const response = await authenticateFn({ username, password });
      const user = { username: response.username, isAdmin: response.isAdmin };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem("user");
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
