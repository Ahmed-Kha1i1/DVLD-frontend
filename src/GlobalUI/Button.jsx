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
      onClick={(e) => onClick?.(e)}
      className={`btn w-${width} flex items-center bg-${bgColor} text-white ${styles ? styles : ""} ${disabled ? "disabled" : ""}`}
    >
      <span className={`${icon ? "mr-4" : ""} text-2xl text-${textColor}`}>
        {icon}
      </span>
      <span>{text}</span>
    </button>
  );
}

export default Button;
