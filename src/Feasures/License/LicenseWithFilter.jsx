/* eslint-disable react/prop-types */
import LicenseCard from "./LicenseCard";
import useLicense from "./useLicense";
import SearchForm from "../../Core/ui/SearchForm";
import SearchInput from "../../Core/ui/SearchInput";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Spinner from "../../Core/ui/Spinner";

function LicenseWithFilter({ onSelect, defaultValue, enableFilter = true }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [licenseId, setLicenseId] = useState(defaultValue);
  const { isLoading, License } = useLicense(licenseId, 1);

  useEffect(() => {
    onSelect(License?.licenseId || "");
  }, [License?.licenseId]);

  function onSubmit({ licenseId }) {
    setLicenseId(licenseId);
  }

  return (
    <div className="flex flex-col gap-6">
      <SearchForm onSearch={handleSubmit(onSubmit)} disabled={!enableFilter}>
        <SearchInput
          placeholder="License Id"
          defaultValue={defaultValue}
          error={errors?.licenseId?.message}
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
