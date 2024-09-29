/* eslint-disable react/prop-types */
function Error({ message }) {
  return (
    <div className="p-10 pt-14 mt-24 bg-red-100 w-[1200px] max-w-full mx-auto">
      <h2 className="text-black mb-10 font-semibold">Error</h2>
      <p className="mb-3 text-xl font-semibold">Fetch Error</p>
      <p className="mb-3 text-lg font-semibold">{message}</p>
      <p className="text-lg font-semibold">
        Operation failed: Please contact with your system administrator.
      </p>
    </div>
  );
}

export default Error;
