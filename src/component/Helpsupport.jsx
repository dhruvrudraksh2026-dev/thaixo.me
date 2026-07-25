// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/HelpSupport.css";
// import { Menu, X } from "lucide-react";

// const supportChannels = [
//   {
//     name: "Line",
//     icon: "https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg",
//     color: "#00c300",
//     link: "#",
//   },
//   {
//     name: "Telegram",
//     icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
//     color: "#0088cc",
//     link: "#",
//   },
//   {
//     name: "WhatsApp",
//     icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
//     color: "#25d366",
//     link: "#",
//   },
// ];

// const HelpSupport = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="main-container">
//       {/* Mobile Toggle Button */}
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <Sidebar show={isSidebarOpen} />
//       <div className="main-wrapper">
//         {/* <Header /> */}

//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="help-support-content">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="container-fluid"
//           >
//             <h1 className="help-title">How can we help?</h1>
//             <p className="help-subtitle">
//               Find helpful articles to make the most of your experience.
//             </p>

//             <div className="help-divider"></div>

//             <div className="row mt-5 g-4">
//               {supportChannels.map((channel, index) => (
//                 <div key={index} className="col-md-4">
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     className="support-card"
//                   >
//                     <div className="support-icon-wrapper">
//                       <img
//                         src={channel.icon}
//                         alt={channel.name}
//                         className="support-icon"
//                       />
//                     </div>
//                     <div className="support-info">
//                       <h3 className="support-name">{channel.name}</h3>
//                       <a href={channel.link} className="start-chat-link">
//                         Start Chat <span className="arrow">→</span>
//                       </a>
//                     </div>
//                   </motion.div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default HelpSupport;


















// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/HelpSupport.css";
// import { Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const HelpSupport = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [supportChannels, setSupportChannels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Default icons in case API icons fail to load
//   const defaultIcons = {
//     Line: "https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg",
//     Telegram: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
//     Whatsapp: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//   };

//   // Color mapping for each platform
//   const platformColors = {
//     Line: "#00c300",
//     Telegram: "#0088cc",
//     Whatsapp: "#25d366"
//   };

//   useEffect(() => {
//     fetchSocialLinks();
//   }, []);

//   const fetchSocialLinks = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("Token from localStorage:", token);
      
//       if (!token) {
//         console.log("No token found, redirecting to login");
//         setError("Please login to view help & support");
//         setLoading(false);
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/social-links`;
//       console.log("Fetching from URL:", apiUrl);
      
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${token}`
//         },
//         withCredentials: true,
//       });

//       console.log("Full API Response:", response);
//       const data = response.data;
      
//       // Check if login is required
//       if (data.loginRequired) {
//         console.log("Login required - token may be invalid");
//         setError("Session expired. Please login again.");
//         localStorage.removeItem("token");
//         setTimeout(() => navigate('/'), 2000);
//         setLoading(false);
//         return;
//       }

//       if (data.success && data.data) {
//         console.log("Social links data received:", data.data);
        
//         // Transform API data to match your component format
//         const transformedData = data.data
//           .filter(link => link.status === 1) // Only show active links
//           .map((link) => ({
//             name: link.platform_name,
//             icon: link.icon || defaultIcons[link.platform_name] || "",
//             color: platformColors[link.platform_name] || "#e9527a",
//             link: link.url,
//             id: link.id
//           }));
        
//         console.log("Transformed data:", transformedData);
//         setSupportChannels(transformedData);
//       } else if (data.success && (!data.data || data.data.length === 0)) {
//         console.log("No social links found");
//         setSupportChannels([]);
//       } else {
//         console.log("API returned success=false:", data.message);
//         setError(data.message || 'Failed to fetch support links');
//       }
//     } catch (err) {
//       console.error("Error fetching social links:", err);
//       console.error("Error response:", err.response);
      
//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         setError("Authentication failed. Please login again.");
//         localStorage.removeItem("token");
//         setTimeout(() => navigate('/'), 2000);
//       } else {
//         setError(err.response?.data?.message || 'An error occurred while fetching support links');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Loading State
//   if (loading) {
//     return (
//       <div className="main-container">
//         <button
//           className="mobile-toggle d-none"
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         >
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div
//             className="sidebar-overlay d-lg-none"
//             onClick={() => setIsSidebarOpen(false)}
//           />
//         )}
//         <Sidebar show={isSidebarOpen} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="help-support-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="container-fluid"
//             >
//               <div className="text-center py-5">
//                 <div className="spinner-border" role="status" style={{ color: '#e9527a' }}>
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//                 <p className="mt-3 text-muted">Loading support channels...</p>
//               </div>
//             </motion.div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // Error State
//   if (error) {
//     return (
//       <div className="main-container">
//         <button
//           className="mobile-toggle d-none"
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         >
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div
//             className="sidebar-overlay d-lg-none"
//             onClick={() => setIsSidebarOpen(false)}
//           />
//         )}
//         <Sidebar show={isSidebarOpen} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="help-support-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="container-fluid"
//             >
//               <div className="text-center py-5">
//                 <AlertCircle size={48} className="text-danger mb-3" />
//                 <p className="text-danger mb-3">{error}</p>
//                 <button 
//                   onClick={fetchSocialLinks}
//                   className="btn btn-primary"
//                   style={{ backgroundColor: '#e9527a', border: 'none', padding: '8px 24px' }}
//                 >
//                   Try Again
//                 </button>
//               </div>
//             </motion.div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="main-container">
//       {/* Mobile Toggle Button */}
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <Sidebar show={isSidebarOpen} />
//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="help-support-content">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="container-fluid"
//           >
//             <h1 className="help-title">How can we help?</h1>
//             <p className="help-subtitle">
//               Find helpful articles to make the most of your experience.
//             </p>

//             <div className="help-divider"></div>

//             <div className="row mt-5 g-4">
//               {supportChannels.length === 0 ? (
//                 <div className="col-12 text-center py-5">
//                   <p className="text-muted">No support channels available at the moment.</p>
//                 </div>
//               ) : (
//                 supportChannels.map((channel, index) => (
//                   <div key={channel.id || index} className="col-md-4">
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       className="support-card"
//                     >
//                       <div className="support-icon-wrapper">
//                         <img
//                           src={channel.icon}
//                           alt={channel.name}
//                           className="support-icon"
//                           onError={(e) => {
//                             // Fallback to default icon if API icon fails to load
//                             if (defaultIcons[channel.name]) {
//                               e.target.src = defaultIcons[channel.name];
//                             }
//                           }}
//                         />
//                       </div>
//                       <div className="support-info">
//                         <h3 className="support-name">{channel.name}</h3>
//                         <a 
//                           href={channel.link} 
//                           className="start-chat-link"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           Start Chat <span className="arrow">→</span>
//                         </a>
//                       </div>
//                     </motion.div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default HelpSupport;
























// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/HelpSupport.css";
// import { Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const HelpSupport = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [supportChannels, setSupportChannels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Close Sidebar
//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   // Default icons in case API icons fail to load
//   const defaultIcons = {
//     Line: "https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg",
//     Telegram: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
//     Whatsapp: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//   };

//   // Color mapping for each platform
//   const platformColors = {
//     Line: "#00c300",
//     Telegram: "#0088cc",
//     Whatsapp: "#25d366"
//   };

//   useEffect(() => {
//     fetchSocialLinks();
//   }, []);

//   const fetchSocialLinks = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("Token from localStorage:", token);
      
//       if (!token) {
//         console.log("No token found, redirecting to login");
//         setError("Please login to view help & support");
//         setLoading(false);
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/social-links`;
//       console.log("Fetching from URL:", apiUrl);
      
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${token}`
//         },
//         withCredentials: true,
//       });

//       console.log("Full API Response:", response);
//       const data = response.data;
      
//       // Check if login is required
//       if (data.loginRequired) {
//         console.log("Login required - token may be invalid");
//         setError("Session expired. Please login again.");
//         localStorage.removeItem("token");
//         setTimeout(() => navigate('/'), 2000);
//         setLoading(false);
//         return;
//       }

//       if (data.success && data.data) {
//         console.log("Social links data received:", data.data);
        
//         // Transform API data to match your component format
//         const transformedData = data.data
//           .filter(link => link.status === 1) // Only show active links
//           .map((link) => ({
//             name: link.platform_name,
//             icon: link.icon || defaultIcons[link.platform_name] || "",
//             color: platformColors[link.platform_name] || "#e9527a",
//             link: link.url,
//             id: link.id
//           }));
        
//         console.log("Transformed data:", transformedData);
//         setSupportChannels(transformedData);
//       } else if (data.success && (!data.data || data.data.length === 0)) {
//         console.log("No social links found");
//         setSupportChannels([]);
//       } else {
//         console.log("API returned success=false:", data.message);
//         setError(data.message || 'Failed to fetch support links');
//       }
//     } catch (err) {
//       console.error("Error fetching social links:", err);
//       console.error("Error response:", err.response);
      
//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         setError("Authentication failed. Please login again.");
//         localStorage.removeItem("token");
//         setTimeout(() => navigate('/'), 2000);
//       } else {
//         setError(err.response?.data?.message || 'An error occurred while fetching support links');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Loading State
//   if (loading) {
//     return (
//       <div className="main-container">
//         <button
//           className="mobile-toggle d-none"
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         >
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div
//             className="sidebar-overlay d-lg-none"
//             onClick={handleCloseSidebar}
//           />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="help-support-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="container-fluid"
//             >
//               <div className="text-center py-5">
//                 <div className="spinner-border" role="status" style={{ color: '#e9527a' }}>
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//                 <p className="mt-3 text-muted">Loading support channels...</p>
//               </div>
//             </motion.div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // Error State
//   if (error) {
//     return (
//       <div className="main-container">
//         <button
//           className="mobile-toggle d-none"
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         >
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div
//             className="sidebar-overlay d-lg-none"
//             onClick={handleCloseSidebar}
//           />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="help-support-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="container-fluid"
//             >
//               <div className="text-center py-5">
//                 <AlertCircle size={48} className="text-danger mb-3" />
//                 <p className="text-danger mb-3">{error}</p>
//                 <button 
//                   onClick={fetchSocialLinks}
//                   className="btn btn-primary"
//                   style={{ backgroundColor: '#e9527a', border: 'none', padding: '8px 24px' }}
//                 >
//                   Try Again
//                 </button>
//               </div>
//             </motion.div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="main-container">
//       {/* Mobile Toggle Button */}
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={handleCloseSidebar}
//         />
//       )}

//       {/* Sidebar */}
//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="help-support-content">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="container-fluid"
//           >
//             <h1 className="help-title">How can we help?</h1>
//             <p className="help-subtitle">
//               Find helpful articles to make the most of your experience.
//             </p>

//             <div className="help-divider"></div>

//             <div className="row mt-5 g-4">
//               {supportChannels.length === 0 ? (
//                 <div className="col-12 text-center py-5">
//                   <p className="text-muted">No support channels available at the moment.</p>
//                 </div>
//               ) : (
//                 supportChannels.map((channel, index) => (
//                   <div key={channel.id || index} className="col-md-4">
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       className="support-card"
//                     >
//                       <div className="support-icon-wrapper">
//                         <img
//                           src={channel.icon}
//                           alt={channel.name}
//                           className="support-icon"
//                           onError={(e) => {
//                             // Fallback to default icon if API icon fails to load
//                             if (defaultIcons[channel.name]) {
//                               e.target.src = defaultIcons[channel.name];
//                             }
//                           }}
//                         />
//                       </div>
//                       <div className="support-info">
//                         <h3 className="support-name">{channel.name}</h3>
//                         <a 
//                           href={channel.link} 
//                           className="start-chat-link"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           Start Chat <span className="arrow">→</span>
//                         </a>
//                       </div>
//                     </motion.div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default HelpSupport;
















// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/HelpSupport.css";
// import { Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // Translations (Same pattern as Login & OTP)
// const translations = {
//   en: {
//     title: "How can we help?",
//     subtitle: "Find helpful articles to make the most of your experience.",
//     loading: "Loading support channels...",
//     noChannels: "No support channels available at the moment.",
//     tryAgain: "Try Again",
//     startChat: "Start Chat",
//     errors: {
//       loginRequired: "Please login to view help & support",
//       sessionExpired: "Session expired. Please login again.",
//       authFailed: "Authentication failed. Please login again.",
//       fetchFailed: "An error occurred while fetching support links"
//     }
//   },
//   th: {
//     title: "เราจะช่วยคุณได้อย่างไร?",
//     subtitle: "ค้นหาบทความที่เป็นประโยชน์เพื่อให้คุณใช้งานได้อย่างเต็มที่",
//     loading: "กำลังโหลดช่องทางการสนับสนุน...",
//     noChannels: "ขณะนี้ยังไม่มีช่องทางการสนับสนุน",
//     tryAgain: "ลองอีกครั้ง",
//     startChat: "เริ่มแชท",
//     errors: {
//       loginRequired: "กรุณาเข้าสู่ระบบเพื่อดูความช่วยเหลือและการสนับสนุน",
//       sessionExpired: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
//       authFailed: "การยืนยันตัวตนล้มเหลว กรุณาเข้าสู่ระบบอีกครั้ง",
//       fetchFailed: "เกิดข้อผิดพลาดในการโหลดช่องทางการสนับสนุน"
//     }
//   }
// };

// const HelpSupport = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [supportChannels, setSupportChannels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   const [language, setLanguage] = useState(() => {
//     return localStorage.getItem('appLanguage') || 'en';
//   });

//   const navigate = useNavigate();
//   const t = translations[language];

//   // Default icons in case API icons fail to load
//   const defaultIcons = {
//     Line: "https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg",
//     Telegram: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
//     Whatsapp: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//   };

//   // Color mapping for each platform
//   const platformColors = {
//     Line: "#00c300",
//     Telegram: "#0088cc",
//     Whatsapp: "#25d366"
//   };

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
//     window.dispatchEvent(new Event('storage'));
//   };

//   useEffect(() => {
//     fetchSocialLinks();
//   }, []);

//   const fetchSocialLinks = async () => {
//     try {
//       const token = localStorage.getItem("token");
      
//       if (!token) {
//         setError(t.errors.loginRequired);
//         setLoading(false);
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/social-links`;
      
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${token}`
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
      
//       if (data.loginRequired) {
//         setError(t.errors.sessionExpired);
//         localStorage.removeItem("token");
//         setTimeout(() => navigate('/'), 2000);
//         setLoading(false);
//         return;
//       }

//       if (data.success && data.data) {
//         const transformedData = data.data
//           .filter(link => link.status === 1)
//           .map((link) => ({
//             name: link.platform_name,
//             icon: link.icon || defaultIcons[link.platform_name] || "",
//             color: platformColors[link.platform_name] || "#e9527a",
//             link: link.url,
//             id: link.id
//           }));
        
//         setSupportChannels(transformedData);
//       } else if (data.success && (!data.data || data.data.length === 0)) {
//         setSupportChannels([]);
//       } else {
//         setError(data.message || t.errors.fetchFailed);
//       }
//     } catch (err) {
//       console.error("Error fetching social links:", err);
      
//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         setError(t.errors.authFailed);
//         localStorage.removeItem("token");
//         setTimeout(() => navigate('/'), 2000);
//       } else {
//         setError(err.response?.data?.message || t.errors.fetchFailed);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Loading State
//   if (loading) {
//     return (
//       <div className="main-container">
//         <button
//           className="mobile-toggle d-none"
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         >
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="help-support-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="container-fluid"
//             >
//               <div className="text-center py-5">
//                 <div className="spinner-border" role="status" style={{ color: '#e9527a' }}>
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//                 <p className="mt-3 text-muted">{t.loading}</p>
//               </div>
//             </motion.div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // Error State
//   if (error) {
//     return (
//       <div className="main-container">
//         <button
//           className="mobile-toggle d-none"
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         >
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="help-support-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="container-fluid"
//             >
//               <div className="text-center py-5">
//                 <AlertCircle size={48} className="text-danger mb-3" />
//                 <p className="text-danger mb-3">{error}</p>
//                 <button 
//                   onClick={fetchSocialLinks}
//                   className="btn btn-primary"
//                   style={{ backgroundColor: '#e9527a', border: 'none', padding: '8px 24px' }}
//                 >
//                   {t.tryAgain}
//                 </button>
//               </div>
//             </motion.div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="main-container">
//       {/* Mobile Toggle Button */}
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="help-support-content">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="container-fluid"
//           >
//             {/* Language Toggle - Same style as Login & OTP */}
//             <div 
//               className="language-toggle-wrapper" 
//               style={{ position: 'absolute', top: '25px', right: '30px', zIndex: 100 }}
//             >
//               <button
//                 onClick={toggleLanguage}
//                 className="btn btn-sm btn-outline-secondary"
//                 style={{ borderRadius: '20px', padding: '4px 12px' }}
//               >
//                 {language === 'en' ? 'ไทย' : 'English'}
//               </button>
//             </div>

//             <h1 className="help-title">{t.title}</h1>
//             <p className="help-subtitle">
//               {t.subtitle}
//             </p>

//             <div className="help-divider"></div>

//             <div className="row mt-5 g-4">
//               {supportChannels.length === 0 ? (
//                 <div className="col-12 text-center py-5">
//                   <p className="text-muted">{t.noChannels}</p>
//                 </div>
//               ) : (
//                 supportChannels.map((channel, index) => (
//                   <div key={channel.id || index} className="col-md-4">
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       className="support-card"
//                     >
//                       <div className="support-icon-wrapper">
//                         <img
//                           src={channel.icon}
//                           alt={channel.name}
//                           className="support-icon"
//                           onError={(e) => {
//                             if (defaultIcons[channel.name]) {
//                               e.target.src = defaultIcons[channel.name];
//                             }
//                           }}
//                         />
//                       </div>
//                       <div className="support-info">
//                         <h3 className="support-name">{channel.name}</h3>
//                         <a 
//                           href={channel.link} 
//                           className="start-chat-link"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           {t.startChat} <span className="arrow">→</span>
//                         </a>
//                       </div>
//                     </motion.div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default HelpSupport;

















// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Helpsupport.css";
// import { Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const HelpSupport = () => {
//   const { t } = useTranslation();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [supportChannels, setSupportChannels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Default icons in case API icons fail to load
//   const defaultIcons = {
//     Line: "https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg",
//     Telegram: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
//     Whatsapp: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//   };

//   // Color mapping for each platform
//   const platformColors = {
//     Line: "#00c300",
//     Telegram: "#0088cc",
//     Whatsapp: "#25d366"
//   };

//   useEffect(() => {
//     fetchSocialLinks();
//   }, []);

//   const fetchSocialLinks = async () => {
//     try {
//       const token = localStorage.getItem("token");
      
//       if (!token) {
//         setError(t("helpSupport.errors.loginRequired"));
//         setLoading(false);
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/social-links`;
      
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${token}`
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
      
//       if (data.loginRequired) {
//         setError(t("helpSupport.errors.sessionExpired"));
//         localStorage.removeItem("token");
//         setTimeout(() => navigate('/'), 2000);
//         setLoading(false);
//         return;
//       }

//       if (data.success && data.data) {
//         const transformedData = data.data
//           .filter(link => link.status === 1)
//           .map((link) => ({
//             name: link.platform_name,
//             icon: link.icon || defaultIcons[link.platform_name] || "",
//             color: platformColors[link.platform_name] || "#e9527a",
//             link: link.url,
//             id: link.id
//           }));
        
//         setSupportChannels(transformedData);
//       } else if (data.success && (!data.data || data.data.length === 0)) {
//         setSupportChannels([]);
//       } else {
//         setError(data.message || t("helpSupport.errors.fetchFailed"));
//       }
//     } catch (err) {
//       console.error("Error fetching social links:", err);
      
//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         setError(t("helpSupport.errors.authFailed"));
//         localStorage.removeItem("token");
//         setTimeout(() => navigate('/'), 2000);
//       } else {
//         setError(err.response?.data?.message || t("helpSupport.errors.fetchFailed"));
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Loading State
//   if (loading) {
//     return (
//       <div className="main-container">
//         <button
//           className="mobile-toggle d-none"
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         >
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="help-support-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="container-fluid"
//             >
//               <div className="text-center py-5">
//                 <div className="spinner-border" role="status" style={{ color: '#e9527a' }}>
//                   <span className="visually-hidden">{t("helpSupport.loading")}</span>
//                 </div>
//                 <p className="mt-3 text-muted">{t("helpSupport.loading")}</p>
//               </div>
//             </motion.div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // Error State
//   if (error) {
//     return (
//       <div className="main-container">
//         <button
//           className="mobile-toggle d-none"
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         >
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="help-support-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="container-fluid"
//             >
//               <div className="text-center py-5">
//                 <AlertCircle size={48} className="text-danger mb-3" />
//                 <p className="text-danger mb-3">{error}</p>
//                 <button 
//                   onClick={fetchSocialLinks}
//                   className="btn btn-primary"
//                   style={{ backgroundColor: '#e9527a', border: 'none', padding: '8px 24px' }}
//                 >
//                   {t("helpSupport.tryAgain")}
//                 </button>
//               </div>
//             </motion.div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="main-container">
//       {/* Mobile Toggle Button */}
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="help-support-content">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="container-fluid"
//           >
//             <h1 className="help-title">{t("helpSupport.title")}</h1>
//             <p className="help-subtitle">
//               {t("helpSupport.subtitle")}
//             </p>

//             <div className="help-divider"></div>

//             <div className="row mt-5 g-4">
//               {supportChannels.length === 0 ? (
//                 <div className="col-12 text-center py-5">
//                   <p className="text-muted">{t("helpSupport.noChannels")}</p>
//                 </div>
//               ) : (
//                 supportChannels.map((channel, index) => (
//                   <div key={channel.id || index} className="col-md-4">
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       className="support-card"
//                     >
//                       <div className="support-icon-wrapper">
//                         <img
//                           src={channel.icon}
//                           alt={channel.name}
//                           className="support-icon"
//                           onError={(e) => {
//                             if (defaultIcons[channel.name]) {
//                               e.target.src = defaultIcons[channel.name];
//                             }
//                           }}
//                         />
//                       </div>
//                       <div className="support-info">
//                         <h3 className="support-name">{channel.name}</h3>
//                         <a 
//                           href={channel.link} 
//                           className="start-chat-link"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           {t("helpSupport.startChat")} <span className="arrow">→</span>
//                         </a>
//                       </div>
//                     </motion.div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default HelpSupport;

















import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../css/Helpsupport.css";
import { Menu, X, AlertCircle } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HelpSupport = () => {
  const { t, i18n } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [supportChannels, setSupportChannels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Default icons in case API icons fail to load
  const defaultIcons = {
    Line: "https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg",
    Facebook: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/1280px-Facebook_Logo_2023.png",
    Whatsapp: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
  };

  // Color mapping for each platform
  const platformColors = {
    Line: "#00c300",
    Facebook: "#4267B2",
    Whatsapp: "#25d366"
  };

  // Translation helper for platform names
  const translatePlatformName = (name) => {
    // Use keys like "helpSupport.platformNames.Line" etc.
    const key = `helpSupport.platformNames.${name}`;
    const translated = t(key, { defaultValue: name });
    // If translation returns the same key string, it means the key wasn't found, keep original
    return translated === key ? name : translated;
  };

  useEffect(() => {
    fetchSocialLinks();
  }, []);

  const fetchSocialLinks = async () => {
    try {
      const token = localStorage.getItem("token");
      
      if (!token) {
        setError(t("helpSupport.errors.loginRequired"));
        setLoading(false);
        setTimeout(() => navigate('/'), 2000);
        return;
      }

      const apiUrl = `${import.meta.env.VITE_SERVER_URL}/social-links`;
      
      const response = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        withCredentials: true,
      });

      const data = response.data;
      
      if (data.loginRequired) {
        setError(t("helpSupport.errors.sessionExpired"));
        localStorage.removeItem("token");
        setTimeout(() => navigate('/'), 2000);
        setLoading(false);
        return;
      }

      if (data.success && data.data) {
        const transformedData = data.data
          .filter(link => link.status === 1)
          .map((link) => ({
            name: link.platform_name, // keep original English for fallback
            icon: link.icon || defaultIcons[link.platform_name] || "",
            color: platformColors[link.platform_name] || "#e9527a",
            link: link.url,
            id: link.id
          }));
        
        setSupportChannels(transformedData);
      } else if (data.success && (!data.data || data.data.length === 0)) {
        setSupportChannels([]);
      } else {
        setError(data.message || t("helpSupport.errors.fetchFailed"));
      }
    } catch (err) {
      console.error("Error fetching social links:", err);
      
      if (err.response?.status === 401 || err.response?.data?.loginRequired) {
        setError(t("helpSupport.errors.authFailed"));
        localStorage.removeItem("token");
        setTimeout(() => navigate('/'), 2000);
      } else {
        setError(err.response?.data?.message || t("helpSupport.errors.fetchFailed"));
      }
    } finally {
      setLoading(false);
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="main-container">
        <button
          className="mobile-toggle d-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
        {isSidebarOpen && (
          <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
        )}
        <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="main-wrapper">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <main className="help-support-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="container-fluid"
            >
              <div className="text-center py-5">
                <div className="spinner-border" role="status" style={{ color: '#e9527a' }}>
                  <span className="visually-hidden">{t("helpSupport.loading")}</span>
                </div>
                <p className="mt-3 text-muted">{t("helpSupport.loading")}</p>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="main-container">
        <button
          className="mobile-toggle d-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
        {isSidebarOpen && (
          <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
        )}
        <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="main-wrapper">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <main className="help-support-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="container-fluid"
            >
              <div className="text-center py-5">
                <AlertCircle size={48} className="text-danger mb-3" />
                <p className="text-danger mb-3">{error}</p>
                <button 
                  onClick={fetchSocialLinks}
                  className="btn btn-primary"
                  style={{ backgroundColor: '#e9527a', border: 'none', padding: '8px 24px' }}
                >
                  {t("helpSupport.tryAgain")}
                </button>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      {/* Mobile Toggle Button */}
      <button
        className="mobile-toggle d-none"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay d-lg-none"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="main-wrapper">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="help-support-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container-fluid"
          >
            <h1 className="help-title">{t("helpSupport.title")}</h1>
            <p className="help-subtitle">
              {t("helpSupport.subtitle")}
            </p>

            <div className="help-divider"></div>

            <div className="row mt-5 g-4">
              {supportChannels.length === 0 ? (
                <div className="col-12 text-center py-5">
                  <p className="text-muted">{t("helpSupport.noChannels")}</p>
                </div>
              ) : (
                supportChannels.map((channel, index) => (
                  <div key={channel.id || index} className="col-md-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="support-card"
                    >
                      <div className="support-icon-wrapper">
                        <img
                          src={channel.icon}
                          alt={channel.name}
                          className="support-icon"
                          onError={(e) => {
                            if (defaultIcons[channel.name]) {
                              e.target.src = defaultIcons[channel.name];
                            }
                          }}
                        />
                      </div>
                      <div className="support-info">
                        {/* ✅ Translated platform name */}
                        <h3 className="support-name">{translatePlatformName(channel.name)}</h3>
                        <a 
                          href={channel.link} 
                          className="start-chat-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("helpSupport.startChat")} <span className="arrow">→</span>
                        </a>
                      </div>
                    </motion.div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default HelpSupport;