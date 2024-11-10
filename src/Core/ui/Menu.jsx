/* eslint-disable react/prop-types */
function Menu({ children, isRight = false, bgColor = "bg-sectionColor" }) {
  let RightStyle = isRight ? "left-full -top-4 lg:top-0 lg:left-0" : "";

  return (
    <ul
      className={`absolute ${bgColor} w-max space-y-1 py-4 shadow-md ${RightStyle} z-50 flex min-w-72 flex-col content-stretch lg:relative lg:w-full lg:bg-white lg:pl-4 lg:shadow-none`}
    >
      {children}
    </ul>
  );
}

export default Menu;
