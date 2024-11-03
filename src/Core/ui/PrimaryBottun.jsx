/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function PrimaryBottun({ children, onClick, to, className }) {
  const styles = `min-w-[60px] bg-primary p-4 text-lg text-white ${className}`;
  if (to)
    return (
      <Link className={styles} onClick={(e) => onClick?.(e)} to={to}>
        {children}
      </Link>
    );

  return (
    <button className={styles} onClick={() => onClick?.()}>
      {children}
    </button>
  );
}

export default PrimaryBottun;
