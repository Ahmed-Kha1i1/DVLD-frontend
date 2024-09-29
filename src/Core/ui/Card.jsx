/* eslint-disable react/prop-types */
function Card({ children }) {
  return (
    <div className="mt-5 divide-y rounded-md border bg-sectionColor p-8 shadow-sm">
      {children}
    </div>
  );
}

export default Card;
