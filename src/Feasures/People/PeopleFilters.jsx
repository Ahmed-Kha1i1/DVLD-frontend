/* eslint-disable react/prop-types */
import FilterPopup from "../../Core/ui/FilterPopup";
import SearchFilter from "../../Core/ui/SearchFilter";
import SelectFilter from "../../Core/ui/SelectFilter";

function PeopleFilters({ control, onClear }) {
  return (
    <FilterPopup onClear={onClear}>
      <SearchFilter control={control} id="id" label="ID:" isId={true} />
      <SearchFilter
        control={control}
        id="nationalNumber"
        label="National Number:"
      />
      <SelectFilter
        control={control}
        id="gender"
        label="Gender:"
        items={[
          { value: "", text: "All" },
          { value: false, text: "Male" },
          { value: true, text: "Female" },
        ]}
      />
    </FilterPopup>
  );
}

export default PeopleFilters;
