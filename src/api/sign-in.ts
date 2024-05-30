import { api } from "@/lib/axios";

interface GetUserResponse {
  id: number;
  username: string;
  password: string;
  isAdmin: boolean;
}

interface SignInProps {
  username: string;
  password: string;
}

export async function signIn({ username, password }: SignInProps) {
  const response = await api.get<GetUserResponse[]>("/users");
  const users = response.data;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    throw new Error("Falha ao fazer login!");
  }
}
