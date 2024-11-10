/* eslint-disable react/prop-types */
function InfoLine({ children }) {
  return (
    <div className="last line grid-cols-auto-fill-min-350 last custom-divide grid">
      {children}
    </div>
  );
}

export default InfoLine;
