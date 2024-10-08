/* eslint-disable react/prop-types */
import SearchForm from "./SearchForm";
import SearchInput from "./SearchInput";
function Search({ onSearch, text = "Search", error, registerObj }) {
  return (
    <SearchForm onSearch={onSearch} text={text}>
      <SearchInput error={error} registerObj={registerObj} />
    </SearchForm>
  );
}

export default Search;
