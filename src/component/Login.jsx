

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { useTranslation } from "react-i18next";

// import Side from "../assets/Side.jpg";
// import Logos from "../assets/Logos.png";
// import "../css/Login.css";

// export default function Login() {
//   const { t, i18n } = useTranslation();
//   const navigate = useNavigate();

//   const [contactNo, setContactNo] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const toggleLanguage = () => {
//     const newLang = i18n.language.startsWith("en") ? "th" : "en";
//     i18n.changeLanguage(newLang);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // if (contactNo.trim().length < 8)
//     if (contactNo.replace(/\D/g, "").length < 9) {
//       setError(t("login.error.invalidPhone"));
//       return;
//     }

//     setError("");
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_SERVER_URL}/login`,
//         // { contactNo },
//         { contactNo: contactNo.replace(/\D/g, "") },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       ); 
      
//       if (response.data.success) {

//     // ✅ Save login info
//     localStorage.setItem("userId", response.data.data.userId);

//     // ✅ Save token
//     localStorage.setItem("token", response.data.data.token);

//     navigate("/otp", {
//       state: {
//         userId: response.data.data.userId,
//       },
//       replace: true,
//     });
// }
      
//       else {
//         setError(
//           response.data.message || t("login.error.loginFailed")
//         );
//       }
//     } catch (err) {
//       setError(
//         err.response?.data?.message ||
//           t("login.error.genericError")
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <div className="login-illustration d-lg-flex">
//           <motion.img
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             src={Side}
//             alt="Community Illustration"
//             className="login-image"
//           />
//         </div>

//         <div className="login-form-section">
//           <div style={{ position: "absolute", top: "20px", right: "20px" }}>
//             <button
//               type="button"
//               onClick={toggleLanguage}
//               className="btn btn-sm btn-outline-secondary"
//               style={{ borderRadius: "20px", padding: "4px 12px" }}
//             >
//               {i18n.language.startsWith("en") ? "English" : "ไทย"}
//             </button>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="login-logo-wrapper"
//           >
//             <img
//               src={Logos}
//               alt="ThaiXO Logo"
//               className="img-fluid w-25 mb-3"
//             />
//             <span className="login-brand-name">
//               {t("header.title")}
//             </span>
//           </motion.div>

//           <h2 className="login-title">{t("login.title")}</h2>
//           <h3 className="login-subtitle">{t("login.subtitle")}</h3>
//           <p className="login-description">{t("login.description")}</p>

          

//           <form onSubmit={handleLogin} className="login-form">
//             <div className="login-inputs-row mb-3">
//               <div className="country-code-box">
//                 <span className="input-label-floating">{t("login.countryCodeLabel")}</span>
//                 <div className="country-code-content">
//                   <img src="https://flagcdn.com/w40/th.png" alt="Thailand Flag" className="flag-icon" />
//                   <span className="country-code-text text-black">(+66)</span>
//                 </div>
//               </div>

//               <div className="phone-input-box">
//                 <span className="input-label-floating">{t("login.phoneLabel")}</span>
//                 <input
//   type="tel"
//   className="phone-input-field"
//   placeholder="012-345-678"
//   value={contactNo}
//   onChange={(e) => {
//     // ✅ Remove non-numbers
//     let value = e.target.value.replace(/\D/g, "");

//     // ✅ Limit to 10 digits
//     value = value.substring(0,9);

//     // ✅ Apply format 012-345-6789
//     if (value.length > 6) {
//       value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
//     } else if (value.length > 3) {
//       value = `${value.slice(0, 3)}-${value.slice(3)}`;
//     }

//     setContactNo(value);
//   }}
//   disabled={loading}
// />
//               </div>
//             </div>

//             {error && (
//             <div className="bg-transparent border-0 p-0 m-0 alert text-colors alert-danger mb-3 text-center">{error}</div>
//           )}

//             <button type="submit" className="verify-btn" disabled={loading}>
//               {loading ? t("login.buttonLoading") : t("login.button")}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }























import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useTranslation } from "react-i18next";

import Side from "../assets/Side.jpg";
import Logos from "../assets/Logos.png";
import "../css/Login.css";

export default function Login() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [contactNo, setContactNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("en") ? "th" : "en";
    i18n.changeLanguage(newLang);
  };

  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();

    // Remove non-digits and validate length (at least 9 digits)
    const rawDigits = contactNo.replace(/\D/g, "");
    if (rawDigits.length < 9) {
      setError(t("login.error.invalidPhone"));
      return;
    }

    if (!isPolicyAccepted) { setError("Please accept the Creator Privacy & Platform Policy."); return; }

    setError("");
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/login`,
        { contactNo: rawDigits }, // send only digits
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        const { userId, smsToken } = response.data.data;

        // Store userId for later use (e.g., OTP verification)
        localStorage.setItem("userId", userId);

        // Navigate to OTP page with both userId and smsToken
        navigate("/otp", {
          state: {
            userId,
            smsToken,   // <-- this is the temporary token for OTP verification
          },
          replace: true,
        });
      } else {
        setError(
          response.data.message || t("login.error.loginFailed")
        );
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          t("login.error.genericError")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-illustration d-lg-flex">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src={Side}
            alt="Community Illustration"
            className="login-image"
          />
        </div>

        <div className="login-form-section">
          <div style={{ position: "absolute", top: "20px", right: "20px" }}>
            <button
              type="button"
              onClick={toggleLanguage}
              className="btn btn-sm btn-outline-secondary"
              style={{ borderRadius: "20px", padding: "4px 12px" }}
            >
              {i18n.language.startsWith("en") ? "English" : "ไทย"}
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="login-logo-wrapper"
          >
            <img
              src={Logos}
              alt="ThaiXO Logo"
              className="img-fluid w-25 mb-3"
            />
            <span className="login-brand-name">
              {t("header.title")}
            </span>
          </motion.div>

          <h2 className="login-title">{t("login.title")}</h2>
          <h3 className="login-subtitle">{t("login.subtitle")}</h3>
          <p className="login-description">{t("login.description")}</p>

          <form onSubmit={handleLogin} className="login-form">
            <div className="login-inputs-row mb-3">
              <div className="country-code-box">
                <span className="input-label-floating">{t("login.countryCodeLabel")}</span>
                <div className="country-code-content">
                  <img src="https://flagcdn.com/w40/th.png" alt="Thailand Flag" className="flag-icon" />
                  <span className="country-code-text text-black">(+66)</span>
                </div>
              </div>

              <div className="phone-input-box">
                <span className="input-label-floating">{t("login.phoneLabel")}</span>
                <input
                  type="tel"
                  className="phone-input-field"
                  placeholder="123-456-789"
                  value={contactNo}
                  onChange={(e) => {
                    // Remove non-digits
                    let value = e.target.value.replace(/\D/g, "");
                    // Limit to 9 digits (max 9 digits for Thai mobile)
                    value = value.substring(0, 9);
                    // Format with hyphens: 012-345-678
                    if (value.length > 6) {
                      value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
                    } else if (value.length > 3) {
                      value = `${value.slice(0, 3)}-${value.slice(3)}`;
                    }
                    setContactNo(value);
                  }}
                  disabled={loading}
                />
              </div>
            </div>

            {error && (
              <div className="bg-transparent border-0 p-0 m-0 alert text-colors alert-danger mb-3 text-center">
                {error}
              </div>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "15px 0",
                width: "100%",
              }}
            >
              <input
                type="checkbox"
                id="policyCheck"
                checked={isPolicyAccepted}
                onChange={(e) => setIsPolicyAccepted(e.target.checked)}
                style={{
                  width: "18px",
                  height: "18px",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              />

              <label
                htmlFor="policyCheck"
                style={{
                  margin: 0,
                  fontSize: "13px",
                  color: "#000000",
                  lineHeight: "20px",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "4px",
                }}
              >
                <span>By ticking this box, I agree to the</span>

                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#EB4D79",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  Creator Privacy & Platform Policy .
                </a>

                {/* <a
                  href="/platform-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#EB4D79",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  Platform Policy .
                </a> */}
              </label>
            </div>

            <button type="submit" className="verify-btn" disabled={loading}>
              {loading ? t("login.buttonLoading") : t("login.button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}