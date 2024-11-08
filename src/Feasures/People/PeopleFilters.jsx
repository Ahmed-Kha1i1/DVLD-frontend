/* eslint-disable react/prop-types */
import SearchFilter from "../../Core/ui/SearchFilter";
import SelectFilter from "../../Core/ui/SelectFilter";

function PeopleFilters({ control }) {
  return (
    <div className="flex gap-4">
      <SearchFilter control={control} id="id" label="ID:" />
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
    </div>
  );
}

export default PeopleFilters;
