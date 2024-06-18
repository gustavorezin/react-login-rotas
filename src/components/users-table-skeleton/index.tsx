import Skeleton from "react-loading-skeleton";

export function UsersTableSkeleton() {
  return Array.from({ length: 4 }).map((_, i) => {
    return (
      <tr key={i}>
        <td>
          <Skeleton />
        </td>
        <td>
          <Skeleton />
        </td>
        <td>
          <Skeleton />
        </td>
        <td>
          <Skeleton />
        </td>
        <td>
          <Skeleton />
        </td>
      </tr>
    );
  });
}
