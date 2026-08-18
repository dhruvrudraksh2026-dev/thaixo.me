
// import { useState, useEffect, useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import axios from 'axios';
// import { useTranslation } from 'react-i18next';
// import Otps from "../assets/Otp.png";
// import Logos from "../assets/Logos.png";
// import "../css/Otp.css";

// export default function VerifyOtp() {
//   const { t, i18n } = useTranslation();

//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [timeLeft, setTimeLeft] = useState(56);
//   const [canResend, setCanResend] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [resendLoading, setResendLoading] = useState(false);
//   const [error, setError] = useState("");

//   const otpRefs = useRef([]);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const userId = location.state?.userId;

//   // Redirect if no userId
//   useEffect(() => {
//     if (!userId) {
//       navigate("/", { replace: true });
//     }
//   }, [userId, navigate]);

//   // Language toggle – same as Login
//   const toggleLanguage = () => {
//     const newLang = i18n.language.startsWith("en") ? "th" : "en";
//     i18n.changeLanguage(newLang);
//   };

//   // Auto‑focus first input
//   useEffect(() => {
//     if (userId) {
//       otpRefs.current[0]?.focus();
//     }
//   }, [userId]);

//   // Resend timer
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   // ---------- OTP handlers ----------
//   const handleOtpChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     setError("");

//     if (value && index < 5) {
//       otpRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       otpRefs.current[index - 1]?.focus();
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);

//     if (pasted.length > 0) {
//       const newOtp = [...otp];
//       for (let i = 0; i < pasted.length && i < 6; i++) {
//         newOtp[i] = pasted[i];
//       }
//       setOtp(newOtp);
//       setError("");

//       const nextFocus = Math.min(pasted.length, 5);
//       otpRefs.current[nextFocus]?.focus();
//     }
//   };
//   // ---------- end OTP handlers ----------

//   // Resend OTP
//   const handleResend = async () => {
//     if (!canResend || resendLoading || !userId) return;

//     setResendLoading(true);
//     setError("");

//     try {
//       const response = await axios.post(
//         "https://sagarxo.app/web-api/resend-otp",
//         { userId: String(userId) },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': localStorage.getItem('token') || '',
//           },
//           withCredentials: true
//         }
//       );

//       const data = response.data;

//       if (data.success) {
//         setOtp(["", "", "", "", "", ""]);
//         setTimeLeft(56);
//         setCanResend(false);
//         otpRefs.current[0]?.focus();
//         alert(t('otp.resendSuccess', 'OTP resent successfully!'));
//       } else {
//         setError(data.message || t('otp.error.resendFailed', 'Failed to resend OTP'));
//       }
//     } catch (err) {
//       console.error("Resend OTP Error:", err);
//       setError(err.response?.data?.message || t('otp.error.resendFailed', 'Failed to resend OTP'));
//     } finally {
//       setResendLoading(false);
//     }
//   };

//   // Verify OTP
//   const handleVerify = async (e) => {
//     e.preventDefault();
//     setError("");

//     const otpString = otp.join("");
//     if (otpString.length !== 6) {
//       setError(t('otp.error.invalidOtp', 'Please enter a valid 6-digit OTP'));
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_SERVER_URL}/verify-otp`,
//         { userId: String(userId), otp: otpString },
//         {
//           headers: { 'Content-Type': 'application/json' },
//           withCredentials: true
//         }
//       );

//       const data = response.data;

//       if (data.success) {
//         const token = data.token || data.data?.token;

//         if (token) {
//           localStorage.setItem('token', token);
//         }

//         navigate('/dashboard',  { replace: true });
//       } else {
//         // setError(data.message || t('otp.error.verificationFailed', 'Verification failed'));
//         setError(
//   data.message === "OTP does not match"
//     ? t("otp.error.otpMismatch")
//     : data.message || t("otp.error.verificationFailed", "Verification failed")
// );
//         setOtp(["", "", "", "", "", ""]);
//         otpRefs.current[0]?.focus();
//       }
//     } catch (err) {
//       // setError(err.response?.data?.message || t('otp.error.genericError', 'Error'));
//       const errorMessage = err.response?.data?.message;

// setError(
//   errorMessage === "OTP does not match"
//     ? t("otp.error.otpMismatch")
//     : errorMessage || t("otp.error.genericError", "Error")
// );
//       setOtp(["", "", "", "", "", ""]);
//       otpRefs.current[0]?.focus();
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

//   if (!userId) return null;

//   return (
//     <div className="Otp-container bg-white">
//       <div className="Otp-image-side d-lg-flex">
//         {/* <motion.img
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           src={Otps}
//           alt="OTP Illustration"
//           className="side-image w-75"
//         /> */}

//         <img
//   src={Otps}
//   alt="Community Illustration"
//   className="side-image w-75"
// />
      
//       </div>

//       <div className="Otp-form-side">
//         <div className="Otp-card">
//           {/* Language Toggle – same as Login */ }
//           <div className="language-toggle-wrapper" style={{ position: 'absolute', top: '20px', right: '20px' }}>
//             <button
//               onClick={toggleLanguage}
//               className="btn btn-sm btn-outline-secondary"
//               style={{ borderRadius: '20px', padding: '4px 12px' }}
//             >
//               {i18n.language.startsWith("en") ? "English" : "ไทย"}
//             </button>
//           </div>

//           <div className="Otp-header">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               <img src={Logos} className="img-fluid w-25 mb-4" alt="ThaiXO Logo" />
//               {/* Brand name – same as Login */ }
//             </motion.div>

//               <span className="login-brand-name">
//                 {t("otp.titles")}
//               </span>
//             <p className="Otp-instruction">
//               {t('otp.instruction', 'Open Your WhatsApp → Copy Your secure OTP.')}
//             </p>
//           </div>

//           {/* Error Message */ }

//           <form onSubmit={handleVerify}>
//             <div className="otp-input-container">
//               {otp.map((digit, i) => (
//                 <input
//                   key={i}
//                   ref={(el) => (otpRefs.current[i] = el)}
//                   id={`otp-input-${i}`}
//                   className="otp-input"
//                   type="tel"
//                   inputMode="numeric"
//                   pattern="[0-9]*"
//                   maxLength="1"
//                   value={digit}
//                   onChange={(e) => handleOtpChange(i, e.target.value)}
//                   onKeyDown={(e) => handleKeyDown(i, e)}
//                   onPaste={handlePaste}
//                   disabled={loading}
//                   style={{
//                     border: "3px solid #EC5D80",
//                     background: "#FFC3BD",
//                     color: "#000",
//                   }}
//                 />
//               ))}
//             </div>


//               {error && (
//             <div className="error-message mb-4 text-center">
//               {error}
//             </div>
//           )}


//             <button
//               type="submit"
//               className="verify-button"
//               disabled={otp.join("").length !== 6 || loading}
//               style={{
//                 background: "#EC5D80",
//                 color: "#fff",
//                 opacity: loading || otp.join("").length !== 6 ? 0.7 : 1,
//                 cursor: loading ? "not-allowed" : "pointer",
//               }}
//             >
//               {loading
//                 ? t('otp.verifying', 'Verifying...')
//                 : t('otp.verifyButton', 'Verify OTP')
//               }
//             </button>

//             <div className="resend-section mt-4">
//               <p className="p-0 m-0 dont-receive">
//                 {t('otp.didntReceive', "Didn't receive code?")}
//               </p>
//               <button
//                 type="button"
//                 className={`resend-btn ${canResend ? "active" : "disabled"}`}
//                 onClick={handleResend}
//                 disabled={!canResend || loading || resendLoading}
//               >
//                 {resendLoading
//                   ? t('otp.sending', 'Sending...')
//                   : t('otp.resend', 'Resend')
//                 }
//               </button>
//               <span className="timer">
//                 {t('otp.timer', ' - ')}{formatTime(timeLeft)}
//               </span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }











import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Otps from "../assets/Otp.png";
import Logos from "../assets/Logos.png";
import "../css/Otp.css";

export default function VerifyOtp() {
  const { t, i18n } = useTranslation();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(56);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [error, setError] = useState("");

  const otpRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve both userId and smsToken from location state
  const { userId, smsToken } = location.state || {};

  // Redirect if no userId or smsToken (shouldn't happen if coming from Login)
  useEffect(() => {
    if (!userId || !smsToken) {
      navigate("/", { replace: true });
    }
  }, [userId, smsToken, navigate]);

  // Language toggle
  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("en") ? "th" : "en";
    i18n.changeLanguage(newLang);
  };

  // Auto‑focus first input
  useEffect(() => {
    if (userId) {
      otpRefs.current[0]?.focus();
    }
  }, [userId]);

  // Resend timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  // ---------- OTP handlers ----------
  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);

    if (pasted.length > 0) {
      const newOtp = [...otp];
      for (let i = 0; i < pasted.length && i < 6; i++) {
        newOtp[i] = pasted[i];
      }
      setOtp(newOtp);
      setError("");

      const nextFocus = Math.min(pasted.length, 5);
      otpRefs.current[nextFocus]?.focus();
    }
  };
  // ---------- end OTP handlers ----------

  // Resend OTP – remove Authorization header, only send userId
  const handleResend = async () => {
    if (!canResend || resendLoading || !userId) return;

    setResendLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://sagarxo.app/web-api/resend-otp",
        { userId: String(userId) },
        {
          headers: {
            'Content-Type': 'application/json',
            // No Authorization header – not needed at this stage
          },
          withCredentials: true
        }
      );

      const data = response.data;

      if (data.success) {
        setOtp(["", "", "", "", "", ""]);
        setTimeLeft(56);
        setCanResend(false);
        otpRefs.current[0]?.focus();
        // Show success message (or just a toast)
        // alert(t('otp.resendSuccess', 'OTP resent successfully!'));
      } else {
        setError(data.message || t('otp.error.resendFailed', 'Failed to resend OTP'));
      }
    } catch (err) {
      console.error("Resend OTP Error:", err);
      setError(err.response?.data?.message || t('otp.error.resendFailed', 'Failed to resend OTP'));
    } finally {
      setResendLoading(false);
    }
  };

  // Verify OTP – now includes smsToken (token)
  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");

    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError(t('otp.error.invalidOtp', 'Please enter a valid 6-digit OTP'));
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/verify-smsmkt-otp`,
        {
          userId: String(userId),
          otp: otpString,
          token: smsToken   // <-- this is the smsToken from login
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      const data = response.data;

      if (data.success) {
        const token = data.data?.token || data.token;

        if (token) {
          localStorage.setItem('token', token);
        }

        navigate('/dashboard', { replace: true });
          // signal Dashboard to run verification check and show modal if needed
          try {
            localStorage.setItem('showLegalVerificationModal', 'true');
          } catch (e) {}

          navigate('/dashboard', { replace: true });
        // Handle "OTP does not match" specifically
        const errorMsg = data.message;
        setError(
          errorMsg === "OTP does not match"
            ? t("otp.error.otpMismatch")
            : errorMsg || t("otp.error.verificationFailed", "Verification failed")
        );
        setOtp(["", "", "", "", "", ""]);
        otpRefs.current[0]?.focus();
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message;
      setError(
        errorMsg === "OTP does not match"
          ? t("otp.error.otpMismatch")
          : errorMsg || t("otp.error.genericError", "Error")
      );
      setOtp(["", "", "", "", "", ""]);
      otpRefs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  if (!userId || !smsToken) return null;

  return (
    <div className="Otp-container bg-white">
      <div className="Otp-image-side d-lg-flex">
        <img
          src={Otps}
          alt="Community Illustration"
          className="side-image w-75"
        />
      </div>

      <div className="Otp-form-side">
        <div className="Otp-card">
          {/* Language Toggle */}
          <div className="language-toggle-wrapper" style={{ position: 'absolute', top: '20px', right: '20px' }}>
            <button
              onClick={toggleLanguage}
              className="btn btn-sm btn-outline-secondary"
              style={{ borderRadius: '20px', padding: '4px 12px' }}
            >
              {i18n.language.startsWith("en") ? "English" : "ไทย"}
            </button>
          </div>

          <div className="Otp-header">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <img src={Logos} className="img-fluid w-25 mb-4" alt="ThaiXO Logo" />
            </motion.div>

            <span className="login-brand-name">
              {t("otp.titles")}
            </span>
            <p className="Otp-instruction">
              {t('otp.instruction', 'Open your Messages app -> Copy your secure OTP')}
            </p>
          </div>

          <form onSubmit={handleVerify}>
            <div className="otp-input-container">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (otpRefs.current[i] = el)}
                  id={`otp-input-${i}`}
                  className="otp-input"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  onPaste={handlePaste}
                  disabled={loading}
                  style={{
                    border: "3px solid #EC5D80",
                    background: "#FFC3BD",
                    color: "#000",
                  }}
                />
              ))}
            </div>

            {error && (
              <div className="error-message mb-4 text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="verify-button"
              disabled={otp.join("").length !== 6 || loading}
              style={{
                background: "#EC5D80",
                color: "#fff",
                opacity: loading || otp.join("").length !== 6 ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading
                ? t('otp.verifying', 'Verifying...')
                : t('otp.verifyButton', 'Verify OTP')
              }
            </button>

            <div className="resend-section mt-4">
              <p className="p-0 m-0 dont-receive">
                {t('otp.didntReceive', "Didn't receive code?")}
              </p>
              <button
                type="button"
                className={`resend-btn ${canResend ? "active" : "disabled"}`}
                onClick={handleResend}
                disabled={!canResend || loading || resendLoading}
              >
                {resendLoading
                  ? t('otp.sending', 'Sending...')
                  : t('otp.resend', 'Resend')
                }
              </button>
              <span className="timer">
                {t('otp.timer', ' - ')}{formatTime(timeLeft)}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}