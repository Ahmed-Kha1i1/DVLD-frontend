/* eslint-disable react/prop-types */
function Select({ options = [], onSelect }) {
  function onSelectOption(e) {
    onSelect(e.target.value);
  }

  return (
    <select
      className="input border border-r-0 px-4 text-lg"
      onChange={onSelectOption}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
