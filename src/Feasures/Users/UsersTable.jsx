import useUsers from "./useUsers.js";
import Spiner from "../../Core/ui/Spiner.jsx";
import Error from "../../Core/ui/Error.jsx";
import Table from "../../Core/ui/Table.jsx";
import ContextMenu from "../../Core/ui/ContextMenu.jsx";
import UserContextMenu from "./UserContextMenu.jsx";
import UserRow from "./UserRow.jsx";
import { useState } from "react";
function UsersTable() {
  const { isLoading, error, Users } = useUsers();
  const [selectedUser, setSelectedUser] = useState(null);

  const columns = "grid-cols-[0.4fr_0.4fr_2fr_0.5fr_0.6fr]";

  if (isLoading) return <Spiner />;

  if (error) return <Error message={error?.message} />;
  return (
    <Table columns={columns}>
      <Table.Header>
        <div>Id</div>
        <div>Person Id</div>
        <div>Full Name</div>
        <div>Username</div>
        <div>Is Active</div>
      </Table.Header>
      <ContextMenu>
        <Table.Body
          items={Users}
          render={(User, IsDark) => (
            <ContextMenu.Row
              id={User.userId}
              key={User.userId}
              action={() => {
                setSelectedUser(User);
              }}
            >
              <Table.Row isDark={IsDark} id={User.userId}>
                <UserRow User={User} />
              </Table.Row>
            </ContextMenu.Row>
          )}
        />
        <ContextMenu.Menu>
          <UserContextMenu
            selectedUser={selectedUser}
            key={selectedUser?.userId}
          />
        </ContextMenu.Menu>
      </ContextMenu>
    </Table>
  );
}

export default UsersTable;
