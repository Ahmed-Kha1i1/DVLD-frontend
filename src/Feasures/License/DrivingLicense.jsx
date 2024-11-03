import { FaIdCard } from "react-icons/fa6";

import DrivingLicenseMenu from "./DrivingLicenseMenu";
import Menus from "../../Core/ui/Menus";
import Item from "../../Core/ui/Item";
function DrivingLicense() {
  return (
    <li className="relative">
      <Menus.Button opens="DrivingLicenseMenu">
        <Item
          text="New Driving License"
          icon={<FaIdCard />}
          hasArraw={true}
          isli={false}
        />
      </Menus.Button>
      <Menus.Menu name="DrivingLicenseMenu">
        <DrivingLicenseMenu />
      </Menus.Menu>
    </li>
  );
}

export default DrivingLicense;
