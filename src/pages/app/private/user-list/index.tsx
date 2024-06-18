import { getUsers } from "@/api/get-users";
import { ButtonLink } from "@/components/button-link";
import { UsersTableSkeleton } from "@/components/users-table-skeleton";
import { AuthContext } from "@/contexts/auth-contexts";
import { Trash } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Container, ContainerButtons, Table } from "./styles";

export function UserList() {
  const { user } = useContext(AuthContext);

  if (!user?.isAdmin) {
    throw new Error("Você não tem permissão para acessar esta página");
  }

  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

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
            {isLoadingUsers && <UsersTableSkeleton />}
            {users &&
              users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.isAdmin ? "Sim" : "Não"}</td>
                    <td>
                      <button type="button">
                        <Trash size={14} />
                      </button>
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
