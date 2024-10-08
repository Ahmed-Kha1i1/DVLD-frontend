/* eslint-disable react/prop-types */
function InputError({ children, className }) {
  return (
    <p
      className={`error my-3 min-h-7 text-lg text-red-700 ${className && className}`}
    >
      {children}
    </p>
  );
}

export default InputError;
