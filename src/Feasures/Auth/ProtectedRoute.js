import { useNavigate } from "react-router-dom";
import { sessoin } from "../../Constants";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const currentSession = localStorage.getItem(sessoin);

  useEffect(() => {
    if (!currentSession) navigate("/login");
  }, []);

  if (currentSession) return children;
  else navigate("/login");
}

export default ProtectedRoute;
