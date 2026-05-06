// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { CheckCircle2, XCircle, Hourglass, Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/WithdrawalHistory.css";
// import Marks from "../assets/Mark.png";


// const withdrawalData = [
//   {
//     date: "01/11/2025",
//     amount: "25 ฿",
//     method: "Via Agency",
//     transactionId: "#th1234XO",
//     note: "Credited Successfully",
//     status: "Completed",
//   },
//   {
//     date: "01/12/2025",
//     amount: "25 ฿",
//     method: "Bank",
//     transactionId: "#th5678XO",
//     note: "Invalid Wallet Id",
//     status: "Rejected",
//   },
//   {
//     date: "02/01/2025",
//     amount: "25 ฿",
//     method: "Via Agency",
//     transactionId: "#th1243XO",
//     note: "Processing",
//     status: "Pending",
//   },
//   {
//     date: "01/02/2025",
//     amount: "25 ฿",
//     method: "Via Agency",
//     transactionId: "#th1234XO",
//     note: "Credited Successfully",
//     status: "Completed",
//   },
//   {
//     date: "01/03/2025",
//     amount: "25 ฿",
//     method: "Bank",
//     transactionId: "#th5678XO",
//     note: "Invalid Wallet Id",
//     status: "Rejected",
//   },
//   {
//     date: "01/04/2025",
//     amount: "25 ฿",
//     method: "Via Agency",
//     transactionId: "#th1243XO",
//     note: "Processing",
//     status: "Pending",
//   },
//   {
//     date: "02/05/2025",
//     amount: "25 ฿",
//     method: "Via Agency",
//     transactionId: "#th1234XO",
//     note: "Credited Successfully",
//     status: "Completed",
//   },
//   {
//     date: "01/06/2025",
//     amount: "25 ฿",
//     method: "Bank",
//     transactionId: "#th5678XO",
//     note: "Invalid Wallet Id",
//     status: "Rejected",
//   },
//   {
//     date: "01/07/2025",
//     amount: "25 ฿",
//     method: "Via Agency",
//     transactionId: "#th1243XO",
//     note: "Processing",
//     status: "Pending",
//   },
// ];

// const StatusBadge = ({ status }) => {
//   switch (status) {
//     case "Completed":
//       return (
//         <div className="status-badge completed">
//           <CheckCircle2 size={16} />
//           <span>Complted</span>
//         </div>
//       );
//     case "Rejected":
//       return (
//         <div className="status-badge rejected">
//           <XCircle size={16} />
//           <span>Rejected</span>
//         </div>
//       );
//     case "Pending":
//       return (
//         <div className="status-badge pending">
//           <Hourglass size={16} />
//           <span>Pending</span>
//         </div>
//       );
//     default:
//       return null;
//   }
// };

// const WithdrawalHistory = () => {
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

//         <main className="withdrawal-content">
//           <div className="note-section">
//             <h6 className="note-title">Note:</h6>
//             <div className="d-flex align-items-center gap-1">

//             <p className="note-text m-0 p-0 mt-1">
//               The withdrawal for March will be processed and credited between
//               1stApril TO 7thApril.
//             </p>


//               <img src={Marks} className="img-fluid" style={{width:"25px"}} alt="Image-Not-Found" />


//             </div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="withdrawal-table-container"
//           >
//             <div className="table-responsive">
//               <table className="withdrawal-table">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Amount</th>
//                     <th>Method</th>
//                     <th>Transaction ID</th>
//                     <th>Note</th>
//                     <th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {withdrawalData.map((row, index) => (
//                     <tr key={index}>
//                       <td>{row.date}</td>
//                       <td className="fw-bold">{row.amount}</td>
//                       <td>{row.method}</td>
//                       <td>{row.transactionId}</td>
//                       <td>{row.note}</td>
//                       <td>
//                         <StatusBadge status={row.status} />
//                       </td>
//                     </tr>
//                   ))}
//                   {/* Empty rows to match design if needed, but data is better */}
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

// export default WithdrawalHistory;























// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { CheckCircle2, XCircle, Hourglass, Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/WithdrawalHistory.css";
// import Marks from "../assets/Mark.png";

// // Map API status → UI status
// const mapStatus = (apiStatus) => {
//   switch (apiStatus) {
//     case "DONE": return "Completed";
//     case "PENDING": return "Pending";
//     case "CANCELLED": return "Rejected";
//     default: return "Pending";
//   }
// };

// // Map API method → UI label
// const mapMethod = (method) => {
//   switch (method) {
//     case "BANK": return "Bank";
//     case "AGENCY": return "Via Agency";
//     default: return method;
//   }
// };

// const StatusBadge = ({ status }) => {
//   switch (status) {
//     case "Completed":
//       return (
//         <div className="status-badge completed">
//           <CheckCircle2 size={16} />
//           <span>Completed</span>
//         </div>
//       );
//     case "Rejected":
//       return (
//         <div className="status-badge rejected">
//           <XCircle size={16} />
//           <span>Rejected</span>
//         </div>
//       );
//     case "Pending":
//       return (
//         <div className="status-badge pending">
//           <Hourglass size={16} />
//           <span>Pending</span>
//         </div>
//       );
//     default:
//       return (
//         <div className="status-badge">
//           <AlertCircle size={16} />
//           <span>{status || 'Unknown'}</span>
//         </div>
//       );
//   }
// };

// const WithdrawalHistory = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [withdrawalData, setWithdrawalData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const formatDate = (dateString) => {
//     if (!dateString) return 'N/A';
//     try {
//       // Handle format like "01 Feb 2026, 12:00:00 AM"
//       const parts = dateString.match(/(\d+) (\w+) (\d+),/);
//       if (parts) {
//         const months = {
//           Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
//           Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
//         };
//         return `${parts[1]}/${months[parts[2]] || '01'}/${parts[3]}`;
//       }
      
//       const date = new Date(dateString);
//       if (!isNaN(date.getTime())) {
//         return date.toLocaleDateString('en-GB', {
//           day: '2-digit',
//           month: '2-digit',
//           year: 'numeric'
//         });
//       }
//       return dateString;
//     } catch (e) {
//       console.error("Date formatting error:", e);
//       return dateString;
//     }
//   };

//   const getDefaultNote = (status) => {
//     switch (status) {
//       case "DONE": return "Credited Successfully";
//       case "PENDING": return "Processing";
//       case "CANCELLED": return "Withdrawal cancelled";
//       default: return "Processing";
//     }
//   };

//   useEffect(() => {
//     const fetchWithdrawals = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         console.log("=== Withdrawal History Debug ===");
//         console.log("Token from localStorage:", token);
        
//         if (!token) {
//           console.log("No token found!");
//           setError("Please login to view withdrawal history");
//           setLoading(false);
//           setTimeout(() => navigate('/'), 2000);
//           return;
//         }

//         const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/withdrawals`;
//         console.log("API URL:", apiUrl);
        
//         const response = await axios.get(apiUrl, {
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `${token}`
//           },
//           withCredentials: true,
//         });

//         console.log("Response status:", response.status);
//         console.log("Full response data:", response.data);

//         const result = response.data;
        
//         // Check if login is required
//         if (result.loginRequired) {
//           console.log("Login required - token invalid or expired");
//           setError("Session expired. Please login again.");
//           localStorage.removeItem("token");
//           setTimeout(() => navigate('/'), 2000);
//           setLoading(false);
//           return;
//         }

//         if (result.success) {
//           console.log("Success! Number of withdrawals:", result.data?.length || 0);
          
//           if (result.data && result.data.length > 0) {
//             const mapped = result.data.map((item) => ({
//               id: item.id,
//               date: formatDate(item.created_at),
//               amount: `${parseFloat(item.withdrawal_amount).toFixed(0)} ฿`,
//               method: mapMethod(item.method),
//               transactionId: `#${item.id}${item.method === "BANK" ? "BANK" : "XO"}`,
//               note: item.note || getDefaultNote(item.status),
//               status: mapStatus(item.status),
//               rawData: item // Keep for debugging
//             }));
//             console.log("Mapped data sample:", mapped[0]);
//             setWithdrawalData(mapped);
//           } else {
//             console.log("No withdrawal data found");
//             setWithdrawalData([]);
//           }
//         } else {
//           console.log("API returned success=false:", result.message);
//           setError(result.message || "Failed to fetch withdrawals.");
//         }
//       } catch (err) {
//         console.error("=== Error Details ===");
//         console.error("Error object:", err);
//         console.error("Error response:", err.response);
//         console.error("Error message:", err.message);
        
//         if (err.response?.status === 401) {
//           setError("Authentication failed. Please login again.");
//           localStorage.removeItem("token");
//           setTimeout(() => navigate('/'), 2000);
//         } else if (err.response?.data?.loginRequired) {
//           setError("Please login to view withdrawal history");
//           localStorage.removeItem("token");
//           setTimeout(() => navigate('/'), 2000);
//         } else {
//           setError(
//             err.response?.data?.message ||
//             "An error occurred while fetching withdrawals. Please try again later."
//           );
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWithdrawals();
//   }, [navigate]);

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

//         <main className="withdrawal-content">
//           {/* Note Section */}
//           <div className="note-section">
//             <h6 className="note-title">Note:</h6>
//             <div className="d-flex align-items-center gap-1">
//               <p className="note-text m-0 p-0 mt-1">
//                 The withdrawal for March will be processed and credited between
//                 1st April TO 7th April.
//               </p>
//               <img
//                 src={Marks}
//                 className="img-fluid"
//                 style={{ width: "25px" }}
//                 alt="Note"
//               />
//             </div>
//           </div>

//           {/* Table */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="withdrawal-table-container"
//           >
//             <div className="table-responsive">
//               <table className="withdrawal-table">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Amount</th>
//                     <th>Method</th>
//                     <th>Transaction ID</th>
//                     <th>Note</th>
//                     <th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {/* Loading State */}
//                   {loading && (
//                     <tr>
//                       <td colSpan="6" className="text-center py-4">
//                         <div
//                           className="spinner-border text-primary"
//                           role="status"
//                           style={{ color: '#e9527a' }}
//                         >
//                           <span className="visually-hidden">Loading...</span>
//                         </div>
//                         <p className="mt-2 mb-0">Loading Withdrawals...</p>
//                       </td>
//                     </tr>
//                   )}

//                   {/* Error State */}
//                   {!loading && error && (
//                     <tr>
//                       <td colSpan="6" className="text-center py-4">
//                         <AlertCircle size={48} className="text-danger mb-3" />
//                         <p className="text-danger mb-3">{error}</p>
//                         <button
//                           onClick={() => window.location.reload()}
//                           className="btn btn-primary mt-2"
//                           style={{ backgroundColor: '#e9527a', border: 'none' }}
//                         >
//                           Try Again
//                         </button>
//                       </td>
//                     </tr>
//                   )}

//                   {/* Empty State */}
//                   {!loading && !error && withdrawalData.length === 0 && (
//                     <tr>
//                       <td colSpan="6" className="text-center py-4">
//                         <AlertCircle size={48} className="text-muted mb-3" style={{ opacity: 0.5 }} />
//                         <p className="text-muted">No withdrawal history found.</p>
//                         <p className="text-muted small">Your withdrawal requests will appear here</p>
//                       </td>
//                     </tr>
//                   )}

//                   {/* Data Rows */}
//                   {!loading &&
//                     !error &&
//                     withdrawalData.map((row, index) => (
//                       <tr key={row.id || index}>
//                         <td>{row.date}</td>
//                         <td className="fw-bold">{row.amount}</td>
//                         <td>{row.method}</td>
//                         <td>{row.transactionId}</td>
//                         <td>{row.note}</td>
//                         <td>
//                           <StatusBadge status={row.status} />
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default WithdrawalHistory;















// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { CheckCircle2, XCircle, Hourglass, Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/WithdrawalHistory.css";
// import Marks from "../assets/Mark.png";

// // Translations
// const translations = {
//   en: {
//     noteTitle: "Note:",
//     noteText: "The withdrawal for March will be processed and credited between 1st April TO 7th April.",
//     tableHeaders: {
//       date: "Date",
//       amount: "Amount",
//       method: "Method",
//       transactionId: "Transaction ID",
//       note: "Note",
//       status: "Status"
//     },
//     status: {
//       completed: "Completed",
//       rejected: "Rejected",
//       pending: "Pending",
//       unknown: "Unknown"
//     },
//     loading: "Loading Withdrawals...",
//     errorRetry: "Try Again",
//     emptyTitle: "No withdrawal history found.",
//     emptySubtext: "Your withdrawal requests will appear here",
//     errorSession: "Session expired. Please login again.",
//     errorGeneric: "An error occurred while fetching withdrawals. Please try again later.",
//     errorAuth: "Authentication failed. Please login again.",
//     errorLogin: "Please login to view withdrawal history",
//     noteDefault: {
//       DONE: "Credited Successfully",
//       PENDING: "Processing",
//       CANCELLED: "Withdrawal cancelled"
//     }
//   },
//   th: {
//     noteTitle: "หมายเหตุ:",
//     noteText: "การถอนเงินสำหรับเดือนมีนาคมจะดำเนินการและโอนเข้าบัญชีระหว่างวันที่ 1 เมษายน ถึง 7 เมษายน",
//     tableHeaders: {
//       date: "วันที่",
//       amount: "จำนวนเงิน",
//       method: "วิธีการ",
//       transactionId: "เลขที่รายการ",
//       note: "หมายเหตุ",
//       status: "สถานะ"
//     },
//     status: {
//       completed: "สำเร็จ",
//       rejected: "ปฏิเสธ",
//       pending: "รอดำเนินการ",
//       unknown: "ไม่ทราบสถานะ"
//     },
//     loading: "กำลังโหลดข้อมูลการถอน...",
//     errorRetry: "ลองอีกครั้ง",
//     emptyTitle: "ไม่พบประวัติการถอนเงิน",
//     emptySubtext: "คำขอถอนเงินของคุณจะปรากฏที่นี่",
//     errorSession: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
//     errorGeneric: "เกิดข้อผิดพลาดในการดึงข้อมูลการถอนเงิน กรุณาลองใหม่อีกครั้ง",
//     errorAuth: "การตรวจสอบสิทธิ์ล้มเหลว กรุณาเข้าสู่ระบบอีกครั้ง",
//     errorLogin: "กรุณาเข้าสู่ระบบเพื่อดูประวัติการถอนเงิน",
//     noteDefault: {
//       DONE: "โอนสำเร็จ",
//       PENDING: "กำลังดำเนินการ",
//       CANCELLED: "ยกเลิกการถอน"
//     }
//   }
// };

// // Map API status → UI status (English or Thai based on language)
// const mapStatus = (apiStatus, t) => {
//   switch (apiStatus) {
//     case "DONE": return t.status.completed;
//     case "PENDING": return t.status.pending;
//     case "CANCELLED": return t.status.rejected;
//     default: return t.status.pending;
//   }
// };

// // Map API method → UI label (unchanged)
// const mapMethod = (method) => {
//   switch (method) {
//     case "BANK": return "Bank";
//     case "AGENCY": return "Via Agency";
//     default: return method;
//   }
// };

// const WithdrawalHistory = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [withdrawalData, setWithdrawalData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [language, setLanguage] = useState(() => {
//     return localStorage.getItem('appLanguage') || 'en';
//   });
//   const navigate = useNavigate();
//   const t = translations[language];

//   // Listen for language changes
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

//   const formatDate = (dateString) => {
//     if (!dateString) return 'N/A';
//     try {
//       const parts = dateString.match(/(\d+) (\w+) (\d+),/);
//       if (parts) {
//         const months = {
//           Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
//           Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
//         };
//         return `${parts[1]}/${months[parts[2]] || '01'}/${parts[3]}`;
//       }
//       const date = new Date(dateString);
//       if (!isNaN(date.getTime())) {
//         return date.toLocaleDateString('en-GB', {
//           day: '2-digit',
//           month: '2-digit',
//           year: 'numeric'
//         });
//       }
//       return dateString;
//     } catch (e) {
//       console.error("Date formatting error:", e);
//       return dateString;
//     }
//   };

//   const getDefaultNote = (status) => {
//     switch (status) {
//       case "DONE": return t.noteDefault.DONE;
//       case "PENDING": return t.noteDefault.PENDING;
//       case "CANCELLED": return t.noteDefault.CANCELLED;
//       default: return t.noteDefault.PENDING;
//     }
//   };

//   useEffect(() => {
//     const fetchWithdrawals = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         console.log("=== Withdrawal History Debug ===");
//         console.log("Token from localStorage:", token);
        
//         if (!token) {
//           console.log("No token found!");
//           setError(t.errorLogin);
//           setLoading(false);
//           setTimeout(() => navigate('/'), 2000);
//           return;
//         }

//         const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/withdrawals`;
//         console.log("API URL:", apiUrl);
        
//         const response = await axios.get(apiUrl, {
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `${token}`
//           },
//           withCredentials: true,
//         });

//         console.log("Response status:", response.status);
//         console.log("Full response data:", response.data);

//         const result = response.data;
        
//         if (result.loginRequired) {
//           console.log("Login required - token invalid or expired");
//           setError(t.errorSession);
//           localStorage.removeItem("token");
//           setTimeout(() => navigate('/'), 2000);
//           setLoading(false);
//           return;
//         }

//         if (result.success) {
//           console.log("Success! Number of withdrawals:", result.data?.length || 0);
          
//           if (result.data && result.data.length > 0) {
//             const mapped = result.data.map((item) => ({
//               id: item.id,
//               date: formatDate(item.created_at),
//               amount: `${parseFloat(item.withdrawal_amount).toFixed(0)} ฿`,
//               method: mapMethod(item.method),
//               transactionId: `#${item.id}${item.method === "BANK" ? "BANK" : "XO"}`,
//               note: item.note || getDefaultNote(item.status),
//               status: mapStatus(item.status, t),
//               rawData: item
//             }));
//             console.log("Mapped data sample:", mapped[0]);
//             setWithdrawalData(mapped);
//           } else {
//             console.log("No withdrawal data found");
//             setWithdrawalData([]);
//           }
//         } else {
//           console.log("API returned success=false:", result.message);
//           setError(result.message || t.errorGeneric);
//         }
//       } catch (err) {
//         console.error("=== Error Details ===");
//         console.error("Error object:", err);
//         console.error("Error response:", err.response);
//         console.error("Error message:", err.message);
        
//         if (err.response?.status === 401) {
//           setError(t.errorAuth);
//           localStorage.removeItem("token");
//           setTimeout(() => navigate('/'), 2000);
//         } else if (err.response?.data?.loginRequired) {
//           setError(t.errorLogin);
//           localStorage.removeItem("token");
//           setTimeout(() => navigate('/'), 2000);
//         } else {
//           setError(err.response?.data?.message || t.errorGeneric);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWithdrawals();
//   }, [navigate, t, language]); // Re-run if t changes due to language

//   // StatusBadge component using translated status text
//   const StatusBadge = ({ status }) => {
//     switch (status) {
//       case t.status.completed:
//         return (
//           <div className="status-badge completed">
//             <CheckCircle2 size={16} />
//             <span>{t.status.completed}</span>
//           </div>
//         );
//       case t.status.rejected:
//         return (
//           <div className="status-badge rejected">
//             <XCircle size={16} />
//             <span>{t.status.rejected}</span>
//           </div>
//         );
//       case t.status.pending:
//         return (
//           <div className="status-badge pending">
//             <Hourglass size={16} />
//             <span>{t.status.pending}</span>
//           </div>
//         );
//       default:
//         return (
//           <div className="status-badge">
//             <AlertCircle size={16} />
//             <span>{status || t.status.unknown}</span>
//           </div>
//         );
//     }
//   };

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

//         <main className="withdrawal-content">
//           {/* Note Section */}
//           <div className="note-section">
//             <h6 className="note-title">{t.noteTitle}</h6>
//             <div className="d-flex align-items-center gap-1">
//               <p className="note-text m-0 p-0 mt-1">{t.noteText}</p>
//               <img
//                 src={Marks}
//                 className="img-fluid"
//                 style={{ width: "25px" }}
//                 alt="Note"
//               />
//             </div>
//           </div>

//           {/* Table */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="withdrawal-table-container"
//           >
//             <div className="table-responsive">
//               <table className="withdrawal-table">
//                 <thead>
//                   <tr>
//                     <th>{t.tableHeaders.date}</th>
//                     <th>{t.tableHeaders.amount}</th>
//                     <th>{t.tableHeaders.method}</th>
//                     <th>{t.tableHeaders.transactionId}</th>
//                     <th>{t.tableHeaders.note}</th>
//                     <th>{t.tableHeaders.status}</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {/* Loading State */}
//                   {loading && (
//                     <tr>
//                       <td colSpan="6" className="text-center py-4">
//                         <div
//                           className="spinner-border text-primary"
//                           role="status"
//                           style={{ color: '#e9527a' }}
//                         >
//                           <span className="visually-hidden">Loading...</span>
//                         </div>
//                         <p className="mt-2 mb-0">{t.loading}</p>
//                       </td>
//                     </tr>
//                   )}

//                   {/* Error State */}
//                   {!loading && error && (
//                     <tr>
//                       <td colSpan="6" className="text-center py-4">
//                         <AlertCircle size={48} className="text-danger mb-3" />
//                         <p className="text-danger mb-3">{error}</p>
//                         <button
//                           onClick={() => window.location.reload()}
//                           className="btn btn-primary mt-2"
//                           style={{ backgroundColor: '#e9527a', border: 'none' }}
//                         >
//                           {t.errorRetry}
//                         </button>
//                       </td>
//                     </tr>
//                   )}

//                   {/* Empty State */}
//                   {!loading && !error && withdrawalData.length === 0 && (
//                     <tr>
//                       <td colSpan="6" className="text-center py-4">
//                         <AlertCircle size={48} className="text-muted mb-3" style={{ opacity: 0.5 }} />
//                         <p className="text-muted">{t.emptyTitle}</p>
//                         <p className="text-muted small">{t.emptySubtext}</p>
//                       </td>
//                     </tr>
//                   )}

//                   {/* Data Rows */}
//                   {!loading &&
//                     !error &&
//                     withdrawalData.map((row, index) => (
//                       <tr key={row.id || index}>
//                         <td>{row.date}</td>
//                         <td className="fw-bold">{row.amount}</td>
//                         <td>{row.method}</td>
//                         <td>{row.transactionId}</td>
//                         <td>{row.note}</td>
//                         <td>
//                           <StatusBadge status={row.status} />
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default WithdrawalHistory;
















// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/WithdrawalHistory.css";
// import { Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const WithdrawalHistory = () => {
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
//                     <th>Date / Time</th>
//                     <th>Legal Name</th>
//                     <th>Account No.</th>
//                     <th>Method</th>
//                     <th>Bank Name</th>
//                     <th>Withdrawal Amount</th>
//                     <th>Tax</th>
//                     <th>Net Amount</th>
//                     <th>Status</th>
                    
                    
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
//                         <td>{row.legalName}</td>
//                         <td>{row.accountNo}</td>
//                         <td>{row.method}</td>
//                         <td>{row.bankName}</td>
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

// export default WithdrawalHistory;


















// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/WithdrawalHistory.css";
// import { Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const WithdrawalHistory = () => {
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

//         // Transform API data – now including new response fields
//         const transformedData = data.data.map((withdrawal) => {
//           // Use legal_tax_fees_percentage from new response (fallback to platform_fees_percentage for backward compatibility)
//           const feesPercentage = parseFloat(withdrawal.legal_tax_fees_percentage || withdrawal.platform_fees_percentage || 0);
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
//                     <th>Date / Time</th>
//                     <th>Legal Name</th>
//                     <th>Account No.</th>
//                     <th>Method</th>
//                     <th>Bank Name</th>
//                     <th>Withdrawal Amount</th>
//                     <th>Tax</th>
//                     <th>Net Amount</th>
//                     <th>Status</th>
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
//                         <td>{row.legalName}</td>
//                         <td>{row.accountNo}</td>
//                         <td>{row.method}</td>
//                         <td>{row.bankName}</td>
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
//                                 : row.status === "REJECTED"
//                                 ? "bg-danger"
//                                 : "bg-secondary"
//                             }`}
//                           >
//                             {row.status}
//                           </span>
//                         </td>
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

// export default WithdrawalHistory;



















// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/WithdrawalHistory.css";
// import { Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const WithdrawalHistory = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [withdrawalData, setWithdrawalData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchWithdrawalHistory();
//   }, []);

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

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

//         // Transform API data – now including new response fields
//         const transformedData = data.data.map((withdrawal) => {
//           // Use legal_tax_fees_percentage from new response (fallback to platform_fees_percentage for backward compatibility)
//           const feesPercentage = parseFloat(
//             withdrawal.legal_tax_fees_percentage ||
//               withdrawal.platform_fees_percentage ||
//               0,
//           );
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
//             "An error occurred while fetching withdrawal history",
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
//           {/* {isSidebarOpen ? <X /> : <Menu />} */}
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
//             onClick={handleCloseSidebar}
//           />
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
//           onClick={handleCloseSidebar}
//         />
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
//                     <th>Date / Time</th>
//                     <th>Legal Name</th>
//                     <th>Account No.</th>
//                     <th>Method</th>
//                     <th>Bank Name</th>
//                     <th>Withdrawal Amount</th>
//                     <th>Tax</th>
//                     <th>Net Amount</th>
//                     <th>Status</th>
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
//                         <td>{row.legalName}</td>
//                         <td>{row.accountNo}</td>
//                         <td>{row.method}</td>
//                         <td>{row.bankName}</td>
//                         <td>{row.withdrawalAmount}</td>
//                         <td>{row.fees}</td>
//                         <td>{row.netAmount}</td>
//                         <td>
//                           <span
//                             className={`badge ${
//                               row.status === "DONE"
//                                 ? "bg-success"
//                                 : row.status === "PENDING"
//                                   ? "bg-warning"
//                                   : row.status === "REJECTED"
//                                     ? "bg-danger"
//                                     : "bg-secondary"
//                             }`}
//                           >
//                             {row.status}
//                           </span>
//                         </td>
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

// export default WithdrawalHistory;


















// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/WithdrawalHistory.css";
// import { Menu, X, AlertCircle } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const WithdrawalHistory = () => {
//   const { t } = useTranslation();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [withdrawalData, setWithdrawalData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchWithdrawalHistory();
//   }, []);

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   const fetchWithdrawalHistory = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("Token from localStorage:", token);

//       if (!token) {
//         console.log("No token found, redirecting to login");
//         setError(t("withdrawalHistory.errorSession"));
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
//         setError(t("withdrawalHistory.errorSession"));
//         localStorage.removeItem("token");
//         setTimeout(() => navigate("/"), 2000);
//         setLoading(false);
//         return;
//       }

//       if (data.success && data.data) {
//         console.log("Withdrawal data received:", data.data);

//         // Transform API data – including payout_details
//         const transformedData = data.data.map((withdrawal) => {
//           const feesPercentage = parseFloat(
//             withdrawal.legal_tax_fees_percentage ||
//               withdrawal.platform_fees_percentage ||
//               0,
//           );
//           const withdrawalAmount = parseFloat(withdrawal.withdrawal_amount);
//           const feesAmount = (withdrawalAmount * feesPercentage) / 100;
//           const netAmount = withdrawalAmount - feesAmount;

//           const payout = withdrawal.payout_details || {};

//           return {
//             id: withdrawal.id,
//             date: withdrawal.created_at,
//             method: withdrawal.method,
//             withdrawalAmount: `${withdrawalAmount.toFixed(2)} ${t("thb")}`,
//             fees: `${feesAmount.toFixed(2)} ${t("thb")} (${feesPercentage}%)`,
//             netAmount: `${netAmount.toFixed(2)} ${t("thb")}`,
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
//         setError(data.message || t("withdrawalHistory.errorFetch"));
//       }
//     } catch (err) {
//       console.error("Error fetching withdrawal history:", err);
//       console.error("Error response:", err.response);

//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         setError(t("withdrawalHistory.errorSession"));
//         localStorage.removeItem("token");
//         setTimeout(() => navigate("/"), 2000);
//       } else {
//         setError(
//           err.response?.data?.message || t("withdrawalHistory.errorFetch")
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
//           {/* {isSidebarOpen ? <X /> : <Menu />} */}
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
//                   <span className="visually-hidden">{t("withdrawalHistory.loading")}</span>
//                 </div>
//                 <p className="mt-3 text-muted">{t("withdrawalHistory.loading")}</p>
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
//                   {t("withdrawalHistory.tryAgain")}
//                 </button>
//               </div>
//             </motion.div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   // Main Render – Table with localized headers
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
//                     <th>{t("withdrawalHistory.dateTime")}</th>
//                     <th>{t("withdrawalHistory.legalName")}</th>
//                     <th>{t("withdrawalHistory.accountNo")}</th>
//                     <th>{t("withdrawalHistory.method")}</th>
//                     <th>{t("withdrawalHistory.bankName")}</th>
//                     <th>{t("withdrawalHistory.withdrawalAmount")}</th>
//                     <th>{t("withdrawalHistory.tax")}</th>
//                     <th>{t("withdrawalHistory.netAmount")}</th>
//                     <th>{t("withdrawalHistory.status")}</th>
//                     <th>{t("withdrawalHistory.note")}</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {withdrawalData.length === 0 ? (
//                     <tr>
//                       <td colSpan="10" className="text-center py-5">
//                         <p className="text-muted mb-0">
//                           {t("withdrawalHistory.noData")}
//                         </p>
//                       </td>
//                     </tr>
//                   ) : (
//                     withdrawalData.map((row, index) => (
//                       <tr key={row.id || index}>
//                         <td>{row.date}</td>
//                         <td>{row.legalName}</td>
//                         <td>{row.accountNo}</td>
//                         <td>{row.method}</td>
//                         <td>{row.bankName}</td>
//                         <td>{row.withdrawalAmount}</td>
//                         <td>{row.fees}</td>
//                         <td>{row.netAmount}</td>
//                         <td>
//                           <span
//                             className={`badge ${
//                               row.status === "DONE"
//                                 ? "bg-success"
//                                 : row.status === "PENDING"
//                                   ? "bg-warning"
//                                   : row.status === "REJECTED"
//                                     ? "bg-danger"
//                                     : "bg-secondary"
//                             }`}
//                           >
//                             {row.status}
//                           </span>
//                         </td>
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

// export default WithdrawalHistory;



























import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../css/WithdrawalHistory.css";
import { Menu, X, AlertCircle } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WithdrawalHistory = () => {
  const { t, i18n } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [withdrawalData, setWithdrawalData] = useState([]);
  const [rawApiData, setRawApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const STORAGE_KEY = "withdrawal_history_raw_data";
  const STORAGE_TIMESTAMP = "withdrawal_history_timestamp";

  useEffect(() => {
    loadFromStorage();
    fetchWithdrawalHistory();
  }, []);

  useEffect(() => {
    if (rawApiData.length > 0) {
      const converted = rawApiData.map((item) => transformApiData(item));
      setWithdrawalData(converted);
    }
  }, [i18n.language]);

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const saveToStorage = (data) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      localStorage.setItem(STORAGE_TIMESTAMP, Date.now().toString());
    } catch (err) {
      console.error("Error saving to localStorage:", err);
    }
  };

  const loadFromStorage = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setRawApiData(parsed);
        const converted = parsed.map((item) => transformApiData(item));
        setWithdrawalData(converted);
      }
    } catch (err) {
      console.error("Error loading from localStorage:", err);
    }
  };

  const formatThaiDate = (dateString) => {
    if (!dateString) return "—";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    const isThai = i18n.language === "th";
    if (!isThai) {
      return date.toLocaleString("en-GB", {
        day: "2-digit", month: "2-digit", year: "numeric",
        hour: "2-digit", minute: "2-digit", hour12: false,
      });
    }
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const buddhistYear = date.getFullYear() + 543;
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${buddhistYear} ${hours}:${minutes}`;
  };

  // ==========================================
  // TIS-620 to UTF-8 Decoder (For Mojibake Fix)
  // ==========================================
  
  const TIS620_TO_UNICODE = {
    0x80: 0x20AC, 0x85: 0x2026, 0x91: 0x2018, 0x92: 0x2019,
    0x93: 0x201C, 0x94: 0x201D, 0x95: 0x2022, 0x96: 0x2013,
    0x97: 0x2014, 0xA0: 0x00A0, 0xA1: 0x0E01, 0xA2: 0x0E02,
    0xA3: 0x0E03, 0xA4: 0x0E04, 0xA5: 0x0E05, 0xA6: 0x0E06,
    0xA7: 0x0E07, 0xA8: 0x0E08, 0xA9: 0x0E09, 0xAA: 0x0E0A,
    0xAB: 0x0E0B, 0xAC: 0x0E0C, 0xAD: 0x0E0D, 0xAE: 0x0E0E,
    0xAF: 0x0E0F, 0xB0: 0x0E10, 0xB1: 0x0E11, 0xB2: 0x0E12,
    0xB3: 0x0E13, 0xB4: 0x0E14, 0xB5: 0x0E15, 0xB6: 0x0E16,
    0xB7: 0x0E17, 0xB8: 0x0E18, 0xB9: 0x0E19, 0xBA: 0x0E1A,
    0xBB: 0x0E1B, 0xBC: 0x0E1C, 0xBD: 0x0E1D, 0xBE: 0x0E1E,
    0xBF: 0x0E1F, 0xC0: 0x0E20, 0xC1: 0x0E21, 0xC2: 0x0E22,
    0xC3: 0x0E23, 0xC4: 0x0E24, 0xC5: 0x0E25, 0xC6: 0x0E26,
    0xC7: 0x0E27, 0xC8: 0x0E28, 0xC9: 0x0E29, 0xCA: 0x0E2A,
    0xCB: 0x0E2B, 0xCC: 0x0E2C, 0xCD: 0x0E2D, 0xCE: 0x0E2E,
    0xCF: 0x0E2F, 0xD0: 0x0E30, 0xD1: 0x0E31, 0xD2: 0x0E32,
    0xD3: 0x0E33, 0xD4: 0x0E34, 0xD5: 0x0E35, 0xD6: 0x0E36,
    0xD7: 0x0E37, 0xD8: 0x0E38, 0xD9: 0x0E39, 0xDA: 0x0E3A,
    0xDF: 0x0E3F, 0xE0: 0x0E40, 0xE1: 0x0E41, 0xE2: 0x0E42,
    0xE3: 0x0E43, 0xE4: 0x0E44, 0xE5: 0x0E45, 0xE6: 0x0E46,
    0xE7: 0x0E47, 0xE8: 0x0E48, 0xE9: 0x0E49, 0xEA: 0x0E4A,
    0xEB: 0x0E4B, 0xEC: 0x0E4C, 0xED: 0x0E4D, 0xEE: 0x0E4E,
    0xEF: 0x0E4F, 0xF0: 0x0E50, 0xF1: 0x0E51, 0xF2: 0x0E52,
    0xF3: 0x0E53, 0xF4: 0x0E54, 0xF5: 0x0E55, 0xF6: 0x0E56,
    0xF7: 0x0E57, 0xF8: 0x0E58, 0xF9: 0x0E59, 0xFA: 0x0E5A,
    0xFB: 0x0E5B,
  };

  const decodeTIS620 = (text) => {
    if (!text) return text;
    const hasMojibake = /à[¹¸¸¹º»¼½¾¿]|[\u00E0-\u00E3]/.test(text);
    if (!hasMojibake && /[\u0E00-\u0E7F]/.test(text)) {
      return text;
    }
    try {
      const bytes = [];
      for (let i = 0; i < text.length; i++) {
        bytes.push(text.charCodeAt(i) & 0xFF);
      }
      let result = '';
      for (let i = 0; i < bytes.length; i++) {
        const byte = bytes[i];
        if (byte >= 0x80 && TIS620_TO_UNICODE[byte]) {
          result += String.fromCharCode(TIS620_TO_UNICODE[byte]);
        } else {
          result += String.fromCharCode(byte);
        }
      }
      return result;
    } catch (e) {
      console.error("TIS-620 decode error:", e);
      return text;
    }
  };

  const fixThaiText = (text) => {
    if (!text || text === "—") return "—";
    const decoded = decodeTIS620(text);
    return decoded || text;
  };

  // ==========================================
  // BANK NAMES - Using i18n Translation Keys
  // ==========================================
  
  const BANK_NAME_KEYS = [
    "Bangkok Bank",
    "Kasikorn Bank",
    "KASIKORN BANK",
    "Siam Commercial Bank",
    "SCB",
    "Krung Thai Bank",
    "Krungthai Bank",
    "Bank of Ayudhya",
    "Krungsri",
    "Thanachart Bank",
    "TMB Bank",
    "TMBThanachart Bank",
    "ttb",
    "CIMB Thai Bank",
    "Standard Chartered Bank",
    "Hongkong and Shanghai Banking Corporation",
    "HSBC",
  ];

  const translateBankName = (bankName) => {
    if (!bankName || bankName === "—") return "—";
    
    const cleanBankName = fixThaiText(bankName);
    const isThai = i18n.language === "th";
    
    // If already Thai and language is Thai, return as-is
    if (isThai && /[\u0E00-\u0E7F]/.test(cleanBankName)) {
      return cleanBankName;
    }

    // Try i18n translation first
    const i18nKey = `bankNames.${cleanBankName.replace(/\s+/g, "_")}`;
    const translated = t(i18nKey, { defaultValue: "" });
    
    if (translated && translated !== i18nKey) {
      return isThai ? translated : cleanBankName;
    }

    // Fallback: check known bank names
    for (const key of BANK_NAME_KEYS) {
      if (key.toLowerCase() === cleanBankName.toLowerCase()) {
        const fallbackTranslated = t(`bankNames.${key.replace(/\s+/g, "_")}`, { defaultValue: cleanBankName });
        return isThai ? fallbackTranslated : cleanBankName;
      }
    }

    return cleanBankName;
  };

  // ==========================================
  // NOTES - Using i18n Translation Keys
  // ==========================================
  
  const NOTE_KEYS = [
    "Bank server down",
    "Incorrect bank account details",
    "Name mismatch with bank account",
    "Suspicious activity",
    "Withdrawal is in process",
    "Withdrawal is completed",
    "Processing",
    "Processed",
    "Completed",
    "Pending verification",
    "Verified",
    "Under review",
    "Rejected",
    "Approved",
    "Auto-approved",
    "Manual review required",
    "Waiting for bank confirmation",
    "Bank transfer initiated",
    "Funds transferred",
    "Withdrawal request received",
    "Queued for processing",
    "Success",
    "Failed",
    "Pending",
    "Cancelled",
    "Refunded",
    "On hold",
    "In progress",
    "Done",
    "DONE",
    "PENDING",
    "COMPLETED",
    "APPROVED",
    "REJECTED",
    "FAILED",
    "CANCELLED",
  ];

  const translateNote = (note) => {
    if (!note || note === "—") return "—";
    
    const cleanNote = fixThaiText(note);
    const isThai = i18n.language === "th";
    
    if (!isThai) return cleanNote;

    // If already Thai text, return as-is
    if (/[\u0E00-\u0E7F]/.test(cleanNote)) {
      return cleanNote;
    }

    // Try i18n translation first
    const normalizedKey = cleanNote.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "");
    const i18nKey = `notes.${normalizedKey}`;
    const translated = t(i18nKey, { defaultValue: "" });
    
    if (translated && translated !== i18nKey) {
      return translated;
    }

    // Fallback: check known notes
    for (const key of NOTE_KEYS) {
      if (key.toLowerCase() === cleanNote.toLowerCase()) {
        const fallbackKey = `notes.${key.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "")}`;
        const fallbackTranslated = t(fallbackKey, { defaultValue: cleanNote });
        return fallbackTranslated;
      }
    }

    return cleanNote;
  };

  // ==========================================
  // STATUS - Using i18n Translation Keys
  // ==========================================
  
  const STATUS_KEYS = [
    "DONE",
    "COMPLETED",
    "APPROVED",
    "PENDING",
    "PROCESSING",
    "UNDER_REVIEW",
    "REJECTED",
    "FAILED",
    "CANCELLED",
  ];

  const translateApiValue = (value, type) => {
    if (!value || value === "—") return "—";
    const cleanValue = fixThaiText(value);
    const isThai = i18n.language === "th";
    
    if (!isThai) return cleanValue;

    // If already Thai, return as-is
    if (/[\u0E00-\u0E7F]/.test(cleanValue)) {
      return cleanValue;
    }

    // Try i18n translation
    const i18nKey = `status.${cleanValue}`;
    const translated = t(i18nKey, { defaultValue: "" });
    
    if (translated && translated !== i18nKey) {
      return translated;
    }

    // Fallback for known statuses
    if (type === "status") {
      for (const key of STATUS_KEYS) {
        if (key === cleanValue) {
          return t(`status.${key}`, { defaultValue: cleanValue });
        }
      }
    }

    // Generic API value translation
    const genericKey = `apiValues.${type}.${cleanValue.toLowerCase()}`;
    const genericTranslated = t(genericKey, { defaultValue: cleanValue });
    return genericTranslated !== genericKey ? genericTranslated : cleanValue;
  };

  // ==========================================
  // MAIN TRANSFORM FUNCTION
  // ==========================================
  
  const transformApiData = (withdrawal) => {
    const feesPercentage = parseFloat(
      withdrawal.legal_tax_fees_percentage || withdrawal.platform_fees_percentage || 0,
    );
    const withdrawalAmount = parseFloat(withdrawal.withdrawal_amount);
    const feesAmount = (withdrawalAmount * feesPercentage) / 100;
    const netAmount = withdrawalAmount - feesAmount;
    const payout = withdrawal.payout_details || {};

    return {
      id: withdrawal.id,
      date: formatThaiDate(withdrawal.created_at),
      rawDate: withdrawal.created_at,
      method: translateApiValue(withdrawal.method, "method"),
      rawMethod: withdrawal.method,
      withdrawalAmount: `${withdrawalAmount.toFixed(2)} ${t("currency.thb")}`,
      fees: `${feesAmount.toFixed(2)} ${t("currency.thb")} (${feesPercentage}%)`,
      netAmount: `${netAmount.toFixed(2)} ${t("currency.thb")}`,
      status: withdrawal.status,
      statusDisplay: translateApiValue(withdrawal.status, "status"),
      rawStatus: withdrawal.status,
      note: translateNote(withdrawal.note),
      rawNote: withdrawal.note,
      bankName: translateBankName(payout.bank_name || withdrawal.bank_name),
      rawBankName: payout.bank_name || withdrawal.bank_name,
      legalName: payout.legal_name || "—",
      accountNo: payout.bank_account_no || "—",
      documentType: translateApiValue(payout.document_type, "documentType"),
      rawDocumentType: payout.document_type,
    };
  };

  // ==========================================
  // FETCH DATA WITH ENCODING FIX
  // ==========================================
  
  const fetchWithdrawalHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError(t("withdrawalHistory.errorSession"));
        setLoading(false);
        setTimeout(() => navigate("/"), 2000);
        return;
      }

      const apiUrl = "https://sagarxo.app/web-api/customer/withdrawals";
      
      const response = await axios.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization: `${token}`,
        },
        withCredentials: true,
        responseType: 'arraybuffer',
      });

      const decoder = new TextDecoder('utf-8');
      const text = decoder.decode(response.data);
      let data;
      
      try {
        data = JSON.parse(text);
      } catch (e) {
        const tisDecoder = new TextDecoder('tis-620');
        const tisText = tisDecoder.decode(response.data);
        data = JSON.parse(tisText);
      }

      if (data.loginRequired) {
        setError(t("withdrawalHistory.errorSession"));
        localStorage.removeItem("token");
        setTimeout(() => navigate("/"), 2000);
        setLoading(false);
        return;
      }

      if (data.success && data.data) {
        data.data.forEach((item, index) => {
          const payout = item.payout_details || {};
          console.log(`=== Item ${index} ===`);
          console.log("Raw bank_name:", payout.bank_name || item.bank_name);
          console.log("Decoded bank_name:", fixThaiText(payout.bank_name || item.bank_name));
          console.log("Raw note:", item.note);
          console.log("Decoded note:", fixThaiText(item.note));
        });

        setRawApiData(data.data);
        saveToStorage(data.data);
        const transformedData = data.data.map((item) => transformApiData(item));
        setWithdrawalData(transformedData);
      } else if (data.success && (!data.data || data.data.length === 0)) {
        setWithdrawalData([]);
        setRawApiData([]);
        saveToStorage([]);
      } else {
        setError(data.message || t("withdrawalHistory.errorFetch"));
      }
    } catch (err) {
      console.error("Error fetching withdrawal history:", err);
      if (err.response?.status === 401 || err.response?.data?.loginRequired) {
        setError(t("withdrawalHistory.errorSession"));
        localStorage.removeItem("token");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setError(err.response?.data?.message || t("withdrawalHistory.errorFetch"));
      }
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "DONE": case "COMPLETED": case "APPROVED": return "bg-success";
      case "PENDING": case "PROCESSING": case "UNDER_REVIEW": return "bg-warning";
      case "REJECTED": case "FAILED": case "CANCELLED": return "bg-danger";
      default: return "bg-secondary";
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="main-container">
        <button className="mobile-toggle d-none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}></button>
        {isSidebarOpen && <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />}
        <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
        <div className="main-wrapper">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <main className="video-history-content">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="video-table-container">
              <div className="text-center py-5">
                <div className="spinner-border" role="status" style={{ color: "#e9527a" }}>
                  <span className="visually-hidden">{t("withdrawalHistory.loading")}</span>
                </div>
                <p className="mt-3 text-muted">{t("withdrawalHistory.loading")}</p>
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
        <button className="mobile-toggle d-none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
        {isSidebarOpen && <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />}
        <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
        <div className="main-wrapper">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <main className="video-history-content">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="video-table-container">
              <div className="text-center py-5">
                <AlertCircle size={48} className="text-danger mb-3" />
                <p className="text-danger mb-3">{error}</p>
                <button onClick={fetchWithdrawalHistory} className="btn btn-primary" style={{ backgroundColor: "#e9527a", border: "none", padding: "8px 24px" }}>
                  {t("withdrawalHistory.tryAgain")}
                </button>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    );
  }

  // Main Render
  return (
    <div className="main-container">
      <button className="mobile-toggle d-none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? <X /> : <Menu />}
      </button>
      {isSidebarOpen && <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />}
      <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
      <div className="main-wrapper">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="video-history-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="video-table-container">
            <div className="table-responsive">
              <table className="video-table">
                <thead>
                  <tr>
                    <th>{t("withdrawalHistory.dateTime")}</th>
                    <th>{t("withdrawalHistory.legalName")}</th>
                    <th>{t("withdrawalHistory.accountNo")}</th>
                    <th>{t("withdrawalHistory.method")}</th>
                    <th>{t("withdrawalHistory.bankName")}</th>
                    <th>{t("withdrawalHistory.withdrawalAmount")}</th>
                    <th>{t("withdrawalHistory.tax")}</th>
                    <th>{t("withdrawalHistory.netAmount")}</th>
                    <th>{t("withdrawalHistory.status")}</th>
                    <th>{t("withdrawalHistory.note")}</th>
                  </tr>
                </thead>
                <tbody>
                  {withdrawalData.length === 0 ? (
                    <tr>
                      <td colSpan="10" className="text-center py-5">
                        <p className="text-muted mb-0">{t("withdrawalHistory.noData")}</p>
                      </td>
                    </tr>
                  ) : (
                    withdrawalData.map((row, index) => (
                      <tr key={row.id || index}>
                        <td>{row.date}</td>
                        <td>{row.legalName}</td>
                        <td>{row.accountNo}</td>
                        <td>{row.method}</td>
                        <td>{row.bankName}</td>
                        <td>{row.withdrawalAmount}</td>
                        <td>{row.fees}</td>
                        <td>{row.netAmount}</td>
                        <td>
                          <span className={`badge ${getStatusBadgeClass(row.status)}`}>
                            {row.statusDisplay}
                          </span>
                        </td>
                        <td>{row.note}</td>
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

export default WithdrawalHistory;