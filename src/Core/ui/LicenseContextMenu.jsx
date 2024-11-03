import { FaIdCard } from "react-icons/fa6";
import Item from "./Item";
import Menu from "./Menu";

function LicenseContextMenu() {
  return (
    <Menu bgColor="bg-inherit">
      <Item text="Show License information" icon={<FaIdCard />} />
    </Menu>
  );
}

export default LicenseContextMenu;
