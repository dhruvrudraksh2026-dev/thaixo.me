import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userId = localStorage.getItem("userId");

  // ❌ If not logged in → redirect to login
  if (!userId) {
    return <Navigate to="/" replace />;
  }

  // ✅ If logged in → allow access
  return children;
};

export default ProtectedRoute;