import { FaHandPaper } from "react-icons/fa";

import Menus from "../../Core/ui/Menus";
import DetainLicensesMenu from "./DetainLicensesMenu";
import Item from "../../Core/ui/Item";

function DetainLicenses() {
  return (
    <li className="relative">
      <Menus.Button opens="DetainLicensesMenu">
        <Item
          text="Detain Licenses"
          icon={<FaHandPaper />}
          hasArraw={true}
          isli={false}
        />
      </Menus.Button>
      <Menus.Menu name="DetainLicensesMenu">
        <DetainLicensesMenu />
      </Menus.Menu>
    </li>
  );
}

export default DetainLicenses;
