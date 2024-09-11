import { FaIdCard } from "react-icons/fa6";
import Item from "../../GlobalUI/item";
import Menu from "../../GlobalUI/Menu";

function PersonContextMenu({ selectedPerson }) {
  return (
    <Menu bgColor="bg-inherit">
      <Item text="Show Details" icon={<FaIdCard />} />
      <hr />
      <Item text="Add New" icon={<FaIdCard />} />
      <Item text="Edit" icon={<FaIdCard />} />
      <Item text="Delete" icon={<FaIdCard />} />
      <hr />
      <Item text="Send Email" icon={<FaIdCard />} />
    </Menu>
  );
}

export default PersonContextMenu;
