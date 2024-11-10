/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import InputError from "./InputError";
import PrimaryBottun from "./PrimaryBottun";
import RedirectLink from "./RedirectLink";

function BottomBar({
  personId,
  LicensePath,
  Licensedisabled,
  icon,
  text,
  onClick,
  ButtonDisable,
  OnSubmitValidate,
  selectedLicenseId,
}) {
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit() {
    const message = await OnSubmitValidate?.();
    if (message) {
      setErrorMessage(message);
    } else if (errorMessage) {
      setErrorMessage("");
    }

    if (!message) {
      onClick?.();
    }
  }
  useEffect(() => {
    setErrorMessage(null);
  }, [selectedLicenseId]);

  return (
    <div>
      <InputError className="mb-0 mt-0">{errorMessage}</InputError>
      <div className="xs: my-4 grid grid-cols-[1fr_auto] items-center gap-7 sm:grid-cols-1">
        <div className="flex flex-wrap gap-7 sm:gap-3">
          <RedirectLink
            path={`/licenses-history/${personId}`}
            text="Show Licenses History"
            disabled={!personId}
          />
          <RedirectLink
            path={LicensePath}
            text="Show Licenses Info"
            disabled={Licensedisabled}
          />
        </div>
        <PrimaryBottun
          className="ml-auto rounded-sm sm:row-start-1 sm:mx-auto"
          onClick={onSubmit}
          disabled={ButtonDisable}
        >
          <div className="flex items-center justify-center gap-3">
            {icon}
            <span>{text}</span>
          </div>
        </PrimaryBottun>
      </div>
    </div>
  );
}

export default BottomBar;
