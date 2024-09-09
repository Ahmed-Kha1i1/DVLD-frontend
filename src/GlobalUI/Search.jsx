import { BiSearch } from "react-icons/bi";

function Search() {
  return (
    <form className="relative border-Lightgray border rounded-md pl-6 pr-4 py-4 w-[600px] flex gap-2">
      <BiSearch className="icon text-Lightgray" />
      <input
        placeholder="Search"
        type="text"
        className="  focus:outline-none flex-grow"
      />
    </form>
  );
}

export default Search;
