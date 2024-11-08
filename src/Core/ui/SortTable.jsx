/* eslint-disable react/prop-types */
import { MdSort } from "react-icons/md";
import FilterBase from "./FilterBase";

export default function SortTable({ items = [], onSort, defaultValue }) {
  return (
    <FilterBase icon={<MdSort />} id="sort" label="Sort by:">
      <select
        id="sort"
        value={defaultValue}
        onChange={(e) => onSort(e.target.value)}
        className="bg-gray-100 text-lg font-semibold text-black focus:outline-none"
      >
        {items.map((item) => (
          <option value={item.value} key={item.value}>
            {item?.text || item.value}
          </option>
        ))}
      </select>
    </FilterBase>
  );
}
