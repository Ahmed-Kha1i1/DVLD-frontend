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
      <Item
        text="Edit"
        icon={<FaIdCard />}
        to={`${SelectedDriver.driverID}/edit`}
      />
      <hr />
      <Item
        text="Licenses History"
        icon={<FaIdCard />}
        to={`${SelectedDriver.driverID}/licenses-history`}
      />

      <hr />
      <Item
        text="Send Email"
        icon={<FaIdCard />}
        to={`${SelectedDriver.driverID}/send-email`}
      />
    </Menu>
  );
}

export default DriverContextMenu;
