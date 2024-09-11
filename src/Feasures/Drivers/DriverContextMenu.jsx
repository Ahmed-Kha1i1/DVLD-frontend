import { FaIdCard } from "react-icons/fa6";
import Item from "../../GlobalUI/item";
import Menu from "../../GlobalUI/Menu";

function DriverContextMenu({ SelectedDriver }) {
  return (
    <Menu bgColor="bg-inherit">
      <Item text="Show Person Details" icon={<FaIdCard />} />
      <Item text="Issue Internatianal License" icon={<FaIdCard />} />
      <Item text="Show Person License History" icon={<FaIdCard />} />
    </Menu>
  );
}

export default DriverContextMenu;
