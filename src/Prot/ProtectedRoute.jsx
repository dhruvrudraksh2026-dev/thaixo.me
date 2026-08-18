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
import { useEffect, useState } from "react";
import VerificationModal from "../component/VerificationModal";

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

  // Check legal details verification on mount
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchStatus = async () => {
      try {
        const res = await fetch(
          "https://sagarxo.app/web-api/customer/legal-details-verification-status",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
          }
        );

        if (!res.ok) return;

        const body = await res.json();
        if (body && body.data && body.data.is_legal_details_verified === false) {
          setVerificationMessage(body.data.message || "Please verify your identity.");
          setShowVerificationModal(true);
        }
      } catch (err) {
        // fail silently
        console.error("Verification status fetch failed", err);
      }
    };

    fetchStatus();
  }, []);

  // ✅ Allow access
  return (
    <>
      {children}
      <VerificationModal
        open={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
        message={verificationMessage}
      />
    </>
  );
};

export default ProtectedRoute;