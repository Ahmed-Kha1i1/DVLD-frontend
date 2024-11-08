import { MdFilterListAlt } from "react-icons/md";
import PrimaryBottun from "./PrimaryBottun";

function FilterButton() {
  return (
    <PrimaryBottun
      className={`$ ml-auto flex w-28 items-center gap-2 rounded-sm py-2`}
    >
      <MdFilterListAlt className="text-2xl" />
      <span className="">Filter</span>
    </PrimaryBottun>
  );
}

export default FilterButton;
