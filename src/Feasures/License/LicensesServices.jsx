import { FaIdCard } from "react-icons/fa";
import Item from "../../Core/ui/Item";
import Menus from "../../Core/ui/Menus";
import LicenseServicesMenu from "./LicenseServicesMenu";

function LicensesServices() {
  return (
    <li className="relative">
      <Menus.Button opens="LicenseServicesMenu">
        <Item
          text="Driving Licenses Services"
          icon={<FaIdCard />}
          hasArraw={true}
          isli={false}
        />
      </Menus.Button>
      <Menus.Menu name="LicenseServicesMenu">
        <LicenseServicesMenu />
      </Menus.Menu>
    </li>
  );
}

export default LicensesServices;
