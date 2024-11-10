/* eslint-disable react/prop-types */
import { MdSort } from "react-icons/md";
import FilterBase from "./FilterBase";

export default function SortDirectionTable({
  onChangeDirection,
  defaultValue,
}) {
  return (
    <FilterBase
      icon={<MdSort />}
      id="sort"
      label="Direction:"
      // className="col-start-2 row-start-2"
    >
      <select
        id="sort"
        value={defaultValue}
        onChange={(e) => onChangeDirection(e.target.value)}
        className="bg-gray-100 text-lg font-semibold text-black focus:outline-none"
      >
        <option value="Asc" key="Asc">
          Ascending
        </option>
        <option value="Desc" key="Desc">
          Descending
        </option>
      </select>
    </FilterBase>
  );
}
