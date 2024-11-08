/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";
import FilterBase from "./FilterBase";

function SearchFilter({ control, id, placeholder = "type...", label }) {
  return (
    <Controller
      name={id}
      control={control}
      render={({ field }) => (
        <FilterBase id={id} label={label}>
          <input
            id={id}
            className="bg-gray-50 px-3 py-2 text-lg font-semibold text-black focus:outline-none"
            placeholder={placeholder}
            {...field}
            type="search"
          />
        </FilterBase>
      )}
    />
  );
}

export default SearchFilter;
