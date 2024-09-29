import { SiMinetest } from "react-icons/si";
import Item from "../../Core/ui/Item";
import ManageApplication from "./ManageApplication";
import Menu from "../../Core/ui/Menu";
import { MdManageHistory } from "react-icons/md";
import { RiFileUserFill } from "react-icons/ri";
import Menus from "../../Core/ui/Menus";
import LicensesServices from "../License/LicensesServices";
import DetainLicenses from "../DetainedLicenses/DetainLicenses";

function ApplicationMenu() {
  return (
    <Menus>
      <Menu>
        <LicensesServices />
        <li>
          <Item
            text="Manage Application Types"
            icon={<MdManageHistory />}
            to="application-types"
          />
        </li>
        <li>
          <Item
            text="Manage Test Types"
            icon={<SiMinetest />}
            to="test-types"
          />
        </li>
        <ManageApplication />
        <Item text="Show Driver Info Licenses" icon={<RiFileUserFill />} />
        <DetainLicenses />
      </Menu>
    </Menus>
  );
}

export default ApplicationMenu;
