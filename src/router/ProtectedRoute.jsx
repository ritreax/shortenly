import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("loggedIn") === "true";

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;