import { api } from "@/lib/axios";

interface DeleteUserProps {
  id: number;
}

export async function deleteUser({ id }: DeleteUserProps) {
  await api.delete(`/users/${id}`);
}
