/* eslint-disable react/prop-types */
import { BiSolidRightArrow } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Item({
  text,
  icon,
  hasArraw,
  type = "secondary",
  to = "",
  disabled = false,
  onClick,
  isli = true,
  className,
}) {
  let btnType =
    type === "primary"
      ? "btn-primary"
      : type === "secondary"
        ? "btn-secondary"
        : "";

  let styles = `cursor-pointer hover:bg-gray-200  transition-colors px-4 ${btnType} ${
    disabled ? "disabled" : ""
  } ${className ? className : ""}`;

  const innerElements = (
    <>
      <span className="mr-2">{icon}</span>
      <span className="text-left">{text}</span>
      {hasArraw ? (
        <span className="ml-auto pl-4 text-xs text-TextColor">
          <BiSolidRightArrow />
        </span>
      ) : null}
    </>
  );

  if (to) {
    return (
      <li>
        <NavLink to={to} className={`${styles} flex items-center`}>
          {innerElements}
        </NavLink>
      </li>
    );
  }

  const buttonElement = (
    <button
      className={`${styles} grid ${hasArraw ? "grid-cols-[auto_1fr_auto]" : "grid-cols-[auto_1fr]"} items-center`}
      onClick={() => onClick?.()}
    >
      {innerElements}
    </button>
  );

  return isli ? <li className="col">{buttonElement}</li> : buttonElement;
}

export default Item;
