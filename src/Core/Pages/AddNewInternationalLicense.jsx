import { useState } from "react";
import LicenseWithFilter from "../../Feasures/License/LicenseWithFilter";
import InternationalLicenseApplication from "../../Feasures/InternationalLicenses/InternationalLicenseApplication";
import useCreateInternationalLicense from "../../Feasures/InternationalLicenses/useCreateInternationalLicense";
import { GoIssueClosed } from "react-icons/go";
import BottomBar from "../ui/BottomBar";

import { getActiveInternationalLicenseId } from "../Services/ApiDrivers";
import PageTitle from "../ui/PageTitle";

function AddNewInternationalLicense() {
  const [license, setLicense] = useState();
  const [licenseId, setLicenseId] = useState();
  const [isSelectValid, setIsSelectValid] = useState("");
  const [internationalLicenseId, seInternationalLicenseId] = useState("");
  const { isCreating, CreateInternationalLicense } =
    useCreateInternationalLicense();

  async function onSelect(SelectedlicenseId) {
    setLicenseId(SelectedlicenseId);
    if (!SelectedlicenseId && license) setLicense("");
  }

  async function issue() {
    CreateInternationalLicense(licenseId, {
      onSuccess: (id) => {
        seInternationalLicenseId(id);
      },
    });
  }

  function onSelectValidate(selectedLicense) {
    setLicense(selectedLicense);
    const message = selectValidate(selectedLicense);
    setIsSelectValid(!message);
    return message;
  }

  function onSubmitValidate() {
    return submitValidate(license);
  }

  return (
    <div>
      <PageTitle title="Add New International License" />
      <LicenseWithFilter
        key="Add-New-International-License"
        onSelect={onSelect}
        filterEnable={!internationalLicenseId}
        onSelectValidate={onSelectValidate}
      />
      <InternationalLicenseApplication
        internationalApplicationId={internationalLicenseId}
        licenseId={licenseId}
      />
      <BottomBar
        personId={license?.personId}
        LicensePath={`/international-licenses/${internationalLicenseId}`}
        Licensedisabled={!internationalLicenseId}
        icon={<GoIssueClosed className="text-2xl" />}
        text="Issue"
        onClick={issue}
        ButtonDisable={
          internationalLicenseId || isCreating || !licenseId || !isSelectValid
        }
        OnSubmitValidate={onSubmitValidate}
        selectedLicenseId={licenseId}
      />
    </div>
  );
}

function selectValidate(license) {
  if (license.licenseClassId !== 3) {
    {
      return "The license must be of Class 3 to qualify for an international license.";
    }
  } else if (license.expirationDate <= Date.now()) {
    {
      return "The license has expired and is not eligible for an international license.";
    }
  } else if (!license.isActive) {
    return "The license is inactive and cannot be used to issue an international license.";
  }
  return "";
}
async function submitValidate(license) {
  try {
    const activeLicenseId = await getActiveInternationalLicenseId(
      license.driverId,
    );
    if (activeLicenseId)
      return `Driver already holds an active international license with ID ${activeLicenseId}.`;
    else return "";
  } catch (error) {
    return error.message;
  }
}

export default AddNewInternationalLicense;
