/* eslint-disable react/prop-types */
/*
structure
[
  {
    optionText,
    optionValue,
  }
]
*/
function Select({ options = [], onSelect, defaultValue }) {
  function onSelectOption(e) {
    onSelect(e.target.value);
  }

  return (
    <select
      className="input border border-r-0 px-4 text-lg"
      onChange={onSelectOption}
      defaultValue={defaultValue}
    >
      {options.map((option) => (
        <option key={option.optionValue} value={option.optionValue}>
          {option.optionText}
        </option>
      ))}
    </select>
  );
}

export default Select;
