/* eslint-disable react/prop-types */
import FilterPopup from "../../Core/ui/FilterPopup";
import SearchFilter from "../../Core/ui/SearchFilter";
import SelectFilter from "../../Core/ui/SelectFilter";
function DetainedLicensesFilters({ control, onClear }) {
  return (
    <FilterPopup onClear={onClear}>
      <SearchFilter control={control} id="id" label="ID:" />
      <SearchFilter
        control={control}
        id="nationalNumber"
        label="National Number:"
      />
      <SelectFilter
        control={control}
        id="isReleased"
        label="Is Released:"
        items={[
          { value: "", text: "All" },
          { value: true, text: "Releaed" },
          { value: false, text: "Not Released" },
        ]}
      />
    </FilterPopup>
  );
}

export default DetainedLicensesFilters;
