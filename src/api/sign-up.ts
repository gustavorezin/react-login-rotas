import { api } from "@/lib/axios";
import { getUsers } from "./get-users";

interface SignUpParams {
  username: string;
  password: string;
  isAdmin: boolean;
}

export async function signUp({ username, password, isAdmin }: SignUpParams) {
  const users = await getUsers();
  const user = users.find((user) => user.username === username);

  if (user) {
    throw new Error("Usuário já cadastrado!");
  }

  await api.post("/users", { username, password, isAdmin });
}
