/* eslint-disable react/prop-types */
import { FaIdCard } from "react-icons/fa6";
import Item from "../../Core/ui/Item";
import Menu from "../../Core/ui/Menu";

function InternationalLicensesContextMenu({ selectedInternationalLicense }) {
  return (
    <Menu bgColor="bg-inherit">
      <Item
        text="Show Driver Details"
        icon={<FaIdCard />}
        to={`/drivers/${selectedInternationalLicense.driverID}/profile`}
      />
      <Item
        text="Show License Details"
        icon={<FaIdCard />}
        to={`/licenses/${selectedInternationalLicense.issuedUsingLocalLicenseID}`}
      />
      <Item
        text="Show Person License History"
        icon={<FaIdCard />}
        to={`/licenses-history/${selectedInternationalLicense.personId}`}
      />
    </Menu>
  );
}

export default InternationalLicensesContextMenu;
