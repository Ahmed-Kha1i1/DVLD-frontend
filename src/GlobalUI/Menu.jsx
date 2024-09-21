/* eslint-disable react/prop-types */
function Menu({ children, isRight = false, bgColor = "bg-sectionColor" }) {
  let RightStyle = isRight ? "left-full -top-4" : "";

  return (
    <ul
      className={`absolute ${bgColor} w-max space-y-1 py-4 shadow-md ${RightStyle} z-50 min-w-72`}
    >
      {children}
    </ul>
  );
}

export default Menu;
