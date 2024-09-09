import { FaIdCard } from "react-icons/fa";
import Item from "../../GlobalUI/item";
import Menus from "../../GlobalUI/Menus";
import LicenseServicesMenu from "./LicenseServicesMenu";
import Menu from "../../GlobalUI/Menu";

function LicensesServices() {
  return (
    <li className="relative">
      <ul>
        <Menus.Button opens="LicenseServicesMenu">
          <Item
            text="Driving Licenses Services"
            icon={<FaIdCard />}
            hasArraw={true}
          />
        </Menus.Button>
        <Menu isRight={true}>
          <Menus.Menu name="LicenseServicesMenu">
            <LicenseServicesMenu />
          </Menus.Menu>
        </Menu>
      </ul>
    </li>
  );
}

export default LicensesServices;
