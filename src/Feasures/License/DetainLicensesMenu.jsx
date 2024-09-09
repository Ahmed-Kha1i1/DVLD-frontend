import { FaIdCard } from "react-icons/fa";
import Item from "../../GlobalUI/Item";
import Menu from "../../GlobalUI/Menu";

function DetainLicensesMenu() {
  return (
    <Menu>
      <Item text="Manage Detained Licenses" icon={<FaIdCard />} />
      <Item text="Detain License" icon={<FaIdCard />} />
      <Item text="Release Detained License" icon={<FaIdCard />} />
    </Menu>
  );
}

export default DetainLicensesMenu;
