/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function Link({ text, icon, to, color }) {
  return (
    <li>
      <NavLink
        to={to}
        className="group relative flex cursor-pointer items-center rounded-md px-4 py-2 transition-colors hover:bg-gray-200 md:block md:w-full md:rounded-none"
      >
        <span
          className={`${color || "text-Lightgray"} icon mr-2 text-2xl xl:mr-0`}
        >
          {icon}
        </span>
        <span
          className={`${color || "text-Darkgray"} text-xl font-semibold xl:absolute xl:left-[calc(100%+10px)] xl:top-[calc(100%+10px)] xl:z-20 xl:w-fit xl:rounded-md xl:bg-gray-700 xl:px-3 xl:py-1 xl:text-lg xl:text-gray-100 xl:opacity-0 xl:transition-opacity xl:group-hover:opacity-100 md:relative md:left-0 md:bg-transparent md:text-black md:opacity-100`}
        >
          {text}
        </span>
      </NavLink>
    </li>
  );
}
export default Link;
