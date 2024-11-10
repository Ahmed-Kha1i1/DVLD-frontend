/* eslint-disable react/prop-types */
function CardTitle({ text, icon, children }) {
  return (
    <div className="one-for-card mb-8 flex items-center gap-4">
      <span className="icon text-2xl text-Lightgray">{icon}</span>
      <h3 className="xl:text-2xl">{text}</h3>
      {children}
    </div>
  );
}

export default CardTitle;
