import { useState } from "react";
import LicenseWithFilter from "../../Feasures/License/LicenseWithFilter";
import useRenewLicense from "../../Feasures/License/useRenewLicense";
import BottomBar from "../ui/BottomBar";
import { MdAutorenew } from "react-icons/md";
import RenewCard from "../../Feasures/Applications/RenewCard";
import Notes from "../ui/Notes";
import PageTitle from "../ui/PageTitle";

function RenewLicense() {
  const [license, setLicense] = useState("");
  const [licenseId, setLicenseId] = useState("");
  const [renewNotes, setRenewNotes] = useState("");
  const { isCreating, Renew } = useRenewLicense();
  const [isSelectValid, setIsSelectValid] = useState("");
  const [renewLicenseId, seRenewLicenseId] = useState("");

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

  function onRenew() {
    Renew(
      {
        OldLicenseId: licenseId,
        notes: renewNotes,
      },
      {
        onSuccess: (id) => {
          seRenewLicenseId(id);
        },
      },
    );
  }

  return (
    <div>
      <PageTitle title="Renew License" />
      <LicenseWithFilter
        onSelect={onSelect}
        filterEnable={!renewLicenseId}
        onSelectValidate={onSelectValidate}
      />
      <RenewCard OldLiceseId={licenseId} newLicenseId={renewLicenseId} />
      <Notes
        notes={renewNotes}
        setNotes={setRenewNotes}
        disabled={renewLicenseId}
      />
      <BottomBar
        personId={license?.personId}
        LicensePath={`/licenses/${renewLicenseId}`}
        Licensedisabled={!renewLicenseId}
        icon={<MdAutorenew className="text-2xl" />}
        text="Renew"
        onClick={onRenew}
        ButtonDisable={
          renewLicenseId || isCreating || !licenseId || !isSelectValid
        }
        selectedLicenseId={licenseId}
      />
    </div>
  );
}

function selectValidate(license) {
  if (new Date(license.expirationDate).getTime() > Date.now()) {
    return "License is not yet expired";
  } else if (!license.isActive) {
    return "Selected License is not Active";
  }

  return "";
}
export default RenewLicense;
