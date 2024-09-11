import { FaIdCard } from "react-icons/fa";
import Item from "../../GlobalUI/item";
import Menu from "../../GlobalUI/Menu";

function DrivingLicenseMenu() {
  return (
    <Menu isRight={true}>
      <Item text="Local License" icon={<FaIdCard />} />
      <Item text="International License" icon={<FaIdCard />} />
    </Menu>
  );
}

export default DrivingLicenseMenu;
