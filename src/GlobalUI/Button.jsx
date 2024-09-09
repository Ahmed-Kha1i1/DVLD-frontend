/* eslint-disable react/prop-types */

function Button({ text, type = "primary", icon }) {
  let btnType = type === "primary" ? "btn-primary" : "";

  return (
    <button
      className={`hover:bg-gray-200 p-2 flex items-center transition-colors  ${btnType}`}
    >
      <span className="mr-2 icon">{icon}</span>
      <span className="">{text}</span>
    </button>
  );
}

export default Button;
