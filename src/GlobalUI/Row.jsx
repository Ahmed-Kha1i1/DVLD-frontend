/* eslint-disable react/prop-types */
function Row({ columns, children, isDark }) {
  return (
    <div
      className={`grid ${columns} p-4 text-slate-800 text-lg ${
        isDark ? "bg-gray-700" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Row;
