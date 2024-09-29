/* eslint-disable react/prop-types */
function Form({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-2 gap-x-12">
      {children}
    </form>
  );
}

export default Form;
