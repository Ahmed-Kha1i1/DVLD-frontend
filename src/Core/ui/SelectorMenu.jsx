/* eslint-disable react/prop-types */
function SelectorMenu({ options, OnSelect, referance, renderOption }) {
  // const internalRef = useRef(null); // Create a fallback ref if not provided
  // const finalRef = ref || internalRef; // Use the provided ref or the fallback one

  return (
    <div ref={referance} className="options" onClick={OnSelect}>
      {options.map((option, index) => (
        <div key={index}>{renderOption(option)}</div>
      ))}
    </div>
  );
}

export default SelectorMenu;
