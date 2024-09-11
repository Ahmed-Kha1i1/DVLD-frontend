import { FaIdCard } from "react-icons/fa6";
import Item from "../../GlobalUI/item";
import Menu from "../../GlobalUI/Menu";

function ManageApplicationMenu() {
  return (
    <Menu isRight={true}>
      <li>
        <Item
          text="Local Driving License Applications"
          icon={<FaIdCard />}
          to="/applications"
        />
      </li>
      <li>
        <Item
          text="International Driving License Applications"
          icon={<FaIdCard to="InternationalApplications" />}
          to="InternationalLicenses"
        />
      </li>
    </Menu>
  );
}

export default ManageApplicationMenu;
