/* eslint-disable react/prop-types */
export default function PageButton({ number, active, onClick }) {
  return (
    <button
      className={`btn-page ${active ? "active" : "not-active"}`}
      onClick={onClick}
    >
      <span className="number">{number}</span>
    </button>
  );
}
