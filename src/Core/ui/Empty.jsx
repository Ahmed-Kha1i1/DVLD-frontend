import { FaInbox } from "react-icons/fa6";

/* eslint-disable react/prop-types */
function Empty({ children, icon = <FaInbox /> }) {
  return (
    <div className="flex h-72 flex-col items-center justify-center bg-gray-100 text-Darkgray">
      <span className="text-5xl">{icon}</span>
      <p className="mt-5 text-xl">{children}</p>
    </div>
  );
}

export default Empty;
