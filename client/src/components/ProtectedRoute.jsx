import { Navigate } from "react-router-dom";

function ProtectedRoute({
  children,
  employerOnly = false,
}) {

  const token = localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (
    employerOnly &&
    user?.role !== "employer"
  ) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;