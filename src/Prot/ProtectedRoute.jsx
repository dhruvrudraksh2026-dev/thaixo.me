// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const userId = localStorage.getItem("userId");

//   // ❌ If not logged in → redirect to login
//   if (!userId) {
//     return <Navigate to="/" replace />;
//   }

//   // ✅ If logged in → allow access
//   return children;
// };

// export default ProtectedRoute;
















import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const location = useLocation();
  const navigate = useNavigate();

  // ❌ If not logged in redirect to login
  if (!userId || !token) {
    return <Navigate to="/" replace />;
  }

  // ✅ Block browser back button
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);

      navigate(location.pathname, {
        replace: true,
      });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate, location]);

  // ✅ Allow access
  return children;
};

export default ProtectedRoute;