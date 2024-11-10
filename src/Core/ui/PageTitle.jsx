/* eslint-disable react/prop-types */
function PageTitle({ title, withLine = true, center = false }) {
  return (
    <div
      className={`mb-10 flex items-center gap-24 ${center ? "justify-center" : "justify-between"}`}
    >
      <h2 className="font-semibold capitalize text-TextColor xl:text-3xl">
        {title}
      </h2>
      {withLine && <hr className="border-1 flex-grow border-Lightgray" />}
    </div>
  );
}

export default PageTitle;
