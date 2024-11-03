import { FaIdCard } from "react-icons/fa";

import Menu from "../../Core/ui/Menu";
import Item from "../../Core/ui/Item";

function DetainLicensesMenu() {
  return (
    <Menu isRight={true}>
      <Item
        text="Manage Detained Licenses"
        icon={<FaIdCard />}
        to="detained-licenses"
      />
      <Item
        text="Detain License"
        icon={<FaIdCard />}
        to="detained-licenses/detain"
      />
      <Item
        text="Release Detained License"
        icon={<FaIdCard />}
        to="detained-licenses/release"
      />
    </Menu>
  );
}

export default DetainLicensesMenu;
