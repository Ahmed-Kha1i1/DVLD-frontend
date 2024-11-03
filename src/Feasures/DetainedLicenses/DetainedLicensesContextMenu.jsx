/* eslint-disable react/prop-types */
import { FaIdCard } from "react-icons/fa6";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";

function DetainedLicensesContextMenu({ selectedDetainedLicense }) {
  return (
    <Menu bgColor="bg-inherit">
      <Item
        text="Show DriverId Details"
        icon={<FaIdCard />}
        to={`/drivers/${selectedDetainedLicense.driverId}/profile`}
      />
      <Item
        text="Show License Details"
        icon={<FaIdCard />}
        to={`/licenses/${selectedDetainedLicense.licenseID}`}
      />
      <Item
        text="Show Person License History"
        icon={<FaIdCard />}
        to={`/licenses-history/${selectedDetainedLicense.personId}`}
      />
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
