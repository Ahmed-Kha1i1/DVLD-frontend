/* eslint-disable react/prop-types */
import { FaIdCard } from "react-icons/fa6";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";

function UserContextMenu({ selectedUser }) {
  return (
    <Menu bgColor="bg-inherit">
      <Item
        text="Show Details"
        icon={<FaIdCard />}
        to={`${selectedUser.userId}/Profile`}
      />
      <hr />
      <Item text="Add New" icon={<FaIdCard />} to="add-new" />
      <Item
        text="Edit"
        icon={<FaIdCard />}
        to={`${selectedUser.userId}/edit-user`}
      />

      <Item
        text="Delete"
        icon={<FaIdCard />}
        to={`${selectedUser.userId}/delete`}
      />
      <Item
        text="Change Password"
        icon={<FaIdCard />}
        to={`${selectedUser.userId}/change-password`}
      />
      <hr />
      <Item
        text="Send Email"
        icon={<FaIdCard />}
        to={`${selectedUser.userId}/send-email`}
      />
    </Menu>
  );
}

export default UserContextMenu;
