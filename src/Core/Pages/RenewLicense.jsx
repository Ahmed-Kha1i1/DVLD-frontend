import { useState } from "react";
import LicenseWithFilter from "../../Feasures/License/LicenseWithFilter";

function RenewLicense() {
  const [licenseId, setLicenseId] = useState();
  return (
    <div>
      <LicenseWithFilter
        onSelect={(id) => setLicenseId(id)}
        defaultValue={23}
      />
      <div>licenseId: {licenseId}</div>
    </div>
  );
}

export default RenewLicense;
