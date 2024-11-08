import { Controller } from "react-hook-form";
import FilterBase from "./FilterBase";

/* eslint-disable react/prop-types */
export default function SelectFilter({
  control,
  id,
  items = [],
  label,
  defalutValue = "",
}) {
  return (
    <Controller
      name={id}
      control={control}
      render={({ field }) => (
        <FilterBase id={id} label={label}>
          <select
            id={id}
            defaultValue={defalutValue}
            className="bg-gray-100 text-lg font-semibold text-black focus:outline-none"
            {...field}
          >
            {items.map((item) => (
              <option value={item.value} key={item.value}>
                {item?.text || item.value}
              </option>
            ))}
          </select>
        </FilterBase>
      )}
    />
  );
}
