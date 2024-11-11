/* eslint-disable react/prop-types */
function Stat({ icon, title, value, color }) {
  return (
    <div className="grid grid-cols-[6.5rem_1fr] grid-rows-[auto_auto] gap-x-6 gap-y-2 rounded-md border bg-white p-2">
      <div
        className={`stat row-start-1 -row-end-1 flex aspect-[1] items-center justify-center rounded-full ${color}`}
      >
        {icon}
      </div>
      <h5 className="self-end text-lg font-semibold uppercase tracking-[0.4px] text-gray-600">
        {title}
      </h5>
      <div className="text-2xl">{value}</div>
    </div>
  );
}

export default Stat;
