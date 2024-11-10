/* eslint-disable react/prop-types */
import FilterPopup from "../../Core/ui/FilterPopup";
import SearchFilter from "../../Core/ui/SearchFilter";
import SelectFilter from "../../Core/ui/SelectFilter";

function UsersFilters({ control, onClear }) {
  return (
    <FilterPopup onClear={onClear}>
      <SearchFilter control={control} id="id" label="ID:" />
      <SearchFilter control={control} id="personId" label="Person Id:" />
      <SearchFilter control={control} id="username" label="Username:" />
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

export default UsersFilters;
