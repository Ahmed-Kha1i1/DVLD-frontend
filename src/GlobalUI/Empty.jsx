import { FaInbox } from "react-icons/fa6";

/* eslint-disable react/prop-types */
function Empty({ children }) {
  return (
    <div className="flex h-64 flex-col items-center justify-center bg-gray-100 text-Darkgray">
      <FaInbox className="text-5xl" />
      <p className="mt-5 text-xl">{children}</p>
    </div>
  );
}

export default Empty;
