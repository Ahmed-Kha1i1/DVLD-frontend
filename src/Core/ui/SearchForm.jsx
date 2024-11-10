import PrimaryBottun from "./PrimaryBottun";

/* eslint-disable react/prop-types */
function SearchForm({ children, onSearch, text = "Search", disabled }) {
  return (
    <form
      className={`relative flex w-[600px] gap-2 border border-gray-300 ${disabled ? "disabled" : ""} lg:w-full`}
      onSubmit={onSearch}
    >
      {children}
      <PrimaryBottun>{text}</PrimaryBottun>
    </form>
  );
}

export default SearchForm;
