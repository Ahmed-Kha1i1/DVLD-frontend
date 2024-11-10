/* eslint-disable react/prop-types */
function Form({
  onSubmit,
  children,
  className = "grid-cols-[1fr_1fr] md:grid-cols-[1fr] ",
}) {
  return (
    <form onSubmit={onSubmit} className={`grid gap-x-12 ${className || ""}`}>
      {children}
    </form>
  );
}

export default Form;
