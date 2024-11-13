/* eslint-disable react/prop-types */
import FilterPopup from "../../Core/ui/FilterPopup";
import SearchFilter from "../../Core/ui/SearchFilter";
import SelectFilter from "../../Core/ui/SelectFilter";
function InternationalLicensesFilters({ control, onClear }) {
  return (
    <FilterPopup onClear={onClear}>
      <SearchFilter control={control} id="id" label="ID:" isId={true} />
      <SearchFilter
        control={control}
        id="driverId"
        label="Driver Id:"
        isId={true}
      />
      <SearchFilter
        control={control}
        id="licenseId"
        label="License Id:"
        isId={true}
      />
      <SelectFilter
        control={control}
        id="isActive"
        label="Is Active:"
        items={[
          { value: "", text: "All" },
          { value: true, text: "Active" },
          { value: false, text: "Not Active" },
        ]}
      />
    </FilterPopup>
  );
}

export default InternationalLicensesFilters;
