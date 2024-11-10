/* eslint-disable react/prop-types */
export default function SearchTable({ onSearch, defaultValue }) {
  return (
    <input
      placeholder="Search..."
      type="text"
      value={defaultValue}
      className="h-16 border bg-gray-100 pl-3 text-lg focus:outline-none lg:h-14 lg:text-lg"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
