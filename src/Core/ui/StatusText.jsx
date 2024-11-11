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
    <div className="text-white">
      <span
        className={`${bgColor} block w-24 rounded-sm p-1 text-center text-sm`}
      >
        {type}
      </span>
    </div>
  );
}

export default StatusText;
