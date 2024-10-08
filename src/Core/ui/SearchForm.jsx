import PrimaryBottun from "./PrimaryBottun";

/* eslint-disable react/prop-types */
function SearchForm({ children, onSearch, text = "Search" }) {
  return (
    <form
      className="relative flex w-[600px] gap-2 border border-gray-300"
      onSubmit={onSearch}
    >
      {children}
      <PrimaryBottun text={text} />
    </form>
  );
}

export default SearchForm;
