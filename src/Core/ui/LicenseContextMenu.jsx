/* eslint-disable react/prop-types */
import { FaIdCard } from "react-icons/fa6";
import Item from "./Item";
import Menu from "./Menu";

function LicenseContextMenu({ to }) {
  return (
    <Menu bgColor="bg-inherit">
      <Item text="Show Details" icon={<FaIdCard />} to={to} />
    </Menu>
  );
}

export default LicenseContextMenu;
