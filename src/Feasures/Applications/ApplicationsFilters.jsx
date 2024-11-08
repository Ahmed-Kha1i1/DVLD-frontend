/* eslint-disable react/prop-types */

import { statusesFilter } from "./ApplicationsConsts";
import SearchFilter from "../../Core/ui/SearchFilter";
import SelectFilter from "../../Core/ui/SelectFilter";
import useLicenseClasses from "../LicenseClasses/useLicenseClasses";

function ApplicationsFilters({ control }) {
  const { licenseClasses } = useLicenseClasses();

  return (
    <div className="flex gap-4">
      <SearchFilter control={control} id="id" label="ID:" />
      <SearchFilter control={control} id="personId" label="Person Id:" />
      <SearchFilter
        control={control}
        id="nationalNumber"
        label="National Number:"
      />
      <SelectFilter
        control={control}
        id="className"
        label="Class Name:"
        items={licenseClasses ? transformLicenseClasses(licenseClasses) : []}
      />
      <SelectFilter
        control={control}
        id="status"
        label="Status:"
        items={statusesFilter}
      />
    </div>
  );
}

function transformLicenseClasses(licenseClasses) {
  const allOption = { value: "", text: "All" };
  const transformedClasses = licenseClasses.map((item) => ({
    value: item.className,
  }));

  return [allOption, ...transformedClasses];
}

export default ApplicationsFilters;
