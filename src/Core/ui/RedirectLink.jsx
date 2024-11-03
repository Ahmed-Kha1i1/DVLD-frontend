/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function RedirectLink({ path, text, disabled = false }) {
  return (
    <div className="pt-3">
      <Link
        to={path}
        className={`text-xl text-primary underline ${disabled ? "disabled" : ""}`}
      >
        {text}
      </Link>
    </div>
  );
}

export default RedirectLink;
