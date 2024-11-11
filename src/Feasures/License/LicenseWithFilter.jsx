/* eslint-disable react/prop-types */
import LicenseCard from "./LicenseCard";
import useLicense from "./useLicense";
import SearchForm from "../../Core/ui/SearchForm";
import SearchInput from "../../Core/ui/SearchInput";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Spinner from "../../Core/ui/Spinner";
import { useSearchParams } from "react-router-dom";
import Error from "../../Core/ui/Error";

function LicenseWithFilter({
  onSelect,
  onSelectValidate,
  filterEnable = true,
}) {
  let [searchParams, setSearchParams] = useSearchParams();
  const defaultLicenseId = searchParams.get("licenseId");
  const [licenseId, setLicenseId] = useState(defaultLicenseId);
  const { isLoading, error, License } = useLicense(licenseId, 1);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (filterEnable) {
      onSelect?.(License?.licenseId, License?.personId);
      Valiadate();
    }
  }, [License?.licenseId]);

  function onSubmit({ licenseId }) {
    setLicenseId(licenseId);
    if (licenseId) setSearchParams({ licenseId });
  }

  function Valiadate() {
    if (!License) {
      if (errorMessage) setErrorMessage("");
      return;
    }

    const message = onSelectValidate?.(License);
    if (message) setErrorMessage(message);
    else if (errorMessage) setErrorMessage("");
  }

  return (
    <div className="flex flex-col gap-6">
      <SearchForm onSearch={handleSubmit(onSubmit)} disabled={!filterEnable}>
        <SearchInput
          placeholder="License Id"
          defaultValue={defaultLicenseId}
          error={errors?.licenseId?.message || errorMessage}
          registerResult={register("licenseId", {
            required: `license id is required`,
            validate: (value) =>
              value > 0 ||
              "license id is inValid. license id must be greater than 0.",
          })}
        />
      </SearchForm>
      {isLoading ? <Spinner /> : <LicenseCard License={License} />}
    </div>
  );
}

export default LicenseWithFilter;
