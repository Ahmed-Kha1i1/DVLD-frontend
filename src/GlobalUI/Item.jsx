/* eslint-disable react/prop-types */
import { BiSolidRightArrow } from "react-icons/bi";

function Item({ text, icon, hasArraw }) {
  return (
    <li className="cursor-pointer hover:bg-gray-200 transition-colors flex items-center px-4">
      <span className="mr-2 text-secondary text-base icon">{icon}</span>
      <span className="text-TextColor text-base font-semibold">{text}</span>
      {hasArraw ? (
        <span className="ml-auto pl-4 text-TextColor text-xs">
          <BiSolidRightArrow />
        </span>
      ) : null}
    </li>
  );
}

export default Item;
