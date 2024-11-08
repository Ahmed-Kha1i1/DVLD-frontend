/* eslint-disable react/prop-types */
import SearchFilter from "../../Core/ui/SearchFilter";

function DriversFilters({ control }) {
  return (
    <div className="flex gap-4">
      <SearchFilter control={control} id="id" label="ID:" />
      <SearchFilter control={control} id="personId" label="Person Id:" />
      <SearchFilter
        control={control}
        id="nationalNumber"
        label="National Number:"
      />
    </div>
  );
}

export default DriversFilters;
