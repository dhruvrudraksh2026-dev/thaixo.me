// import React, { useState, useRef, useEffect } from "react";
// import { Bell, Sun, Languages, LogOut, CheckCircle2 } from "lucide-react";
// import "../css/Header.css";
// import { useNavigate } from "react-router-dom";

// export default function Header() {
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [showNotificationPopup, setShowNotificationPopup] = useState(false);

//   const navigate = useNavigate();
//   const profileRef = useRef(null);
//   const notificationRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setShowProfileDropdown(false);
//       }

//       if (
//         notificationRef.current &&
//         !notificationRef.current.contains(event.target)
//       ) {
//         setShowNotificationPopup(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const notifications = [
//     {
//       id: 1,
//       text: "Your payout of 500 Bath is successful.",
//       time: "2 mins ago",
//     },
//     {
//       id: 2,
//       text: "New milestone reached: Thai Silver!",
//       time: "1 hour ago",
//     },
//     {
//       id: 3,
//       text: "System update scheduled for tonight.",
//       time: "5 hours ago",
//     },
//   ];

//   return (
//     <header className="header-container d-flex align-items-center justify-content-between px-lg-4 px-2 py-2 bg-white border-bottom">
//       <div className="header-left">
//         <h2 className="h5 fw-semibold mb-0 text-dark">ThaiXO Creator Studio</h2>
//       </div>

//       <div className="header-right d-flex align-items-center gap-4">
//         {/* Notification */}
//         <div className="position-relative" ref={notificationRef}>
//           <div
//             className="notification-icon-wrapper cursor-pointer"
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowNotificationPopup((prev) => !prev);
//               setShowProfileDropdown(false);
//             }}
//           >
//             <Bell size={24} className="text-danger" />
//             <span className="notification-badge">2</span>
//           </div>

//           {showNotificationPopup && (
//             <div className="notification-popup shadow-lg border rounded-3 p-3">
//               <h6 className="fw-bold mb-3">Notifications</h6>

//               <div className="notification-list">
//                 {notifications.map((n) => (
//                   <div
//                     key={n.id}
//                     className="notification-item border-bottom py-2"
//                   >
//                     <p className="small mb-1">{n.text}</p>
//                     <span className="text-muted smaller">{n.time}</span>
//                   </div>
//                 ))}
//               </div>

//               <button className="btn btn-link btn-sm text-danger w-100 mt-2 text-decoration-none">
//                 View All
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Profile */}
//         <div className="position-relative" ref={profileRef}>
//           <div
//             className="profile-trigger d-flex align-items-center cursor-pointer"
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowProfileDropdown((prev) => !prev);
//               setShowNotificationPopup(false);
//             }}
//           >
//             <img
//               src="https://picsum.photos/seed/binish/100/100"
//               alt="Profile"
//               className="rounded-circle border border-2 border-white shadow-sm"
//               width="40"
//               height="40"
//             />
//           </div>

//           {showProfileDropdown && (
//             <div className="profile-dropdown-container shadow-lg border rounded-3 overflow-hidden">
//               {/* Profile Top */}
//               <div className="p-3 bg-white">
//                 <div className="d-flex align-items-center gap-3">
//                   <img
//                     src="https://picsum.photos/seed/binish/100/100"
//                     alt="Profile Large"
//                     className="rounded-circle"
//                     width="50"
//                     height="50"
//                   />

//                   <div>
//                     <div className="d-flex align-items-center">
//                       <span className="fw-bold h6 mb-0">Binish_Saba</span>

//                       <CheckCircle2
//                         size={16}
//                         className="text-primary ms-1 fill-primary text-white"
//                       />

//                       <div className="verified-badge-bg">
//                         <CheckCircle2 size={14} className="text-info" />
//                       </div>
//                     </div>

//                     <p className="text-muted small mb-0">+91 - 93165 - 23565</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="dropdown-divider m-0"></div>

//               {/* Settings */}
//               <div className="p-2">
//                 {/* <div className="dropdown-item-row d-flex align-items-center justify-content-between p-2 rounded gap-5">
//                   <div className="d-flex align-items-center gap-2">
//                     <Sun size={18} />
//                     <span>Theme</span>
//                   </div>

//                   <select className="form-select form-select-sm border-0 bg-light">
//                     <option>System</option>
//                     <option>Light</option>
//                     <option>Dark</option>
//                   </select>
//                 </div> */}

//                 <div className="dropdown-item-row d-flex align-items-center justify-content-between p-2 rounded gap-4">
//                   <div className="d-flex align-items-center gap-2">
//                     <Languages size={18} />
//                     <span>Language</span>
//                   </div>

//                   <select className="form-select form-select-sm border-0 bg-light">
//                     <option>English</option>
//                     <option>Thai</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="dropdown-divider m-0"></div>

//               {/* Logout */}
//               <div className="p-2">
//                 <div
//                   className="dropdown-item-row logout-row d-flex align-items-center gap-2 p-2 rounded cursor-pointer text-dark"
//                   onClick={() => {
//                     // Optionally: clear user data here
//                     navigate("/");
//                   }}
//                 >
//                   <LogOut size={18} />

//                   <span className="fw-medium">Log out</span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }










// import React, { useState, useRef, useEffect } from "react";
// import { Bell, Sun, Languages, LogOut, CheckCircle2, Menu } from "lucide-react";
// import "../css/Header.css";
// import { useNavigate } from "react-router-dom";

// export default function Header({ toggleSidebar }) {
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [showNotificationPopup, setShowNotificationPopup] = useState(false);

//   const navigate = useNavigate();
//   const profileRef = useRef(null);
//   const notificationRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setShowProfileDropdown(false);
//       }

//       if (
//         notificationRef.current &&
//         !notificationRef.current.contains(event.target)
//       ) {
//         setShowNotificationPopup(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const notifications = [
//     {
//       id: 1,
//       text: "Your payout of 500 Bath is successful.",
//       time: "2 mins ago",
//     },
//     {
//       id: 2,
//       text: "New milestone reached: Thai Silver!",
//       time: "1 hour ago",
//     },
//     {
//       id: 3,
//       text: "System update scheduled for tonight.",
//       time: "5 hours ago",
//     },
//   ];

//   return (
//     <header className="header-container d-flex align-items-center justify-content-between px-lg-4 px-2 py-2 bg-white border-bottom">

//       {/* LEFT SECTION */}
//       <div className="header-left d-flex align-items-center gap-3">

//         {/* Sidebar Toggle */}
//         <button
//           className="sidebar-toggle-btn d-lg-none border-0 bg-transparent"
//           onClick={toggleSidebar}
//         >
//           <Menu size={24} />
//         </button>

//         <h2 className="h5 fw-semibold mb-0 text-dark">
//           ThaiXO Creator Studio
//         </h2>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="header-right d-flex align-items-center gap-4">

//         {/* Notification */}
//         <div className="position-relative" ref={notificationRef}>
//           <div
//             className="notification-icon-wrapper cursor-pointer"
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowNotificationPopup((prev) => !prev);
//               setShowProfileDropdown(false);
//             }}
//           >
//             <Bell size={24} className="text-danger" />
//             <span className="notification-badge">2</span>
//           </div>

//           {showNotificationPopup && (
//             <div className="notification-popup shadow-lg border rounded-3 p-3">
//               <h6 className="fw-bold mb-3">Notifications</h6>

//               <div className="notification-list">
//                 {notifications.map((n) => (
//                   <div
//                     key={n.id}
//                     className="notification-item border-bottom py-2"
//                   >
//                     <p className="small mb-1">{n.text}</p>
//                     <span className="text-muted smaller">{n.time}</span>
//                   </div>
//                 ))}
//               </div>

//               <button className="btn btn-link btn-sm text-danger w-100 mt-2 text-decoration-none">
//                 View All
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Profile */}
//         <div className="position-relative" ref={profileRef}>
//           <div
//             className="profile-trigger d-flex align-items-center cursor-pointer"
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowProfileDropdown((prev) => !prev);
//               setShowNotificationPopup(false);
//             }}
//           >
//             <img
//               src="https://picsum.photos/seed/binish/100/100"
//               alt="Profile"
//               className="rounded-circle border border-2 border-white shadow-sm"
//               width="40"
//               height="40"
//             />
//           </div>

//           {showProfileDropdown && (
//             <div className="profile-dropdown-container shadow-lg border rounded-3 overflow-hidden">

//               {/* Profile Top */}
//               <div className="p-3 bg-white">
//                 <div className="d-flex align-items-center gap-3">
//                   <img
//                     src="https://picsum.photos/seed/binish/100/100"
//                     alt="Profile Large"
//                     className="rounded-circle"
//                     width="50"
//                     height="50"
//                   />

//                   <div>
//                     <div className="d-flex align-items-center">
//                       <span className="fw-bold h6 mb-0">Binish_Saba</span>

//                       <CheckCircle2
//                         size={16}
//                         className="text-primary ms-1 fill-primary text-white"
//                       />

//                       <div className="verified-badge-bg">
//                         <CheckCircle2 size={14} className="text-info" />
//                       </div>
//                     </div>

//                     <p className="text-muted small mb-0">
//                       +91 - 93165 - 23565
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="dropdown-divider m-0"></div>

//               {/* Settings */}
//               <div className="p-2">

//                 <div className="dropdown-item-row d-flex align-items-center justify-content-between p-2 rounded gap-4">
//                   <div className="d-flex align-items-center gap-2">
//                     <Languages size={18} />
//                     <span>Language</span>
//                   </div>

//                   <select className="form-select form-select-sm border-0 bg-light">
//                     <option>English</option>
//                     <option>Thai</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="dropdown-divider m-0"></div>

//               {/* Logout */}
//               <div className="p-2">
//                 <div
//                   className="dropdown-item-row logout-row d-flex align-items-center gap-2 p-2 rounded cursor-pointer text-dark"
//                   onClick={() => {
//                     navigate("/");
//                   }}
//                 >
//                   <LogOut size={18} />
//                   <span className="fw-medium">Log out</span>
//                 </div>
//               </div>

//             </div>
//           )}
//         </div>

//       </div>
//     </header>
//   );
// }
























// import React, { useState, useRef, useEffect } from "react";
// import { Bell, Sun, Languages, LogOut, CheckCircle2, Menu } from "lucide-react";
// import axios from "axios";
// import "../css/Header.css";
// import { useNavigate } from "react-router-dom";

// export default function Header({ toggleSidebar }) {
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [showNotificationPopup, setShowNotificationPopup] = useState(false);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [userName, setUserName] = useState("Binish_Saba");
//   const [userPhone, setUserPhone] = useState("+91 - 93165 - 23565");
//   const [userAvatar, setUserAvatar] = useState("https://picsum.photos/seed/binish/100/100");
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       text: "Your payout of 500 Bath is successful.",
//       time: "2 mins ago",
//       read: false,
//     },
//     {
//       id: 2,
//       text: "New milestone reached: Thai Silver!",
//       time: "1 hour ago",
//       read: false,
//     },
//     {
//       id: 3,
//       text: "System update scheduled for tonight.",
//       time: "5 hours ago",
//       read: true,
//     },
//   ]);

//   const navigate = useNavigate();
//   const profileRef = useRef(null);
//   const notificationRef = useRef(null);

//   useEffect(() => {
//     // Load user data from localStorage if available
//     const storedName = localStorage.getItem("userName");
//     const storedPhone = localStorage.getItem("userPhone");
//     const storedAvatar = localStorage.getItem("userAvatar");
    
//     if (storedName) setUserName(storedName);
//     if (storedPhone) setUserPhone(storedPhone);
//     if (storedAvatar) setUserAvatar(storedAvatar);
    
//     function handleClickOutside(event) {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setShowProfileDropdown(false);
//       }

//       if (
//         notificationRef.current &&
//         !notificationRef.current.contains(event.target)
//       ) {
//         setShowNotificationPopup(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

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

//   const handleMarkAsRead = (notificationId) => {
//     setNotifications(prev =>
//       prev.map(notif =>
//         notif.id === notificationId ? { ...notif, read: true } : notif
//       )
//     );
//   };

//   const handleMarkAllAsRead = () => {
//     setNotifications(prev =>
//       prev.map(notif => ({ ...notif, read: true }))
//     );
//   };

//   const unreadCount = notifications.filter(n => !n.read).length;

//   return (
//     <header className="header-container d-flex align-items-center justify-content-between px-lg-4 px-2 py-2 bg-white border-bottom">

//       {/* LEFT SECTION */}
//       <div className="header-left d-flex align-items-center gap-3">

//         {/* Sidebar Toggle */}
//         <button
//           className="sidebar-toggle-btn d-lg-none border-0 bg-transparent"
//           onClick={toggleSidebar}
//         >
//           <Menu size={24} />
//         </button>

//         <h2 className="h5 fw-semibold mb-0 text-dark">
//           ThaiXO Creator Studio
//         </h2>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="header-right d-flex align-items-center gap-4">

//         {/* Notification */}
//         <div className="position-relative" ref={notificationRef}>
//           <div
//             className="notification-icon-wrapper cursor-pointer"
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowNotificationPopup((prev) => !prev);
//               setShowProfileDropdown(false);
//             }}
//           >
//             <Bell size={24} className="text-danger" />
//             {unreadCount > 0 && (
//               <span className="notification-badge">{unreadCount}</span>
//             )}
//           </div>

//           {showNotificationPopup && (
//             <div className="notification-popup shadow-lg border rounded-3 p-3" style={{ width: "320px" }}>
//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <h6 className="fw-bold mb-0">Notifications</h6>
//                 {unreadCount > 0 && (
//                   <button 
//                     onClick={handleMarkAllAsRead}
//                     className="btn btn-link btn-sm text-danger p-0 text-decoration-none"
//                   >
//                     Mark all as read
//                   </button>
//                 )}
//               </div>

//               <div className="notification-list" style={{ maxHeight: "300px", overflowY: "auto" }}>
//                 {notifications.length === 0 ? (
//                   <p className="text-muted text-center small py-3">No notifications</p>
//                 ) : (
//                   notifications.map((n) => (
//                     <div
//                       key={n.id}
//                       className={`notification-item border-bottom py-2 ${!n.read ? 'bg-light' : ''}`}
//                       onClick={() => handleMarkAsRead(n.id)}
//                       style={{ cursor: "pointer" }}
//                     >
//                       <p className="small mb-1">{n.text}</p>
//                       <span className="text-muted smaller">{n.time}</span>
//                     </div>
//                   ))
//                 )}
//               </div>

//               <button className="btn btn-link btn-sm text-danger w-100 mt-2 text-decoration-none">
//                 View All
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Profile */}
//         <div className="position-relative" ref={profileRef}>
//           <div
//             className="profile-trigger d-flex align-items-center cursor-pointer"
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowProfileDropdown((prev) => !prev);
//               setShowNotificationPopup(false);
//             }}
//           >
//             <img
//               src={userAvatar}
//               alt="Profile"
//               className="rounded-circle border border-2 border-white shadow-sm"
//               width="40"
//               height="40"
//             />
//           </div>

//           {showProfileDropdown && (
//             <div className="profile-dropdown-container shadow-lg border rounded-3 overflow-hidden" style={{ width: "280px" }}>

//               {/* Profile Top */}
//               <div className="p-3 bg-white">
//                 <div className="d-flex align-items-center gap-3">
//                   <img
//                     src={userAvatar}
//                     alt="Profile Large"
//                     className="rounded-circle"
//                     width="50"
//                     height="50"
//                   />

//                   <div>
//                     <div className="d-flex align-items-center">
//                       <span className="fw-bold h6 mb-0">{userName}</span>
//                       <CheckCircle2
//                         size={16}
//                         className="text-primary ms-1"
//                       />
//                     </div>
//                     <p className="text-muted small mb-0">
//                       {userPhone}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="dropdown-divider m-0"></div>

//               {/* Settings */}
//               <div className="p-2">

//                 <div className="dropdown-item-row d-flex align-items-center justify-content-between p-2 rounded gap-4">
//                   <div className="d-flex align-items-center gap-2">
//                     <Languages size={18} />
//                     <span>Language</span>
//                   </div>

//                   <select className="form-select form-select-sm border-0 bg-light" style={{ width: "100px" }}>
//                     <option>English</option>
//                     <option>Thai</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="dropdown-divider m-0"></div>

//               {/* Logout */}
//               <div className="p-2">
//                 <div
//                   className={`dropdown-item-row logout-row d-flex align-items-center gap-2 p-2 rounded cursor-pointer text-dark ${isLoggingOut ? 'opacity-50' : ''}`}
//                   onClick={handleLogout}
//                   style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//                 >
//                   {isLoggingOut ? (
//                     <>
//                       <div className="spinner-border spinner-border-sm" role="status" style={{ width: "18px", height: "18px", color: "#e9527a" }}>
//                         <span className="visually-hidden">Loading...</span>
//                       </div>
//                       <span className="fw-medium">Logging out...</span>
//                     </>
//                   ) : (
//                     <>
//                       <LogOut size={18} />
//                       <span className="fw-medium">Log out</span>
//                     </>
//                   )}
//                 </div>
//               </div>

//             </div>
//           )}
//         </div>

//       </div>
//     </header>
//   );
// }






//=================================================================Done-code(start)=================================================================








// import React, { useState, useRef, useEffect } from "react";
// import { Bell, Sun, Languages, LogOut, CheckCircle2, Menu } from "lucide-react";
// import axios from "axios";
// import "../css/Header.css";
// import { useNavigate } from "react-router-dom";

// export default function Header({ toggleSidebar }) {
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [showNotificationPopup, setShowNotificationPopup] = useState(false);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [isLoadingProfile, setIsLoadingProfile] = useState(true);
//   const [userName, setUserName] = useState("Loading...");
//   const [userPhone, setUserPhone] = useState("");
//   const [userAvatar, setUserAvatar] = useState("https://picsum.photos/seed/default/100/100");
//   const [userEmail, setUserEmail] = useState("");
//   const [isVerified, setIsVerified] = useState(false);
//   const [isCreator, setIsCreator] = useState(false);
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       text: "Your payout of 500 Bath is successful.",
//       time: "2 mins ago",
//       read: false,
//     },
//     {
//       id: 2,
//       text: "New milestone reached: Thai Silver!",
//       time: "1 hour ago",
//       read: false,
//     },
//     {
//       id: 3,
//       text: "System update scheduled for tonight.",
//       time: "5 hours ago",
//       read: true,
//     },
//   ]);

//   const navigate = useNavigate();
//   const profileRef = useRef(null);
//   const notificationRef = useRef(null);

//   // Fetch user profile from API
//   const fetchUserProfile = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("Fetching profile with token:", token);
      
//       if (!token) {
//         console.log("No token found, skipping profile fetch");
//         setIsLoadingProfile(false);
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/profile`;
//       console.log("Profile API URL:", apiUrl);
      
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${token}`
//         },
//         withCredentials: true,
//       });

//       console.log("Profile API Response:", response);
//       const data = response.data;
      
//       // Check if login is required
//       if (data.loginRequired) {
//         console.log("Login required - token may be invalid");
//         setIsLoadingProfile(false);
//         return;
//       }

//       if (data.success && data.data) {
//         console.log("Profile data received:", data.data);
//         const profile = data.data;
        
//         // Format phone number
//         const formattedPhone = profile.country_code && profile.mobile_no 
//           ? `${profile.country_code} ${profile.mobile_no}`
//           : profile.mobile_no || "Not provided";
        
//         setUserName(profile.name || "User");
//         setUserPhone(formattedPhone);
//         setUserEmail(profile.email || "");
//         setIsVerified(profile.is_verified || false);
//         setIsCreator(profile.is_creator || false);
        
//         // Set avatar if available, otherwise use default
//         if (profile.profile_photo && profile.profile_photo !== "") {
//           setUserAvatar(profile.profile_photo);
//         }
        
//         // Store user data in localStorage for other components
//         localStorage.setItem("userName", profile.name || "User");
//         localStorage.setItem("userPhone", formattedPhone);
//         if (profile.profile_photo) {
//           localStorage.setItem("userAvatar", profile.profile_photo);
//         }
//       } else {
//         console.log("Profile fetch failed:", data.message);
//       }
//     } catch (err) {
//       console.error("Error fetching profile:", err);
//       console.error("Error response:", err.response);
      
//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         console.log("Authentication failed for profile fetch");
//         localStorage.removeItem("token");
//         navigate("/");
//       }
//     } finally {
//       setIsLoadingProfile(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserProfile();
    
//     function handleClickOutside(event) {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setShowProfileDropdown(false);
//       }

//       if (
//         notificationRef.current &&
//         !notificationRef.current.contains(event.target)
//       ) {
//         setShowNotificationPopup(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

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

//   const handleMarkAsRead = (notificationId) => {
//     setNotifications(prev =>
//       prev.map(notif =>
//         notif.id === notificationId ? { ...notif, read: true } : notif
//       )
//     );
//   };

//   const handleMarkAllAsRead = () => {
//     setNotifications(prev =>
//       prev.map(notif => ({ ...notif, read: true }))
//     );
//   };

//   const unreadCount = notifications.filter(n => !n.read).length;

//   return (
//     <header className="header-container d-flex align-items-center justify-content-between px-lg-4 px-2 py-2 bg-white border-bottom">

//       {/* LEFT SECTION */}
//       <div className="header-left d-flex align-items-center gap-3">

//         {/* Sidebar Toggle */}
//         <button
//           className="sidebar-toggle-btn d-lg-none border-0 bg-transparent"
//           onClick={toggleSidebar}
//         >
//           <Menu size={24} />
//         </button>

//         <h2 className="h5 fw-semibold mb-0 text-dark">
//           ThaiXO Creator Studio
//         </h2>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="header-right d-flex align-items-center gap-4">

//         {/* Notification */}
//         <div className="position-relative" ref={notificationRef}>
//           <div
//             className="notification-icon-wrapper cursor-pointer"
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowNotificationPopup((prev) => !prev);
//               setShowProfileDropdown(false);
//             }}
//           >
//             <Bell size={24} className="text-danger" />
//             {unreadCount > 0 && (
//               <span className="notification-badge">{unreadCount}</span>
//             )}
//           </div>

//           {showNotificationPopup && (
//             <div className="notification-popup shadow-lg border rounded-3 p-3" style={{ width: "320px" }}>
//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <h6 className="fw-bold mb-0">Notifications</h6>
//                 {unreadCount > 0 && (
//                   <button 
//                     onClick={handleMarkAllAsRead}
//                     className="btn btn-link btn-sm text-danger p-0 text-decoration-none"
//                   >
//                     Mark all as read
//                   </button>
//                 )}
//               </div>

//               <div className="notification-list" style={{ maxHeight: "300px", overflowY: "auto" }}>
//                 {notifications.length === 0 ? (
//                   <p className="text-muted text-center small py-3">No notifications</p>
//                 ) : (
//                   notifications.map((n) => (
//                     <div
//                       key={n.id}
//                       className={`notification-item border-bottom py-2 ${!n.read ? 'bg-light' : ''}`}
//                       onClick={() => handleMarkAsRead(n.id)}
//                       style={{ cursor: "pointer" }}
//                     >
//                       <p className="small mb-1">{n.text}</p>
//                       <span className="text-muted smaller">{n.time}</span>
//                     </div>
//                   ))
//                 )}
//               </div>

//               <button className="btn btn-link btn-sm text-danger w-100 mt-2 text-decoration-none">
//                 View All
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Profile */}
//         <div className="position-relative" ref={profileRef}>
//           <div
//             className="profile-trigger d-flex align-items-center cursor-pointer"
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowProfileDropdown((prev) => !prev);
//               setShowNotificationPopup(false);
//             }}
//           >
//             <img
//               src={userAvatar}
//               alt="Profile"
//               className="rounded-circle border border-2 border-white shadow-sm"
//               width="40"
//               height="40"
//               onError={(e) => {
//                 e.target.src = "https://picsum.photos/seed/default/100/100";
//               }}
//             />
//           </div>

//           {showProfileDropdown && (
//             <div className="profile-dropdown-container shadow-lg border rounded-3 overflow-hidden" style={{ width: "280px" }}>

//               {/* Profile Top */}
//               <div className="p-3 bg-white">
//                 <div className="d-flex align-items-center gap-3">
//                   <img
//                     src={userAvatar}
//                     alt="Profile Large"
//                     className="rounded-circle"
//                     width="50"
//                     height="50"
//                     onError={(e) => {
//                       e.target.src = "https://picsum.photos/seed/default/100/100";
//                     }}
//                   />

//                   <div>
//                     <div className="d-flex align-items-center">
//                       <span className="fw-bold h6 mb-0">{isLoadingProfile ? "Loading..." : userName}</span>
//                       {isVerified && (
//                         <CheckCircle2
//                           size={16}
//                           className="text-primary ms-1"
//                         />
//                       )}
//                     </div>
//                     <p className="text-muted small mb-0">
//                       {isLoadingProfile ? "Loading..." : userPhone}
//                     </p>
//                     {userEmail && (
//                       <p className="text-muted small mb-0 mt-1">
//                         {userEmail}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="dropdown-divider m-0"></div>

//               {/* Settings */}
//               <div className="p-2">

//                 <div className="dropdown-item-row d-flex align-items-center justify-content-between p-2 rounded gap-4">
//                   <div className="d-flex align-items-center gap-2">
//                     <Languages size={18} />
//                     <span>Language</span>
//                   </div>

//                   <select className="form-select form-select-sm border-0 bg-light" style={{ width: "100px" }}>
//                     <option>English</option>
//                     <option>Thai</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="dropdown-divider m-0"></div>

//               {/* Logout */}
//               <div className="p-2">
//                 <div
//                   className={`dropdown-item-row logout-row d-flex align-items-center gap-2 p-2 rounded cursor-pointer text-dark ${isLoggingOut ? 'opacity-50' : ''}`}
//                   onClick={handleLogout}
//                   style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//                 >
//                   {isLoggingOut ? (
//                     <>
//                       <div className="spinner-border spinner-border-sm" role="status" style={{ width: "18px", height: "18px", color: "#e9527a" }}>
//                         <span className="visually-hidden">Loading...</span>
//                       </div>
//                       <span className="fw-medium">Logging out...</span>
//                     </>
//                   ) : (
//                     <>
//                       <LogOut size={18} />
//                       <span className="fw-medium">Log out</span>
//                     </>
//                   )}
//                 </div>
//               </div>

//             </div>
//           )}
//         </div>

//       </div>
//     </header>
//   );
// }














// import React, { useState, useRef, useEffect } from "react";
// import { Bell, Sun, Languages, LogOut, CheckCircle2, Menu } from "lucide-react";
// import axios from "axios";
// import "../css/Header.css";
// import { useNavigate } from "react-router-dom";

// export default function Header({ toggleSidebar }) {
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [showNotificationPopup, setShowNotificationPopup] = useState(false);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [isLoadingProfile, setIsLoadingProfile] = useState(true);
//   const [userName, setUserName] = useState("Loading...");
//   const [userPhone, setUserPhone] = useState("");
//   const [userAvatar, setUserAvatar] = useState("https://picsum.photos/seed/default/100/100");
//   const [userEmail, setUserEmail] = useState("");
//   const [isVerified, setIsVerified] = useState(false);
//   const [isCreator, setIsCreator] = useState(false);
//   const [language, setLanguage] = useState(() => {
//     return localStorage.getItem('appLanguage') || 'en';
//   });
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       text: "Your payout of 500 Bath is successful.",
//       time: "2 mins ago",
//       read: false,
//     },
//     {
//       id: 2,
//       text: "New milestone reached: Thai Silver!",
//       time: "1 hour ago",
//       read: false,
//     },
//     {
//       id: 3,
//       text: "System update scheduled for tonight.",
//       time: "5 hours ago",
//       read: true,
//     },
//   ]);

//   const navigate = useNavigate();
//   const profileRef = useRef(null);
//   const notificationRef = useRef(null);

//   // Fetch user profile from API
//   const fetchUserProfile = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("Fetching profile with token:", token);
      
//       if (!token) {
//         console.log("No token found, skipping profile fetch");
//         setIsLoadingProfile(false);
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/profile`;
//       console.log("Profile API URL:", apiUrl);
      
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${token}`
//         },
//         withCredentials: true,
//       });

//       console.log("Profile API Response:", response);
//       const data = response.data;
      
//       if (data.loginRequired) {
//         console.log("Login required - token may be invalid");
//         setIsLoadingProfile(false);
//         return;
//       }

//       if (data.success && data.data) {
//         console.log("Profile data received:", data.data);
//         const profile = data.data;
        
//         const formattedPhone = profile.country_code && profile.mobile_no 
//           ? `${profile.country_code} ${profile.mobile_no}`
//           : profile.mobile_no || "Not provided";
        
//         setUserName(profile.name || "User");
//         setUserPhone(formattedPhone);
//         setUserEmail(profile.email || "");
//         setIsVerified(profile.is_verified || false);
//         setIsCreator(profile.is_creator || false);
        
//         if (profile.profile_photo && profile.profile_photo !== "") {
//           setUserAvatar(profile.profile_photo);
//         }
        
//         localStorage.setItem("userName", profile.name || "User");
//         localStorage.setItem("userPhone", formattedPhone);
//         if (profile.profile_photo) {
//           localStorage.setItem("userAvatar", profile.profile_photo);
//         }
//       } else {
//         console.log("Profile fetch failed:", data.message);
//       }
//     } catch (err) {
//       console.error("Error fetching profile:", err);
//       console.error("Error response:", err.response);
      
//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         console.log("Authentication failed for profile fetch");
//         localStorage.removeItem("token");
//         navigate("/");
//       }
//     } finally {
//       setIsLoadingProfile(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserProfile();
    
//     function handleClickOutside(event) {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setShowProfileDropdown(false);
//       }

//       if (
//         notificationRef.current &&
//         !notificationRef.current.contains(event.target)
//       ) {
//         setShowNotificationPopup(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     // Listen for storage changes (when Sidebar changes language)
//     const handleStorageChange = () => {
//       const storedLang = localStorage.getItem('appLanguage');
//       if (storedLang && storedLang !== language) {
//         setLanguage(storedLang);
//       }
//     };
//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   // When language changes, update localStorage and dispatch event
//   const handleLanguageChange = (e) => {
//     const newLang = e.target.value;
//     setLanguage(newLang);
//     localStorage.setItem('appLanguage', newLang);
//     // Dispatch a storage event so Sidebar picks it up
//     window.dispatchEvent(new Event('storage'));
//   };

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

//   const handleMarkAsRead = (notificationId) => {
//     setNotifications(prev =>
//       prev.map(notif =>
//         notif.id === notificationId ? { ...notif, read: true } : notif
//       )
//     );
//   };

//   const handleMarkAllAsRead = () => {
//     setNotifications(prev =>
//       prev.map(notif => ({ ...notif, read: true }))
//     );
//   };

//   const unreadCount = notifications.filter(n => !n.read).length;

//   return (
//     <header className="header-container d-flex align-items-center justify-content-between px-lg-4 px-2 py-2 bg-white border-bottom">

//       {/* LEFT SECTION */}
//       <div className="header-left d-flex align-items-center gap-3">
//         <button
//           className="sidebar-toggle-btn d-lg-none border-0 bg-transparent"
//           onClick={toggleSidebar}
//         >
//           <Menu size={24} />
//         </button>

//         <h2 className="h5 fw-semibold mb-0 text-dark">
//           ThaiXO Creator Studio
//         </h2>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="header-right d-flex align-items-center gap-4">

//         {/* Notification */}
//         <div className="position-relative" ref={notificationRef}>
//           <div
//             className="notification-icon-wrapper cursor-pointer"
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowNotificationPopup((prev) => !prev);
//               setShowProfileDropdown(false);
//             }}
//           >
//             <Bell size={24} className="text-danger" />
//             {unreadCount > 0 && (
//               <span className="notification-badge">{unreadCount}</span>
//             )}
//           </div>

//           {showNotificationPopup && (
//             <div className="notification-popup shadow-lg border rounded-3 p-3" style={{ width: "320px" }}>
//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <h6 className="fw-bold mb-0">Notifications</h6>
//                 {unreadCount > 0 && (
//                   <button 
//                     onClick={handleMarkAllAsRead}
//                     className="btn btn-link btn-sm text-danger p-0 text-decoration-none"
//                   >
//                     Mark all as read
//                   </button>
//                 )}
//               </div>

//               <div className="notification-list" style={{ maxHeight: "300px", overflowY: "auto" }}>
//                 {notifications.length === 0 ? (
//                   <p className="text-muted text-center small py-3">No notifications</p>
//                 ) : (
//                   notifications.map((n) => (
//                     <div
//                       key={n.id}
//                       className={`notification-item border-bottom py-2 ${!n.read ? 'bg-light' : ''}`}
//                       onClick={() => handleMarkAsRead(n.id)}
//                       style={{ cursor: "pointer" }}
//                     >
//                       <p className="small mb-1">{n.text}</p>
//                       <span className="text-muted smaller">{n.time}</span>
//                     </div>
//                   ))
//                 )}
//               </div>

//               <button className="btn btn-link btn-sm text-danger w-100 mt-2 text-decoration-none">
//                 View All
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Profile */}
//         <div className="position-relative" ref={profileRef}>
//           <div
//             className="profile-trigger d-flex align-items-center cursor-pointer"
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowProfileDropdown((prev) => !prev);
//               setShowNotificationPopup(false);
//             }}
//           >
//             <img
//               src={userAvatar}
//               alt="Profile"
//               className="rounded-circle border border-2 border-white shadow-sm"
//               width="40"
//               height="40"
//               onError={(e) => {
//                 e.target.src = "https://picsum.photos/seed/default/100/100";
//               }}
//             />
//           </div>

//           {showProfileDropdown && (
//             <div className="profile-dropdown-container shadow-lg border rounded-3 overflow-hidden" style={{ width: "280px" }}>

//               {/* Profile Top */}
//               <div className="p-3 bg-white">
//                 <div className="d-flex align-items-center gap-3">
//                   <img
//                     src={userAvatar}
//                     alt="Profile Large"
//                     className="rounded-circle"
//                     width="50"
//                     height="50"
//                     onError={(e) => {
//                       e.target.src = "https://picsum.photos/seed/default/100/100";
//                     }}
//                   />

//                   <div>
//                     <div className="d-flex align-items-center">
//                       <span className="fw-bold h6 mb-0">{isLoadingProfile ? "Loading..." : userName}</span>
//                       {isVerified && (
//                         <CheckCircle2
//                           size={16}
//                           className="text-primary ms-1"
//                         />
//                       )}
//                     </div>
//                     <p className="text-muted small mb-0">
//                       {isLoadingProfile ? "Loading..." : userPhone}
//                     </p>
//                     {userEmail && (
//                       <p className="text-muted small mb-0 mt-1">
//                         {userEmail}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="dropdown-divider m-0"></div>

//               {/* Settings */}
//               <div className="p-2">
//                 <div className="dropdown-item-row d-flex align-items-center justify-content-between p-2 rounded gap-4">
//                   <div className="d-flex align-items-center gap-2">
//                     <Languages size={18} />
//                     <span>Language</span>
//                   </div>

//                   <select 
//                     className="form-select form-select-sm border-0 bg-light" 
//                     style={{ width: "100px" }}
//                     value={language}
//                     onChange={handleLanguageChange}
//                   >
//                     <option value="en">English</option>
//                     <option value="th">Thai</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="dropdown-divider m-0"></div>

//               {/* Logout */}
//               <div className="p-2">
//                 <div
//                   className={`dropdown-item-row logout-row d-flex align-items-center gap-2 p-2 rounded cursor-pointer text-dark ${isLoggingOut ? 'opacity-50' : ''}`}
//                   onClick={handleLogout}
//                   style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//                 >
//                   {isLoggingOut ? (
//                     <>
//                       <div className="spinner-border spinner-border-sm" role="status" style={{ width: "18px", height: "18px", color: "#e9527a" }}>
//                         <span className="visually-hidden">Loading...</span>
//                       </div>
//                       <span className="fw-medium">Logging out...</span>
//                     </>
//                   ) : (
//                     <>
//                       <LogOut size={18} />
//                       <span className="fw-medium">Log out</span>
//                     </>
//                   )}
//                 </div>
//               </div>

//             </div>
//           )}
//         </div>

//       </div>
//     </header>
//   );
// }















// import React, { useState, useRef, useEffect } from "react";
// import { Bell, Sun, Languages, LogOut, CheckCircle2, Menu } from "lucide-react";
// import axios from "axios";
// import "../css/Header.css";
// import { useNavigate } from "react-router-dom";

// export default function Header({ toggleSidebar }) {
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [showNotificationPopup, setShowNotificationPopup] = useState(false);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [isLoadingProfile, setIsLoadingProfile] = useState(true);
//   const [userName, setUserName] = useState("Loading...");
//   const [userPhone, setUserPhone] = useState("");
//   const [userAvatar, setUserAvatar] = useState("https://picsum.photos/seed/default/100/100");
//   const [userEmail, setUserEmail] = useState("");
//   const [isVerified, setIsVerified] = useState(false);
//   const [isCreator, setIsCreator] = useState(false);
//   const [language, setLanguage] = useState(() => {
//     return localStorage.getItem('appLanguage') || 'en';
//   });

//   // Notification state
//   const [notifications, setNotifications] = useState([]);
//   const [loadingNotifications, setLoadingNotifications] = useState(false);
//   const [notificationError, setNotificationError] = useState(null);

//   const navigate = useNavigate();
//   const profileRef = useRef(null);
//   const notificationRef = useRef(null);

//   // Helper: get auth token from localStorage
//   const getAuthHeader = () => {
//     const token = localStorage.getItem("token");
//     return token ? { Authorization: token } : {};
//   };

//   // Fetch user profile
//   const fetchUserProfile = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setIsLoadingProfile(false);
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/profile`;
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.loginRequired) {
//         setIsLoadingProfile(false);
//         return;
//       }

//       if (data.success && data.data) {
//         const profile = data.data;
//         const formattedPhone = profile.country_code && profile.mobile_no
//           ? `${profile.country_code} ${profile.mobile_no}`
//           : profile.mobile_no || "Not provided";

//         setUserName(profile.name || "User");
//         setUserPhone(formattedPhone);
//         setUserEmail(profile.email || "");
//         setIsVerified(profile.is_verified || false);
//         setIsCreator(profile.is_creator || false);

//         if (profile.profile_photo && profile.profile_photo !== "") {
//           setUserAvatar(profile.profile_photo);
//         }

//         localStorage.setItem("userName", profile.name || "User");
//         localStorage.setItem("userPhone", formattedPhone);
//         if (profile.profile_photo) {
//           localStorage.setItem("userAvatar", profile.profile_photo);
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching profile:", err);
//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         localStorage.removeItem("token");
//         navigate("/");
//       }
//     } finally {
//       setIsLoadingProfile(false);
//     }
//   };

//   // Fetch notifications from API
//   const fetchNotifications = async () => {
//     setLoadingNotifications(true);
//     setNotificationError(null);
//     try {
//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/notifications`;
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.success && Array.isArray(data.data)) {
//         setNotifications(data.data);
//       } else {
//         setNotificationError(data.message || "Failed to load notifications");
//       }
//     } catch (err) {
//       console.error("Error fetching notifications:", err);
//       setNotificationError("Could not load notifications");
//     } finally {
//       setLoadingNotifications(false);
//     }
//   };

//   // Mark all notifications as read (API call)
//   const handleMarkAllAsRead = async () => {
//     try {
//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/notifications`;
//       const response = await axios.patch(apiUrl, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.success) {
//         // Update local state: mark all as read
//         setNotifications(prev =>
//           prev.map(notif => ({ ...notif, read_status: 1 }))
//         );
//       } else {
//         console.error("Failed to mark all as read:", data.message);
//       }
//     } catch (err) {
//       console.error("Error marking all as read:", err);
//     }
//   };

//   // Mark individual notification as read (frontend only – no backend endpoint)
//   // This provides immediate UI feedback. On page refresh, the read status will be
//   // fetched again from the server, so it's safe to keep as client-side for now.
//   const handleMarkAsRead = (notificationId) => {
//     setNotifications(prev =>
//       prev.map(notif =>
//         notif.id === notificationId ? { ...notif, read_status: 1 } : notif
//       )
//     );
//   };

//   useEffect(() => {
//     fetchUserProfile();
//     fetchNotifications();

//     function handleClickOutside(event) {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setShowProfileDropdown(false);
//       }

//       if (
//         notificationRef.current &&
//         !notificationRef.current.contains(event.target)
//       ) {
//         setShowNotificationPopup(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     // Listen for storage changes (when Sidebar changes language)
//     const handleStorageChange = () => {
//       const storedLang = localStorage.getItem('appLanguage');
//       if (storedLang && storedLang !== language) {
//         setLanguage(storedLang);
//       }
//     };
//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   const handleLanguageChange = (e) => {
//     const newLang = e.target.value;
//     setLanguage(newLang);
//     localStorage.setItem('appLanguage', newLang);
//     window.dispatchEvent(new Event('storage'));
//   };

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

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/logout`;
//       const response = await axios.post(apiUrl, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.loginRequired) {
//         localStorage.clear();
//         navigate("/");
//         return;
//       }

//       if (data.success) {
//         localStorage.clear();
//         navigate("/");
//       } else {
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

//   const unreadCount = notifications.filter(n => n.read_status === 0).length;

//   return (
//     <header className="header-container d-flex align-items-center justify-content-between px-lg-4 px-2 py-2 bg-white border-bottom">

//       {/* LEFT SECTION */}
//       <div className="header-left d-flex align-items-center gap-3">
//         <button
//           className="sidebar-toggle-btn d-lg-none border-0 bg-transparent"
//           onClick={toggleSidebar}
//         >
//           <Menu size={24} />
//         </button>

//         <h2 className="h5 fw-semibold mb-0 text-dark">
//           ThaiXO Creator Studio
//         </h2>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="header-right d-flex align-items-center gap-4">

//         {/* Notification */}
//         <div className="position-relative" ref={notificationRef}>
//           <div
//             className="notification-icon-wrapper cursor-pointer"
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowNotificationPopup((prev) => !prev);
//               setShowProfileDropdown(false);
//             }}
//           >
//             <Bell size={24} className="text-danger" />
//             {unreadCount > 0 && (
//               <span className="notification-badge">{unreadCount}</span>
//             )}
//           </div>

//           {showNotificationPopup && (
//             <div className="notification-popup shadow-lg border rounded-3 p-3" style={{ width: "320px" }}>
//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <h6 className="fw-bold mb-0 text-black">Notifications</h6>
//                 {unreadCount > 0 && (
//                   <button
//                     onClick={handleMarkAllAsRead}
//                     className="btn btn-link btn-sm text-danger p-0 text-decoration-none"
//                   >
//                     Mark all as read
//                   </button>
//                 )}
//               </div>

//               <div className="notification-list" style={{ maxHeight: "300px", overflowY: "auto" }}>
//                 {loadingNotifications && (
//                   <div className="text-center py-3">
//                     <div className="spinner-border spinner-border-sm text-danger" role="status">
//                       <span className="visually-hidden">Loading...</span>
//                     </div>
//                     <p className="text-muted small mt-2">Loading notifications...</p>
//                   </div>
//                 )}

//                 {!loadingNotifications && notificationError && (
//                   <p className="text-danger text-center small py-3">{notificationError}</p>
//                 )}

//                 {!loadingNotifications && !notificationError && notifications.length === 0 && (
//                   <p className="text-muted text-center small py-3">No notifications</p>
//                 )}

//                 {!loadingNotifications && !notificationError && notifications.map((n) => (
//                   <div
//                     key={n.id}
//                     className={`notification-item border-bottom py-2 text-black ${n.read_status === 0 ? 'bg-light' : ''}`}
//                     onClick={() => handleMarkAsRead(n.id)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <p className="small mb-1 fw-semibold">{n.title}</p>
//                     <p className="small mb-1">{n.body}</p>
//                     <span className="text-muted smaller">{n.relative_time}</span>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 className="btn btn-link btn-sm text-danger w-100 mt-2 text-decoration-none"
//                 onClick={() => {
//                   // Optionally navigate to full notifications page if you have one
//                   // navigate("/notifications");
//                   setShowNotificationPopup(false);
//                 }}
//               >
//                 View All
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Profile */}
//         <div className="position-relative" ref={profileRef}>
//           <div
//             // className="profile-trigger d-flex align-items-center cursor-pointer"
//             className="profile-trigger img-fluid"
//             onClick={(e) => {
//               e.stopPropagation();
//               setShowProfileDropdown((prev) => !prev);
//               setShowNotificationPopup(false);
//             }}
//           >
//             <img
//               src={userAvatar}
//               alt="Profile"
//               className="rounded-circle border border-2 border-white shadow-sm"
//               width="40"
//               height="40"
//               onError={(e) => {
//                 e.target.src = "https://picsum.photos/seed/default/100/100";
//               }}
//             />
//           </div>

//           {showProfileDropdown && (
//             <div className="profile-dropdown-container shadow-lg border rounded-3 overflow-hidden" style={{ width: "280px" }}>

//               {/* Profile Top */}
//               <div className="p-3 bg-white">
//                 <div className="d-flex align-items-center gap-3">
//                   <img
//                     src={userAvatar}
//                     alt="Profile Large"
//                     className="rounded-circle"
//                     width="50"
//                     height="50"
//                     onError={(e) => {
//                       e.target.src = "https://picsum.photos/seed/default/100/100";
//                     }}
//                   />

//                   <div>
//                     <div className="d-flex align-items-center">
//                       <span className="fw-bold h6 mb-0 text-black">{isLoadingProfile ? "Loading..." : userName}</span>
//                       {isVerified && (
//                         <CheckCircle2
//                           size={16}
//                           className="text-primary ms-1"
//                         />
//                       )}
//                     </div>
//                     <p className="text-muted small mb-0">
//                       {isLoadingProfile ? "Loading..." : userPhone}
//                     </p>
//                     {userEmail && (
//                       <p className="text-muted small mb-0 mt-1">
//                         {userEmail}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="dropdown-divider m-0"></div>

//               {/* Settings */}
//               <div className="p-2">
//                 <div className="dropdown-item-row d-flex align-items-center justify-content-between p-2 rounded gap-4">
//                   <div className="d-flex align-items-center gap-2 text-black">
//                     <Languages size={18} />
//                     <span>Language</span>
//                   </div>

//                   <select
//                     className="form-select form-select-sm border-0 bg-light"
//                     style={{ width: "100px" }}
//                     value={language}
//                     onChange={handleLanguageChange}
//                   >
//                     <option value="en">English</option>
//                     <option value="th">Thai</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="dropdown-divider m-0"></div>

//               {/* Logout */}
//               <div className="p-2">
//                 <div
//                   className={`dropdown-item-row logout-row d-flex align-items-center gap-2 p-2 rounded cursor-pointer text-dark ${isLoggingOut ? 'opacity-50' : ''}`}
//                   onClick={handleLogout}
//                   style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//                 >
//                   {isLoggingOut ? (
//                     <>
//                       <div className="spinner-border spinner-border-sm" role="status" style={{ width: "18px", height: "18px", color: "#e9527a" }}>
//                         <span className="visually-hidden">Loading...</span>
//                       </div>
//                       <span className="fw-medium">Logging out...</span>
//                     </>
//                   ) : (
//                     <>
//                       <LogOut size={18} />
//                       <span className="fw-medium">Log out</span>
//                     </>
//                   )}
//                 </div>
//               </div>

//             </div>
//           )}
//         </div>

//       </div>
//     </header>
//   );
// }














// import React, { useState, useRef, useEffect } from "react";
// import { Bell, Sun, Languages, LogOut, CheckCircle2, Menu } from "lucide-react";
// import axios from "axios";
// import { Modal, Button } from "react-bootstrap"; // ← Added for confirmation modal
// import "../css/Header.css";
// import { useNavigate } from "react-router-dom";
// // userverifiyed

// import userverifiyed from "../assets/icons.svg";

// export default function Header({ toggleSidebar }) {
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [showNotificationPopup, setShowNotificationPopup] = useState(false);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [showLogoutModal, setShowLogoutModal] = useState(false); // ← Modal state
//   const [isLoadingProfile, setIsLoadingProfile] = useState(true);
//   const [userName, setUserName] = useState("Loading...");
//   const [userPhone, setUserPhone] = useState("");
//   const [userAvatar, setUserAvatar] = useState("https://picsum.photos/seed/default/100/100");
//   const [userEmail, setUserEmail] = useState("");
//   const [isVerified, setIsVerified] = useState(false);
//   const [isCreator, setIsCreator] = useState(false);
//   const [language, setLanguage] = useState(() => {
//     return localStorage.getItem('appLanguage') || 'en';
//   });

//   // Notification state
//   const [notifications, setNotifications] = useState([]);
//   const [loadingNotifications, setLoadingNotifications] = useState(false);
//   const [notificationError, setNotificationError] = useState(null);

//   const navigate = useNavigate();
//   const profileRef = useRef(null);
//   const notificationRef = useRef(null);

//   // Helper: get auth token from localStorage
//   const getAuthHeader = () => {
//     const token = localStorage.getItem("token");
//     return token ? { Authorization: token } : {};
//   };

//   // Fetch user profile
//   const fetchUserProfile = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setIsLoadingProfile(false);
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/profile`;
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.loginRequired) {
//         setIsLoadingProfile(false);
//         return;
//       }

//       if (data.success && data.data) {
//         const profile = data.data;
//         const formattedPhone = profile.country_code && profile.mobile_no
//           ? `${profile.country_code} ${profile.mobile_no}`
//           : profile.mobile_no || "Not provided";

//         setUserName(profile.name || "User");
//         setUserPhone(formattedPhone);
//         setUserEmail(profile.email || "");
//         setIsVerified(profile.is_verified || false);
//         setIsCreator(profile.is_creator || false);

//         if (profile.profile_photo && profile.profile_photo !== "") {
//           setUserAvatar(profile.profile_photo);
//         }

//         localStorage.setItem("userName", profile.name || "User");
//         localStorage.setItem("userPhone", formattedPhone);
//         if (profile.profile_photo) {
//           localStorage.setItem("userAvatar", profile.profile_photo);
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching profile:", err);
//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         localStorage.removeItem("token");
//         navigate("/");
//       }
//     } finally {
//       setIsLoadingProfile(false);
//     }
//   };

//   // Fetch notifications from API
//   const fetchNotifications = async () => {
//     setLoadingNotifications(true);
//     setNotificationError(null);
//     try {
//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/notifications`;
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.success && Array.isArray(data.data)) {
//         setNotifications(data.data);
//       } else {
//         setNotificationError(data.message || "Failed to load notifications");
//       }
//     } catch (err) {
//       console.error("Error fetching notifications:", err);
//       setNotificationError("Could not load notifications");
//     } finally {
//       setLoadingNotifications(false);
//     }
//   };

//   // Mark all notifications as read (API call)
//   const handleMarkAllAsRead = async () => {
//     try {
//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/notifications`;
//       const response = await axios.patch(apiUrl, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.success) {
//         setNotifications(prev =>
//           prev.map(notif => ({ ...notif, read_status: 1 }))
//         );
//       } else {
//         console.error("Failed to mark all as read:", data.message);
//       }
//     } catch (err) {
//       console.error("Error marking all as read:", err);
//     }
//   };

//   // Mark individual notification as read (frontend only)
//   const handleMarkAsRead = (notificationId) => {
//     setNotifications(prev =>
//       prev.map(notif =>
//         notif.id === notificationId ? { ...notif, read_status: 1 } : notif
//       )
//     );
//   };

//   useEffect(() => {
//     fetchUserProfile();
//     fetchNotifications();

//     function handleClickOutside(event) {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setShowProfileDropdown(false);
//       }

//       if (
//         notificationRef.current &&
//         !notificationRef.current.contains(event.target)
//       ) {
//         setShowNotificationPopup(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     const handleStorageChange = () => {
//       const storedLang = localStorage.getItem('appLanguage');
//       if (storedLang && storedLang !== language) {
//         setLanguage(storedLang);
//       }
//     };
//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   const handleLanguageChange = (e) => {
//     const newLang = e.target.value;
//     setLanguage(newLang);
//     localStorage.setItem('appLanguage', newLang);
//     window.dispatchEvent(new Event('storage'));
//   };

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

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/logout`;
//       const response = await axios.post(apiUrl, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.loginRequired) {
//         localStorage.clear();
//         navigate("/");
//         return;
//       }

//       if (data.success) {
//         localStorage.clear();
//         navigate("/");
//       } else {
//         localStorage.clear();
//         navigate("/");
//       }
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
//     setShowProfileDropdown(false); // Close dropdown
//     setShowLogoutModal(true); // Show confirmation modal
//   };

//   const handleCancelLogout = () => {
//     setShowLogoutModal(false);
//   };

//   const unreadCount = notifications.filter(n => n.read_status === 0).length;

//   // Translation for modal (can be extended with language context)
//   const t = {
//     logoutConfirmTitle: language === 'th' ? "ยืนยันการออกจากระบบ" : "Confirm Logout",
//     logoutConfirmMessage: language === 'th' 
//       ? "คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?" 
//       : "Are you sure you want to log out?",
//     cancel: language === 'th' ? "ยกเลิก" : "Cancel",
//     confirmLogout: language === 'th' ? "ออกจากระบบ" : "Logout",
//     loggingOut: language === 'th' ? "กำลังออกจากระบบ..." : "Logging out...",
//   };

//   return (
//     <>
//       <header className="header-container d-flex align-items-center justify-content-between px-lg-4 px-2 py-2 bg-white border-bottom">
//         {/* LEFT SECTION */}
//         <div className="header-left d-flex align-items-center gap-3">
//           <button
//             className="sidebar-toggle-btn d-lg-none border-0 bg-transparent"
//             onClick={toggleSidebar}
//           >
//             <Menu size={24} />
//           </button>

//           <h2 className="h5 fw-semibold mb-0 text-dark">
//             ThaiXO Creator Studio
//           </h2>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="header-right d-flex align-items-center gap-4">
//           {/* Notification */}
//           <div className="position-relative" ref={notificationRef}>
//             <div
//               className="notification-icon-wrapper cursor-pointer"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setShowNotificationPopup((prev) => !prev);
//                 setShowProfileDropdown(false);
//               }}
//             >
//               <Bell size={24} className="text-danger" />
//               {unreadCount > 0 && (
//                 <span className="notification-badge">{unreadCount}</span>
//               )}
//             </div>

//             {showNotificationPopup && (
//               <div className="notification-popup shadow-lg border rounded-3 p-3" style={{ maxwidth: "320px" }}>
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <h6 className="fw-bold mb-0 text-black">Notifications</h6>
//                   {unreadCount > 0 && (
//                     <button
//                       onClick={handleMarkAllAsRead}
//                       className="btn btn-link btn-sm text-danger p-0 text-decoration-none"
//                     >
//                       Mark all as read
//                     </button>
//                   )}
//                 </div>

//                 <div className="notification-list" style={{ maxHeight: "300px", overflowY: "auto" }}>
//                   {loadingNotifications && (
//                     <div className="text-center py-3">
//                       <div className="spinner-border spinner-border-sm text-danger" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                       </div>
//                       <p className="text-muted small mt-2">Loading notifications...</p>
//                     </div>
//                   )}

//                   {!loadingNotifications && notificationError && (
//                     <p className="text-danger text-center small py-3">{notificationError}</p>
//                   )}

//                   {!loadingNotifications && !notificationError && notifications.length === 0 && (
//                     <p className="text-muted text-center small py-3">No notifications</p>
//                   )}

//                   {!loadingNotifications && !notificationError && notifications.map((n) => (
//                     <div
//                       key={n.id}
//                       className={`notification-item border-bottom py-2 text-black ${n.read_status === 0 ? 'bg-light' : ''}`}
//                       onClick={() => handleMarkAsRead(n.id)}
//                       style={{ cursor: "pointer" }}
//                     >
//                       <p className="small mb-1 fw-semibold">{n.title}</p>
//                       <p className="small mb-1">{n.body}</p>
//                       <span className="text-muted smaller">{n.relative_time}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* <button
//                   className="btn btn-link btn-sm text-danger w-100 mt-2 text-decoration-none"
//                   onClick={() => {
//                     setShowNotificationPopup(false);
//                   }}
//                 >
//                   View All
//                 </button> */}
//               </div>
//             )}
//           </div>

//           {/* Profile */}
//           <div className="position-relative" ref={profileRef}>
//             <div
//               className="profile-trigger img-fluid"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setShowProfileDropdown((prev) => !prev);
//                 setShowNotificationPopup(false);
//               }}
//             >
//               <img
//                 src={userAvatar}
//                 alt="Profile"
//                 className="rounded-circle border border-2 border-white shadow-sm"
//                 width="40"
//                 height="40"
//                 onError={(e) => {
//                   e.target.src = "https://picsum.photos/seed/default/100/100";
//                 }}
//               />
//             </div>

//             {showProfileDropdown && (
//               <div className="profile-dropdown-container shadow-lg border rounded-3 overflow-hidden" style={{ width: "280px" }}>
//                 {/* Profile Top */}
//                 <div className="p-3 bg-white">
//                   <div className="d-flex align-items-center gap-3">
//                     <img
//                       src={userAvatar}
//                       alt="Profile Large"
//                       className="rounded-circle"
//                       width="50"
//                       height="50"
//                       onError={(e) => {
//                         e.target.src = "https://picsum.photos/seed/default/100/100";
//                       }}
//                     />

//                     <div>
//                       <div className="d-flex align-items-center">
//                         <span className="fw-bold h6 mb-0 text-black">{isLoadingProfile ? "Loading..." : userName}</span>
//                         {isVerified && (
//                           // <CheckCircle2
//                           //   size={16}
//                           //   className="text-primary ms-1"
//                           // />
//                           <img src={userverifiyed} className="text-primary ms-1" style={{height:'20px'}} alt="" />
//                           )}
//                       </div>
//                       <p className="text-muted small mb-0">
//                         {isLoadingProfile ? "Loading..." : userPhone}
//                       </p>
//                       {userEmail && (
//                         <p className="text-muted small mb-0 mt-1">
//                           {userEmail}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="dropdown-divider m-0"></div>

//                 {/* Settings */}
//                 <div className="p-2">
//                   <div className="dropdown-item-row d-flex align-items-center justify-content-between p-2 rounded gap-4">
//                     <div className="d-flex align-items-center gap-2 text-black">
//                       <Languages size={18} />
//                       <span>Language</span>
//                     </div>

//                     <select
//                       className="form-select form-select-sm border-0 bg-light"
//                       style={{ width: "100px" }}
//                       value={language}
//                       onChange={handleLanguageChange}
//                     >
//                       <option value="en">English</option>
//                       <option value="th">Thai</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="dropdown-divider m-0"></div>

//                 {/* Logout */}
//                 <div className="p-2">
//                   <div
//                     className={`dropdown-item-row logout-row d-flex align-items-center gap-2 p-2 rounded cursor-pointer text-dark ${isLoggingOut ? 'opacity-50' : ''}`}
//                     onClick={handleLogoutClick}
//                     style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//                   >
//                     {isLoggingOut ? (
//                       <>
//                         <div className="spinner-border spinner-border-sm" role="status" style={{ width: "18px", height: "18px", color: "#e9527a" }}>
//                           <span className="visually-hidden">Loading...</span>
//                         </div>
//                         <span className="fw-medium">{t.loggingOut}</span>
//                       </>
//                     ) : (
//                       <>
//                         <LogOut size={18} />
//                         <span className="fw-medium">Log out</span>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>

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
//     </>
//   );
// }















// import React, { useState, useRef, useEffect } from "react";
// import { Bell, Sun, Languages, LogOut, CheckCircle2, Menu } from "lucide-react";
// import axios from "axios";
// import { Modal, Button } from "react-bootstrap";
// import { useTranslation } from "react-i18next";
// import "../css/Header.css";
// import { useNavigate } from "react-router-dom";
// import userverifiyed from "../assets/icons.svg";

// export default function Header({ toggleSidebar }) {
//   const { t, i18n } = useTranslation();
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [showNotificationPopup, setShowNotificationPopup] = useState(false);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const [isLoadingProfile, setIsLoadingProfile] = useState(true);
//   const [userName, setUserName] = useState("Loading...");
//   const [userPhone, setUserPhone] = useState("");
//   const [userAvatar, setUserAvatar] = useState("https://picsum.photos/seed/default/100/100");
//   const [userEmail, setUserEmail] = useState("");
//   const [isVerified, setIsVerified] = useState(false);
//   const [isCreator, setIsCreator] = useState(false);

//   // Notification state
//   const [notifications, setNotifications] = useState([]);
//   const [loadingNotifications, setLoadingNotifications] = useState(false);
//   const [notificationError, setNotificationError] = useState(null);

//   const navigate = useNavigate();
//   const profileRef = useRef(null);
//   const notificationRef = useRef(null);

//   // Helper: get auth token from localStorage
//   const getAuthHeader = () => {
//     const token = localStorage.getItem("token");
//     return token ? { Authorization: token } : {};
//   };

//   // Fetch user profile
//   const fetchUserProfile = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setIsLoadingProfile(false);
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/profile`;
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.loginRequired) {
//         setIsLoadingProfile(false);
//         return;
//       }

//       if (data.success && data.data) {
//         const profile = data.data;
//         const formattedPhone = profile.country_code && profile.mobile_no
//           ? `${profile.country_code} ${profile.mobile_no}`
//           : profile.mobile_no || "Not provided";

//         setUserName(profile.name || "User");
//         setUserPhone(formattedPhone);
//         setUserEmail(profile.email || "");
//         setIsVerified(profile.is_verified || false);
//         setIsCreator(profile.is_creator || false);

//         if (profile.profile_photo && profile.profile_photo !== "") {
//           setUserAvatar(profile.profile_photo);
//         }

//         localStorage.setItem("userName", profile.name || "User");
//         localStorage.setItem("userPhone", formattedPhone);
//         if (profile.profile_photo) {
//           localStorage.setItem("userAvatar", profile.profile_photo);
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching profile:", err);
//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         localStorage.removeItem("token");
//         navigate("/");
//       }
//     } finally {
//       setIsLoadingProfile(false);
//     }
//   };

//   // Fetch notifications from API
//   const fetchNotifications = async () => {
//     setLoadingNotifications(true);
//     setNotificationError(null);
//     try {
//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/notifications`;
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.success && Array.isArray(data.data)) {
//         setNotifications(data.data);
//       } else {
//         setNotificationError(data.message || t("notifications.loadError"));
//       }
//     } catch (err) {
//       console.error("Error fetching notifications:", err);
//       setNotificationError(t("notifications.loadError"));
//     } finally {
//       setLoadingNotifications(false);
//     }
//   };

//   // Mark all notifications as read
//   const handleMarkAllAsRead = async () => {
//     try {
//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/notifications`;
//       const response = await axios.patch(apiUrl, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.success) {
//         setNotifications(prev =>
//           prev.map(notif => ({ ...notif, read_status: 1 }))
//         );
//       } else {
//         console.error("Failed to mark all as read:", data.message);
//       }
//     } catch (err) {
//       console.error("Error marking all as read:", err);
//     }
//   };

//   // Mark individual notification as read
//   const handleMarkAsRead = (notificationId) => {
//     setNotifications(prev =>
//       prev.map(notif =>
//         notif.id === notificationId ? { ...notif, read_status: 1 } : notif
//       )
//     );
//   };

//   useEffect(() => {
//     fetchUserProfile();
//     fetchNotifications();

//     function handleClickOutside(event) {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setShowProfileDropdown(false);
//       }
//       if (notificationRef.current && !notificationRef.current.contains(event.target)) {
//         setShowNotificationPopup(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Language change handler using i18next
//   const handleLanguageChange = (e) => {
//     const newLang = e.target.value;
//     i18n.changeLanguage(newLang);
//     // i18next automatically saves to localStorage (configured in i18n.js)
//   };

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

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/logout`;
//       const response = await axios.post(apiUrl, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.loginRequired) {
//         localStorage.clear();
//         navigate("/");
//         return;
//       }

//       if (data.success) {
//         localStorage.clear();
//         navigate("/");
//       } else {
//         localStorage.clear();
//         navigate("/");
//       }
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
//     setShowProfileDropdown(false);
//     setShowLogoutModal(true);
//   };

//   const handleCancelLogout = () => {
//     setShowLogoutModal(false);
//   };

//   const unreadCount = notifications.filter(n => n.read_status === 0).length;

//   return (
//     <>
//       <header className="header-container d-flex align-items-center justify-content-between px-lg-4 px-2 py-2 bg-white border-bottom">
//         {/* LEFT SECTION */}
//         <div className="header-left d-flex align-items-center gap-3">
//           <button
//             className="sidebar-toggle-btn d-lg-none border-0 bg-transparent"
//             onClick={toggleSidebar}
//           >
//             <Menu size={24} />
//           </button>

//           <h2 className="h5 fw-semibold mb-0 text-dark">
//             {t("header.title")}
//           </h2>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="header-right d-flex align-items-center gap-4">
//           {/* Notification */}
//           <div className="position-relative" ref={notificationRef}>
//             <div
//               className="notification-icon-wrapper cursor-pointer"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setShowNotificationPopup((prev) => !prev);
//                 setShowProfileDropdown(false);
//               }}
//             >
//               <Bell size={24} className="text-danger" />
//               {unreadCount > 0 && (
//                 <span className="notification-badge">{unreadCount}</span>
//               )}
//             </div>

//             {showNotificationPopup && (
//               <div className="notification-popup shadow-lg border rounded-3 p-3" style={{ maxWidth: "320px" }}>
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <h6 className="fw-bold mb-0 text-black">{t("header.notifications")}</h6>
//                   {unreadCount > 0 && (
//                     <button
//                       onClick={handleMarkAllAsRead}
//                       className="btn btn-link btn-sm text-danger p-0 text-decoration-none"
//                     >
//                       {t("header.markAllRead")}
//                     </button>
//                   )}
//                 </div>

//                 <div className="notification-list" style={{ maxHeight: "300px", overflowY: "auto" }}>
//                   {loadingNotifications && (
//                     <div className="text-center py-3">
//                       <div className="spinner-border spinner-border-sm text-danger" role="status">
//                         <span className="visually-hidden">{t("header.loading")}</span>
//                       </div>
//                       <p className="text-muted small mt-2">{t("header.loadingNotifications")}</p>
//                     </div>
//                   )}

//                   {!loadingNotifications && notificationError && (
//                     <p className="text-danger text-center small py-3">{notificationError}</p>
//                   )}

//                   {!loadingNotifications && !notificationError && notifications.length === 0 && (
//                     <p className="text-muted text-center small py-3">{t("header.noNotifications")}</p>
//                   )}

//                   {!loadingNotifications && !notificationError && notifications.map((n) => (
//                     <div
//                       key={n.id}
//                       className={`notification-item border-bottom py-2 text-black ${n.read_status === 0 ? 'bg-light' : ''}`}
//                       onClick={() => handleMarkAsRead(n.id)}
//                       style={{ cursor: "pointer" }}
//                     >
//                       <p className="small mb-1 fw-semibold">{n.title}</p>
//                       <p className="small mb-1">{n.body}</p>
//                       <span className="text-muted smaller">{n.relative_time}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Profile */}
//           <div className="position-relative" ref={profileRef}>
//             <div
//               className="profile-trigger img-fluid"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setShowProfileDropdown((prev) => !prev);
//                 setShowNotificationPopup(false);
//               }}
//             >
//               <img
//                 src={userAvatar}
//                 alt="Profile"
//                 className="rounded-circle border border-2 border-white shadow-sm"
//                 width="40"
//                 height="40"
//                 onError={(e) => {
//                   e.target.src = "https://picsum.photos/seed/default/100/100";
//                 }}
//               />
//             </div>

//             {showProfileDropdown && (
//               <div className="profile-dropdown-container shadow-lg border rounded-3 overflow-hidden" style={{ width: "280px" }}>
//                 {/* Profile Top */}
//                 <div className="p-3 bg-white">
//                   <div className="d-flex align-items-center gap-3">
//                     <img
//                       src={userAvatar}
//                       alt="Profile Large"
//                       className="rounded-circle"
//                       width="50"
//                       height="50"
//                       onError={(e) => {
//                         e.target.src = "https://picsum.photos/seed/default/100/100";
//                       }}
//                     />

//                     <div>
//                       <div className="d-flex align-items-center">
//                         <span className="fw-bold h6 mb-0 text-black">{isLoadingProfile ? t("header.loading") : userName}</span>
//                         {isVerified && (
//                           <img src={userverifiyed} className="text-primary ms-1" style={{ height: '20px' }} alt="" />
//                         )}
//                       </div>
//                       <p className="text-muted small mb-0">
//                         {isLoadingProfile ? t("header.loading") : userPhone}
//                       </p>
//                       {userEmail && (
//                         <p className="text-muted small mb-0 mt-1">
//                           {userEmail}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="dropdown-divider m-0"></div>

//                 {/* Settings */}
//                 <div className="p-2">
//                   <div className="dropdown-item-row d-flex align-items-center justify-content-between p-2 rounded gap-4">
//                     <div className="d-flex align-items-center gap-2 text-black">
//                       <Languages size={18} />
//                       <span>{t("header.language")}</span>
//                     </div>

//                     <select
//                       className="form-select form-select-sm border-0 bg-light"
//                       style={{ width: "100px" }}
//                       value={i18n.language}
//                       onChange={handleLanguageChange}
//                     >
//                       <option value="en">English</option>
//                       <option value="th">Thai</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="dropdown-divider m-0"></div>

//                 {/* Logout */}
//                 <div className="p-2">
//                   <div
//                     className={`dropdown-item-row logout-row d-flex align-items-center gap-2 p-2 rounded cursor-pointer text-dark ${isLoggingOut ? 'opacity-50' : ''}`}
//                     onClick={handleLogoutClick}
//                     style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//                   >
//                     {isLoggingOut ? (
//                       <>
//                         <div className="spinner-border spinner-border-sm" role="status" style={{ width: "18px", height: "18px", color: "#e9527a" }}>
//                           <span className="visually-hidden">{t("header.loading")}</span>
//                         </div>
//                         <span className="fw-medium">{t("header.loggingOut")}</span>
//                       </>
//                     ) : (
//                       <>
//                         <LogOut size={18} />
//                         <span className="fw-medium">{t("header.logout")}</span>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Logout Confirmation Modal */}
//       <Modal
//         show={showLogoutModal}
//         onHide={handleCancelLogout}
//         centered
//         backdrop="static"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{t("header.logoutConfirmTitle")}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{t("header.logoutConfirmMessage")}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCancelLogout}>
//             {t("header.cancel")}
//           </Button>
//           <Button variant="danger" onClick={handleLogout} disabled={isLoggingOut}>
//             {isLoggingOut ? t("header.loggingOut") : t("header.confirmLogout")}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }















// import React, { useState, useRef, useEffect } from "react";
// import { Bell, Sun, Languages, LogOut, CheckCircle2, Menu } from "lucide-react";
// import axios from "axios";
// import { Modal, Button } from "react-bootstrap";
// import { useTranslation } from "react-i18next";
// import "../css/Header.css";
// import { useNavigate } from "react-router-dom";
// import userverifiyed from "../assets/icons.svg";

// export default function Header({ toggleSidebar }) {
//   const { t, i18n } = useTranslation();
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [showNotificationPopup, setShowNotificationPopup] = useState(false);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const [isLoadingProfile, setIsLoadingProfile] = useState(true);
//   const [userName, setUserName] = useState("Loading...");
//   const [rawUserName, setRawUserName] = useState(""); // Store raw API name
//   const [userPhone, setUserPhone] = useState("");
//   const [userAvatar, setUserAvatar] = useState("https://picsum.photos/seed/default/100/100");
//   const [userEmail, setUserEmail] = useState("");
//   const [isVerified, setIsVerified] = useState(false);
//   const [isCreator, setIsCreator] = useState(false);

//   // Notification state
//   const [notifications, setNotifications] = useState([]);
//   const [loadingNotifications, setLoadingNotifications] = useState(false);
//   const [notificationError, setNotificationError] = useState(null);

//   const navigate = useNavigate();
//   const profileRef = useRef(null);
//   const notificationRef = useRef(null);

//   // Helper: get auth token from localStorage
//   const getAuthHeader = () => {
//     const token = localStorage.getItem("token");
//     return token ? { Authorization: token } : {};
//   };

//   // ===== NAME TRANSLATION HELPER =====
//   // Translates generic/system names. Real personal names pass through unchanged.
//   const translateUserName = (name) => {
//     if (!name || name === "—") return "—";
    
//     // Map of generic/system names that should be translated
//     const nameTranslationMap = {
//       "User": "userName.user",
//       "Guest": "userName.guest",
//       "Customer": "userName.customer",
//       "Member": "userName.member",
//       "Loading...": "header.loading",
//       "Admin": "userName.admin",
//       "Unknown": "userName.unknown",
//       "Anonymous": "userName.anonymous",
//       "Not provided": "userName.notProvided",
//     };
    
//     const key = nameTranslationMap[name.trim()];
//     if (key) {
//       const translated = t(key, { defaultValue: name });
//       return translated !== key ? translated : name;
//     }
    
//     // Real personal names — return as-is (never translate actual names)
//     return name;
//   };

//   // Get display name with translation applied
//   const getDisplayUserName = () => {
//     if (isLoadingProfile) return t("header.loading");
//     return translateUserName(rawUserName) || t("userName.user");
//   };

//   // Fetch user profile
//   const fetchUserProfile = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setIsLoadingProfile(false);
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/profile`;
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.loginRequired) {
//         setIsLoadingProfile(false);
//         return;
//       }

//       if (data.success && data.data) {
//         const profile = data.data;
//         const formattedPhone = profile.country_code && profile.mobile_no
//           ? `${profile.country_code} ${profile.mobile_no}`
//           : profile.mobile_no || t("userName.notProvided");

//         const apiName = profile.name || "User";
//         setRawUserName(apiName); // Store raw name for translation
//         setUserName(apiName);    // Store original
//         setUserPhone(formattedPhone);
//         setUserEmail(profile.email || "");
//         setIsVerified(profile.is_verified || false);
//         setIsCreator(profile.is_creator || false);

//         if (profile.profile_photo && profile.profile_photo !== "") {
//           setUserAvatar(profile.profile_photo);
//         }

//         localStorage.setItem("userName", apiName);
//         localStorage.setItem("userPhone", formattedPhone);
//         if (profile.profile_photo) {
//           localStorage.setItem("userAvatar", profile.profile_photo);
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching profile:", err);
//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         localStorage.removeItem("token");
//         navigate("/");
//       }
//     } finally {
//       setIsLoadingProfile(false);
//     }
//   };

//   // Fetch notifications from API
//   const fetchNotifications = async () => {
//     setLoadingNotifications(true);
//     setNotificationError(null);
//     try {
//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/notifications`;
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.success && Array.isArray(data.data)) {
//         setNotifications(data.data);
//       } else {
//         setNotificationError(data.message || t("header.loadError"));
//       }
//     } catch (err) {
//       console.error("Error fetching notifications:", err);
//       setNotificationError(t("header.loadError"));
//     } finally {
//       setLoadingNotifications(false);
//     }
//   };

//   // Mark all notifications as read
//   const handleMarkAllAsRead = async () => {
//     try {
//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/notifications`;
//       const response = await axios.patch(apiUrl, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.success) {
//         setNotifications(prev =>
//           prev.map(notif => ({ ...notif, read_status: 1 }))
//         );
//       } else {
//         console.error("Failed to mark all as read:", data.message);
//       }
//     } catch (err) {
//       console.error("Error marking all as read:", err);
//     }
//   };

//   // Mark individual notification as read
//   const handleMarkAsRead = (notificationId) => {
//     setNotifications(prev =>
//       prev.map(notif =>
//         notif.id === notificationId ? { ...notif, read_status: 1 } : notif
//       )
//     );
//   };

//   useEffect(() => {
//     fetchUserProfile();
//     fetchNotifications();

//     function handleClickOutside(event) {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setShowProfileDropdown(false);
//       }
//       if (notificationRef.current && !notificationRef.current.contains(event.target)) {
//         setShowNotificationPopup(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Re-translate when language changes
//   useEffect(() => {
//     // When language changes, the translateUserName function will 
//     // automatically return the correct language via t()
//     // No need to refetch API — just re-render
//   }, [i18n.language]);

//   // Language change handler using i18next
//   const handleLanguageChange = (e) => {
//     const newLang = e.target.value;
//     i18n.changeLanguage(newLang);
//     // i18next automatically saves to localStorage (configured in i18n.js)
//   };

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

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/logout`;
//       const response = await axios.post(apiUrl, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...getAuthHeader(),
//         },
//         withCredentials: true,
//       });

//       const data = response.data;
//       if (data.loginRequired) {
//         localStorage.clear();
//         navigate("/");
//         return;
//       }

//       if (data.success) {
//         localStorage.clear();
//         navigate("/");
//       } else {
//         localStorage.clear();
//         navigate("/");
//       }
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
//     setShowProfileDropdown(false);
//     setShowLogoutModal(true);
//   };

//   const handleCancelLogout = () => {
//     setShowLogoutModal(false);
//   };

//   const unreadCount = notifications.filter(n => n.read_status === 0).length;

//   return (
//     <>
//       <header className="header-container d-flex align-items-center justify-content-between px-lg-4 px-2 py-2 bg-white border-bottom">
//         {/* LEFT SECTION */}
//         <div className="header-left d-flex align-items-center gap-3">
//           <button
//             className="sidebar-toggle-btn d-lg-none border-0 bg-transparent"
//             onClick={toggleSidebar}
//           >
//             <Menu size={24} />
//           </button>

//           <h2 className="h5 fw-semibold mb-0 text-dark">
//             {t("header.title")}
//           </h2>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="header-right d-flex align-items-center gap-4">
//           {/* Notification */}
//           <div className="position-relative" ref={notificationRef}>
//             <div
//               className="notification-icon-wrapper cursor-pointer"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setShowNotificationPopup((prev) => !prev);
//                 setShowProfileDropdown(false);
//               }}
//             >
//               <Bell size={24} className="text-danger" />
//               {unreadCount > 0 && (
//                 <span className="notification-badge">{unreadCount}</span>
//               )}
//             </div>

//             {showNotificationPopup && (
//               <div className="notification-popup shadow-lg border rounded-3 p-3" style={{ maxWidth: "320px" }}>
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <h6 className="fw-bold mb-0 text-black">{t("header.notifications")}</h6>
//                   {unreadCount > 0 && (
//                     <button
//                       onClick={handleMarkAllAsRead}
//                       className="btn btn-link btn-sm text-danger p-0 text-decoration-none"
//                     >
//                       {t("header.markAllRead")}
//                     </button>
//                   )}
//                 </div>

//                 <div className="notification-list" style={{ maxHeight: "300px", overflowY: "auto" }}>
//                   {loadingNotifications && (
//                     <div className="text-center py-3">
//                       <div className="spinner-border spinner-border-sm text-danger" role="status">
//                         <span className="visually-hidden">{t("header.loading")}</span>
//                       </div>
//                       <p className="text-muted small mt-2">{t("header.loadingNotifications")}</p>
//                     </div>
//                   )}

//                   {!loadingNotifications && notificationError && (
//                     <p className="text-danger text-center small py-3">{notificationError}</p>
//                   )}

//                   {!loadingNotifications && !notificationError && notifications.length === 0 && (
//                     <p className="text-muted text-center small py-3">{t("header.noNotifications")}</p>
//                   )}

//                   {!loadingNotifications && !notificationError && notifications.map((n) => (
//                     <div
//                       key={n.id}
//                       className={`notification-item border-bottom py-2 text-black ${n.read_status === 0 ? 'bg-light' : ''}`}
//                       onClick={() => handleMarkAsRead(n.id)}
//                       style={{ cursor: "pointer" }}
//                     >
//                       <p className="small mb-1 fw-semibold">{n.title}</p>
//                       <p className="small mb-1">{n.body}</p>
//                       <span className="text-muted smaller">{n.relative_time}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Profile */}
//           <div className="position-relative" ref={profileRef}>
//             <div
//               className="profile-trigger img-fluid"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setShowProfileDropdown((prev) => !prev);
//                 setShowNotificationPopup(false);
//               }}
//             >
//               <img
//                 src={userAvatar}
//                 alt="Profile"
//                 className="rounded-circle border border-2 border-white shadow-sm"
//                 width="40"
//                 height="40"
//                 onError={(e) => {
//                   e.target.src = "https://picsum.photos/seed/default/100/100";
//                 }}
//               />
//             </div>

//             {showProfileDropdown && (
//               <div className="profile-dropdown-container shadow-lg border rounded-3 overflow-hidden" style={{ width: "280px" }}>
//                 {/* Profile Top */}
//                 <div className="p-3 bg-white">
//                   <div className="d-flex align-items-center gap-3">
//                     <img
//                       src={userAvatar}
//                       alt="Profile Large"
//                       className="rounded-circle"
//                       width="50"
//                       height="50"
//                       onError={(e) => {
//                         e.target.src = "https://picsum.photos/seed/default/100/100";
//                       }}
//                     />

//                     <div>
//                       <div className="d-flex align-items-center">
//                         {/* ===== TRANSLATED USER NAME ===== */}
//                         <span className="fw-bold h6 mb-0 text-black">
//                           {getDisplayUserName()}
//                         </span>
//                         {isVerified && (
//                           <img src={userverifiyed} className="text-primary ms-1" style={{ height: '20px' }} alt="" />
//                         )}
//                       </div>
//                       <p className="text-muted small mb-0">
//                         {isLoadingProfile ? t("header.loading") : userPhone}
//                       </p>
//                       {userEmail && (
//                         <p className="text-muted small mb-0 mt-1">
//                           {userEmail}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="dropdown-divider m-0"></div>

//                 {/* Settings */}
//                 <div className="p-2">
//                   <div className="dropdown-item-row d-flex align-items-center justify-content-between p-2 rounded gap-4">
//                     <div className="d-flex align-items-center gap-2 text-black">
//                       <Languages size={18} />
//                       <span>{t("header.language")}</span>
//                     </div>

//                     <select
//                       className="form-select form-select-sm border-0 bg-light"
//                       style={{ width: "100px" }}
//                       value={i18n.language}
//                       onChange={handleLanguageChange}
//                     >
//                       <option value="en">English</option>
//                       <option value="th">Thai</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="dropdown-divider m-0"></div>

//                 {/* Logout */}
//                 <div className="p-2">
//                   <div
//                     className={`dropdown-item-row logout-row d-flex align-items-center gap-2 p-2 rounded cursor-pointer text-dark ${isLoggingOut ? 'opacity-50' : ''}`}
//                     onClick={handleLogoutClick}
//                     style={{ cursor: isLoggingOut ? "not-allowed" : "pointer" }}
//                   >
//                     {isLoggingOut ? (
//                       <>
//                         <div className="spinner-border spinner-border-sm" role="status" style={{ width: "18px", height: "18px", color: "#e9527a" }}>
//                           <span className="visually-hidden">{t("header.loading")}</span>
//                         </div>
//                         <span className="fw-medium">{t("header.loggingOut")}</span>
//                       </>
//                     ) : (
//                       <>
//                         <LogOut size={18} />
//                         <span className="fw-medium">{t("header.logout")}</span>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Logout Confirmation Modal */}
//       <Modal
//         show={showLogoutModal}
//         onHide={handleCancelLogout}
//         centered
//         backdrop="static"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{t("header.logoutConfirmTitle")}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{t("header.logoutConfirmMessage")}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCancelLogout}>
//             {t("header.cancel")}
//           </Button>
//           <Button variant="danger" onClick={handleLogout} disabled={isLoggingOut}>
//             {isLoggingOut ? t("header.loggingOut") : t("header.confirmLogout")}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }



















import React, { useState, useRef, useEffect } from "react";
import { Bell, Sun, Languages, LogOut, CheckCircle2, Menu } from "lucide-react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../css/Header.css";
import { useNavigate } from "react-router-dom";
import userverifiyed from "../assets/icons.svg";

export default function Header({ toggleSidebar }) {
  const { t, i18n } = useTranslation();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [userName, setUserName] = useState("Loading...");
  const [rawUserName, setRawUserName] = useState(""); // Store raw API name
  const [userPhone, setUserPhone] = useState("");
  const [userAvatar, setUserAvatar] = useState(
    "https://picsum.photos/seed/default/100/100"
  );
  const [userEmail, setUserEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isCreator, setIsCreator] = useState(false);
  // Notification state
  const [notifications, setNotifications] = useState([]);
  const [loadingNotifications, setLoadingNotifications] = useState(false);
  const [notificationError, setNotificationError] = useState(null);
  const navigate = useNavigate();
  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  // Helper: get auth token from localStorage
  const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: token } : {};
  };

  // ===== NAME TRANSLATION HELPER =====
  const translateUserName = (name) => {
    if (!name || name === "—") return "—";

    const nameTranslationMap = {
      User: "userName.user",
      Guest: "userName.guest",
      Customer: "userName.customer",
      Member: "userName.member",
      "Loading...": "header.loading",
      Admin: "userName.admin",
      Unknown: "userName.unknown",
      Anonymous: "userName.anonymous",
      "Not provided": "userName.notProvided",
    };

    const key = nameTranslationMap[name.trim()];
    if (key) {
      const translated = t(key, { defaultValue: name });
      return translated !== key ? translated : name;
    }

    return name;
  };

  // Get display name with translation applied
  const getDisplayUserName = () => {
    if (isLoadingProfile) return t("header.loading");
    return translateUserName(rawUserName) || t("userName.user");
  };

  // ===== MOBILE NUMBER FORMATTING =====
  // Format a numeric string to "XXX-XXX-XXXX" or similar
  const formatMobileWithDashes = (mobile) => {
    if (!mobile) return "";
    // Remove any non-digit characters
    const digits = mobile.replace(/\D/g, "");

    // 9 digits: 123-456-789
    if (digits.length === 9) {
      return digits.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");
    }
    // 10 digits: 123-456-7890
    if (digits.length === 10) {
      return digits.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }
    // Fallback: insert dash every 3 digits
    return digits.replace(/(\d{3})(?=\d)/g, "$1-");
  };

  // Fetch user profile
  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoadingProfile(false);
        return;
      }
      const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/profile`;
      const response = await axios.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeader(),
        },
        withCredentials: true,
      });
      const data = response.data;
      if (data.loginRequired) {
        setIsLoadingProfile(false);
        return;
      }
      if (data.success && data.data) {
        const profile = data.data;

        // Format mobile with dashes
        const formattedMobile = formatMobileWithDashes(profile.mobile_no);
        const formattedPhone = profile.country_code
          ? `${profile.country_code} ${formattedMobile}`
          : formattedMobile || t("userName.notProvided");

        const apiName = profile.name || "User";
        setRawUserName(apiName);
        setUserName(apiName);
        setUserPhone(formattedPhone);
        setUserEmail(profile.email || "");
        setIsVerified(profile.is_verified || false);
        setIsCreator(profile.is_creator || false);

        if (profile.profile_photo && profile.profile_photo !== "") {
          setUserAvatar(profile.profile_photo);
        }

        localStorage.setItem("userName", apiName);
        localStorage.setItem("userPhone", formattedPhone);
        if (profile.profile_photo) {
          localStorage.setItem("userAvatar", profile.profile_photo);
        }
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
      if (err.response?.status === 401 || err.response?.data?.loginRequired) {
        localStorage.removeItem("token");
        navigate("/");
      }
    } finally {
      setIsLoadingProfile(false);
    }
  };

  // Fetch notifications
  const fetchNotifications = async () => {
    setLoadingNotifications(true);
    setNotificationError(null);
    try {
      const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/notifications`;
      const response = await axios.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeader(),
        },
        withCredentials: true,
      });
      const data = response.data;
      if (data.success && Array.isArray(data.data)) {
        setNotifications(data.data);
      } else {
        setNotificationError(data.message || t("header.loadError"));
      }
    } catch (err) {
      console.error("Error fetching notifications:", err);
      setNotificationError(t("header.loadError"));
    } finally {
      setLoadingNotifications(false);
    }
  };

  // Mark all notifications as read
  const handleMarkAllAsRead = async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/notifications`;
      const response = await axios.patch(
        apiUrl,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            ...getAuthHeader(),
          },
          withCredentials: true,
        }
      );
      const data = response.data;
      if (data.success) {
        setNotifications((prev) =>
          prev.map((notif) => ({ ...notif, read_status: 1 }))
        );
      }
    } catch (err) {
      console.error("Error marking all as read:", err);
    }
  };

  // Mark individual notification as read
  const handleMarkAsRead = (notificationId) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === notificationId ? { ...notif, read_status: 1 } : notif
      )
    );
  };

  useEffect(() => {
    fetchUserProfile();
    fetchNotifications();
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotificationPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Re-translate when language changes
  useEffect(() => {
    // No extra API call needed – translateUserName will react to i18n.language change
  }, [i18n.language]);

  // Language change handler
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  // Logout
  const handleLogout = async () => {
    if (isLoggingOut) return;
    try {
      setIsLoggingOut(true);
      const token = localStorage.getItem("token");
      if (!token) {
        localStorage.clear();
        navigate("/");
        return;
      }
      const apiUrl = `${import.meta.env.VITE_SERVER_URL}/logout`;
      const response = await axios.post(apiUrl, {}, {
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeader(),
        },
        withCredentials: true,
      });
      const data = response.data;
      if (data.loginRequired) {
        localStorage.clear();
        navigate("/");
        return;
      }
      if (data.success) {
        localStorage.clear();
        navigate("/");
      } else {
        localStorage.clear();
        navigate("/");
      }
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
    setShowProfileDropdown(false);
    setShowLogoutModal(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  const unreadCount = notifications.filter((n) => n.read_status === 0).length;

  return (
    <>
      <header className="header-container d-flex align-items-center justify-content-between px-lg-4 px-2 py-2 bg-white border-bottom">
        {/* LEFT SECTION */}
        <div className="header-left d-flex align-items-center gap-3">
          <button
            className="sidebar-toggle-btn d-lg-none border-0 bg-transparent"
            onClick={toggleSidebar}
          >
            <Menu size={24} />
          </button>
          <h2 className="h5 fw-semibold mb-0 text-dark">
            {t("header.title")}
          </h2>
        </div>

        {/* RIGHT SECTION */}
        <div className="header-right d-flex align-items-center gap-4">
          {/* Notification */}
          <div className="position-relative" ref={notificationRef}>
            <div
              className="notification-icon-wrapper cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowNotificationPopup((prev) => !prev);
                setShowProfileDropdown(false);
              }}
            >
              <Bell size={24} className="text-danger" />
              {unreadCount > 0 && (
                <span className="notification-badge">{unreadCount}</span>
              )}
            </div>
            {showNotificationPopup && (
              <div
                className="notification-popup shadow-lg border rounded-3 p-3"
                style={{ maxWidth: "320px" }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold mb-0 text-black">
                    {t("header.notifications")}
                  </h6>
                  {unreadCount > 0 && (
                    <button
                      onClick={handleMarkAllAsRead}
                      className="btn btn-link btn-sm text-danger p-0 text-decoration-none"
                    >
                      {t("header.markAllRead")}
                    </button>
                  )}
                </div>
                <div
                  className="notification-list"
                  style={{ maxHeight: "300px", overflowY: "auto" }}
                >
                  {loadingNotifications && (
                    <div className="text-center py-3">
                      <div
                        className="spinner-border spinner-border-sm text-danger"
                        role="status"
                      >
                        <span className="visually-hidden">
                          {t("header.loading")}
                        </span>
                      </div>
                      <p className="text-muted small mt-2">
                        {t("header.loadingNotifications")}
                      </p>
                    </div>
                  )}
                  {!loadingNotifications && notificationError && (
                    <p className="text-danger text-center small py-3">
                      {notificationError}
                    </p>
                  )}
                  {!loadingNotifications &&
                    !notificationError &&
                    notifications.length === 0 && (
                      <p className="text-muted text-center small py-3">
                        {t("header.noNotifications")}
                      </p>
                    )}
                  {!loadingNotifications &&
                    !notificationError &&
                    notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`notification-item border-bottom py-2 text-black ${
                          n.read_status === 0 ? "bg-light" : ""
                        }`}
                        onClick={() => handleMarkAsRead(n.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <p className="small mb-1 fw-semibold">{n.title}</p>
                        <p className="small mb-1">{n.body}</p>
                        <span className="text-muted smaller">
                          {n.relative_time}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="position-relative" ref={profileRef}>
            <div
              className="profile-trigger img-fluid"
              onClick={(e) => {
                e.stopPropagation();
                setShowProfileDropdown((prev) => !prev);
                setShowNotificationPopup(false);
              }}
            >
              <img
                src={userAvatar}
                alt="Profile"
                className="rounded-circle border border-2 border-white shadow-sm"
                width="40"
                height="40"
                onError={(e) => {
                  e.target.src = "https://picsum.photos/seed/default/100/100";
                }}
              />
            </div>
            {showProfileDropdown && (
              <div
                className="profile-dropdown-container shadow-lg border rounded-3 overflow-hidden"
                style={{ width: "280px" }}
              >
                {/* Profile Top */}
                <div className="p-3 bg-white">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={userAvatar}
                      alt="Profile Large"
                      className="rounded-circle"
                      width="50"
                      height="50"
                      onError={(e) => {
                        e.target.src =
                          "https://picsum.photos/seed/default/100/100";
                      }}
                    />
                    <div>
                      <div className="d-flex align-items-center">
                        <span className="fw-bold h6 mb-0 text-black">
                          {getDisplayUserName()}
                        </span>
                        {isVerified && (
                          <img
                            src={userverifiyed}
                            className="text-primary ms-1"
                            style={{ height: "20px" }}
                            alt=""
                          />
                        )}
                      </div>
                      <p className="text-muted small mb-0">
                        {isLoadingProfile ? t("header.loading") : userPhone}
                      </p>
                      {userEmail && (
                        <p className="text-muted small mb-0 mt-1">
                          {userEmail}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="dropdown-divider m-0"></div>
                {/* Settings */}
                <div className="p-2">
                  <div className="dropdown-item-row d-flex align-items-center justify-content-between p-2 rounded gap-4">
                    <div className="d-flex align-items-center gap-2 text-black">
                      <Languages size={18} />
                      <span>{t("header.language")}</span>
                    </div>
                    <select
                      className="form-select form-select-sm border-0 bg-light"
                      style={{ width: "100px" }}
                      value={i18n.language}
                      onChange={handleLanguageChange}
                    >
                      <option value="en">English</option>
                      <option value="th">Thai</option>
                    </select>
                  </div>
                </div>
                <div className="dropdown-divider m-0"></div>
                {/* Logout */}
                <div className="p-2">
                  <div
                    className={`dropdown-item-row logout-row d-flex align-items-center gap-2 p-2 rounded cursor-pointer text-dark ${
                      isLoggingOut ? "opacity-50" : ""
                    }`}
                    onClick={handleLogoutClick}
                    style={{
                      cursor: isLoggingOut ? "not-allowed" : "pointer",
                    }}
                  >
                    {isLoggingOut ? (
                      <>
                        <div
                          className="spinner-border spinner-border-sm"
                          role="status"
                          style={{
                            width: "18px",
                            height: "18px",
                            color: "#e9527a",
                          }}
                        >
                          <span className="visually-hidden">
                            {t("header.loading")}
                          </span>
                        </div>
                        <span className="fw-medium">
                          {t("header.loggingOut")}
                        </span>
                      </>
                    ) : (
                      <>
                        <LogOut size={18} />
                        <span className="fw-medium">{t("header.logout")}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      <Modal
        show={showLogoutModal}
        onHide={handleCancelLogout}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>{t("header.logoutConfirmTitle")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">{t("header.logoutConfirmMessage")}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelLogout}>
            {t("header.cancel")}
          </Button>
          <Button variant="danger" onClick={handleLogout} disabled={isLoggingOut}>
            {isLoggingOut ? t("header.loggingOut") : t("header.confirmLogout")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}











//=================================================================Done-code(End)=================================================================
