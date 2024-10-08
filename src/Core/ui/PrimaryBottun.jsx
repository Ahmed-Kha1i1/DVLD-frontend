import { Link } from "react-router-dom";

function PrimaryBottun({ text, onClick, to }) {
  const className = "min-w-[60px] bg-primary p-4 text-lg text-white";
  if (to)
    return (
      <Link className={className} onClick={(e) => onClick?.(e)} to={to}>
        {text}
      </Link>
    );
  return (
    <button className={className} onClick={() => onClick?.()}>
      {text}
    </button>
  );
}

export default PrimaryBottun;
