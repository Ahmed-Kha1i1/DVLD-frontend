/* eslint-disable react/prop-types */
import { FaIdCard } from "react-icons/fa6";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";

function DriverContextMenu({ SelectedDriver }) {
  return (
    <Menu bgColor="bg-inherit">
      <Item
        text="Show Details"
        icon={<FaIdCard />}
        to={`${SelectedDriver.driverID}/profile`}
      />
      <hr />
      <Item text="Edit" icon={<FaIdCard />} />
      <hr />
      <Item text="Issue Internatianal License" icon={<FaIdCard />} />
      <Item
        text="Local Licenses History"
        icon={<FaIdCard />}
        to={`${SelectedDriver.driverID}/local-licenses`}
      />
      <Item
        text="International Licenses History"
        icon={<FaIdCard />}
        to={`${SelectedDriver.driverID}/international-licenses`}
      />
      <hr />
      <Item text="Send Email" icon={<FaIdCard />} />
    </Menu>
  );
}

export default DriverContextMenu;
