/* eslint-disable react/prop-types */
function InlineInput({ children, id, label, disabled, className }) {
  return (
    <div
      className={`form-row relative my-6 grid grid-cols-[auto_1fr] gap-3 text-lg text-gray-700 ${className ? className : ""} ${disabled ? "disabled" : ""}`}
    >
      <label htmlFor={id} className="font-semibold capitalize">
        {label}
      </label>
      {children}
    </div>
  );
}

export default InlineInput;
