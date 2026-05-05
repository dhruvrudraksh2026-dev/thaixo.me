// import React from 'react';
// // import { motion } from 'motion/react';
// import { motion } from "framer-motion";
// import { Check, Lock } from 'lucide-react';
// import '../css/Milestone.css';

// const Milestone = () => {
//   const levels = [
//     {
//       id: 'silver',
//       name: 'Thai Silver',
//       milestone: '0 - 100 Hours',
//       earnings: '3Bath/min',
//       status: 'Active',
//       icon: 'https://cdn-icons-png.flaticon.com/512/2583/2583319.png', // Silver medal
//       active: true
//     },
//     {
//       id: 'gold',
//       name: 'Thai Gold',
//       milestone: '100 - 1,000 Hours',
//       earnings: '5Bath/min',
//       status: 'Locked',
//       icon: 'https://cdn-icons-png.flaticon.com/512/2583/2583344.png', // Gold medal
//       lockedText: '(Unlock in 35h)'
//     },
//     {
//       id: 'diamond',
//       name: 'Thai Diamond',
//       milestone: '1,000 - 10,000 Hours',
//       earnings: '8Bath/min',
//       status: 'Locked',
//       icon: 'https://cdn-icons-png.flaticon.com/512/1041/1041913.png', // Diamond
//     }
//   ];

//   return (
//     <motion.div
//       className="milestone-container"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="creator-level-text">My Creator Level: Thai Silver (Active)</h2>

//       {/* Progress Card */}
//       <motion.div
//         className="progress-card"
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.4 }}
//       >
//         <div className="progress-header">
//           <div className="progress-label">
//             Progress to <span>Thai Gold</span>(Next Level)
//           </div>
//         </div>

//         <div className="progress-hours-range">
//           <span>0 hrs</span>
//           <span>100hrs</span>
//         </div>

//         <div className="progress-bar-container">
//           <motion.div
//             className="progress-bar-fill"
//             initial={{ width: 0 }}
//             animate={{ width: '65%' }}
//             transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
//           >
//             <div className="progress-current-marker"></div>
//           </motion.div>
//         </div>

//         <div className="progress-current-label">
//           65hrs <span>(Current)</span>
//         </div>

//         <div className="progress-remaining-text">
//           <span>35 hours</span> remaining to unlock <span>Thai Gold</span> and <span>5 Bath</span> per minute
//         </div>
//       </motion.div>

//       {/* Levels & Rewards Section */}
//       <h3 className="levels-section-title">Levels & Rewards</h3>

//       <div className="levels-table-container">
//         <div className="levels-header">
//           <div>Level Name</div>
//           <div>Milestones(Hours)</div>
//           <div>Earnings(Rate)</div>
//           <div>Status</div>
//         </div>

//         {levels.map((level, index) => (
//           <motion.div
//             key={level.id}
//             className={`level-row level-${level.id}`}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
//             whileHover={{ scale: 1.02 }}
//           >
//             <div className="level-name-cell">
//               <img src={level.icon} alt={level.name} className="level-icon" />
//               <span>{level.name}</span>
//             </div>
//             <div className="level-milestone-cell">{level.milestone}</div>
//             <div className="level-earnings-cell">{level.earnings}</div>
//             <div className="level-status-cell">
//               {level.status === 'Active' ? (
//                 <div className="status-badge status-active">
//                   <Check size={16} />
//                   <span>Active</span>
//                 </div>
//               ) : (
//                 <div className={`status-badge ${level.id === 'gold' ? 'status-locked' : 'status-locked-blue'}`}>
//                   <Lock size={16} />
//                   <div>
//                     <span>Locked</span>
//                     {level.lockedText && <span className="status-locked-text">{level.lockedText}</span>}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Milestone;

















// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "../css/Milestone.css";
// import { Bell, Check, Lock, Menu, X } from "lucide-react";
// import {
//   Container,
//   Navbar,
//   Nav,
//   Row,
//   Col,
//   Card,
//   ProgressBar,
//   Badge,
//   Button,
// } from "react-bootstrap";
// import Sidebar from "./Sidebar";
// import Header from "./Header";

// // --- Constants & Data ---
// const levels = [
//   {
//     id: "silver",
//     name: "Thai Silver",
//     milestone: "0 - 100 Hours",
//     earnings: "3Bath/min",
//     status: "Active",
//     icon: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png",
//     bgColor: "#e9527a",
//     textColor: "white",
//     statusBg: "rgba(255,255,255,0.2)",
//     active: true,
//   },
//   {
//     id: "gold",
//     name: "Thai Gold",
//     milestone: "100 - 1,000 Hours",
//     earnings: "5Bath/min",
//     status: "Locked",
//     icon: "https://cdn-icons-png.flaticon.com/512/2583/2583344.png",
//     bgColor: "#fff9e6",
//     textColor: "#333",
//     statusBg: "transparent",
//     lockedText: "(Unlock in 35h)",
//     lockColor: "#ff9800",
//   },
//   {
//     id: "diamond",
//     name: "Thai Diamond",
//     milestone: "1,000 - 10,000 Hours",
//     earnings: "8Bath/min",
//     status: "Locked",
//     icon: "https://cdn-icons-png.flaticon.com/512/1041/1041913.png",
//     bgColor: "#e6f7ff",
//     textColor: "#333",
//     statusBg: "transparent",
//     lockColor: "#03a9f4",
//   },
// ];

// // --- Sub-Components ---

// <Header />;

// const MilestoneContent = () => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     className="container-fluid p-0"
//   >
//     <h2 className="h4 fw-bold text-dark mb-4">
//       My Creator Level:{" "}
//       <span style={{ color: "#e9527a" }}>Thai Silver (Active)</span>
//     </h2>

//     {/* Progress Card */}
//     <motion.div
//       initial={{ scale: 0.98, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ delay: 0.1 }}
//       className="milestone-card"
//     >
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <p className="h6 fw-bold text-dark m-0">
//           Progress to <span style={{ color: "#e9527a" }}>Thai Gold</span> (Next
//           Level)
//         </p>
//       </div>

//       <div className="d-flex justify-content-between small fw-bold text-secondary mb-2 px-1">
//         <span>0 hrs</span>
//         <span>100hrs</span>
//       </div>

//       <div className="custom-progress-container mb-3">
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: "65%" }}
//           transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//           className="custom-progress-bar d-flex align-items-center justify-content-end pe-1"
//         >
//           <div
//             style={{
//               width: "4px",
//               height: "24px",
//               backgroundColor: "rgba(255,255,255,0.3)",
//               borderRadius: "2px",
//               marginRight: "4px",
//             }}
//           />
//         </motion.div>
//       </div>

//       <div className="text-center mb-3">
//         <span className="fw-bold fs-5" style={{ color: "#e9527a" }}>
//           65hrs
//         </span>
//         <span className="text-secondary small ms-1">(Current)</span>
//       </div>

//       <p className="text-center text-dark m-0">
//         <span className="fw-bold" style={{ color: "#e9527a" }}>
//           35 hours
//         </span>{" "}
//         remaining to unlock{" "}
//         <span className="fw-bold" style={{ color: "#e9527a" }}>
//           Thai Gold
//         </span>{" "}
//         and{" "}
//         <span className="fw-bold" style={{ color: "#e9527a" }}>
//           5 Bath
//         </span>{" "}
//         per minute
//       </p>
//     </motion.div>

//     {/* Levels & Rewards Section
//     <h3 className="h5 fw-bold text-dark mb-4">Levels & Rewards</h3>

//     <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
//       <div className="row g-0 px-4 py-3 bg-light border-bottom small fw-bold text-secondary text-uppercase">
//         <div className="col-lg-3">Level Name</div>
//         <div className="col-lg-3">Milestones(Hours)</div>
//         <div className="col-lg-3">Earnings(Rate)</div>
//         <div className="col-lg-3">Status</div>
//       </div>

//       <div className="p-4">
//         {levels.map((level, index) => (
//           <motion.div
//             key={level.id}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3 + index * 0.1 }}
//             className="level-row shadow-sm"
//             style={{ backgroundColor: level.bgColor, color: level.textColor }}
//           >
//             <div className="col-3 d-flex align-items-center">
//               <div className="level-icon-wrapper">
//                 <img
//                   src={level.icon}
//                   alt={level.name}
//                   style={{
//                     width: "32px",
//                     height: "32px",
//                     objectFit: "contain",
//                   }}
//                 />
//               </div>
//               <span className="fw-bold">{level.name}</span>
//             </div>

//             <div className="col-3 fw-medium">{level.milestone}</div>

//             <div className="col-3 fw-medium">{level.earnings}</div>

//             <div className="col-3">
//               <div
//                 className="status-pill"
//                 style={{ backgroundColor: level.statusBg }}
//               >
//                 {level.status === "Active" ? (
//                   <div className="d-flex align-items-center gap-2">
//                     <div className="bg-white rounded-2 p-1 d-flex align-items-center justify-content-center">
//                       <Check size={14} style={{ color: "#e9527a" }} />
//                     </div>
//                     <span className="fw-bold">Active</span>
//                   </div>
//                 ) : (
//                   <div className="d-flex align-items-center gap-2">
//                     <Lock size={16} style={{ color: level.lockColor }} />
//                     <div className="d-flex flex-column">
//                       <span className="fw-bold">Locked</span>
//                       {level.lockedText && (
//                         <span
//                           className="extra-small opacity-75"
//                           style={{ fontSize: "9px" }}
//                         >
//                           {level.lockedText}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div> */}

//     {/* Levels & Rewards Section */}
//     <h3 className="h5 fw-bold text-dark mb-4">Levels & Rewards</h3>

//     <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
//       {/* Table Header - Hidden on Mobile */}
//       <div className="row g-0 px-4 py-3 bg-light border-bottom small fw-bold text-secondary text-uppercase d-none d-lg-flex">
//         <div className="col-lg-3">Level Name</div>
//         <div className="col-lg-3">Milestones(Hours)</div>
//         <div className="col-lg-3">Earnings(Rate)</div>
//         <div className="col-lg-3">Status</div>
//       </div>

//       <div className="p-3 p-md-4">
//         {levels.map((level, index) => (
//           <motion.div
//             key={level.id}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3 + index * 0.1 }}
//             className="level-row row align-items-center g-3 shadow-sm mb-3"
//             style={{
//               backgroundColor: level.bgColor,
//               color: level.textColor,
//               borderRadius: "12px",
//               padding: "12px",
//             }}
//           >
//             {/* Level Name */}
//             <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center gap-2">
//               <div className="level-icon-wrapper">
//                 <img
//                   src={level.icon}
//                   alt={level.name}
//                   style={{
//                     width: "32px",
//                     height: "32px",
//                     objectFit: "contain",
//                   }}
//                 />
//               </div>

//               <div>
//                 <span className="fw-bold">{level.name}</span>

//                 {/* Mobile Info */}
//                 <div className="d-lg-none small opacity-75">
//                   {level.milestone}
//                 </div>
//               </div>
//             </div>

//             {/* Milestone */}
//             <div className="col-6 col-md-3 col-lg-3 fw-medium d-none d-lg-block">
//               {level.milestone}
//             </div>

//             {/* Earnings */}
//             <div className="col-6 col-md-3 col-lg-3 fw-medium">
//               {level.earnings}
//             </div>

//             {/* Status */}
//             <div className="col-12 col-md-12 col-lg-3">
//               <div
//                 className="status-pill"
//                 style={{ backgroundColor: level.statusBg }}
//               >
//                 {level.status === "Active" ? (
//                   <div className="d-flex align-items-center gap-2">
//                     <div className="bg-white rounded-2 p-1 d-flex align-items-center justify-content-center">
//                       <Check size={14} style={{ color: "#e9527a" }} />
//                     </div>
//                     <span className="fw-bold">Active</span>
//                   </div>
//                 ) : (
//                   <div className="d-flex align-items-center gap-2">
//                     <Lock size={16} style={{ color: level.lockColor }} />
//                     <div className="d-flex flex-column">
//                       <span className="fw-bold">Locked</span>
//                       {level.lockedText && (
//                         <span
//                           className="extra-small opacity-75"
//                           style={{ fontSize: "10px" }}
//                         >
//                           {level.lockedText}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </motion.div>
// );

// // --- Main App Component ---

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("milestone");

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

//       {/* Main Content Area */}
//       <div className="main-wrapper">
//         {/* <Header /> */}

//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-4 p-md-5">
//           <AnimatePresence mode="wait">
//             {activeTab === "milestone" ? (
//               <MilestoneContent key="milestone" />
//             ) : (
//               <motion.div
//                 key="placeholder"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 className="d-flex flex-column align-items-center justify-content-center"
//                 style={{ height: "60vh", color: "#ccc" }}
//               >
//                 <div className="display-1 mb-4">🚧</div>
//                 <h2 className="h3 fw-bold text-secondary text-capitalize">
//                   {activeTab.replace("-", " ")} Page
//                 </h2>
//                 <p>This section is currently under development.</p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </main>
//       </div>
//     </div>
//   );
// }






















// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "../css/Milestone.css";
// import { Check, Lock, Menu, X } from "lucide-react";
// import axios from "axios";
// import Sidebar from "./Sidebar";
// import Header from "./Header";

// // API
// const API_URL = "https://sagarxo.app/web-api/customer/creator-milestones";

// const MilestoneContent = () => {
//   const [packages, setPackages] = useState([]);
//   const [hours, setHours] = useState(0);
//   const [loading, setLoading] = useState(true);

//   // ✅ FETCH API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const res = await axios.get(API_URL, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
// 1
//         const data = res?.data;

//         setPackages(data?.packages || []);
//         setHours(data?.total_video_call_hours || 0);
//       } catch (error) {
//         console.error("API ERROR:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // ✅ ACTIVE PACKAGE
//   const activePackage = packages.find(
//     (pkg) => hours >= pkg.min_hours && hours <= pkg.max_hours
//   );

//   // ✅ NEXT PACKAGE
//   const nextPackage = packages.find(
//     (pkg) => activePackage && pkg.min_hours > activePackage.max_hours
//   );

//   // ✅ PROGRESS %
//   const getProgress = () => {
//     if (!activePackage) return 0;

//     const range = activePackage.max_hours - activePackage.min_hours;

//     return ((hours - activePackage.min_hours) / range) * 100;
//   };

//   if (loading) return <div className="p-4">Loading...</div>;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="container-fluid p-0"
//     >
//       {/* TITLE */}
//       <h2 className="h4 fw-bold text-dark mb-4">
//         My Creator Level:{" "}
//         <span style={{ color: "#e9527a" }}>
//           {activePackage?.package_name} (Active)
//         </span>
//       </h2>

//       {/* PROGRESS CARD */}
//       {activePackage && nextPackage && (
//         <motion.div className="milestone-card">
//           <div className="d-flex justify-content-between mb-3">
//             <p className="fw-bold m-0">
//               Progress to{" "}
//               <span style={{ color: "#e9527a" }}>
//                 {nextPackage.package_name}
//               </span>
//             </p>
//           </div>

//           <div className="d-flex justify-content-between small fw-bold text-secondary mb-2 px-1">
//             <span>{activePackage.min_hours} hrs</span>
//             <span>{activePackage.max_hours} hrs</span>
//           </div>

//           {/* PROGRESS BAR */}
//           <div className="custom-progress-container mb-3">
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: `${getProgress()}%` }}
//               transition={{ duration: 1 }}
//               className="custom-progress-bar"
//             />
//           </div>

//           <div className="text-center mb-3">
//             <span className="fw-bold fs-5" style={{ color: "#e9527a" }}>
//               {hours} hrs
//             </span>
//             <span className="text-secondary small ms-1">(Current)</span>
//           </div>

//           <p className="text-center m-0">
//             <span className="fw-bold" style={{ color: "#e9527a" }}>
//               {nextPackage.min_hours - hours} hours
//             </span>{" "}
//             remaining to unlock{" "}
//             <span className="fw-bold" style={{ color: "#e9527a" }}>
//               {nextPackage.package_name}
//             </span>{" "}
//             and{" "}
//             <span className="fw-bold" style={{ color: "#e9527a" }}>
//               {nextPackage.rate_per_minute} Bath
//             </span>{" "}
//             per minute
//           </p>
//         </motion.div>
//       )}

//       {/* LEVELS */}
//       <h3 className="h5 fw-bold text-dark mb-4">Levels & Rewards</h3>

//       <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
//         <div className="row g-0 px-4 py-3 bg-light border-bottom small fw-bold text-secondary text-uppercase d-none d-lg-flex">
//           <div className="col-lg-3">Level Name</div>
//           <div className="col-lg-3">Milestones(Hours)</div>
//           <div className="col-lg-3">Earnings(Rate)</div>
//           <div className="col-lg-3">Status</div>
//         </div>

//         <div className="p-3 p-md-4">
//           {packages.map((pkg, index) => {
//             const isActive =
//               hours >= pkg.min_hours && hours <= pkg.max_hours;

//             const isLocked = hours < pkg.min_hours;

//             return (
//               <motion.div
//                 key={pkg.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 + index * 0.1 }}
//                 className="level-row row align-items-center g-3 shadow-sm mb-3"
//                 style={{
//                   borderRadius: "12px",
//                   padding: "12px",
//                 }}
//               >
//                 {/* NAME */}
//                 <div className="col-12 col-md-6 col-lg-3 fw-bold">
//                   {pkg.package_name}
//                 </div>

//                 {/* HOURS */}
//                 <div className="col-6 col-md-3 col-lg-3 fw-medium">
//                   {pkg.min_hours} - {pkg.max_hours} hrs
//                 </div>

//                 {/* EARNINGS */}
//                 <div className="col-6 col-md-3 col-lg-3 fw-medium">
//                   {pkg.rate_per_minute} Bath/min
//                 </div>

//                 {/* STATUS */}
//                 <div className="col-12 col-md-12 col-lg-3">
//                   {isActive ? (
//                     <div className="d-flex align-items-center gap-2 text-success">
//                       <Check size={16} />
//                       Active
//                     </div>
//                   ) : isLocked ? (
//                     <div className="d-flex align-items-center gap-2 text-warning">
//                       <Lock size={16} />
//                       Locked ({pkg.min_hours - hours} hrs left)
//                     </div>
//                   ) : (
//                     <div className="text-secondary">
//                       Completed
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // MAIN APP
// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-4 p-md-5">
//           <AnimatePresence>
//             <MilestoneContent />
//           </AnimatePresence>
//         </main>
//       </div>
//     </div>
//   );
// }















// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "../css/Milestone.css";
// import { Check, Lock, Menu, X } from "lucide-react";
// import axios from "axios";
// import Sidebar from "./Sidebar";
// import Header from "./Header";

// // API Endpoint (your backend route)
// const API_URL = "https://sagarxo.app/web-api/customer/creator-milestones";

// const MilestoneContent = () => {
//   const [packages, setPackages] = useState([]);
//   const [hours, setHours] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // NO token from localStorage anymore
//         const res = await axios.get(API_URL, {
//           headers: {
//             "Content-Type": "application/json",
//             // Do NOT send Authorization header manually
//           },
//           withCredentials: true,          // ← This sends cookies automatically
//         });
        

//         if (!res.data?.success) {
//           throw new Error(res.data?.message || "Failed to fetch milestones");
//         }

//         const data = res.data.data || {};

//         setPackages(data.packages || []);
//         setHours(Number(data.total_video_call_hours) || 0);
//       } catch (err) {
//         let message = "Could not load creator milestones";

//         if (err.response) {
//           // 401, 403, 500 etc.
//           message = err.response.data?.message || `Server error (${err.response.status})`;
//           if (err.response.status === 401) {
//             message = "Session expired. Please log in again.";
//           }
//         } else if (err.request) {
//           message = "No response from server (network or CORS issue?)";
//         } else {
//           message = err.message;
//         }

//         setError(message);
//         console.error("Milestone API error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Find active package
//   const activePackage = packages.find(
//     (pkg) => hours >= pkg.min_hours && hours <= pkg.max_hours
//   );

//   // Find next package
//   const nextPackage = packages.find(
//     (pkg) => activePackage && pkg.min_hours > activePackage.max_hours
//   );

//   // Progress percentage
//   const getProgress = () => {
//     if (!activePackage) return 0;
//     const range = activePackage.max_hours - activePackage.min_hours;
//     if (range <= 0) return 100;
//     return Math.min(100, Math.max(0, ((hours - activePackage.min_hours) / range) * 100));
//   };

//   const remainingToNext = nextPackage ? Math.max(0, nextPackage.min_hours - hours) : 0;

//   if (loading) {
//     return (
//       <div className="p-5 text-center">
//         <div className="spinner-border text-primary" role="status" />
//         <p className="mt-3">Loading your creator level...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="alert alert-danger m-4 text-center">
//         <strong>Error:</strong> {error}
//         <br />
//         <small className="d-block mt-2">Check console (F12) for more details</small>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="container-fluid p-0"
//     >
//       {/* TITLE */}
//       <h2 className="h4 fw-bold text-dark mb-4">
//         My Creator Level:{" "}
//         <span style={{ color: "#e9527a" }}>
//           {activePackage ? `${activePackage.package_name} (Active)` : "No active level"}
//         </span>
//       </h2>

//       {/* PROGRESS CARD */}
//       {activePackage && nextPackage && (
//         <motion.div className="milestone-card">
//           <div className="d-flex justify-content-between mb-3">
//             <p className="fw-bold m-0">
//               Progress to{" "}
//               <span style={{ color: "#e9527a" }}>{nextPackage.package_name}</span>
//             </p>
//           </div>

//           <div className="d-flex justify-content-between small fw-bold text-secondary mb-2 px-1">
//             <span>{activePackage.min_hours} hrs</span>
//             <span>{activePackage.max_hours} hrs</span>
//           </div>

//           <div className="custom-progress-container mb-3">
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: `${getProgress()}%` }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="custom-progress-bar"
//             />
//           </div>

//           <div className="text-center mb-3">
//             <span className="fw-bold fs-5" style={{ color: "#e9527a" }}>
//               {hours.toFixed(2)} hrs
//             </span>
//             <span className="text-secondary small ms-1">(Current)</span>
//           </div>

//           <p className="text-center m-0">
//             <span className="fw-bold" style={{ color: "#e9527a" }}>
//               {remainingToNext.toFixed(2)} hours
//             </span>{" "}
//             remaining to unlock{" "}
//             <span className="fw-bold" style={{ color: "#e9527a" }}>
//               {nextPackage.package_name}
//             </span>{" "}
//             and{" "}
//             <span className="fw-bold" style={{ color: "#e9527a" }}>
//               {nextPackage.rate_per_minute} Bath
//             </span>{" "}
//             per minute
//           </p>
//         </motion.div>
//       )}

//       {/* LEVELS & REWARDS */}
//       <h3 className="h5 fw-bold text-dark mb-4">Levels & Rewards</h3>

//       <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
//         <div className="row g-0 px-4 py-3 bg-light border-bottom small fw-bold text-secondary text-uppercase d-none d-lg-flex">
//           <div className="col-lg-3">Level Name</div>
//           <div className="col-lg-3">Milestones (Hours)</div>
//           <div className="col-lg-3">Earnings (Rate)</div>
//           <div className="col-lg-3">Status</div>
//         </div>

//         <div className="p-3 p-md-4">
//           {packages.map((pkg, index) => {
//             const isActive = hours >= pkg.min_hours && hours <= pkg.max_hours;
//             const isLocked = hours < pkg.min_hours;

//             return (
//               <motion.div
//                 key={pkg.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 + index * 0.1 }}
//                 className="level-row row align-items-center g-3 shadow-sm mb-3"
//                 style={{
//                   borderRadius: "12px",
//                   padding: "12px",
//                   backgroundColor: isActive ? "rgba(233,82,122,0.08)" : isLocked ? "#fff9e6" : "#f8f9fa",
//                 }}
//               >
//                 <div className="col-12 col-md-6 col-lg-3 fw-bold">
//                   {pkg.package_name}
//                 </div>

//                 <div className="col-6 col-md-3 col-lg-3 fw-medium">
//                   {pkg.min_hours} - {pkg.max_hours} hrs
//                 </div>

//                 <div className="col-6 col-md-3 col-lg-3 fw-medium">
//                   {pkg.rate_per_minute} Bath/min
//                 </div>

//                 <div className="col-12 col-md-12 col-lg-3">
//                   {isActive ? (
//                     <div className="d-flex align-items-center gap-2 text-success">
//                       <Check size={16} />
//                       Active
//                     </div>
//                   ) : isLocked ? (
//                     <div className="d-flex align-items-center gap-2 text-warning">
//                       <Lock size={16} />
//                       Locked ({Math.ceil(pkg.min_hours - hours)} hrs left)
//                     </div>
//                   ) : (
//                     <div className="text-secondary">Completed</div>
//                   )}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // MAIN COMPONENT
// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-lg-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-4 p-md-5">
//           <AnimatePresence>
//             <MilestoneContent />
//           </AnimatePresence>
//         </main>
//       </div>
//     </div>
//   );
// }





















// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from "framer-motion";
// import axios from 'axios';
// import { Bell, Check, Lock, Menu, X } from "lucide-react";
// import {
//   Container,
//   Navbar,
//   Nav,
//   Row,
//   Col,
//   Card,
//   ProgressBar,
//   Badge,
//   Button,
// } from "react-bootstrap";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Milestone.css";

// export default function Milestone() {
//   const [milestonesData, setMilestonesData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${import.meta.env.VITE_SERVER_URL}/logout`, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${localStorage.getItem("token")}`
//         },
//         withCredentials: true
//       });
//       navigate('/');
//       localStorage.removeItem("token");
//     } catch (err) {
//       console.error('Logout error:', err);
//       navigate('/');
//       localStorage.removeItem("token");
//     }
//   };

//   useEffect(() => {
//     const fetchMilestones = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/customer/creator-milestones`, {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `${localStorage.getItem("token")}`
//           },
//           withCredentials: true
//         });
//         const data = response.data;
//         console.log(data);
//         if (data.success) {
//           setMilestonesData(data.data);
//         } else {
//           setError(data.message || 'Failed to fetch milestones');
//         }
//       } catch (err) {
//         setError(err.response?.data?.message || 'An error occurred while fetching milestones');
//       }
//     };

//     fetchMilestones();
//   }, [navigate]);

//   if (error) {
//     return (
//       <div className="main-container">
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <p style={{ color: 'red' }}>{error}</p>
//               <button 
//                 onClick={() => navigate('/')} 
//                 className="btn btn-primary mt-3"
//               >
//                 Back to Login
//               </button>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   if (!milestonesData) {
//     return (
//       <div className="main-container">
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3">Loading Milestones...</p>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // Transform packages data to match the design format
//   const levels = milestonesData.packages?.map((pkg, index) => ({
//     id: pkg.id,
//     name: pkg.package_name,
//     milestone: `${pkg.min_hours} - ${pkg.max_hours} Hours`,
//     earnings: `${pkg.rate_per_minute}Bath/min`,
//     status: pkg.status === 1 ? "Active" : "Locked",
//     icon: index === 0 
//       ? "https://cdn-icons-png.flaticon.com/512/2583/2583319.png"
//       : index === 1
//       ? "https://cdn-icons-png.flaticon.com/512/2583/2583344.png"
//       : "https://cdn-icons-png.flaticon.com/512/1041/1041913.png",
//     bgColor: pkg.status === 1 ? "#e9527a" : index === 1 ? "#fff9e6" : "#e6f7ff",
//     textColor: pkg.status === 1 ? "white" : "#333",
//     statusBg: pkg.status === 1 ? "rgba(255,255,255,0.2)" : "transparent",
//     lockedText: pkg.status === 1 ? null : "(Unlock soon)",
//     lockColor: index === 1 ? "#ff9800" : "#03a9f4",
//   })) || [];

//   const currentLevel = levels.find(level => level.status === "Active") || levels[0];
//   const nextLevel = levels.find(level => level.status !== "Active");
  
//   // Calculate progress percentage (example logic - adjust based on your data)
//   const currentHours = milestonesData.total_video_call_hours || 0;
//   const minHours = nextLevel ? parseInt(nextLevel.milestone.split(" - ")[0]) : 100;
//   const maxHours = nextLevel ? parseInt(nextLevel.milestone.split(" - ")[1]) : 1000;
//   const progressPercent = nextLevel ? ((currentHours - minHours) / (maxHours - minHours)) * 100 : 65;
//   const remainingHours = nextLevel ? maxHours - currentHours : 35;
//   const nextEarnings = nextLevel ? nextLevel.earnings : "5Bath/min";

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

//       {/* Main Content Area */}
//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-4 p-md-5">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="container-fluid p-0"
//           >
//             <div className="d-flex justify-content-between align-items-center mb-4">
//               <h2 className="h4 fw-bold text-dark mb-0">
//                 My Creator Level:{" "}
//                 <span style={{ color: "#e9527a" }}>
//                   {currentLevel?.name || "Thai Silver"} ({currentLevel?.status})
//                 </span>
//               </h2>
//               <button
//                 onClick={handleLogout}
//                 className="btn btn-danger"
//                 style={{
//                   padding: '0.5rem 1rem',
//                   background: '#dc3545',
//                   border: 'none',
//                   borderRadius: '6px',
//                   cursor: 'pointer',
//                   color: '#fff',
//                   fontWeight: 'bold',
//                   boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//                   transition: 'all 0.2s ease'
//                 }}
//                 onMouseEnter={(e) => e.currentTarget.style.background = '#c82333'}
//                 onMouseLeave={(e) => e.currentTarget.style.background = '#dc3545'}
//               >
//                 Log Out
//               </button>
//             </div>

//             {/* Progress Card */}
//             <motion.div
//               initial={{ scale: 0.98, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.1 }}
//               className="milestone-card"
//             >
//               <div className="d-flex justify-content-between align-items-center mb-4">
//                 <p className="h6 fw-bold text-dark m-0">
//                   Progress to <span style={{ color: "#e9527a" }}>
//                     {nextLevel?.name || "Thai Gold"}
//                   </span> (Next Level)
//                 </p>
//               </div>

//               <div className="d-flex justify-content-between small fw-bold text-secondary mb-2 px-1">
//                 <span>{currentHours} hrs</span>
//                 <span>{maxHours}hrs</span>
//               </div>

//               <div className="custom-progress-container mb-3">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${Math.min(progressPercent, 100)}%` }}
//                   transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//                   className="custom-progress-bar d-flex align-items-center justify-content-end pe-1"
//                 >
//                   <div
//                     style={{
//                       width: "4px",
//                       height: "24px",
//                       backgroundColor: "rgba(255,255,255,0.3)",
//                       borderRadius: "2px",
//                       marginRight: "4px",
//                     }}
//                   />
//                 </motion.div>
//               </div>

//               <div className="text-center mb-3">
//                 <span className="fw-bold fs-5" style={{ color: "#e9527a" }}>
//                   {currentHours}hrs
//                 </span>
//                 <span className="text-secondary small ms-1">(Current)</span>
//               </div>

//               <p className="text-center text-dark m-0">
//                 <span className="fw-bold" style={{ color: "#e9527a" }}>
//                   {remainingHours} hours
//                 </span>{" "}
//                 remaining to unlock{" "}
//                 <span className="fw-bold" style={{ color: "#e9527a" }}>
//                   {nextLevel?.name || "Thai Gold"}
//                 </span>{" "}
//                 and{" "}
//                 <span className="fw-bold" style={{ color: "#e9527a" }}>
//                   {nextEarnings}
//                 </span>
//               </p>
//             </motion.div>

//             {/* Levels & Rewards Section */}
//             <h3 className="h5 fw-bold text-dark mb-4">Levels & Rewards</h3>

//             <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
//               {/* Table Header - Hidden on Mobile */}
//               <div className="row g-0 px-4 py-3 bg-light border-bottom small fw-bold text-secondary text-uppercase d-none d-lg-flex">
//                 <div className="col-lg-3">Level Name</div>
//                 <div className="col-lg-3">Milestones(Hours)</div>
//                 <div className="col-lg-3">Earnings(Rate)</div>
//                 <div className="col-lg-3">Status</div>
//               </div>

//               <div className="p-3 p-md-4">
//                 {levels.map((level, index) => (
//                   <motion.div
//                     key={level.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 + index * 0.1 }}
//                     className="level-row row align-items-center g-3 shadow-sm mb-3 mt-4"
//                     style={{
//                       backgroundColor: level.bgColor,
//                       color: level.textColor,
//                       borderRadius: "12px",
//                       padding: "12px",
//                     }}
//                   >
//                     {/* Level Name */}
//                     <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center gap-2">
//                       <div className="level-icon-wrapper">
//                         <img
//                           src={level.icon}
//                           alt={level.name}
//                           style={{
//                             width: "32px",
//                             height: "32px",
//                             objectFit: "contain",
//                           }}
//                         />
//                       </div>

//                       <div>
//                         <span className="fw-bold">{level.name}</span>

//                         {/* Mobile Info */}
//                         <div className="d-lg-none small opacity-75">
//                           {level.milestone}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Milestone */}
//                     <div className="col-6 col-md-3 col-lg-3 fw-medium d-none d-lg-block">
//                       {level.milestone}
//                     </div>

//                     {/* Earnings */}
//                     <div className="col-6 col-md-3 col-lg-3 fw-medium">
//                       {level.earnings}
//                     </div>

//                     {/* Status */}
//                     <div className="col-12 col-md-12 col-lg-3">
//                       <div
//                         className="status-pill"
//                         style={{ backgroundColor: level.statusBg }}
//                       >
//                         {level.status === "Active" ? (
//                           <div className="d-flex align-items-center gap-2">
//                             <div className="bg-white rounded-2 p-1 d-flex align-items-center justify-content-center">
//                               <Check size={14} style={{ color: "#e9527a" }} />
//                             </div>
//                             <span className="fw-bold">Active</span>
//                           </div>
//                         ) : (
//                           <div className="d-flex align-items-center gap-2">
//                             <Lock size={16} style={{ color: level.lockColor }} />
//                             <div className="d-flex flex-column">
//                               <span className="fw-bold">Locked</span>
//                               {level.lockedText && (
//                                 <span
//                                   className="extra-small opacity-75"
//                                   style={{ fontSize: "10px" }}
//                                 >
//                                   {level.lockedText}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// }
















// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import axios from 'axios';
// import { Check, Lock, Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Milestone.css";

// export default function Milestone() {
//   const [milestonesData, setMilestonesData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${import.meta.env.VITE_SERVER_URL}/logout`, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${localStorage.getItem("token")}`
//         },
//         withCredentials: true
//       });
//     } catch (err) {
//       console.error('Logout error:', err);
//     } finally {
//       navigate('/');
//       localStorage.removeItem("token");
//     }
//   };

//   useEffect(() => {
//     const fetchMilestones = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_SERVER_URL}/customer/creator-milestones`,
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `${localStorage.getItem("token")}`
//             },
//             withCredentials: true
//           }
//         );
//         const data = response.data;
//         if (data.success) {
//           setMilestonesData(data.data);
//         } else {
//           setError(data.message || 'Failed to fetch milestones');
//         }
//       } catch (err) {
//         setError(err.response?.data?.message || 'An error occurred while fetching milestones');
//       }
//     };

//     fetchMilestones();
//   }, []);

//   // ── Loading ────────────────────────────────────────────────────────────────
//   if (!milestonesData && !error) {
//     return (
//       <div className="main-container">
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3">Loading Milestones...</p>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Error ──────────────────────────────────────────────────────────────────
//   if (error) {
//     return (
//       <div className="main-container">
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <p style={{ color: 'red' }}>{error}</p>
//               <button onClick={() => navigate('/')} className="btn btn-primary mt-3">
//                 Back to Login
//               </button>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Dynamic Data from API ──────────────────────────────────────────────────
//   const currentHours = milestonesData.total_video_call_hours || 0;
//   const packages = milestonesData.packages || [];

//   // Level icons — assigned by index position (order from API)
//   const levelIcons = [
//     "https://cdn-icons-png.flaticon.com/512/2583/2583319.png", // Thai Silver
//     "https://cdn-icons-png.flaticon.com/512/2583/2583344.png", // Thai Gold
//     "https://cdn-icons-png.flaticon.com/512/1041/1041913.png", // Thai Diamond
//   ];

//   // Level colors — assigned by index position
//   const levelColors = [
//     { bgColor: "#e9527a", textColor: "white", lockColor: "#e9527a" },  // Active style (Silver)
//     { bgColor: "#fff9e6", textColor: "#333", lockColor: "#ff9800" },    // Gold
//     { bgColor: "#e6f7ff", textColor: "#333", lockColor: "#03a9f4" },    // Diamond
//   ];

//   // ── Core logic: determine Active/Locked based on currentHours ──────────────
//   // A level is ACTIVE if currentHours falls within its min_hours - max_hours range
//   // All levels below current are also shown as Active (already passed)
//   // All levels above are Locked
//   const levels = packages.map((pkg, index) => {
//     const minHours = pkg.min_hours;   // from API: e.g. 0, 101, 1001
//     const maxHours = pkg.max_hours;   // from API: e.g. 100, 1000, 10000

//     // A level is active if the customer has reached its min_hours threshold
//     const isActive = currentHours >= minHours;

//     const colors = levelColors[index] || levelColors[levelColors.length - 1];

//     return {
//       id: pkg.id,
//       name: pkg.package_name,                          // Dynamic: "Thai Silver", "Thai Gold", etc.
//       minHours: minHours,                               // Dynamic: 0, 101, 1001
//       maxHours: maxHours,                               // Dynamic: 100, 1000, 10000
//       milestone: `${minHours} - ${maxHours} Hours`,    // Dynamic milestone range
//       earnings: `${pkg.rate_per_minute} Bath/min`,     // Dynamic rate
//       status: isActive ? "Active" : "Locked",          // Derived from currentHours
//       icon: levelIcons[index] || levelIcons[levelIcons.length - 1],
//       bgColor: isActive ? "#e9527a" : colors.bgColor,
//       textColor: isActive ? "white" : colors.textColor,
//       statusBg: isActive ? "rgba(255,255,255,0.2)" : "transparent", 
//       lockedText: isActive ? null : "(Unlock soon)",
//       lockColor: colors.lockColor,
//     };
//   });

//   // ── Current level = highest active level ──────────────────────────────────
//   const activeLevels = levels.filter(l => l.status === "Active");
//   const currentLevel = activeLevels[activeLevels.length - 1] || levels[0];

//   // ── Next level = first locked level after current ─────────────────────────
//   const nextLevel = levels.find(l => l.status === "Locked") || null;

//   // ── Progress bar calculation ───────────────────────────────────────────────
//   // Progress is towards the NEXT level's max_hours
//   const progressMin = nextLevel ? nextLevel.minHours : currentLevel.minHours;
//   const progressMax = nextLevel ? nextLevel.maxHours : currentLevel.maxHours;
//   const progressPercent = progressMax > progressMin
//     ? Math.min(((currentHours - progressMin) / (progressMax - progressMin)) * 100, 100)
//     : 100;
//   const remainingHours = nextLevel ? Math.max(nextLevel.maxHours - currentHours, 0) : 0;

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

//       <Sidebar show={isSidebarOpen} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-4 p-md-5">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="container-fluid p-0"
//           >
//             {/* ── Page Header ── */}
//             <div className="d-flex justify-content-between align-items-center mb-4">
//               <h2 className="h4 fw-bold text-dark mb-0">
//                 My Creator Level:{" "}
//                 <span style={{ color: "#e9527a" }}>
//                   {currentLevel.name} ({currentLevel.status})
//                 </span>
//               </h2>
//               <button
//                 onClick={handleLogout}
//                 className="btn btn-danger"
//                 style={{
//                   padding: "0.5rem 1rem",
//                   background: "#dc3545",
//                   border: "none",
//                   borderRadius: "6px",
//                   cursor: "pointer",
//                   color: "#fff",
//                   fontWeight: "bold",
//                   boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                   transition: "all 0.2s ease",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.background = "#c82333")}
//                 onMouseLeave={(e) => (e.currentTarget.style.background = "#dc3545")}
//               >
//                 Log Out
//               </button>
//             </div>

//             {/* ── Progress Card ── */}
//             <motion.div
//               initial={{ scale: 0.98, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.1 }}
//               className="milestone-card"
//             >
//               <div className="d-flex justify-content-between align-items-center mb-4">
//                 <p className="h6 fw-bold text-dark m-0">
//                   {nextLevel ? (
//                     <>
//                       Progress to{" "}
//                       <span style={{ color: "#e9527a" }}>{nextLevel.name}</span>{" "}
//                       (Next Level)
//                     </>
//                   ) : (
//                     <span style={{ color: "#e9527a" }}>
//                       🎉 You have reached the highest level!
//                     </span>
//                   )}
//                 </p>
//               </div>

//               {/* Progress Hour Labels */}
//               <div className="d-flex justify-content-between small fw-bold text-secondary mb-2 px-1">
//                 <span>{progressMin} hrs</span>
//                 <span>{progressMax} hrs</span>
//               </div>

//               {/* Progress Bar */}
//               <div className="custom-progress-container mb-3">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${Math.min(progressPercent, 100)}%` }}
//                   transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//                   className="custom-progress-bar d-flex align-items-center justify-content-end pe-1"
//                 >
//                   <div
//                     style={{
//                       width: "4px",
//                       height: "24px",
//                       backgroundColor: "rgba(255,255,255,0.3)",
//                       borderRadius: "2px",
//                       marginRight: "4px",
//                     }}
//                   />
//                 </motion.div>
//               </div>

//               {/* Current Hours */}
//               <div className="text-center mb-3">
//                 <span className="fw-bold fs-5" style={{ color: "#e9527a" }}>
//                   {currentHours} hrs
//                 </span>
//                 <span className="text-secondary small ms-1">(Current)</span>
//               </div>

//               {/* Remaining Info */}
//               {nextLevel ? (
//                 <p className="text-center text-dark m-0">
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {remainingHours} hours
//                   </span>{" "}
//                   remaining to unlock{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {nextLevel.name}
//                   </span>{" "}
//                   and earn{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {nextLevel.earnings}
//                   </span>
//                 </p>
//               ) : (
//                 <p className="text-center text-dark m-0">
//                   You are at the{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     highest level
//                   </span>
//                   . Keep streaming!
//                 </p>
//               )}
//             </motion.div>

//             {/* ── Levels & Rewards Table ── */}
//             <h3 className="h5 fw-bold text-dark mb-4 mt-4">Levels & Rewards</h3>

//             <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
//               {/* Table Header */}
//               <div className="row g-0 px-4 py-3 bg-light border-bottom small fw-bold text-secondary text-uppercase d-none d-lg-flex">
//                 <div className="col-lg-3">Level Name</div>
//                 <div className="col-lg-3">Milestones (Hours)</div>
//                 <div className="col-lg-3">Earnings (Rate)</div>
//                 <div className="col-lg-3">Status</div>
//               </div>

//               <div className="p-3 p-md-4">
//                 {levels.map((level, index) => (
//                   <motion.div
//                     key={level.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 + index * 0.1 }}
//                     className="level-row row align-items-center g-3 shadow-sm mb-3 mt-4"
//                     style={{
//                       backgroundColor: level.bgColor,
//                       color: level.textColor,
//                       borderRadius: "12px",
//                       padding: "12px",
//                     }}
//                   >
//                     {/* Level Name */}
//                     <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center gap-2">
//                       <div className="level-icon-wrapper">
//                         <img
//                           src={level.icon}
//                           alt={level.name}
//                           style={{ width: "32px", height: "32px", objectFit: "contain" }}
//                         />
//                       </div>
//                       <div>
//                         <span className="fw-bold">{level.name}</span>
//                         {/* Mobile: show milestone below name */}
//                         <div className="d-lg-none small opacity-75">
//                           {level.milestone}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Milestone Hours — dynamic from API */}
//                     <div className="col-6 col-md-3 col-lg-3 fw-medium d-none d-lg-block">
//                       {level.milestone}
//                     </div>

//                     {/* Earnings Rate — dynamic from API */}
//                     <div className="col-6 col-md-3 col-lg-3 fw-medium">
//                       {level.earnings}
//                     </div>

//                     {/* Status — dynamic: Active / Locked based on currentHours */}
//                     <div className="col-12 col-md-12 col-lg-3">
//                       <div
//                         className="status-pill"
//                         style={{ backgroundColor: level.statusBg }}
//                       >
//                         {level.status === "Active" ? (
//                           <div className="d-flex align-items-center gap-2">
//                             <div className="bg-white rounded-2 p-1 d-flex align-items-center justify-content-center">
//                               <Check size={14} style={{ color: "#e9527a" }} />
//                             </div>
//                             <span className="fw-bold">Active</span>
//                           </div>
//                         ) : (
//                           <div className="d-flex align-items-center gap-2">
//                             <Lock size={16} style={{ color: level.lockColor }} />
//                             <div className="d-flex flex-column">
//                               <span className="fw-bold">Locked</span>
//                               {level.lockedText && (
//                                 <span className="extra-small opacity-75" style={{ fontSize: "10px" }}>
//                                   {level.lockedText}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// }




















// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import axios from 'axios';
// import { Check, Lock, Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Milestone.css";

// export default function Milestone() {
//   const [milestonesData, setMilestonesData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${import.meta.env.VITE_SERVER_URL}/logout`, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${localStorage.getItem("token")}`
//         },
//         withCredentials: true
//       });
//     } catch (err) {
//       console.error('Logout error:', err);
//     } finally {
//       navigate('/');
//       localStorage.removeItem("token");
//     }
//   };

//   useEffect(() => {
//     const fetchMilestones = async () => {
//       try {
//         const response = await axios.get(
//           "https://sagarxo.app/web-api/customer/creator-milestones",
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `${localStorage.getItem("token")}`
//             },
//             withCredentials: true
//           }
//         );
//         const data = response.data;
//         if (data.success) {
//           setMilestonesData(data.data);
//         } else {
//           setError(data.message || 'Failed to fetch milestones');
//         }
//       } catch (err) {
//         setError(err.response?.data?.message || 'An error occurred while fetching milestones');
//       }
//     };

//     fetchMilestones();
//   }, []);

//   // ── Loading ────────────────────────────────────────────────────────────────
//   if (!milestonesData && !error) {
//     return (
//       <div className="main-container">
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3">Loading Milestones...</p>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Error ──────────────────────────────────────────────────────────────────
//   if (error) {
//     return (
//       <div className="main-container">
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <p style={{ color: 'red' }}>{error}</p>
//               <button onClick={() => navigate('/')} className="btn btn-primary mt-3">
//                 Back to Login
//               </button>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Extract data from new API response ────────────────────────────────────
//   const currentHours = milestonesData.total_video_call_hours || 0;
//   const packages = milestonesData.packages || [];
//   const activePackageId = milestonesData.active_package_id;
//   const unlockInfo = milestonesData.unlock_info;

//   // Find current active package by ID
//   const currentPackage = packages.find(pkg => pkg.id === activePackageId) || packages[0];
//   const nextPackage = unlockInfo ? {
//     id: unlockInfo.next_package_id,
//     name: unlockInfo.next_package_name,
//     rate: unlockInfo.next_rate_per_minute,
//   } : null;

//   // Find the next package object from packages array for full details
//   const nextPackageFull = nextPackage
//     ? packages.find(pkg => pkg.id === nextPackage.id)
//     : null;

//   // Level icons — assigned by index position (order from API)
//   const levelIcons = [
//     "https://cdn-icons-png.flaticon.com/512/2583/2583319.png", // Thai Silver
//     "https://cdn-icons-png.flaticon.com/512/2583/2583344.png", // Thai Gold
//     "https://cdn-icons-png.flaticon.com/512/1041/1041913.png", // Thai Diamond
//   ];

//   // Level colors — assigned by index position
//   const levelColors = [
//     { bgColor: "#e9527a", textColor: "white", lockColor: "#e9527a" },  // Active style (Silver)
//     { bgColor: "#fff9e6", textColor: "#333", lockColor: "#ff9800" },    // Gold
//     { bgColor: "#e6f7ff", textColor: "#333", lockColor: "#03a9f4" },    // Diamond
//   ];

//   // Build levels array with status based on activePackageId
//   const levels = packages.map((pkg, index) => {
//     const isActive = pkg.id === activePackageId;
//     const colors = levelColors[index] || levelColors[levelColors.length - 1];

//     return {
//       id: pkg.id,
//       name: pkg.package_name,
//       minHours: pkg.min_hours,
//       maxHours: pkg.max_hours,
//       milestone: `${pkg.min_hours} - ${pkg.max_hours} Hours`,
//       earnings: `${pkg.rate_per_minute} Bath/min`,
//       status: isActive ? "Active" : (pkg.id > activePackageId ? "Locked" : "Completed"),
//       icon: levelIcons[index] || levelIcons[levelIcons.length - 1],
//       bgColor: isActive ? "#e9527a" : colors.bgColor,
//       textColor: isActive ? "white" : colors.textColor,
//       statusBg: isActive ? "rgba(255,255,255,0.2)" : "transparent",
//       lockedText: pkg.id > activePackageId ? "(Unlock soon)" : null,
//       lockColor: colors.lockColor,
//     };
//   });

//   // Current level display
//   const currentLevel = levels.find(l => l.id === activePackageId) || levels[0];

//   // Progress calculation using unlockInfo
//   let progressPercent = 100;
//   let remainingHours = 0;
//   let progressMin = currentPackage.min_hours;
//   let progressMax = currentPackage.max_hours;

//   if (unlockInfo && nextPackageFull) {
//     // Remaining hours to next level
//     remainingHours = parseFloat(unlockInfo.remaining_hours) || 0;
//     progressMin = currentPackage.min_hours;
//     progressMax = nextPackageFull.min_hours;
//     const totalRange = progressMax - progressMin;
//     const completed = currentHours - progressMin;
//     progressPercent = totalRange > 0 ? Math.min((completed / totalRange) * 100, 100) : 100;
//   } else {
//     // Highest level reached
//     remainingHours = 0;
//     progressPercent = 100;
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

//       <Sidebar show={isSidebarOpen} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-4 p-md-5">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="container-fluid p-0"
//           >
//             {/* ── Page Header ── */}
//             <div className="d-flex justify-content-between align-items-center mb-4">
//               <h2 className="h4 fw-bold text-dark mb-0">
//                 My Creator Level:{" "}
//                 <span style={{ color: "#e9527a" }}>
//                   {currentLevel.name} ({currentLevel.status})
//                 </span>
//               </h2>
//               <button
//                 onClick={handleLogout}
//                 className="btn btn-danger"
//                 style={{
//                   padding: "0.5rem 1rem",
//                   background: "#dc3545",
//                   border: "none",
//                   borderRadius: "6px",
//                   cursor: "pointer",
//                   color: "#fff",
//                   fontWeight: "bold",
//                   boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                   transition: "all 0.2s ease",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.background = "#c82333")}
//                 onMouseLeave={(e) => (e.currentTarget.style.background = "#dc3545")}
//               >
//                 Log Out
//               </button>
//             </div>

//             {/* ── Progress Card ── */}
//             <motion.div
//               initial={{ scale: 0.98, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.1 }}
//               className="milestone-card"
//             >
//               <div className="d-flex justify-content-between align-items-center mb-4">
//                 <p className="h6 fw-bold text-dark m-0">
//                   {nextPackage ? (
//                     <>
//                       Progress to{" "}
//                       <span style={{ color: "#e9527a" }}>{nextPackage.name}</span>{" "}
//                       (Next Level)
//                     </>
//                   ) : (
//                     <span style={{ color: "#e9527a" }}>
//                       🎉 You have reached the highest level!
//                     </span>
//                   )}
//                 </p>
//               </div>

//               {/* Progress Hour Labels */}
//               <div className="d-flex justify-content-between small fw-bold text-secondary mb-2 px-1">
//                 <span>{progressMin} hrs</span>
//                 <span>{progressMax} hrs</span>
//               </div>

//               {/* Progress Bar */}
//               <div className="custom-progress-container mb-3">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${Math.min(progressPercent, 100)}%` }}
//                   transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//                   className="custom-progress-bar d-flex align-items-center justify-content-end pe-1"
//                 >
//                   <div
//                     style={{
//                       width: "4px",
//                       height: "24px",
//                       backgroundColor: "rgba(255,255,255,0.3)",
//                       borderRadius: "2px",
//                       marginRight: "4px",
//                     }}
//                   />
//                 </motion.div>
//               </div>

//               {/* Current Hours */}
//               <div className="text-center mb-3">
//                 <span className="fw-bold fs-5" style={{ color: "#e9527a" }}>
//                   {currentHours} hrs
//                 </span>
//                 <span className="text-secondary small ms-1">(Current)</span>
//               </div>

//               {/* Remaining Info */}
//               {nextPackage ? (
//                 <p className="text-center text-dark m-0">
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {remainingHours} hours
//                   </span>{" "}
//                   remaining to unlock{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {nextPackage.name}
//                   </span>{" "}
//                   and earn{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {nextPackage.rate} Bath/min
//                   </span>
//                 </p>
//               ) : (
//                 <p className="text-center text-dark m-0">
//                   You are at the{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     highest level
//                   </span>
//                   . Keep streaming!
//                 </p>
//               )}
//             </motion.div>

//             {/* ── Levels & Rewards Table ── */}
//             <h3 className="h5 fw-bold text-dark mb-4 mt-4">Levels & Rewards</h3>

//             <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
//               {/* Table Header */}
//               <div className="row g-0 px-4 py-3 bg-light border-bottom small fw-bold text-secondary text-uppercase d-none d-lg-flex">
//                 <div className="col-lg-3">Level Name</div>
//                 <div className="col-lg-3">Milestones (Hours)</div>
//                 <div className="col-lg-3">Earnings (Rate)</div>
//                 <div className="col-lg-3">Status</div>
//               </div>

//               <div className="p-3 p-md-4">
//                 {levels.map((level, index) => (
//                   <motion.div
//                     key={level.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 + index * 0.1 }}
//                     className="level-row row align-items-center g-3 shadow-sm mb-3 mt-4"
//                     style={{
//                       backgroundColor: level.bgColor,
//                       color: level.textColor,
//                       borderRadius: "12px",
//                       padding: "12px",
//                     }}
//                   >
//                     {/* Level Name */}
//                     <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center gap-2">
//                       <div className="level-icon-wrapper">
//                         <img
//                           src={level.icon}
//                           alt={level.name}
//                           style={{ width: "32px", height: "32px", objectFit: "contain" }}
//                         />
//                       </div>
//                       <div>
//                         <span className="fw-bold">{level.name}</span>
//                         <div className="d-lg-none small opacity-75">
//                           {level.milestone}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Milestone Hours */}
//                     <div className="col-6 col-md-3 col-lg-3 fw-medium d-none d-lg-block">
//                       {level.milestone}
//                     </div>

//                     {/* Earnings Rate */}
//                     <div className="col-6 col-md-3 col-lg-3 fw-medium">
//                       {level.earnings}
//                     </div>

//                     {/* Status */}
//                     <div className="col-12 col-md-12 col-lg-3">
//                       <div
//                         className="status-pill"
//                         style={{ backgroundColor: level.statusBg }}
//                       >
//                         {level.status === "Active" ? (
//                           <div className="d-flex align-items-center gap-2">
//                             <div className="bg-white rounded-2 p-1 d-flex align-items-center justify-content-center">
//                               <Check size={14} style={{ color: "#e9527a" }} />
//                             </div>
//                             <span className="fw-bold">Active</span>
//                           </div>
//                         ) : level.status === "Completed" ? (
//                           <div className="d-flex align-items-center gap-2">
//                             <Check size={16} style={{ color: "#28a745" }} />
//                             <span className="fw-bold">Completed</span>
//                           </div>
//                         ) : (
//                           <div className="d-flex align-items-center gap-2">
//                             <Lock size={16} style={{ color: level.lockColor }} />
//                             <div className="d-flex flex-column">
//                               <span className="fw-bold">Locked</span>
//                               {level.lockedText && (
//                                 <span className="extra-small opacity-75" style={{ fontSize: "10px" }}>
//                                   {level.lockedText}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// }
















































































// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import axios from 'axios';
// import { Check, Lock, Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Milestone.css";

// export default function Milestone() {
//   const [milestonesData, setMilestonesData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${import.meta.env.VITE_SERVER_URL}/logout`, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${localStorage.getItem("token")}`
//         },
//         withCredentials: true
//       });
//     } catch (err) {
//       console.error('Logout error:', err);
//     } finally {
//       navigate('/');
//       localStorage.removeItem("token");
//     }
//   };

//   useEffect(() => {
//     const fetchMilestones = async () => {
//       try {
//         const response = await axios.get(
//           "https://sagarxo.app/web-api/customer/creator-milestones",
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `${localStorage.getItem("token")}`
//             },
//             withCredentials: true
//           }
//         );
//         const data = response.data;
//         if (data.success) {
//           setMilestonesData(data.data);
//         } else {
//           setError(data.message || 'Failed to fetch milestones');
//         }
//       } catch (err) {
//         setError(err.response?.data?.message || 'An error occurred while fetching milestones');
//       }
//     };

//     fetchMilestones();
//   }, []);

//   // ── Loading ────────────────────────────────────────────────────────────────
//   if (!milestonesData && !error) {
//     return (
//       <div className="main-container">
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3">Loading Milestones...</p>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Error ──────────────────────────────────────────────────────────────────
//   if (error) {
//     return (
//       <div className="main-container">
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <p style={{ color: 'red' }}>{error}</p>
//               <button onClick={() => navigate('/')} className="btn btn-primary mt-3">
//                 Back to Login
//               </button>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Extract data from new API response ────────────────────────────────────
//   const currentHours = milestonesData.total_video_call_hours || 0;
//   const packages = milestonesData.packages || [];
//   const activePackageId = milestonesData.active_package_id;
//   const unlockInfo = milestonesData.unlock_info;

//   // Find current active package by ID
//   const currentPackage = packages.find(pkg => pkg.id === activePackageId) || packages[0];
//   const nextPackage = unlockInfo ? {
//     id: unlockInfo.next_package_id,
//     name: unlockInfo.next_package_name,
//     rate: unlockInfo.next_rate_per_minute,
//   } : null;

//   // Find the next package object from packages array for full details
//   const nextPackageFull = nextPackage
//     ? packages.find(pkg => pkg.id === nextPackage.id)
//     : null;

//   // Level icons — assigned by index position (order from API)
//   const levelIcons = [
//     "https://cdn-icons-png.flaticon.com/512/2583/2583319.png", // Thai Silver
//     "https://cdn-icons-png.flaticon.com/512/2583/2583344.png", // Thai Gold
//     "https://cdn-icons-png.flaticon.com/512/1041/1041913.png", // Thai Diamond
//   ];

//   // Level colors — assigned by index position
//   const levelColors = [
//     { bgColor: "#e9527a", textColor: "white", lockColor: "#e9527a" },  // Active style (Silver)
//     { bgColor: "#fff9e6", textColor: "#333", lockColor: "#ff9800" },    // Gold
//     { bgColor: "#e6f7ff", textColor: "#333", lockColor: "#03a9f4" },    // Diamond
//   ];

//   // Build levels array with status based on activePackageId
//   const levels = packages.map((pkg, index) => {
//     const isActive = pkg.id === activePackageId;
//     const colors = levelColors[index] || levelColors[levelColors.length - 1];

//     return {
//       id: pkg.id,
//       name: pkg.package_name,
//       minHours: pkg.min_hours,
//       maxHours: pkg.max_hours,
//       milestone: `${pkg.min_hours} - ${pkg.max_hours} Hours`,
//       earnings: `${pkg.rate_per_minute} Bath/min`,
//       status: isActive ? "Active" : (pkg.id > activePackageId ? "Locked" : "Completed"),
//       icon: levelIcons[index] || levelIcons[levelIcons.length - 1],
//       bgColor: isActive ? "#e9527a" : colors.bgColor,
//       textColor: isActive ? "white" : colors.textColor,
//       statusBg: isActive ? "rgba(255,255,255,0.2)" : "transparent",
//       lockedText: pkg.id > activePackageId ? "(Unlock soon)" : null,
//       lockColor: colors.lockColor,
//     };
//   });

//   // Current level display
//   const currentLevel = levels.find(l => l.id === activePackageId) || levels[0];

//   // Progress calculation using unlockInfo
//   let progressPercent = 100;
//   let remainingHours = 0;
//   let progressMin = currentPackage.min_hours;
//   let progressMax = currentPackage.max_hours;

//   if (unlockInfo && nextPackageFull) {
//     // Remaining hours to next level
//     remainingHours = parseFloat(unlockInfo.remaining_hours) || 0;
//     progressMin = currentPackage.min_hours;
//     progressMax = nextPackageFull.min_hours;
//     const totalRange = progressMax - progressMin;
//     const completed = currentHours - progressMin;
//     progressPercent = totalRange > 0 ? Math.min((completed / totalRange) * 100, 100) : 100;
//   } else {
//     // Highest level reached
//     remainingHours = 0;
//     progressPercent = 100;
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

//       <Sidebar show={isSidebarOpen} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-4 p-md-5">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="container-fluid p-0"
//           >
//             {/* ── Page Header ── */}
//             <div className="d-flex justify-content-between align-items-center mb-4">
//               <h2 className="h4 fw-bold text-dark mb-0">
//                 My Creator Level:{" "}
//                 <span style={{ color: "#e9527a" }}>
//                   {currentLevel.name} ({currentLevel.status})
//                 </span>
//               </h2>
//               <button
//                 onClick={handleLogout}
//                 className="btn btn-danger"
//                 style={{
//                   padding: "0.5rem 1rem",
//                   background: "#dc3545",
//                   border: "none",
//                   borderRadius: "6px",
//                   cursor: "pointer",
//                   color: "#fff",
//                   fontWeight: "bold",
//                   boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                   transition: "all 0.2s ease",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.background = "#c82333")}
//                 onMouseLeave={(e) => (e.currentTarget.style.background = "#dc3545")}
//               >
//                 Log Out
//               </button>
//             </div>

//             {/* ── Progress Card ── */}
//             <motion.div
//               initial={{ scale: 0.98, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.1 }}
//               className="milestone-card"
//             >
//               <div className="d-flex justify-content-between align-items-center mb-4">
//                 <p className="h6 fw-bold text-dark m-0">
//                   {nextPackage ? (
//                     <>
//                       Progress to{" "}
//                       <span style={{ color: "#e9527a" }}>{nextPackage.name}</span>{" "}
//                       (Next Level)
//                     </>
//                   ) : (
//                     <span style={{ color: "#e9527a" }}>
//                       🎉 You have reached the highest level!
//                     </span>
//                   )}
//                 </p>
//               </div>

//               {/* Progress Hour Labels */}
//               <div className="d-flex justify-content-between small fw-bold text-secondary mb-2 px-1">
//                 <span>{progressMin} hrs</span>
//                 <span>{progressMax} hrs</span>
//               </div>

//               {/* Progress Bar */}
//               <div className="custom-progress-container mb-3">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${Math.min(progressPercent, 100)}%` }}
//                   transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//                   className="custom-progress-bar d-flex align-items-center justify-content-end pe-1"
//                 >
//                   <div
//                     style={{
//                       width: "4px",
//                       height: "24px",
//                       backgroundColor: "rgba(255,255,255,0.3)",
//                       borderRadius: "2px",
//                       marginRight: "4px",
//                     }}
//                   />
//                 </motion.div>
//               </div>

//               {/* Current Hours */}
//               <div className="text-center mb-3">
//                 <span className="fw-bold fs-5" style={{ color: "#e9527a" }}>
//                   {currentHours} hrs
//                 </span>
//                 <span className="text-secondary small ms-1">(Current)</span>
//               </div>

//               {/* Remaining Info */}
//               {nextPackage ? (
//                 <p className="text-center text-dark m-0">
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {remainingHours} hours
//                   </span>{" "}
//                   remaining to unlock{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {nextPackage.name}
//                   </span>{" "}
//                   and earn{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {nextPackage.rate} Bath/min
//                   </span>
//                 </p>
//               ) : (
//                 <p className="text-center text-dark m-0">
//                   You are at the{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     highest level
//                   </span>
//                   . Keep streaming!
//                 </p>
//               )}
//             </motion.div>

//             {/* ── Levels & Rewards Table ── */}
//             <h3 className="h5 fw-bold text-dark mb-4 mt-4">Levels & Rewards</h3>

//             <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
//               {/* Table Header */}
//               <div className="row g-0 px-4 py-3 bg-light border-bottom small fw-bold text-secondary text-uppercase d-none d-lg-flex">
//                 <div className="col-lg-3">Level Name</div>
//                 <div className="col-lg-3">Milestones (Hours)</div>
//                 <div className="col-lg-3">Earnings (Rate)</div>
//                 <div className="col-lg-3">Status</div>
//               </div>

//               <div className="p-3 p-md-4">
//                 {levels.map((level, index) => (
//                   <motion.div
//                     key={level.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 + index * 0.1 }}
//                     // className="level-row row align-items-center g-3 shadow-sm mb-3 mt-4"
//                     className={`level-row ${level.status === "Active" ? "active-level" : ""} row align-items-center g-3 shadow-sm mb-3 mt-4`}
//                     style={{
//                       backgroundColor: level.bgColor,
//                       color: level.textColor,
//                       borderRadius: "12px",
//                       // padding: "12px",
//                     }}
//                   >
//                     {/* Level Name */}
//                     <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center gap-2">
//                       <div className="level-icon-wrapper">
//                         <img
//                           src={level.icon}
//                           alt={level.name}
//                           style={{ width: "32px", height: "32px", objectFit: "contain" }}
//                         />
//                       </div>
//                       <div>
//                         <span className="fw-bold">{level.name}</span>
//                         <div className="d-lg-none small opacity-75">
//                           {level.milestone}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Milestone Hours */}
//                     <div className="col-6 col-md-3 col-lg-3 fw-medium d-none d-lg-block">
//                       {level.milestone}
//                     </div>

//                     {/* Earnings Rate */}
//                     <div className="col-6 col-md-3 col-lg-3 fw-medium">
//                       {level.earnings}
//                     </div>

//                     {/* Status */}
//                     <div className="col-12 col-md-12 col-lg-3">
//                       <div
//                         className="status-pill"
//                         style={{ backgroundColor: level.statusBg }}
//                       >
//                         {level.status === "Active" ? (
//                           <div className="d-flex align-items-center gap-2">
//                             <div className="bg-white rounded-2 p-1 d-flex align-items-center justify-content-center">
//                               <Check size={14} style={{ color: "#e9527a" }} />
//                             </div>
//                             <span className="fw-bold">Active</span>
//                           </div>
//                         ) : level.status === "Completed" ? (
//                           <div className="d-flex align-items-center gap-2">
//                             <Check size={16} style={{ color: "#28a745" }} />
//                             <span className="fw-bold">Completed</span>
//                           </div>
//                         ) : (
//                           <div className="d-flex align-items-center gap-2">
//                             <Lock size={16} style={{ color: level.lockColor }} />
//                             <div className="d-flex flex-column">
//                               <span className="fw-bold">Locked</span>
//                               {level.lockedText && (
//                                 <span className="extra-small opacity-75" style={{ fontSize: "10px" }}>
//                                   {level.lockedText}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// }


















// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import axios from 'axios';
// import { Check, Lock, Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Milestone.css";

// // ★ Import static images ★
// import silverIcon from "../assets/Thai-Silver.png";
// import goldIcon from "../assets/Thai-Gold.png";
// import diamondIcon from "../assets/Thai-Dimond.png";

// export default function Milestone() {
//   const [milestonesData, setMilestonesData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${import.meta.env.VITE_SERVER_URL}/logout`, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${localStorage.getItem("token")}`
//         },
//         withCredentials: true
//       });
//     } catch (err) {
//       console.error('Logout error:', err);
//     } finally {
//       navigate('/');
//       localStorage.removeItem("token");
//     }
//   };

//   useEffect(() => {
//     const fetchMilestones = async () => {
//       try {
//         const response = await axios.get(
//           "https://sagarxo.app/web-api/customer/creator-milestones",
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `${localStorage.getItem("token")}`
//             },
//             withCredentials: true
//           }
//         );
//         const data = response.data;
//         if (data.success) {
//           setMilestonesData(data.data);
//         } else {
//           setError(data.message || 'Failed to fetch milestones');
//         }
//       } catch (err) {
//         setError(err.response?.data?.message || 'An error occurred while fetching milestones');
//       }
//     };

//     fetchMilestones();
//   }, []);

//   // ── Loading ────────────────────────────────────────────────────────────────
//   if (!milestonesData && !error) {
//     return (
//       <div className="main-container">
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3">Loading Milestones...</p>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Error ──────────────────────────────────────────────────────────────────
//   if (error) {
//     return (
//       <div className="main-container">
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <p style={{ color: 'red' }}>{error}</p>
//               <button onClick={() => navigate('/')} className="btn btn-primary mt-3">
//                 Back to Login
//               </button>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Extract data from new API response ────────────────────────────────────
//   const currentHours = milestonesData.total_video_call_hours || 0;
//   const packages = milestonesData.packages || [];
//   const activePackageId = milestonesData.active_package_id;
//   const unlockInfo = milestonesData.unlock_info;

//   const currentPackage = packages.find(pkg => pkg.id === activePackageId) || packages[0];
//   const nextPackage = unlockInfo ? {
//     id: unlockInfo.next_package_id,
//     name: unlockInfo.next_package_name,
//     rate: unlockInfo.next_rate_per_minute,
//   } : null;

//   const nextPackageFull = nextPackage
//     ? packages.find(pkg => pkg.id === nextPackage.id)
//     : null;

//   // ★ Static images array ★
//   const levelIcons = [silverIcon, goldIcon, diamondIcon];

//   const levelColors = [
//     { bgColor: "#e9527a", textColor: "white", lockColor: "#e9527a" },
//     { bgColor: "#fff9e6", textColor: "#333", lockColor: "#ff9800" },
//     { bgColor: "#e6f7ff", textColor: "#333", lockColor: "#03a9f4" },
//   ];

//   const levels = packages.map((pkg, index) => {
//     const isActive = pkg.id === activePackageId;
//     const colors = levelColors[index] || levelColors[levelColors.length - 1];

//     return {
//       id: pkg.id,
//       name: pkg.package_name,
//       minHours: pkg.min_hours,
//       maxHours: pkg.max_hours,
//       milestone: `${pkg.min_hours} - ${pkg.max_hours} Hours`,
//       earnings: `${pkg.rate_per_minute} Bath/min`,
//       status: isActive ? "Active" : (pkg.id > activePackageId ? "Locked" : "Completed"),
//       icon: levelIcons[index] || levelIcons[levelIcons.length - 1],
//       bgColor: isActive ? "#e9527a" : colors.bgColor,
//       textColor: isActive ? "white" : colors.textColor,
//       statusBg: isActive ? "rgba(255,255,255,0.2)" : "transparent",
//       lockedText: pkg.id > activePackageId ? "(Unlock soon)" : null,
//       lockColor: colors.lockColor,
//     };
//   });

//   const currentLevel = levels.find(l => l.id === activePackageId) || levels[0];

//   let progressPercent = 100;
//   let remainingHours = 0;
//   let progressMin = currentPackage.min_hours;
//   let progressMax = currentPackage.max_hours;

//   if (unlockInfo && nextPackageFull) {
//     remainingHours = parseFloat(unlockInfo.remaining_hours) || 0;
//     progressMin = currentPackage.min_hours;
//     progressMax = nextPackageFull.min_hours;
//     const totalRange = progressMax - progressMin;
//     const completed = currentHours - progressMin;
//     progressPercent = totalRange > 0 ? Math.min((completed / totalRange) * 100, 100) : 100;
//   } else {
//     remainingHours = 0;
//     progressPercent = 100;
//   }

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-4 p-md-5">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="container-fluid p-0"
//           >
//             {/* Page Header */}
//             <div className="d-flex justify-content-between align-items-center mb-4">
//               <h2 className="h4 fw-bold text-dark mb-0">
//                 My Creator Level:{" "}
//                 <span style={{ color: "#e9527a" }}>
//                   {currentLevel.name} ({currentLevel.status})
//                 </span>
//               </h2>
//               <button
//                 onClick={handleLogout}
//                 className="btn btn-danger"
//                 style={{
//                   padding: "0.5rem 1rem",
//                   background: "#dc3545",
//                   border: "none",
//                   borderRadius: "6px",
//                   cursor: "pointer",
//                   color: "#fff",
//                   fontWeight: "bold",
//                   boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.background = "#c82333")}
//                 onMouseLeave={(e) => (e.currentTarget.style.background = "#dc3545")}
//               >
//                 Log Out
//               </button>
//             </div>

//             {/* Progress Card */}
//             <motion.div
//               initial={{ scale: 0.98, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.1 }}
//               className="milestone-card"
//             >
//               <div className="d-flex justify-content-between align-items-center mb-4">
//                 <p className="h6 fw-bold text-dark m-0">
//                   {nextPackage ? (
//                     <>
//                       Progress to{" "}
//                       <span style={{ color: "#e9527a" }}>{nextPackage.name}</span>{" "}
//                       (Next Level)
//                     </>
//                   ) : (
//                     <span style={{ color: "#e9527a" }}>
//                       🎉 You have reached the highest level!
//                     </span>
//                   )}
//                 </p>
//               </div>

//               <div className="d-flex justify-content-between small fw-bold text-secondary mb-2 px-1">
//                 <span>{progressMin} hrs</span>
//                 <span>{progressMax} hrs</span>
//               </div>

//               <div className="custom-progress-container mb-3">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${Math.min(progressPercent, 100)}%` }}
//                   transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//                   className="custom-progress-bar d-flex align-items-center justify-content-end pe-1"
//                 >
//                   <div
//                     style={{
//                       width: "4px",
//                       height: "24px",
//                       backgroundColor: "rgba(255,255,255,0.3)",
//                       borderRadius: "2px",
//                       marginRight: "4px",
//                     }}
//                   />
//                 </motion.div>
//               </div>

//               <div className="text-center mb-3">
//                 <span className="fw-bold fs-5" style={{ color: "#e9527a" }}>
//                   {currentHours} hrs
//                 </span>
//                 <span className="text-secondary small ms-1">(Current)</span>
//               </div>

//               {nextPackage ? (
//                 <p className="text-center text-dark m-0">
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {remainingHours} hours
//                   </span>{" "}
//                   remaining to unlock{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {nextPackage.name}
//                   </span>{" "}
//                   and earn{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {nextPackage.rate} Bath/min
//                   </span>
//                 </p>
//               ) : (
//                 <p className="text-center text-dark m-0">
//                   You are at the{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     highest level
//                   </span>
//                   . Keep streaming!
//                 </p>
//               )}
//             </motion.div>

//             {/* Levels & Rewards Table */}
//             <h3 className="h5 fw-bold text-dark mb-4 mt-4">Levels & Rewards</h3>

//             <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
//               <div className="row g-0 px-4 py-3 bg-light border-bottom small fw-bold text-secondary text-uppercase d-none d-lg-flex">
//                 <div className="col-lg-3">Level Name</div>
//                 <div className="col-lg-3">Milestones (Hours)</div>
//                 <div className="col-lg-3">Earnings (Rate)</div>
//                 <div className="col-lg-3">Status</div>
//               </div>

//               <div className="p-3 p-md-4">
//                 {levels.map((level, index) => (
//                   <motion.div
//                     key={level.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 + index * 0.1 }}
//                     className={`level-row row align-items-center  shadow-sm mb-3 mt-4 ${
//                       level.status === "Active" ? "active-level" : ""
//                     }`}
//                     style={{
//                       backgroundColor: level.bgColor,
//                       color: level.textColor,
//                       borderRadius: "12px",
//                       padding: "15px",
//                       paddingBottom:'30px'
//                     }}
//                   >
//                     {/* Level Name with static image */}
//                     <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center gap-2">
//                       <div className="level-icon-wrapper">
//                         <img className='mt-0'
//                           src={level.icon}
//                           alt={level.name}
//                           style={{ width: "60px", height: "60px", objectFit: "contain" }}
//                         />
//                       </div>
//                       <div>
//                         <span className="fw-bold">{level.name}</span>
//                         <div className="d-lg-none small opacity-75">
//                           {level.milestone}
//                         </div>
//                       </div>
//                     </div>

//                     <div className="col-6 col-md-3 col-lg-3 fw-medium d-none d-lg-block">
//                       {level.milestone}
//                     </div>

//                     <div className="col-6 col-md-3 col-lg-3 fw-medium">
//                       {level.earnings}
//                     </div>

//                     <div className="col-12 col-md-12 col-lg-3">
//                       <div
//                         className="status-pill"
//                         style={{ backgroundColor: level.statusBg }}
//                       >
//                         {level.status === "Active" ? (
//                           <div className="d-flex align-items-center gap-2">
//                             <div className="bg-white rounded-2 p-1 d-flex align-items-center justify-content-center">
//                               <Check size={14} style={{ color: "#e9527a" }} />
//                             </div>
//                             <span className="fw-bold">Active</span>
//                           </div>
//                         ) : level.status === "Completed" ? (
//                           <div className="d-flex align-items-center gap-2">
//                             <Check size={16} style={{ color: "#28a745" }} />
//                             <span className="fw-bold">Completed</span>
//                           </div>
//                         ) : (
//                           <div className="d-flex align-items-center gap-2">
//                             <Lock size={16} style={{ color: level.lockColor }} />
//                             <div className="d-flex flex-column">
//                               <span className="fw-bold">Locked</span>
//                               {level.lockedText && (
//                                 <span className="extra-small opacity-75" style={{ fontSize: "10px" }}>
//                                   {level.lockedText}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// }












// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import axios from 'axios';
// import { Check, Lock, Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Milestone.css";

// // ★ Import static images ★
// import silverIcon from "../assets/Thai-Silver.png";
// import goldIcon from "../assets/Thai-Gold.png";
// import diamondIcon from "../assets/Thai-Dimond.png";

// export default function Milestone() {
//   const [milestonesData, setMilestonesData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${import.meta.env.VITE_SERVER_URL}/logout`, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${localStorage.getItem("token")}`
//         },
//         withCredentials: true
//       });
//     } catch (err) {
//       console.error('Logout error:', err);
//     } finally {
//       navigate('/');
//       localStorage.removeItem("token");
//     }
//   };

//   useEffect(() => {
//     const fetchMilestones = async () => {
//       try {
//         const response = await axios.get(
//           "https://sagarxo.app/web-api/customer/creator-milestones",
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `${localStorage.getItem("token")}`
//             },
//             withCredentials: true
//           }
//         );
//         const data = response.data;
//         if (data.success) {
//           setMilestonesData(data.data);
//         } else {
//           setError(data.message || 'Failed to fetch milestones');
//         }
//       } catch (err) {
//         setError(err.response?.data?.message || 'An error occurred while fetching milestones');
//       }
//     };

//     fetchMilestones();
//   }, []);

//   // ── Loading ────────────────────────────────────────────────────────────────
//   if (!milestonesData && !error) {
//     return (
//       <div className="main-container">
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3">Loading Milestones...</p>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Error ──────────────────────────────────────────────────────────────────
//   if (error) {
//     return (
//       <div className="main-container">
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <p style={{ color: 'red' }}>{error}</p>
//               <button onClick={() => navigate('/')} className="btn btn-primary mt-3">
//                 Back to Login
//               </button>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Extract data from API response ────────────────────────────────────
//   const currentHours = milestonesData.total_video_call_hours || 0;
//   const packages = milestonesData.packages || [];
//   const activePackageId = milestonesData.active_package_id;
//   const unlockInfo = milestonesData.unlock_info;

//   const currentPackage = packages.find(pkg => pkg.id === activePackageId) || packages[0];
//   const nextPackage = unlockInfo ? {
//     id: unlockInfo.next_package_id,
//     name: unlockInfo.next_package_name,
//     rate: unlockInfo.next_rate_per_minute,
//   } : null;

//   const nextPackageFull = nextPackage
//     ? packages.find(pkg => pkg.id === nextPackage.id)
//     : null;

//   // ★ Static images array ★
//   const levelIcons = [silverIcon, goldIcon, diamondIcon];

//   const levelColors = [
//     { bgColor: "#e9527a", textColor: "white", lockColor: "#e9527a" },
//     { bgColor: "#fff9e6", textColor: "#333", lockColor: "#ff9800" },
//     { bgColor: "#e6f7ff", textColor: "#333", lockColor: "#03a9f4" },
//   ];

//   const levels = packages.map((pkg, index) => {
//     const isActive = pkg.id === activePackageId;
//     const colors = levelColors[index] || levelColors[levelColors.length - 1];

//     return {
//       id: pkg.id,
//       name: pkg.package_name,
//       minHours: pkg.min_hours,
//       maxHours: pkg.max_hours,
//       milestone: `${pkg.min_hours} - ${pkg.max_hours} Hours`,
//       earnings: `${pkg.rate_per_minute} Bath/min`,
//       status: isActive ? "Active" : (pkg.id > activePackageId ? "Locked" : "Completed"),
//       icon: levelIcons[index] || levelIcons[levelIcons.length - 1],
//       bgColor: isActive ? "#e9527a" : colors.bgColor,
//       textColor: isActive ? "white" : colors.textColor,
//       statusBg: isActive ? "rgba(255,255,255,0.2)" : "transparent",
//       lockedText: pkg.id > activePackageId ? "(Unlock soon)" : null,
//       lockColor: colors.lockColor,
//     };
//   });

//   const currentLevel = levels.find(l => l.id === activePackageId) || levels[0];

//   let progressPercent = 100;
//   let remainingHours = 0;
//   let progressMin = currentPackage.min_hours;
//   let progressMax = currentPackage.max_hours;

//   if (unlockInfo && nextPackageFull) {
//     remainingHours = parseFloat(unlockInfo.remaining_hours) || 0;
//     progressMin = currentPackage.min_hours;
//     progressMax = nextPackageFull.min_hours;
//     const totalRange = progressMax - progressMin;
//     const completed = currentHours - progressMin;
//     progressPercent = totalRange > 0 ? Math.min((completed / totalRange) * 100, 100) : 100;
//   } else {
//     remainingHours = 0;
//     progressPercent = 100;
//   }

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-3 p-md-5">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="container-fluid p-0"
//           >
//             {/* ── Page Header (responsive) ── */}
//             <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
//               <h2 className="h5 h4-md fw-bold text-dark mb-0 text-center text-sm-start">
//                 My Creator Level:{" "}
//                 <span style={{ color: "#e9527a" }}>
//                   {currentLevel.name} ({currentLevel.status})
//                 </span>
//               </h2>
//               {/* <button
//                 onClick={handleLogout}
//                 className="btn btn-danger align-self-center align-self-sm-auto"
//                 style={{
//                   padding: "0.5rem 1rem",
//                   background: "#dc3545",
//                   border: "none",
//                   borderRadius: "6px",
//                   cursor: "pointer",
//                   color: "#fff",
//                   fontWeight: "bold",
//                   boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                   width: "fit-content",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.background = "#c82333")}
//                 onMouseLeave={(e) => (e.currentTarget.style.background = "#dc3545")}
//               >
//                 Log Out
//               </button> */}
//             </div>

//             {/* ── Progress Card (responsive) ── */}
//             <motion.div
//               initial={{ scale: 0.98, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.1 }}
//               className="milestone-card"
//             >
//               <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
//                 <p className="h6 fw-bold text-dark m-0">
//                   {nextPackage ? (
//                     <>
//                       Progress to{" "}
//                       <span style={{ color: "#e9527a" }}>{nextPackage.name}</span>{" "}
//                       (Next Level)
//                     </>
//                   ) : (
//                     <span style={{ color: "#e9527a" }}>
//                       🎉 You have reached the highest level!
//                     </span>
//                   )}
//                 </p>
//               </div>

//               <div className="d-flex justify-content-between small fw-bold text-secondary mb-2 px-1">
//                 <span>{progressMin} hrs</span>
//                 <span>{progressMax} hrs</span>
//               </div>

//               <div className="custom-progress-container mb-3">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${Math.min(progressPercent, 100)}%` }}
//                   transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//                   className="custom-progress-bar d-flex align-items-center justify-content-end pe-1"
//                 >
//                   <div
//                     style={{
//                       width: "4px",
//                       height: "24px",
//                       backgroundColor: "rgba(255,255,255,0.3)",
//                       borderRadius: "2px",
//                       marginRight: "4px",
//                     }}
//                   />
//                 </motion.div>
//               </div>

//               <div className="text-center mb-3">
//                 <span className="fw-bold fs-6 fs-md-5" style={{ color: "#e9527a" }}>
//                   {currentHours} hrs
//                 </span>
//                 <span className="text-secondary small ms-1">(Current)</span>
//               </div>

//               {nextPackage ? (
//                 <p className="text-center text-dark m-0 small small-md">
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {remainingHours} hours
//                   </span>{" "}
//                   remaining to unlock{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {nextPackage.name}
//                   </span>{" "}
//                   and earn{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {nextPackage.rate} Bath/min
//                   </span>
//                 </p>
//               ) : (
//                 <p className="text-center text-dark m-0 small small-md">
//                   You are at the{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     highest level
//                   </span>
//                   . Keep streaming!
//                 </p>
//               )}
//             </motion.div>

//             {/* ── Levels & Rewards Table (fully responsive) ── */}
//             <h3 className="h5 fw-bold text-dark mb-3 mt-4">Levels & Rewards</h3>

//             <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
//               {/* Desktop header - hidden on mobile */}
//               <div className="row g-0 px-3 px-md-4 py-3 bg-light border-bottom small fw-bold text-secondary text-uppercase d-none d-lg-flex">
//                 <div className="col-lg-3">Level Name</div>
//                 <div className="col-lg-3">Milestones (Hours)</div>
//                 <div className="col-lg-3">Earnings (Rate)</div>
//                 <div className="col-lg-3">Status</div>
//               </div>

//               <div className="p-3 p-md-4">
//                 {levels.map((level, index) => (
//                   <motion.div
//                     key={level.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 + index * 0.1 }}
//                     className={`level-row d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3 shadow-sm mb-3 mt-2 ${
//                       level.status === "Active" ? "active-level" : ""
//                     }`}
//                     style={{
//                       backgroundColor: level.bgColor,
//                       color: level.textColor,
//                       borderRadius: "12px",
//                       padding: "25px",
//                     }}
//                   >
//                     {/* Level Name with static image */}
//                     <div className="d-flex align-items-center gap-3 w-100 w-lg-auto flex-grow-1 responsive-design">
//                       <div className="level-icon-wrapper flex-shrink-0">
//                         <img
//                           src={level.icon}
//                           alt={level.name}
//                           className="mt-0 responsive-images"
//                         />
//                       </div>
//                       <div className='responsive-design'>
//                         <span className="fw-bold fs-6">{level.name}</span>
//                         {/* Show milestone on mobile under name */}
//                         <div className="d-lg-none small opacity-75 mt-1">
//                           {level.milestone}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Desktop-only fields */}
//                     <div className="d-none d-lg-block col-lg-3 fw-medium">
//                       {level.milestone}
//                     </div>
//                     <div className="d-none d-lg-block col-lg-3 fw-medium">
//                       {level.earnings}
//                     </div>

//                     {/* Mobile: show earnings as separate line */}
//                     <div className="d-lg-none w-100 d-flex justify-content-between align-items-center">
//                       <span className="text-muted small">Earnings:</span>
//                       <span className="fw-medium">{level.earnings}</span>
//                     </div>

//                     {/* Status */}
//                     <div className="w-100 w-lg-auto">
//                       <div
//                         className="status-pill d-inline-flex"
//                         style={{  padding: "4px 12px", borderRadius: "20px" , width:'100%' }}
//                       >
//                         {level.status === "Active" ? (
//                           <div className="d-flex align-items-center gap-2">
//                             <div className="bg-white rounded-2 p-1 d-flex align-items-center justify-content-center">
//                               <Check size={14} style={{ color: "#e9527a" }} />
//                             </div>
//                             <span className="fw-bold">Active</span>
//                           </div>
//                         ) : level.status === "Completed" ? (
//                           <div className="d-flex align-items-center gap-2">
//                             <Check size={16} style={{ color: "#28a745" }} />
//                             <span className="fw-bold">Completed</span>
//                           </div>
//                         ) : (
//                           <div className="d-flex align-items-center gap-2">
//                             <Lock size={16} style={{ color: level.lockColor }} />
//                             <div className="d-flex flex-column">
//                               <span className="fw-bold">Locked</span>
//                               {level.lockedText && (
//                                 <span className="extra-small opacity-75" style={{ fontSize: "10px" }}>
//                                   {level.lockedText}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// }


















// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import axios from 'axios';
// import { Check, Lock, Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Milestone.css";

// // ★ Import static images ★
// import silverIcon from "../assets/Thai-Silver.png";
// import goldIcon from "../assets/Thai-Gold.png";
// import diamondIcon from "../assets/Thai-Dimond.png";

// export default function Milestone() {
//   const [milestonesData, setMilestonesData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   // Close Sidebar
//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${import.meta.env.VITE_SERVER_URL}/logout`, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${localStorage.getItem("token")}`
//         },
//         withCredentials: true
//       });
//     } catch (err) {
//       console.error('Logout error:', err);
//     } finally {
//       navigate('/');
//       localStorage.removeItem("token");
//     }
//   };

//   useEffect(() => {
//     const fetchMilestones = async () => {
//       try {
//         const response = await axios.get(
//           "https://sagarxo.app/web-api/customer/creator-milestones",
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `${localStorage.getItem("token")}`
//             },
//             withCredentials: true
//           }
//         );
//         const data = response.data;
//         if (data.success) {
//           setMilestonesData(data.data);
//         } else {
//           setError(data.message || 'Failed to fetch milestones');
//         }
//       } catch (err) {
//         setError(err.response?.data?.message || 'An error occurred while fetching milestones');
//       }
//     };

//     fetchMilestones();
//   }, []);

//   // ── Loading ────────────────────────────────────────────────────────────────
//   if (!milestonesData && !error) {
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
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3">Loading Milestones...</p>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Error ──────────────────────────────────────────────────────────────────
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
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <p style={{ color: 'red' }}>{error}</p>
//               <button onClick={() => navigate('/')} className="btn btn-primary mt-3">
//                 Back to Login
//               </button>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Extract data from API response ────────────────────────────────────
//   const currentHours = milestonesData.total_video_call_hours || 0;
//   const packages = milestonesData.packages || [];
//   const activePackageId = milestonesData.active_package_id;
//   const unlockInfo = milestonesData.unlock_info;

//   const currentPackage = packages.find(pkg => pkg.id === activePackageId) || packages[0];
//   const nextPackage = unlockInfo ? {
//     id: unlockInfo.next_package_id,
//     name: unlockInfo.next_package_name,
//     rate: unlockInfo.next_rate_per_minute,
//   } : null;

//   const nextPackageFull = nextPackage
//     ? packages.find(pkg => pkg.id === nextPackage.id)
//     : null;

//   // ★ Static images array ★
//   const levelIcons = [silverIcon, goldIcon, diamondIcon];

//   const levelColors = [
//     { bgColor: "#e9527a", textColor: "white", lockColor: "#e9527a" },
//     { bgColor: "#fff9e6", textColor: "#333", lockColor: "#ff9800" },
//     { bgColor: "#e6f7ff", textColor: "#333", lockColor: "#03a9f4" },
//   ];

//   const levels = packages.map((pkg, index) => {
//     const isActive = pkg.id === activePackageId;
//     const colors = levelColors[index] || levelColors[levelColors.length - 1];

//     return {
//       id: pkg.id,
//       name: pkg.package_name,
//       minHours: pkg.min_hours,
//       maxHours: pkg.max_hours,
//       milestone: `${pkg.min_hours} - ${pkg.max_hours} Hours`,
//       earnings: `${pkg.rate_per_minute} Bath/min`,
//       status: isActive ? "Active" : (pkg.id > activePackageId ? "Locked" : "Completed"),
//       icon: levelIcons[index] || levelIcons[levelIcons.length - 1],
//       bgColor: isActive ? "#e9527a" : colors.bgColor,
//       textColor: isActive ? "white" : colors.textColor,
//       statusBg: isActive ? "rgba(255,255,255,0.2)" : "transparent",
//       lockedText: pkg.id > activePackageId ? "(Unlock soon)" : null,
//       lockColor: colors.lockColor,
//     };
//   });

//   const currentLevel = levels.find(l => l.id === activePackageId) || levels[0];

//   let progressPercent = 100;
//   let remainingHours = 0;
//   let progressMin = currentPackage.min_hours;
//   let progressMax = currentPackage.max_hours;

//   if (unlockInfo && nextPackageFull) {
//     remainingHours = parseFloat(unlockInfo.remaining_hours) || 0;
//     progressMin = currentPackage.min_hours;
//     progressMax = nextPackageFull.min_hours;
//     const totalRange = progressMax - progressMin;
//     const completed = currentHours - progressMin;
//     progressPercent = totalRange > 0 ? Math.min((completed / totalRange) * 100, 100) : 100;
//   } else {
//     remainingHours = 0;
//     progressPercent = 100;
//   }

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={handleCloseSidebar}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-3 p-md-5">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="container-fluid p-0"
//           >
//             {/* ── Page Header (responsive) ── */}
//             <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
//               <h2 className="h5 h4-md fw-bold text-dark mb-0 text-center text-sm-start">
//                 My Creator Level:{" "}
//                 <span style={{ color: "#e9527a" }}>
//                   {currentLevel.name} ({currentLevel.status})
//                 </span>
//               </h2>
//               {/* <button
//                 onClick={handleLogout}
//                 className="btn btn-danger align-self-center align-self-sm-auto"
//                 style={{
//                   padding: "0.5rem 1rem",
//                   background: "#dc3545",
//                   border: "none",
//                   borderRadius: "6px",
//                   cursor: "pointer",
//                   color: "#fff",
//                   fontWeight: "bold",
//                   boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                   width: "fit-content",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.background = "#c82333")}
//                 onMouseLeave={(e) => (e.currentTarget.style.background = "#dc3545")}
//               >
//                 Log Out
//               </button> */}
//             </div>

//             {/* ── Progress Card (responsive) ── */}
//             <motion.div
//               initial={{ scale: 0.98, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.1 }}
//               className="milestone-card"
//             >
//               <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
//                 <p className="h6 fw-bold text-dark m-0">
//                   {nextPackage ? (
//                     <>
//                       Progress to{" "}
//                       <span style={{ color: "#e9527a" }}>{nextPackage.name}</span>{" "}
//                       (Next Level)
//                     </>
//                   ) : (
//                     <span style={{ color: "#e9527a" }}>
//                       🎉 You have reached the highest level!
//                     </span>
//                   )}
//                 </p>
//               </div>

//               <div className="d-flex justify-content-between small fw-bold text-secondary mb-2 px-1">
//                 <span>{progressMin} hrs</span>
//                 <span>{progressMax} hrs</span>
//               </div>

//               <div className="custom-progress-container mb-3">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${Math.min(progressPercent, 100)}%` }}
//                   transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//                   className="custom-progress-bar d-flex align-items-center justify-content-end pe-1"
//                 >
//                   <div
//                     style={{
//                       width: "4px",
//                       height: "24px",
//                       backgroundColor: "rgba(255,255,255,0.3)",
//                       borderRadius: "2px",
//                       marginRight: "4px",
//                     }}
//                   />
//                 </motion.div>
//               </div>

//               <div className="text-center mb-3">
//                 <span className="fw-bold fs-6 fs-md-5" style={{ color: "#e9527a" }}>
//                   {currentHours} hrs
//                 </span>
//                 <span className="text-secondary small ms-1">(Current)</span>
//               </div>

//               {nextPackage ? (
//                 <p className="text-center text-dark m-0 small small-md">
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {remainingHours} hours
//                   </span>{" "}
//                   remaining to unlock{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {nextPackage.name}
//                   </span>{" "}
//                   and earn{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     {nextPackage.rate} Bath/min
//                   </span>
//                 </p>
//               ) : (
//                 <p className="text-center text-dark m-0 small small-md">
//                   You are at the{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>
//                     highest level
//                   </span>
//                   . Keep streaming!
//                 </p>
//               )}
//             </motion.div>

//             {/* ── Levels & Rewards Table (fully responsive) ── */}
//             <h3 className="h5 fw-bold text-dark mb-3 mt-4">Levels & Rewards</h3>

//             <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
//               {/* Desktop header - hidden on mobile */}
//               <div className="row g-0 px-3 px-md-4 py-3 bg-light border-bottom small fw-bold text-secondary text-uppercase d-none d-lg-flex">
//                 <div className="col-lg-3">Level Name</div>
//                 <div className="col-lg-3">Milestones (Hours)</div>
//                 <div className="col-lg-3">Earnings (Rate)</div>
//                 <div className="col-lg-3">Status</div>
//               </div>

//               <div className="p-3 p-md-4">
//                 {levels.map((level, index) => (
//                   <motion.div
//                     key={level.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 + index * 0.1 }}
//                     className={`level-row d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3 shadow-sm mb-3 mt-2 ${
//                       level.status === "Active" ? "active-level" : ""
//                     }`}
//                     style={{
//                       backgroundColor: level.bgColor,
//                       color: level.textColor,
//                       borderRadius: "12px",
//                       padding: "25px",
//                     }}
//                   >
//                     {/* Level Name with static image */}
//                     <div className="d-lg-flex align-items-center gap-3 w-100 w-lg-auto flex-grow-1 responsive-design">
//                       <div className="level-icon-wrapper flex-shrink-0 margin-left-reesponsive">
//                         <img
//                           src={level.icon}
//                           alt={level.name}
//                           className="mt-0 responsive-images"
//                         />
//                       </div>
//                       <div className='responsive-design'>
//                         <span className="fw-bold fs-6">{level.name}</span>
//                         {/* Show milestone on mobile under name */}
//                         <div className="d-lg-none small opacity-75 mt-1">
//                           {level.milestone}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Desktop-only fields */}
//                     <div className="d-none d-lg-block col-lg-3 fw-medium">
//                       {level.milestone}
//                     </div>
//                     <div className="d-none d-lg-block col-lg-3 fw-medium">
//                       {level.earnings}
//                     </div>

//                     {/* Mobile: show earnings as separate line */}
//                     <div className="d-lg-none w-100 d-flex justify-content-end align-items-center">
//                       <span className="text-muted small d-lg-none d-none">Earnings:</span>
//                       <span className="fw-medium">{level.earnings}</span>
//                     </div>

//                     {/* Status */}
//                     <div className="w-100 w-lg-auto">
//                       <div
//                         className="status-pill d-inline-flex"
//                         style={{  padding: "4px 12px", borderRadius: "20px" , width:'100%' }}
//                       >
//                         {level.status === "Active" ? (
//                           <div className="d-flex align-items-center gap-2">
//                             <div className="bg-white rounded-2 p-1 d-flex align-items-center justify-content-center">
//                               <Check size={14} style={{ color: "#e9527a" }} />
//                             </div>
//                             <span className="fw-bold">Active</span>
//                           </div>
//                         ) : level.status === "Completed" ? (
//                           <div className="d-flex align-items-center gap-2">
//                             <Check size={16} style={{ color: "#28a745" }} />
//                             <span className="fw-bold">Completed</span>
//                           </div>
//                         ) : (
//                           <div className="d-flex align-items-center gap-2">
//                             <Lock size={16} style={{ color: level.lockColor }} />
//                             <div className="d-flex flex-column">
//                               <span className="fw-bold">Locked</span>
//                               {level.lockedText && (
//                                 <span className="extra-small opacity-75" style={{ fontSize: "10px" }}>
//                                   {level.lockedText}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// }









// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import axios from 'axios';
// import { Check, Lock, Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Milestone.css";

// // ★ Import static images ★
// import silverIcon from "../assets/Thai-Silver.png";
// import goldIcon from "../assets/Thai-Gold.png";
// import diamondIcon from "../assets/Thai-Dimond.png";

// export default function Milestone() {
//   const [milestonesData, setMilestonesData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${import.meta.env.VITE_SERVER_URL}/logout`, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${localStorage.getItem("token")}`
//         },
//         withCredentials: true
//       });
//     } catch (err) {
//       console.error('Logout error:', err);
//     } finally {
//       navigate('/');
//       localStorage.removeItem("token");
//     }
//   };

//   useEffect(() => {
//     const fetchMilestones = async () => {
//       try {
//         const response = await axios.get(
//           "https://sagarxo.app/web-api/customer/creator-milestones",
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `${localStorage.getItem("token")}`
//             },
//             withCredentials: true
//           }
//         );
//         const data = response.data;
//         if (data.success) {
//           setMilestonesData(data.data);
//         } else {
//           setError(data.message || 'Failed to fetch milestones');
//         }
//       } catch (err) {
//         setError(err.response?.data?.message || 'An error occurred while fetching milestones');
//       }
//     };

//     fetchMilestones();
//   }, []);

//   // ── Loading ────────────────────────────────────────────────────────────────
//   if (!milestonesData && !error) {
//     return (
//       <div className="main-container">
//         <button className="mobile-toggle d-none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3">Loading Milestones...</p>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Error ──────────────────────────────────────────────────────────────────
//   if (error) {
//     return (
//       <div className="main-container">
//         <button className="mobile-toggle d-none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <p style={{ color: 'red' }}>{error}</p>
//               <button onClick={() => navigate('/')} className="btn btn-primary mt-3">Back to Login</button>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Extract data ───────────────────────────────────────────────────────────
//   const currentHours = milestonesData.total_video_call_hours || 0;
//   const packages = milestonesData.packages || [];
//   const activePackageId = milestonesData.active_package_id;
//   const unlockInfo = milestonesData.unlock_info;

//   const currentPackage = packages.find(pkg => pkg.id === activePackageId) || packages[0];
//   const nextPackage = unlockInfo ? {
//     id: unlockInfo.next_package_id,
//     name: unlockInfo.next_package_name,
//     rate: unlockInfo.next_rate_per_minute,
//   } : null;

//   const nextPackageFull = nextPackage
//     ? packages.find(pkg => pkg.id === nextPackage.id)
//     : null;

//   const levelIcons = [silverIcon, goldIcon, diamondIcon];

//   const levelColors = [
//     { bgColor: "#e9527a", textColor: "white", lockColor: "#e9527a" },
//     { bgColor: "#fff9e6", textColor: "#333", lockColor: "#ff9800" },
//     { bgColor: "#e6f7ff", textColor: "#333", lockColor: "#03a9f4" },
//   ];

//   const levels = packages.map((pkg, index) => {
//     const isActive = pkg.id === activePackageId;
//     const colors = levelColors[index] || levelColors[levelColors.length - 1];
//     return {
//       id: pkg.id,
//       name: pkg.package_name,
//       minHours: pkg.min_hours,
//       maxHours: pkg.max_hours,
//       milestone: `${pkg.min_hours} - ${pkg.max_hours} Hours`,
//       earnings: `${pkg.rate_per_minute} Bath/min`,
//       status: isActive ? "Active" : (pkg.id > activePackageId ? "Locked" : "Completed"),
//       icon: levelIcons[index] || levelIcons[levelIcons.length - 1],
//       bgColor: isActive ? "#e9527a" : colors.bgColor,
//       textColor: isActive ? "white" : colors.textColor,
//       statusBg: isActive ? "rgba(255,255,255,0.2)" : "transparent",
//       lockedText: pkg.id > activePackageId ? "(Unlock soon)" : null,
//       lockColor: colors.lockColor,
//     };
//   });

//   const currentLevel = levels.find(l => l.id === activePackageId) || levels[0];

//   let progressPercent = 100;
//   let remainingHours = 0;
//   let progressMin = currentPackage.min_hours;
//   let progressMax = currentPackage.max_hours;

//   if (unlockInfo && nextPackageFull) {
//     remainingHours = parseFloat(unlockInfo.remaining_hours) || 0;
//     progressMin = currentPackage.min_hours;
//     progressMax = nextPackageFull.min_hours;
//     const totalRange = progressMax - progressMin;
//     const completed = currentHours - progressMin;
//     progressPercent = totalRange > 0 ? Math.min((completed / totalRange) * 100, 100) : 100;
//   } else {
//     remainingHours = 0;
//     progressPercent = 100;
//   }

//   // ── Status Badge Helper ────────────────────────────────────────────────────
//   const StatusBadge = ({ level, isMobile = false }) => {
//     if (level.status === "Active") {
//       return (
//         <div className="d-flex align-items-center gap-2">
//           <div
//             style={{
//               backgroundColor: isMobile ? "rgba(255,255,255,0.3)" : "white",
//               borderRadius: "6px",
//               padding: "2px 6px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Check size={13} style={{ color: isMobile ? "white" : "#e9527a" }} />
//           </div>
//           <span className="fw-bold" style={{ fontSize: isMobile ? "13px" : "14px" }}>Active</span>
//         </div>
//       );
//     } else if (level.status === "Completed") {
//       return (
//         <div className="d-flex align-items-center gap-2">
//           <Check size={15} style={{ color: "#28a745" }} />
//           <span className="fw-bold" style={{ fontSize: "13px" }}>Completed</span>
//         </div>
//       );
//     } else {
//       return (
//         <div className="d-flex align-items-center gap-2">
//           <Lock size={15} style={{ color: level.lockColor }} />
//           <div className="d-flex flex-column">
//             <span className="fw-bold" style={{ fontSize: "13px" }}>Locked</span>
//             {level.lockedText && (
//               <span style={{ fontSize: "10px", opacity: 0.75 }}>{level.lockedText}</span>
//             )}
//           </div>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-3 p-md-5">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="container-fluid p-0"
//           >
//             {/* ── Page Header ── */}
//             <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
//               <h2 className="h5 h4-md fw-bold text-dark mb-0 text-center text-sm-start">
//                 My Creator Level:{" "}
//                 <span style={{ color: "#e9527a" }}>
//                   {currentLevel.name} ({currentLevel.status})
//                 </span>
//               </h2>
//             </div>

//             {/* ── Progress Card ── */}
//             <motion.div
//               initial={{ scale: 0.98, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.1 }}
//               className="milestone-card"
//             >
//               <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
//                 <p className="h6 fw-bold text-dark m-0">
//                   {nextPackage ? (
//                     <>
//                       Progress to{" "}
//                       <span style={{ color: "#e9527a" }}>{nextPackage.name}</span>{" "}
//                       (Next Level)
//                     </>
//                   ) : (
//                     <span style={{ color: "#e9527a" }}>
//                       🎉 You have reached the highest level!
//                     </span>
//                   )}
//                 </p>
//               </div>

//               <div className="d-flex justify-content-between small fw-bold text-secondary mb-2 px-1">
//                 <span>{progressMin} hrs</span>
//                 <span>{progressMax} hrs</span>
//               </div>

//               <div className="custom-progress-container mb-3">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${Math.min(progressPercent, 100)}%` }}
//                   transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//                   className="custom-progress-bar d-flex align-items-center justify-content-end pe-1"
//                 >
//                   <div style={{ width: "4px", height: "24px", backgroundColor: "rgba(255,255,255,0.3)", borderRadius: "2px", marginRight: "4px" }} />
//                 </motion.div>
//               </div>

//               <div className="text-center mb-3">
//                 <span className="fw-bold fs-6 fs-md-5" style={{ color: "#e9527a" }}>
//                   {currentHours} hrs
//                 </span>
//                 <span className="text-secondary small ms-1">(Current)</span>
//               </div>

//               {nextPackage ? (
//                 <p className="text-center text-dark m-0 small small-md">
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>{remainingHours} hours</span>{" "}
//                   remaining to unlock{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>{nextPackage.name}</span>{" "}
//                   and earn{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>{nextPackage.rate} Bath/min</span>
//                 </p>
//               ) : (
//                 <p className="text-center text-dark m-0 small small-md">
//                   You are at the{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>highest level</span>. Keep streaming!
//                 </p>
//               )}
//             </motion.div>

//             {/* ── Levels & Rewards ── */}
//             <h3 className="h5 fw-bold text-dark mb-3 mt-4">Levels & Rewards</h3>

//             <div className="bg-white rounded-4 shadow-sm border overflow-hidden">

//               {/* ════════════════════════════════════════════
//                   DESKTOP & TABLET (lg and above) — UNCHANGED
//                   ════════════════════════════════════════════ */}
//               <div className="d-none d-lg-block">
//                 {/* Desktop Header */}
//                 <div className="row g-0 px-4 py-3 bg-light border-bottom small fw-bold text-secondary text-uppercase">
//                   <div className="col-lg-3">Level Name</div>
//                   <div className="col-lg-3">Milestones (Hours)</div>
//                   <div className="col-lg-3">Earnings (Rate)</div>
//                   <div className="col-lg-3">Status</div>
//                 </div>

//                 <div className="p-4">
//                   {levels.map((level, index) => (
//                     <motion.div
//                       key={level.id}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3 + index * 0.1 }}
//                       className={`level-row d-flex align-items-center gap-3 shadow-sm mb-3 mt-2 ${level.status === "Active" ? "active-level" : ""}`}
//                       style={{
//                         backgroundColor: level.bgColor,
//                         color: level.textColor,
//                         borderRadius: "12px",
//                         padding: "25px",
//                       }}
//                     >
//                       {/* Level Name */}
//                       <div className="d-flex align-items-center gap-3 flex-grow-1 col-lg-3">
//                         <div className="level-icon-wrapper flex-shrink-0">
//                           <img src={level.icon} alt={level.name} className="mt-0 responsive-images" />
//                         </div>
//                         <span className="fw-bold fs-6">{level.name}</span>
//                       </div>
//                       {/* Milestone */}
//                       <div className="col-lg-3 fw-medium">{level.milestone}</div>
//                       {/* Earnings */}
//                       <div className="col-lg-3 fw-medium">{level.earnings}</div>
//                       {/* Status */}
//                       <div className="col-lg-3">
//                         <div className="status-pill d-inline-flex" style={{ padding: "4px 12px", borderRadius: "20px", width: "100%" }}>
//                           <StatusBadge level={level} isMobile={false} />
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* ════════════════════════════════════════════
//                   MOBILE & TABLET SMALL (below lg) — NEW DESIGN
//                   Card layout matching your sketch:
//                   [Icon  LevelName         Status Badge]
//                   [0-40 Hours        3.00 Bath/min     ]
//                   ════════════════════════════════════════════ */}
//               <div className="d-lg-none p-3">
//                 {levels.map((level, index) => (
//                   <motion.div
//                     key={level.id}
//                     initial={{ opacity: 0, y: 15 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 + index * 0.1 }}
//                     style={{
//                       backgroundColor: level.bgColor,
//                       color: level.textColor,
//                       borderRadius: "16px",
//                       padding: "16px",
//                       marginBottom: "12px",
//                       boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//                     }}
//                   >
//                     {/* ── Row 1: Icon + Name + Status ── */}
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                         marginBottom: "12px",
//                       }}
//                     >
//                       {/* Left: Icon + Name */}
//                       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                         <img
//                           src={level.icon}
//                           alt={level.name}
//                           style={{ width: "40px", height: "40px", objectFit: "contain" }}
//                         />
//                         <span style={{ fontWeight: "700", fontSize: "15px" }}>{level.name}</span>
//                       </div>

//                       {/* Right: Status Badge */}
//                       <div
//                         style={{
//                           backgroundColor:
//                             level.status === "Active"
//                               ? "rgba(255,255,255,0.25)"
//                               : "rgba(0,0,0,0.06)",
//                           borderRadius: "20px",
//                           padding: "5px 12px",
//                           display: "flex",
//                           alignItems: "center",
//                         }}
//                       >
//                         <StatusBadge level={level} isMobile={level.status === "Active"} />
//                       </div>
//                     </div>

//                     {/* ── Divider ── */}
//                     <div
//                       style={{
//                         height: "1px",
//                         backgroundColor:
//                           level.status === "Active"
//                             ? "rgba(255,255,255,0.3)"
//                             : "rgba(0,0,0,0.08)",
//                         marginBottom: "12px",
//                       }}
//                     />

//                     {/* ── Row 2: Hours Range + Earnings ── */}
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                       }}
//                     >
//                       {/* Hours */}
//                       <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
//                         <span
//                           style={{
//                             fontSize: "10px",
//                             fontWeight: "600",
//                             opacity: 0.7,
//                             textTransform: "uppercase",
//                             letterSpacing: "0.5px",
//                           }}
//                         >
//                           Milestones
//                         </span>
//                         <span style={{ fontWeight: "700", fontSize: "14px" }}>
//                           {level.milestone}
//                         </span>
//                       </div>

//                       {/* Earnings */}
//                       <div
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           gap: "2px",
//                           alignItems: "flex-end",
//                         }}
//                       >
//                         <span
//                           style={{
//                             fontSize: "10px",
//                             fontWeight: "600",
//                             opacity: 0.7,
//                             textTransform: "uppercase",
//                             letterSpacing: "0.5px",
//                           }}
//                         >
//                           Earnings
//                         </span>
//                         <span style={{ fontWeight: "700", fontSize: "14px" }}>
//                           {level.earnings}
//                         </span>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// }


















// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import axios from 'axios';
// import { Check, Lock, Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Milestone.css";

// import silverIcon from "../assets/Thai-Silver.png";
// import goldIcon from "../assets/Thai-Gold.png";
// import diamondIcon from "../assets/Thai-Dimond.png";

// export default function Milestone() {
//   const [milestonesData, setMilestonesData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${import.meta.env.VITE_SERVER_URL}/logout`, {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${localStorage.getItem("token")}`
//         },
//         withCredentials: true
//       });
//     } catch (err) {
//       console.error('Logout error:', err);
//     } finally {
//       navigate('/');
//       localStorage.removeItem("token");
//     }
//   };

//   useEffect(() => {
//     const fetchMilestones = async () => {
//       try {
//         const response = await axios.get(
//           "https://sagarxo.app/web-api/customer/creator-milestones",
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `${localStorage.getItem("token")}`
//             },
//             withCredentials: true
//           }
//         );
//         const data = response.data;
//         if (data.success) {
//           setMilestonesData(data.data);
//         } else {
//           setError(data.message || 'Failed to fetch milestones');
//         }
//       } catch (err) {
//         setError(err.response?.data?.message || 'An error occurred while fetching milestones');
//       }
//     };
//     fetchMilestones();
//   }, []);

//   // ── Loading ────────────────────────────────────────────────────────────────
//   if (!milestonesData && !error) {
//     return (
//       <div className="main-container">
//         <button className="mobile-toggle d-none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <div className="spinner-border text-primary" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3">Loading Milestones...</p>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Error ──────────────────────────────────────────────────────────────────
//   if (error) {
//     return (
//       <div className="main-container">
//         <button className="mobile-toggle d-none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="p-4 p-md-5">
//             <div className="text-center py-5">
//               <p style={{ color: 'red' }}>{error}</p>
//               <button onClick={() => navigate('/')} className="btn btn-primary mt-3">Back to Login</button>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // ── Extract data ───────────────────────────────────────────────────────────
//   const currentHours = milestonesData.total_video_call_hours || 0;
//   const packages = milestonesData.packages || [];
//   const activePackageId = milestonesData.active_package_id;
//   const unlockInfo = milestonesData.unlock_info;

//   const currentPackage = packages.find(pkg => pkg.id === activePackageId) || packages[0];
//   const nextPackage = unlockInfo ? {
//     id: unlockInfo.next_package_id,
//     name: unlockInfo.next_package_name,
//     rate: unlockInfo.next_rate_per_minute,
//   } : null;

//   const nextPackageFull = nextPackage
//     ? packages.find(pkg => pkg.id === nextPackage.id)
//     : null;

//   const levelIcons = [silverIcon, goldIcon, diamondIcon];

//   const levelColors = [
//     { bgColor: "#e9527a", textColor: "white", lockColor: "#e9527a" },
//     { bgColor: "#fff9e6", textColor: "#333", lockColor: "#ff9800" },
//     { bgColor: "#e6f7ff", textColor: "#333", lockColor: "#03a9f4" },
//   ];

//   const levels = packages.map((pkg, index) => {
//     const isActive = pkg.id === activePackageId;
//     const colors = levelColors[index] || levelColors[levelColors.length - 1];
//     return {
//       id: pkg.id,
//       name: pkg.package_name,
//       minHours: pkg.min_hours,
//       maxHours: pkg.max_hours,
//       milestone: `${pkg.min_hours} - ${pkg.max_hours} Hours`,
//       earnings: `${pkg.rate_per_minute} Bath/min`,
//       status: isActive ? "Active" : (pkg.id > activePackageId ? "Locked" : "Completed"),
//       icon: levelIcons[index] || levelIcons[levelIcons.length - 1],
//       bgColor: isActive ? "#e9527a" : colors.bgColor,
//       textColor: isActive ? "white" : colors.textColor,
//       lockedText: pkg.id > activePackageId ? "(Unlock soon)" : null,
//       lockColor: colors.lockColor,
//     };
//   });

//   const currentLevel = levels.find(l => l.id === activePackageId) || levels[0];

//   let progressPercent = 100;
//   let remainingHours = 0;
//   let progressMin = currentPackage.min_hours;
//   let progressMax = currentPackage.max_hours;

//   if (unlockInfo && nextPackageFull) {
//     remainingHours = parseFloat(unlockInfo.remaining_hours) || 0;
//     progressMin = currentPackage.min_hours;
//     progressMax = nextPackageFull.min_hours;
//     const totalRange = progressMax - progressMin;
//     const completed = currentHours - progressMin;
//     progressPercent = totalRange > 0 ? Math.min((completed / totalRange) * 100, 100) : 100;
//   } else {
//     remainingHours = 0;
//     progressPercent = 100;
//   }

//   // ── Status Badge ───────────────────────────────────────────────────────────
//   const StatusBadge = ({ level, onActiveCard = false }) => {
//     if (level.status === "Active") {
//       return (
//         <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//           <div style={{
//             backgroundColor: onActiveCard ? "rgba(255,255,255,0.3)" : "white",
//             borderRadius: "100%",
//             padding: "5px 5px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}>
//             <Check size={13} style={{ color: onActiveCard ? "white" : "#e9527a" }} />
//           </div>
//           <span style={{ fontWeight: "700", fontSize: "14px" }}>Active</span>
//         </div>
//       );
//     } else if (level.status === "Completed") {
//       return (
//         <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//           <Check size={15} style={{ color: "#28a745" }} />
//           <span style={{ fontWeight: "700", fontSize: "13px" }}>Completed</span>
//         </div>
//       );
//     } else {
//       return (
//         <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//           <Lock size={15} style={{ color: level.lockColor }} />
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <span style={{ fontWeight: "700", fontSize: "13px" }}>Locked</span>
//             {level.lockedText && (
//               <span style={{ fontSize: "10px", opacity: 0.75 }}>{level.lockedText}</span>
//             )}
//           </div>
//         </div>
//       );
//     }
//   };

//   // ── Active level dotted border style (shared across ALL screen sizes) ──────
//   const activeDottedBorder = {
//     outline: "2.5px dashed rgba(255,255,255,0.7)",
//     outlineOffset: "-6px",
//   };

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-3 p-md-5">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="container-fluid p-0"
//           >
//             {/* ── Page Header ── */}
//             <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
//               <h2 className="h5 h4-md fw-bold text-dark mb-0 text-center text-sm-start">
//                 My Creator Level:{" "}
//                 <span style={{ color: "#e9527a" }}>
//                   {currentLevel.name} ({currentLevel.status})
//                 </span>
//               </h2>
//             </div>

//             {/* ── Progress Card ── */}
//             <motion.div
//               initial={{ scale: 0.98, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.1 }}
//               className="milestone-card"
//             >
//               <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
//                 <p className="h6 fw-bold text-dark m-0">
//                   {nextPackage ? (
//                     <>
//                       Progress to{" "}
//                       <span style={{ color: "#e9527a" }}>{nextPackage.name}</span>{" "}
//                       (Next Level)
//                     </>
//                   ) : (
//                     <span style={{ color: "#e9527a" }}>
//                       🎉 You have reached the highest level!
//                     </span>
//                   )}
//                 </p>
//               </div>

//               <div className="d-flex justify-content-between small fw-bold text-secondary mb-2 px-1">
//                 <span>{progressMin} hrs</span>
//                 <span>{progressMax} hrs</span>
//               </div>

//               <div className="custom-progress-container mb-3">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${Math.min(progressPercent, 100)}%` }}
//                   transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
//                   className="custom-progress-bar d-flex align-items-center justify-content-end pe-1"
//                 >
//                   <div style={{
//                     width: "4px", height: "24px",
//                     backgroundColor: "rgba(255,255,255,0.3)",
//                     borderRadius: "2px", marginRight: "4px"
//                   }} />
//                 </motion.div>
//               </div>

//               <div className="text-center mb-3">
//                 <span className="fw-bold fs-6 fs-md-5" style={{ color: "#e9527a" }}>
//                   {currentHours} hrs
//                 </span>
//                 <span className="text-secondary small ms-1">(Current)</span>
//               </div>

//               {nextPackage ? (
//                 <p className="text-center text-dark m-0 small">
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>{remainingHours} hours</span>{" "}
//                   remaining to unlock{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>{nextPackage.name}</span>{" "}
//                   and earn{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>{nextPackage.rate} Bath/min</span>
//                 </p>
//               ) : (
//                 <p className="text-center text-dark m-0 small">
//                   You are at the{" "}
//                   <span className="fw-bold" style={{ color: "#e9527a" }}>highest level</span>. Keep streaming!
//                 </p>
//               )}
//             </motion.div>

//             {/* ── Levels & Rewards ── */}
//             <h3 className="h5 fw-bold text-dark mb-3 mt-4">Levels & Rewards</h3>

//             <div className="bg-white rounded-4 shadow-sm border overflow-hidden">

//               {/* ════════════════════════════════════
//                   DESKTOP (lg and above) — UNCHANGED
//                   ════════════════════════════════════ */}
//               <div className="d-none d-lg-block">
//                 <div className="row g-0 px-4 py-3 bg-light border-bottom small fw-bold text-secondary text-uppercase">
//                   <div className="col-lg-3">Level Name</div>
//                   <div className="col-lg-3">Milestones (Hours)</div>
//                   <div className="col-lg-3">Earnings (Rate)</div>
//                   <div className="col-lg-3">Status</div>
//                 </div>

//                 <div className="p-4">
//                   {levels.map((level, index) => (
//                     <motion.div
//                       key={level.id}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3 + index * 0.1 }}
//                       className={`level-row d-flex align-items-center gap-3 shadow-sm mb-3 mt-2 ${level.status === "Active" ? "active-level" : ""}`}
//                       style={{
//                         backgroundColor: level.bgColor,
//                         color: level.textColor,
//                         borderRadius: "12px",
//                         padding: "25px",
//                         ...(level.status === "Active" ? activeDottedBorder : {}),
//                       }}
//                     >
//                       <div className="d-flex align-items-center gap-3 flex-grow-1 col-lg-3">
//                         <div className="level-icon-wrapper flex-shrink-0">
//                           <img src={level.icon} alt={level.name} className="mt-0 responsive-images" />
//                         </div>
//                         <span className="fw-bold fs-6">{level.name}</span>
//                       </div>
//                       <div className="col-lg-3 fw-medium">{level.milestone}</div>
//                       <div className="col-lg-3 fw-medium">{level.earnings}</div>
//                       <div className="col-lg-3">
//                         <div className="status-pill d-inline-flex" style={{ padding: "4px 12px", borderRadius: "20px", width: "100%" }}>
//                           <StatusBadge level={level} onActiveCard={false} />
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* ════════════════════════════════════════════
//                   TABLET & MOBILE (below lg) — NEW CARD DESIGN
//                   with dotted border on Active card
//                   ════════════════════════════════════════════ */}
//               <div className="d-lg-none p-3">
//                 {levels.map((level, index) => (
//                   <motion.div
//                     key={level.id}
//                     initial={{ opacity: 0, y: 15 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 + index * 0.1 }}
//                     style={{
//                       backgroundColor: level.bgColor,
//                       color: level.textColor,
//                       borderRadius: "16px",
//                       padding: "16px",
//                       marginBottom: "12px",
//                       boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//                       // ★ Same dotted border as desktop Active card ★
//                       ...(level.status === "Active" ? activeDottedBorder : {}),
//                     }}
//                   >
//                     {/* ── Row 1: Icon + Name + Status ── */}
//                     <div style={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "space-between",
//                       marginBottom: "12px",
//                     }}>
//                       {/* Left: Icon + Name */}
//                       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                         <img
//                           src={level.icon}
//                           alt={level.name}
//                           style={{ width: "40px", height: "40px", objectFit: "contain" }}
//                         />
//                         <span style={{ fontWeight: "700", fontSize: "15px" }}>{level.name}</span>
//                       </div>

//                       {/* Right: Status Badge */}
//                       <div style={{
//                         backgroundColor:
//                           level.status === "Active"
//                             ? "rgba(255,255,255,0.25)"
//                             : "rgba(0,0,0,0.06)",
//                         borderRadius: "20px",
//                         padding: "5px 12px",
//                         display: "flex",
//                         alignItems: "center",
//                       }}>
//                         <StatusBadge level={level} onActiveCard={level.status === "Active"} />
//                       </div>
//                     </div>

//                     {/* ── Divider ── */}
//                     <div style={{
//                       height: "1px",
//                       backgroundColor:
//                         level.status === "Active"
//                           ? "rgba(255,255,255,0.3)"
//                           : "rgba(0,0,0,0.08)",
//                       marginBottom: "12px",
//                     }} />

//                     {/* ── Row 2: Hours + Earnings ── */}
//                     <div style={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "space-between",
//                     }}>
//                       {/* Hours */}
//                       <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
//                         <span style={{
//                           fontSize: "10px", fontWeight: "600",
//                           opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.5px"
//                         }}>
//                           Milestones
//                         </span>
//                         <span style={{ fontWeight: "700", fontSize: "14px" }}>
//                           {level.milestone}
//                         </span>
//                       </div>

//                       {/* Earnings */}
//                       <div style={{
//                         display: "flex", flexDirection: "column",
//                         gap: "2px", alignItems: "flex-end"
//                       }}>
//                         <span style={{
//                           fontSize: "10px", fontWeight: "600",
//                           opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.5px"
//                         }}>
//                           Earnings
//                         </span>
//                         <span style={{ fontWeight: "700", fontSize: "14px" }}>
//                           {level.earnings}
//                         </span>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// }






















import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Check, Lock, Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../css/Milestone.css";

import silverIcon from "../assets/Thai-Silver.png";
import goldIcon from "../assets/Thai-Gold.png";
import diamondIcon from "../assets/Thai-Dimond.png";

// ===== THAI TRANSLATION MAP FOR PACKAGE NAMES =====
const packageNameThaiMap = {
  "Thai Silver": "ไทย เงิน",
  "Thai Gold": "ไทย ทอง",
  "Thai Diamond": "ไทย เพชร",
  "Thai Dimond": "ไทย เพชร", // In case API has typo
  "Silver": "เงิน",
  "Gold": "ทอง",
  "Diamond": "เพชร",
  "Basic": "พื้นฐาน",
  "Standard": "มาตรฐาน",
  "Premium": "พรีเมียม",
  "VIP": "วีไอพี",
  "Platinum": "แพลตินัม",
  "Bronze": "บรอนซ์",
  "Free": "ฟรี",
  "Trial": "ทดลองใช้",
  "Enterprise": "องค์กร",
  "Pro": "มืออาชีพ",
};

// Function to translate package name
const translatePackageName = (name, language) => {
  if (!name || language !== "th") return name;
  return packageNameThaiMap[name] || name;
};

export default function Milestone() {
  const { t, i18n } = useTranslation(); // Add i18n to get current language
  const [milestonesData, setMilestonesData] = useState(null);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/logout`, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem("token")}`
        },
        withCredentials: true
      });
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      navigate('/');
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    const fetchMilestones = async () => {
      try {
        const response = await axios.get(
          "https://sagarxo.app/web-api/customer/creator-milestones",
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem("token")}`
            },
            withCredentials: true
          }
        );
        const data = response.data;
        if (data.success) {
          setMilestonesData(data.data);
        } else {
          setError(data.message || 'Failed to fetch milestones');
        }
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred while fetching milestones');
      }
    };
    fetchMilestones();
  }, []);

  // ── Loading ────────────────────────────────────────────────────────────────
  if (!milestonesData && !error) {
    return (
      <div className="main-container">
        <button className="mobile-toggle d-none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
        {isSidebarOpen && <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />}
        <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
        <div className="main-wrapper">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <main className="p-4 p-md-5">
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">{t("milestone.loading")}</span>
              </div>
              <p className="mt-3">{t("milestone.loading")}</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  // ── Error ──────────────────────────────────────────────────────────────────
  if (error) {
    return (
      <div className="main-container">
        <button className="mobile-toggle d-none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
        {isSidebarOpen && <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />}
        <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
        <div className="main-wrapper">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <main className="p-4 p-md-5">
            <div className="text-center py-5">
              <p style={{ color: 'red' }}>{error}</p>
              <button onClick={() => navigate('/')} className="btn btn-primary mt-3">{t("milestone.errorBackToLogin")}</button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  // ── Extract data ───────────────────────────────────────────────────────────
  const currentHours = milestonesData.total_video_call_hours || 0;
  const packages = milestonesData.packages || [];
  const activePackageId = milestonesData.active_package_id;
  const unlockInfo = milestonesData.unlock_info;

  const currentPackage = packages.find(pkg => pkg.id === activePackageId) || packages[0];
  
  // Translate current package name
  const currentPackageNameThai = translatePackageName(currentPackage.package_name, i18n.language);
  
  const nextPackage = unlockInfo ? {
    id: unlockInfo.next_package_id,
    name: translatePackageName(unlockInfo.next_package_name, i18n.language), // Translate next package name
    rate: unlockInfo.next_rate_per_minute,
  } : null;

  const nextPackageFull = nextPackage
    ? packages.find(pkg => pkg.id === nextPackage.id)
    : null;

  const levelIcons = [silverIcon, goldIcon, diamondIcon];

  const levelColors = [
    { bgColor: "#e9527a", textColor: "white", lockColor: "#e9527a" },
    { bgColor: "#fff9e6", textColor: "#333", lockColor: "#ff9800" },
    { bgColor: "#e6f7ff", textColor: "#333", lockColor: "#03a9f4" },
  ];

  const levels = packages.map((pkg, index) => {
    const isActive = pkg.id === activePackageId;
    const colors = levelColors[index] || levelColors[levelColors.length - 1];
    
    // Translate package name to Thai
    const translatedName = translatePackageName(pkg.package_name, i18n.language);
    
    return {
      id: pkg.id,
      name: translatedName, // Use translated name
      originalName: pkg.package_name, // Keep original for reference
      minHours: pkg.min_hours,
      maxHours: pkg.max_hours,
      milestone: `${pkg.min_hours} - ${pkg.max_hours} ${t("milestone.hrs")}`,
      earnings: `${pkg.rate_per_minute} ${t("thb")}/min`,
      status: isActive ? t("milestone.active") : (pkg.id > activePackageId ? t("milestone.locked") : t("milestone.completed")),
      icon: levelIcons[index] || levelIcons[levelIcons.length - 1],
      bgColor: isActive ? "#e9527a" : colors.bgColor,
      textColor: isActive ? "white" : colors.textColor,
      lockedText: pkg.id > activePackageId ? t("milestone.unlockSoon") : null,
      lockColor: colors.lockColor,
      rawStatus: isActive ? "Active" : (pkg.id > activePackageId ? "Locked" : "Completed"),
    };
  });

  const currentLevel = levels.find(l => l.id === activePackageId) || levels[0];

  let progressPercent = 100;
  let remainingHours = 0;
  let progressMin = currentPackage.min_hours;
  let progressMax = currentPackage.max_hours;

  if (unlockInfo && nextPackageFull) {
    remainingHours = parseFloat(unlockInfo.remaining_hours) || 0;
    progressMin = currentPackage.min_hours;
    progressMax = nextPackageFull.min_hours;
    const totalRange = progressMax - progressMin;
    const completed = currentHours - progressMin;
    progressPercent = totalRange > 0 ? Math.min((completed / totalRange) * 100, 100) : 100;
  } else {
    remainingHours = 0;
    progressPercent = 100;
  }

  // ── Status Badge ─────────────────────────────
  const StatusBadge = ({ level, onActiveCard = false }) => {
    if (level.rawStatus === "Active") {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{
            backgroundColor: onActiveCard ? "rgba(255,255,255,0.3)" : "white",
            borderRadius: "100%",
            padding: "5px 5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Check size={13} style={{ color: onActiveCard ? "white" : "#e9527a" }} />
          </div>
          <span style={{ fontWeight: "700", fontSize: "14px" }}>{t("milestone.active")}</span>
        </div>
      );
    } else if (level.rawStatus === "Completed") {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Check size={15} style={{ color: "#28a745" }} />
          <span style={{ fontWeight: "700", fontSize: "13px" }}>{t("milestone.completed")}</span>
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Lock size={15} style={{ color: level.lockColor }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "700", fontSize: "13px" }}>{t("milestone.locked")}</span>
            {level.lockedText && (
              <span style={{ fontSize: "10px", opacity: 0.75 }}>{level.lockedText}</span>
            )}
          </div>
        </div>
      );
    }
  };

  // ── Active level dotted border style ──────────────────────────────────────
  const activeDottedBorder = {
    outline: "2.5px dashed rgba(255,255,255,0.7)",
    outlineOffset: "-6px",
  };

  return (
    <div className="main-container">
      <button
        className="mobile-toggle d-none"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {isSidebarOpen && (
        <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
      )}

      <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

      <div className="main-wrapper">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="p-3 p-md-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container-fluid p-0"
          >
            {/* ── Page Header ── */}
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
              <h2 className="h5 h4-md fw-bold text-dark mb-0 text-center text-sm-start">
                {t("milestone.myCreatorLevel")}{" "}
                <span style={{ color: "#e9527a" }}>
                  {currentLevel.name} ({currentLevel.status})
                </span>
              </h2>
            </div>

            {/* ── Progress Card ── */}
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="milestone-card"
            >
              <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <p className="h6 fw-bold text-dark m-0">
                  {nextPackage ? (
                    <>
                      {t("milestone.progressTo")}{" "}
                      <span style={{ color: "#e9527a" }}>{nextPackage.name}</span>{" "}
                      {t("milestone.nextLevel")}
                    </>
                  ) : (
                    <span style={{ color: "#e9527a" }}>
                      {t("milestone.highestLevel")}
                    </span>
                  )}
                </p>
              </div>

              <div className="d-flex justify-content-between small fw-bold text-secondary mb-2 px-1">
                <span>{progressMin} {t("milestone.hrs")}</span>
                <span>{progressMax} {t("milestone.hrs")}</span>
              </div>

              <div className="custom-progress-container mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progressPercent, 100)}%` }}
                  transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                  className="custom-progress-bar d-flex align-items-center justify-content-end pe-1"
                >
                  <div style={{
                    width: "4px", height: "24px",
                    backgroundColor: "rgba(255,255,255,0.3)",
                    borderRadius: "2px", marginRight: "4px"
                  }} />
                </motion.div>
              </div>

              <div className="text-center mb-3">
                <span className="fw-bold fs-6 fs-md-5" style={{ color: "#e9527a" }}>
                  {currentHours} {t("milestone.hrs")}
                </span>
                <span className="text-secondary small ms-1">{t("milestone.current")}</span>
              </div>

              {nextPackage ? (
                <p className="text-center text-dark m-0 small">
                  <span className="fw-bold" style={{ color: "#e9527a" }}>{remainingHours} {t("milestone.hoursRemaining")}</span>{" "}
                  {t("milestone.hoursRemaining")}
                  <span className="fw-bold" style={{ color: "#e9527a" }}> {nextPackage.name}</span>{" "}
                  {t("milestone.andEarn")}{" "}
                  <span className="fw-bold" style={{ color: "#e9527a" }}>{nextPackage.rate} {t("thb")}/min</span>
                </p>
              ) : (
                <p className="text-center text-dark m-0 small">
                  {t("milestone.keepStreaming")}
                </p>
              )}
            </motion.div>

            {/* ── Levels & Rewards ── */}
            <h3 className="h5 fw-bold text-dark mb-3 mt-4">{t("milestone.levelsAndRewards")}</h3>

            <div className="bg-white rounded-4 shadow-sm border overflow-hidden">

              {/* DESKTOP TABLE HEADER */}
              <div className="d-none d-lg-block">
                <div className="row g-0 px-4 py-3 bg-light border-bottom small fw-bold text-secondary text-uppercase">
                  <div className="col-lg-3">{t("milestone.levelName")}</div>
                  <div className="col-lg-3">{t("milestone.milestonesHours")}</div>
                  <div className="col-lg-3">{t("milestone.earningsRate")}</div>
                  <div className="col-lg-3">{t("milestone.status")}</div>
                </div>

                <div className="p-4">
                  {levels.map((level, index) => (
                    <motion.div
                      key={level.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`level-row d-flex align-items-center gap-3 shadow-sm mb-3 mt-2 ${level.rawStatus === "Active" ? "active-level" : ""}`}
                      style={{
                        backgroundColor: level.bgColor,
                        color: level.textColor,
                        borderRadius: "12px",
                        padding: "25px",
                        ...(level.rawStatus === "Active" ? activeDottedBorder : {}),
                      }}
                    >
                      <div className="d-flex align-items-center gap-3 flex-grow-1 col-lg-3">
                        <div className="level-icon-wrapper flex-shrink-0">
                          <img src={level.icon} alt={level.name} className="mt-0 responsive-images" />
                        </div>
                        <span className="fw-bold fs-6">{level.name}</span>
                      </div>
                      <div className="col-lg-3 fw-medium">{level.milestone}</div>
                      <div className="col-lg-3 fw-medium">{level.earnings}</div>
                      <div className="col-lg-3">
                        <div className="status-pill d-inline-flex" style={{ padding: "4px 12px", borderRadius: "20px", width: "100%" }}>
                          <StatusBadge level={level} onActiveCard={false} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* MOBILE / TABLET CARD VIEW */}
              <div className="d-lg-none p-3">
                {levels.map((level, index) => (
                  <motion.div
                    key={level.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    style={{
                      backgroundColor: level.bgColor,
                      color: level.textColor,
                      borderRadius: "16px",
                      padding: "16px",
                      marginBottom: "12px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      ...(level.rawStatus === "Active" ? activeDottedBorder : {}),
                    }}
                  >
                    {/* Row 1: Icon + Name + Status */}
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "12px",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img
                          src={level.icon}
                          alt={level.name}
                          style={{ width: "40px", height: "40px", objectFit: "contain" }}
                        />
                        <span style={{ fontWeight: "700", fontSize: "15px" }}>{level.name}</span>
                      </div>
                      <div style={{
                        backgroundColor: level.rawStatus === "Active"
                          ? "rgba(255,255,255,0.25)"
                          : "rgba(0,0,0,0.06)",
                        borderRadius: "20px",
                        padding: "5px 12px",
                        display: "flex",
                        alignItems: "center",
                      }}>
                        <StatusBadge level={level} onActiveCard={level.rawStatus === "Active"} />
                      </div>
                    </div>

                    <div style={{
                      height: "1px",
                      backgroundColor: level.rawStatus === "Active"
                        ? "rgba(255,255,255,0.3)"
                        : "rgba(0,0,0,0.08)",
                      marginBottom: "12px",
                    }} />

                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{
                          fontSize: "10px", fontWeight: "600",
                          opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.5px"
                        }}>
                          {t("milestone.milestoneLabel")}
                        </span>
                        <span style={{ fontWeight: "700", fontSize: "14px" }}>
                          {level.milestone}
                        </span>
                      </div>
                      <div style={{
                        display: "flex", flexDirection: "column",
                        gap: "2px", alignItems: "flex-end"
                      }}>
                        <span style={{
                          fontSize: "10px", fontWeight: "600",
                          opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.5px"
                        }}>
                          {t("milestone.earningsLabel")}
                        </span>
                        <span style={{ fontWeight: "700", fontSize: "14px" }}>
                          {level.earnings}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}