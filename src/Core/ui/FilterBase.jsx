/* eslint-disable react/prop-types */
export default function FilterBase({ icon, id, label, children, className }) {
  return (
    <div
      className={`relative h-16 items-center gap-2 border bg-gray-100 px-3 text-xl ${className || ""} grid ${icon ? "grid-cols-[auto_auto_1fr]" : "grid-cols-[auto_1fr]"} lg:h-14 lg:px-2 sm:h-auto sm:grid-cols-1 sm:gap-2 sm:p-1`}
    >
      {icon && <span className="text-gray-500 sm:hidden">{icon}</span>}
      <label htmlFor={id} className="text-gray-500 lg:text-lg">
        {label}
      </label>
      {children}
    </div>
  );
}
