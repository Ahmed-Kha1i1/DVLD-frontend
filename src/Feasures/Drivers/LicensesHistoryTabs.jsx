/* eslint-disable react/prop-types */
import NavigationTabs from "../../Core/ui/Tabs";
import DriverLicensesTable from "../License/DriverLicensesTable";
import DriverInternationalLicensesTable from "../InternationalLicenses/DriverInternationalLicensesTable";

function LicensesHistoryTabs({ driverId }) {
  console.log(driverId);
  return (
    <NavigationTabs defaultTab="Local">
      <NavigationTabs.Tabs>
        <NavigationTabs.Tab id="Local" />
        <NavigationTabs.Tab id="international" />
      </NavigationTabs.Tabs>
      <NavigationTabs.Windows>
        <NavigationTabs.Window id="Local">
          <DriverLicensesTable driverId={driverId} />
        </NavigationTabs.Window>
        <NavigationTabs.Window id="international">
          <DriverInternationalLicensesTable driverId={driverId} />
        </NavigationTabs.Window>
      </NavigationTabs.Windows>
    </NavigationTabs>
  );
}

export default LicensesHistoryTabs;
