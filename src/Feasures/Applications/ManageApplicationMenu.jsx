import { FaIdCard } from "react-icons/fa6";
import Item from "../../GlobalUI/item";
import Menu from "../../GlobalUI/Menu";

function ManageApplicationMenu() {
  return (
    <Menu>
      <Item
        text="Local Driving License Applications"
        icon={<FaIdCard />}
        to="/applications"
      />
      <Item
        text="International Driving License Applications"
        icon={<FaIdCard />}
      />
    </Menu>
  );
}

export default ManageApplicationMenu;
