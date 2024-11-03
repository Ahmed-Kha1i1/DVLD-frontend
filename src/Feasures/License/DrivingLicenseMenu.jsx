import { FaIdCard } from "react-icons/fa";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";

function DrivingLicenseMenu() {
  return (
    <Menu isRight={true}>
      <Item
        text="Local License"
        icon={<FaIdCard />}
        to="applications/add-new"
      />
      <Item
        text="International License"
        icon={<FaIdCard />}
        to="international-licenses/add-new"
      />
    </Menu>
  );
}

export default DrivingLicenseMenu;
