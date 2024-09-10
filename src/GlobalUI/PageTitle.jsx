/* eslint-disable react/prop-types */
function PageTitle({ title }) {
  return (
    <div className="flex-hori gap-24 mb-10">
      <h2 className="text-TextColor font-semibold">{title}</h2>
      <hr className="border-1 border-Lightgray flex-grow" />
    </div>
  );
}

export default PageTitle;
