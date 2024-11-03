/* eslint-disable react/prop-types */
function ValueLine({ parameter, children }) {
  return (
    <div className="flex">
      <div className="basis-52 text-xl font-semibold">{parameter}</div>
      <div className="text-lg">{children || "????"}</div>
    </div>
  );
}

export default ValueLine;
