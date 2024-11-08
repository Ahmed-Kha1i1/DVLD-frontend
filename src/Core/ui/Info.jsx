/* eslint-disable react/prop-types */
function Info({ title, text, children }) {
  return (
    <div className="m-2 flex items-center">
      <div className="info w-40 text-lg font-semibold capitalize text-Darkgray">
        {title}
      </div>
      <div>{text || "????"}</div>
      {children}
    </div>
  );
}

export default Info;
