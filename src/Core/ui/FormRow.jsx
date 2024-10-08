/* eslint-disable react/prop-types */
import InputError from "./InputError";
function FormRow({ label, error, children, className, isRequired = false }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div
        className={`form-row relative flex flex-col gap-3 text-lg text-gray-700`}
      >
        {isRequired && (
          <span className="absolute -left-4 text-2xl text-red-500">*</span>
        )}
        <label
          htmlFor={children.props?.id}
          className="font-semibold capitalize"
        >
          {label}
        </label>
        {children}
      </div>
      <InputError>{error}</InputError>
    </div>
  );
}

export default FormRow;
