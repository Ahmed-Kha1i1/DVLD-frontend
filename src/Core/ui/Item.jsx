/* eslint-disable react/prop-types */
import { BiSolidRightArrow } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Item({
  text,
  icon,
  hasArraw,
  type = "secondary",
  to = "",
  disabled = false
}) {
  let btnType =
    type === "primary"
      ? "btn-primary"
      : type === "secondary"
      ? "btn-secondary"
      : "";

  let styles = `cursor-pointer hover:bg-gray-200  transition-colors flex items-center px-4 ${btnType} ${
    disabled ? "disabled" : ""
  }`;

  const innerElements = (
    <>
      <span className="mr-2 ">{icon}</span>
      <span className="">{text}</span>
      {hasArraw ? (
        <span className="ml-auto pl-4 text-TextColor text-xs">
          <BiSolidRightArrow />
        </span>
      ) : null}
    </>
  );

  if (to) {
    return (
      <NavLink to={to} className={styles}>
        {innerElements}
      </NavLink>
    );
  }

  return <div className={styles}>{innerElements}</div>;
}

export default Item;
