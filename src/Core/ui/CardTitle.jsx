/* eslint-disable react/prop-types */
function CardTitle({ text, icon, children }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="icon text-2xl text-Lightgray">{icon}</span>
      <h3>{text}</h3>
      {children}
    </div>
  );
}

export default CardTitle;
