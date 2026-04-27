// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/VideoCallHistory.css";
// import { Menu, X } from "lucide-react";

// const videoCallData = [
//   {
//     date: "18/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:5pm",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   },
//   {
//     date: "18/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58am",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   },
//   {
//     date: "18/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58pm",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   },
//   {
//     date: "18/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58am",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   },
//   {
//     date: "18/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58am",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   },
//   {
//     date: "18/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58am",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   },
//   {
//     date: "17/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58pm",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   },
//   {
//     date: "17/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58pm",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   },
//   {
//     date: "17/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58pm",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   },
//   {
//     date: "17/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58pm",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   },
//   {
//     date: "17/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58pm",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   },
//   {
//     date: "17/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58pm",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   },
//   {
//     date: "17/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58pm",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   },
// ];

// const VideoCallHistory = () => {
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

//         <main className="video-history-content">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="video-table-container"
//           >
//             <div className="table-responsive">
//               <table className="video-table">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Username</th>
//                     <th>Time</th>
//                     <th>Duartion</th>
//                     <th>Per-Min Rate</th>
//                     <th>Income</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {videoCallData.map((row, index) => (
//                     <tr key={index}>
//                       <td>{row.date}</td>
//                       <td>{row.username}</td>
//                       <td>{row.time}</td>
//                       <td>{row.duration}</td>
//                       <td>{row.rate}</td>
//                       <td>{row.income}</td>
//                     </tr>
//                   ))}
//                   {/* Empty rows to match the visual grid if needed */}
//                   <tr>
//                     <td>&nbsp;</td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                   </tr>
//                   <tr>
//                     <td>&nbsp;</td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default VideoCallHistory;
















// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/VideoCallHistory.css";
// import { Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const VideoCallHistory = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [videoCallData, setVideoCallData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchVideoCallHistory();
//   }, []);

//   const fetchVideoCallHistory = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("Token from localStorage:", token);
      
//       if (!token) {
//         console.log("No token found, redirecting to login");
//         setError("Please login to view video call history");
//         setLoading(false);
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/video-call-history`;
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
//         console.log("Video call data received:", data.data);
        
//         // Transform API data to match your table design
//         const transformedData = data.data.map((call) => ({
//           date: call.date,
//           username: call.username,
//           time: `${call.start_time} - ${call.end_time}`,
//           duration: call.duration,
//           rate: `${parseFloat(call.rate_per_minute).toFixed(0)} ฿`,
//           income: `${parseFloat(call.income).toFixed(0)} ฿`
//         }));
        
//         console.log("Transformed data:", transformedData);
//         setVideoCallData(transformedData);
//       } else if (data.success && (!data.data || data.data.length === 0)) {
//         console.log("No video call data found");
//         setVideoCallData([]);
//       } else {
//         console.log("API returned success=false:", data.message);
//         setError(data.message || 'Failed to fetch video call history');
//       }
//     } catch (err) {
//       console.error("Error fetching video call history:", err);
//       console.error("Error response:", err.response);
      
//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         setError("Authentication failed. Please login again.");
//         localStorage.removeItem("token");
//         setTimeout(() => navigate('/'), 2000);
//       } else {
//         setError(err.response?.data?.message || 'An error occurred while fetching video call history');
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
//           <main className="video-history-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="video-table-container"
//             >
//               <div className="text-center py-5">
//                 <div className="spinner-border" role="status" style={{ color: '#e9527a' }}>
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//                 <p className="mt-3 text-muted">Loading video call history...</p>
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
//           <main className="video-history-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="video-table-container"
//             >
//               <div className="text-center py-5">
//                 <AlertCircle size={48} className="text-danger mb-3" />
//                 <p className="text-danger mb-3">{error}</p>
//                 <button 
//                   onClick={fetchVideoCallHistory}
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

//         <main className="video-history-content">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="video-table-container"
//           >
//             <div className="table-responsive">
//               <table className="video-table">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Username</th>
//                     <th>Time</th>
//                     <th>Duration</th>
//                     <th>Per-Min Rate</th>
//                     <th>Income</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {videoCallData.length === 0 ? (
//                     <tr>
//                       <td colSpan="6" className="text-center py-5">
//                         <p className="text-muted mb-0">No video call history found</p>
//                       </td>
//                     </tr>
//                   ) : (
//                     videoCallData.map((row, index) => (
//                       <tr key={index}>
//                         <td>{row.date}</td>
//                         <td>{row.username}</td>
//                         <td>{row.time}</td>
//                         <td>{row.duration}</td>
//                         <td>{row.rate}</td>
//                         <td>{row.income}</td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default VideoCallHistory;


























// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/VideoCallHistory.css";
// import { Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const VideoCallHistory = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [withdrawalData, setWithdrawalData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchWithdrawalHistory();
//   }, []);

//   const fetchWithdrawalHistory = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("Token from localStorage:", token);

//       if (!token) {
//         console.log("No token found, redirecting to login");
//         setError("Please login to view withdrawal history");
//         setLoading(false);
//         setTimeout(() => navigate("/"), 2000);
//         return;
//       }

//       const apiUrl = "https://sagarxo.app/web-api/customer/withdrawals";
//       console.log("Fetching from URL:", apiUrl);

//       const response = await axios.get(apiUrl, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `${token}`,
//         },
//         withCredentials: true,
//       });

//       console.log("Full API Response:", response);
//       const data = response.data;

//       if (data.loginRequired) {
//         console.log("Login required - token may be invalid");
//         setError("Session expired. Please login again.");
//         localStorage.removeItem("token");
//         setTimeout(() => navigate("/"), 2000);
//         setLoading(false);
//         return;
//       }

//       if (data.success && data.data) {
//         console.log("Withdrawal data received:", data.data);

//         // Transform API data – now including payout_details fields
//         const transformedData = data.data.map((withdrawal) => {
//           const feesPercentage = parseFloat(withdrawal.platform_fees_percentage);
//           const withdrawalAmount = parseFloat(withdrawal.withdrawal_amount);
//           const feesAmount = (withdrawalAmount * feesPercentage) / 100;
//           const netAmount = withdrawalAmount - feesAmount;

//           // Extract payout details safely
//           const payout = withdrawal.payout_details || {};
          
//           return {
//             id: withdrawal.id,
//             date: withdrawal.created_at,
//             method: withdrawal.method,
//             withdrawalAmount: `${withdrawalAmount.toFixed(2)} ฿`,
//             fees: `${feesAmount.toFixed(2)} ฿ (${feesPercentage}%)`,
//             netAmount: `${netAmount.toFixed(2)} ฿`,
//             status: withdrawal.status,
//             note: withdrawal.note,
//             bankName: payout.bank_name || "—",
//             legalName: payout.legal_name || "—",
//             accountNo: payout.bank_account_no || "—",
//             documentType: payout.document_type || "—",
//           };
//         });

//         console.log("Transformed data with payout_details:", transformedData);
//         setWithdrawalData(transformedData);
//       } else if (data.success && (!data.data || data.data.length === 0)) {
//         console.log("No withdrawal data found");
//         setWithdrawalData([]);
//       } else {
//         console.log("API returned success=false:", data.message);
//         setError(data.message || "Failed to fetch withdrawal history");
//       }
//     } catch (err) {
//       console.error("Error fetching withdrawal history:", err);
//       console.error("Error response:", err.response);

//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         setError("Authentication failed. Please login again.");
//         localStorage.removeItem("token");
//         setTimeout(() => navigate("/"), 2000);
//       } else {
//         setError(
//           err.response?.data?.message ||
//             "An error occurred while fetching withdrawal history"
//         );
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Loading State (unchanged)
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
//           <main className="video-history-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="video-table-container"
//             >
//               <div className="text-center py-5">
//                 <div
//                   className="spinner-border"
//                   role="status"
//                   style={{ color: "#e9527a" }}
//                 >
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//                 <p className="mt-3 text-muted">Loading withdrawal history...</p>
//               </div>
//             </motion.div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // Error State (unchanged)
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
//           <main className="video-history-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="video-table-container"
//             >
//               <div className="text-center py-5">
//                 <AlertCircle size={48} className="text-danger mb-3" />
//                 <p className="text-danger mb-3">{error}</p>
//                 <button
//                   onClick={fetchWithdrawalHistory}
//                   className="btn btn-primary"
//                   style={{
//                     backgroundColor: "#e9527a",
//                     border: "none",
//                     padding: "8px 24px",
//                   }}
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

//   // Main Render – Table now includes payout_details columns
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

//         <main className="video-history-content">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="video-table-container"
//           >
//             <div className="table-responsive">
//               <table className="video-table">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Method</th>
//                     <th>Withdrawal Amount</th>
//                     <th>Platform Fees</th>
//                     <th>Net Amount</th>
//                     <th>Status</th>
//                     <th>Bank Name</th>
//                     <th>Legal Name</th>
//                     <th>Account No.</th>
//                     <th>Note</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {withdrawalData.length === 0 ? (
//                     <tr>
//                       <td colSpan="10" className="text-center py-5">
//                         <p className="text-muted mb-0">
//                           No withdrawal history found
//                         </p>
//                       </td>
//                     </tr>
//                   ) : (
//                     withdrawalData.map((row, index) => (
//                       <tr key={row.id || index}>
//                         <td>{row.date}</td>
//                         <td>{row.method}</td>
//                         <td>{row.withdrawalAmount}</td>
//                         <td>{row.fees}</td>
//                         <td>{row.netAmount}</td>
//                         <td>
//                           <span
//                             className={`badge ${
//                               row.status === "DONE"
//                                 ? "bg-success"
//                                 : row.status === "PENDING"
//                                 ? "bg-warning"
//                                 : "bg-secondary"
//                             }`}
//                           >
//                             {row.status}
//                           </span>
//                         </td>
//                         <td>{row.bankName}</td>
//                         <td>{row.legalName}</td>
//                         <td>{row.accountNo}</td>
//                         <td>{row.note}</td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default VideoCallHistory;



















  // import React, { useState, useEffect } from "react";
  // import { motion } from "framer-motion";
  // import Sidebar from "./Sidebar";
  // import Header from "./Header";
  // import "../css/VideoCallHistory.css";
  // import { Menu, X, AlertCircle } from "lucide-react";
  // import axios from "axios";
  // import { useNavigate } from "react-router-dom";

  // const VideoCallHistory = () => {
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //   const [videoCallData, setVideoCallData] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     fetchVideoCallHistory();
  //   }, []);

  //   const fetchVideoCallHistory = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       console.log("Token from localStorage:", token);

  //       if (!token) {
  //         console.log("No token found, redirecting to login");
  //         setError("Please login to view video call history");
  //         setLoading(false);
  //         setTimeout(() => navigate("/"), 2000);
  //         return;
  //       }

  //       const apiUrl = "https://sagarxo.app/web-api/customer/video-call-history";
  //       console.log("Fetching from URL:", apiUrl);

  //       const response = await axios.get(apiUrl, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `${token}`,
  //         },
  //         withCredentials: true,
  //       });

  //       console.log("Full API Response:", response);
  //       const data = response.data;

  //       if (data.loginRequired) {
  //         console.log("Login required - token may be invalid");
  //         setError("Session expired. Please login again.");
  //         localStorage.removeItem("token");
  //         setTimeout(() => navigate("/"), 2000);
  //         setLoading(false);
  //         return;
  //       }

  //       if (data.success && data.data) {
  //         console.log("Video call history received:", data.data);

  //         // Transform API data to match your table structure
  //         const transformedData = data.data.map((call, index) => ({
  //           id: index, // Since API doesn't provide unique id
  //           date: call.date,
  //           packageName: call.package_name || "—",
  //           username: call.username || "—",
  //           startTime: call.start_time || "—",
  //           endTime: call.end_time || "—",
  //           duration: call.duration || "—",
  //           ratePerMinute: `${call.rate_per_minute || "0.00"} ฿/min`,
  //           income: `${call.income || "0.00"} ฿`,
  //         }));

  //         console.log("Transformed video call data:", transformedData);
  //         setVideoCallData(transformedData);
  //       } else if (data.success && (!data.data || data.data.length === 0)) {
  //         console.log("No video call history found");
  //         setVideoCallData([]);
  //       } else {
  //         console.log("API returned success=false:", data.message);
  //         setError(data.message || "Failed to fetch video call history");
  //       }
  //     } catch (err) {
  //       console.error("Error fetching video call history:", err);
  //       console.error("Error response:", err.response);

  //       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
  //         setError("Authentication failed. Please login again.");
  //         localStorage.removeItem("token");
  //         setTimeout(() => navigate("/"), 2000);
  //       } else {
  //         setError(
  //           err.response?.data?.message ||
  //             "An error occurred while fetching video call history"
  //         );
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
  //         <Sidebar show={isSidebarOpen} />
  //         <div className="main-wrapper">
  //           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
  //           <main className="video-history-content">
  //             <motion.div
  //               initial={{ opacity: 0, y: 20 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               className="video-table-container"
  //             >
  //               <div className="text-center py-5">
  //                 <div className="spinner-border" role="status" style={{ color: "#e9527a" }}>
  //                   <span className="visually-hidden">Loading...</span>
  //                 </div>
  //                 <p className="mt-3 text-muted">Loading video call history...</p>
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
  //         <Sidebar show={isSidebarOpen} />
  //         <div className="main-wrapper">
  //           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
  //           <main className="video-history-content">
  //             <motion.div
  //               initial={{ opacity: 0, y: 20 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               className="video-table-container"
  //             >
  //               <div className="text-center py-5">
  //                 <AlertCircle size={48} className="text-danger mb-3" />
  //                 <p className="text-danger mb-3">{error}</p>
  //                 <button
  //                   onClick={fetchVideoCallHistory}
  //                   className="btn btn-primary"
  //                   style={{
  //                     backgroundColor: "#e9527a",
  //                     border: "none",
  //                     padding: "8px 24px",
  //                   }}
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

  //   // Main Render - Video Call History Table
  //   return (
  //     <div className="main-container">
  //       <button
  //         className="mobile-toggle d-none"
  //         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
  //       >
  //         {isSidebarOpen ? <X /> : <Menu />}
  //       </button>

  //       {isSidebarOpen && (
  //         <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
  //       )}

  //       <Sidebar show={isSidebarOpen} />
  //       <div className="main-wrapper">
  //         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

  //         <main className="video-history-content">
  //           <motion.div
  //             initial={{ opacity: 0, y: 20 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             className="video-table-container"
  //           >
  //             <div className="table-responsive">
  //               <table className="video-table">
  //                 <thead>
  //                   <tr>
  //                     <th>Date</th>
  //                     <th>Package Name</th>
  //                     <th>Call From</th>
  //                     <th>Start Time(Th) </th>
  //                     <th>End Time (Th)</th>
  //                     <th>Duration</th>
  //                     <th>Rate/min</th>
  //                     <th>Income (฿)</th>
  //                   </tr>
  //                 </thead>
  //                 <tbody>
  //                   {videoCallData.length === 0 ? (
  //                     <tr>
  //                       <td colSpan="8" className="text-center py-5">
  //                         <p className="text-muted mb-0">
  //                           No video call history found
  //                         </p>
  //                       </td>
  //                     </tr>
  //                   ) : (
  //                     videoCallData.map((row, index) => (
  //                       <tr key={row.id || index}>
  //                         <td>{row.date}</td>
  //                         <td>{row.packageName}</td>
  //                         <td>{row.username}</td>
  //                         <td>{row.startTime}</td>
  //                         <td>{row.endTime}</td>
  //                         <td>{row.duration}</td>
  //                         <td>{row.ratePerMinute}</td>
  //                         <td className="fw-bold text-success">{row.income}</td>
  //                       </tr>
  //                     ))
  //                   )}
  //                 </tbody>
  //               </table>
  //             </div>
  //           </motion.div>
  //         </main>
  //       </div>
  //     </div>
  //   );
  // };

  // export default VideoCallHistory;



















//   import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/VideoCallHistory.css";
// import { Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const VideoCallHistory = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [videoCallData, setVideoCallData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchVideoCallHistory();
//   }, []);

//   const fetchVideoCallHistory = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("Token from localStorage:", token);

//       if (!token) {
//         console.log("No token found, redirecting to login");
//         setError("Please login to view video call history");
//         setLoading(false);
//         setTimeout(() => navigate("/"), 2000);
//         return;
//       }

//       const apiUrl = "https://sagarxo.app/web-api/customer/video-call-history";
//       console.log("Fetching from URL:", apiUrl);

//       const response = await axios.get(apiUrl, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `${token}`,
//         },
//         withCredentials: true,
//       });

//       console.log("Full API Response:", response);
//       const data = response.data;

//       if (data.loginRequired) {
//         console.log("Login required - token may be invalid");
//         setError("Session expired. Please login again.");
//         localStorage.removeItem("token");
//         setTimeout(() => navigate("/"), 2000);
//         setLoading(false);
//         return;
//       }

//       if (data.success && data.data) {
//         console.log("Video call history received:", data.data);

//         // Transform API data to match your table structure
//         // NEW: added customer_from_name field
//         const transformedData = data.data.map((call, index) => ({
//           id: index,
//           date: call.date,
//           packageName: call.package_name || "—",
//           customerFromName: call.customer_from_name || "—",   // NEW FIELD
//           username: call.username || "—",
//           startTime: call.start_time || "—",
//           endTime: call.end_time || "—",
//           duration: call.duration || "—",
//           ratePerMinute: `${call.rate_per_minute || "0.00"} ฿/min`,
//           income: `${call.income || "0.00"} ฿`,
//         }));

//         console.log("Transformed video call data:", transformedData);
//         setVideoCallData(transformedData);
//       } else if (data.success && (!data.data || data.data.length === 0)) {
//         console.log("No video call history found");
//         setVideoCallData([]);
//       } else {
//         console.log("API returned success=false:", data.message);
//         setError(data.message || "Failed to fetch video call history");
//       }
//     } catch (err) {
//       console.error("Error fetching video call history:", err);
//       console.error("Error response:", err.response);

//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         setError("Authentication failed. Please login again.");
//         localStorage.removeItem("token");
//         setTimeout(() => navigate("/"), 2000);
//       } else {
//         setError(
//           err.response?.data?.message ||
//             "An error occurred while fetching video call history"
//         );
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
//         <Sidebar show={isSidebarOpen} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="video-history-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="video-table-container"
//             >
//               <div className="text-center py-5">
//                 <div className="spinner-border" role="status" style={{ color: "#e9527a" }}>
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//                 <p className="mt-3 text-muted">Loading video call history...</p>
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
//         <Sidebar show={isSidebarOpen} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="video-history-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="video-table-container"
//             >
//               <div className="text-center py-5">
//                 <AlertCircle size={48} className="text-danger mb-3" />
//                 <p className="text-danger mb-3">{error}</p>
//                 <button
//                   onClick={fetchVideoCallHistory}
//                   className="btn btn-primary"
//                   style={{
//                     backgroundColor: "#e9527a",
//                     border: "none",
//                     padding: "8px 24px",
//                   }}
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

//   // Main Render - Video Call History Table with new column
//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//       )}

//       <Sidebar show={isSidebarOpen} />
//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="video-history-content">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="video-table-container"
//           >
//             <div className="table-responsive">
//               <table className="video-table">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Package Name</th>
//                     <th>Customer From Name</th>   {/* NEW COLUMN */}
//                     {/*<th>Call From</th>*/}
//                     <th>Start Time(Th)</th>
//                     <th>End Time (Th)</th>
//                     <th>Duration</th>
//                     <th>Rate/min</th>
//                     <th>Income (฿)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {videoCallData.length === 0 ? (
//                     <tr>
//                       <td colSpan="9" className="text-center py-5">
//                         <p className="text-muted mb-0">
//                           No video call history found
//                         </p>
//                       </td>
//                     </tr>
//                   ) : (
//                     videoCallData.map((row, index) => (
//                       <tr key={row.id || index}>
//                         <td>{row.date}</td>
//                         <td>{row.packageName}</td>
//                         <td>{row.customerFromName}</td>   {/* NEW DATA */}
//                         {/* <td>{row.username}</td> */}
//                         <td>{row.startTime}</td>
//                         <td>{row.endTime}</td>
//                         <td>{row.duration}</td>
//                         <td>{row.ratePerMinute}</td>
//                         <td className="fw-bold text-success">{row.income}</td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default VideoCallHistory;















// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/VideoCallHistory.css";
// import { Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const VideoCallHistory = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [videoCallData, setVideoCallData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Close Sidebar
//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   useEffect(() => {
//     fetchVideoCallHistory();
//   }, []);

//   const fetchVideoCallHistory = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("Token from localStorage:", token);

//       if (!token) {
//         console.log("No token found, redirecting to login");
//         setError("Please login to view video call history");
//         setLoading(false);
//         setTimeout(() => navigate("/"), 2000);
//         return;
//       }

//       const apiUrl = "https://sagarxo.app/web-api/customer/video-call-history";
//       console.log("Fetching from URL:", apiUrl);

//       const response = await axios.get(apiUrl, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `${token}`,
//         },
//         withCredentials: true,
//       });

//       console.log("Full API Response:", response);
//       const data = response.data;

//       if (data.loginRequired) {
//         console.log("Login required - token may be invalid");
//         setError("Session expired. Please login again.");
//         localStorage.removeItem("token");
//         setTimeout(() => navigate("/"), 2000);
//         setLoading(false);
//         return;
//       }

//       if (data.success && data.data) {
//         console.log("Video call history received:", data.data);

//         // Transform API data to match your table structure
//         // NEW: added customer_from_name field
//         const transformedData = data.data.map((call, index) => ({
//           id: index,
//           date: call.date,
//           packageName: call.package_name || "—",
//           customerFromName: call.customer_from_name || "—",   // NEW FIELD
//           username: call.username || "—",
//           startTime: call.start_time || "—",
//           endTime: call.end_time || "—",
//           duration: call.duration || "—",
//           ratePerMinute: `${call.rate_per_minute || "0.00"} ฿/min`,
//           income: `${call.income || "0.00"} ฿`,
//         }));

//         console.log("Transformed video call data:", transformedData);
//         setVideoCallData(transformedData);
//       } else if (data.success && (!data.data || data.data.length === 0)) {
//         console.log("No video call history found");
//         setVideoCallData([]);
//       } else {
//         console.log("API returned success=false:", data.message);
//         setError(data.message || "Failed to fetch video call history");
//       }
//     } catch (err) {
//       console.error("Error fetching video call history:", err);
//       console.error("Error response:", err.response);

//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         setError("Authentication failed. Please login again.");
//         localStorage.removeItem("token");
//         setTimeout(() => navigate("/"), 2000);
//       } else {
//         setError(
//           err.response?.data?.message ||
//             "An error occurred while fetching video call history"
//         );
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
//           <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="video-history-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="video-table-container"
//             >
//               <div className="text-center py-5">
//                 <div className="spinner-border" role="status" style={{ color: "#e9527a" }}>
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//                 <p className="mt-3 text-muted">Loading video call history...</p>
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
//           <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="video-history-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="video-table-container"
//             >
//               <div className="text-center py-5">
//                 <AlertCircle size={48} className="text-danger mb-3" />
//                 <p className="text-danger mb-3">{error}</p>
//                 <button
//                   onClick={fetchVideoCallHistory}
//                   className="btn btn-primary"
//                   style={{
//                     backgroundColor: "#e9527a",
//                     border: "none",
//                     padding: "8px 24px",
//                   }}
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

//   // Main Render - Video Call History Table with new column
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

//         <main className="video-history-content">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="video-table-container"
//           >
//             <div className="table-responsive">
//               <table className="video-table">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Package Name</th>
//                     <th>Call From</th>   {/* NEW COLUMN */}
//                     {/*<th>Call From</th>*/}
//                     <th>Start Time(TH)</th>
//                     <th>End Time (TH)</th>
//                     <th>Duration</th>
//                     <th>Rate/min</th>
//                     <th>Income (฿)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {videoCallData.length === 0 ? (
//                     <tr>
//                       <td colSpan="9" className="text-center py-5">
//                         <p className="text-muted mb-0">
//                           No video call history found
//                         </p>
//                       </td>
//                     </tr>
//                   ) : (
//                     videoCallData.map((row, index) => (
//                       <tr key={row.id || index}>
//                         <td>{row.date}</td>
//                         <td>{row.packageName}</td>
//                         <td>{row.customerFromName}</td>   {/* NEW DATA */}
//                         {/* <td>{row.username}</td> */}
//                         <td>{row.startTime}</td>
//                         <td>{row.endTime}</td>
//                         <td>{row.duration}</td>
//                         <td>{row.ratePerMinute}</td>
//                         <td className="fw-bold text-success">{row.income}</td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default VideoCallHistory;












import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../css/VideoCallHistory.css";
import { Menu, X, AlertCircle } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VideoCallHistory = () => {
  const { t, i18n } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [videoCallData, setVideoCallData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  // ===== FORMATTING HELPERS (Thai & English) =====
  const formatNumber = (value) => {
    const num = parseFloat(value) || 0;
    return num.toLocaleString(i18n.language === "th" ? "th-TH" : "en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatDate = (dateStr) => {
    if (!dateStr || dateStr === "—") return "—";
    const parts = dateStr.split("/");
    if (parts.length !== 3) return dateStr;
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    let year = parseInt(parts[2]);
    const date = new Date(year, month, day);

    if (i18n.language === "th") {
      // Convert to Buddhist year (พ.ศ.)
      const buddhistYear = year + 543;
      return date.toLocaleDateString("th-TH", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Parses API's "X min Y sec" string → { minutes, seconds }
  const parseDurationString = (str) => {
    if (!str || str === "—") return null;
    // Pattern: "0 min 21 sec"
    const match = str.match(/(\d+)\s*min\s+(\d+)\s*sec/i);
    if (match) {
      return { minutes: parseInt(match[1]), seconds: parseInt(match[2]) };
    }
    // Fallback for "MM:SS"
    if (str.includes(":")) {
      const [m, s] = str.split(":");
      return { minutes: parseInt(m), seconds: parseInt(s) };
    }
    // Fallback for pure seconds
    const totalSecs = parseInt(str);
    if (!isNaN(totalSecs)) {
      return {
        minutes: Math.floor(totalSecs / 60),
        seconds: totalSecs % 60,
      };
    }
    return null; // can't parse, return original
  };

  const formatDuration = (durationStr) => {
    const parsed = parseDurationString(durationStr);
    if (!parsed) return durationStr; // keep raw if unparseable

    const { minutes, seconds } = parsed;
    if (i18n.language === "th") {
      return `${minutes} นาที ${seconds} วินาที`;
    }
    return `${minutes} min ${seconds} sec`;
  };

  // ===== FETCH VIDEO CALL HISTORY =====
  const fetchVideoCallHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError(t("errorSession"));
        setLoading(false);
        setTimeout(() => navigate("/"), 2000);
        return;
      }

      const apiUrl = "https://sagarxo.app/web-api/customer/video-call-history";
      const response = await axios.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        withCredentials: true,
      });

      const data = response.data;

      if (data.loginRequired) {
        setError(t("errorSession"));
        localStorage.removeItem("token");
        setTimeout(() => navigate("/"), 2000);
        setLoading(false);
        return;
      }

      if (data.success && data.data) {
        const transformedData = data.data.map((call, index) => {
          const rawRate = parseFloat(call.rate_per_minute || 0);
          const rawIncome = parseFloat(call.income || 0);

          // Safe fallback for caller name
          const callerName =
            call.customer_from_name ||
            call.customer_name ||
            call.username ||
            "—";

          return {
            id: index,
            rawDate: call.date,
            date: formatDate(call.date),
            packageName: call.package_name || "—",
            customerFromName: callerName,
            rawStartTime: call.start_time || "—",
            startTime: call.start_time || "—",
            rawEndTime: call.end_time || "—",
            endTime: call.end_time || "—",
            rawDuration: call.duration || "—",
            duration: formatDuration(call.duration),
            rawRatePerMinute: rawRate,
            ratePerMinute: `${formatNumber(rawRate)} ${t("thb")}/min`,
            rawIncome: rawIncome,
            income: `${formatNumber(rawIncome)} ${t("thb")}`,
          };
        });

        setVideoCallData(transformedData);
      } else if (data.success && (!data.data || data.data.length === 0)) {
        setVideoCallData([]);
      } else {
        setError(data.message || t("errorFetch"));
      }
    } catch (err) {
      console.error("Error fetching video call history:", err);
      if (err.response?.status === 401 || err.response?.data?.loginRequired) {
        setError(t("errorSession"));
        localStorage.removeItem("token");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setError(err.response?.data?.message || t("errorFetch"));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideoCallHistory();
  }, []);

  // Re-format when language changes
  useEffect(() => {
    if (videoCallData.length > 0) {
      setVideoCallData((prev) =>
        prev.map((item) => ({
          ...item,
          date: formatDate(item.rawDate),
          duration: formatDuration(item.rawDuration),
          ratePerMinute: `${formatNumber(item.rawRatePerMinute)} ${t("thb")}/min`,
          income: `${formatNumber(item.rawIncome)} ${t("thb")}`,
        }))
      );
    }
  }, [i18n.language]);

  // ===== RENDER: LOADING =====
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
          <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
        )}
        <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
        <div className="main-wrapper">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <main className="video-history-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="video-table-container"
            >
              <div className="text-center py-5">
                <div
                  className="spinner-border"
                  role="status"
                  style={{ color: "#e9527a" }}
                >
                  <span className="visually-hidden">{t("loading")}</span>
                </div>
                <p className="mt-3 text-muted">{t("loading")}</p>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    );
  }

  // ===== RENDER: ERROR =====
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
          <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
        )}
        <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
        <div className="main-wrapper">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <main className="video-history-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="video-table-container"
            >
              <div className="text-center py-5">
                <AlertCircle size={48} className="text-danger mb-3" />
                <p className="text-danger mb-3">{error}</p>
                <button
                  onClick={fetchVideoCallHistory}
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#e9527a",
                    border: "none",
                    padding: "8px 24px",
                  }}
                >
                  {t("tryAgain")}
                </button>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    );
  }

  // ===== RENDER: TABLE =====
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

        <main className="video-history-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="video-table-container"
          >
            <div className="table-responsive">
              <table className="video-table">
                <thead>
                  <tr>
                    <th>{t("videoHistory.date")}</th>
                    <th>{t("videoHistory.packageName")}</th>
                    <th>{t("videoHistory.callFrom")}</th>
                    <th>{t("videoHistory.startTime")}</th>
                    <th>{t("videoHistory.endTime")}</th>
                    <th>{t("videoHistory.duration")}</th>
                    <th>{t("videoHistory.ratePerMin")}</th>
                    <th>{t("videoHistory.income")}</th>
                  </tr>
                </thead>
                <tbody>
                  {videoCallData.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="text-center py-5">
                        <p className="text-muted mb-0">
                          {t("videoHistory.noData")}
                        </p>
                      </td>
                    </tr>
                  ) : (
                    videoCallData.map((row, index) => (
                      <tr key={row.id || index}>
                        <td>{row.date}</td>
                        <td>{row.packageName}</td>
                        <td>{row.customerFromName}</td>
                        <td>{row.startTime}</td>
                        <td>{row.endTime}</td>
                        <td>{row.duration}</td>
                        <td>{row.ratePerMinute}</td>
                        <td className="fw-bold text-success">{row.income}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default VideoCallHistory;














// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/VideoCallHistory.css";
// import { Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const VideoCallHistory = () => {
//   const { t, i18n } = useTranslation();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [videoCallData, setVideoCallData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   // Helper: format number with proper locale (Thai vs English)
//   const formatNumber = (value, locale = i18n.language) => {
//     const num = parseFloat(value) || 0;
//     return num.toLocaleString(locale === "th" ? "th-TH" : "en-US", {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     });
//   };

//   // Helper: format date "DD/MM/YYYY" to localized string (Thai: พ.ศ., English: DD MMM YYYY)
//   const formatDate = (dateStr, locale = i18n.language) => {
//     if (!dateStr || dateStr === "—") return "—";
//     const parts = dateStr.split("/");
//     if (parts.length !== 3) return dateStr;
//     const day = parseInt(parts[0]);
//     const month = parseInt(parts[1]) - 1;
//     let year = parseInt(parts[2]);
//     const date = new Date(year, month, day);
//     if (locale === "th") {
//       // Convert to Buddhist year
//       year = year + 543;
//       return date.toLocaleDateString("th-TH", {
//         year: "numeric",
//         month: "short",
//         day: "numeric",
//       }).replace(year.toString(), (year + 543).toString());
//     }
//     return date.toLocaleDateString("en-GB", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   // Helper: format duration (e.g., "05:30" or "5 min 30 sec" localized)
//   const formatDuration = (durationStr, locale = i18n.language) => {
//     if (!durationStr || durationStr === "—") return "—";
//     // duration from API might be like "05:30" (mm:ss) or seconds number
//     if (durationStr.includes(":")) {
//       const [minutes, seconds] = durationStr.split(":");
//       if (locale === "th") {
//         return `${parseInt(minutes)} นาที ${parseInt(seconds)} วินาที`;
//       }
//       return `${parseInt(minutes)} min ${parseInt(seconds)} sec`;
//     }
//     // if it's a number of seconds
//     const totalSecs = parseInt(durationStr);
//     if (isNaN(totalSecs)) return durationStr;
//     const mins = Math.floor(totalSecs / 60);
//     const secs = totalSecs % 60;
//     if (locale === "th") {
//       return `${mins} นาที ${secs} วินาที`;
//     }
//     return `${mins} min ${secs} sec`;
//   };

//   useEffect(() => {
//     fetchVideoCallHistory();
//   }, []);

//   // Re-format data when language changes (dates, durations, numbers)
//   useEffect(() => {
//     if (videoCallData.length > 0) {
//       setVideoCallData((prevData) =>
//         prevData.map((item) => ({
//           ...item,
//           date: formatDate(item.rawDate),
//           startTime: item.rawStartTime, // keep raw for re-formatting? but time doesn't need translation
//           endTime: item.rawEndTime,
//           duration: formatDuration(item.rawDuration),
//           ratePerMinute: `${formatNumber(item.rawRatePerMinute)} ${t("thb")}/min`,
//           income: `${formatNumber(item.rawIncome)} ${t("thb")}`,
//         }))
//       );
//     }
//   }, [i18n.language]);

//   const fetchVideoCallHistory = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("Token from localStorage:", token);

//       if (!token) {
//         console.log("No token found, redirecting to login");
//         setError(t("errorSession"));
//         setLoading(false);
//         setTimeout(() => navigate("/"), 2000);
//         return;
//       }

//       const apiUrl = "https://sagarxo.app/web-api/customer/video-call-history";
//       console.log("Fetching from URL:", apiUrl);

//       const response = await axios.get(apiUrl, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `${token}`,
//         },
//         withCredentials: true,
//       });

//       console.log("Full API Response:", response);
//       const data = response.data;

//       if (data.loginRequired) {
//         console.log("Login required - token may be invalid");
//         setError(t("errorSession"));
//         localStorage.removeItem("token");
//         setTimeout(() => navigate("/"), 2000);
//         setLoading(false);
//         return;
//       }

//       if (data.success && data.data) {
//         console.log("Video call history received:", data.data);

//         // Transform API data with both raw and formatted values
//         const transformedData = data.data.map((call, index) => {
//           const rawRate = parseFloat(call.rate_per_minute || 0);
//           const rawIncome = parseFloat(call.income || 0);

//           return {
//             id: index,
//             rawDate: call.date,
//             date: formatDate(call.date),
//             packageName: call.package_name || "—",
//             customerFromName: call.customer_from_name || "—",
//             username: call.username || "—",
//             rawStartTime: call.start_time || "—",
//             startTime: call.start_time || "—",
//             rawEndTime: call.end_time || "—",
//             endTime: call.end_time || "—",
//             rawDuration: call.duration || "—",
//             duration: formatDuration(call.duration),
//             rawRatePerMinute: rawRate,
//             ratePerMinute: `${formatNumber(rawRate)} ${t("thb")}/min`,
//             rawIncome: rawIncome,
//             income: `${formatNumber(rawIncome)} ${t("thb")}`,
//           };
//         });

//         console.log("Transformed video call data:", transformedData);
//         setVideoCallData(transformedData);
//       } else if (data.success && (!data.data || data.data.length === 0)) {
//         console.log("No video call history found");
//         setVideoCallData([]);
//       } else {
//         console.log("API returned success=false:", data.message);
//         setError(data.message || t("errorFetch"));
//       }
//     } catch (err) {
//       console.error("Error fetching video call history:", err);
//       console.error("Error response:", err.response);

//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         setError(t("errorSession"));
//         localStorage.removeItem("token");
//         setTimeout(() => navigate("/"), 2000);
//       } else {
//         setError(
//           err.response?.data?.message || t("errorFetch")
//         );
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
//           <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="video-history-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="video-table-container"
//             >
//               <div className="text-center py-5">
//                 <div className="spinner-border" role="status" style={{ color: "#e9527a" }}>
//                   <span className="visually-hidden">{t("loading")}</span>
//                 </div>
//                 <p className="mt-3 text-muted">{t("loading")}</p>
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
//           <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="video-history-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="video-table-container"
//             >
//               <div className="text-center py-5">
//                 <AlertCircle size={48} className="text-danger mb-3" />
//                 <p className="text-danger mb-3">{error}</p>
//                 <button
//                   onClick={fetchVideoCallHistory}
//                   className="btn btn-primary"
//                   style={{
//                     backgroundColor: "#e9527a",
//                     border: "none",
//                     padding: "8px 24px",
//                   }}
//                 >
//                   {t("tryAgain")}
//                 </button>
//               </div>
//             </motion.div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // Main Render - Video Call History Table with localized headers
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

//         <main className="video-history-content">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="video-table-container"
//           >
//             <div className="table-responsive">
//               <table className="video-table">
//                 <thead>
//                   <tr>
//                     <th>{t("videoHistory.date")}</th>
//                     <th>{t("videoHistory.packageName")}</th>
//                     <th>{t("videoHistory.callFrom")}</th>
//                     <th>{t("videoHistory.startTime")}</th>
//                     <th>{t("videoHistory.endTime")}</th>
//                     <th>{t("videoHistory.duration")}</th>
//                     <th>{t("videoHistory.ratePerMin")}</th>
//                     <th>{t("videoHistory.income")}</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {videoCallData.length === 0 ? (
//                     <tr>
//                       <td colSpan="8" className="text-center py-5">
//                         <p className="text-muted mb-0">{t("videoHistory.noData")}</p>
//                       </td>
//                     </tr>
//                   ) : (
//                     videoCallData.map((row, index) => (
//                       <tr key={row.id || index}>
//                         <td>{row.date}</td>
//                         <td>{row.packageName}</td>
//                         <td>{row.customerFromName}</td>
//                         <td>{row.startTime}</td>
//                         <td>{row.endTime}</td>
//                         <td>{row.duration}</td>
//                         <td>{row.ratePerMinute}</td>
//                         <td className="fw-bold text-success">{row.income}</td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default VideoCallHistory;










// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/VideoCallHistory.css";
// import { Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // Translations - Same structure as other pages
// const translations = {
//   en: {
//     title: "Video Call History",
//     loading: "Loading video call history...",
//     noData: "No video call history found",
//     tryAgain: "Try Again",
//     errors: {
//       loginRequired: "Please login to view video call history",
//       sessionExpired: "Session expired. Please login again.",
//       authFailed: "Authentication failed. Please login again.",
//       fetchFailed: "An error occurred while fetching video call history"
//     },
//     tableHeaders: {
//       date: "Date",
//       packageName: "Package Name",
//       callFrom: "Call From",
//       startTime: "Start Time(TH)",
//       endTime: "End Time (TH)",
//       duration: "Duration",
//       ratePerMinute: "Rate/min",
//       income: "Income (฿)"
//     }
//   },
//   th: {
//     title: "ประวัติการโทร視ดีโอ",
//     loading: "กำลังโหลดประวัติการโทร視ดีโอ...",
//     noData: "ไม่พบประวัติการโทร視ดีโอ",
//     tryAgain: "ลองอีกครั้ง",
//     errors: {
//       loginRequired: "กรุณาเข้าสู่ระบบเพื่อดูประวัติการโทร視ดีโอ",
//       sessionExpired: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
//       authFailed: "การยืนยันตัวตนล้มเหลว กรุณาเข้าสู่ระบบอีกครั้ง",
//       fetchFailed: "เกิดข้อผิดพลาดในการดึงประวัติการโทร視ดีโอ"
//     },
//     tableHeaders: {
//       date: "วันที่",
//       packageName: "ชื่อแพ็คเกจ",
//       callFrom: "โทรจาก",
//       startTime: "เวลาเริ่มต้น (TH)",
//       endTime: "เวลาสิ้นสุด (TH)",
//       duration: "ระยะเวลา",
//       ratePerMinute: "อัตราต่อนาที",
//       income: "รายได้ (฿)"
//     }
//   }
// };

// const VideoCallHistory = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [videoCallData, setVideoCallData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Language State
//   const [language, setLanguage] = useState(() => 
//     localStorage.getItem('appLanguage') || 'en'
//   );

//   const navigate = useNavigate();
//   const t = translations[language];

//   // Close Sidebar
//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   // Listen for language changes from other tabs
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
//     fetchVideoCallHistory();
//   }, []);

//   const fetchVideoCallHistory = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         setError(t.errors.loginRequired);
//         setLoading(false);
//         setTimeout(() => navigate("/"), 2000);
//         return;
//       }

//       const apiUrl = "https://sagarxo.app/web-api/customer/video-call-history";

//       const response = await axios.get(apiUrl, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `${token}`,
//         },
//         withCredentials: true,
//       });

//       const data = response.data;

//       if (data.loginRequired) {
//         setError(t.errors.sessionExpired);
//         localStorage.removeItem("token");
//         setTimeout(() => navigate("/"), 2000);
//         setLoading(false);
//         return;
//       }

//       if (data.success && data.data) {
//         const transformedData = data.data.map((call, index) => ({
//           id: index,
//           date: call.date,
//           packageName: call.package_name || "—",
//           customerFromName: call.customer_from_name || "—",
//           username: call.username || "—",
//           startTime: call.start_time || "—",
//           endTime: call.end_time || "—",
//           duration: call.duration || "—",
//           ratePerMinute: `${call.rate_per_minute || "0.00"} ฿/min`,
//           income: `${call.income || "0.00"} ฿`,
//         }));

//         setVideoCallData(transformedData);
//       } else if (data.success && (!data.data || data.data.length === 0)) {
//         setVideoCallData([]);
//       } else {
//         setError(data.message || t.errors.fetchFailed);
//       }
//     } catch (err) {
//       console.error("Error fetching video call history:", err);

//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         setError(t.errors.authFailed);
//         localStorage.removeItem("token");
//         setTimeout(() => navigate("/"), 2000);
//       } else {
//         setError(
//           err.response?.data?.message || t.errors.fetchFailed
//         );
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
//           <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="video-history-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="video-table-container"
//             >
//               <div className="text-center py-5">
//                 <div className="spinner-border" role="status" style={{ color: "#e9527a" }}>
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
//           <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div className="main-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <main className="video-history-content">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="video-table-container"
//             >
//               <div className="text-center py-5">
//                 <AlertCircle size={48} className="text-danger mb-3" />
//                 <p className="text-danger mb-3">{error}</p>
//                 <button
//                   onClick={fetchVideoCallHistory}
//                   className="btn btn-primary"
//                   style={{
//                     backgroundColor: "#e9527a",
//                     border: "none",
//                     padding: "8px 24px",
//                   }}
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

//         <main className="video-history-content">
//           {/* Language Toggle - Same style as other pages */}
//           <div 
//             className="language-toggle-wrapper" 
//             style={{ 
//               position: 'absolute', 
//               top: '25px', 
//               right: '30px', 
//               zIndex: 100 
//             }}
//           >
//             <button
//               onClick={toggleLanguage}
//               className="btn btn-sm btn-outline-secondary"
//               style={{ borderRadius: '20px', padding: '4px 12px' }}
//             >
//               {language === 'en' ? 'ไทย' : 'English'}
//             </button>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="video-table-container"
//           >
//             <div className="table-responsive">
//               <table className="video-table">
//                 <thead>
//                   <tr>
//                     <th>{t.tableHeaders.date}</th>
//                     <th>{t.tableHeaders.packageName}</th>
//                     <th>{t.tableHeaders.callFrom}</th>
//                     <th>{t.tableHeaders.startTime}</th>
//                     <th>{t.tableHeaders.endTime}</th>
//                     <th>{t.tableHeaders.duration}</th>
//                     <th>{t.tableHeaders.ratePerMinute}</th>
//                     <th>{t.tableHeaders.income}</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {videoCallData.length === 0 ? (
//                     <tr>
//                       <td colSpan="8" className="text-center py-5">
//                         <p className="text-muted mb-0">
//                           {t.noData}
//                         </p>
//                       </td>
//                     </tr>
//                   ) : (
//                     videoCallData.map((row, index) => (
//                       <tr key={row.id || index}>
//                         <td>{row.date}</td>
//                         <td>{row.packageName}</td>
//                         <td>{row.customerFromName}</td>
//                         <td>{row.startTime}</td>
//                         <td>{row.endTime}</td>
//                         <td>{row.duration}</td>
//                         <td>{row.ratePerMinute}</td>
//                         <td className="fw-bold text-success">{row.income}</td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default VideoCallHistory;