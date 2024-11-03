/* eslint-disable react/prop-types */
function InlineInput({ children, id, label, disabled }) {
  return (
    <div
      className={`form-row relative my-6 grid grid-cols-[auto_1fr] gap-3 text-lg text-gray-700 ${disabled ? "disabled" : ""}`}
    >
      <label htmlFor={id} className="font-semibold capitalize">
        {label}
      </label>
      {children}
    </div>
  );
}

export default InlineInput;
