import { SiMinetest } from "react-icons/si";
import Item from "../../GlobalUI/item";
import ManageApplication from "./ManageApplication";
import Menu from "../../GlobalUI/Menu";
import { MdManageHistory } from "react-icons/md";
import { RiFileUserFill } from "react-icons/ri";
import Menus from "../../GlobalUI/Menus";
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
            to="ApplicationTypes"
          />
        </li>
        <li>
          <Item text="Manage Test Types" icon={<SiMinetest />} to="TestTypes" />
        </li>
        <ManageApplication />
        <Item text="Show Driver Info Licenses" icon={<RiFileUserFill />} />
        <DetainLicenses />
      </Menu>
    </Menus>
  );
}

export default ApplicationMenu;
