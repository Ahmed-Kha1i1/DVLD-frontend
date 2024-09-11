import { FaIdCard } from "react-icons/fa";
import Item from "../../GlobalUI/Item";
import Menu from "../../GlobalUI/Menu";

function DetainLicensesMenu() {
  return (
    <Menu isRight={true}>
      <li>
        <Item
          text="Manage Detained Licenses"
          icon={<FaIdCard />}
          to="DetainedLicenses"
        />
      </li>
      <Item text="Detain License" icon={<FaIdCard />} />
      <Item text="Release Detained License" icon={<FaIdCard />} />
    </Menu>
  );
}

export default DetainLicensesMenu;
