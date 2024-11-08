/* eslint-disable react/prop-types */
export default function FilterBase({ icon, id, label, children }) {
  return (
    <div className="relative flex h-16 items-center gap-2 border bg-gray-100 px-3 text-xl">
      {icon && <span className="text-gray-500">{icon}</span>}
      <label htmlFor={id} className="text-gray-500">
        {label}
      </label>
      {children}
    </div>
  );
}
