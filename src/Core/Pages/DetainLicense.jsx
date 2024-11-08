import DetainCard from "../../Feasures/DetainedLicenses/DetainCard";
import BottomBar from "../ui/BottomBar";
import LicenseWithFilter from "../../Feasures/License/LicenseWithFilter";
import PageTitle from "../ui/PageTitle";
import { useState } from "react";
import useDetainLicense from "../../Feasures/DetainedLicenses/useDetainLicense";
import { FaHand } from "react-icons/fa6";

function DetainLicense() {
  const [license, setLicense] = useState("");
  const [detainId, setDetainId] = useState("");
  const [fineFees, setFineFees] = useState(0);
  const [licenseId, setLicenseId] = useState("");
  const { isDetaining, detain } = useDetainLicense();
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

  function onSubmutvalidate() {
    if (fineFees < 0) {
      return " Fine fees cannot be negative. Please enter a valid amount.";
    }
    return "";
  }
  function onDetain() {
    detain(
      {
        licenseId: licenseId,
        fineFees,
      },
      {
        onSuccess: (id) => {
          setDetainId(id);
        },
      },
    );
  }

  return (
    <div>
      <PageTitle title="Detain License" />
      <LicenseWithFilter
        onSelect={onSelect}
        filterEnable={!detainId}
        onSelectValidate={onSelectValidate}
      />
      <DetainCard detainId={detainId} licenseId={licenseId} />
      <div className="mt-5 flex gap-4">
        <label htmlFor="fees" className="text-xl font-semibold capitalize">
          Fine Fees
        </label>
        <input
          className="input p-2"
          id="fees"
          value={fineFees}
          type="number"
          onChange={(e) => setFineFees(e.target.value)}
          min={0}
        />
      </div>
      <BottomBar
        personId={license?.personId}
        LicensePath={`/licenses/${licenseId}`}
        Licensedisabled={!detainId}
        icon={<FaHand className="text-2xl" />}
        text="Detain"
        onClick={onDetain}
        ButtonDisable={detainId || isDetaining || !licenseId || !isSelectValid}
        OnSubmitValidate={onSubmutvalidate}
        selectedLicenseId={licenseId}
      />
    </div>
  );
}

function selectValidate(license) {
  if (license.isDetained) {
    return "Selected License is already detained";
  }

  return "";
}

export default DetainLicense;
