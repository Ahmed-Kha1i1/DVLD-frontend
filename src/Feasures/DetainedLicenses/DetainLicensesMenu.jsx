import { FaIdCard } from "react-icons/fa";

import Menu from "../../GlobalUI/Menu";
import Item from "../../GlobalUI/item";

function DetainLicensesMenu() {
  return (
    <Menu isRight={true}>
      <li>
        <Item
          text="Manage Detained Licenses"
          icon={<FaIdCard />}
          to="detained-licenses"
        />
      </li>
      <Item text="Detain License" icon={<FaIdCard />} />
      <Item text="Release Detained License" icon={<FaIdCard />} />
    </Menu>
  );
}

export default DetainLicensesMenu;
