import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ProtectedRoute() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/app/v1/auth/Login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
