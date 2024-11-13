/* eslint-disable react/prop-types */

import useLicenseClasses from "../LicenseClasses/useLicenseClasses";
import { statusesFilter } from "./ApplicationsConsts";
import SearchFilter from "../../Core/ui/SearchFilter";
import SelectFilter from "../../Core/ui/SelectFilter";
import FilterPopup from "../../Core/ui/FilterPopup";

function ApplicationsFilters({ control, onClear }) {
  const { licenseClasses } = useLicenseClasses();

  return (
    <FilterPopup onClear={onClear}>
      <SearchFilter control={control} id="id" label="ID:" isId={true} />
      <SearchFilter
        control={control}
        id="personId"
        label="Person Id:"
        isId={true}
      />
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
    </FilterPopup>
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
