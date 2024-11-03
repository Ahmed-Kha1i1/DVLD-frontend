import { SiMinetest } from "react-icons/si";
import Item from "../../Core/ui/Item";
import ManageApplication from "./ManageApplication";
import Menu from "../../Core/ui/Menu";
import { MdManageHistory } from "react-icons/md";
import Menus from "../../Core/ui/Menus";
import LicensesServices from "../License/LicensesServices";
import DetainLicenses from "../DetainedLicenses/DetainLicenses";

function ApplicationMenu() {
  return (
    <Menus>
      <Menu>
        <LicensesServices />
        <Item
          text="Manage Application Types"
          icon={<MdManageHistory />}
          to="application-types"
        />
        <Item text="Manage Test Types" icon={<SiMinetest />} to="test-types" />
        <ManageApplication />
        <DetainLicenses />
      </Menu>
    </Menus>
  );
}

export default ApplicationMenu;
