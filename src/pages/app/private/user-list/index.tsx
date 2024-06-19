import { deleteUser } from "@/api/delete-user";
import { getUsers } from "@/api/get-users";
import { ButtonLink } from "@/components/button-link";
import { UsersTableSkeleton } from "@/components/users-table-skeleton";
import { AuthContext } from "@/contexts/auth-contexts";
import { Eye, EyeSlash, Trash } from "@phosphor-icons/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import {
  ButtonDelete,
  ButtonPassword,
  Container,
  ContainerButtons,
  Table,
} from "./styles";

export function UserList() {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [visiblePasswords, setVisiblePasswords] = useState<
    Record<number, boolean>
  >({});

  if (!user?.isAdmin) {
    throw new Error("Você não tem permissão para acessar esta página");
  }

  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  const { mutateAsync: deleteUserFn, isPending: isDeletingUser } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  async function handleDeleteUser(id: number) {
    try {
      if (user?.id === id) {
        throw new Error("Você não tem permissão para excluir o usuário atual.");
      }
      await deleteUserFn({ id });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  function togglePasswordVisibility(id: number) {
    setVisiblePasswords((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  return (
    <>
      <Helmet title="Privada" />
      <Container>
        <h1>Listagem de usuários 🧐</h1>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Senha</th>
              <th>Admin</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {(isLoadingUsers || isDeletingUser) && <UsersTableSkeleton />}
            {users &&
              !isDeletingUser &&
              users.map((user) => {
                const isPasswordVisible = visiblePasswords[user.id];
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>
                      <ButtonPassword
                        type="button"
                        onClick={() => togglePasswordVisibility(user.id)}
                      >
                        {isPasswordVisible ? (
                          <EyeSlash size={14} />
                        ) : (
                          <Eye size={14} />
                        )}
                        <span>
                          {isPasswordVisible ? user.password : "••••••••"}
                        </span>
                      </ButtonPassword>
                    </td>
                    <td className={user.isAdmin ? "is-admin" : "not-admin"}>
                      {user.isAdmin ? "Sim" : "Não"}
                    </td>
                    <td>
                      <ButtonDelete
                        type="button"
                        onClick={() => handleDeleteUser(user.id)}
                        disabled={isDeletingUser}
                      >
                        <Trash size={14} />
                      </ButtonDelete>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <ContainerButtons>
          <ButtonLink title="Voltar" to={"/"} />
        </ContainerButtons>
      </Container>
    </>
  );
}
