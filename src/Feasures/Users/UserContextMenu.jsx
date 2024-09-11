import { FaIdCard } from "react-icons/fa6";
import Item from "../../GlobalUI/item";
import Menu from "../../GlobalUI/Menu";

function UserContextMenu({ selectedUser }) {
  return (
    <Menu bgColor="bg-inherit">
      <Item text="Show Details" icon={<FaIdCard />} />
      <hr />
      <Item text="Add New" icon={<FaIdCard />} />
      <Item text="Edit" icon={<FaIdCard />} />
      <Item text="Delete" icon={<FaIdCard />} />
      <Item text="Change Password" icon={<FaIdCard />} />
      <hr />
      <Item text="Send Email" icon={<FaIdCard />} />
    </Menu>
  );
}

export default UserContextMenu;
