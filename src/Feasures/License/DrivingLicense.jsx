import { FaIdCard } from "react-icons/fa6";

import DrivingLicenseMenu from "./DetainLicensesMenu";
import Menus from "../../GlobalUI/Menus";
import Menu from "../../GlobalUI/Menu";
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
        <Menu isRight={true}>
          <Menus.Menu name="DrivingLicenseMenu">
            <DrivingLicenseMenu />
          </Menus.Menu>
        </Menu>
      </ul>
    </li>
  );
}

export default DrivingLicense;
