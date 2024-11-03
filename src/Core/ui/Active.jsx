/* eslint-disable react/prop-types */
function Active({ active, large = false }) {
  let style = active
    ? "bg-green-200 text-green-500"
    : "text-red-500 bg-red-200 ";
  let sizeStyle = large
    ? "px-2 py-1 text-xl font-bold"
    : "px-2 text-lg font-semibold";
  return (
    <span className={`rounded-md ${style} ${sizeStyle}`}>
      {active ? "Active" : "Inactive"}
    </span>
  );
}

export default Active;
