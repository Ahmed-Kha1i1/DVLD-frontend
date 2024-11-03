/* eslint-disable react/prop-types */
import { MdOutlineAdd } from "react-icons/md";
import PrimaryBottun from "./PrimaryBottun";

function AddButton({ onClick, to, className, disabled }) {
  return (
    <PrimaryBottun
      to={to}
      onClick={onClick}
      className={`ml-auto flex items-center gap-2 rounded-sm py-2 ${className ? className : ""} ${disabled ? "disabled" : ""}`}
    >
      <MdOutlineAdd className="text-2xl" />
      <span className="">Add</span>
    </PrimaryBottun>
  );
}

export default AddButton;
