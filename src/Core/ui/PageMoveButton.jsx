/* eslint-disable react/prop-types */
export default function PageMoveButton({ icon, onClick, disabled }) {
  return (
    <button
      className={`move-page ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
