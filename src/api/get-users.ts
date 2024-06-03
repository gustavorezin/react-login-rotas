import { api } from "@/lib/axios";

interface GetUsersResponse {
  id: number;
  username: string;
  password: string;
  isAdmin: boolean;
}

export async function getUsers() {
  const response = await api.get<GetUsersResponse[]>("/users");
  return response.data;
}
