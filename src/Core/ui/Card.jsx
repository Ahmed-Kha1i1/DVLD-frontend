/* eslint-disable react/prop-types */
function Card({ children }) {
  return (
    <div className="mt-5 grid grid-cols-[1fr_1fr] divide-y rounded-md border bg-sectionColor p-8 shadow-sm lg:grid-cols-[1fr] sm:p-2">
      {children}
    </div>
  );
}

export default Card;
