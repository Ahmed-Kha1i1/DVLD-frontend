/* eslint-disable react/prop-types */
import FilterPopup from "../../Core/ui/FilterPopup";
import SearchFilter from "../../Core/ui/SearchFilter";

function DriversFilters({ control, onClear }) {
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
    </FilterPopup>
  );
}

export default DriversFilters;
