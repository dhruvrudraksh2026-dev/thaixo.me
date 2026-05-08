// // Login.jsx (or Otp.jsx)
// import React, { useState, useEffect } from "react";
// import "../css/Otp.css";
// import Logo from "../assets/Logo.png";
// import Otps from "../assets/Otp.png";

// const Otp = () => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]); // 6 digits
//   const [timeLeft, setTimeLeft] = useState(56); // 00:56 in seconds
//   const [canResend, setCanResend] = useState(false);

//   // Timer countdown
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   const handleOtpChange = (index, value) => {
//     if (/^[0-9]?$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       // Auto-focus next input
//       if (value && index < 5) {
//         // Changed from 3 to 5 for 6 digits
//         const nextInput = document.getElementById(`otp-input-${index + 1}`);
//         if (nextInput) nextInput.focus();
//       }
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     // Handle backspace
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       const prevInput = document.getElementById(`otp-input-${index - 1}`);
//       if (prevInput) prevInput.focus();
//     }

//     // Handle left arrow
//     if (e.key === "ArrowLeft" && index > 0) {
//       const prevInput = document.getElementById(`otp-input-${index - 1}`);
//       if (prevInput) prevInput.focus();
//     }

//     // Handle right arrow
//     if (e.key === "ArrowRight" && index < 5) {
//       // Changed from 3 to 5
//       const nextInput = document.getElementById(`otp-input-${index + 1}`);
//       if (nextInput) nextInput.focus();
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const pasteData = e.clipboardData.getData("text").slice(0, 6); // Get only first 6 digits
//     if (/^\d{6}$/.test(pasteData)) {
//       const newOtp = pasteData.split("");
//       setOtp(newOtp);
//       // Focus the last input
//       const lastInput = document.getElementById("otp-input-5");
//       if (lastInput) lastInput.focus();
//     }
//   };

//   const handleResend = () => {
//     if (canResend) {
//       // Reset timer and OTP
//       setTimeLeft(56);
//       setCanResend(false);
//       setOtp(["", "", "", "", "", ""]);
//       // Focus first input
//       const firstInput = document.getElementById("otp-input-0");
//       if (firstInput) firstInput.focus();
//       // Add your resend OTP logic here
//       console.log("Resending OTP...");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const otpValue = otp.join("");
//     if (otpValue.length === 6) {
//       // Changed from 4 to 6
//       console.log("OTP Submitted:", otpValue);
//       // Add your OTP verification logic here
//     } else {
//       alert("Please enter a complete 6-digit OTP");
//     }
//   };

//   // Format time as 00:56
//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, "0")}:${secs
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   return (
//     <div className="login-container">
//       {/* Left Side - Image */}
//       <div className="login-image-side d-lg-flex d-none d-md-none">
//         <img src={Otps} alt="Login Visual" className="side-image w-75" />
//       </div>

//       {/* Right Side - Login Form */}
//       <div className="Otp-form-side">
//         <div className="login-card">
//           <div className="login-header">
//             <img src={Logo} className="img-fluid w-25 mb-4" alt="Logo" />

//             <div className="login-image-side d-lg-none d-block d-md-block">
//               <img src={Otps} alt="Login Visual" className="side-image w-50" />
//             </div>
//             <p className=" fs-3 text-white">
//               Get OTP from ThaiXO App
//             </p>
//             <p className="login-instruction text-white">
//               Open ThaiXO App → Profile → Your secure OTP.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit}>
//             {/* OTP Input Fields - 6 digits */}
//             <div className="otp-input-group">
//               <div className="otp-input-container">
//                 {otp.map((digit, index) => (
//                   <input
//                     key={index}
//                     id={`otp-input-${index}`}
//                     type="text"
//                     inputMode="numeric"
//                     pattern="[0-9]*"
//                     maxLength="1"
//                     value={digit}
//                     onChange={(e) => handleOtpChange(index, e.target.value)}
//                     onKeyDown={(e) => handleKeyDown(index, e)}
//                     onPaste={handlePaste}
//                     className="otp-input"
//                     autoFocus={index === 0}
//                     autoComplete="one-time-code"
//                   />
//                 ))}
//               </div>
//             </div>

//             <button type="submit" className="verify-button ">
//               Log In
//             </button>

//             {/* Resend Timer Section */}
//             <div className="resend-section mt-5 gap-0">
//               <p className="resend-text text-white">Didn't receiving code?</p>
//               <div className="resend-timer">
//                 <button
//                   type="button"
//                   className={`resend-btn text-white ${
//                     canResend ? "active" : "disabled"
//                   }`}
//                   onClick={handleResend}
//                   disabled={!canResend}
//                 >
//                   Resend
//                 </button>
//                 <span className="timer text-white">
//                   - {formatTime(timeLeft)}
//                 </span>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Otp;

// Otp.jsx
// import React, { useState, useEffect } from "react";
// import "../css/Otp.css";
// import Logo from "../assets/Logo.png";
// import Otps from "../assets/Otp.png";

// const Otp = () => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]); // 6 digits
//   const [timeLeft, setTimeLeft] = useState(56); // 00:56 in seconds
//   const [canResend, setCanResend] = useState(false);
//    const [theme, setTheme] = useState("system");

//   // 1️⃣ Dark/Light Theme Support
//   // useEffect(() => {
//   //   const theme = localStorage.getItem("theme") || "light";
//   //   document.documentElement.setAttribute("data-theme", theme);
//   // }, []);

//     /* ===============================
//      APPLY THEME (Light/Dark/System)
//   =============================== */
//   const applyTheme = (selectedTheme) => {
//     let finalTheme = selectedTheme;

//     if (selectedTheme === "system") {
//       finalTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light";
//     }

//     document.documentElement.setAttribute("data-theme", finalTheme);
//   };

//   /* Load saved theme */
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "system";
//     setTheme(savedTheme);
//     applyTheme(savedTheme);
//   }, []);

//   /* Listen to system theme change */
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

//     const handleChange = () => {
//       if (theme === "system") {
//         applyTheme("system");
//       }
//     };

//     mediaQuery.addEventListener("change", handleChange);
//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, [theme]);

//   /* Change theme manually */
//   const changeTheme = (mode) => {
//     setTheme(mode);
//     localStorage.setItem("theme", mode);
//     applyTheme(mode);
//   };

//   // 2️⃣ Prevent page scroll
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   // 3️⃣ Auto-focus first input
//   useEffect(() => {
//     const firstInput = document.getElementById("otp-input-0");
//     if (firstInput) firstInput.focus();
//   }, []);

//   // 6️⃣ Clear OTP on unmount
//   useEffect(() => {
//     return () => setOtp(["", "", "", "", "", ""]);
//   }, []);

//   // Timer countdown
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   // OTP change handler
//   const handleOtpChange = (index, value) => {
//     if (/^[0-9]?$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       // Auto-focus next input
//       if (value && index < 5) {
//         const nextInput = document.getElementById(`otp-input-${index + 1}`);
//         if (nextInput) nextInput.focus();
//       }
//     }
//   };

//   // Key navigation
//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       const prevInput = document.getElementById(`otp-input-${index - 1}`);
//       if (prevInput) prevInput.focus();
//     }
//     if (e.key === "ArrowLeft" && index > 0) {
//       const prevInput = document.getElementById(`otp-input-${index - 1}`);
//       if (prevInput) prevInput.focus();
//     }
//     if (e.key === "ArrowRight" && index < 5) {
//       const nextInput = document.getElementById(`otp-input-${index + 1}`);
//       if (nextInput) nextInput.focus();
//     }
//   };

//   // 4️⃣ Handle paste (numeric only)
//   const handlePaste = (e) => {
//     e.preventDefault();
//     const paste = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
//     if (paste.length === 6) {
//       setOtp(paste.split(""));
//       document.getElementById("otp-input-5")?.focus();
//     }
//   };

//   const handleResend = () => {
//     if (canResend) {
//       setTimeLeft(56);
//       setCanResend(false);
//       setOtp(["", "", "", "", "", ""]);
//       document.getElementById("otp-input-0")?.focus();
//       console.log("Resending OTP...");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const otpValue = otp.join("");
//     if (otpValue.length === 6) {
//       console.log("OTP Submitted:", otpValue);
//       // Add OTP verification logic here
//     } else {
//       alert("Please enter a complete 6-digit OTP");
//     }
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
//   };

//   // 5️⃣ Disable submit until OTP complete
//   const isOtpComplete = otp.every(digit => digit !== "");

//   return (
//     <div className="Otp-container">
//       {/* Left Side - Image */}
//       <div className="Otp-image-side d-lg-flex d-none d-md-none">
//         <img src={Otps} alt="Otp Visual" className="side-image w-75" />
//       </div>

//       {/* Right Side - Otp Form */}
//       <div className="Otp-form-side">
//         <div className="Otp-card">
//           <div className="Otp-header">
//             <img src={Logo} className="img-fluid w-25 mb-4" alt="Logo" />
//             <div className="Otp-image-side d-lg-none d-block d-md-block">
//               <img src={Otps} alt="Otp Visual" className="side-image w-50" />
//             </div>
//             <p className="fs-3 text-white">Get OTP from ThaiXO App</p>
//             <p className="Otp-instruction text-white">
//               Open ThaiXO App → Profile → Your secure OTP.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit}>
//             {/* OTP Input Fields - 6 digits */}
//             <div className="otp-input-group">
//               <div className="otp-input-container">
//                 {otp.map((digit, index) => (
//                   <input
//                     key={index}
//                     id={`otp-input-${index}`}
//                     type="text"
//                     inputMode="numeric"
//                     pattern="[0-9]*"
//                     maxLength="1"
//                     value={digit}
//                     onChange={(e) => handleOtpChange(index, e.target.value)}
//                     onKeyDown={(e) => handleKeyDown(index, e)}
//                     onPaste={handlePaste}
//                     className="otp-input"
//                     autoComplete="one-time-code"
//                   />
//                 ))}
//               </div>
//             </div>

//             <button type="submit" className="verify-button" disabled={!isOtpComplete}>
//               Log In
//             </button>

//             {/* Resend Timer Section */}
//             <div className="resend-section mt-5 gap-0">
//               <p className="resend-text text-white">Didn't receive code?</p>
//               <div className="resend-timer">
//                 <button
//                   type="button"
//                   className={`resend-btn text-white ${canResend ? "active" : "disabled"}`}
//                   onClick={handleResend}
//                   disabled={!canResend}
//                 >
//                   Resend
//                 </button>
//                 <span className="timer text-white">- {formatTime(timeLeft)}</span>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Otp;

// import React, { useState, useEffect } from "react";
// import "../css/Otp.css";
// import Logo from "../assets/Logo.png";
// import Otps from "../assets/Otp.png";

// const Otp = () => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [timeLeft, setTimeLeft] = useState(56);
//   const [canResend, setCanResend] = useState(false);

//   /* ===============================
//      APPLY THEME (READ FROM STORAGE)
//   =============================== */
//   const applyTheme = () => {
//     const savedTheme = localStorage.getItem("theme") || "system";

//     let finalTheme = savedTheme;
//     if (savedTheme === "system") {
//       finalTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light";
//     }

//     document.documentElement.setAttribute("data-theme", finalTheme);
//   };

//   /* Initial theme apply */
//   useEffect(() => {
//     applyTheme();
//   }, []);

//   /* Listen to OS theme changes */
//   useEffect(() => {
//     const media = window.matchMedia("(prefers-color-scheme: dark)");

//     const handleChange = () => {
//       const savedTheme = localStorage.getItem("theme");
//       if (savedTheme === "system") {
//         applyTheme();
//       }
//     };

//     media.addEventListener("change", handleChange);
//     return () => media.removeEventListener("change", handleChange);
//   }, []);

//   /* ===============================
//      PAGE BEHAVIOR
//   =============================== */
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => (document.body.style.overflow = "auto");
//   }, []);

//   useEffect(() => {
//     document.getElementById("otp-input-0")?.focus();
//   }, []);

//   /* ===============================
//      TIMER
//   =============================== */
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   /* ===============================
//      OTP LOGIC
//   =============================== */
//   const handleOtpChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       document.getElementById(`otp-input-${index + 1}`)?.focus();
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       document.getElementById(`otp-input-${index - 1}`)?.focus();
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const paste = e.clipboardData
//       .getData("text")
//       .replace(/\D/g, "")
//       .slice(0, 6);

//     if (paste.length === 6) {
//       setOtp(paste.split(""));
//       document.getElementById("otp-input-5")?.focus();
//     }
//   };

//   const handleResend = () => {
//     if (!canResend) return;

//     setOtp(["", "", "", "", "", ""]);
//     setTimeLeft(56);
//     setCanResend(false);
//     document.getElementById("otp-input-0")?.focus();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (otp.join("").length !== 6) {
//       alert("Enter full OTP");
//       return;
//     }
//     console.log("OTP Submitted:", otp.join(""));
//   };

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
//       2,
//       "0"
//     )}`;

//   const isOtpComplete = otp.every(Boolean);

//   return (
//     <div className="Otp-container">
//       <div className="Otp-image-side d-lg-flex d-none">
//         <img src={Otps} alt="OTP" className="side-image w-75" />
//       </div>

//       <div className="Otp-form-side">
//         <div className="Otp-card">
//           <div className="Otp-header">
//             <img src={Logo} className="img-fluid w-25 mb-4" alt="Logo" />
//             <p className="fs-3 text-white">Get OTP from ThaiXO App</p>
//             <p className="Otp-instruction text-white">
//               Open ThaiXO App → Profile → Your secure OTP.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="otp-input-container">
//               {otp.map((digit, i) => (
//                 <input
//                   key={i}
//                   id={`otp-input-${i}`}
//                   className="otp-input"
//                   maxLength="1"
//                   value={digit}
//                   onChange={(e) => handleOtpChange(i, e.target.value)}
//                   onKeyDown={(e) => handleKeyDown(i, e)}
//                   onPaste={handlePaste}
//                 />
//               ))}
//             </div>

//             <button className="verify-button" disabled={!isOtpComplete}>
//               Log In
//             </button>

//             <div className="resend-section mt-4">
//               <button
//                 type="button"
//                 className={`resend-btn ${canResend ? "active" : "disabled"}`}
//                 onClick={handleResend}
//                 disabled={!canResend}
//               >
//                 Resend
//               </button>
//               <span className="timer">- {formatTime(timeLeft)}</span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Otp;

// import React, { useState, useEffect } from "react";
// import "../css/Otp.css";
// import Logo from "../assets/Logo.png";
// import Otps from "../assets/Otp.png";
// import { useNavigate } from "react-router-dom";

// const Otp = () => {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [timeLeft, setTimeLeft] = useState(56);
//   const [canResend, setCanResend] = useState(false);
//   const navigate = useNavigate();

//   /* ===============================
//      APPLY THEME (READ FROM STORAGE)
//   =============================== */
//   const applyTheme = () => {
//     const savedTheme = localStorage.getItem("theme") || "system";

//     if (savedTheme === "system") {
//       // IMPORTANT: remove attribute so :root applies
//       document.documentElement.removeAttribute("data-theme");
//       return;
//     }

//     // light or dark
//     document.documentElement.setAttribute("data-theme", savedTheme);
//   };

//   /* Initial theme apply */
//   useEffect(() => {
//     applyTheme();
//   }, []);

//   /* Listen to OS theme changes (SYSTEM ONLY) */
//   useEffect(() => {
//     const media = window.matchMedia("(prefers-color-scheme: dark)");

//     const handleChange = () => {
//       const savedTheme = localStorage.getItem("theme");
//       if (savedTheme === "system") {
//         document.documentElement.removeAttribute("data-theme");
//       }
//     };

//     media.addEventListener("change", handleChange);
//     return () => media.removeEventListener("change", handleChange);
//   }, []);

//   /* ===============================
//      PAGE BEHAVIOR
//   =============================== */
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => (document.body.style.overflow = "auto");
//   }, []);

//   useEffect(() => {
//     document.getElementById("otp-input-0")?.focus();
//   }, []);

//   /* ===============================
//      TIMER
//   =============================== */
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   /* ===============================
//      OTP LOGIC
//   =============================== */
//   const handleOtpChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       document.getElementById(`otp-input-${index + 1}`)?.focus();
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       document.getElementById(`otp-input-${index - 1}`)?.focus();
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const paste = e.clipboardData
//       .getData("text")
//       .replace(/\D/g, "")
//       .slice(0, 6);

//     if (paste.length === 6) {
//       setOtp(paste.split(""));
//       document.getElementById("otp-input-5")?.focus();
//     }
//   };

//   const handleResend = () => {
//     if (!canResend) return;

//     setOtp(["", "", "", "", "", ""]);
//     setTimeLeft(56);
//     setCanResend(false);
//     document.getElementById("otp-input-0")?.focus();
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (otp.join("").length !== 6) {
//   //     alert("Enter full OTP");
//   //     return;
//   //   }
//   //   console.log("OTP Submitted:", otp.join(""));
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (otp.join("").length !== 6) {
//       alert("Enter full OTP");
//       return;
//     }

//     const enteredOtp = otp.join("");
//     console.log("OTP Submitted:", enteredOtp);

//     // ✅ SUCCESS → Navigate to Dashboard
//     navigate("/dashboard");
//   };

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
//       2,
//       "0",
//     )}`;

//   const isOtpComplete = otp.every(Boolean);

//   return (
//     <div className="Otp-container">
//       <div className="Otp-image-side d-none">
//         <img src={Otps} alt="OTP" className="side-image w-75" />
//       </div>

//       <div className="Otp-form-side">
//         <div className="Otp-card">
//           <div className="Otp-header">
//             <img src={Logo} className="img-fluid w-25 mb-4 d-none" alt="Logo" />
//             <p className="fs-3 get-otp">Get OTP from ThaiXO App</p>
//             <p className="Otp-instruction">
//               Open ThaiXO App → Profile → Your secure OTP.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="otp-input-container">
//               {otp.map((digit, i) => (
//                 // <input
//                 //   key={i}
//                 //   id={`otp-input-${i}`}
//                 //   className="otp-input"
//                 //   maxLength="1"
//                 //   value={digit}
//                 //   onChange={(e) => handleOtpChange(i, e.target.value)}
//                 //   onKeyDown={(e) => handleKeyDown(i, e)}
//                 //   onPaste={handlePaste}
//                 // />

//                 <input
//                   key={i}
//                   id={`otp-input-${i}`}
//                   className="otp-input"
//                   type="tel" // 📱 mobile numeric keypad
//                   inputMode="numeric" // 🔢 force number keyboard
//                   pattern="[0-9]*" // allow only digits
//                   maxLength="1"
//                   value={digit}
//                   onChange={(e) => handleOtpChange(i, e.target.value)}
//                   onKeyDown={(e) => {
//                     // ❌ block non-numeric keys except backspace
//                     if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
//                       e.preventDefault();
//                     }
//                     handleKeyDown(i, e);
//                   }}
//                   onPaste={handlePaste}
//                 />
//               ))}
//             </div>

//             <button
//               type="submit"
//               className="verify-button"
//               disabled={!isOtpComplete}
//             >
//               Log In
//             </button>

//             <div className="resend-section mt-4">
//               <div>
//                 <p className="p-0 m-0 dont-receive">Didn’t receiving code?</p>
//               </div>
//               <button
//                 type="button"
//                 className={`resend-btn ${canResend ? "active" : "disabled"}`}
//                 onClick={handleResend}
//                 disabled={!canResend}
//               >
//                 Resend
//               </button>
//               <span className="timer">- {formatTime(timeLeft)}</span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Otp;













// import React, { useState, useEffect, useContext } from "react";
// import "../css/Otp.css";
// import Logo from "../assets/Logo.png";
// import Otps from "../assets/Otp.png";
// import Logos from "../assets/Logos.png";
// import { useNavigate } from "react-router-dom";

// import { LanguageProvider, LanguageContext } from "./LanguageContext";

// /* ===============================
//    OTP CONTENT
// ================================ */
// const OtpContent = () => {
//   const navigate = useNavigate();
//   const { language } = useContext(LanguageContext);

//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [timeLeft, setTimeLeft] = useState(56);
//   const [canResend, setCanResend] = useState(false);

//   /* ===============================
//      TRANSLATIONS
//   =============================== */
//   const translations = {
//     en: {
//       title: "Get OTP from ThaiXO App",
//       instruction: "Open ThaiXO App → Profile → Your secure OTP.",
//       login: "Log In",
//       errorOtp: "Enter full OTP",
//       dontReceive: "Didn’t receive code?",
//       resend: "Resend",
//     },
//     th: {
//       title: "รับรหัส OTP จากแอป ThaiXO",
//       instruction: "เปิดแอป ThaiXO → โปรไฟล์ → รหัส OTP ของคุณ",
//       login: "เข้าสู่ระบบ",
//       errorOtp: "กรุณากรอกรหัส OTP ให้ครบ",
//       dontReceive: "ไม่ได้รับรหัสใช่ไหม?",
//       resend: "ส่งอีกครั้ง",
//     },
//   };

//   /* ===============================
//      APPLY THEME
//   =============================== */
//   const applyTheme = () => {
//     const savedTheme = localStorage.getItem("theme") || "system";

//     if (savedTheme === "system") {
//       document.documentElement.removeAttribute("data-theme");
//       return;
//     }

//     document.documentElement.setAttribute("data-theme", savedTheme);
//   };

//   useEffect(() => {
//     applyTheme();
//   }, []);

//   useEffect(() => {
//     const media = window.matchMedia("(prefers-color-scheme: dark)");

//     const handleChange = () => {
//       const savedTheme = localStorage.getItem("theme");
//       if (savedTheme === "system") {
//         document.documentElement.removeAttribute("data-theme");
//       }
//     };

//     media.addEventListener("change", handleChange);
//     return () => media.removeEventListener("change", handleChange);
//   }, []);

//   /* ===============================
//      PAGE BEHAVIOR
//   =============================== */
//   // useEffect(() => {
//   //   document.body.style.overflow = "hidden";
//   //   return () => (document.body.style.overflow = "auto");
//   // }, []);

//   useEffect(() => {
//     document.getElementById("otp-input-0")?.focus();
//   }, []);

//   /* ===============================
//      TIMER
//   =============================== */
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   /* ===============================
//      OTP LOGIC
//   =============================== */
//   const handleOtpChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       document.getElementById(`otp-input-${index + 1}`)?.focus();
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       document.getElementById(`otp-input-${index - 1}`)?.focus();
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const paste = e.clipboardData
//       .getData("text")
//       .replace(/\D/g, "")
//       .slice(0, 6);

//     if (paste.length === 6) {
//       setOtp(paste.split(""));
//       document.getElementById("otp-input-5")?.focus();
//     }
//   };

//   const handleResend = () => {
//     if (!canResend) return;

//     setOtp(["", "", "", "", "", ""]);
//     setTimeLeft(56);
//     setCanResend(false);
//     document.getElementById("otp-input-0")?.focus();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (otp.join("").length !== 6) {
//       alert(translations[language].errorOtp);
//       return;
//     }

//     const enteredOtp = otp.join("");
//     console.log("OTP Submitted:", enteredOtp);

//     navigate("/dashboard");
//   };

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
//       2,
//       "0",
//     )}`;

//   const isOtpComplete = otp.every(Boolean);

//   return (
//     <div className="Otp-container bg-white">
//       <div className="Otp-image-side d-none d-lg-flex">
//         <img src={Otps} alt="OTP" className="side-image w-75" />
//       </div>

//       <div className="Otp-form-side">
//         <div className="Otp-card">
//           <div className="Otp-header">
//             <div>
//             <img src={Logos} className="img-fluid w-25 mb-4" alt="Logo" />

//             </div>
//             <span className="login-brand-name">ThaiXO Social</span>
//             <p className="fs-3 get-otp fw-bolder">
//               {translations[language].title}
//             </p>

//             <p className="Otp-instruction">
//               {translations[language].instruction}
//             </p>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="otp-input-container">
//               {otp.map((digit, i) => (
//                 <input
//                   style={{
//                     border: "3px solid #EC5D80",
//                     background: "#FFC3BD",
//                     color: "#000",
//                   }}
//                   key={i}
//                   id={`otp-input-${i}`}
//                   className="otp-input"
//                   type="tel"
//                   inputMode="numeric"
//                   pattern="[0-9]*"
//                   maxLength="1"
//                   value={digit}
//                   onChange={(e) => handleOtpChange(i, e.target.value)}
//                   onKeyDown={(e) => {
//                     if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
//                       e.preventDefault();
//                     }
//                     handleKeyDown(i, e);
//                   }}
//                   onPaste={handlePaste}
//                 />
//               ))}
//             </div>

//             <button
//               type="submit"
//               style={{ background: "#EC5D80", color: "#fff" }}
//               className="verify-button"
//               disabled={!isOtpComplete}
//             >
//               {translations[language].login}
//             </button>

//             <div className="resend-section mt-4">
//               <p className="p-0 m-0 dont-receive">
//                 {translations[language].dontReceive}
//               </p>

//               <button
//                 type="button"
//                 className={`resend-btn ${canResend ? "active" : "disabled"}`}
//                 onClick={handleResend}
//                 disabled={!canResend}
//               >
//                 {translations[language].resend}
//               </button>

//               <span className="timer">- {formatTime(timeLeft)}</span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ✅ PROVIDER ONLY FOR OTP PAGE */
// const Otp = () => {
//   return (
//     <LanguageProvider>
//       <OtpContent />
//     </LanguageProvider>
//   );
// };

// export default Otp;

















// import React, { useState, useEffect, useContext } from "react";
// import "../css/Otp.css";
// import Logo from "../assets/Logo.png";
// import Otps from "../assets/Otp.png";
// import Logos from "../assets/Logos.png";
// import { useNavigate, useLocation } from "react-router-dom";
// import { LanguageProvider, LanguageContext } from "./LanguageContext";

// /* ===============================
//    OTP CONTENT
// ================================ */
// const OtpContent = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { language } = useContext(LanguageContext);

//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [timeLeft, setTimeLeft] = useState(56);
//   const [canResend, setCanResend] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Get userId from navigation state (passed from Login page)
//   const userId = location.state?.userId;
//   const phone = location.state?.phone;

//   /* ===============================
//      TRANSLATIONS
//   =============================== */
//   const translations = {
//     en: {
//       title: "Get OTP from ThaiXO App",
//       instruction: "Open ThaiXO App → Profile → Your secure OTP.",
//       login: "Log In",
//       errorOtp: "Enter full OTP",
//       dontReceive: "Didn't receive code?",
//       resend: "Resend",
//       verifying: "Verifying...",
//       invalidSession: "Invalid session. Please login again.",
//       serverError: "Server error. Please try again.",
//     },
//     th: {
//       title: "รับรหัส OTP จากแอป ThaiXO",
//       instruction: "เปิดแอป ThaiXO → โปรไฟล์ → รหัส OTP ของคุณ",
//       login: "เข้าสู่ระบบ",
//       errorOtp: "กรุณากรอกรหัส OTP ให้ครบ",
//       dontReceive: "ไม่ได้รับรหัสใช่ไหม?",
//       resend: "ส่งอีกครั้ง",
//       verifying: "กำลังตรวจสอบ...",
//       invalidSession: "เซสชันไม่ถูกต้อง กรุณาเข้าสู่ระบบอีกครั้ง",
//       serverError: "เกิดข้อผิดพลาดที่เซิร์ฟเวอร์ กรุณาลองอีกครั้ง",
//     },
//   };

//   /* ===============================
//      APPLY THEME
//   =============================== */
//   const applyTheme = () => {
//     const savedTheme = localStorage.getItem("theme") || "system";
//     if (savedTheme === "system") {
//       document.documentElement.removeAttribute("data-theme");
//       return;
//     }
//     document.documentElement.setAttribute("data-theme", savedTheme);
//   };

//   useEffect(() => {
//     applyTheme();
//   }, []);

//   useEffect(() => {
//     const media = window.matchMedia("(prefers-color-scheme: dark)");
//     const handleChange = () => {
//       const savedTheme = localStorage.getItem("theme");
//       if (savedTheme === "system") {
//         document.documentElement.removeAttribute("data-theme");
//       }
//     };
//     media.addEventListener("change", handleChange);
//     return () => media.removeEventListener("change", handleChange);
//   }, []);

//   /* ===============================
//      CHECK FOR USERID ON MOUNT
//   =============================== */
//   useEffect(() => {
//     // Redirect to login if no userId found (direct access to OTP page)
//     if (!userId) {
//       navigate("/login");
//     }
//     document.getElementById("otp-input-0")?.focus();
//   }, [userId, navigate]);

//   /* ===============================
//      TIMER
//   =============================== */
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   /* ===============================
//      OTP LOGIC
//   =============================== */
//   const handleOtpChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     setError(""); // Clear error on input

//     if (value && index < 5) {
//       document.getElementById(`otp-input-${index + 1}`)?.focus();
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       document.getElementById(`otp-input-${index - 1}`)?.focus();
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const paste = e.clipboardData
//       .getData("text")
//       .replace(/\D/g, "")
//       .slice(0, 6);

//     if (paste.length === 6) {
//       setOtp(paste.split(""));
//       setError("");
//       document.getElementById("otp-input-5")?.focus();
//     }
//   };

//   const handleResend = () => {
//     if (!canResend) return;

//     setOtp(["", "", "", "", "", ""]);
//     setTimeLeft(56);
//     setCanResend(false);
//     setError("");
//     document.getElementById("otp-input-0")?.focus();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const otpString = otp.join("");
//     if (otpString.length !== 6) {
//       setError(translations[language].errorOtp);
//       return;
//     }

//     if (!userId) {
//       setError(translations[language].invalidSession);
//       return;
//     }

//     setLoading(true);

//     try {
//       // API Call to verify OTP
//       const response = await fetch("https://sagarxo.app/web-api/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           userId: parseInt(userId, 10), // Send as integer
//           otp: otpString,
//         }),
//         credentials: "include", // Important: allows cookies to be set by backend
//       });

//       const data = await response.json();
//       console.log("API Response:", data); // Debug log

//       if (data.success) {
//         // Success - token is automatically stored in cookies by backend
//         console.log("Login successful. Token received:", data.data.token);

//         // Store token in localStorage as backup (optional)
//         localStorage.setItem("token", data.data.token);

//         // Navigate to dashboard
//         navigate("/dashboard");
//       } else {
//         // Failed - show error message from backend
//         setError(data.message || "Verification failed");
//         // Clear OTP fields on error
//         setOtp(["", "", "", "", "", ""]);
//         document.getElementById("otp-input-0")?.focus();
//       }
//     } catch (err) {
//       console.error("API Error:", err);
//       setError(translations[language].serverError);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
//       2,
//       "0"
//     )}`;

//   const isOtpComplete = otp.every(Boolean);

//   return (
//     <div className="Otp-container bg-white">
//       <div className="Otp-image-side d-none d-lg-flex">
//         <img src={Otps} alt="OTP" className="side-image w-75" />
//       </div>

//       <div className="Otp-form-side">
//         <div className="Otp-card">
//           <div className="Otp-header">
//             <div>
//               <img src={Logos} className="img-fluid w-25 mb-4" alt="Logo" />
//             </div>
//             <span className="login-brand-name">ThaiXO Social</span>
//             <p className="fs-3 get-otp fw-bolder">
//               {translations[language].title}
//             </p>
//             <p className="Otp-instruction">
//               {translations[language].instruction}
//             </p>
//           </div>

//           {/* Error Message Display */}
//           {error && (
//             <div
//               className="error-message"
//               style={{
//                 backgroundColor: "#fee2e2",
//                 color: "#dc2626",
//                 padding: "12px",
//                 borderRadius: "8px",
//                 marginBottom: "16px",
//                 fontSize: "14px",
//                 textAlign: "center",
//               }}
//             >
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
//             <div className="otp-input-container">
//               {otp.map((digit, i) => (
//                 <input
//                   style={{
//                     border: "3px solid #EC5D80",
//                     background: "#FFC3BD",
//                     color: "#000",
//                   }}
//                   key={i}
//                   id={`otp-input-${i}`}
//                   className="otp-input"
//                   type="tel"
//                   inputMode="numeric"
//                   pattern="[0-9]*"
//                   maxLength="1"
//                   value={digit}
//                   onChange={(e) => handleOtpChange(i, e.target.value)}
//                   onKeyDown={(e) => {
//                     if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
//                       e.preventDefault();
//                     }
//                     handleKeyDown(i, e);
//                   }}
//                   onPaste={handlePaste}
//                   disabled={loading}
//                 />
//               ))}
//             </div>

//             <button
//               type="submit"
//               style={{
//                 background: "#EC5D80",
//                 color: "#fff",
//                 opacity: loading || !isOtpComplete ? 0.7 : 1,
//                 cursor: loading ? "not-allowed" : "pointer",
//               }}
//               className="verify-button"
//               disabled={!isOtpComplete || loading}
//             >
//               {loading
//                 ? translations[language].verifying
//                 : translations[language].login}
//             </button>

//             <div className="resend-section mt-4">
//               <p className="p-0 m-0 dont-receive">
//                 {translations[language].dontReceive}
//               </p>
//               <button
//                 type="button"
//                 className={`resend-btn ${canResend ? "active" : "disabled"}`}
//                 onClick={handleResend}
//                 disabled={!canResend || loading}
//               >
//                 {translations[language].resend}
//               </button>
//               <span className="timer">- {formatTime(timeLeft)}</span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ✅ PROVIDER ONLY FOR OTP PAGE */
// const Otp = () => {
//   return (
//     <LanguageProvider>
//       <OtpContent />
//     </LanguageProvider>
//   );
// };

// export default Otp;

















// import React, { useState, useEffect, useContext, useRef } from "react";
// import "../css/Otp.css";
// import Logo from "../assets/Logo.png";
// import Otps from "../assets/Otp.png";
// import Logos from "../assets/Logos.png";
// import { useNavigate, useLocation } from "react-router-dom";
// import { LanguageProvider, LanguageContext } from "./LanguageContext";

// /* ===============================
//    OTP CONTENT
// ================================ */
// const OtpContent = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { language } = useContext(LanguageContext);

//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [timeLeft, setTimeLeft] = useState(56);
//   const [canResend, setCanResend] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const otpRefs = useRef([]);

//   // Get data passed from Login page
//   const userId = location.state?.userId;
//   const phone = location.state?.phone;

//   /* ===============================
//      TRANSLATIONS
//   =============================== */
//   const translations = {
//     en: {
//       title: "Get OTP from ThaiXO App",
//       instruction: "Open ThaiXO App → Profile → Your secure OTP.",
//       login: "Log In",
//       errorOtp: "Enter full OTP",
//       dontReceive: "Didn't receive code?",
//       resend: "Resend",
//       verifying: "Verifying...",
//       invalidSession: "Invalid session. Please login again.",
//       serverError: "Server error. Please try again.",
//       success: "Login successful!",
//     },
//     th: {
//       title: "รับรหัส OTP จากแอป ThaiXO",
//       instruction: "เปิดแอป ThaiXO → โปรไฟล์ → รหัส OTP ของคุณ",
//       login: "เข้าสู่ระบบ",
//       errorOtp: "กรุณากรอกรหัส OTP ให้ครบ",
//       dontReceive: "ไม่ได้รับรหัสใช่ไหม?",
//       resend: "ส่งอีกครั้ง",
//       verifying: "กำลังตรวจสอบ...",
//       invalidSession: "เซสชันไม่ถูกต้อง กรุณาเข้าสู่ระบบอีกครั้ง",
//       serverError: "เกิดข้อผิดพลาดที่เซิร์ฟเวอร์ กรุณาลองอีกครั้ง",
//       success: "เข้าสู่ระบบสำเร็จ!",
//     },
//   };

//   /* ===============================
//      AUTO-FOCUS FIRST INPUT
//   =============================== */
//   useEffect(() => {
//     if (!userId) {
//       navigate("/login");
//       return;
//     }
//     otpRefs.current[0]?.focus();
//   }, [userId, navigate]);

//   /* ===============================
//      RESEND TIMER
//   =============================== */
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   /* ===============================
//      OTP INPUT HANDLERS
//   =============================== */
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

//   const handleResend = () => {
//     if (!canResend) return;

//     setOtp(["", "", "", "", "", ""]);
//     setTimeLeft(56);
//     setCanResend(false);
//     setError("");
//     otpRefs.current[0]?.focus();

//     // Optional: call resend OTP API here if you have one
//   };

//   /* ===============================
//      VERIFY OTP
//   =============================== */
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const otpString = otp.join("");
//     if (otpString.length !== 6) {
//       setError(translations[language].errorOtp);
//       return;
//     }

//     if (!userId) {
//       setError(translations[language].invalidSession);
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("https://sagarxo.app/web-api/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",           // ← Crucial: allows backend to set httpOnly cookie
//         body: JSON.stringify({
//           userId: parseInt(userId, 10),
//           otp: otpString,
//         }),
//       });

//       const data = await response.json();
//       console.log("Verify OTP Response:", data);

//       if (data.success) {
//         // Success → token is set in httpOnly cookie by backend
//         // No need to store token manually anymore

//         alert(translations[language].success || "Login successful!");

//         // Redirect to protected area
//         navigate("/dashboard");           // or "/milestones", "/video-call-history", etc.
//       } else {
//         setError(data.message || "Verification failed");
//         setOtp(["", "", "", "", "", ""]);
//         otpRefs.current[0]?.focus();
//       }
//     } catch (err) {
//       console.error("Verify OTP error:", err);
//       setError(translations[language].serverError);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

//   const isOtpComplete = otp.every(Boolean);

//   return (
//     <div className="Otp-container bg-white">
//       <div className="Otp-image-side d-none d-lg-flex">
//         <img src={Otps} alt="OTP Illustration" className="side-image w-75" />
//       </div>

//       <div className="Otp-form-side">
//         <div className="Otp-card">
//           <div className="Otp-header">
//             <div>
//               <img src={Logos} className="img-fluid w-25 mb-4" alt="ThaiXO Logo" />
//             </div>
//             <span className="login-brand-name">ThaiXO Social</span>
//             <p className="fs-3 get-otp fw-bolder">
//               {translations[language].title}
//             </p>
//             <p className="Otp-instruction">
//               {translations[language].instruction}
//             </p>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="error-message">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
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

//             <button
//               type="submit"
//               className="verify-button"
//               disabled={!isOtpComplete || loading}
//               style={{
//                 background: "#EC5D80",
//                 color: "#fff",
//                 opacity: loading || !isOtpComplete ? 0.7 : 1,
//                 cursor: loading ? "not-allowed" : "pointer",
//               }}
//             >
//               {loading
//                 ? translations[language].verifying
//                 : translations[language].login}
//             </button>

//             <div className="resend-section mt-4">
//               <p className="p-0 m-0 dont-receive">
//                 {translations[language].dontReceive}
//               </p>
//               <button
//                 type="button"
//                 className={`resend-btn ${canResend ? "active" : "disabled"}`}
//                 onClick={handleResend}
//                 disabled={!canResend || loading}
//               >
//                 {translations[language].resend}
//               </button>
//               <span className="timer"> - {formatTime(timeLeft)}</span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ======================================
//    WRAP WITH LANGUAGE PROVIDER
// ====================================== */
// const Otp = () => {
//   return (
//     <LanguageProvider>
//       <OtpContent />
//     </LanguageProvider>
//   );
// };

// export default Otp;






















// import { useState, useEffect, useRef } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { motion } from "framer-motion";
// import "../css/Otp.css";
// import Otps from "../assets/Otp.png";
// import Logos from "../assets/Logos.png";

// export default function VerifyOtp() {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [timeLeft, setTimeLeft] = useState(56);
//   const [canResend, setCanResend] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
  
//   const otpRefs = useRef([]);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const userId = location.state?.userId || 297;

//   /* ===============================
//      AUTO-FOCUS FIRST INPUT
//   =============================== */
//   useEffect(() => {
//     if (!userId && userId !== 297) {
//       navigate("/login");
//       return;
//     }
//     otpRefs.current[0]?.focus();
//   }, [userId, navigate]);

//   /* ===============================
//      RESEND TIMER
//   =============================== */
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   /* ===============================
//      OTP INPUT HANDLERS
//   =============================== */
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

//   const handleResend = () => {
//     if (!canResend) return;

//     setOtp(["", "", "", "", "", ""]);
//     setTimeLeft(56);
//     setCanResend(false);
//     setError("");
//     otpRefs.current[0]?.focus();

//     // Optional: call resend OTP API here if you have one
//   };

//   /* ===============================
//      VERIFY OTP
//   =============================== */
//   const handleVerify = async (e) => {
//     e.preventDefault();
//     setError("");

//     const otpString = otp.join("");
//     if (otpString.length !== 6) {
//       setError("Please enter a valid 6-digit OTP");
//       return;
//     }

//     if (!userId && userId !== 297) {
//       setError('User ID not found. Please log in first.');
//       return;
//     }

//     setLoading(true);

//     try {
//       console.log({ userId: String(userId), otp: otpString });
//       const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/verify-otp`,
//         { userId: String(userId), otp: otpString },
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           withCredentials: true
//         }
//       );
//       const data = response.data;
//       if (data.success) {
//         const token = data.token || data.data?.token || (typeof data.data === 'string' ? data.data : null);
//         if (token) {
//           localStorage.setItem('token', token);
//         }
//         navigate('/dashboard');
//       } else {
//         setError(data.message || 'Verification failed');
//         setOtp(["", "", "", "", "", ""]);
//         otpRefs.current[0]?.focus();
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'An error occurred during OTP verification');
//       setOtp(["", "", "", "", "", ""]);
//       otpRefs.current[0]?.focus();
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

//   const isOtpComplete = otp.every(Boolean);

//   return (
//     <div className="Otp-container bg-white">
//       <div className="Otp-image-side d-none d-lg-flex">
//         <motion.img
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           src={Otps}
//           alt="OTP Illustration"
//           className="side-image w-75"
//         />
//       </div>

//       <div className="Otp-form-side">
//         <div className="Otp-card">
//           <div className="Otp-header">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               <img src={Logos} className="img-fluid w-25 mb-4" alt="ThaiXO Logo" />
//             </motion.div>
//             <span className="login-brand-name">ThaiXO Social</span>
//             <p className="fs-3 get-otp fw-bolder">
//               Get OTP from ThaiXO App
//             </p>
//             <p className="Otp-instruction">
//               Open ThaiXO App → Profile → Your secure OTP.
//             </p>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="error-message">
//               {error}
//             </div>
//           )}

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

//             <button
//               type="submit"
//               className="verify-button"
//               disabled={!isOtpComplete || loading}
//               style={{
//                 background: "#EC5D80",
//                 color: "#fff",
//                 opacity: loading || !isOtpComplete ? 0.7 : 1,
//                 cursor: loading ? "not-allowed" : "pointer",
//               }}
//             >
//               {loading ? "Verifying..." : "Verify OTP"}
//             </button>

//             <div className="resend-section mt-4">
//               <p className="p-0 m-0 dont-receive">
//                 Didn't receive code?
//               </p>
//               <button
//                 type="button"
//                 className={`resend-btn ${canResend ? "active" : "disabled"}`}
//                 onClick={handleResend}
//                 disabled={!canResend || loading}
//               >
//                 Resend
//               </button>
//               <span className="timer"> - {formatTime(timeLeft)}</span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }












// import { useState, useEffect, useRef } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { motion } from "framer-motion";
// import "../css/Otp.css";
// import Otps from "../assets/Otp.png";
// import Logos from "../assets/Logos.png";

// export default function VerifyOtp() {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [timeLeft, setTimeLeft] = useState(56);
//   const [canResend, setCanResend] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
  
//   const otpRefs = useRef([]);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Get userId from navigation state (passed from login/mobile verification)
//   const userId = location.state?.userId;

//   /* ===============================
//      REDIRECT IF NO USER ID
//   =============================== */
//   useEffect(() => {
//     if (!userId) {
//       navigate("/", { replace: true }); // Redirect to login/home page
//       return;
//     }
//   }, [userId, navigate]);

//   /* ===============================
//      AUTO-FOCUS FIRST INPUT
//   =============================== */
//   useEffect(() => {
//     if (userId) {
//       otpRefs.current[0]?.focus();
//     }
//   }, [userId]);

//   /* ===============================
//      RESEND TIMER
//   =============================== */
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   /* ===============================
//      OTP INPUT HANDLERS
//   =============================== */
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

//   const handleResend = () => {
//     if (!canResend) return;

//     setOtp(["", "", "", "", "", ""]);
//     setTimeLeft(56);
//     setCanResend(false);
//     setError("");
//     otpRefs.current[0]?.focus();

//     // TODO: Call resend OTP API here if needed
//   };

//   /* ===============================
//      VERIFY OTP
//   =============================== */
//   const handleVerify = async (e) => {
//     e.preventDefault();
//     setError("");

//     const otpString = otp.join("");
//     if (otpString.length !== 6) {
//       setError("Please enter a valid 6-digit OTP");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/verify-otp`,
//         { userId: String(userId), otp: otpString },
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           withCredentials: true
//         }
//       );

//       const data = response.data;

//       if (data.success) {
//         const token = data.token || data.data?.token || (typeof data.data === 'string' ? data.data : null);
        
//         if (token) {
//           localStorage.setItem('token', token);
//         }

//         navigate('/dashboard');
//       } else {
//         setError(data.message || 'Verification failed');
//         setOtp(["", "", "", "", "", ""]);
//         otpRefs.current[0]?.focus();
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'An error occurred during OTP verification');
//       setOtp(["", "", "", "", "", ""]);
//       otpRefs.current[0]?.focus();
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

//   const isOtpComplete = otp.every(Boolean);

//   // Don't render the form if no userId (will redirect)
//   if (!userId) {
//     return null; // or a small loading spinner if you prefer
//   }

//   return (
//     <div className="Otp-container bg-white">
//       <div className="Otp-image-side d-none d-lg-flex">
//         <motion.img
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           src={Otps}
//           alt="OTP Illustration"
//           className="side-image w-75"
//         />
//       </div>

//       <div className="Otp-form-side">
//         <div className="Otp-card">
//           <div className="Otp-header">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               <img src={Logos} className="img-fluid w-25 mb-4" alt="ThaiXO Logo" />
//             </motion.div>
//             {/* <span className="login-brand-name">ThaiXO Social</span> */}
//             <p className="fs-3 get-otp fw-bolder">
//               Get OTP from WhatsApp
//             </p>
//             <p className="Otp-instruction">
//               Open ThaiXO App → Profile → Your secure OTP.
//             </p>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="error-message">
//               {error}
//             </div>
//           )}

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

//             <button
//               type="submit"
//               className="verify-button"
//               disabled={!isOtpComplete || loading}
//               style={{
//                 background: "#EC5D80",
//                 color: "#fff",
//                 opacity: loading || !isOtpComplete ? 0.7 : 1,
//                 cursor: loading ? "not-allowed" : "pointer",
//               }}
//             >
//               {loading ? "Verifying..." : "Verify OTP"}
//             </button>

//             <div className="resend-section mt-4">
//               <p className="p-0 m-0 dont-receive">
//                 Didn't receive code?
//               </p>
//               <button
//                 type="button"
//                 className={`resend-btn ${canResend ? "active" : "disabled"}`}
//                 onClick={handleResend}
//                 disabled={!canResend || loading}
//               >
//                 Resend
//               </button>
//               <span className="timer"> - {formatTime(timeLeft)}</span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
























// import { useState, useEffect, useRef } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { motion } from "framer-motion";
// import "../css/Otp.css";
// import Otps from "../assets/Otp.png";
// import Logos from "../assets/Logos.png";

// export default function VerifyOtp() {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [timeLeft, setTimeLeft] = useState(56);
//   const [canResend, setCanResend] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [resendLoading, setResendLoading] = useState(false);   // New: for resend button
//   const [error, setError] = useState("");
  
//   const otpRefs = useRef([]);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Get userId from navigation state
//   const userId = location.state?.userId;

//   /* ===============================
//      REDIRECT IF NO USER ID
//   =============================== */
//   useEffect(() => {
//     if (!userId) {
//       navigate("/", { replace: true });
//       return;
//     }
//   }, [userId, navigate]);

//   /* ===============================
//      AUTO-FOCUS FIRST INPUT
//   =============================== */
//   useEffect(() => {
//     if (userId) {
//       otpRefs.current[0]?.focus();
//     }
//   }, [userId]);

//   /* ===============================
//      RESEND TIMER
//   =============================== */
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   /* ===============================
//      OTP INPUT HANDLERS (Unchanged)
//   =============================== */
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

//   /* ===============================
//      NEW: RESEND OTP API CALL
//   =============================== */
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
//             'Authorization': localStorage.getItem('token') || '',   // Using token if available
//           },
//           withCredentials: true
//         }
//       );

//       const data = response.data;

//       if (data.success) {
//         // Reset OTP fields and timer
//         setOtp(["", "", "", "", "", ""]);
//         setTimeLeft(56);
//         setCanResend(false);
        
//         // Focus first input
//         otpRefs.current[0]?.focus();
        
//         // Optional success message
//         alert("OTP has been resent successfully!");
//       } else {
//         setError(data.message || "Failed to resend OTP");
//       }
//     } catch (err) {
//       console.error("Resend OTP Error:", err);
//       setError(err.response?.data?.message || "Failed to resend OTP. Please try again.");
//     } finally {
//       setResendLoading(false);
//     }
//   };

//   /* ===============================
//      VERIFY OTP (Unchanged)
//   =============================== */
//   const handleVerify = async (e) => {
//     e.preventDefault();
//     setError("");

//     const otpString = otp.join("");
//     if (otpString.length !== 6) {
//       setError("Please enter a valid 6-digit OTP");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/verify-otp`,
//         { userId: String(userId), otp: otpString },
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           withCredentials: true
//         }
//       );

//       const data = response.data;

//       if (data.success) {
//         const token = data.token || data.data?.token || (typeof data.data === 'string' ? data.data : null);
        
//         if (token) {
//           localStorage.setItem('token', token);
//         }

//         navigate('/dashboard');
//       } else {
//         setError(data.message || 'Verification failed');
//         setOtp(["", "", "", "", "", ""]);
//         otpRefs.current[0]?.focus();
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'An error occurred during OTP verification');
//       setOtp(["", "", "", "", "", ""]);
//       otpRefs.current[0]?.focus();
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

//   const isOtpComplete = otp.every(Boolean);

//   if (!userId) {
//     return null;
//   }

//   return (
//     <div className="Otp-container bg-white">
//       <div className="Otp-image-side d-lg-flex">
//         <motion.img
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           src={Otps}
//           alt="OTP Illustration"
//           className="side-image w-75"
//         />
//       </div>

//       <div className="Otp-form-side">
//         <div className="Otp-card">
//           <div className="Otp-header">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               <img src={Logos} className="img-fluid w-25 mb-4" alt="ThaiXO Logo" />
//             </motion.div>
//             <p className="fs-3 get-otp fw-bolder">
//               Get OTP from WhatsApp
//             </p>
//             <p className="Otp-instruction">
//               Open Your WhatsApp → Copy Your secure OTP.
//             </p>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="error-message">
//               {error}
//             </div>
//           )}

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

//             <button
//               type="submit"
//               className="verify-button"
//               disabled={!isOtpComplete || loading}
//               style={{
//                 background: "#EC5D80",
//                 color: "#fff",
//                 opacity: loading || !isOtpComplete ? 0.7 : 1,
//                 cursor: loading ? "not-allowed" : "pointer",
//               }}
//             >
//               {loading ? "Verifying..." : "Verify OTP"}
//             </button>

//             <div className="resend-section mt-4">
//               <p className="p-0 m-0 dont-receive">
//                 Didn't receive code?
//               </p>
//               <button
//                 type="button"
//                 className={`resend-btn ${canResend ? "active" : "disabled"}`}
//                 onClick={handleResend}
//                 disabled={!canResend || loading || resendLoading}
//               >
//                 {resendLoading ? "Sending..." : "Resend"}
//               </button>
//               <span className="timer"> - {formatTime(timeLeft)}</span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }














// import { useState, useEffect, useRef } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { motion } from "framer-motion";
// import "../css/Otp.css";
// import Otps from "../assets/Otp.png";
// import Logos from "../assets/Logos.png";

// // Translations - Same structure as Login page
// const translations = {
//   en: {
//     title: "Get OTP from WhatsApp",
//     instruction: "Open Your WhatsApp → Copy Your secure OTP.",
//     verifyButton: "Verify OTP",
//     verifying: "Verifying...",
//     didntReceive: "Didn't receive code?",
//     resend: "Resend",
//     sending: "Sending...",
//     timer: " - ",
//     error: {
//       invalidOtp: "Please enter a valid 6-digit OTP",
//       verificationFailed: "Verification failed",
//       genericError: "An error occurred during OTP verification",
//       resendFailed: "Failed to resend OTP"
//     }
//   },
//   th: {
//     title: "รับ OTP จาก WhatsApp",
//     instruction: "เปิด WhatsApp ของคุณ → คัดลอก OTP ที่ปลอดภัย",
//     verifyButton: "ยืนยัน OTP",
//     verifying: "กำลังยืนยัน...",
//     didntReceive: "ไม่ได้รับโค้ด?",
//     resend: "ส่งใหม่",
//     sending: "กำลังส่ง...",
//     timer: " - ",
//     error: {
//       invalidOtp: "กรุณากรอก OTP 6 หลักที่ถูกต้อง",
//       verificationFailed: "การยืนยันล้มเหลว",
//       genericError: "เกิดข้อผิดพลาดระหว่างการยืนยัน OTP",
//       resendFailed: "ไม่สามารถส่ง OTP ใหม่ได้"
//     }
//   }
// };

// export default function VerifyOtp() {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [timeLeft, setTimeLeft] = useState(56);
//   const [canResend, setCanResend] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [resendLoading, setResendLoading] = useState(false);
//   const [error, setError] = useState("");
  
//   const [language, setLanguage] = useState(() => {
//     return localStorage.getItem('appLanguage') || 'en';
//   });

//   const otpRefs = useRef([]);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const t = translations[language];   // Current translation

//   // Get userId from navigation state
//   const userId = location.state?.userId;

//   /* ===============================
//      REDIRECT IF NO USER ID
//   =============================== */
//   useEffect(() => {
//     if (!userId) {
//       navigate("/", { replace: true });
//       return;
//     }
//   }, [userId, navigate]);

//   /* ===============================
//      LANGUAGE SYNC (Same as Login)
//   =============================== */
//   useEffect(() => {
//     const handleStorageChange = () => {
//       const storedLang = localStorage.getItem('appLanguage');
//       if (storedLang && storedLang !== language) {
//         setLanguage(storedLang);
//       }
//     };
//     window.addEventListener('storage', handleStorageChange);
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, [language]);

//   const toggleLanguage = () => {
//     const newLang = language === 'en' ? 'th' : 'en';
//     setLanguage(newLang);
//     localStorage.setItem('appLanguage', newLang);
//     window.dispatchEvent(new Event('storage'));
//   };

//   /* ===============================
//      AUTO-FOCUS FIRST INPUT
//   =============================== */
//   useEffect(() => {
//     if (userId) {
//       otpRefs.current[0]?.focus();
//     }
//   }, [userId]);

//   /* ===============================
//      RESEND TIMER
//   =============================== */
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   /* ===============================
//      OTP INPUT HANDLERS
//   =============================== */
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

//   /* ===============================
//      RESEND OTP
//   =============================== */
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
//         alert(language === 'th' ? "ส่ง OTP ใหม่สำเร็จ!" : "OTP has been resent successfully!");
//       } else {
//         setError(data.message || t.error.resendFailed);
//       }
//     } catch (err) {
//       console.error("Resend OTP Error:", err);
//       setError(err.response?.data?.message || t.error.resendFailed);
//     } finally {
//       setResendLoading(false);
//     }
//   };

//   /* ===============================
//      VERIFY OTP
//   =============================== */
//   const handleVerify = async (e) => {
//     e.preventDefault();
//     setError("");

//     const otpString = otp.join("");
//     if (otpString.length !== 6) {
//       setError(t.error.invalidOtp);
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/verify-otp`,
//         { userId: String(userId), otp: otpString },
//         {
//           headers: { 'Content-Type': 'application/json' },
//           withCredentials: true
//         }
//       );

//       const data = response.data;

//       if (data.success) {
//         const token = data.token || data.data?.token || (typeof data.data === 'string' ? data.data : null);
        
//         if (token) {
//           localStorage.setItem('token', token);
//         }

//         navigate('/dashboard');
//       } else {
//         setError(data.message || t.error.verificationFailed);
//         setOtp(["", "", "", "", "", ""]);
//         otpRefs.current[0]?.focus();
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || t.error.genericError);
//       setOtp(["", "", "", "", "", ""]);
//       otpRefs.current[0]?.focus();
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatTime = (s) =>
//     `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

//   const isOtpComplete = otp.every(Boolean);

//   if (!userId) {
//     return null;
//   }

//   return (
//     <div className="Otp-container bg-white">
//       <div className="Otp-image-side d-lg-flex">
//         <motion.img
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           src={Otps}
//           alt="OTP Illustration"
//           className="side-image w-75"
//         />
//       </div>

//       <div className="Otp-form-side">
//         <div className="Otp-card">
//           {/* Language Toggle - Same as Login */}
//           <div className="language-toggle-wrapper" style={{ position: 'absolute', top: '20px', right: '20px' }}>
//             <button
//               onClick={toggleLanguage}
//               className="btn btn-sm btn-outline-secondary"
//               style={{ borderRadius: '20px', padding: '4px 12px' }}
//             >
//               {language === 'en' ? 'ไทย' : 'English'}
//             </button>
//           </div>

//           <div className="Otp-header">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               <img src={Logos} className="img-fluid w-25 mb-4" alt="ThaiXO Logo" />
//             </motion.div>

//             <p className="fs-3 get-otp fw-bolder">
//               {t.title}
//             </p>
//             <p className="Otp-instruction">
//               {t.instruction}
//             </p>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="error-message">
//               {error}
//             </div>
//           )}

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

//             <button
//               type="submit"
//               className="verify-button"
//               disabled={!isOtpComplete || loading}
//               style={{
//                 background: "#EC5D80",
//                 color: "#fff",
//                 opacity: loading || !isOtpComplete ? 0.7 : 1,
//                 cursor: loading ? "not-allowed" : "pointer",
//               }}
//             >
//               {loading ? t.verifying : t.verifyButton}
//             </button>

//             <div className="resend-section mt-4">
//               <p className="p-0 m-0 dont-receive">
//                 {t.didntReceive}
//               </p>
//               <button
//                 type="button"
//                 className={`resend-btn ${canResend ? "active" : "disabled"}`}
//                 onClick={handleResend}
//                 disabled={!canResend || loading || resendLoading}
//               >
//                 {resendLoading ? t.sending : t.resend}
//               </button>
//               <span className="timer">{t.timer}{formatTime(timeLeft)}</span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }











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

//   // Language toggle
//   const toggleLanguage = () => {
//     const newLang = i18n.language === 'en' ? 'th' : 'en';
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

//   // ---------- OTP handlers (unchanged) ----------
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

//         navigate('/dashboard');
//       } else {
//         setError(data.message || t('otp.error.verificationFailed', 'Verification failed'));
//         setOtp(["", "", "", "", "", ""]);
//         otpRefs.current[0]?.focus();
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || t('otp.error.genericError', 'Error'));
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
//         <motion.img
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           src={Otps}
//           alt="OTP Illustration"
//           className="side-image w-75"
//         />
//       </div>

//       <div className="Otp-form-side">
//         <div className="Otp-card">
//           {/* Language Toggle - same position and style */}
//           <div className="language-toggle-wrapper" style={{ position: 'absolute', top: '20px', right: '20px' }}>
//             <button
//               onClick={toggleLanguage}
//               className="btn btn-sm btn-outline-secondary"
//               style={{ borderRadius: '20px', padding: '4px 12px' }}
//             >
//               {i18n.language === 'en' ? 'ไทย' : 'English'}
//             </button>
//           </div>

//           <div className="Otp-header">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               <img src={Logos} className="img-fluid w-25 mb-4" alt="ThaiXO Logo" />
//             </motion.div>

//             <p className="fs-3 get-otp fw-bolder">
//               {t('otp.titles', 'Get OTP via WhatsApp')}
//             </p>
//             <p className="Otp-instruction">
//               {t('otp.instruction', 'Open Your WhatsApp → Copy Your secure OTP.')}
//             </p>
//           </div>

//           {/* Error Message - same as before */}
//           {error && (
//             <div className="error-message">
//               {error}
//             </div>
//           )}

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

  const userId = location.state?.userId;

  // Redirect if no userId
  useEffect(() => {
    if (!userId) {
      navigate("/", { replace: true });
    }
  }, [userId, navigate]);

  // Language toggle – same as Login
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

  // Resend OTP
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
            'Authorization': localStorage.getItem('token') || '',
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
        alert(t('otp.resendSuccess', 'OTP resent successfully!'));
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

  // Verify OTP
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
        `${import.meta.env.VITE_SERVER_URL}/verify-otp`,
        { userId: String(userId), otp: otpString },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      const data = response.data;

      if (data.success) {
        const token = data.token || data.data?.token;

        if (token) {
          localStorage.setItem('token', token);
        }

        navigate('/dashboard',  { replace: true });
      } else {
        // setError(data.message || t('otp.error.verificationFailed', 'Verification failed'));
        setError(
  data.message === "OTP does not match"
    ? t("otp.error.otpMismatch")
    : data.message || t("otp.error.verificationFailed", "Verification failed")
);
        setOtp(["", "", "", "", "", ""]);
        otpRefs.current[0]?.focus();
      }
    } catch (err) {
      // setError(err.response?.data?.message || t('otp.error.genericError', 'Error'));
      const errorMessage = err.response?.data?.message;

setError(
  errorMessage === "OTP does not match"
    ? t("otp.error.otpMismatch")
    : errorMessage || t("otp.error.genericError", "Error")
);
      setOtp(["", "", "", "", "", ""]);
      otpRefs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  if (!userId) return null;

  return (
    <div className="Otp-container bg-white">
      <div className="Otp-image-side d-lg-flex">
        {/* <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={Otps}
          alt="OTP Illustration"
          className="side-image w-75"
        /> */}

        <img
  src={Otps}
  alt="Community Illustration"
  className="side-image w-75"
/>
      
      </div>

      <div className="Otp-form-side">
        <div className="Otp-card">
          {/* Language Toggle – same as Login */ }
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
              {/* Brand name – same as Login */ }
            </motion.div>

              <span className="login-brand-name">
                {t("otp.titles")}
              </span>
            <p className="Otp-instruction">
              {t('otp.instruction', 'Open Your WhatsApp → Copy Your secure OTP.')}
            </p>
          </div>

          {/* Error Message */ }

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