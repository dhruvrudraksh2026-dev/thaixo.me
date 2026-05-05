// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "../css/Login.css";

// // LoginPageProps {
// //   onLogin: () => void;
// // }

// // export const Login = ({ onLogin }) => {
// //   const [phoneNumber, setPhoneNumber] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (phoneNumber.length >= 8) {
// //       onLogin();
// //     }
// //   };

// // 1. REMOVED the 'interface' block entirely

// export const LoginPage = ({ onLogin }) => {
//   const [phoneNumber, setPhoneNumber] = useState("");

//   // 2. REMOVED the ': React.FormEvent' type annotation
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (phoneNumber.length >= 8) {
//       onLogin();
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         {/* Left Side: Illustration */}
//         <div className="login-illustration">
//           <motion.img
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             src="https://img.freepik.com/free-vector/young-people-standing-together-illustration_52683-31149.jpg?t=st=1741793750~exp=1741797350~hmac=69446700c2826767467676767676767676767676767676767676767676767676"
//             alt="ThaiXO Community"
//             style={{ borderRadius: "40px" }}
//           />
//         </div>

//         {/* Right Side: Form */}
//         <div className="login-form-section">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="login-logo-wrapper"
//           >
//             <div
//               style={{
//                 position: "relative",
//                 width: "80px",
//                 height: "60px",
//                 marginBottom: "10px",
//               }}
//             >
//               <svg
//                 viewBox="0 0 100 60"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M20 10C20 10 5 15 5 30C5 45 20 50 20 50L40 30L20 10Z"
//                   fill="#e9527a"
//                 />
//                 <circle
//                   cx="70"
//                   cy="30"
//                   r="20"
//                   stroke="#e9527a"
//                   strokeWidth="8"
//                 />
//                 <circle cx="70" cy="30" r="5" fill="#e9527a" />
//                 <path
//                   d="M70 20C72 20 74 22 74 24"
//                   stroke="#e9527a"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>
//             <span className="login-brand-name">ThaiXO Social</span>
//           </motion.div>

//           <h2 className="login-title">Log In</h2>
//           <h3 className="login-subtitle">Hey there! Welcome back</h3>
//           <p className="login-description">
//             Enter your registered mobile number to access your account. We'll
//             send you a quick OTP for secure login.
//           </p>

//           <form
//             onSubmit={handleSubmit}
//             style={{
//               width: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <div className="login-inputs-row">
//               <div className="country-code-box">
//                 <span className="input-label-floating">Country Code</span>
//                 <div className="country-code-content">
//                   <img
//                     src="https://flagcdn.com/w40/th.png"
//                     alt="TH"
//                     className="flag-icon"
//                   />
//                   <span style={{ color: "#e9527a", fontWeight: "500" }}>
//                     (+66)
//                   </span>
//                 </div>
//               </div>

//               <div className="phone-input-box">
//                 <span className="input-label-floating">
//                   Enter Contact Number*
//                 </span>
//                 <input
//                   type="text"
//                   className="phone-input-field"
//                   placeholder="12345-6789"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//               </div>
//             </div>

//             <button type="submit" className="verify-btn">
//               Verify OTP
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };






















// import React, { useState  } from "react";
// import {motion} from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import "../css/Login.css";
// import Side from "../assets/Side.jpg";
// import Logos from "../assets/Logos.png";

// export const LoginPage = ({ onLogin }) => {
//   const [phoneNumber, setPhoneNumber] = useState("");

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   if (phoneNumber.trim().length < 8) {
//   //     alert("Please enter a valid phone number");
//   //     return;
//   //   }

//   //   if (onLogin) {
//   //     onLogin(phoneNumber);
//   //   }

//   //   console.log("Phone Number:", phoneNumber);
//   // };


//     const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (phoneNumber.trim().length < 8) {
//       alert("Please enter a valid phone number");
//       return;
//     }

//     console.log("Phone Number:", phoneNumber);

//     // Redirect to OTP page
//     navigate("/otp", { state: { phone: phoneNumber } });
//   };



//   return (
//     <div className="login-container">
//       <div className="login-card">
//         {/* Left Side Illustration */}
//         <div className="login-illustration d-none d-lg-flex">
//           <motion.img
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             src={Side}alt="Community Illustration"className="login-image"/>
//         </div>

//         {/* Right Side Form */}
//         <div className="login-form-section">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="login-logo-wrapper"
//           >
//             <div className="logo-svg">
//               <svg
//                 viewBox="0 0 100 60"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M20 10C20 10 5 15 5 30C5 45 20 50 20 50L40 30L20 10Z"
//                   fill="#e9527a"
//                 />
//                 <circle
//                   cx="70"
//                   cy="30"
//                   r="20"
//                   stroke="#e9527a"
//                   strokeWidth="8"
//                 />
//                 <circle cx="70" cy="30" r="5" fill="#e9527a" />
//                 <path
//                   d="M70 20C72 20 74 22 74 24"
//                   stroke="#e9527a"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>

//               <img src={Logos}  className="img-fluid w-25 mb-3" alt="Image-Not-Found" />

//             <span className="login-brand-name">ThaiXO Creator Studio</span>
//           </motion.div>

//           <h2 className="login-title">Log In</h2>
//           <h3 className="login-subtitle">Hey there! Welcome back</h3>

//           <p className="login-description">
//             Enter your registered mobile number to access your account.
//             We'll send you a quick OTP for secure login.
//           </p>

//           {/* Form */}
//           <form className="login-form" onSubmit={handleSubmit}>
//             <div className="login-inputs-row">
//               {/* Country Code */}
//               <div className="country-code-box">
//                 <span className="input-label-floating">Country Code</span>

//                 <div className="country-code-content">
//                   <img
//                     src="https://flagcdn.com/w40/th.png"
//                     alt="TH"
//                     className="flag-icon"
//                   />

//                   <span className="country-code-text">(+66)</span>
//                 </div>
//               </div>

//               {/* Phone Input */}
//               <div className="phone-input-box">
//                 <span className="input-label-floating">
//                   Enter Contact Number*
//                 </span>

//                 <input
//                   type="tel"
//                   className="phone-input-field"
//                   placeholder="12345-6789"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//               </div>
//             </div>

//             <button type="submit" className="verify-btn">
//               Verify OTP
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



















// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import "../css/Login.css";
// import Side from "../assets/Side.jpg";
// import Logos from "../assets/Logos.png";

// export const LoginPage = ({ onLogin }) => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (phoneNumber.trim().length < 8) {
//       alert("Please enter a valid phone number");
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await fetch(
//         "https://sagarxo.app/web-api/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             contactNo: phoneNumber,
//           }),
//         }
//       );

//       const result = await response.json();

//       console.log("API Response:", result);

//       if (result.success) {
//         alert(result.message);

//         const userId = result.data.userId;

//         // Store userId if needed
//         localStorage.setItem("userId", userId);

//         // Redirect to OTP page
//         navigate("/otp", {
//           state: {
//             phone: phoneNumber,
//             userId: userId,
//           },
//         });
//       } else {
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error("Login API Error:", error);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         {/* Left Side Illustration */}
//         <div className="login-illustration d-none d-lg-flex">
//           <motion.img
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             src={Side}
//             alt="Community Illustration"
//             className="login-image"
//           />
//         </div>

//         {/* Right Side Form */}
//         <div className="login-form-section">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="login-logo-wrapper"
//           >
//             <div className="logo-svg">
//               <svg
//                 viewBox="0 0 100 60"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M20 10C20 10 5 15 5 30C5 45 20 50 20 50L40 30L20 10Z"
//                   fill="#e9527a"
//                 />
//                 <circle cx="70" cy="30" r="20" stroke="#e9527a" strokeWidth="8" />
//                 <circle cx="70" cy="30" r="5" fill="#e9527a" />
//                 <path
//                   d="M70 20C72 20 74 22 74 24"
//                   stroke="#e9527a"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>

//             <img
//               src={Logos}
//               className="img-fluid w-50 mb-3"
//               alt="Image-Not-Found"
//             />

//             <span className="login-brand-name">ThaiXO Social</span>
//           </motion.div>

//           <h2 className="login-title">Log In</h2>
//           <h3 className="login-subtitle">Hey there! Welcome back</h3>

//           <p className="login-description">
//             Enter your registered mobile number to access your account.
//             We'll send you a quick OTP for secure login.
//           </p>

//           {/* Form */}
//           <form className="login-form" onSubmit={handleSubmit}>
//             <div className="login-inputs-row">
//               {/* Country Code */}
//               <div className="country-code-box">
//                 <span className="input-label-floating">Country Code</span>

//                 <div className="country-code-content">
//                   <img
//                     src="https://flagcdn.com/w40/th.png"
//                     alt="TH"
//                     className="flag-icon"
//                   />
//                   <span className="country-code-text">(+66)</span>
//                 </div>
//               </div>

//               {/* Phone Input */}
//               <div className="phone-input-box">
//                 <span className="input-label-floating">
//                   Enter Contact Number*
//                 </span>

//                 <input
//                   type="tel"
//                   className="phone-input-field"
//                   placeholder="12345-6789"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="verify-btn"
//               disabled={loading}
//             >
//               {loading ? "Sending OTP..." : "Verify OTP"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




















// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import "../css/Login.css";
// import Side from "../assets/Side.jpg";
// import Logos from "../assets/Logos.png";

// export const LoginPage = ({ onLogin }) => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (phoneNumber.trim().length < 8) {
//       setErrorMsg("Please enter a valid phone number");
//       return;
//     }

//     setErrorMsg("");
//     setLoading(true);

//     try {
//       const response = await fetch("https://sagarxo.app/web-api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",           // ← very important: sends & receives cookies
//         body: JSON.stringify({
//           contactNo: phoneNumber,
//         }),
//       });

//       const result = await response.json();

//       console.log("Login API Response:", result);

//       if (result.success) {
//         // No need to store anything manually — backend should set httpOnly cookie

//         alert(result.message || "OTP sent successfully!");

//         const userId = result.data?.userId;

//         // Redirect to OTP page — pass only what's needed for display/verification
//         navigate("/otp", {
//           state: {
//             phone: phoneNumber,
//             userId: userId,               // optional — only if OTP endpoint needs it
//           },
//         });
//       } else {
//         setErrorMsg(result.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Login API Error:", error);
//       setErrorMsg("Something went wrong. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         {/* Left Side Illustration */}
//         <div className="login-illustration d-none d-lg-flex">
//           <motion.img
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             src={Side}
//             alt="Community Illustration"
//             className="login-image"
//           />
//         </div>

//         {/* Right Side Form */}
//         <div className="login-form-section">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="login-logo-wrapper"
//           >
//             <div className="logo-svg">
//               <svg
//                 viewBox="0 0 100 60"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M20 10C20 10 5 15 5 30C5 45 20 50 20 50L40 30L20 10Z"
//                   fill="#e9527a"
//                 />
//                 <circle cx="70" cy="30" r="20" stroke="#e9527a" strokeWidth="8" />
//                 <circle cx="70" cy="30" r="5" fill="#e9527a" />
//                 <path
//                   d="M70 20C72 20 74 22 74 24"
//                   stroke="#e9527a"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>

//             <img
//               src={Logos}
//               className="img-fluid w-50 mb-3"
//               alt="ThaiXO Logo"
//             />

//             <span className="login-brand-name">ThaiXO Social</span>
//           </motion.div>

//           <h2 className="login-title">Log In</h2>
//           <h3 className="login-subtitle">Hey there! Welcome back</h3>

//           <p className="login-description">
//             Enter your registered mobile number to access your account.
//             We'll send you a quick OTP for secure login.
//           </p>

//           {/* Error message */}
//           {errorMsg && (
//             <div className="alert alert-danger mb-3 text-center">
//               {errorMsg}
//             </div>
//           )}

//           {/* Form */}
//           <form className="login-form" onSubmit={handleSubmit}>
//             <div className="login-inputs-row">
//               {/* Country Code */}
//               <div className="country-code-box">
//                 <span className="input-label-floating">Country Code</span>
//                 <div className="country-code-content">
//                   <img
//                     src="https://flagcdn.com/w40/th.png"
//                     alt="Thailand Flag"
//                     className="flag-icon"
//                   />
//                   <span className="country-code-text">(+66)</span>
//                 </div>
//               </div>

//               {/* Phone Input */}
//               <div className="phone-input-box">
//                 <span className="input-label-floating">Enter Contact Number*</span>
//                 <input
//                   type="tel"
//                   className="phone-input-field"
//                   placeholder="12345-6789"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="verify-btn"
//               disabled={loading}
//             >
//               {loading ? "Sending OTP..." : "Send OTP"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


























// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import axios from 'axios';
// import Side from "../assets/Side.jpg";
// import Logos from "../assets/Logos.png";
// import "../css/Login.css";

// export default function Login() {
//   const [contactNo, setContactNo] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (contactNo.trim().length < 8) {
//       setError("Please enter a valid phone number");
//       return;
//     }
    
//     setError(null);
//     setLoading(true);
    
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/login`, { contactNo }, {
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true
//       });
//       console.log(contactNo);
//       const data = response.data;
//       if (data.success) {
//         navigate('/otp', { state: { userId: data.data.userId } });
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'An error occurred during login');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         {/* Left Side Illustration */}
//         <div className="login-illustration d-none d-lg-flex">
//           <motion.img
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             src={Side}
//             alt="Community Illustration"
//             className="login-image"
//           />
//         </div>

//         {/* Right Side Form */}
//         <div className="login-form-section">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="login-logo-wrapper"
//           >
//             <div className="logo-svg">
//               <svg
//                 viewBox="0 0 100 60"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M20 10C20 10 5 15 5 30C5 45 20 50 20 50L40 30L20 10Z"
//                   fill="#e9527a"
//                 />
//                 <circle cx="70" cy="30" r="20" stroke="#e9527a" strokeWidth="8" />
//                 <circle cx="70" cy="30" r="5" fill="#e9527a" />
//                 <path
//                   d="M70 20C72 20 74 22 74 24"
//                   stroke="#e9527a"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>

//             <img
//               src={Logos}
//               className="img-fluid w-50 mb-3"
//               alt="ThaiXO Logo"
//             />

//             <span className="login-brand-name">ThaiXO Social</span>
//           </motion.div>

//           <h2 className="login-title">Log In</h2>
//           <h3 className="login-subtitle">Hey there! Welcome back</h3>

//           <p className="login-description">
//             Enter your registered mobile number to access your account.
//             We'll send you a quick OTP for secure login.
//           </p>

//           {/* Error message */}
//           {error && (
//             <div className="alert alert-danger mb-3 text-center">
//               {error}
//             </div>
//           )}

//           {/* Form */}
//           <form className="login-form" onSubmit={handleLogin}>
//             <div className="login-inputs-row">
//               {/* Country Code */}
//               <div className="country-code-box">
//                 <span className="input-label-floating">Country Code</span>
//                 <div className="country-code-content">
//                   <img
//                     src="https://flagcdn.com/w40/th.png"
//                     alt="Thailand Flag"
//                     className="flag-icon"
//                   />
//                   <span className="country-code-text">(+66)</span>
//                 </div>
//               </div>

//               {/* Phone Input */}
//               <div className="phone-input-box">
//                 <span className="input-label-floating">Enter Contact Number*</span>
//                 <input
//                   type="tel"
//                   className="phone-input-field"
//                   placeholder="12345-6789"
//                   value={contactNo}
//                   onChange={(e) => setContactNo(e.target.value.replace(/\D/g, ""))}
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="verify-btn"
//               disabled={loading}
//             >
//               {loading ? "Sending OTP..." : "Send OTP"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


















// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import axios from 'axios';
// import Side from "../assets/Side.jpg";
// import Logos from "../assets/Logos.png";
// import "../css/Login.css";

// // Translations
// const translations = {
//   en: {
//     title: "Log In",
//     subtitle: "Hey there! Welcome back",
//     description: "Enter your registered mobile number to access your account. We'll send you a quick OTP for secure login.",
//     countryCodeLabel: "Country Code",
//     phoneLabel: "Enter Contact Number*",
//     phonePlaceholder: "12345-6789",
//     button: "Send OTP",
//     buttonLoading: "Sending OTP...",
//     error: {
//       invalidPhone: "Please enter a valid phone number",
//       loginFailed: "Login failed",
//       genericError: "An error occurred during login"
//     }
//   },
//   th: {
//     title: "เข้าสู่ระบบ",
//     subtitle: "สวัสดี! ยินดีต้อนรับกลับ",
//     description: "กรุณากรอกหมายเลขโทรศัพท์ที่ลงทะเบียนไว้เพื่อเข้าสู่ระบบ เราจะส่ง OTP เพื่อยืนยันตัวตนของคุณ",
//     countryCodeLabel: "รหัสประเทศ",
//     phoneLabel: "กรอกหมายเลขติดต่อ*",
//     phonePlaceholder: "12345-6789",
//     button: "ส่ง OTP",
//     buttonLoading: "กำลังส่ง OTP...",
//     error: {
//       invalidPhone: "กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง",
//       loginFailed: "เข้าสู่ระบบไม่สำเร็จ",
//       genericError: "เกิดข้อผิดพลาดระหว่างการเข้าสู่ระบบ"
//     }
//   }
// };

// export default function Login() {
//   const [contactNo, setContactNo] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [language, setLanguage] = useState(() => {
//     return localStorage.getItem('appLanguage') || 'en';
//   });
//   const navigate = useNavigate();
//   const t = translations[language];

//   // Listen for language changes from other tabs/components
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
//     // Dispatch storage event for other tabs
//     window.dispatchEvent(new Event('storage'));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     if (contactNo.trim().length < 8) {
//       setError(t.error.invalidPhone);
//       return;
//     }
    
//     setError(null);
//     setLoading(true);
    
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/login`, { contactNo }, {
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true
//       });
//       console.log(contactNo);
//       const data = response.data;
//       if (data.success) {
//         navigate('/otp', { state: { userId: data.data.userId } });
//       } else {
//         setError(data.message || t.error.loginFailed);
//       }
//     } catch (err) {
//       const serverMsg = err.response?.data?.message;
//       // Map known server messages to translated versions
//       if (serverMsg === "Invalid phone number") {
//         setError(t.error.invalidPhone);
//       } else {
//         setError(serverMsg || t.error.genericError);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         {/* Left Side Illustration */}
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

//         {/* Right Side Form */}
//         <div className="login-form-section">
//           {/* Language Toggle */}
//           <div className="language-toggle-wrapper" style={{ position: 'absolute', top: '20px', right: '20px' }}>
//             <button
//               onClick={toggleLanguage}
//               className="btn btn-sm btn-outline-secondary"
//               style={{ borderRadius: '20px', padding: '4px 12px' }}
//             >
//               {language === 'en' ? 'ไทย' : 'English'}
//             </button>
//           </div>

//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="login-logo-wrapper"
//           >
//             {/* <div className="logo-svg">
//               <svg
//                 viewBox="0 0 100 60"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M20 10C20 10 5 15 5 30C5 45 20 50 20 50L40 30L20 10Z"
//                   fill="#e9527a"
//                 />
//                 <circle cx="70" cy="30" r="20" stroke="#e9527a" strokeWidth="8" />
//                 <circle cx="70" cy="30" r="5" fill="#e9527a" />
//                 <path
//                   d="M70 20C72 20 74 22 74 24"
//                   stroke="#e9527a"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div> */}

//             <img
//               src={Logos}
//               className="img-fluid w-25 mb-3 "
//               alt="ThaiXO Logo"
//             />

//             <span className="login-brand-name">ThaiXO Creator Studio</span>
//           </motion.div>

//           <h2 className="login-title">{t.title}</h2>
//           <h3 className="login-subtitle">{t.subtitle}</h3>

//           <p className="login-description">
//             {t.description}
//           </p>

//           {/* Error message */}
//           {error && (
//             <div className="alert alert-danger mb-3 text-center">
//               {error}
//             </div>
//           )}

//           {/* Form */}
//           <form className="login-form" onSubmit={handleLogin}>
//             <div className="login-inputs-row">
//               {/* Country Code */}
//               <div className="country-code-box">
//                 <span className="input-label-floating">{t.countryCodeLabel}</span>
//                 <div className="country-code-content">
//                   <img
//                     src="https://flagcdn.com/w40/th.png"
//                     alt="Thailand Flag"
//                     className="flag-icon"
//                   />
//                   <span className="country-code-text text-black">(+66)</span>
//                 </div>
//               </div>

//               {/* Phone Input */}
//               <div className="phone-input-box">
//                 <span className="input-label-floating">{t.phoneLabel}</span>
//                 <input
//                   type="tel"
//                   className="phone-input-field"
//                   placeholder={t.phonePlaceholder}
//                   value={contactNo}
//                   onChange={(e) => setContactNo(e.target.value.replace(/\D/g, ""))}
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="verify-btn"
//               disabled={loading}
//             >
//               {loading ? t.buttonLoading : t.button}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


















// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import axios from 'axios';
// import { useTranslation } from 'react-i18next'; // <-- use i18next
// import Side from "../assets/Side.jpg";
// import Logos from "../assets/Logos.png";
// import "../css/Login.css";

// export default function Login() {
//   const { t, i18n } = useTranslation(); // <-- hooks
//   const [contactNo, setContactNo] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const toggleLanguage = () => {
//     const newLang = i18n.language === 'en' ? 'th' : 'en';
//     i18n.changeLanguage(newLang);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     if (contactNo.trim().length < 8) {
//       setError(t('login.error.invalidPhone'));
//       return;
//     }
    
//     setError(null);
//     setLoading(true);
    
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/login`, { contactNo }, {
//         headers: { 'Content-Type': 'application/json' },
//         withCredentials: true
//       });
//       console.log(contactNo);
//       const data = response.data;
//       if (data.success) {
//         navigate('/otp', { state: { userId: data.data.userId } });
//       } else {
//         setError(data.message || t('login.error.loginFailed'));
//       }
//     } catch (err) {
//       const serverMsg = err.response?.data?.message;
//       setError(serverMsg || t('login.error.genericError'));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         {/* Left Side Illustration */}
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

//         {/* Right Side Form */}
//         <div className="login-form-section">
//           {/* Language Toggle */}
//           <div className="language-toggle-wrapper" style={{ position: 'absolute', top: '20px', right: '20px' }}>
//             <button
//               onClick={toggleLanguage}
//               className="btn btn-sm btn-outline-secondary"
//               style={{ borderRadius: '20px', padding: '4px 12px' }}
//             >
//               {i18n.language === 'en' ? 'ไทย' : 'English'}
//             </button>
//           </div>

//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="login-logo-wrapper"
//           >
//             <img
//               src={Logos}
//               className="img-fluid w-25 mb-3"
//               alt="ThaiXO Logo"
//             />
//             <span className="login-brand-name">ThaiXO Creator Studio</span>
//           </motion.div>

//           <h2 className="login-title">{t('login.title')}</h2>
//           <h3 className="login-subtitle">{t('login.subtitle')}</h3>

//           <p className="login-description">
//             {t('login.description')}
//           </p>

//           {/* Error message */}
//           {error && (
//             <div className="alert alert-danger mb-3 text-center">
//               {error}
//             </div>
//           )}

//           {/* Form */}
//           <form className="login-form" onSubmit={handleLogin}>
//             <div className="login-inputs-row">
//               {/* Country Code */}
//               <div className="country-code-box">
//                 <span className="input-label-floating">{t('login.countryCodeLabel')}</span>
//                 <div className="country-code-content">
//                   <img
//                     src="https://flagcdn.com/w40/th.png"
//                     alt="Thailand Flag"
//                     className="flag-icon"
//                   />
//                   <span className="country-code-text text-black">(+66)</span>
//                 </div>
//               </div>

//               {/* Phone Input */}
//               <div className="phone-input-box">
//                 <span className="input-label-floating">{t('login.phoneLabel')}</span>
//                 <input
//                   type="tel"
//                   className="phone-input-field"
//                   placeholder={t('login.phonePlaceholder')}
//                   value={contactNo}
//                   onChange={(e) => setContactNo(e.target.value.replace(/\D/g, ""))}
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="verify-btn"
//               disabled={loading}
//             >
//               {loading ? t('login.buttonLoading') : t('login.button')}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }












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

//     if (contactNo.trim().length < 8) {
//       setError(t("login.error.invalidPhone"));
//       return;
//     }

//     setError("");
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_SERVER_URL}/login`,
//         { contactNo },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       if (response.data.success) {
//         navigate("/otp", {
//           state: {
//             userId: response.data.data.userId,
//           },
//         });
//       } else {
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

//         {/* Left Image */}
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

//         {/* Right Form */}
//         <div className="login-form-section">

//           {/* Language Button */}
//           <div
//             style={{
//               position: "absolute",
//               top: "20px",
//               right: "20px",
//             }}
//           >
//             <button
//               type="button"
//               onClick={toggleLanguage}
//               className="btn btn-sm btn-outline-secondary"
//               style={{
//                 borderRadius: "20px",
//                 padding: "4px 12px",
//               }}
//             >
//               {i18n.language.startsWith("en")
//                 ? "ไทย"
//                 : "English"}
//             </button>
//           </div>

//           {/* Logo */}
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
//               ThaiXO Creator Studio
//             </span>
//           </motion.div>

//           <h2 className="login-title">{t("login.title")}</h2>
//           <h3 className="login-subtitle">{t("login.subtitle")}</h3>
//           <p className="login-description">
//             {t("login.description")}
//           </p>

//           {error && (
//             <div className="alert alert-danger mb-3 text-center">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleLogin} className="login-form">
//             <div className="login-inputs-row">

//               {/* Country Code */}
//               <div className="country-code-box">
//                 <span className="input-label-floating">
//                   {t("login.countryCodeLabel")}
//                 </span>

//                 <div className="country-code-content">
//                   <img
//                     src="https://flagcdn.com/w40/th.png"
//                     alt="Thailand Flag"
//                     className="flag-icon"
//                   />
//                   <span className="country-code-text text-black">
//                     (+66)
//                   </span>
//                 </div>
//               </div>

//               {/* Phone Input */}
//               <div className="phone-input-box">
//                 <span className="input-label-floating">
//                   {t("login.phoneLabel")}
//                 </span>

//                 <input
//                   type="tel"
//                   className="phone-input-field"
//                   placeholder={t("login.phonePlaceholder")}
//                   value={contactNo}
//                   onChange={(e) =>
//                     setContactNo(
//                       e.target.value.replace(/\D/g, "")
//                     )
//                   }
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="verify-btn"
//               disabled={loading}
//             >
//               {loading
//                 ? t("login.buttonLoading")
//                 : t("login.button")}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
















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

//   // Toggle between Thai and English
//   const toggleLanguage = () => {
//     const newLang = i18n.language.startsWith("en") ? "th" : "en";
//     i18n.changeLanguage(newLang);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (contactNo.trim().length < 8) {
//       setError(t("login.error.invalidPhone"));
//       return;
//     }

//     setError("");
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_SERVER_URL}/login`,
//         { contactNo },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       if (response.data.success) {
//         navigate("/otp", {
//           state: {
//             userId: response.data.data.userId,
//           },
//         });
//       } else {
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

//         {/* Left Image */}
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

//         {/* Right Form */}
//         <div className="login-form-section">

//           {/* Language Toggle Button */}
//           <div
//             style={{
//               position: "absolute",
//               top: "20px",
//               right: "20px",
//             }}
//           >
//             <button
//               type="button"
//               onClick={toggleLanguage}
//               className="btn btn-sm btn-outline-secondary"
//               style={{
//                 borderRadius: "20px",
//                 padding: "4px 12px",
//               }}
//             >
//               {/* Show the current language */}
//               {i18n.language.startsWith("en")
//                 ? "English"
//                 : "ไทย"}
//             </button>
//           </div>

//           {/* Logo */}
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
//               ThaiXO Creator Studio
//             </span>
//           </motion.div>

//           <h2 className="login-title">{t("login.title")}</h2>
//           <h3 className="login-subtitle">{t("login.subtitle")}</h3>
//           <p className="login-description">
//             {t("login.description")}
//           </p>

//           {error && (
//             <div className="alert alert-danger mb-3 text-center">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleLogin} className="login-form">
//             <div className="login-inputs-row">

//               {/* Country Code */}
//               <div className="country-code-box">
//                 <span className="input-label-floating">
//                   {t("login.countryCodeLabel")}
//                 </span>

//                 <div className="country-code-content">
//                   <img
//                     src="https://flagcdn.com/w40/th.png"
//                     alt="Thailand Flag"
//                     className="flag-icon"
//                   />
//                   <span className="country-code-text text-black">
//                     (+66)
//                   </span>
//                 </div>
//               </div>

//               {/* Phone Input */}
//               <div className="phone-input-box">
//                 <span className="input-label-floating">
//                   {t("login.phoneLabel")}
//                 </span>

//                 <input
//                   type="tel"
//                   className="phone-input-field"
//                   placeholder={t("login.phonePlaceholder")}
//                   value={contactNo}
//                   onChange={(e) =>
//                     setContactNo(
//                       e.target.value.replace(/\D/g, "")
//                     )
//                   }
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="verify-btn"
//               disabled={loading}
//             >
//               {loading
//                 ? t("login.buttonLoading")
//                 : t("login.button")}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



















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

//     if (contactNo.trim().length < 8) {
//       setError(t("login.error.invalidPhone"));
//       return;
//     }

//     setError("");
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_SERVER_URL}/login`,
//         { contactNo },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       if (response.data.success) {
//         navigate("/otp", {
//           state: {
//             userId: response.data.data.userId,
//           },
//         });
//       } else {
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

//           {error && (
//             <div className="alert alert-danger mb-3 text-center">{error}</div>
//           )}

//           <form onSubmit={handleLogin} className="login-form">
//             <div className="login-inputs-row">
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
//                   type="tel"
//                   className="phone-input-field"
//                   placeholder={t("login.phonePlaceholder")}
//                   value={contactNo}
//                   onChange={(e) => setContactNo(e.target.value.replace(/\D/g, ""))}
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <button type="submit" className="verify-btn" disabled={loading}>
//               {loading ? t("login.buttonLoading") : t("login.button")}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


















import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useTranslation } from "react-i18next";

import Side from "../assets/Side.jpg";
import Logos from "../assets/Logos.png";
import "../css/Login.css";

// Country options with flags and codes
const countryOptions = [
  { code: "+66", flag: "https://flagcdn.com/w40/th.png", name: "Thailand" },
  // { code: "+91", flag: "https://flagcdn.com/w40/in.png", name: "India" },
  // { code: "+1", flag: "https://flagcdn.com/w40/us.png", name: "USA" },
  // { code: "+44", flag: "https://flagcdn.com/w40/gb.png", name: "UK" },
  // { code: "+61", flag: "https://flagcdn.com/w40/au.png", name: "Australia" },
  // { code: "+65", flag: "https://flagcdn.com/w40/sg.png", name: "Singapore" },
  // { code: "+81", flag: "https://flagcdn.com/w40/jp.png", name: "Japan" },
  // { code: "+82", flag: "https://flagcdn.com/w40/kr.png", name: "South Korea" },
  // { code: "+86", flag: "https://flagcdn.com/w40/cn.png", name: "China" },
  // { code: "+84", flag: "https://flagcdn.com/w40/vn.png", name: "Vietnam" },
];

// Format phone number: 1234567890 → 123-456-7890
const formatPhoneNumber = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  
  if (digits.length === 0) return "";
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

// Remove formatting for API call: 123-456-7890 → 1234567890
const unformatPhoneNumber = (value) => {
  return value.replace(/\D/g, "");
};

export default function Login() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [contactNo, setContactNo] = useState("");        // Raw digits (1234567890)
  const [displayValue, setDisplayValue] = useState("");   // Formatted (123-456-7890)
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("en") ? "th" : "en";
    i18n.changeLanguage(newLang);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
  };

  const handlePhoneChange = (e) => {
    // Get raw input and extract only digits (max 10)
    const rawValue = e.target.value;
    const digitsOnly = rawValue.replace(/\D/g, "").slice(0, 10);
    
    // Store raw digits for validation and API
    setContactNo(digitsOnly);
    
    // Store formatted value for display
    setDisplayValue(formatPhoneNumber(digitsOnly));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate exactly 10 digits
    if (contactNo.length !== 10) {
      setError(t("login.error.invalidPhone") || "Please enter exactly 10 digits");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/login`,
        { 
          contactNo: contactNo,  // Send raw digits
          countryCode: selectedCountry.code 
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        navigate("/otp", {
          state: {
            userId: response.data.data.userId,
          },
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

          {error && (
            <div className="alert alert-danger mb-3 text-center">{error}</div>
          )}

          <form onSubmit={handleLogin} className="login-form">
            <div className="login-inputs-row">
              {/* Country Code Dropdown */}
              <div 
                className="country-code-box" 
                ref={dropdownRef} 
                style={{ position: "relative", cursor: "pointer" }}
              >
                <span className="input-label-floating">{t("login.countryCodeLabel")}</span>
                <div 
                  className="country-code-content"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  <img src={selectedCountry.flag} alt={selectedCountry.name} className="flag-icon" />
                  <span className="country-code-text text-black">({selectedCountry.code})</span>
                  <span style={{ marginLeft: "4px", fontSize: "10px" }}>▼</span>
                </div>

                {/* Dropdown Menu */}
                {showCountryDropdown && (
                  <div 
                    className="country-dropdown-menu"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      zIndex: 1000,
                      backgroundColor: "#fff",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      maxHeight: "200px",
                      overflowY: "auto",
                      width: "200px",
                      marginTop: "4px"
                    }}
                  >
                    {countryOptions.map((country) => (
                      <div
                        key={country.code}
                        onClick={() => handleCountrySelect(country)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "10px 12px",
                          cursor: "pointer",
                          borderBottom: "1px solid #f0f0f0",
                          transition: "background-color 0.2s"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f8f9fa"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fff"}
                      >
                        <img 
                          src={country.flag} 
                          alt={country.name} 
                          style={{ width: "24px", height: "16px", marginRight: "10px", borderRadius: "2px" }} 
                        />
                        <span style={{ fontSize: "14px", color: "#333" }}>
                          {country.name} ({country.code})
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="phone-input-box">
                <span className="input-label-floating">{t("login.phoneLabel")}</span>
                <input
                  type="tel"
                  className="phone-input-field"
                  // placeholder={t("login.phonePlaceholder") || "123-456-7890"}
                  placeholder="123-456-789"
                  value={displayValue}              // Show formatted value
                  onChange={handlePhoneChange}       // Handle formatting
                  disabled={loading}
                  maxLength={12}  // 10 digits + 2 hyphens = 12 chars
                />
              </div>
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