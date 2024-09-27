/* eslint-disable react/prop-types */
function PageTitle({ title }) {
  return (
    <div className="flex-hori mb-10 gap-24">
      <h2 className="font-semibold capitalize text-TextColor">{title}</h2>
      <hr className="border-1 flex-grow border-Lightgray" />
    </div>
  );
}

export default PageTitle;
