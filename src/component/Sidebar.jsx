
// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { 
//   Home, 
//   Wallet, 
//   History, 
//   UserCheck, 
//   Trophy, 
//   Video, 
//   HelpCircle, 
//   LogOut 
// } from 'lucide-react';

// import Logos from "../assets/Logo.png";

// const menuItems = [
//   { icon: Home, label: 'Home', path: '/dashboard' },
//   { icon: Wallet, label: 'My Earnings', path: '/IncomeDashboard' },
//   { icon: History, label: 'Pay Out History', path: '/WithdrawalHistory' },
//   { icon: UserCheck, label: 'Verify Identity', path: '/CreatorSection' },
//   { icon: Trophy, label: 'Milestone', path: '/Milestone' },
//   { icon: Video, label: 'Video Call History', path: '/VideoCallHistory' },
//   { icon: HelpCircle, label: 'Help & Support', path: '/helpsupport' },
// ];

// export default function Sidebar({ show }) {

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // clear storage if needed
//     localStorage.clear();

//     // redirect to home page
//     navigate("/");
//   };

//   return (
//     <div className={`sidebar ${show ? 'show' : ''}`}>
      
//       <div className="p-4 text-center">
//         {/* <div 
//           className="d-inline-flex align-items-center justify-content-center p-2 bg-white bg-opacity-25 rounded-circle mb-3"
//           style={{ width: '64px', height: '64px' }}
//         >
//           <svg viewBox="0 0 100 100" className="w-100 h-100 text-white fill-current">
//             <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="8" />
//             <circle cx="50" cy="50" r="20" />
//             <path d="M30 50 L70 50 M50 30 L50 70" stroke="currentColor" strokeWidth="8" />
//           </svg>
//         </div> */}

//         <img src={Logos} className='img-fluid w-50' alt="Image-Not-Found" />

//         <h1 className="text-white h4 fw-bold mb-0">
//           ThaiXO Social
//         </h1>
//       </div>

//       <nav className="mt-4 flex-grow-1">

//         {menuItems.map((item, index) => {

//           const Icon = item.icon;

//           return (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 `sidebar-item text-decoration-none mt-3 ${
//                   isActive ? 'sidebar-item-active' : ''
//                 }`
//               }
//             >
//               <Icon size={20} />
//               <span className="small fw-medium">
//                 {item.label}
//               </span>
//             </NavLink>
//           );

//         })}

//       </nav>

//       <div className="p-3 border-top border-white border-opacity-10">

//         <div
//           onClick={handleLogout}
//           className="sidebar-item"
//           style={{ cursor: "pointer" }}
//         >
//           <LogOut size={20} />
//           <span className="small fw-medium">
//             Log out
//           </span>
//         </div>

//       </div>

//     </div>
//   );
// }

























// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { 
//   Home, 
//   Wallet, 
//   History, 
//   UserCheck, 
//   Trophy, 
//   Video, 
//   HelpCircle, 
//   LogOut 
// } from 'lucide-react';
// import axios from 'axios';
// import Logos from "../assets/Logo.png";

// const menuItems = [
//   { icon: Home, label: 'Home', path: '/dashboard' },
//   { icon: Wallet, label: 'My Earnings', path: '/IncomeDashboard' },
//   { icon: History, label: 'Pay Out History', path: '/WithdrawalHistory' },
//   { icon: UserCheck, label: 'Verify Identity', path: '/CreatorSection' },
//   { icon: Trophy, label: 'Milestone', path: '/Milestone' },
//   { icon: Video, label: 'Video Call History', path: '/VideoCallHistory' },
//   { icon: HelpCircle, label: 'Help & Support', path: '/helpsupport' },
// ];

// export default function Sidebar({ show }) {
//   const navigate = useNavigate();
//   const [isLoggingOut, setIsLoggingOut] = React.useState(false);

//   const handleLogout = async () => {
//     if (isLoggingOut) return; // Prevent multiple logout clicks
    
//     try {
//       setIsLoggingOut(true);
      
//       const token = localStorage.getItem("token");
//       console.log("Logout token:", token);
      
//       if (!token) {
//         console.log("No token found, redirecting to login");
//         localStorage.clear();
//         navigate("/");
//         return;
//       }
      
//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/logout`;
//       console.log("Logout API URL:", apiUrl);
      
//       const response = await axios.post(apiUrl, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${token}`
//         },
//         withCredentials: true,
//       });
      
//       console.log("Logout API Response:", response);
//       const data = response.data;
      
//       // Check if login is required (token might be invalid)
//       if (data.loginRequired) {
//         console.log("Login required - token may be invalid");
//         // Still clear local storage and redirect
//         localStorage.clear();
//         navigate("/");
//         return;
//       }
      
//       if (data.success) {
//         console.log("Logout successful:", data.message);
//         // Clear all local storage data
//         localStorage.clear();
//         // Redirect to login page
//         navigate("/");
//       } else {
//         console.log("Logout failed:", data.message);
//         // Still clear local storage and redirect even if API fails
//         localStorage.clear();
//         navigate("/");
//       }
//     } catch (err) {
//       console.error("Error during logout:", err);
//       console.error("Error response:", err.response);
      
//       // Even if API call fails, clear local storage and redirect
//       localStorage.clear();
//       navigate("/");
//     } finally {
//       setIsLoggingOut(false);
//     }
//   };

//   return (
//     <div className={`sidebar ${show ? 'show' : ''}`}>
      
//       <div className="p-4 text-center">
//         <img src={Logos} className='img-fluid w-50' alt="Image-Not-Found" />
//         <h1 className="text-white h4 fw-bold mb-0">
//           ThaiXO Social
//         </h1>
//       </div>

//       <nav className="mt-4 flex-grow-1">
//         {menuItems.map((item, index) => {
//           const Icon = item.icon;
//           return (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 `sidebar-item text-decoration-none mt-3 ${
//                   isActive ? 'sidebar-item-active' : ''
//                 }`
//               }
//             >
//               <Icon size={20} />
//               <span className="small fw-medium">
//                 {item.label}
//               </span>
//             </NavLink>
//           );
//         })}
//       </nav>

//       <div className="p-3 border-top border-white border-opacity-10">
//         <div
//           onClick={handleLogout}
//           className={`sidebar-item ${isLoggingOut ? 'opacity-50' : ''}`}
//           style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//         >
//           {isLoggingOut ? (
//             <>
//               <div className="spinner-border spinner-border-sm me-2" role="status" style={{ color: '#fff', width: '16px', height: '16px' }}>
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <span className="small fw-medium">Logging out...</span>
//             </>
//           ) : (
//             <>
//               <LogOut size={20} />
//               <span className="small fw-medium">Log out</span>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }














// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { 
//   Home, 
//   Wallet, 
//   History, 
//   UserCheck, 
//   Trophy, 
//   Video, 
//   HelpCircle, 
//   LogOut 
// } from 'lucide-react';
// import axios from 'axios';
// import Logos from "../assets/Logo.png";

// // Translations
// const translations = {
//   en: {
//     title: "ThaiXO Social",
//     menu: {
//       Home: "Home",
//       "My Earnings": "My Earnings",
//       "Pay Out History": "Pay Out History",
//       "Verify Identity": "Verify Identity",
//       Milestone: "Milestone",
//       "Video Call History": "Video Call History",
//       "Help & Support": "Help & Support",
//     },
//     logout: "Log out",
//     loggingOut: "Logging out...",
//     language: "Language",
//   },
//   th: {
//     title: "ไทยXO โซเชียล",
//     menu: {
//       Home: "หน้าหลัก",
//       "My Earnings": "รายได้ของฉัน",
//       "Pay Out History": "ประวัติการจ่ายเงิน",
//       "Verify Identity": "ยืนยันตัวตน",
//       Milestone: "เป้าหมาย",
//       "Video Call History": "ประวัติการสนทนาวิดีโอ",
//       "Help & Support": "ช่วยเหลือและสนับสนุน",
//     },
//     logout: "ออกจากระบบ",
//     loggingOut: "กำลังออกจากระบบ...",
//     language: "ภาษา",
//   },
// };

// const menuItems = [
//   { icon: Home, labelKey: 'Home', path: '/dashboard' },
//   { icon: Wallet, labelKey: 'My Earnings', path: '/IncomeDashboard' },
//   { icon: History, labelKey: 'Pay Out History', path: '/WithdrawalHistory' },
//   { icon: UserCheck, labelKey: 'Verify Identity', path: '/CreatorSection' },
//   { icon: UserCheck, labelKey: 'Withdrawal', path: '/Withdrawal' },
//   { icon: Trophy, labelKey: 'Milestone', path: '/Milestone' },
//   { icon: Video, labelKey: 'Video Call History', path: '/VideoCallHistory' },
//   { icon: HelpCircle, labelKey: 'Help & Support', path: '/helpsupport' },
// ];

// export default function Sidebar({ show }) {
//   const navigate = useNavigate();
//   const [isLoggingOut, setIsLoggingOut] = React.useState(false);
//   const [language, setLanguage] = React.useState(() => {
//     // Initialize from localStorage or default to 'en'
//     return localStorage.getItem('appLanguage') || 'en';
//   });

//   const t = translations[language];

//   // Update localStorage and notify other tabs/windows
//   const updateLanguage = (newLang) => {
//     localStorage.setItem('appLanguage', newLang);
//     setLanguage(newLang);
//     // Dispatch a custom event so Header (if open in another tab) can sync
//     window.dispatchEvent(new Event('storage'));
//   };

//   const toggleLanguage = () => {
//     const newLang = language === 'en' ? 'th' : 'en';
//     updateLanguage(newLang);
//   };

//   // Listen for storage changes (when Header updates language)
//   React.useEffect(() => {
//     const handleStorageChange = () => {
//       const storedLang = localStorage.getItem('appLanguage');
//       if (storedLang && storedLang !== language) {
//         setLanguage(storedLang);
//       }
//     };
//     window.addEventListener('storage', handleStorageChange);
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, [language]);

//   const handleLogout = async () => {
//     if (isLoggingOut) return;
    
//     try {
//       setIsLoggingOut(true);
      
//       const token = localStorage.getItem("token");
//       console.log("Logout token:", token);
      
//       if (!token) {
//         console.log("No token found, redirecting to login");
//         localStorage.clear();
//         navigate("/");
//         return;
//       }
      
//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/logout`;
//       console.log("Logout API URL:", apiUrl);
      
//       const response = await axios.post(apiUrl, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${token}`
//         },
//         withCredentials: true,
//       });
      
//       console.log("Logout API Response:", response);
//       const data = response.data;
      
//       if (data.loginRequired) {
//         console.log("Login required - token may be invalid");
//         localStorage.clear();
//         navigate("/");
//         return;
//       }
      
//       if (data.success) {
//         console.log("Logout successful:", data.message);
//         localStorage.clear();
//         navigate("/");
//       } else {
//         console.log("Logout failed:", data.message);
//         localStorage.clear();
//         navigate("/");
//       }
//     } catch (err) {
//       console.error("Error during logout:", err);
//       localStorage.clear();
//       navigate("/");
//     } finally {
//       setIsLoggingOut(false);
//     }
//   };

//   return (
//     <div className={`sidebar ${show ? 'show' : ''}`}>
      
//       <div className="p-4 text-center">
//         <img src={Logos} className='img-fluid w-50' alt="Image-Not-Found" />
//         <h1 className="text-white h4 fw-bold mb-0">
//           {t.title}
//         </h1>
//       </div>

//       <nav className="mt-4 flex-grow-1">
//         {menuItems.map((item, index) => {
//           const Icon = item.icon;
//           return (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 `sidebar-item text-decoration-none mt-3 ${
//                   isActive ? 'sidebar-item-active' : ''
//                 }`
//               }
//             >
//               <Icon size={20} />
//               <span className="small fw-medium">
//                 {t.menu[item.labelKey]}
//               </span>
//             </NavLink>
//           );
//         })}
//       </nav>

//       <div className="p-3 border-top border-white border-opacity-10">
//         {/* Language Toggle */}
//         {/* <div className="d-flex justify-content-between align-items-center mb-3 px-2">
//           <span className="text-white small">{t.language}</span>
//           <button 
//             onClick={toggleLanguage}
//             className="btn btn-sm btn-outline-light"
//             style={{ borderRadius: '20px', padding: '2px 10px' }}
//           >
//             {language === 'en' ? 'ไทย' : 'English'}
//           </button>
//         </div> */}

//         {/* Logout Button */}
//         <div
//           onClick={handleLogout}
//           className={`sidebar-item ${isLoggingOut ? 'opacity-50' : ''}`}
//           style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//         >
//           {isLoggingOut ? (
//             <>
//               <div className="spinner-border spinner-border-sm me-2" role="status" style={{ color: '#fff', width: '16px', height: '16px' }}>
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <span className="small fw-medium">{t.loggingOut}</span>
//             </>
//           ) : (
//             <>
//               <LogOut size={20} />
//               <span className="small fw-medium">{t.logout}</span>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }















// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {
//   Home,
//   Wallet,
//   History,
//   UserCheck,
//   Trophy,
//   Video,
//   HelpCircle,
//   LogOut,
//   CreditCard,
// } from 'lucide-react';
// import axios from 'axios';
// import Logos from "../assets/Logoos.png";

// // ── Translations ───────────────────────────────────────────────────────────────
// const translations = {
//   en: {
//     title: "ThaiXO Social",
//     menu: {
//       Home: "Home",
//       "My Earnings": "My Earnings",
//       "Pay Out History": "Pay Out History",
//       "Verify Identity": "Verify Identity",
//       Milestone: "Milestone",
//       "Video Call History": "Video Call History",
//       "Help & Support": "Help & Support",
//       Withdrawal: "Withdrawal",       // ✅ ADDED — was missing, caused undefined label
//     },
//     logout: "Log out",
//     loggingOut: "Logging out...",
//     language: "Language",
//   },
//   th: {
//     title: "ไทยXO โซเชียล",
//     menu: {
//       Home: "หน้าหลัก",
//       "My Earnings": "รายได้ของฉัน",
//       "Pay Out History": "ประวัติการจ่ายเงิน",
//       "Verify Identity": "ยืนยันตัวตน",
//       Milestone: "เป้าหมาย",
//       "Video Call History": "ประวัติการสนทนาวิดีโอ",
//       "Help & Support": "ช่วยเหลือและสนับสนุน",
//       Withdrawal: "ถอนเงิน",          // ✅ ADDED — Thai translation for Withdrawal
//     },
//     logout: "ออกจากระบบ",
//     loggingOut: "กำลังออกจากระบบ...",
//     language: "ภาษา",
//   },
// };

// // ── Menu Items ─────────────────────────────────────────────────────────────────
// const menuItems = [
//   { icon: Home,       labelKey: 'Home',               path: '/dashboard' },
//   { icon: Wallet,     labelKey: 'My Earnings',         path: '/IncomeDashboard' },
//   { icon: History,    labelKey: 'Pay Out History',     path: '/WithdrawalHistory' },
//   { icon: UserCheck,  labelKey: 'Verify Identity',     path: '/CreatorSelection' },
//   { icon: CreditCard, labelKey: 'Withdrawal',          path: '/Withdrawal' },  // ✅ proper icon
//   { icon: Trophy,     labelKey: 'Milestone',           path: '/Milestone' },
//   { icon: Video,      labelKey: 'Video Call History',  path: '/VideoCallHistory' },
//   { icon: HelpCircle, labelKey: 'Help & Support',      path: '/helpsupport' },
// ];

// // ── Sidebar ────────────────────────────────────────────────────────────────────
// export default function Sidebar({ show }) {
//   const navigate = useNavigate();
//   const [isLoggingOut, setIsLoggingOut] = React.useState(false);
//   const [language, setLanguage] = React.useState(() => {
//     return localStorage.getItem('appLanguage') || 'en';
//   });

//   const t = translations[language];

//   const updateLanguage = (newLang) => {
//     localStorage.setItem('appLanguage', newLang);
//     setLanguage(newLang);
//     window.dispatchEvent(new Event('storage'));
//   };

//   React.useEffect(() => {
//     const handleStorageChange = () => {
//       const storedLang = localStorage.getItem('appLanguage');
//       if (storedLang && storedLang !== language) {
//         setLanguage(storedLang);
//       }
//     };
//     window.addEventListener('storage', handleStorageChange);
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, [language]);

//   const handleLogout = async () => {
//     if (isLoggingOut) return;
//     try {
//       setIsLoggingOut(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         localStorage.clear();
//         navigate("/");
//         return;
//       }
//       const response = await axios.post(
//         `${import.meta.env.VITE_SERVER_URL}/logout`,
//         {},
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `${token}`,
//           },
//           withCredentials: true,
//         }
//       );
//       const data = response.data;
//       localStorage.clear();
//       navigate("/");
//     } catch (err) {
//       console.error("Error during logout:", err);
//       localStorage.clear();
//       navigate("/");
//     } finally {
//       setIsLoggingOut(false);
//     }
//   };

//   return (
//     <div className={`sidebar ${show ? 'show' : ''}`}>

//       {/* Logo */}
//       <div className="p-4 text-center pb-2">
//         {/* <img src={Logos} className="img-fluid w-50" alt="Logo" /> */}
//         <img src={Logos} className="img-fluid w-50" alt="Logo" />
//         <h1 className="text-white h4 fw-bold mt-3">{t.title}</h1>
//       </div>

//       {/* Nav Items */}
//       <nav className="mt-2 flex-grow-1">
//         {menuItems.map((item, index) => {
//           const Icon = item.icon;
//           return (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 // ✅ FIX: explicitly apply active/inactive class based on isActive flag
//                 `sidebar-item text-decoration-none mt-3 ${
//                   isActive ? 'sidebar-item-active' : 'sidebar-item-inactive'
//                 }`
//               }
//             >
//               <Icon size={20} />
//               <span className="small fw-medium">
//                 {/* ✅ FIX: fallback to labelKey if translation is missing */}
//                 {t.menu[item.labelKey] || item.labelKey}
//               </span>
//             </NavLink>
//           );
//         })}
//       </nav>

//       {/* Logout */}
//       <div className="p-3 border-top border-white border-opacity-10">
//         <div
//           onClick={handleLogout}
//           className={`sidebar-item sidebar-item-inactive ${isLoggingOut ? 'opacity-50' : ''}`}
//           style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//         >
//           {isLoggingOut ? (
//             <>
//               <div
//                 className="spinner-border spinner-border-sm me-2"
//                 role="status"
//                 style={{ color: '#fff', width: '16px', height: '16px' }}
//               >
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <span className="small fw-medium">{t.loggingOut}</span>
//             </>
//           ) : (
//             <>
//               <LogOut size={20} />
//               <span className="small fw-medium">{t.logout}</span>
//             </>
//           )}
//         </div>
//       </div>

//     </div>
//   );
// }
















// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {
//   Home,
//   Wallet,
//   History,
//   UserCheck,
//   Trophy,
//   Video,
//   HelpCircle,
//   LogOut,
//   CreditCard,
//   X,                    // ← Added Close Icon
// } from 'lucide-react';
// import axios from 'axios';
// import Logos from "../assets/Logoos.png";
// // import "../css/Sidebar.css";


// // ── Translations ───────────────────────────────────────────────────────────────
// const translations = {
//   en: {
//     title: "ThaiXO Social",
//     menu: {
//       Home: "Home",
//       "My Earnings": "My Earnings",
//       "Pay Out History": "Pay Out History",
//       "Verify Identity": "Verify Identity",
//       Milestone: "Milestone",
//       "Video Call History": "Video Call History",
//       "Help & Support": "Help & Support",
//       Withdrawal: "Withdrawal",
//     },
//     logout: "Log out",
//     loggingOut: "Logging out...",
//     language: "Language",
//   },
//   th: {
//     title: "ไทยXO โซเชียล",
//     menu: {
//       Home: "หน้าหลัก",
//       "My Earnings": "รายได้ของฉัน",
//       "Pay Out History": "ประวัติการจ่ายเงิน",
//       "Verify Identity": "ยืนยันตัวตน",
//       Milestone: "เป้าหมาย",
//       "Video Call History": "ประวัติการสนทนาวิดีโอ",
//       "Help & Support": "ช่วยเหลือและสนับสนับสนุน",
//       Withdrawal: "ถอนเงิน",
//     },
//     logout: "ออกจากระบบ",
//     loggingOut: "กำลังออกจากระบบ...",
//     language: "ภาษา",
//   },
// };

// // ── Menu Items ─────────────────────────────────────────────────────────────────
// const menuItems = [
//   { icon: Home,       labelKey: 'Home',               path: '/dashboard' },
//   { icon: Wallet,     labelKey: 'My Earnings',        path: '/IncomeDashboard' },
//   { icon: History,    labelKey: 'Pay Out History',    path: '/WithdrawalHistory' },
//   { icon: UserCheck,  labelKey: 'Verify Identity',    path: '/CreatorSelection' },
//   { icon: CreditCard, labelKey: 'Withdrawal',         path: '/Withdrawal' },
//   { icon: Trophy,     labelKey: 'Milestone',          path: '/Milestone' },
//   { icon: Video,      labelKey: 'Video Call History', path: '/VideoCallHistory' },
//   { icon: HelpCircle, labelKey: 'Help & Support',     path: '/helpsupport' },
// ];

// // ── Sidebar Component ─────────────────────────────────────────────────────────
// export default function Sidebar({ show, onClose }) {
//   const navigate = useNavigate();
//   const [isLoggingOut, setIsLoggingOut] = React.useState(false);
//   const [language, setLanguage] = React.useState(() => {
//     return localStorage.getItem('appLanguage') || 'en';
//   });

//   const t = translations[language];

//   const updateLanguage = (newLang) => {
//     localStorage.setItem('appLanguage', newLang);
//     setLanguage(newLang);
//     window.dispatchEvent(new Event('storage'));
//   };

//   React.useEffect(() => {
//     const handleStorageChange = () => {
//       const storedLang = localStorage.getItem('appLanguage');
//       if (storedLang && storedLang !== language) {
//         setLanguage(storedLang);
//       }
//     };
//     window.addEventListener('storage', handleStorageChange);
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, [language]);

//   const handleLogout = async () => {
//     if (isLoggingOut) return;
//     try {
//       setIsLoggingOut(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         localStorage.clear();
//         navigate("/");
//         return;
//       }
//       await axios.post(
//         `${import.meta.env.VITE_SERVER_URL}/logout`,
//         {},
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `${token}`,
//           },
//           withCredentials: true,
//         }
//       );
//       localStorage.clear();
//       navigate("/");
//     } catch (err) {
//       console.error("Error during logout:", err);
//       localStorage.clear();
//       navigate("/");
//     } finally {
//       setIsLoggingOut(false);
//     }
//   };

//   return (
//     <div className={`sidebar ${show ? 'show' : ''}`}>

//       {/* Close Button - Visible only on Mobile & Tablet */}
//       <button
//         className="sidebar-close-btn d-lg-none bg-transparent text-white mt-1" style={{marginLeft:'220px' , border:'none'}}  
//         onClick={onClose}
//         aria-label="Close Sidebar"
//       >
//         <X size={28} />
//       </button>

//       {/* Logo Section */}
//       <div className="p-4 text-center pb-2">
//         <img src={Logos} className="img-fluid w-50" alt="ThaiXO Logo" />
//         <h1 className="text-white h4 fw-bold mt-3">{t.title}</h1>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="mt-2 flex-grow-1">
//         {menuItems.map((item, index) => {
//           const Icon = item.icon;
//           return (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 `sidebar-item text-decoration-none mt-2 ${
//                   isActive ? 'sidebar-item-active' : 'sidebar-item-inactive'
//                 }`
//               }
//               onClick={onClose}   // ← Close sidebar when clicking any menu item on mobile
//             >
//               <Icon size={20} />
//               <span className="small fw-medium">
//                 {t.menu[item.labelKey] || item.labelKey}
//               </span>
//             </NavLink>
//           );
//         })}
//       </nav>

//       {/* Logout Section */}
//       <div className="p-3 border-top border-white border-opacity-10 mt-auto">
//         <div
//           onClick={handleLogout}
//           className={`sidebar-item sidebar-item-inactive ${isLoggingOut ? 'opacity-50' : ''}`}
//           style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//         >
//           {isLoggingOut ? (
//             <>
//               <div
//                 className="spinner-border spinner-border-sm me-2"
//                 role="status"
//                 style={{ color: '#fff', width: '16px', height: '16px' }}
//               >
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <span className="small fw-medium">{t.loggingOut}</span>
//             </>
//           ) : (
//             <>
//               <LogOut size={20} />
//               <span className="small fw-medium">{t.logout}</span>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }











// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {
//   Home,
//   Wallet,
//   History,
//   UserCheck,
//   Trophy,
//   Video,
//   HelpCircle,
//   LogOut,
//   CreditCard,
//   X,
// } from 'lucide-react';
// import axios from 'axios';
// import { Modal, Button } from 'react-bootstrap'; // ← Added for confirmation modal
// import Logos from "../assets/Logoos.png";
// // import "../css/Sidebar.css";

// // ── Translations ───────────────────────────────────────────────────────────────
// const translations = {
//   en: {
//     title: "ThaiXO Social",
//     menu: {
//       Home: "Home",
//       "My Earnings": "My Earnings",
//       "Pay Out History": "Pay Out History",
//       "Verify Identity": "Verify Identity",
//       Milestone: "Milestone",
//       "Video Call History": "Video Call History",
//       "Help & Support": "Help & Support",
//       Withdrawal: "Withdrawal",
//     },
//     logout: "Log out",
//     loggingOut: "Logging out...",
//     language: "Language",
//     logoutConfirmTitle: "Confirm Logout",
//     logoutConfirmMessage: "Are you sure you want to log out?",
//     cancel: "Cancel",
//     confirmLogout: "Logout",
//   },
//   th: {
//     title: "ไทยXO โซเชียล",
//     menu: {
//       Home: "หน้าหลัก",
//       "My Earnings": "รายได้ของฉัน",
//       "Pay Out History": "ประวัติการจ่ายเงิน",
//       "Verify Identity": "ยืนยันตัวตน",
//       Milestone: "เป้าหมาย",
//       "Video Call History": "ประวัติการสนทนาวิดีโอ",
//       "Help & Support": "ช่วยเหลือและสนับสนับสนุน",
//       Withdrawal: "ถอนเงิน",
//     },
//     logout: "ออกจากระบบ",
//     loggingOut: "กำลังออกจากระบบ...",
//     language: "ภาษา",
//     logoutConfirmTitle: "ยืนยันการออกจากระบบ",
//     logoutConfirmMessage: "คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?",
//     cancel: "ยกเลิก",
//     confirmLogout: "ออกจากระบบ",
//   },
// };

// // ── Menu Items ─────────────────────────────────────────────────────────────────
// const menuItems = [
//   { icon: Home,       labelKey: 'Home',               path: '/dashboard' },
//   { icon: Wallet,     labelKey: 'My Earnings',        path: '/IncomeDashboard' },
//   { icon: History,    labelKey: 'Pay Out History',    path: '/WithdrawalHistory' },
//   { icon: UserCheck,  labelKey: 'Verify Identity',    path: '/CreatorSelection' },
//   { icon: CreditCard, labelKey: 'Withdrawal',         path: '/Withdrawal' },
//   { icon: Trophy,     labelKey: 'Milestone',          path: '/Milestone' },
//   { icon: Video,      labelKey: 'Video Call History', path: '/VideoCallHistory' },
//   { icon: HelpCircle, labelKey: 'Help & Support',     path: '/helpsupport' },
// ];

// // ── Sidebar Component ─────────────────────────────────────────────────────────
// export default function Sidebar({ show, onClose }) {
//   const navigate = useNavigate();
//   const [isLoggingOut, setIsLoggingOut] = React.useState(false);
//   const [showLogoutModal, setShowLogoutModal] = React.useState(false); // ← Modal state
//   const [language, setLanguage] = React.useState(() => {
//     return localStorage.getItem('appLanguage') || 'en';
//   });

//   const t = translations[language];

//   const updateLanguage = (newLang) => {
//     localStorage.setItem('appLanguage', newLang);
//     setLanguage(newLang);
//     window.dispatchEvent(new Event('storage'));
//   };

//   React.useEffect(() => {
//     const handleStorageChange = () => {
//       const storedLang = localStorage.getItem('appLanguage');
//       if (storedLang && storedLang !== language) {
//         setLanguage(storedLang);
//       }
//     };
//     window.addEventListener('storage', handleStorageChange);
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, [language]);

//   const handleLogout = async () => {
//     if (isLoggingOut) return;
//     try {
//       setIsLoggingOut(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         localStorage.clear();
//         navigate("/");
//         return;
//       }
//       await axios.post(
//         `${import.meta.env.VITE_SERVER_URL}/logout`,
//         {},
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `${token}`,
//           },
//           withCredentials: true,
//         }
//       );
//       localStorage.clear();
//       navigate("/");
//     } catch (err) {
//       console.error("Error during logout:", err);
//       localStorage.clear();
//       navigate("/");
//     } finally {
//       setIsLoggingOut(false);
//       setShowLogoutModal(false); // ← Close modal after logout
//     }
//   };

//   const handleLogoutClick = () => {
//     setShowLogoutModal(true); // Show confirmation modal
//   };

//   const handleCancelLogout = () => {
//     setShowLogoutModal(false); // Close modal, stay on page
//   };

//   return (
//     <div className={`sidebar ${show ? 'show' : ''}`}>
//       {/* Close Button - Visible only on Mobile & Tablet */}
//       <button
//         className="sidebar-close-btn d-lg-none bg-transparent text-white mt-1"
//         style={{ marginLeft: '220px', border: 'none' }}
//         onClick={onClose}
//         aria-label="Close Sidebar"
//       >
//         <X size={28} />
//       </button>

//       {/* Logo Section */}
//       <div className="p-4 text-center pb-2">
//         <img src={Logos} className="w-50" alt="ThaiXO Logo" />
//         <h1 className="text-white h4 fw-bold mt-3">{t.title}</h1>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="mt-2 flex-grow-1">
//         {menuItems.map((item, index) => {
//           const Icon = item.icon;
//           return (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 `sidebar-item text-decoration-none mt-2 ${
//                   isActive ? 'sidebar-item-active' : 'sidebar-item-inactive'
//                 }`
//               }
//               onClick={onClose}
//             >
//               <Icon size={20} />
//               <span className="small fw-medium">
//                 {t.menu[item.labelKey] || item.labelKey}
//               </span>
//             </NavLink>
//           );
//         })}
//       </nav>

//       {/* Logout Section */}
//       <div className="p-3 border-top border-white border-opacity-10 mt-auto">
//         <div
//           onClick={handleLogoutClick}
//           className={`sidebar-item sidebar-item-inactive ${isLoggingOut ? 'opacity-50' : ''}`}
//           style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//         >
//           {isLoggingOut ? (
//             <>
//               <div
//                 className="spinner-border spinner-border-sm me-2"
//                 role="status"
//                 style={{ color: '#fff', width: '16px', height: '16px' }}
//               >
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <span className="small fw-medium">{t.loggingOut}</span>
//             </>
//           ) : (
//             <>
//               <LogOut size={20} />
//               <span className="small fw-medium">{t.logout}</span>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Logout Confirmation Modal */}
//       <Modal
//         show={showLogoutModal}
//         onHide={handleCancelLogout}
//         centered
//         backdrop="static"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{t.logoutConfirmTitle}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{t.logoutConfirmMessage}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCancelLogout}>
//             {t.cancel}
//           </Button>
//           <Button variant="danger" onClick={handleLogout} disabled={isLoggingOut}>
//             {isLoggingOut ? t.loggingOut : t.confirmLogout}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }












// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {
//   Home,
//   Wallet,
//   History,
//   UserCheck,
//   Trophy,
//   Video,
//   HelpCircle,
//   LogOut,
//   CreditCard,
//   X,
// } from 'lucide-react';
// import axios from 'axios';
// import { Modal, Button } from 'react-bootstrap';
// import Logos from "../assets/Logoos.png";

// // ── Translations ───────────────────────────────────────────────────────────────
// const translations = {
//   en: {
//     title: "ThaiXO Social",
//     menu: {
//       Home: "Home",
//       "My Earnings": "My Earnings",
//       "Pay Out History": "Pay Out History",
//       "Verify Identity": "Verify Identity",
//       Milestone: "Milestone",
//       "Video Call History": "Video Call History",
//       "Help & Support": "Help & Support",
//       Withdrawal: "Withdrawal",
//     },
//     logout: "Log out",
//     loggingOut: "Logging out...",
//     language: "Language",
//     logoutConfirmTitle: "Confirm Logout",
//     logoutConfirmMessage: "Are you sure you want to log out?",
//     cancel: "Cancel",
//     confirmLogout: "Logout",
//   },
//   th: {
//     title: "ไทยXO โซเชียล",
//     menu: {
//       Home: "หน้าหลัก",
//       "My Earnings": "รายได้ของฉัน",
//       "Pay Out History": "ประวัติการจ่ายเงิน",
//       "Verify Identity": "ยืนยันตัวตน",
//       Milestone: "เป้าหมาย",
//       "Video Call History": "ประวัติการสนทนาวิดีโอ",
//       "Help & Support": "ช่วยเหลือและสนับสนับสนุน",
//       Withdrawal: "ถอนเงิน",
//     },
//     logout: "ออกจากระบบ",
//     loggingOut: "กำลังออกจากระบบ...",
//     language: "ภาษา",
//     logoutConfirmTitle: "ยืนยันการออกจากระบบ",
//     logoutConfirmMessage: "คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?",
//     cancel: "ยกเลิก",
//     confirmLogout: "ออกจากระบบ",
//   },
// };

// // ── Menu Items (with unique IDs) ──────────────────────────────────────────────
// const menuItems = [
//   { icon: Home,       labelKey: 'Home',               path: '/dashboard',        id: 'home' },
//   { icon: Wallet,     labelKey: 'My Earnings',        path: '/IncomeDashboard',  id: 'earnings' },
//   { icon: History,    labelKey: 'Pay Out History',    path: '/WithdrawalHistory', id: 'payout' },
//   { icon: UserCheck,  labelKey: 'Verify Identity',    path: '/CreatorSelection', id: 'verify' },
//   { icon: CreditCard, labelKey: 'Withdrawal',         path: '/Withdrawal',       id: 'withdrawal' },
//   { icon: Trophy,     labelKey: 'Milestone',          path: '/Milestone',        id: 'milestone' },
//   { icon: Video,      labelKey: 'Video Call History', path: '/VideoCallHistory', id: 'videohistory' },
//   { icon: HelpCircle, labelKey: 'Help & Support',     path: '/helpsupport',      id: 'help' },
// ];

// // ── Sidebar Component ─────────────────────────────────────────────────────────
// export default function Sidebar({ show, onClose, activeItem }) {
//   const navigate = useNavigate();
//   const [isLoggingOut, setIsLoggingOut] = React.useState(false);
//   const [showLogoutModal, setShowLogoutModal] = React.useState(false);
//   const [language, setLanguage] = React.useState(() => {
//     return localStorage.getItem('appLanguage') || 'en';
//   });

//   const t = translations[language];

//   const updateLanguage = (newLang) => {
//     localStorage.setItem('appLanguage', newLang);
//     setLanguage(newLang);
//     window.dispatchEvent(new Event('storage'));
//   };

//   React.useEffect(() => {
//     const handleStorageChange = () => {
//       const storedLang = localStorage.getItem('appLanguage');
//       if (storedLang && storedLang !== language) {
//         setLanguage(storedLang);
//       }
//     };
//     window.addEventListener('storage', handleStorageChange);
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, [language]);

//   const handleLogout = async () => {
//     if (isLoggingOut) return;
//     try {
//       setIsLoggingOut(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         localStorage.clear();
//         navigate("/");
//         return;
//       }
//       await axios.post(
//         `${import.meta.env.VITE_SERVER_URL}/logout`,
//         {},
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `${token}`,
//           },
//           withCredentials: true,
//         }
//       );
//       localStorage.clear();
//       navigate("/");
//     } catch (err) {
//       console.error("Error during logout:", err);
//       localStorage.clear();
//       navigate("/");
//     } finally {
//       setIsLoggingOut(false);
//       setShowLogoutModal(false);
//     }
//   };

//   const handleLogoutClick = () => {
//     setShowLogoutModal(true);
//   };

//   const handleCancelLogout = () => {
//     setShowLogoutModal(false);
//   };

//   return (
//     <div className={`sidebar ${show ? 'show' : ''}`}>
//       {/* Close Button - Mobile & Tablet */}
//       <button
//         className="sidebar-close-btn d-lg-none bg-transparent text-white mt-1"
//         style={{ marginLeft: '220px', border: 'none' }}
//         onClick={onClose}
//         aria-label="Close Sidebar"
//       >
//         <X size={28} />
//       </button>

//       {/* Logo Section */}
//       <div className="p-4 text-center pb-2">
//         <img src={Logos} className="w-50" alt="ThaiXO Logo" />
//         <h1 className="text-white h4 fw-bold mt-3">{t.title}</h1>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="mt-2 flex-grow-1">
//         {menuItems.map((item, index) => {
//           const Icon = item.icon;
//           // Determine active: either route matches OR activeItem prop matches the item id
//           const isActiveFromProp = activeItem === item.id;
//           return (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 `sidebar-item text-decoration-none mt-2 ${
//                   (isActive || isActiveFromProp) ? 'sidebar-item-active' : 'sidebar-item-inactive'
//                 }`
//               }
//               onClick={onClose}
//             >
//               <Icon size={20} />
//               <span className="small fw-medium">
//                 {t.menu[item.labelKey] || item.labelKey}
//               </span>
//             </NavLink>
//           );
//         })}
//       </nav>

//       {/* Logout Section */}
//       <div className="p-3 border-top border-white border-opacity-10 mt-auto">
//         <div
//           onClick={handleLogoutClick}
//           className={`sidebar-item sidebar-item-inactive ${isLoggingOut ? 'opacity-50' : ''}`}
//           style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//         >
//           {isLoggingOut ? (
//             <>
//               <div
//                 className="spinner-border spinner-border-sm me-2"
//                 role="status"
//                 style={{ color: '#fff', width: '16px', height: '16px' }}
//               >
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <span className="small fw-medium">{t.loggingOut}</span>
//             </>
//           ) : (
//             <>
//               <LogOut size={20} />
//               <span className="small fw-medium">{t.logout}</span>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Logout Confirmation Modal */}
//       <Modal
//         show={showLogoutModal}
//         onHide={handleCancelLogout}
//         centered
//         backdrop="static"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{t.logoutConfirmTitle}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{t.logoutConfirmMessage}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCancelLogout}>
//             {t.cancel}
//           </Button>
//           <Button variant="danger" onClick={handleLogout} disabled={isLoggingOut}>
//             {isLoggingOut ? t.loggingOut : t.confirmLogout}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

















// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {
//   Home,
//   Wallet,
//   History,
//   UserCheck,
//   Trophy,
//   Video,
//   HelpCircle,
//   LogOut,
//   CreditCard,
//   X,
// } from 'lucide-react';
// import axios from 'axios';
// import { Modal, Button } from 'react-bootstrap';
// import Logos from "../assets/Logoos.png";

// // ── Translations ───────────────────────────────────────────────────────────────
// const translations = {
//   en: {
//     title: "ThaiXO Social",
//     menu: {
//       Home: "Home",
//       "My Earnings": "My Earnings",
//       "Pay Out History": "Pay Out History",
//       "Verify Identity": "Verify Identity",
//       Milestone: "Milestone",
//       "Video Call History": "Video Call History",
//       "Help & Support": "Help & Support",
//       Withdrawal: "Withdrawal",
//     },
//     logout: "Log out",
//     loggingOut: "Logging out...",
//     language: "Language",
//     logoutConfirmTitle: "Confirm Logout",
//     logoutConfirmMessage: "Are you sure you want to log out?",
//     cancel: "Cancel",
//     confirmLogout: "Logout",
//   },
//   th: {
//     title: "ไทยXO โซเชียล",
//     menu: {
//       Home: "หน้าหลัก",
//       "My Earnings": "รายได้ของฉัน",
//       "Pay Out History": "ประวัติการจ่ายเงิน",
//       "Verify Identity": "ยืนยันตัวตน",
//       Milestone: "เป้าหมาย",
//       "Video Call History": "ประวัติการสนทนาวิดีโอ",
//       "Help & Support": "ช่วยเหลือและสนับสนับสนุน",
//       Withdrawal: "ถอนเงิน",
//     },
//     logout: "ออกจากระบบ",
//     loggingOut: "กำลังออกจากระบบ...",
//     language: "ภาษา",
//     logoutConfirmTitle: "ยืนยันการออกจากระบบ",
//     logoutConfirmMessage: "คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?",
//     cancel: "ยกเลิก",
//     confirmLogout: "ออกจากระบบ",
//   },
// };

// // ── Menu Items (with unique IDs) ──────────────────────────────────────────────
// const menuItems = [
//   { icon: Home,       labelKey: 'Home',               path: '/dashboard',        id: 'home' },
//   { icon: Wallet,     labelKey: 'My Earnings',        path: '/IncomeDashboard',  id: 'earnings' },
//   { icon: History,    labelKey: 'Pay Out History',    path: '/WithdrawalHistory', id: 'payout' },
//   { icon: UserCheck,  labelKey: 'Verify Identity',    path: '/CreatorSelection', id: 'verify' },
//   { icon: CreditCard, labelKey: 'Withdrawal',         path: '/Withdrawal',       id: 'withdrawal' },
//   { icon: Trophy,     labelKey: 'Milestone',          path: '/Milestone',        id: 'milestone' },
//   { icon: Video,      labelKey: 'Video Call History', path: '/VideoCallHistory', id: 'videohistory' },
//   { icon: HelpCircle, labelKey: 'Help & Support',     path: '/helpsupport',      id: 'help' },
// ];

// // ── Sidebar Component ─────────────────────────────────────────────────────────
// export default function Sidebar({ show, onClose, activeItem }) {
//   const navigate = useNavigate();
//   const [isLoggingOut, setIsLoggingOut] = React.useState(false);
//   const [showLogoutModal, setShowLogoutModal] = React.useState(false);
//   const [language, setLanguage] = React.useState(() => {
//     return localStorage.getItem('appLanguage') || 'en';
//   });

//   const t = translations[language];

//   const updateLanguage = (newLang) => {
//     localStorage.setItem('appLanguage', newLang);
//     setLanguage(newLang);
//     window.dispatchEvent(new Event('storage'));
//   };

//   React.useEffect(() => {
//     const handleStorageChange = () => {
//       const storedLang = localStorage.getItem('appLanguage');
//       if (storedLang && storedLang !== language) {
//         setLanguage(storedLang);
//       }
//     };
//     window.addEventListener('storage', handleStorageChange);
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, [language]);

//   const handleLogout = async () => {
//     if (isLoggingOut) return;
//     try {
//       setIsLoggingOut(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         localStorage.clear();
//         navigate("/");
//         return;
//       }
//       await axios.post(
//         `${import.meta.env.VITE_SERVER_URL}/logout`,
//         {},
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `${token}`,
//           },
//           withCredentials: true,
//         }
//       );
//       localStorage.clear();
//       navigate("/");
//     } catch (err) {
//       console.error("Error during logout:", err);
//       localStorage.clear();
//       navigate("/");
//     } finally {
//       setIsLoggingOut(false);
//       setShowLogoutModal(false);
//     }
//   };

//   const handleLogoutClick = () => {
//     setShowLogoutModal(true);
//   };

//   const handleCancelLogout = () => {
//     setShowLogoutModal(false);
//   };

//   return (
//     <div className={`sidebar ${show ? 'show' : ''}`}>
//       {/* Close Button - Mobile & Tablet */}
//       <button
//         className="sidebar-close-btn d-lg-none bg-transparent text-white mt-1"
//         style={{ marginLeft: '220px', border: 'none' }}
//         onClick={onClose}
//         aria-label="Close Sidebar"
//       >
//         <X size={28} />
//       </button>

//       {/* Logo Section */}
//       <div className="p-4 text-center pb-2">
//         <img src={Logos} className="w-50" alt="ThaiXO Logo" />
//         <h1 className="text-white h4 fw-bold mt-3">{t.title}</h1>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="mt-2 flex-grow-1">
//         {menuItems.map((item, index) => {
//           const Icon = item.icon;
//           const isActiveFromProp = activeItem === item.id;
//           return (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 `sidebar-item text-decoration-none mt-2 ${
//                   (isActive || isActiveFromProp) ? 'sidebar-item-active' : 'sidebar-item-inactive'
//                 }`
//               }
//               onClick={onClose}
//             >
//               <Icon size={20} />
//               <span className="small fw-medium">
//                 {t.menu[item.labelKey] || item.labelKey}
//               </span>
//             </NavLink>
//           );
//         })}
//       </nav>

//       {/* Logout Section */}
//       <div className="p-3 border-top border-white border-opacity-10 mt-auto">
//         <div
//           onClick={handleLogoutClick}
//           className={`sidebar-item sidebar-item-inactive ${isLoggingOut ? 'opacity-50' : ''}`}
//           style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//         >
//           {isLoggingOut ? (
//             <>
//               <div
//                 className="spinner-border spinner-border-sm me-2"
//                 role="status"
//                 style={{ color: '#fff', width: '16px', height: '16px' }}
//               >
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <span className="small fw-medium">{t.loggingOut}</span>
//             </>
//           ) : (
//             <>
//               <LogOut size={20} />
//               <span className="small fw-medium">{t.logout}</span>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Logout Confirmation Modal */}
//       <Modal
//         show={showLogoutModal}
//         onHide={handleCancelLogout}
//         centered
//         backdrop="static"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{t.logoutConfirmTitle}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{t.logoutConfirmMessage}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCancelLogout}>
//             {t.cancel}
//           </Button>
//           <Button variant="danger" onClick={handleLogout} disabled={isLoggingOut}>
//             {isLoggingOut ? t.loggingOut : t.confirmLogout}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
















// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {
//   Home,
//   Wallet,
//   History,
//   UserCheck,
//   Trophy,
//   Video,
//   HelpCircle,
//   LogOut,
//   CreditCard,
//   X,
// } from 'lucide-react';
// import axios from 'axios';
// import { Modal, Button } from 'react-bootstrap';
// import Logos from "../assets/Logoos.png";

// // ── Translations (unchanged) ─────────────────────────────────────────────────
// const translations = {
//   en: {
//     title: "ThaiXO Social",
//     menu: {
//       Home: "Home",
//       "My Earnings": "My Earnings",
//       "Pay Out History": "Pay Out History",
//       "Verify Identity": "Verify Identity",
//       Milestone: "Milestone",
//       "Video Call History": "Video Call History",
//       "Help & Support": "Help & Support",
//       Withdrawal: "Withdrawal",
//     },
//     logout: "Log out",
//     loggingOut: "Logging out...",
//     language: "Language",
//     logoutConfirmTitle: "Confirm Logout",
//     logoutConfirmMessage: "Are you sure you want to log out?",
//     cancel: "Cancel",
//     confirmLogout: "Logout",
//   },
//   th: {
//     title: "ไทยXO โซเชียล",
//     menu: {
//       Home: "หน้าหลัก",
//       "My Earnings": "รายได้ของฉัน",
//       "Pay Out History": "ประวัติการจ่ายเงิน",
//       "Verify Identity": "ยืนยันตัวตน",
//       Milestone: "เป้าหมาย",
//       "Video Call History": "ประวัติการสนทนาวิดีโอ",
//       "Help & Support": "ช่วยเหลือและสนับสนับสนุน",
//       Withdrawal: "ถอนเงิน",
//     },
//     logout: "ออกจากระบบ",
//     loggingOut: "กำลังออกจากระบบ...",
//     language: "ภาษา",
//     logoutConfirmTitle: "ยืนยันการออกจากระบบ",
//     logoutConfirmMessage: "คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?",
//     cancel: "ยกเลิก",
//     confirmLogout: "ออกจากระบบ",
//   },
// };

// // ── Menu Items ───────────────────────────────────────────────────────────────
// const menuItems = [
//   { icon: Home,       labelKey: 'Home',               path: '/dashboard',        id: 'home' },
//   { icon: Wallet,     labelKey: 'My Earnings',        path: '/IncomeDashboard',  id: 'earnings' },
//   { icon: History,    labelKey: 'Pay Out History',    path: '/WithdrawalHistory', id: 'payout' },
//   { icon: UserCheck,  labelKey: 'Verify Identity',    path: '/CreatorSelection', id: 'verify' },
//   { icon: CreditCard, labelKey: 'Withdrawal',         path: '/Withdrawal',       id: 'withdrawal' },
//   { icon: Trophy,     labelKey: 'Milestone',          path: '/Milestone',        id: 'milestone' },
//   { icon: Video,      labelKey: 'Video Call History', path: '/VideoCallHistory', id: 'videohistory' },
//   { icon: HelpCircle, labelKey: 'Help & Support',     path: '/helpsupport',      id: 'help' },
// ];

// // ── Sidebar Component ────────────────────────────────────────────────────────
// export default function Sidebar({ show, onClose, activeItem }) {
//   const navigate = useNavigate();
//   const [isLoggingOut, setIsLoggingOut] = React.useState(false);
//   const [showLogoutModal, setShowLogoutModal] = React.useState(false);
//   const [language, setLanguage] = React.useState(() => {
//     return localStorage.getItem('appLanguage') || 'en';
//   });

//   const t = translations[language];

//   const updateLanguage = (newLang) => {
//     localStorage.setItem('appLanguage', newLang);
//     setLanguage(newLang);
//     window.dispatchEvent(new Event('storage'));
//   };

//   React.useEffect(() => {
//     const handleStorageChange = () => {
//       const storedLang = localStorage.getItem('appLanguage');
//       if (storedLang && storedLang !== language) {
//         setLanguage(storedLang);
//       }
//     };
//     window.addEventListener('storage', handleStorageChange);
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, [language]);

//   const handleLogout = async () => {
//     if (isLoggingOut) return;
//     try {
//       setIsLoggingOut(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         localStorage.clear();
//         navigate("/");
//         return;
//       }
//       await axios.post(
//         `${import.meta.env.VITE_SERVER_URL}/logout`,
//         {},
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `${token}`,
//           },
//           withCredentials: true,
//         }
//       );
//       localStorage.clear();
//       navigate("/");
//     } catch (err) {
//       console.error("Error during logout:", err);
//       localStorage.clear();
//       navigate("/");
//     } finally {
//       setIsLoggingOut(false);
//       setShowLogoutModal(false);
//     }
//   };

//   const handleLogoutClick = () => {
//     setShowLogoutModal(true);
//   };

//   const handleCancelLogout = () => {
//     setShowLogoutModal(false);
//   };

//   // Close sidebar when clicking on empty area inside, but not on interactive elements
//   const handleSidebarClick = (e) => {
//     // Only close if the click target is the sidebar background itself (not a link/button)
//     // and the sidebar is currently shown on mobile/tablet (controlled by 'show' prop)
//     const target = e.target;
//     const isInteractive =
//       target.closest('a') ||
//       target.closest('button') ||
//       target.closest('.dropdown') ||
//       target.closest('[role="button"]');

//     if (!isInteractive && onClose) {
//       onClose();
//     }
//   };

//   return (
//     <div
//       className={`sidebar ${show ? 'show' : ''}`}
//       onClick={handleSidebarClick}
//     >
//       {/* Close Button - Mobile & Tablet */}
//       <button
//         className="sidebar-close-btn d-lg-none bg-transparent text-white mt-1"
//         style={{ marginLeft: '220px', border: 'none' }}
//         onClick={(e) => {
//           e.stopPropagation(); // Prevent the sidebar click handler from firing again
//           onClose();
//         }}
//         aria-label="Close Sidebar"
//       >
//         <X size={28} />
//       </button>

//       {/* Logo Section */}
//       <div className="p-4 text-center pb-2">
//         <img src={Logos} className="w-50" alt="ThaiXO Logo" />
//         <h1 className="text-white h4 fw-bold mt-3">{t.title}</h1>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="mt-2 flex-grow-1">
//         {menuItems.map((item, index) => {
//           const Icon = item.icon;
//           const isActiveFromProp = activeItem === item.id;
//           return (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 `sidebar-item text-decoration-none mt-2 ${
//                   (isActive || isActiveFromProp) ? 'sidebar-item-active' : 'sidebar-item-inactive'
//                 }`
//               }
//               onClick={(e) => {
//                 // Prevent the sidebar background click from closing when clicking a link
//                 e.stopPropagation();
//                 onClose?.(); // Close after navigation (optional)
//               }}
//             >
//               <Icon size={20} />
//               <span className="small fw-medium">
//                 {t.menu[item.labelKey] || item.labelKey}
//               </span>
//             </NavLink>
//           );
//         })}
//       </nav>

//       {/* Logout Section */}
//       <div className="p-3 border-top border-white border-opacity-10 mt-auto">
//         <div
//           onClick={(e) => {
//             e.stopPropagation(); // Prevent sidebar close when clicking logout
//             handleLogoutClick();
//           }}
//           className={`sidebar-item sidebar-item-inactive ${isLoggingOut ? 'opacity-50' : ''}`}
//           style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//         >
//           {isLoggingOut ? (
//             <>
//               <div
//                 className="spinner-border spinner-border-sm me-2"
//                 role="status"
//                 style={{ color: '#fff', width: '16px', height: '16px' }}
//               >
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <span className="small fw-medium">{t.loggingOut}</span>
//             </>
//           ) : (
//             <>
//               <LogOut size={20} />
//               <span className="small fw-medium">{t.logout}</span>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Logout Confirmation Modal */}
//       <Modal
//         show={showLogoutModal}
//         onHide={handleCancelLogout}
//         centered
//         backdrop="static"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{t.logoutConfirmTitle}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{t.logoutConfirmMessage}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCancelLogout}>
//             {t.cancel}
//           </Button>
//           <Button variant="danger" onClick={handleLogout} disabled={isLoggingOut}>
//             {isLoggingOut ? t.loggingOut : t.confirmLogout}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }













import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Home,
  Wallet,
  History,
  UserCheck,
  Trophy,
  Video,
  HelpCircle,
  LogOut,
  CreditCard,
  X,
  Shield
} from 'lucide-react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import Logos from "../assets/Logoos.png";

// ── Menu Items (unchanged) ───────────────────────────────────────────────────
const menuItems = [
  { icon: Home,       labelKey: 'Home',               path: '/dashboard',        id: 'home' },
  { icon: Wallet,     labelKey: 'My Earnings',        path: '/IncomeDashboard',  id: 'earnings' },
  { icon: History,    labelKey: 'Pay Out History',    path: '/WithdrawalHistory', id: 'payout' },
  { icon: UserCheck,  labelKey: 'Verify Identity',    path: '/CreatorSelection', id: 'verify' },
  { icon: CreditCard, labelKey: 'Withdraw',           path: '/Withdrawal',       id: 'withdrawal' },
  { icon: Trophy,     labelKey: 'Milestone',          path: '/Milestone',        id: 'milestone' },
  { icon: Video,      labelKey: 'Video Call History', path: '/VideoCallHistory', id: 'videohistory' },
  { icon: HelpCircle, labelKey: 'Help & Support',     path: '/helpsupport',      id: 'help' },
  { icon: Shield, labelKey: 'Privacy-Policy',         path: '/privacy-policy',   id: 'privacy' },
];

// ── Sidebar Component ────────────────────────────────────────────────────────
export default function Sidebar({ show, onClose, activeItem }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = React.useState(false);
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    try {
      setIsLoggingOut(true);
      const token = localStorage.getItem("token");
      if (!token) {
        localStorage.clear();
        navigate("/");
        window.location.reload();
        return;
      }
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/logout`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
          },
          withCredentials: true,
        }
      );
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error("Error during logout:", err);
      localStorage.clear();
      navigate("/");
    } finally {
      setIsLoggingOut(false);
      setShowLogoutModal(false);
    }
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  // Close sidebar when clicking on empty area inside, but not on interactive elements
  const handleSidebarClick = (e) => {
    const target = e.target;
    const isInteractive =
      target.closest('a') ||
      target.closest('button') ||
      target.closest('.dropdown') ||
      target.closest('[role="button"]');

    if (!isInteractive && onClose) {
      onClose();
    }
  };

  // Helper to get translated label for menu items
  const getMenuLabel = (labelKey) => {
    // Map English labelKey to i18n keys (same as used in other components)
    const keyMap = {
      'Home': 'sidebar.home',
      'My Earnings': 'sidebar.myEarnings',
      'Pay Out History': 'sidebar.payOutHistory',
      'Verify Identity': 'sidebar.verifyIdentity',
      'Withdraw': 'sidebar.Withdraw',
      'Milestone': 'sidebar.milestone',
      'Video Call History': 'sidebar.videoCallHistory',
      'Privacy-Policy': 'sidebar.privacyPolicy',
      'Help & Support': 'sidebar.helpSupport',
    };
    return t(keyMap[labelKey] || labelKey);
  };

  // return (
  //   <div
  //     className={`sidebar ${show ? 'show' : ''}`}
  //     onClick={handleSidebarClick}
  //   >


  return (
  <>
    {show && (
      <div
        className="sidebar-overlay d-lg-none"
        onClick={onClose}
      />
    )}

    <div
      className={`sidebar ${show ? 'show' : ''}`}
      onClick={handleSidebarClick}
    >
      {/* Close Button - Mobile & Tablet */}
      <button
        className="sidebar-close-btn d-lg-none bg-transparent text-white mt-1"
        style={{ marginLeft: '220px', border: 'none' }}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close Sidebar"
      >
        <X size={28} />
      </button>

      {/* Logo Section */}
      <div className="p-4 text-center pb-2">
        <img src={Logos} className="w-50" alt="ThaiXO Logo" />
        <h1 className="text-white h4 fw-bold mt-3">{t('sidebar.title')}</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-2 flex-grow-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActiveFromProp = activeItem === item.id;
          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-item text-decoration-none mt-2 ${
                  (isActive || isActiveFromProp) ? 'sidebar-item-active' : 'sidebar-item-inactive'
                }`
              }
              onClick={(e) => {
                e.stopPropagation();
                onClose?.();
              }}
            >
              <Icon size={20} />
              <span className="small fw-medium">
                {getMenuLabel(item.labelKey)}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout Section */}
      <div className="p-3 border-top border-white border-opacity-10 mt-auto">
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleLogoutClick();
          }}
          className={`sidebar-item sidebar-item-inactive ps-2 ms-1 ${isLoggingOut ? 'opacity-50' : ''}`}
          style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
        >
          {isLoggingOut ? (
            <>
              <div
                className="spinner-border spinner-border-sm me-2"
                role="status"
                style={{ color: '#fff', width: '16px', height: '16px' }}
              >
                <span className="visually-hidden">{t('sidebar.loading')}</span>
              </div>
              <span className="small fw-medium">{t('sidebar.loggingOut')}</span>
            </>
          ) : (
            <>
              <LogOut size={20} />
              <span className="small fw-medium">{t('sidebar.logout')}</span>
            </>
          )}
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      <Modal
        show={showLogoutModal}
        onHide={handleCancelLogout}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>{t('sidebar.logoutConfirmTitle')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">{t('sidebar.logoutConfirmMessage')}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelLogout}>
            {t('sidebar.cancel')}
          </Button>
          <Button variant="danger" onClick={handleLogout} disabled={isLoggingOut}>
            {isLoggingOut ? t('sidebar.loggingOut') : t('sidebar.confirmLogout')}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}




















// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Home, 
//   Wallet, 
//   History, 
//   UserCheck, 
//   Trophy, 
//   Video, 
//   HelpCircle, 
//   LogOut 
// } from 'lucide-react';
// import '../css/Sidebar.css';

// const menuItems = [
//   { icon: Home, label: 'Home', path: '/dashboard' },
//   { icon: Wallet, label: 'My Earnings', path: '/IncomeDashboard' },
//   { icon: History, label: 'Pay Out History', path: '/WithdrawalHistory' },
//   { icon: UserCheck, label: 'Verify Identity', path: '/CreatorSection' },
//   { icon: Trophy, label: 'Milestone', path: '/Milestone' },
//   { icon: Video, label: 'Video Call History', path: '/VideoCallHistory' },
//   { icon: HelpCircle, label: 'Help & Support', path: '/helpsupport' },
// ];

// export default function Sidebar({ show }) {
//   const navigate = useNavigate();
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/");
//   };

//   return (
//     <div className={`sidebar ${show ? 'show' : ''}`}>
//       <div className="p-4 text-center">
//         <div 
//           className="d-inline-flex align-items-center justify-content-center p-2 bg-white bg-opacity-25 rounded-circle mb-3"
//           style={{ width: '64px', height: '64px' }}
//         >
//           <svg viewBox="0 0 100 100" className="w-100 h-100 text-white fill-current">
//             <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="8" />
//             <circle cx="50" cy="50" r="20" />
//             <path d="M30 50 L70 50 M50 30 L50 70" stroke="currentColor" strokeWidth="8" />
//           </svg>
//         </div>
//         <h1 className="text-white h4 fw-bold mb-0">
//           ThaiXO Social
//         </h1>
//       </div>

//       <nav className="mt-4 flex-grow-1 position-relative">
//         {menuItems.map((item, index) => {
//           const Icon = item.icon;
//           return (
//             <NavLink
//               key={index}
//               to={item.path}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className={({ isActive }) =>
//                 `sidebar-item text-decoration-none mt-2 position-relative ${
//                   isActive ? 'sidebar-item-active' : ''
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   {/* Liquid Indicator for Active State */}
//                   {isActive && (
//                     <motion.div
//                       layoutId="activeIndicator"
//                       className="active-liquid-bg"
//                       transition={{
//                         type: "spring",
//                         stiffness: 300,
//                         damping: 30,
//                         mass: 1
//                       }}
//                     />
//                   )}
                  
//                   {/* Hover Liquid Effect */}
//                   <AnimatePresence>
//                     {hoveredIndex === index && !isActive && (
//                       <motion.div
//                         layoutId="hoverIndicator"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.8 }}
//                         className="hover-liquid-bg"
//                         transition={{
//                           type: "spring",
//                           stiffness: 400,
//                           damping: 40
//                         }}
//                       />
//                     )}
//                   </AnimatePresence>

//                   <div className="sidebar-item-content">
//                     <Icon size={20} />
//                     <span className="small fw-medium">
//                       {item.label}
//                     </span>
//                   </div>
//                 </>
//               )}
//             </NavLink>
//           );
//         })}
//       </nav>

//       <div className="p-3 border-top border-white border-opacity-10 mt-auto">
//         <div
//           onClick={handleLogout}
//           className="sidebar-item logout-item"
//           style={{ cursor: "pointer" }}
//         >
//           <LogOut size={20} />
//           <span className="small fw-medium">
//             Log out
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
