/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";
import FilterBase from "./FilterBase";
import { useState } from "react";

function SearchFilter({
  control,
  id,
  placeholder = "type...",
  label,
  isId = false,
}) {
  const [Value, setValue] = useState("");
  function handle(e) {
    const newvalue = e.target.value;
    if (!isId) {
      setValue(newvalue);
      return newvalue;
    }

    const convertedValue = parseInt(newvalue);
    if (convertedValue) {
      setValue(convertedValue);
      return convertedValue;
    } else if (newvalue === "") {
      setValue("");
      return "";
    } else {
      return Value;
    }
  }

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
            value={Value}
            {...field}
            onChange={(e) => field.onChange(handle(e))}
            type="search"
          />
        </FilterBase>
      )}
    />
  );
}

export default SearchFilter;
