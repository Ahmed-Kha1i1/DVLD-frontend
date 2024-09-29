/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
function Search({ onSearch, text = "Search" }) {
  const [searchKey, setSearchKey] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    onSearch(searchKey);
  }
  return (
    <form className="relative flex w-[600px] gap-2 border border-gray-300">
      <BiSearch className="icon absolute left-3 text-2xl text-Lightgray" />
      <input
        placeholder="Search"
        type="text"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        className="flex-grow py-4 pl-10 focus:outline-none"
      />
      <button
        className="min-w-[60px] bg-primary p-4 text-lg text-white"
        onClick={handleSearch}
      >
        {text}
      </button>
    </form>
  );
}

export default Search;
