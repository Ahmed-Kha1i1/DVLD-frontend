import { FaIdCard } from "react-icons/fa6";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";
import DrivingLicense from "./DrivingLicense";
import Menus from "../../Core/ui/Menus";

function LicenseServicesMenu() {
  return (
    <Menus>
      <Menu isRight={true}>
        <DrivingLicense />
        <Item text="Renew Driving License" icon={<FaIdCard />} />
        <Item
          text="Replacment  for Lost or Damage License"
          icon={<FaIdCard />}
        />
        <Item text="Release Detained Driving License" icon={<FaIdCard />} />
        <Item text="Show Driver Info Licenses" icon={<FaIdCard />} />
        <Item text="Retake Test" icon={<FaIdCard />} />
      </Menu>
    </Menus>
  );
}

export default LicenseServicesMenu;
