/* eslint-disable react/prop-types */
import { MdOutlineClear } from "react-icons/md";

function ClearButton({ onClear }) {
  return (
    <button
      onClick={onClear}
      className={`btn flex items-center border bg-gray-50 text-2xl text-gray-700 transition duration-200 hover:bg-gray-100`}
    >
      <MdOutlineClear className="" />
      <span className="ml-2 block">Clear</span>
    </button>
  );
}

export default ClearButton;
