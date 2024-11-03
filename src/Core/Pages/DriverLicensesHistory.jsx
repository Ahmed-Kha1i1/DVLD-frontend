import PageTitle from "../ui/PageTitle";
import LicensesHistoryTabs from "../../Feasures/Drivers/LicensesHistoryTabs";
import { useParams } from "react-router-dom";
function DriverLicensesHistory() {
  const { id: driverId } = useParams();
  return (
    <div>
      <PageTitle title={`Licenses History (driver Id: ${driverId})`} />
      <LicensesHistoryTabs driverId={driverId} />
    </div>
  );
}

export default DriverLicensesHistory;
