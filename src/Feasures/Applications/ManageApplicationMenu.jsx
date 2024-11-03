import { FaIdCard } from "react-icons/fa6";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";

function ManageApplicationMenu() {
  return (
    <Menu isRight={true}>
      <Item
        text="Local Driving License Applications"
        icon={<FaIdCard />}
        to="/applications"
      />
      <Item
        text="International Driving License Applications"
        icon={<FaIdCard to="InternationalApplications" />}
        to="international-licenses"
      />
    </Menu>
  );
}

export default ManageApplicationMenu;
