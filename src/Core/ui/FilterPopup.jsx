/* eslint-disable react/prop-types */
import { MdFilterListAlt } from "react-icons/md";
import Model from "./Model";
import ClearButton from "./ClearButton";
import FilterButton from "./FilterButton";
function FilterPopup({ children, onClear }) {
  return (
    <Model>
      <Model.Open
        opens="filters"
        render={(open) => (
          <button
            onClick={open}
            className={`btn flex w-fit items-center border bg-gray-50 text-2xl text-gray-700 transition duration-200 hover:bg-gray-100`}
          >
            <MdFilterListAlt className="" />
            <span className="ml-2 block">Filter</span>
          </button>
        )}
      />
      <Model.Window name="filters">
        <div>
          <div className="mb-2 flex flex-col gap-4">{children}</div>
          <div className="flex justify-between">
            <ClearButton onClear={onClear} />
            <FilterButton />
          </div>
        </div>
      </Model.Window>
    </Model>
  );
}

export default FilterPopup;
