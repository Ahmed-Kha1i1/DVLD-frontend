/* eslint-disable react/prop-types */
import { CiEdit } from "react-icons/ci";
import PrimaryBottun from "./PrimaryBottun";

function EditButton({ onClick, to, className, disabled }) {
  return (
    <PrimaryBottun
      to={to}
      onClick={onClick}
      className={`ml-auto flex gap-2 rounded-sm py-2 ${className ? className : ""} ${disabled ? "disabled" : ""}`}
    >
      <CiEdit className="text-2xl" />
      <span className="">Edit</span>
    </PrimaryBottun>
  );
}

export default EditButton;
