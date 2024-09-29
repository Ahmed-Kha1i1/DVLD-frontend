/* eslint-disable react/prop-types */
function StatusText({ type }) {
  const bgColor =
    type === "Completed"
      ? "bg-green-500"
      : type === "Cancelled"
      ? "bg-red-500"
      : type === "New"
      ? "bg-primary"
      : "";

  return (
    <div className=" text-white">
      <span
        className={`${bgColor} w-24 block text-center p-1 rounded-sm text-sm `}
      >
        {type}
      </span>
    </div>
  );
}

export default StatusText;
