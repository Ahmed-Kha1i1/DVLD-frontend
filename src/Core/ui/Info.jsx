/* eslint-disable react/prop-types */
function Info({ title, text, children, isInLine = false }) {
  return (
    <div
      className={`flex w-full items-center p-2 ${isInLine && "col-span-2 lg:col-span-1"}`}
    >
      <div className="info w-40 min-w-40 text-lg font-semibold capitalize text-Darkgray">
        {title}
      </div>
      <div>{text || "????"}</div>
      {children}
    </div>
  );
}

export default Info;
