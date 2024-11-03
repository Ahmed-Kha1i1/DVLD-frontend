import { useState } from "react";
import LicenseWithFilter from "../../Feasures/License/LicenseWithFilter";

function AddNewInternationalLicense() {
  const [licenseId, setLicenseId] = useState();
  function onSelect(id) {
    setLicenseId(id);
  }
  return (
    <div>
      <LicenseWithFilter onSelect={onSelect} />
    </div>
  );
}

export default AddNewInternationalLicense;
