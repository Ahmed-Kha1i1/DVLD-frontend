import { FaIdCard } from "react-icons/fa6";

import DrivingLicenseMenu from "./DrivingLicenseMenu";
import Menus from "../../GlobalUI/Menus";
import Item from "../../GlobalUI/item";
function DrivingLicense() {
  return (
    <li className="relative">
      <ul>
        <Menus.Button opens="DrivingLicenseMenu">
          <Item
            text="New Driving License"
            icon={<FaIdCard />}
            hasArraw={true}
          />
        </Menus.Button>
        <Menus.Menu name="DrivingLicenseMenu">
          <DrivingLicenseMenu />
        </Menus.Menu>
      </ul>
    </li>
  );
}

export default DrivingLicense;
