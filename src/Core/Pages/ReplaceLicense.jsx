import { useState } from "react";
import LicenseWithFilter from "../../Feasures/License/LicenseWithFilter";
import useReplaceLicense from "../../Feasures/License/useReplaceLicense";
import { IssueReason } from "../../Constants";
import ReplaceApplicationCard from "../../Feasures/Applications/ReplaceApplicationCard";
import { LuReplace } from "react-icons/lu";
import BottomBar from "../ui/BottomBar";
import PageTitle from "../ui/PageTitle";
import ReplaceInput from "../../Feasures/License/ReplaceInput";

function ReplaceLicense() {
  const [license, setLicense] = useState("");
  const [licenseId, setLicenseId] = useState("");
  const [reason, setReason] = useState("damaged");
  const { isCreating, Replace } = useReplaceLicense();
  const [isSelectValid, setIsSelectValid] = useState("");
  const [replacedLicenseId, seReplacedLicenseId] = useState("");

  const handleResultChange = (value) => {
    setReason(value);
  };

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

  function onReplace() {
    Replace(
      {
        OldLicenseId: licenseId,
        IssueReason:
          reason === "damaged"
            ? IssueReason.ReplacementDamaged
            : IssueReason.ReplacementLost,
      },
      {
        onSuccess: (id) => {
          seReplacedLicenseId(id);
        },
      },
    );
  }

  return (
    <div>
      <PageTitle title="Replace License" />
      <LicenseWithFilter
        onSelect={onSelect}
        filterEnable={!replacedLicenseId}
        onSelectValidate={onSelectValidate}
      />
      <ReplaceApplicationCard
        OldLiceseId={licenseId}
        newLicenseId={replacedLicenseId}
      />
      <ReplaceInput onChange={handleResultChange} />
      <BottomBar
        personId={license?.personId}
        LicensePath={`/licenses/${replacedLicenseId}`}
        Licensedisabled={!replacedLicenseId}
        icon={<LuReplace className="text-2xl" />}
        text="Replace"
        onClick={onReplace}
        ButtonDisable={
          replacedLicenseId || isCreating || !licenseId || !isSelectValid
        }
        selectedLicenseId={licenseId}
      />
    </div>
  );
}

function selectValidate(license) {
  if (!license.isActive) {
    return "Selected License is not Active";
  }

  return "";
}

export default ReplaceLicense;
