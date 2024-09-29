/* eslint-disable react/prop-types */
function Active({ active }) {
  let style = active
    ? "bg-green-200 text-green-500"
    : "text-red-500 bg-red-200 ";
  return (
    <span className={`rounded-md px-2 py-1 text-xl font-bold ${style}`}>
      {active ? "Active" : "Inactive"}
    </span>
  );
}

export default Active;
