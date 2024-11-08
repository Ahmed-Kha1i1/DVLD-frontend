/* eslint-disable react/prop-types */
import SearchFilter from "../../Core/ui/SearchFilter";
import SelectFilter from "../../Core/ui/SelectFilter";
function DetainedLicensesFilters({ control }) {
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
        id="isReleased"
        label="Is Released:"
        items={[
          { value: "", text: "All" },
          { value: true, text: "Releaed" },
          { value: false, text: "Not Released" },
        ]}
      />
    </div>
  );
}

export default DetainedLicensesFilters;
