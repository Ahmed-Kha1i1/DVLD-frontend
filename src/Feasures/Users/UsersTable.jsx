/* eslint-disable react/prop-types */
import Table from "../../Core/ui/Table.jsx";
import ContextMenu from "../../Core/ui/ContextMenu.jsx";
import UserContextMenu from "./UserContextMenu.jsx";
import UserRow from "./UserRow.jsx";
import { useState } from "react";
function UsersTable({ users }) {
  const [selectedUser, setSelectedUser] = useState(null);

  const columns = "grid-cols-[1fr_1fr_2fr_1fr_1fr]";

  return (
    <Table columns={columns}>
      <Table.Header>
        <div>Id</div>
        <div>Person Id</div>
        <div>Full Name</div>
        <div>Username</div>
        <div>Is Active</div>
      </Table.Header>
      <Table.Body
        items={users?.items}
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
    </Table>
  );
}

export default UsersTable;
