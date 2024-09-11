import { FaHandPaper } from "react-icons/fa";

import Item from "../../GlobalUI/Item";
import Menus from "../../GlobalUI/Menus";
import DetainLicensesMenu from "./DetainLicensesMenu";

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
