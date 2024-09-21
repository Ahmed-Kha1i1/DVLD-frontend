/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function Link({ text, icon, to, color }) {
  return (
    <li>
      <NavLink
        to={to}
        className="cursor-pointer hover:bg-gray-200  transition-colors flex items-center px-4 py-2 rounded-md"
      >
        <span className={`${color || "text-Lightgray"}  text-2xl icon mr-2`}>
          {icon}
        </span>
        <span className={`${color || "text-Darkgray"} font-semibold  text-xl`}>
          {text}
        </span>
      </NavLink>
    </li>
  );
}
export default Link;
