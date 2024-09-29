/* eslint-disable react/prop-types */
import { FaIdCard } from "react-icons/fa6";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";

function DetainedLicensesContextMenu({ selectedDetainedLicense }) {
  return (
    <Menu bgColor="bg-inherit">
      <Item text="Show Person Details" icon={<FaIdCard />} />
      <Item text="Show License Details" icon={<FaIdCard />} />
      <Item text="Show Person License History" icon={<FaIdCard />} />
      <hr />
      <Item
        text="Release Detained License"
        icon={<FaIdCard />}
        disabled={selectedDetainedLicense.isReleased}
      />
    </Menu>
  );
}

export default DetainedLicensesContextMenu;
