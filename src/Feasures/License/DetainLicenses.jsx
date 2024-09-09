import { FaHandPaper } from "react-icons/fa";

import Item from "../../GlobalUI/Item";
import Menus from "../../GlobalUI/Menus";
import Menu from "../../GlobalUI/Menu";
import DetainLicensesMenu from "./DetainLicensesMenu";

function DetainLicenses() {
  return (
    <li className="relative">
      <ul>
        <Menus.Button opens="DetainLicensesMenu">
          <Item text="Detain Licenses" icon={<FaHandPaper />} hasArraw={true} />
        </Menus.Button>
        <Menu isRight={true}>
          <Menus.Menu name="DetainLicensesMenu">
            <DetainLicensesMenu />
          </Menus.Menu>
        </Menu>
      </ul>
    </li>
  );
}

export default DetainLicenses;
