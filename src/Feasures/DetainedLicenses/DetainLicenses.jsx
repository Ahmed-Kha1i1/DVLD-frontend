import { FaHandPaper } from "react-icons/fa";

import Menus from "../../Core/ui/Menus";
import DetainLicensesMenu from "./DetainLicensesMenu";
import Item from "../../Core/ui/Item";

function DetainLicenses() {
  return (
    <li className="relative">
      <ul>
        <Menus.Button opens="DetainLicensesMenu">
          <Item text="Detain Licenses" icon={<FaHandPaper />} hasArraw={true} />
        </Menus.Button>
        <Menus.Menu name="DetainLicensesMenu">
          <DetainLicensesMenu />
        </Menus.Menu>
      </ul>
    </li>
  );
}

export default DetainLicenses;
