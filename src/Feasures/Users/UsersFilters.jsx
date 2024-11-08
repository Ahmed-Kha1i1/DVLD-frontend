/* eslint-disable react/prop-types */
import SearchFilter from "../../Core/ui/SearchFilter";
import SelectFilter from "../../Core/ui/SelectFilter";

function UsersFilters({ control }) {
  return (
    <div className="flex gap-4">
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
    </div>
  );
}

export default UsersFilters;
