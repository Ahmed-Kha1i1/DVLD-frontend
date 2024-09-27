/* eslint-disable react/prop-types */
function SelectorMenu({ options, OnSelect, ref, renderOption }) {
  return (
    <div ref={ref} className="options" onClick={OnSelect}>
      {options.map((option, index) => (
        <div key={index}>{renderOption(option)}</div>
      ))}
    </div>
  );
}

export default SelectorMenu;
