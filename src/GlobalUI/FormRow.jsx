/* eslint-disable react/prop-types */
function Error({ children }) {
  return <p className="my-3 text-lg text-red-700">{children}</p>;
}

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
      <div className="error min-h-14">{error && <Error>{error}</Error>}</div>
    </div>
  );
}

export default FormRow;
