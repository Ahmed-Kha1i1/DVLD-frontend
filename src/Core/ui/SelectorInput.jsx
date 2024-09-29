/* eslint-disable react/prop-types */
function SelectorInput({ id, value, generateRef, onChange, ...prop }) {
  return (
    <input
      type="text"
      value={value}
      id={id}
      placeholder="Start typing..."
      {...prop}
      ref={generateRef}
      onChange={onChange}
    />
  );
}

export default SelectorInput;
