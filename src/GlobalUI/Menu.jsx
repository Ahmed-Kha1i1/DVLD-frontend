/* eslint-disable react/prop-types */
function Menu({ children, isRight = false, bgColor = "bg-sectionColor" }) {
  let RightStyle = isRight ? "left-full -top-4" : "";

  return (
    <ul
      className={`absolute ${bgColor} shadow-md w-max space-y-1 py-4 ${RightStyle} `}
    >
      {children}
    </ul>
  );
}

export default Menu;