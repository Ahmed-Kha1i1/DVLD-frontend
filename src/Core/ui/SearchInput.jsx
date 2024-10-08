/* eslint-disable react/prop-types */
import { BiSearch } from "react-icons/bi";
import InputError from "./InputError";

function SearchInput({ registerResult, error, defaultValue }) {
  return (
    <>
      <BiSearch className="icon absolute left-3 text-2xl text-Lightgray" />
      <input
        placeholder="Search"
        type="text"
        className="flex-grow py-4 pl-10 focus:outline-none"
        defaultValue={defaultValue}
        {...registerResult}
      />
      <div className="abs-error">
        {error && <InputError className="left-0 pt-4">{error}</InputError>}
      </div>
    </>
  );
}

export default SearchInput;
