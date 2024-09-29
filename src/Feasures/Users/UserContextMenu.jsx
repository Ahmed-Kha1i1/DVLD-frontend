/* eslint-disable react/prop-types */
import { FaIdCard } from "react-icons/fa6";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";

function UserContextMenu({ selectedUser }) {
  return (
    <Menu bgColor="bg-inherit">
      <li>
        <Item
          text="Show Details"
          icon={<FaIdCard />}
          to={`${selectedUser.userId}/Profile`}
        />
      </li>
      <hr />
      <li>
        <Item text="Add New" icon={<FaIdCard />} to="add-new" />
      </li>
      <Item text="Edit" icon={<FaIdCard />} />
      <il>
        <Item
          text="Delete"
          icon={<FaIdCard />}
          to={`${selectedUser.userId}/delete`}
        />
      </il>
      <Item text="Change Password" icon={<FaIdCard />} />
      <hr />
      <Item text="Send Email" icon={<FaIdCard />} />
    </Menu>
  );
}

export default UserContextMenu;
