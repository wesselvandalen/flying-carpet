import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PublicRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp > currentTime) {
        // Token is valid → redirect to dashboard
        return <Navigate to="/dashboard" replace />;
      } else {
        // Token expired → remove and stay on login
        sessionStorage.removeItem("token");
      }
    } catch (err) {
      // Invalid token → remove it
      sessionStorage.removeItem("token");
    }
  }

  // No valid token → allow access to public route
  return children;
};

export default PublicRoute;