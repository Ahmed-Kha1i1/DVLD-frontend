/* eslint-disable react/prop-types */
function Row({ columns, children }) {
  return (
    <div className={`grid ${columns} p-1 text-TextColor text-lg`}>
      {children}
    </div>
  );
}

export default Row;
