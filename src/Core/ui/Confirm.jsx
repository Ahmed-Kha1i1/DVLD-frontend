/* eslint-disable react/prop-types */
function Confirm({ Icon, title, paragraph, onClick, children }) {
  function handleSubmit(e) {
    e.preventDefault();
    onClick();
  }

  return (
    <div className="text-center">
      <div className="mb-2 flex items-start justify-center p-1">{Icon}</div>
      <h3 className="mb-3 capitalize">{title}</h3>
      <div className="mb-14 text-lg">{paragraph}</div>

      <form onSubmit={handleSubmit}>{children}</form>
    </div>
  );
}

export default Confirm;
