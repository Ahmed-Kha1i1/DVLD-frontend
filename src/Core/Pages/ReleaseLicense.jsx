import { useState } from "react";
import LicenseWithFilter from "../../Feasures/License/LicenseWithFilter";
import useReleaseLicence from "../../Feasures/DetainedLicenses/useReleaseLicence";
import PageTitle from "../ui/PageTitle";
import BottomBar from "../ui/BottomBar";
import { FaHandHolding } from "react-icons/fa6";
import ReleaseCard from "../../Feasures/DetainedLicenses/ReleaseCard";

function ReleaseLicense() {
  const [license, setLicense] = useState("");
  const [applicationId, setApplicationId] = useState("");
  const [licenseId, setLicenseId] = useState("");
  const { isReleasing, Release } = useReleaseLicence();
  const [isSelectValid, setIsSelectValid] = useState("");

  async function onSelect(SelectedlicenseId) {
    setLicenseId(SelectedlicenseId);
    if (!SelectedlicenseId && license) setLicense("");
  }

  function onSelectValidate(selectedLicense) {
    setLicense(selectedLicense);
    const message = selectValidate(selectedLicense);
    setIsSelectValid(!message);
    return message;
  }

  function onRelease() {
    Release(licenseId, {
      onSuccess: (id) => {
        setApplicationId(id);
      },
    });
  }

  return (
    <div>
      <PageTitle title="Release Detained License" />
      <LicenseWithFilter
        key="Release-License"
        onSelect={onSelect}
        filterEnable={!applicationId}
        onSelectValidate={onSelectValidate}
      />
      <ReleaseCard licenseId={licenseId} applicationId={applicationId} />
      <BottomBar
        personId={license?.personId}
        LicensePath={`/licenses/${licenseId}`}
        Licensedisabled={!applicationId}
        icon={<FaHandHolding className="text-2xl" />}
        text="Release"
        onClick={onRelease}
        ButtonDisable={
          applicationId || isReleasing || !licenseId || !isSelectValid
        }
        selectedLicenseId={licenseId}
      />
    </div>
  );
}

function selectValidate(license) {
  if (!license.isDetained) {
    return "Selected License is not detained";
  }

  return "";
}

export default ReleaseLicense;
