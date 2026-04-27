// import React from "react";
// import "../css/Dashboard.css";
// // import logo from "../assets/logo.png";
// import Profile from "../assets/Profile.png";
// import Dashboardbg from "../assets/Dashboardbg.png";

// const Header = () => {
//   return (
//     <div className="Header-wrapper">

//       {/* Header */}
//       <header className="dashboard-header d-flex justify-content-between align-items-center px-4">
//         {/* <img src={logo} alt="Thaixo" className="dashboard-logo" /> */}

//         <div className="d-flex align-items-center gap-3">
//           <div className="credit-box">
//             Credit – 10,000.00
//           </div>
//           <img src={Profile} alt="User" className="user-avatar" />
//         </div>
//       </header>

//       {/* Main Content */}
//     </div>
//   );
// };

// export default Header;

// import React, { useState, useRef, useEffect } from "react";
// import "../css/Dashboard.css";
// import Profile from "../assets/Profile.png";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="Header-wrapper">
//       <header className="dashboard-header d-flex justify-content-between align-items-center px-4">
//         {/* LEFT LOGO AREA (optional) */}
//         <img src={Profile} alt="Thaixo" className="dashboard-logo" />

//         {/* RIGHT AREA */}
//         <div className="d-flex align-items-center gap-3" ref={dropdownRef}>
//           <div className="credit-box">Credit – 10,000.00</div>

//           {/* PROFILE */}
//           <div className="profile-wrapper" ref={dropdownRef}>
//             <img
//               src={Profile}
//               alt="User"
//               className="user-avatar"
//               onClick={() => setOpen(!open)}
//             />

//             {open && (
//               <div className="profile-dropdown">
//                 {/* PROFILE INFO */}
//                 <div className="profile-top">
//                   <img src={Profile} alt="User" />
//                   <div>
//                     <div className="profile-name">
//                       Binish_Saba <span className="verified">✔</span>
//                     </div>
//                     <div className="profile-phone">+91 - 93165 - 23565</div>
//                   </div>
//                 </div>

//                 <div className="divider" />

//                 <div className="dropdown-item-row">
//                   <span>☀ Theme</span>
//                   <select>
//                     <option>System</option>
//                     <option>Light</option>
//                     <option>Dark</option>
//                   </select>
//                 </div>

//                 <div className="dropdown-item-row">
//                   <span>Aᵃ Language</span>
//                   <select>
//                     <option>English</option>
//                     <option>Hindi</option>
//                     <option>Thai</option>
//                   </select>
//                 </div>

//                 <div className="dropdown-item-row clickable">
//                   ❓ Help Center
//                 </div>

//                 <div className="divider" />

//                 <div className="dropdown-item-row logout">⏻ Log out</div>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

// import React, { useState, useRef, useEffect } from "react";
// import "../css/Dashboard.css";
// import Profile from "../assets/Profile.png";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "system"
//   );
//   const dropdownRef = useRef(null);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Apply theme
//   useEffect(() => {
//     if (theme === "light") {
//       document.documentElement.setAttribute("data-theme", "light");
//     } else if (theme === "dark") {
//       document.documentElement.setAttribute("data-theme", "dark");
//     } else {
//       document.documentElement.removeAttribute("data-theme"); // system
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const handleThemeChange = (e) => {
//     setTheme(e.target.value);
//   };

//   return (
//     <div className="Header-wrapper">
//       <header className="dashboard-header d-flex justify-content-between align-items-center px-4">
//         {/* LEFT LOGO AREA */}
//         <img src={Profile} alt="Thaixo" className="dashboard-logo" />

//         {/* RIGHT AREA */}
//         <div className="d-flex align-items-center gap-3" ref={dropdownRef}>
//           <div className="credit-box">Credit – 10,000.00</div>

//           {/* PROFILE */}
//           <div className="profile-wrapper">
//             <img
//               src={Profile}
//               alt="User"
//               className="user-avatar"
//               onClick={() => setOpen(!open)}
//               aria-haspopup="true"
//               aria-expanded={open}
//             />

//             {open && (
//               <div className="profile-dropdown">
//                 {/* PROFILE INFO */}
//                 <div className="profile-top">
//                   <img src={Profile} alt="User" />
//                   <div>
//                     <div className="profile-name">
//                       Binish_Saba <span className="verified">✔</span>
//                     </div>
//                     <div className="profile-phone">+91 - 93165 - 23565</div>
//                   </div>
//                 </div>

//                 <div className="divider" />

//                 <div className="dropdown-item-row">
//                   <span>☀ Theme</span>
//                   <select value={theme} onChange={handleThemeChange}>
//                     <option value="system">System</option>
//                     <option value="light">Light</option>
//                     <option value="dark">Dark</option>
//                   </select>
//                 </div>

//                 <div className="dropdown-item-row">
//                   <span>Aᵃ Language</span>
//                   <select>
//                     <option>English</option>
//                     <option>Hindi</option>
//                     <option>Thai</option>
//                   </select>
//                 </div>

//                 <div className="dropdown-item-row clickable">❓ Help Center</div>

//                 <div className="divider" />

//                 <div className="dropdown-item-row logout">⏻ Log out</div>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

// import React, { useState, useRef, useEffect } from "react";
// import "../css/Dashboard.css";
// import Profile from "../assets/Profile.png";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
//   const dropdownRef = useRef(null);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Apply theme on mount & changes
//   useEffect(() => {
//     if (theme === "light") {
//       document.documentElement.setAttribute("data-theme", "light");
//     } else if (theme === "dark") {
//       document.documentElement.setAttribute("data-theme", "dark");
//     } else {
//       document.documentElement.removeAttribute("data-theme"); // system
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   // Theme change handler
//   const handleThemeChange = (e) => {
//     const newTheme = e.target.value;
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);

//     // Trigger storage event manually for same-tab updates
//     window.dispatchEvent(
//       new StorageEvent("storage", { key: "theme", newValue: newTheme })
//     );
//   };

//   return (
//     <div className="Header-wrapper">
//       <header className="dashboard-header d-flex justify-content-between align-items-center px-4">
//         <img src={Profile} alt="Thaixo" className="dashboard-logo" />

//         <div className="d-flex align-items-center gap-3" ref={dropdownRef}>
//           <div className="credit-box">Credit – 10,000.00</div>

//           <div className="profile-wrapper">
//             <img
//               src={Profile}
//               alt="User"
//               className="user-avatar"
//               onClick={() => setOpen(!open)}
//               aria-haspopup="true"
//               aria-expanded={open}
//             />

//             {open && (
//               <div className="profile-dropdown">
//                 <div className="profile-top">
//                   <img src={Profile} alt="User" />
//                   <div>
//                     <div className="profile-name">
//                       Binish_Saba <span className="verified">✔</span>
//                     </div>
//                     <div className="profile-phone">+91 - 93165 - 23565</div>
//                   </div>
//                 </div>

//                 <div className="divider" />

//                 <div className="dropdown-item-row">
//                   <span>☀ Theme</span>
//                   <select value={theme} onChange={handleThemeChange}>
//                     <option value="system">System</option>
//                     <option value="light">Light</option>
//                     <option value="dark">Dark</option>
//                   </select>
//                 </div>

//                 <div className="dropdown-item-row">
//                   <span>Aᵃ Language</span>
//                   <select>
//                     <option>English</option>
//                     <option>Hindi</option>
//                     <option>Thai</option>
//                   </select>
//                 </div>

//                 <div className="dropdown-item-row clickable">❓ Help Center</div>

//                 <div className="divider" />

//                 <div className="dropdown-item-row logout">⏻ Log out</div>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

// import React, { useState, useRef, useEffect } from "react";
// import "../css/Dashboard.css";
// import Profile from "../assets/Profile.png";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "system"
//   );
//   const dropdownRef = useRef(null);

//   /* ===============================
//      APPLY THEME (Light / Dark / System)
//   =============================== */
//   const applyTheme = (mode) => {
//     let finalTheme = mode;

//     if (mode === "system") {
//       finalTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light";
//     }

//     document.documentElement.setAttribute("data-theme", finalTheme);
//   };

//   /* Apply theme on mount */
//   useEffect(() => {
//     applyTheme(theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   /* Listen to system theme change */
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

//     const handleSystemChange = () => {
//       if (theme === "system") {
//         applyTheme("system");
//       }
//     };

//     mediaQuery.addEventListener("change", handleSystemChange);
//     return () =>
//       mediaQuery.removeEventListener("change", handleSystemChange);
//   }, [theme]);

//   /* Close dropdown on outside click */
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   /* Theme change handler */
//   const handleThemeChange = (e) => {
//     const selectedTheme = e.target.value;
//     setTheme(selectedTheme);
//     localStorage.setItem("theme", selectedTheme);
//   };

//   return (
//     <div className="Header-wrapper">
//       <header className="dashboard-header d-flex justify-content-between align-items-center px-4">
//         <img src={Profile} alt="Thaixo" className="dashboard-logo" />

//         <div className="d-flex align-items-center gap-3" ref={dropdownRef}>
//           <div className="credit-box">Credit – 10,000.00</div>

//           <div className="profile-wrapper">
//             <img
//               src={Profile}
//               alt="User"
//               className="user-avatar"
//               onClick={() => setOpen(!open)}
//               aria-haspopup="true"
//               aria-expanded={open}
//             />

//             {open && (
//               <div className="profile-dropdown">
//                 <div className="profile-top">
//                   <img src={Profile} alt="User" />
//                   <div>
//                     <div className="profile-name">
//                       Binish_Saba <span className="verified">✔</span>
//                     </div>
//                     <div className="profile-phone">
//                       +91 - 93165 - 23565
//                     </div>
//                   </div>
//                 </div>

//                 <div className="divider" />

//                 <div className="dropdown-item-row">
//                   <span>☀ Theme</span>
//                   <select value={theme} onChange={handleThemeChange}>
//                     <option value="system">System</option>
//                     <option value="light">Light</option>
//                     <option value="dark">Dark</option>
//                   </select>
//                 </div>

//                 <div className="dropdown-item-row">
//                   <span>Aᵃ Language</span>
//                   <select>
//                     <option>English</option>
//                     <option>Hindi</option>
//                     <option>Thai</option>
//                   </select>
//                 </div>

//                 <div className="dropdown-item-row clickable">
//                   ❓ Help Center
//                 </div>

//                 <div className="divider" />

//                 <div className="dropdown-item-row logout">
//                   ⏻ Log out
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

// import React, { useState, useRef, useEffect } from "react";
// import "../css/Dashboard.css";
// import Profile from "../assets/Profile.png";
// import LogoLight from "../assets/light.png";
// import LogoDark from "../assets/dark.png";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "system"
//   );
//   const [logo, setLogo] = useState(LogoLight);
//   const dropdownRef = useRef(null);

//   /* ===============================
//      APPLY THEME + LOGO
//   =============================== */
//   const applyTheme = (mode) => {
//     let finalTheme = mode;

//     if (mode === "system") {
//       finalTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light";
//     }

//     document.documentElement.setAttribute("data-theme", finalTheme);

//     // 🔥 Set logo based on theme
//     setLogo(finalTheme === "dark" ? LogoDark : LogoLight);
//   };

//   /* Apply theme on mount & change */
//   useEffect(() => {
//     applyTheme(theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   /* Listen to system theme change */
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

//     const handleSystemChange = () => {
//       if (theme === "system") {
//         applyTheme("system");
//       }
//     };

//     mediaQuery.addEventListener("change", handleSystemChange);
//     return () =>
//       mediaQuery.removeEventListener("change", handleSystemChange);
//   }, [theme]);

//   /* Close dropdown on outside click */
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   /* Theme change handler */
//   const handleThemeChange = (e) => {
//     setTheme(e.target.value);
//   };

//   return (
//     <div className="container">

//     <div className="Header-wrapper pt-2">
//       <header className="dashboard-header d-flex justify-content-end align-items-center px-lg-4">

//         {/* 🔥 THEME AWARE LOGO */}
//         {/* <img src={logo} alt="Thaixo" className="dashboard-logo img-fluid" /> */}

//         <div className="d-flex align-items-center gap-3" ref={dropdownRef}>
//           <div className="credit-box">Credit – 10,000.00</div>

//           <div className="profile-wrapper">
//             <img
//               src={Profile}
//               alt="User"
//               className="user-avatar"
//               onClick={() => setOpen(!open)}
//             />

//             {open && (
//               <div className="profile-dropdown">
//                 <div className="profile-top">
//                   <img src={Profile} alt="User" />
//                   <div>
//                     <div className="profile-name">
//                       Binish_Saba <span className="verified">✔</span>
//                     </div>
//                     <div className="profile-phone">
//                       +91 - 93165 - 23565
//                     </div>
//                   </div>
//                 </div>

//                 <div className="divider" />

//                 <div className="dropdown-item-row">
//                   <span>☀ Theme</span>
//                   <select value={theme} onChange={handleThemeChange}>
//                     <option value="system">System</option>
//                     <option value="light">Light</option>
//                     <option value="dark">Dark</option>
//                   </select>
//                 </div>

//                 <div className="dropdown-item-row">
//                   <span>Aᵃ Language</span>
//                   <select>
//                     <option>English</option>
//                     <option>Hindi</option>
//                     <option>Thai</option>
//                   </select>
//                 </div>

//                 <div className="dropdown-item-row clickable">
//                   ❓ Help Center
//                 </div>

//                 <div className="divider" />

//                 <div className="dropdown-item-row logout">
//                   ⏻ Log out
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>
//     </div>

//     </div>
//   );
// };

// export default Header;

// import React, { useState, useRef, useEffect } from "react";
// import "../css/Dashboard.css";
// import Profile from "../assets/Profile.png";
// import LogoLight from "../assets/light.png";
// import LogoDark from "../assets/dark.png";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "system"
//   );

//   const [language, setLanguage] = useState(
//     localStorage.getItem("language") || "en"
//   );

//   const [logo, setLogo] = useState(LogoLight);
//   const dropdownRef = useRef(null);

//   /* ===============================
//      TRANSLATIONS
//   =============================== */
//   const text = {
//     en: {
//       credit: "Credit",
//       help: "Help Center",
//       logout: "Log out",
//       language: "Language",
//       theme: "Theme",
//     },
//     th: {
//       credit: "เครดิต",
//       help: "ศูนย์ช่วยเหลือ",
//       logout: "ออกจากระบบ",
//       language: "ภาษา",
//       theme: "ธีม",
//     },
//   };

//   /* ===============================
//      APPLY THEME + LOGO
//   =============================== */
//   const applyTheme = (mode) => {
//     let finalTheme = mode;

//     if (mode === "system") {
//       finalTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light";
//     }

//     document.documentElement.setAttribute("data-theme", finalTheme);
//     setLogo(finalTheme === "dark" ? LogoDark : LogoLight);
//   };

//   /* Apply theme */
//   useEffect(() => {
//     applyTheme(theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   /* Save language ONLY (no reload) */
//   useEffect(() => {
//     localStorage.setItem("language", language);
//   }, [language]);

//   /* Listen system theme change */
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     const handleSystemChange = () => {
//       if (theme === "system") {
//         applyTheme("system");
//       }
//     };
//     mediaQuery.addEventListener("change", handleSystemChange);
//     return () =>
//       mediaQuery.removeEventListener("change", handleSystemChange);
//   }, [theme]);

//   /* Close dropdown on outside click */
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="container">
//       <div className="Header-wrapper pt-2">
//         <header className="dashboard-header d-flex justify-content-end align-items-center px-lg-4">
//           <div className="d-flex align-items-center gap-3" ref={dropdownRef}>
//             <div className="credit-box">
//               {text[language].credit} – 10,000.00
//             </div>

//             <div className="profile-wrapper">
//               <img
//                 src={Profile}
//                 alt="User"
//                 className="user-avatar"
//                 onClick={() => setOpen(!open)}
//               />

//               {open && (
//                 <div className="profile-dropdown">
//                   <div className="profile-top">
//                     <img src={Profile} alt="User" />
//                     <div>
//                       <div className="profile-name">
//                         Binish_Saba <span className="verified">✔</span>
//                       </div>
//                       <div className="profile-phone">
//                         +91 - 93165 - 23565
//                       </div>
//                     </div>
//                   </div>

//                   <div className="divider" />

//                   {/* <div className="dropdown-item-row">
//                     <span>{text[language].theme}</span>
//                     <select
//                       value={theme}
//                       onChange={(e) => setTheme(e.target.value)}
//                     >
//                       <option value="system">System</option>
//                       <option value="light">Light</option>
//                       <option value="dark">Dark</option>
//                     </select>
//                   </div> */}

//                   <div className="dropdown-item-row">
//                     <span>{text[language].language}</span>
//                     <select
//                       value={language}
//                       onChange={(e) => setLanguage(e.target.value)}
//                     >
//                       <option value="en">English</option>
//                       <option value="th">Thai</option>
//                     </select>
//                   </div>

//                   <div className="dropdown-item-row clickable">
//                     ❓ {text[language].help}
//                   </div>

//                   <div className="divider" />

//                   <div className="dropdown-item-row logout">
//                     ⏻ {text[language].logout}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Header;

// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/Dashboard.css";
// import Profile from "../assets/Profile.png";
// import LogoLight from "../assets/light.png";
// import LogoDark from "../assets/dark.png";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "system"
//   );

//   const [language, setLanguage] = useState(
//     localStorage.getItem("language") || "en"
//   );

//   const [logo, setLogo] = useState(LogoLight);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

//   /* ===============================
//      TRANSLATIONS
//   =============================== */
//   const text = {
//     en: {
//       credit: "Credit",
//       help: "Help Center",
//       logout: "Log out",
//       language: "Language",
//       theme: "Theme",
//     },
//     th: {
//       credit: "เครดิต",
//       help: "ศูนย์ช่วยเหลือ",
//       logout: "ออกจากระบบ",
//       language: "ภาษา",
//       theme: "ธีม",
//     },
//   };

//   /* ===============================
//      APPLY THEME + LOGO
//   =============================== */
//   const applyTheme = (mode) => {
//     let finalTheme = mode;

//     if (mode === "system") {
//       finalTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light";
//     }

//     document.documentElement.setAttribute("data-theme", finalTheme);
//     setLogo(finalTheme === "dark" ? LogoDark : LogoLight);
//   };

//   useEffect(() => {
//     applyTheme(theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   useEffect(() => {
//     localStorage.setItem("language", language);
//   }, [language]);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     const handleSystemChange = () => {
//       if (theme === "system") {
//         applyTheme("system");
//       }
//     };
//     mediaQuery.addEventListener("change", handleSystemChange);
//     return () =>
//       mediaQuery.removeEventListener("change", handleSystemChange);
//   }, [theme]);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="container">
//       <div className="Header-wrapper pt-2">
//         <header className="dashboard-header d-flex justify-content-end align-items-center px-lg-4">
//           <div className="d-flex align-items-center gap-3" ref={dropdownRef}>
//             <div className="credit-box">
//               {text[language].credit} – 10,000.00
//             </div>

//             <div className="profile-wrapper">
//               <img
//                 src={Profile}
//                 alt="User"
//                 className="user-avatar"
//                 onClick={() => setOpen(!open)}
//               />

//               {open && (
//                 <div className="profile-dropdown">
//                   <div className="profile-top">
//                     <img src={Profile} alt="User" />
//                     <div>
//                       <div className="profile-name">
//                         Binish_Saba <span className="verified">✔</span>
//                       </div>
//                       <div className="profile-phone">
//                         +91 - 93165 - 23565
//                       </div>
//                     </div>
//                   </div>

//                   <div className="divider" />

//                   {/* LANGUAGE */}
//                   <div className="dropdown-item-row">
//                     <span>{text[language].language}</span>
//                     <select
//                       value={language}
//                       onChange={(e) => setLanguage(e.target.value)}
//                     >
//                       <option value="en">English</option>
//                       <option value="th">Thai</option>
//                     </select>
//                   </div>

//                   {/* HELP CENTER REDIRECT */}
//                   <div
//                     className="dropdown-item-row clickable"
//                     onClick={() => {
//                       setOpen(false);
//                       navigate("/helpsupport");
//                     }}
//                   >
//                     ❓ {text[language].help}
//                   </div>

//                   <div className="divider" />

//                   <div className="dropdown-item-row logout" onClick={() => {
//                       setOpen(false);
//                       navigate("/");
//                     }}>
//                     ⏻ {text[language].logout}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState, useRef, useEffect } from "react";
import {
  Bell,
  Sun,
  Languages,
  LogOut,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import "../css/Header.css";

export default function Header() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);

  // const profileRef = useRef<HTMLDivElement>(null);
  // const notificationRef = useRef<HTMLDivElement>(null);

  // // Close dropdowns when clicking outside
  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (profileRef.current && !profileRef.current.contains(event.target)) {
  //       setShowProfileDropdown(false);
  //     }
  //     if (notificationRef.current && !notificationRef.current.contains(event.target)) {
  //       setShowNotificationPopup(false);
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const profileEl = profileRef.current;
      const notificationEl = notificationRef.current;

      if (
        (profileEl && profileEl.contains(event.target)) ||
        (notificationEl && notificationEl.contains(event.target))
      ) {
        return; // Click happened inside one of the components
      }

      // Click happened outside both
      setShowProfileDropdown(false);
      setShowNotificationPopup(false);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const notifications = [
    {
      id: 1,
      text: "Your payout of 500 Bath is successful.",
      time: "2 mins ago",
    },
    { id: 2, text: "New milestone reached: Thai Silver!", time: "1 hour ago" },
    {
      id: 3,
      text: "System update scheduled for tonight.",
      time: "5 hours ago",
    },
  ];

  return (
    <header className="header-container d-flex align-items-center justify-content-between px-4 py-2 bg-white border-bottom">
      <div className="header-left">
        <h2 className="h5 fw-semibold mb-0 text-dark">ThaiXO Creator Studio</h2>
      </div>

      <div className="header-right d-flex align-items-center gap-4">
        <div className="position-relative" ref={notificationRef}>
          <div
            className="notification-icon-wrapper cursor-pointer"
            onClick={() => {
  setShowNotificationPopup(!showNotificationPopup);
  setShowProfileDropdown(false);
}}
          >
            <Bell size={24} className="text-danger" />
            <span className="notification-badge">2</span>
          </div>

          {showNotificationPopup && (
            <div className="notification-popup shadow-lg border rounded-3 p-3">
              <h6 className="fw-bold mb-3">Notifications</h6>
              <div className="notification-list">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className="notification-item border-bottom py-2"
                  >
                    <p className="small mb-1">{n.text}</p>
                    <span className="text-muted smaller">{n.time}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-link btn-sm text-danger w-100 mt-2 text-decoration-none">
                View All
              </button>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="position-relative" ref={profileRef}>
          <div
            className="profile-trigger d-flex align-items-center cursor-pointer"
           onClick={() => {
  setShowProfileDropdown(!showProfileDropdown);
  setShowNotificationPopup(false);
}}
          >
            <img
              src="https://picsum.photos/seed/binish/100/100"
              alt="Profile"
              className="rounded-circle border border-2 border-white shadow-sm"
              width="40"
              height="40"
            />
          </div>

          {showProfileDropdown && (
            <div className="profile-dropdown-container shadow-lg border rounded-3 overflow-hidden">
              {/* Top Profile Section */}
              <div className="p-3 bg-white">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src="https://picsum.photos/seed/binish/100/100"
                    alt="Profile Large"
                    className="rounded-circle"
                    width="50"
                    height="50"
                  />
                  <div>
                    <div className="d-flex align-items-center">
                      <span className="fw-bold h6 mb-0">Binish_Saba</span>
                      <CheckCircle2
                        size={16}
                        className="text-primary ms-1 fill-primary text-white"
                      />
                      <div className="verified-badge-bg">
                        <CheckCircle2 size={14} className="text-info" />
                      </div>
                    </div>
                    <p className="text-muted small mb-0">+91 - 93165 - 23565</p>
                  </div>
                </div>
              </div>

              <div className="dropdown-divider m-0"></div>

              {/* Settings Section */}
              <div className="p-2">
                <div className="dropdown-item-row d-flex align-items-center justify-content-between p-2 rounded">
                  <div className="d-flex align-items-center gap-2">
                    <Sun size={18} />
                    <span>Theme</span>
                  </div>
                  <div className="select-wrapper">
                    <select className="form-select form-select-sm border-0 bg-light">
                      <option>System</option>
                      <option>Light</option>
                      <option>Dark</option>
                    </select>
                  </div>
                </div>

                <div className="dropdown-item-row d-flex align-items-center justify-content-between p-2 rounded">
                  <div className="d-flex align-items-center gap-2">
                    <Languages size={18} />
                    <span>Language</span>
                  </div>
                  <div className="select-wrapper">
                    <select className="form-select form-select-sm border-0 bg-light">
                      <option>English</option>
                      <option>Thai</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="dropdown-divider m-0"></div>

              {/* Logout Section */}
              <div className="p-2">
                <div className="dropdown-item-row logout-row d-flex align-items-center gap-2 p-2 rounded cursor-pointer text-dark">
                  <LogOut size={18} />
                  <span className="fw-medium">Log out</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

// import React, { useState, useRef, useEffect, useContext } from "react";
// import "../css/Dashboard.css";
// import Profile from "../assets/Profile.png";
// import LogoLight from "../assets/light.png";
// import LogoDark from "../assets/dark.png";
// import { LanguageContext } from "../component/LanguageContext";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "system"
//   );

//   const { language, setLanguage } = useContext(LanguageContext);

//   const [logo, setLogo] = useState(LogoLight);
//   const dropdownRef = useRef(null);

//   const text = {
//     en: {
//       credit: "Credit",
//       help: "Help Center",
//       logout: "Log out",
//       language: "Language",
//       theme: "Theme",
//     },
//     th: {
//       credit: "เครดิต",
//       help: "ศูนย์ช่วยเหลือ",
//       logout: "ออกจากระบบ",
//       language: "ภาษา",
//       theme: "ธีม",
//     },
//   };

//   const applyTheme = (mode) => {
//     let finalTheme = mode;
//     if (mode === "system") {
//       finalTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light";
//     }
//     document.documentElement.setAttribute("data-theme", finalTheme);
//     setLogo(finalTheme === "dark" ? LogoDark : LogoLight);
//   };

//   useEffect(() => {
//     applyTheme(theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     const handleSystemChange = () => {
//       if (theme === "system") applyTheme("system");
//     };
//     mediaQuery.addEventListener("change", handleSystemChange);
//     return () =>
//       mediaQuery.removeEventListener("change", handleSystemChange);
//   }, [theme]);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="container">
//       <div className="Header-wrapper pt-2">
//         <header className="dashboard-header d-flex justify-content-end align-items-center px-lg-4">
//           <div className="d-flex align-items-center gap-3" ref={dropdownRef}>

//             <div className="credit-box">
//               {text[language].credit} – 10,000.00
//             </div>

//             <div className="profile-wrapper">
//               <img
//                 src={Profile}
//                 alt="User"
//                 className="user-avatar"
//                 onClick={() => setOpen(!open)}
//               />

//               {open && (
//                 <div className="profile-dropdown">
//                   <div className="profile-top">
//                     <img src={Profile} alt="User" />
//                     <div>
//                       <div className="profile-name">
//                         Binish_Saba <span className="verified">✔</span>
//                       </div>
//                       <div className="profile-phone">
//                         +91 - 93165 - 23565
//                       </div>
//                     </div>
//                   </div>

//                   <div className="divider" />

//                   <div className="dropdown-item-row">
//                     <span>{text[language].theme}</span>
//                     <select value={theme} onChange={(e) => setTheme(e.target.value)}>
//                       <option value="system">System</option>
//                       <option value="light">Light</option>
//                       <option value="dark">Dark</option>
//                     </select>
//                   </div>

//                   <div className="dropdown-item-row">
//                     <span>{text[language].language}</span>
//                     <select
//                       value={language}
//                       onChange={(e) => setLanguage(e.target.value)}
//                     >
//                       <option value="en">English</option>
//                       <option value="th">Thai</option>
//                     </select>
//                   </div>

//                   <div className="dropdown-item-row clickable">
//                     ❓ {text[language].help}
//                   </div>

//                   <div className="divider" />

//                   <div className="dropdown-item-row logout">
//                     ⏻ {text[language].logout}
//                   </div>
//                 </div>
//               )}
//             </div>

//           </div>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Header;
