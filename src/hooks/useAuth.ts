import { signIn } from "@/api/sign-in";
import { signUp } from "@/api/sign-up";
import { useMutation } from "@tanstack/react-query";

export function useAuth() {
  const { mutateAsync: authenticateFn } = useMutation({
    mutationFn: signIn,
  });

  const { mutateAsync: registerFn } = useMutation({
    mutationFn: signUp,
  });

  const login = async (username: string, password: string) => {
    try {
      await authenticateFn({ username, password });
      localStorage.setItem("auth", "true");
      return true;
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
      return false;
    }
  };

  const logout = async () => {
    localStorage.removeItem("auth");
  };

  const newUser = async (
    username: string,
    password: string,
    isAdmin: boolean
  ) => {
    try {
      await registerFn({ username, password, isAdmin });
      return await login(username, password);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
      return false;
    }
  };

  return { login, logout, newUser };
}
