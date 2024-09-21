/* eslint-disable react/prop-types */

function Button({
  text,
  icon,
  bgColor = "Lightgray",
  textColor = "black",
  width = "44",
  disabled,
  onClick,
  styles,
}) {
  return (
    <button
      onClick={() => onClick?.()}
      className={`w-${width} flex items-center rounded-md bg-${bgColor} px-4 py-3 text-2xl text-white ${styles ? styles : ""} ${disabled ? "disabled" : ""}`}
    >
      <span className={`mr-4 text-2xl text-${textColor}`}>{icon}</span>
      <span>{text}</span>
    </button>
  );
}

export default Button;
