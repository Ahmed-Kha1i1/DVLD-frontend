/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
const options = [
  { value: "7", label: "Last 7 days" },
  { value: "30", label: "Last 30 days" },
  { value: "90", label: "Last 90 days" },
];
function DashboardFilter() {
  const filterField = "last";
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-1 rounded-md border bg-white p-1">
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
}

function FilterButton({ onClick, disabled, active, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md border p-2 font-semibold ${active ? "bg-primary text-white" : "bg-white"} hover:bg-primary hover:text-white ${disabled ? "" : ""} transition-colors`}
    >
      {children}
    </button>
  );
}
export default DashboardFilter;
