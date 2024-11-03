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
        <Item
          text="Renew Driving License"
          icon={<FaIdCard />}
          to="/licenses/renew"
        />
        <Item
          text="Replacment  for Lost or Damage License"
          icon={<FaIdCard />}
          to="/licenses/replace"
        />
        <Item
          text="Release Detained Driving License"
          icon={<FaIdCard />}
          to="/detained-licenses/release"
        />
        <Item text="Retake Test" icon={<FaIdCard />} to="/applications" />
      </Menu>
    </Menus>
  );
}

export default LicenseServicesMenu;
