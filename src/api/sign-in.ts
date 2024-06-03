import { getUsers } from "./get-users";

interface SignInProps {
  username: string;
  password: string;
}

export async function signIn({ username, password }: SignInProps) {
  const users = await getUsers();

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    throw new Error("Falha ao fazer login!");
  }
}
