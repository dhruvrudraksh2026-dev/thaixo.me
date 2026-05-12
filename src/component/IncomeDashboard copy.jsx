// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowLeft, Bell } from 'lucide-react';
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart
// } from 'recharts';
// import Sidebar  from './Sidebar';
// import '../css/IncomeDashboard.css';
// import Header  from './Header';

// // --- Data ---
// const dailyData = [
//   { name: 'Mon', value: 38 },
//   { name: 'Tue', value: 40 },
//   { name: 'Wed', value: 48 },
//   { name: 'Thu', value: 50 },
//   { name: 'Fri', value: 60 },
//   { name: 'Sat', value: 65 },
//   { name: 'Sun', value: 78 },
// ];

// const monthlyData = [
//   { name: 'Jan', value: 200 },
//   { name: 'Feb', value: 400 },
//   { name: 'Mar', value: 1000 },
//   { name: 'Apr', value: 800 },
//   { name: 'May', value: 900 },
//   { name: 'Jun', value: 1200 },
//   { name: 'Jul', value: 2000 },
//   { name: 'Aug', value: 3600 },
//   { name: 'Sep', value: 4500 },
//   { name: 'Oct', value: 4000 },
//   { name: 'Nov', value: 8800 },
//   { name: 'Dec', value: 9999 },
// ];

// const dailyTable = [
//   { date: '18/11/2025', income: '78 THB' },
//   { date: '17/11/2025', income: '65 THB' },
//   { date: '16/11/2025', income: '60 THB' },
//   { date: '15/11/2025', income: '50 THB' },
//   { date: '14/11/2025', income: '48 THB' },
//   { date: '13/11/2025', income: '40 THB' },
//   { date: '12/11/2025', income: '38 THB' },
// ];

// const monthlyTable = [
//   { date: 'January', income: '200 THB' },
//   { date: 'February', income: '400 THB' },
//   { date: 'March', income: '1,000 THB' },
//   { date: 'April', income: '800 THB' },
//   { date: 'May', income: '900 THB' },
//   { date: 'June', income: '1,200 THB' },
//   { date: 'July', income: '2,000 THB' },
//   { date: 'August', income: '3,600 THB' },
//   { date: 'September', income: '4,500 THB' },
//   { date: 'October', income: '4,000 THB' },
//   { date: 'November', income: '8,800 THB' },
//   { date: 'December', income: '9,999 THB' },
// ];

// // --- Sub-Components ---

// const DailySeeMore = ({ onBack }) => (
//   <motion.div
//     initial={{ opacity: 0, x: 100 }}
//     animate={{ opacity: 1, x: 0 }}
//     exit={{ opacity: 0, x: -100 }}
//     className="see-more-page"
//   >
//     <button className="back-btn" onClick={onBack}>
//       <ArrowLeft size={20} />
//       <span>Back to Earnings</span>
//     </button>

//     <h1 className="see-more-title">Daily Income Details</h1>

//     <div className="card border-0 shadow-sm rounded-4 p-4">
//       <div className="table-responsive">
//         <table className="table table-hover align-middle">
//           <thead className="table-light">
//             <tr>
//               <th>Date</th>
//               <th>Income</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[...Array(15)].map((_, i) => (
//               <tr key={i}>
//                 <td>{18 - i > 0 ? `${18 - i}/11/2026` : `${30 + (18 - i)}/10/2026`}</td>
//                 <td className="fw-bold text-success">฿ {(Math.random() * 100).toFixed(2)}</td>
//                 <td><span className="badge bg-success-subtle text-success rounded-pill px-3">Received</span></td>
//                 <td><button className="btn btn-sm btn-outline-secondary rounded-pill">View Details</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </motion.div>
// );

// const EarningsContent = ({ onSeeMore }) => {
//   // const [incomeType, setIncomeType] = useState<'daily' | 'monthly'>('daily');
//   const [incomeType, setIncomeType] = useState('daily');

//   const data = incomeType === 'daily' ? dailyData : monthlyData;
//   const tableData = incomeType === 'daily' ? dailyTable : monthlyTable;
//   const total = incomeType === 'daily' ? '78.500.00' : '20.700.00';
//   const label = incomeType === 'daily' ? 'Daily Income' : 'Monthly Income';
//   const dateLabel = incomeType === 'daily' ? '18 Nov 2026' : '2026';

//   return (
//     <div className="earnings-container">
//       <div className="income-toggle-container">
//         <div className="income-toggle-group">
//           <button
//             className={`income-toggle-btn ${incomeType === 'daily' ? 'active' : ''}`}
//             onClick={() => setIncomeType('daily')}
//           >
//             Daily Income
//           </button>
//           <button
//             className={`income-toggle-btn ${incomeType === 'monthly' ? 'active' : ''}`}
//             onClick={() => setIncomeType('monthly')}
//           >
//             Monthly Income
//           </button>
//         </div>
//       </div>

//       <motion.div
//         key={incomeType}
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.3 }}
//         className="earnings-card"
//       >
//         <div className="earnings-header">
//           <div>
//             <h2 className="total-amount">
//               <span className="currency-symbol">฿</span> {total}
//             </h2>
//             <p className="income-label">{label}</p>
//           </div>
//           <div className="current-date">{dateLabel}</div>
//         </div>

//         <div className="earnings-body">
//           <div className="chart-section">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart data={data}>
//                 <defs>
//                   <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3}/>
//                     <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
//                 <XAxis
//                   dataKey="name"
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{ fill: 'white', fontSize: 12 }}
//                   dy={10}
//                 />
//                 <YAxis hide />
//                 <Tooltip
//                   contentStyle={{ backgroundColor: '#e9527a', border: '1px solid white', borderRadius: '10px' }}
//                   itemStyle={{ color: 'white' }}
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="value"
//                   stroke="#ffffff"
//                   strokeWidth={3}
//                   fillOpacity={1}
//                   fill="url(#colorValue)"
//                   dot={{ r: 6, fill: 'white', strokeWidth: 2, stroke: '#e9527a' }}
//                   activeDot={{ r: 8, fill: 'white' }}
//                   label={{ position: 'top', fill: 'white', fontSize: 14, fontWeight: 'bold', offset: 10 }}
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="table-section">
//             <table className="income-table">
//               <thead>
//                 <tr>
//                   <th>Date</th>
//                   <th>Income</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tableData.map((row, i) => (
//                   <tr key={i}>
//                     <td>{row.date}</td>
//                     <td className="fw-bold">{row.income}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="see-more-container">
//           <button className="see-more-btn" onClick={onSeeMore}>
//             See More
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export const IncomeDashboard = () => {
//   const [activeTab, setActiveTab] = useState('earnings');
//   const [showSeeMore, setShowSeeMore] = useState(false);

//   return (
//     <div className="main-container">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

//       <AnimatePresence mode="wait">
//         {activeTab === 'earnings' ? (
//           <div className="main-wrapper">
//             <Header />
//             <main className="p-0">
//               <AnimatePresence mode="wait">
//                 {showSeeMore ? (
//                   <DailySeeMore key="see-more" onBack={() => setShowSeeMore(false)} />
//                 ) : (
//                   <motion.div
//                     key="earnings-content"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <EarningsContent onSeeMore={() => setShowSeeMore(true)} />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </main>
//           </div>
//         ) : (
//           <div className="main-wrapper">
//             <Header />
//             <div className="p-5 text-center text-secondary">
//               <div className="display-1 mb-4">🚧</div>
//               <h2 className="h3 fw-bold text-capitalize">{activeTab.replace('-', ' ')} Page</h2>
//               <p>This section is currently under development.</p>
//               <button className="btn btn-outline-primary mt-3" onClick={() => setActiveTab('earnings')}>
//                 Go to Earnings
//               </button>
//             </div>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default IncomeDashboard;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, Bell, Menu, X } from "lucide-react";
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
// } from "recharts";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/IncomeDashboard.css";
// // import '../css/Earnings.css';
// // import '../css/Milestone.css';

// // --- Data ---
// const dailyData = [
//   { name: "Mon", value: 38 },
//   { name: "Tue", value: 40 },
//   { name: "Wed", value: 48 },
//   { name: "Thu", value: 50 },
//   { name: "Fri", value: 60 },
//   { name: "Sat", value: 65 },
//   { name: "Sun", value: 78 },
// ];

// const monthlyData = [
//   { name: "Jan", value: 200 },
//   { name: "Feb", value: 400 },
//   { name: "Mar", value: 1000 },
//   { name: "Apr", value: 800 },
//   { name: "May", value: 900 },
//   { name: "Jun", value: 1200 },
//   { name: "Jul", value: 2000 },
//   { name: "Aug", value: 3600 },
//   { name: "Sep", value: 4500 },
//   { name: "Oct", value: 4000 },
//   { name: "Nov", value: 8800 },
//   { name: "Dec", value: 9999 },
// ];

// const dailyTable = [
//   { date: "18/11/2025", income: "78 THB" },
//   { date: "17/11/2025", income: "65 THB" },
//   { date: "16/11/2025", income: "60 THB" },
//   { date: "15/11/2025", income: "50 THB" },
//   { date: "14/11/2025", income: "48 THB" },
//   { date: "13/11/2025", income: "40 THB" },
//   { date: "12/11/2025", income: "38 THB" },
// ];

// const monthlyTable = [
//   { date: "January", income: "200 THB" },
//   { date: "February", income: "400 THB" },
//   { date: "March", income: "1,000 THB" },
//   { date: "April", income: "800 THB" },
//   { date: "May", income: "900 THB" },
//   { date: "June", income: "1,200 THB" },
//   { date: "July", income: "2,000 THB" },
//   { date: "August", income: "3,600 THB" },
//   { date: "September", income: "4,500 THB" },
//   { date: "October", income: "4,000 THB" },
//   { date: "November", income: "8,800 THB" },
//   { date: "December", income: "9,999 THB" },
// ];

// // --- Sub-Components ---

// const DailySeeMore = ({ onBack }) => (
//   <motion.div
//     initial={{ opacity: 0, x: 100 }}
//     animate={{ opacity: 1, x: 0 }}
//     exit={{ opacity: 0, x: -100 }}
//     className="see-more-page"
//   >
//     <button className="back-btn" onClick={onBack}>
//       <ArrowLeft size={20} />
//       <span>Back to Earnings</span>
//     </button>

//     <h1 className="see-more-title">Daily Income Details</h1>

//     <div className="card border-0 shadow-sm rounded-4 p-4">
//       <div className="table-responsive">
//         <table className="table table-hover align-middle">
//           <thead className="table-light">
//             <tr>
//               <th>Date</th>
//               <th>Income</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[...Array(15)].map((_, i) => (
//               <tr key={i}>
//                 <td>
//                   {18 - i > 0
//                     ? `${18 - i}/11/2026`
//                     : `${30 + (18 - i)}/10/2026`}
//                 </td>
//                 <td className="fw-bold text-success">
//                   ฿ {(Math.random() * 100).toFixed(2)}
//                 </td>
//                 <td>
//                   <span className="badge bg-success-subtle text-success rounded-pill px-3">
//                     Received
//                   </span>
//                 </td>
//                 <td>
//                   <button className="btn btn-sm btn-outline-secondary rounded-pill">
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </motion.div>
// );

// const EarningsContent = ({ onSeeMore }) => {
//   // const [incomeType, setIncomeType] = useState<'daily' | 'monthly'>('daily');
//   const [incomeType, setIncomeType] = useState("daily");

//   const data = incomeType === "daily" ? dailyData : monthlyData;
//   const tableData = incomeType === "daily" ? dailyTable : monthlyTable;
//   const total = incomeType === "daily" ? "78.500.00" : "20.700.00";
//   const label = incomeType === "daily" ? "Daily Income" : "Monthly Income";
//   const dateLabel = incomeType === "daily" ? "18 Nov 2026" : "2026";

//   return (
//     <div className="earnings-container">
//       <div className="income-toggle-container">
//         <div className="income-toggle-group">
//           <button
//             className={`income-toggle-btn ${incomeType === "daily" ? "active" : ""}`}
//             onClick={() => setIncomeType("daily")}
//           >
//             Daily Income
//           </button>
//           <button
//             className={`income-toggle-btn ${incomeType === "monthly" ? "active" : ""}`}
//             onClick={() => setIncomeType("monthly")}
//           >
//             Monthly Income
//           </button>
//         </div>
//       </div>

//       <motion.div
//         key={incomeType}
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.3 }}
//         className="earnings-card"
//       >
//         <div className="earnings-header">
//           <div>
//             <h2 className="total-amount">
//               <span className="currency-symbol">฿</span> {total}
//             </h2>
//             <p className="income-label">{label}</p>
//           </div>
//           <div className="current-date">{dateLabel}</div>
//         </div>

//         <div className="earnings-body">
//           <div className="chart-section">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart data={data}>
//                 <defs>
//                   <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3} />
//                     <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid
//                   strokeDasharray="3 3"
//                   vertical={false}
//                   stroke="rgba(255,255,255,0.1)"
//                 />
//                 <XAxis
//                   dataKey="name"
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{ fill: "white", fontSize: 12 }}
//                   dy={10}
//                 />
//                 <YAxis hide />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: "#e9527a",
//                     border: "1px solid white",
//                     borderRadius: "10px",
//                   }}
//                   itemStyle={{ color: "white" }}
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="value"
//                   stroke="#ffffff"
//                   strokeWidth={3}
//                   fillOpacity={1}
//                   fill="url(#colorValue)"
//                   dot={{
//                     r: 6,
//                     fill: "white",
//                     strokeWidth: 2,
//                     stroke: "#e9527a",
//                   }}
//                   activeDot={{ r: 8, fill: "white" }}
//                   label={{
//                     position: "top",
//                     fill: "white",
//                     fontSize: 14,
//                     fontWeight: "bold",
//                     offset: 10,
//                   }}
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="table-section">
//             <table className="income-table">
//               <thead>
//                 <tr>
//                   <th>Date</th>
//                   <th>Income</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tableData.map((row, i) => (
//                   <tr key={i}>
//                     <td>{row.date}</td>
//                     <td className="fw-bold">{row.income}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="see-more-container">
//           <button className="see-more-btn" onClick={onSeeMore}>
//             See More
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export const IncomeDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("earnings");
//   const [showSeeMore, setShowSeeMore] = useState(false);

//   // Reset "See More" view when switching tabs
//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setShowSeeMore(false);
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

//       <AnimatePresence mode="wait">
//         {activeTab === "earnings" ? (
//           <div className="main-wrapper" key="earnings-wrapper">
//             {/* <Header /> */}
//             <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//             <main className="p-0">
//               <AnimatePresence mode="wait">
//                 {showSeeMore ? (
//                   <DailySeeMore
//                     key="see-more"
//                     onBack={() => setShowSeeMore(false)}
//                   />
//                 ) : (
//                   <motion.div
//                     key="earnings-content"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <EarningsContent onSeeMore={() => setShowSeeMore(true)} />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </main>
//           </div>
//         ) : (
//           <div className="main-wrapper" key="other-wrapper">
//             {/* <Header /> */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="p-5 text-center text-secondary"
//             >
//               <div className="display-1 mb-4">🚧</div>
//               <h2 className="h3 fw-bold text-capitalize">
//                 {activeTab.replace("-", " ")} Page
//               </h2>
//               <p>This section is currently under development.</p>
//               <button
//                 className="btn btn-outline-primary mt-3"
//                 onClick={() => handleTabChange("earnings")}
//               >
//                 Go to Earnings
//               </button>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };
// export default IncomeDashboard;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, Menu, X } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
// } from "recharts";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/IncomeDashboard.css";

// // --- Data ---
// const dailyData = [
//   { name: "Mon", value: 38 },
//   { name: "Tue", value: 40 },
//   { name: "Wed", value: 48 },
//   { name: "Thu", value: 50 },
//   { name: "Fri", value: 60 },
//   { name: "Sat", value: 65 },
//   { name: "Sun", value: 78 },
// ];

// const monthlyData = [
//   { name: "Jan", value: 200 },
//   { name: "Feb", value: 400 },
//   { name: "Mar", value: 1000 },
//   { name: "Apr", value: 800 },
//   { name: "May", value: 900 },
//   { name: "Jun", value: 1200 },
//   { name: "Jul", value: 2000 },
//   { name: "Aug", value: 3600 },
//   { name: "Sep", value: 4500 },
//   { name: "Oct", value: 4000 },
//   { name: "Nov", value: 8800 },
//   { name: "Dec", value: 9999 },
// ];

// const dailyTable = [
//   { date: "18/11/2025", income: "78 THB" },
//   { date: "17/11/2025", income: "65 THB" },
//   { date: "16/11/2025", income: "60 THB" },
//   { date: "15/11/2025", income: "50 THB" },
//   { date: "14/11/2025", income: "48 THB" },
//   { date: "13/11/2025", income: "40 THB" },
//   { date: "12/11/2025", income: "38 THB" },
// ];

// // --- Daily Page ---
// const DailySeeMore = () => {
//   const navigate = useNavigate();

//   return (
//     <motion.div className="see-more-page">
//       <button className="back-btn" onClick={() => navigate("/")}>
//         <ArrowLeft size={20} />
//         <span>Back to Earnings</span>
//       </button>

//       <h1 className="see-more-title">Daily Income Details</h1>

//       <div className="card border-0 shadow-sm rounded-4 p-4">
//         <div className="table-responsive">
//           <table className="table table-hover align-middle">
//             <thead className="table-light">
//               <tr>
//                 <th>Date</th>
//                 <th>Income</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[...Array(15)].map((_, i) => (
//                 <tr key={i}>
//                   <td>{18 - i}/11/2026</td>
//                   <td className="fw-bold text-success">
//                     ฿ {(Math.random() * 100).toFixed(2)}
//                   </td>
//                   <td>
//                     <span className="badge bg-success-subtle text-success rounded-pill px-3">
//                       Received
//                     </span>
//                   </td>
//                   <td>
//                     <button className="btn btn-sm btn-outline-secondary rounded-pill">
//                       View Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // --- Main Content ---
// const EarningsContent = () => {
//   const [incomeType, setIncomeType] = useState("daily");
//   const navigate = useNavigate(); // ✅ FIXED

//   const data = incomeType === "daily" ? dailyData : monthlyData;
//   const tableData = incomeType === "daily" ? dailyTable : dailyTable;

//   return (
//     <div className="earnings-container">
//       <div className="income-toggle-container">
//         <div className="income-toggle-group">
//           <button
//             className={`income-toggle-btn ${
//               incomeType === "daily" ? "active" : ""
//             }`}
//             onClick={() => setIncomeType("daily")}
//           >
//             Daily Income
//           </button>
//           <button
//             className={`income-toggle-btn ${
//               incomeType === "monthly" ? "active" : ""
//             }`}
//             onClick={() => setIncomeType("monthly")}
//           >
//             Monthly Income
//           </button>
//         </div>
//       </div>

//       <motion.div className="earnings-card">
//         <div className="earnings-body">
//           <div className="chart-section">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart data={data}>
//                 <XAxis dataKey="name" />
//                 <YAxis hide />
//                 <Tooltip />
//                 <Area dataKey="value" stroke="#fff" fill="#fff" />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="table-section">
//             <table className="income-table">
//               <tbody>
//                 {tableData.map((row, i) => (
//                   <tr key={i}>
//                     <td>{row.date}</td>
//                     <td>{row.income}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* ✅ ONLY THIS BUTTON CHANGED */}
//         <div className="see-more-container">
//           <button
//             className="see-more-btn"
//             onClick={() => navigate("/dailyseemore")}
//           >
//             See More
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // --- Dashboard ---
// export const IncomeDashboard = () => {
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

//         <main className="p-0">
//           <EarningsContent />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default IncomeDashboard;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, Menu, X, Loader2 } from "lucide-react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
// } from "recharts";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/IncomeDashboard.css";

// // --- API Configuration ---
// const API_BASE_URL = "https://sagarxo.app/web-api";
// const getAuthToken = () => localStorage.getItem("token") || "";

// // --- API Service ---
// const fetchCustomerEarnings = async (type) => {
//   const response = await fetch(`${API_BASE_URL}/customer/earnings?type=${type}`, {
//     method: "GET",
//     headers: {
//       "Authorization": getAuthToken(),
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();

//   if (!data.success) {
//     throw new Error(data.message || "Failed to fetch earnings");
//   }

//   return data.data.earnings;
// };

// // --- Data Formatting Helpers ---
// const formatBackendDataForChart = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === "monthly") {
//     // Backend: { year, month, total_earnings }
//     return earnings.map(item => ({
//       name: item.month.substring(0, 3),
//       value: parseFloat(item.total_earnings),
//       fullData: item
//     })).reverse();
//   } else {
//     // Backend daily/weekly: { date, total_earnings }
//     return earnings.map(item => ({
//       name: item.date.split('/')[0],
//       value: parseFloat(item.total_earnings),
//       fullData: item
//     })).reverse();
//   }
// };

// const formatBackendDataForTable = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === "monthly") {
//     return earnings.map(item => ({
//       date: `${item.month} ${item.year}`,
//       income: `${parseFloat(item.total_earnings).toFixed(2)} THB`,
//       rawValue: parseFloat(item.total_earnings)
//     }));
//   } else {
//     return earnings.map(item => ({
//       date: item.date,
//       income: `${parseFloat(item.total_earnings).toFixed(2)} THB`,
//       rawValue: parseFloat(item.total_earnings)
//     }));
//   }
// };

// // --- Daily/Weekly/Monthly See More Page ---
// const DailySeeMore = () => {
//   const navigate = useNavigate();
//   const { type = "daily" } = useParams();
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const typeLabels = {
//     daily: "Daily",
//     weekly: "Weekly",
//     monthly: "Monthly"
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchCustomerEarnings(type);
//         setEarnings(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//   }, [type]);

//   const formatSeeMoreRow = (item) => {
//     if (type === "monthly") {
//       return {
//         dateDisplay: `${item.month} ${item.year}`,
//         income: parseFloat(item.total_earnings).toFixed(2)
//       };
//     }
//     return {
//       dateDisplay: item.date,
//       income: parseFloat(item.total_earnings).toFixed(2)
//     };
//   };

//   return (
//     <motion.div className="see-more-page">
//       <button className="back-btn" onClick={() => navigate("/")}>
//         <ArrowLeft size={20} />
//         <span>Back to Earnings</span>
//       </button>

//       <h1 className="see-more-title">{typeLabels[type]} Income Details</h1>

//       <div className="card border-0 shadow-sm rounded-4 p-4">
//         {loading ? (
//           <div className="text-center py-5">
//             <Loader2 size={40} className="spin" />
//             <p className="mt-3 text-muted">Loading...</p>
//           </div>
//         ) : error ? (
//           <div className="alert alert-danger">{error}</div>
//         ) : (
//           <div className="table-responsive">
//             <table className="table table-hover align-middle">
//               <thead className="table-light">
//                 <tr>
//                   <th>Date</th>
//                   <th>Income</th>
//                   <th>Status</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {earnings.map((item, i) => {
//                   const formatted = formatSeeMoreRow(item);
//                   return (
//                     <tr key={i}>
//                       <td>{formatted.dateDisplay}</td>
//                       <td className="fw-bold text-success">
//                         ฿ {formatted.income}
//                       </td>
//                       <td>
//                         <span className="badge bg-success-subtle text-success rounded-pill px-3">
//                           Received
//                         </span>
//                       </td>
//                       <td>
//                         <button className="btn btn-sm btn-outline-secondary rounded-pill">
//                           View Details
//                         </button>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// // --- Main Content ---
// const EarningsContent = () => {
//   const [incomeType, setIncomeType] = useState("daily");
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Fetch data when type changes
//   useEffect(() => {
//     const loadEarnings = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const data = await fetchCustomerEarnings(incomeType);
//         setEarnings(data);
//       } catch (err) {
//         setError(err.message);
//         setEarnings([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadEarnings();
//   }, [incomeType]);

//   // Transform backend data for chart and table
//   const chartData = formatBackendDataForChart(earnings, incomeType);
//   const tableData = formatBackendDataForTable(earnings, incomeType);

//   // Use backend data if available, fallback to static for design preview
//   const displayChartData = chartData.length > 0 ? chartData :
//     incomeType === "daily" ?
//       [{ name: "Mon", value: 38 }, { name: "Tue", value: 40 }, { name: "Wed", value: 48 }, { name: "Thu", value: 50 }, { name: "Fri", value: 60 }, { name: "Sat", value: 65 }, { name: "Sun", value: 78 }] :
//       [{ name: "Jan", value: 200 }, { name: "Feb", value: 400 }, { name: "Mar", value: 1000 }, { name: "Apr", value: 800 }, { name: "May", value: 900 }, { name: "Jun", value: 1200 }, { name: "Jul", value: 2000 }, { name: "Aug", value: 3600 }, { name: "Sep", value: 4500 }, { name: "Oct", value: 4000 }, { name: "Nov", value: 8800 }, { name: "Dec", value: 9999 }];

//   const displayTableData = tableData.length > 0 ? tableData.slice(0, 7) : [
//     { date: "18/11/2025", income: "78 THB" },
//     { date: "17/11/2025", income: "65 THB" },
//     { date: "16/11/2025", income: "60 THB" },
//     { date: "15/11/2025", income: "50 THB" },
//     { date: "14/11/2025", income: "48 THB" },
//     { date: "13/11/2025", income: "40 THB" },
//     { date: "12/11/2025", income: "38 THB" },
//   ];

//   return (
//     <div className="earnings-container">
//       <div className="income-toggle-container">
//         <div className="income-toggle-group">
//           <button
//             className={`income-toggle-btn ${
//               incomeType === "daily" ? "active" : ""
//             }`}
//             onClick={() => setIncomeType("daily")}
//           >
//             Daily Income
//           </button>
//           <button
//             className={`income-toggle-btn ${
//               incomeType === "weekly" ? "active" : ""
//             }`}
//             onClick={() => setIncomeType("weekly")}
//           >
//             Weekly Income
//           </button>
//           <button
//             className={`income-toggle-btn ${
//               incomeType === "monthly" ? "active" : ""
//             }`}
//             onClick={() => setIncomeType("monthly")}
//           >
//             Monthly Income
//           </button>
//         </div>
//       </div>

//       <motion.div className="earnings-card">
//         {loading ? (
//           <div className="text-center py-5">
//             <Loader2 size={40} className="spin" />
//           </div>
//         ) : error ? (
//           <div className="alert alert-danger m-3">{error}</div>
//         ) : (
//           <>
//             <div className="earnings-body">
//               <div className="chart-section">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart data={displayChartData}>
//                     <XAxis dataKey="name" />
//                     <YAxis hide />
//                     <Tooltip />
//                     <Area dataKey="value" stroke="#fff" fill="#fff" />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="table-section">
//                 <table className="income-table">
//                   <tbody>
//                     {displayTableData.map((row, i) => (
//                       <tr key={i}>
//                         <td>{row.date}</td>
//                         <td>{row.income}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="see-more-container">
//               <button
//                 className="see-more-btn"
//                 onClick={() => navigate(`/DailySeeMore/${incomeType}`)}
//               >
//                 See More
//               </button>
//             </div>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// // --- Dashboard ---
// export const IncomeDashboard = () => {
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

//         <main className="p-0">
//           <EarningsContent />
//         </main>
//       </div>
//     </div>
//   );
// };

// export { DailySeeMore };
// export default IncomeDashboard;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, Menu, X, Loader2 } from "lucide-react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
// } from "recharts";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/IncomeDashboard.css";

// // --- API Configuration ---
// const API_BASE_URL = "https://sagarxo.app/web-api";
// const getAuthToken = () => localStorage.getItem("token") || "";

// // --- API Service ---
// const fetchCustomerEarnings = async (type) => {
//   // Map UI types to API types
//   const apiTypeMap = {
//     daily: "daily",
//     weekly: "weekly",
//     monthly: "monthly", // ✅ use lowercase to match backend
//   };
//   const apiType = apiTypeMap[type] || type;

//   const response = await fetch(`${API_BASE_URL}/customer/earnings?type=${apiType}`, {
//     method: "GET",
//     headers: {
//       "Authorization": getAuthToken(),
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();

//   if (!data.success) {
//     throw new Error(data.message || "Failed to fetch earnings");
//   }

//   // Ensure earnings is always an array
//   return Array.isArray(data.data.earnings) ? data.data.earnings : [];
// };

// // --- Data Formatting Helpers (with defensive checks) ---
// const formatBackendDataForChart = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === "monthly") {
//     // Backend: { year, month, total_earnings }
//     return earnings
//       .filter(item => item && item.month && item.total_earnings !== undefined)
//       .map(item => ({
//         name: item.month.substring(0, 3),
//         value: parseFloat(item.total_earnings),
//         fullData: item
//       }))
//       .reverse();
//   } else {
//     // Backend daily/weekly: expects { date, total_earnings }
//     return earnings
//       .filter(item => item && item.date && item.total_earnings !== undefined)
//       .map(item => ({
//         name: item.date.split('/')[0],
//         value: parseFloat(item.total_earnings),
//         fullData: item
//       }))
//       .reverse();
//   }
// };

// const formatBackendDataForTable = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === "monthly") {
//     return earnings
//       .filter(item => item && item.month && item.total_earnings !== undefined)
//       .map(item => ({
//         date: `${item.month} ${item.year}`,
//         income: `${parseFloat(item.total_earnings).toFixed(2)} THB`,
//         rawValue: parseFloat(item.total_earnings)
//       }));
//   } else {
//     return earnings
//       .filter(item => item && item.date && item.total_earnings !== undefined)
//       .map(item => ({
//         date: item.date,
//         income: `${parseFloat(item.total_earnings).toFixed(2)} THB`,
//         rawValue: parseFloat(item.total_earnings)
//       }));
//   }
// };

// // --- Daily/Weekly/Monthly See More Page ---
// const DailySeeMore = () => {
//   const navigate = useNavigate();
//   const { type = "daily" } = useParams();
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const typeLabels = {
//     daily: "Daily",
//     weekly: "Weekly",
//     monthly: "Monthly"
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchCustomerEarnings(type);
//         setEarnings(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//   }, [type]);

//   const formatSeeMoreRow = (item) => {
//     if (!item) return { dateDisplay: "—", income: "0.00" };
//     if (type === "monthly") {
//       return {
//         dateDisplay: item.month && item.year ? `${item.month} ${item.year}` : "—",
//         income: parseFloat(item.total_earnings || 0).toFixed(2)
//       };
//     }
//     return {
//       dateDisplay: item.date || "—",
//       income: parseFloat(item.total_earnings || 0).toFixed(2)
//     };
//   };

//   return (
//     <motion.div className="see-more-page">
//       <button className="back-btn" onClick={() => navigate("/")}>
//         <ArrowLeft size={20} />
//         <span>Back to Earnings</span>
//       </button>

//       <h1 className="see-more-title">{typeLabels[type]} Income Details</h1>

//       <div className="card border-0 shadow-sm rounded-4 p-4">
//         {loading ? (
//           <div className="text-center py-5">
//             <Loader2 size={40} className="spin" />
//             <p className="mt-3 text-muted">Loading...</p>
//           </div>
//         ) : error ? (
//           <div className="alert alert-danger">{error}</div>
//         ) : earnings.length === 0 ? (
//           <div className="text-center py-5">
//             <p className="text-muted">No {typeLabels[type]} income data available</p>
//           </div>
//         ) : (
//           <div className="table-responsive">
//             <table className="table table-hover align-middle">
//               <thead className="table-light">
//                 <tr>
//                   <th>Date</th>
//                   <th>Income</th>
//                   <th>Status</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {earnings.map((item, i) => {
//                   const formatted = formatSeeMoreRow(item);
//                   return (
//                     <tr key={i}>
//                       <td>{formatted.dateDisplay}</td>
//                       <td className="fw-bold text-success">
//                         ฿ {formatted.income}
//                       </td>
//                       <td>
//                         <span className="badge bg-success-subtle text-success rounded-pill px-3">
//                           Received
//                         </span>
//                       </td>
//                       <td>
//                         <button className="btn btn-sm btn-outline-secondary rounded-pill">
//                           View Details
//                         </button>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// // --- Main Content ---
// const EarningsContent = () => {
//   const [incomeType, setIncomeType] = useState("daily");
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Fetch data when type changes
//   useEffect(() => {
//     const loadEarnings = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const data = await fetchCustomerEarnings(incomeType);
//         setEarnings(data);
//       } catch (err) {
//         setError(err.message);
//         setEarnings([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadEarnings();
//   }, [incomeType]);

//   // Transform backend data for chart and table
//   const chartData = formatBackendDataForChart(earnings, incomeType);
//   const tableData = formatBackendDataForTable(earnings, incomeType);

//   const hasData = chartData.length > 0;

//   return (
//     <div className="earnings-container">
//       <div className="income-toggle-container">
//         <div className="income-toggle-group">
//           <button
//             className={`income-toggle-btn ${
//               incomeType === "daily" ? "active" : ""
//             }`}
//             onClick={() => setIncomeType("daily")}
//           >
//             Daily Income
//           </button>
//           <button
//             className={`income-toggle-btn ${
//               incomeType === "weekly" ? "active" : ""
//             }`}
//             onClick={() => setIncomeType("weekly")}
//           >
//             Weekly Income
//           </button>
//           <button
//             className={`income-toggle-btn ${
//               incomeType === "monthly" ? "active" : ""
//             }`}
//             onClick={() => setIncomeType("monthly")}
//           >
//             Monthly Income
//           </button>
//         </div>
//       </div>

//       <motion.div className="earnings-card">
//         {loading ? (
//           <div className="text-center py-5">
//             <Loader2 size={40} className="spin" />
//             <p className="mt-3 text-muted">Loading...</p>
//           </div>
//         ) : error ? (
//           <div className="alert alert-danger m-3">{error}</div>
//         ) : !hasData ? (
//           <div className="text-center py-5">
//             <p className="text-muted">No {incomeType} income data available</p>
//           </div>
//         ) : (
//           <>
//             <div className="earnings-body">
//               <div className="chart-section">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart data={chartData}>
//                     <XAxis dataKey="name" />
//                     <YAxis hide />
//                     <Tooltip />
//                     <Area dataKey="value" stroke="#fff" fill="#fff" />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="table-section">
//                 <table className="income-table">
//                   <tbody>
//                     {tableData.slice(0, 7).map((row, i) => (
//                       <tr key={i}>
//                         <td>{row.date}</td>
//                         <td>{row.income}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="see-more-container">
//               <button
//                 className="see-more-btn"
//                 onClick={() => navigate(`/DailySeeMore/${incomeType}`)}
//               >
//                 See More
//               </button>
//             </div>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// // --- Dashboard ---
// export const IncomeDashboard = () => {
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

//         <main className="p-0">
//           <EarningsContent />
//         </main>
//       </div>
//     </div>
//   );
// };

// export { DailySeeMore };
// export default IncomeDashboard;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowLeft, Menu, X, Loader2 } from "lucide-react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
// } from "recharts";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/IncomeDashboard.css";

// // --- API Configuration ---
// const API_BASE_URL = "https://sagarxo.app/web-api";
// const getAuthToken = () => localStorage.getItem("token") || "";

// // --- API Service ---
// const fetchCustomerEarnings = async (type) => {
//   const apiTypeMap = {
//     daily: "daily",
//     monthly: "monthly",
//   };
//   const apiType = apiTypeMap[type] || type;

//   const response = await fetch(`${API_BASE_URL}/customer/earnings?type=${apiType}`, {
//     method: "GET",
//     headers: {
//       "Authorization": getAuthToken(),
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();

//   if (!data.success) {
//     throw new Error(data.message || "Failed to fetch earnings");
//   }

//   return Array.isArray(data.data.earnings) ? data.data.earnings : [];
// };

// // --- Data Formatting Helpers ---
// const formatBackendDataForChart = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === "monthly") {
//     return earnings
//       .filter(item => item && item.month && item.total_earnings !== undefined)
//       .map(item => ({
//         name: item.month.substring(0, 3),   // Jan, Feb, Mar...
//         value: parseFloat(item.total_earnings),
//         fullData: item
//       }))
//       .reverse();
//   } else {
//     // Daily
//     return earnings
//       .filter(item => item && item.date && item.total_earnings !== undefined)
//       .map(item => ({
//         name: item.date.split('/')[0],
//         value: parseFloat(item.total_earnings),
//         fullData: item
//       }))
//       .reverse();
//   }
// };

// const formatBackendDataForTable = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === "monthly") {
//     return earnings
//       .filter(item => item && item.month && item.total_earnings !== undefined)
//       .map(item => ({
//         date: `${item.month} ${item.year}`,
//         income: `${parseFloat(item.total_earnings).toFixed(2)} THB`,
//         rawValue: parseFloat(item.total_earnings)
//       }));
//   } else {
//     // Daily
//     return earnings
//       .filter(item => item && item.date && item.total_earnings !== undefined)
//       .map(item => ({
//         date: item.date,
//         income: `${parseFloat(item.total_earnings).toFixed(2)} THB`,
//         rawValue: parseFloat(item.total_earnings)
//       }));
//   }
// };

// // --- See More Page ---
// const EarningsSeeMore = () => {
//   const navigate = useNavigate();
//   const { type = "daily" } = useParams();
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const typeLabels = {
//     daily: "Daily",
//     monthly: "Monthly"
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchCustomerEarnings(type);
//         setEarnings(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//   }, [type]);

//   const formatSeeMoreRow = (item) => {
//     if (!item) return { dateDisplay: "—", income: "0.00" };
//     if (type === "monthly") {
//       return {
//         dateDisplay: item.month && item.year ? `${item.month} ${item.year}` : "—",
//         income: parseFloat(item.total_earnings || 0).toFixed(2)
//       };
//     }
//     return {
//       dateDisplay: item.date || "—",
//       income: parseFloat(item.total_earnings || 0).toFixed(2)
//     };
//   };

//   return (
//     <motion.div className="see-more-page">
//       <button className="back-btn" onClick={() => navigate("/")}>
//         <ArrowLeft size={20} />
//         <span>Back to Earnings</span>
//       </button>

//       <h1 className="see-more-title">{typeLabels[type]} Income Details</h1>

//       <div className="card border-0 shadow-sm rounded-4 p-4">
//         {loading ? (
//           <div className="text-center py-5">
//             <Loader2 size={40} className="spin" />
//             <p className="mt-3 text-muted">Loading...</p>
//           </div>
//         ) : error ? (
//           <div className="alert alert-danger">{error}</div>
//         ) : earnings.length === 0 ? (
//           <div className="text-center py-5">
//             <p className="text-muted">No {typeLabels[type]} income data available</p>
//           </div>
//         ) : (
//           <div className="table-responsive">
//             <table className="table table-hover align-middle">
//               <thead className="table-light">
//                 <tr>
//                   <th>Date</th>
//                   <th>Income</th>
//                   <th>Status</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {earnings.map((item, i) => {
//                   const formatted = formatSeeMoreRow(item);
//                   return (
//                     <tr key={i}>
//                       <td>{formatted.dateDisplay}</td>
//                       <td className="fw-bold text-success">
//                         ฿ {formatted.income}
//                       </td>
//                       <td>
//                         <span className="badge bg-success-subtle text-success rounded-pill px-3">
//                           Received
//                         </span>
//                       </td>
//                       <td>
//                         <button className="btn btn-sm btn-outline-secondary rounded-pill">
//                           View Details
//                         </button>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// // --- Main Content (Only Daily & Monthly) ---
// const EarningsContent = () => {
//   const [incomeType, setIncomeType] = useState("daily");
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Fetch data when type changes
//   useEffect(() => {
//     const loadEarnings = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const data = await fetchCustomerEarnings(incomeType);
//         setEarnings(data);
//       } catch (err) {
//         setError(err.message);
//         setEarnings([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadEarnings();
//   }, [incomeType]);

//   const chartData = formatBackendDataForChart(earnings, incomeType);
//   const tableData = formatBackendDataForTable(earnings, incomeType);
//   const hasData = chartData.length > 0;

//   return (
//     <div className="earnings-container">
//       {/* Toggle Buttons - Only Daily & Monthly */}
//       <div className="income-toggle-container">
//         <div className="income-toggle-group">
//           <button
//             className={`income-toggle-btn ${incomeType === "daily" ? "active" : ""}`}
//             onClick={() => setIncomeType("daily")}
//           >
//             Daily Income
//           </button>
//           <button
//             className={`income-toggle-btn ${incomeType === "monthly" ? "active" : ""}`}
//             onClick={() => setIncomeType("monthly")}
//           >
//             Monthly Income
//           </button>
//         </div>
//       </div>

//       <motion.div className="earnings-card">
//         {loading ? (
//           <div className="text-center py-5">
//             <Loader2 size={40} className="spin" />
//             <p className="mt-3 text-muted">Loading...</p>
//           </div>
//         ) : error ? (
//           <div className="alert alert-danger m-3">{error}</div>
//         ) : !hasData ? (
//           <div className="text-center py-5">
//             <p className="text-muted">No {incomeType} income data available</p>
//           </div>
//         ) : (
//           <>
//             <div className="earnings-body">
//               {/* Chart Section */}
//               <div className="chart-section">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart data={chartData}>
//                     <XAxis dataKey="name" />
//                     <YAxis hide />
//                     <Tooltip />
//                     <Area dataKey="value" stroke="#fff" fill="#fff" />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Table Section */}
//               <div className="table-section">
//                 <table className="income-table">
//                   <tbody>
//                     {tableData.slice(0, 7).map((row, i) => (
//                       <tr key={i}>
//                         <td>{row.date}</td>
//                         <td>{row.income}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* See More Button */}
//             <div className="see-more-container">
//               <button
//                 className="see-more-btn"
//                 onClick={() => navigate(`/DailySeeMore/${incomeType}`)}
//               >
//                 See More
//               </button>
//             </div>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// // --- Dashboard ---
// export const IncomeDashboard = () => {
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

//       <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <EarningsContent />
//         </main>
//       </div>
//     </div>
//   );
// };

// export { EarningsSeeMore };
// export default IncomeDashboard;

// import React, { useState, useEffect, useMemo } from "react";
// import { motion } from "framer-motion";
// import { ArrowLeft, Menu, X, Loader2 } from "lucide-react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
// } from "recharts";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/IncomeDashboard.css";

// // --- API Configuration ---
// const API_BASE_URL = "https://sagarxo.app/web-api";
// const getAuthToken = () => localStorage.getItem("token") || "";

// // --- Helper: Get day name from Date object ---
// const getDayNameFromDateObj = (date) => {
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   return days[date.getDay()];
// };

// // --- Helper: Format date as DD/MM/YYYY (matching API format) ---
// const formatDateForAPI = (date) => {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// };

// // --- Helper: Generate last 7 days array ---
// const generateLast7Days = () => {
//   const days = [];
//   const today = new Date();
//   for (let i = 6; i >= 0; i--) {
//     const date = new Date(today);
//     date.setDate(today.getDate() - i);
//     days.push(date);
//   }
//   return days;
// };

// // --- API Service ---
// const fetchCustomerEarnings = async (type) => {
//   const apiTypeMap = {
//     daily: "daily",
//     monthly: "monthly",
//   };
//   const apiType = apiTypeMap[type] || type;

//   const response = await fetch(`${API_BASE_URL}/customer/earnings?type=${apiType}`, {
//     method: "GET",
//     headers: {
//       "Authorization": getAuthToken(),
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();

//   if (!data.success) {
//     throw new Error(data.message || "Failed to fetch earnings");
//   }

//   return Array.isArray(data.data.earnings) ? data.data.earnings : [];
// };

// // --- Data Formatting Helpers (for daily view with full 7 days) ---
// const formatDailyDataForChart = (earnings) => {
//   const last7Days = generateLast7Days();

//   // Create a map of existing earnings by date string (DD/MM/YYYY)
//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item && item.date && item.total_earnings !== undefined) {
//       earningsMap[item.date] = parseFloat(item.total_earnings);
//     }
//   });

//   // Build chart data for all 7 days
//   return last7Days.map(date => {
//     const dateStr = formatDateForAPI(date);
//     const value = earningsMap[dateStr] || 0;
//     return {
//       name: getDayNameFromDateObj(date),  // "Mon", "Tue", etc.
//       value: value,
//       fullDate: dateStr,
//       hasData: earningsMap.hasOwnProperty(dateStr)
//     };
//   });
// };

// const formatDailyDataForTable = (earnings) => {
//   const last7Days = generateLast7Days();

//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item && item.date && item.total_earnings !== undefined) {
//       earningsMap[item.date] = parseFloat(item.total_earnings);
//     }
//   });

//   return last7Days.map(date => {
//     const dateStr = formatDateForAPI(date);
//     const value = earningsMap[dateStr];
//     const hasData = value !== undefined;
//     return {
//       date: `${getDayNameFromDateObj(date)} ${date.getDate()}`,
//       income: hasData ? `${value.toFixed(2)} THB` : "—",
//       rawValue: hasData ? value : 0
//     };
//   });
// };

// // Monthly formatters (unchanged)
// const formatBackendDataForChartMonthly = (earnings) => {
//   if (!earnings || earnings.length === 0) return [];
//   return earnings
//     .filter(item => item && item.month && item.total_earnings !== undefined)
//     .map(item => ({
//       name: item.month.substring(0, 3),
//       value: parseFloat(item.total_earnings),
//       fullData: item
//     }))
//     .reverse();
// };

// const formatBackendDataForTableMonthly = (earnings) => {
//   if (!earnings || earnings.length === 0) return [];
//   return earnings
//     .filter(item => item && item.month && item.total_earnings !== undefined)
//     .map(item => ({
//       date: `${item.month} ${item.year}`,
//       income: `${parseFloat(item.total_earnings).toFixed(2)} THB`,
//       rawValue: parseFloat(item.total_earnings)
//     }));
// };

// // --- See More Page ---
// const EarningsSeeMore = () => {
//   const navigate = useNavigate();
//   const { type = "daily" } = useParams();
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const typeLabels = {
//     daily: "Daily",
//     monthly: "Monthly"
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchCustomerEarnings(type);
//         setEarnings(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();
//   }, [type]);

//   const formatSeeMoreRow = (item) => {
//     if (!item) return { dateDisplay: "—", income: "0.00" };
//     if (type === "monthly") {
//       return {
//         dateDisplay: item.month && item.year ? `${item.month} ${item.year}` : "—",
//         income: parseFloat(item.total_earnings || 0).toFixed(2)
//       };
//     }
//     return {
//       dateDisplay: item.date || "—",
//       income: parseFloat(item.total_earnings || 0).toFixed(2)
//     };
//   };

//   return (
//     <motion.div className="see-more-page">
//       <button className="back-btn" onClick={() => navigate("/")}>
//         <ArrowLeft size={20} />
//         <span>Back to Earnings</span>
//       </button>

//       <h1 className="see-more-title">{typeLabels[type]} Income Details</h1>

//       <div className="card border-0 shadow-sm rounded-4 p-4">
//         {loading ? (
//           <div className="text-center py-5">
//             <Loader2 size={40} className="spin" />
//             <p className="mt-3 text-muted">Loading...</p>
//           </div>
//         ) : error ? (
//           <div className="alert alert-danger">{error}</div>
//         ) : earnings.length === 0 ? (
//           <div className="text-center py-5">
//             <p className="text-muted">No {typeLabels[type]} income data available</p>
//           </div>
//         ) : (
//           <div className="table-responsive">
//             <table className="table table-hover align-middle">
//               <thead className="table-light">
//                 <tr>
//                   <th>Date</th>
//                   <th>Income</th>
//                   <th>Status</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {earnings.map((item, i) => {
//                   const formatted = formatSeeMoreRow(item);
//                   return (
//                     <tr key={i}>
//                       <td>{formatted.dateDisplay}</td>
//                       <td className="fw-bold text-success">
//                         ฿ {formatted.income}
//                       </td>
//                       <td>
//                         <span className="badge bg-success-subtle text-success rounded-pill px-3">
//                           Received
//                         </span>
//                       </td>
//                       <td>
//                         <button className="btn btn-sm btn-outline-secondary rounded-pill">
//                           View Details
//                         </button>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// // --- Main Content (Only Daily & Monthly) ---
// const EarningsContent = () => {
//   const [incomeType, setIncomeType] = useState("daily");
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadEarnings = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const data = await fetchCustomerEarnings(incomeType);
//         setEarnings(data);
//       } catch (err) {
//         setError(err.message);
//         setEarnings([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadEarnings();
//   }, [incomeType]);

//   // Format data based on type
//   const chartData = useMemo(() => {
//     if (incomeType === "daily") {
//       return formatDailyDataForChart(earnings);
//     }
//     return formatBackendDataForChartMonthly(earnings);
//   }, [earnings, incomeType]);

//   const tableData = useMemo(() => {
//     if (incomeType === "daily") {
//       return formatDailyDataForTable(earnings);
//     }
//     return formatBackendDataForTableMonthly(earnings);
//   }, [earnings, incomeType]);

//   const hasData = chartData.length > 0;

//   return (
//     <div className="earnings-container">
//       <div className="income-toggle-container">
//         <div className="income-toggle-group">
//           <button
//             className={`income-toggle-btn ${incomeType === "daily" ? "active" : ""}`}
//             onClick={() => setIncomeType("daily")}
//           >
//             Daily Income
//           </button>
//           <button
//             className={`income-toggle-btn ${incomeType === "monthly" ? "active" : ""}`}
//             onClick={() => setIncomeType("monthly")}
//           >
//             Monthly Income
//           </button>
//         </div>
//       </div>

//       <motion.div className="earnings-card">
//         {loading ? (
//           <div className="text-center py-5">
//             <Loader2 size={40} className="spin" />
//             <p className="mt-3 text-muted">Loading...</p>
//           </div>
//         ) : error ? (
//           <div className="alert alert-danger m-3">{error}</div>
//         ) : !hasData ? (
//           <div className="text-center py-5">
//             <p className="text-muted">No {incomeType} income data available</p>
//           </div>
//         ) : (
//           <>
//             <div className="earnings-body">
//               <div className="chart-section">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart data={chartData}>
//                     <XAxis dataKey="name" />
//                     <YAxis hide />
//                     <Tooltip />
//                     <Area dataKey="value" stroke="#fff" fill="#fff" />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="table-section">
//                 <table className="income-table">
//                   <tbody>
//                     {tableData.map((row, i) => (
//                       <tr key={i}>
//                         <td>{row.date}</td>
//                         <td>{row.income}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="see-more-container">
//               <button
//                 className="see-more-btn"
//                 onClick={() => navigate(`/DailySeeMore/${incomeType}`)}
//               >
//                 See More
//               </button>
//             </div>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// // --- Dashboard ---
// export const IncomeDashboard = () => {
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

//       <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <EarningsContent />
//         </main>
//       </div>
//     </div>
//   );
// };

// export { EarningsSeeMore };
// export default IncomeDashboard;

// import React, { useState, useEffect, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, Menu, X, Loader2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
// } from "recharts";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/IncomeDashboard.css";

// // --- API Configuration ---
// const API_BASE_URL = "https://sagarxo.app/web-api";
// const getAuthToken = () => localStorage.getItem("token") || "";

// // --- Helper: Get day name from Date object ---
// const getDayNameFromDateObj = (date) => {
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   return days[date.getDay()];
// };

// // --- Helper: Format date as DD/MM/YYYY (matching API format) ---
// const formatDateForAPI = (date) => {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// };

// // --- Helper: Generate last 7 days array ---
// const generateLast7Days = () => {
//   const days = [];
//   const today = new Date();
//   for (let i = 6; i >= 0; i--) {
//     const date = new Date(today);
//     date.setDate(today.getDate() - i);
//     days.push(date);
//   }
//   return days;
// };

// // --- API Service ---
// const fetchCustomerEarnings = async (type) => {
//   const apiTypeMap = {
//     daily: "daily",
//     monthly: "monthly",
//   };
//   const apiType = apiTypeMap[type] || type;

//   const response = await fetch(`${API_BASE_URL}/customer/earnings?type=${apiType}`, {
//     method: "GET",
//     headers: {
//       "Authorization": getAuthToken(),
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();
//   if (!data.success) {
//     throw new Error(data.message || "Failed to fetch earnings");
//   }

//   return Array.isArray(data.data.earnings) ? data.data.earnings : [];
// };

// // --- Data Formatting Helpers (Daily: full 7 days) ---
// const formatDailyDataForChart = (earnings) => {
//   const last7Days = generateLast7Days();
//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item?.date && item.total_earnings !== undefined) {
//       earningsMap[item.date] = parseFloat(item.total_earnings);
//     }
//   });

//   return last7Days.map(date => {
//     const dateStr = formatDateForAPI(date);
//     const value = earningsMap[dateStr] || 0;
//     return {
//       name: getDayNameFromDateObj(date), // "Mon", "Tue", etc.
//       value: value,
//       fullDate: dateStr,
//       hasData: earningsMap.hasOwnProperty(dateStr)
//     };
//   });
// };

// const formatDailyDataForTable = (earnings) => {
//   const last7Days = generateLast7Days();
//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item?.date && item.total_earnings !== undefined) {
//       earningsMap[item.date] = parseFloat(item.total_earnings);
//     }
//   });

//   return last7Days.map(date => {
//     const dateStr = formatDateForAPI(date);
//     const value = earningsMap[dateStr];
//     const hasData = value !== undefined;
//     return {
//       date: `${getDayNameFromDateObj(date)} ${date.getDate()}`,
//       income: hasData ? `${value.toFixed(2)} THB` : "—",
//       rawValue: hasData ? value : 0
//     };
//   });
// };

// // Monthly formatters
// const formatMonthlyDataForChart = (earnings) => {
//   if (!earnings || earnings.length === 0) return [];
//   return earnings
//     .filter(item => item?.month && item.total_earnings !== undefined)
//     .map(item => ({
//       name: item.month.substring(0, 3),
//       value: parseFloat(item.total_earnings),
//       fullData: item
//     }))
//     .reverse(); // Show oldest to newest left-to-right
// };

// const formatMonthlyDataForTable = (earnings) => {
//   if (!earnings || earnings.length === 0) return [];
//   return earnings
//     .filter(item => item?.month && item.total_earnings !== undefined)
//     .map(item => ({
//       date: `${item.month} ${item.year}`,
//       income: `${parseFloat(item.total_earnings).toFixed(2)} THB`,
//       rawValue: parseFloat(item.total_earnings)
//     }));
// };

// // --- EarningsContent (Main Dashboard View) ---
// const EarningsContent = ({ onSeeMore }) => {
//   const [incomeType, setIncomeType] = useState("daily");
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch data when type changes
//   useEffect(() => {
//     const loadEarnings = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const data = await fetchCustomerEarnings(incomeType);
//         setEarnings(data);
//       } catch (err) {
//         setError(err.message);
//         setEarnings([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadEarnings();
//   }, [incomeType]);

//   // Format data based on type
//   const chartData = useMemo(() => {
//     if (incomeType === "daily") {
//       return formatDailyDataForChart(earnings);
//     }
//     return formatMonthlyDataForChart(earnings);
//   }, [earnings, incomeType]);

//   const tableData = useMemo(() => {
//     if (incomeType === "daily") {
//       return formatDailyDataForTable(earnings);
//     }
//     return formatMonthlyDataForTable(earnings);
//   }, [earnings, incomeType]);

//   // Calculate total income
//   const totalIncome = useMemo(() => {
//     return earnings.reduce((sum, item) => sum + parseFloat(item.total_earnings || 0), 0);
//   }, [earnings]);

//   const hasData = chartData.length > 0 && !error;
//   const label = incomeType === "daily" ? "Daily Income" : "Monthly Income";
//   const dateLabel = incomeType === "daily"
//     ? new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
//     : new Date().getFullYear();

//   return (
//     <div className="earnings-container">
//       {/* Toggle Buttons */}
//       <div className="income-toggle-container">
//         <div className="income-toggle-group">
//           <button
//             className={`income-toggle-btn ${incomeType === "daily" ? "active" : ""}`}
//             onClick={() => setIncomeType("daily")}
//             disabled={loading}
//           >
//             Daily Income
//           </button>
//           <button
//             className={`income-toggle-btn ${incomeType === "monthly" ? "active" : ""}`}
//             onClick={() => setIncomeType("monthly")}
//             disabled={loading}
//           >
//             Monthly Income
//           </button>
//         </div>
//       </div>

//       <motion.div
//         key={incomeType}
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.3 }}
//         className="earnings-card"
//       >
//         {loading ? (
//           <div className="text-center py-5">
//             <Loader2 size={40} className="spin" />
//             <p className="mt-3 text-muted">Loading {incomeType} earnings...</p>
//           </div>
//         ) : error ? (
//           <div className="alert alert-danger m-3">{error}</div>
//         ) : !hasData ? (
//           <div className="text-center py-5">
//             <p className="text-muted">No {incomeType} income data available</p>
//           </div>
//         ) : (
//           <>
//             {/* Header with Total */}
//             <div className="earnings-header">
//               <div>
//                 <h2 className="total-amount">
//                   <span className="font-dollar">฿</span>{" "}
//                   {totalIncome.toLocaleString("en-US", {
//                     minimumFractionDigits: 2,
//                     maximumFractionDigits: 2,
//                   })}
//                 </h2>
//                 <p className="income-label">{label}</p>
//               </div>
//               <div className="current-date">{dateLabel}</div>
//             </div>

//             {/* Chart + Table Side by Side */}
//             <div className="earnings-body">
//               <div className="chart-section">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart data={chartData}>
//                     <defs>
//                       <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3} />
//                         <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
//                       </linearGradient>
//                     </defs>
//                     <CartesianGrid
//                       strokeDasharray="3 3"
//                       vertical={false}
//                       stroke="rgba(255,255,255,0.1)"
//                     />
//                     <XAxis
//                       dataKey="name"
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "white", fontSize: 12 }}
//                       dy={10}
//                     />
//                     <YAxis hide />
//                     <Tooltip
//                       contentStyle={{
//                         backgroundColor: "#e9527a",
//                         border: "1px solid white",
//                         borderRadius: "10px",
//                       }}
//                       itemStyle={{ color: "white" }}
//                       formatter={(value) => [`฿ ${value.toLocaleString()}`, "Income"]}
//                     />
//                     <Area
//                       type="monotone"
//                       dataKey="value"
//                       stroke="#ffffff"
//                       strokeWidth={3}
//                       fillOpacity={1}
//                       fill="url(#colorValue)"
//                       dot={{
//                         r: 6,
//                         fill: "white",
//                         strokeWidth: 2,
//                         stroke: "#e9527a",
//                       }}
//                       activeDot={{ r: 8, fill: "white" }}
//                     />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="table-section">
//                 <table className="income-table">
//                   <thead>
//                     <tr>
//                       <th>Date</th>
//                       <th>Income</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {tableData.map((row, i) => (
//                       <tr key={i}>
//                         <td>{row.date}</td>
//                         <td className="fw-bold">{row.income}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* See More Button */}
//             <div className="see-more-container">
//               <button className="see-more-btn" onClick={onSeeMore}>
//                 See More
//               </button>
//             </div>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// // --- See More Page (placeholder - you can link to your existing DailySeeMore) ---
// const DailySeeMore = ({ onBack }) => {
//   // This component can be replaced with your detailed view
//   const navigate = useNavigate();
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 100 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -100 }}
//       className="see-more-page"
//     >
//       <button className="back-btn" onClick={onBack}>
//         <ArrowLeft size={20} />
//         <span>Back to Earnings</span>
//       </button>
//       <h1 className="see-more-title">Detailed Earnings</h1>
//       <div className="card border-0 shadow-sm rounded-4 p-4">
//         <p>Full earnings history will be displayed here.</p>
//         <button
//           className="btn btn-outline-primary"
//           onClick={() => navigate("/dailyseemore/daily")}
//         >
//           Go to Full Daily See More
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// // --- Main Dashboard Component ---
// export const IncomeDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [showSeeMore, setShowSeeMore] = useState(false);

//   return (
//     <div className="main-container">
//       {/* Mobile Toggle */}
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

//         <main className="p-0">
//           <AnimatePresence mode="wait">
//             {showSeeMore ? (
//               <DailySeeMore key="see-more" onBack={() => setShowSeeMore(false)} />
//             ) : (
//               <motion.div
//                 key="earnings-content"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <EarningsContent onSeeMore={() => setShowSeeMore(true)} />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default IncomeDashboard;

// import React, { useState, useEffect, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, Menu, X, Loader2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
// } from "recharts";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/IncomeDashboard.css";

// // --- API Configuration ---
// const API_BASE_URL = "https://sagarxo.app/web-api";
// const getAuthToken = () => localStorage.getItem("token") || "";

// // --- All 12 months for display ---
// const ALL_MONTHS = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// const ALL_MONTHS_SHORT = [
//   "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// ];

// // --- Helper: Get day name from Date object ---
// const getDayNameFromDateObj = (date) => {
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   return days[date.getDay()];
// };

// // --- Helper: Format date as DD/MM/YYYY (matching API format) ---
// const formatDateForAPI = (date) => {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// };

// // --- Helper: Generate last 7 days array ---
// const generateLast7Days = () => {
//   const days = [];
//   const today = new Date();
//   for (let i = 6; i >= 0; i--) {
//     const date = new Date(today);
//     date.setDate(today.getDate() - i);
//     days.push(date);
//   }
//   return days;
// };

// // --- API Service ---
// const fetchCustomerEarnings = async (type) => {
//   const apiTypeMap = {
//     daily: "daily",
//     monthly: "monthly",
//   };
//   const apiType = apiTypeMap[type] || type;

//   const response = await fetch(`${API_BASE_URL}/customer/earnings?type=${apiType}`, {
//     method: "GET",
//     headers: {
//       "Authorization": getAuthToken(),
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();
//   if (!data.success) {
//     throw new Error(data.message || "Failed to fetch earnings");
//   }

//   return Array.isArray(data.data.earnings) ? data.data.earnings : [];
// };

// // --- Data Formatting Helpers (Daily: full 7 days) ---
// const formatDailyDataForChart = (earnings) => {
//   const last7Days = generateLast7Days();
//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item?.date && item.total_earnings !== undefined) {
//       earningsMap[item.date] = parseFloat(item.total_earnings);
//     }
//   });

//   return last7Days.map(date => {
//     const dateStr = formatDateForAPI(date);
//     const value = earningsMap[dateStr] || 0;
//     return {
//       name: getDayNameFromDateObj(date), // "Mon", "Tue", etc.
//       value: value,
//       fullDate: dateStr,
//       hasData: earningsMap.hasOwnProperty(dateStr)
//     };
//   });
// };

// const formatDailyDataForTable = (earnings) => {
//   const last7Days = generateLast7Days();
//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item?.date && item.total_earnings !== undefined) {
//       earningsMap[item.date] = parseFloat(item.total_earnings);
//     }
//   });

//   return last7Days.map(date => {
//     const dateStr = formatDateForAPI(date);
//     const value = earningsMap[dateStr];
//     const hasData = value !== undefined;
//     return {
//       date: `${getDayNameFromDateObj(date)} ${date.getDate()}`,
//       income: hasData ? `${value.toFixed(2)} THB` : "—",
//       rawValue: hasData ? value : 0
//     };
//   });
// };

// // --- Monthly formatters (Full 12 months) ---
// const formatMonthlyDataForChart = (earnings) => {
//   // Determine year from first item or use current year
//   const year = earnings.length > 0 && earnings[0]?.year
//     ? earnings[0].year
//     : new Date().getFullYear();

//   // Create map of existing data by month name
//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item?.month && item.total_earnings !== undefined) {
//       earningsMap[item.month] = parseFloat(item.total_earnings);
//     }
//   });

//   // Build all 12 months
//   return ALL_MONTHS.map((monthName, index) => {
//     const value = earningsMap[monthName] || 0;
//     const hasData = earningsMap.hasOwnProperty(monthName);
//     return {
//       name: ALL_MONTHS_SHORT[index],
//       value: value,
//       month: monthName,
//       year: year,
//       hasData: hasData
//     };
//   });
// };

// const formatMonthlyDataForTable = (earnings) => {
//   const year = earnings.length > 0 && earnings[0]?.year
//     ? earnings[0].year
//     : new Date().getFullYear();

//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item?.month && item.total_earnings !== undefined) {
//       earningsMap[item.month] = parseFloat(item.total_earnings);
//     }
//   });

//   return ALL_MONTHS.map((monthName, index) => {
//     const value = earningsMap[monthName];
//     const hasData = value !== undefined;
//     return {
//       date: `${monthName} ${year}`,
//       income: hasData ? `${value.toFixed(2)} THB` : "—",
//       rawValue: hasData ? value : 0
//     };
//   });
// };

// // --- EarningsContent (Main Dashboard View) ---
// const EarningsContent = ({ onSeeMore }) => {
//   const [incomeType, setIncomeType] = useState("daily");
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch data when type changes
//   useEffect(() => {
//     const loadEarnings = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const data = await fetchCustomerEarnings(incomeType);
//         setEarnings(data);
//       } catch (err) {
//         setError(err.message);
//         setEarnings([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadEarnings();
//   }, [incomeType]);

//   // Format data based on type
//   const chartData = useMemo(() => {
//     if (incomeType === "daily") {
//       return formatDailyDataForChart(earnings);
//     }
//     return formatMonthlyDataForChart(earnings);
//   }, [earnings, incomeType]);

//   const tableData = useMemo(() => {
//     if (incomeType === "daily") {
//       return formatDailyDataForTable(earnings);
//     }
//     return formatMonthlyDataForTable(earnings);
//   }, [earnings, incomeType]);

//   // Calculate total income (only from actual data, not filled zeros)
//   const totalIncome = useMemo(() => {
//     return earnings.reduce((sum, item) => sum + parseFloat(item.total_earnings || 0), 0);
//   }, [earnings]);

//   const hasData = chartData.length > 0 && !error;
//   const label = incomeType === "daily" ? "Daily Income" : "Monthly Income";
//   const dateLabel = incomeType === "daily"
//     ? new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
//     : (earnings.length > 0 && earnings[0]?.year) || new Date().getFullYear();

//   return (
//     <div className="earnings-container">
//       {/* Toggle Buttons */}
//       <div className="income-toggle-container">
//         <div className="income-toggle-group">
//           <button
//             className={`income-toggle-btn ${incomeType === "daily" ? "active" : ""}`}
//             onClick={() => setIncomeType("daily")}
//             disabled={loading}
//           >
//             Daily Income
//           </button>
//           <button
//             className={`income-toggle-btn ${incomeType === "monthly" ? "active" : ""}`}
//             onClick={() => setIncomeType("monthly")}
//             disabled={loading}
//           >
//             Monthly Income
//           </button>
//         </div>
//       </div>

//       <motion.div
//         key={incomeType}
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.3 }}
//         className="earnings-card"
//       >
//         {loading ? (
//           <div className="text-center py-5">
//             <Loader2 size={40} className="spin" />
//             <p className="mt-3 text-muted">Loading {incomeType} earnings...</p>
//           </div>
//         ) : error ? (
//           <div className="alert alert-danger m-3">{error}</div>
//         ) : !hasData ? (
//           <div className="text-center py-5">
//             <p className="text-muted">No {incomeType} income data available</p>
//           </div>
//         ) : (
//           <>
//             {/* Header with Total */}
//             <div className="earnings-header">
//               <div>
//                 <h2 className="total-amount">
//                   <span className="font-dollar">฿</span>{" "}
//                   {totalIncome.toLocaleString("en-US", {
//                     minimumFractionDigits: 2,
//                     maximumFractionDigits: 2,
//                   })}
//                 </h2>
//                 <p className="income-label">{label}</p>
//               </div>
//               <div className="current-date">{dateLabel}</div>
//             </div>

//             {/* Chart + Table Side by Side */}
//             <div className="earnings-body">
//               <div className="chart-section">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart data={chartData}>
//                     <defs>
//                       <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3} />
//                         <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
//                       </linearGradient>
//                     </defs>
//                     <CartesianGrid
//                       strokeDasharray="3 3"
//                       vertical={false}
//                       stroke="rgba(255,255,255,0.1)"
//                     />
//                     <XAxis
//                       dataKey="name"
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "white", fontSize: 12 }}
//                       dy={10}
//                     />
//                     <YAxis hide />
//                     <Tooltip
//                       contentStyle={{
//                         backgroundColor: "#e9527a",
//                         border: "1px solid white",
//                         borderRadius: "10px",
//                       }}
//                       itemStyle={{ color: "white" }}
//                       formatter={(value) => [`฿ ${value.toLocaleString()}`, "Income"]}
//                     />
//                     <Area
//                       type="monotone"
//                       dataKey="value"
//                       stroke="#ffffff"
//                       strokeWidth={3}
//                       fillOpacity={1}
//                       fill="url(#colorValue)"
//                       dot={{
//                         r: 6,
//                         fill: "white",
//                         strokeWidth: 2,
//                         stroke: "#e9527a",
//                       }}
//                       activeDot={{ r: 8, fill: "white" }}
//                     />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="table-section">
//                 <table className="income-table">
//                   <thead>
//                     <tr>
//                       <th>Date</th>
//                       <th>Income</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {tableData.map((row, i) => (
//                       <tr key={i}>
//                         <td>{row.date}</td>
//                         <td className="fw-bold">{row.income}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* See More Button */}
//             <div className="see-more-container">
//               <button className="see-more-btn" onClick={onSeeMore}>
//                 See More
//               </button>
//             </div>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// // --- See More Page (placeholder - you can link to your existing DailySeeMore) ---
// const DailySeeMore = ({ onBack }) => {
//   // This component can be replaced with your detailed view
//   const navigate = useNavigate();
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 100 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -100 }}
//       className="see-more-page"
//     >
//       <button className="back-btn" onClick={onBack}>
//         <ArrowLeft size={20} />
//         <span>Back to Earnings</span>
//       </button>
//       <h1 className="see-more-title">Detailed Earnings</h1>
//       <div className="card border-0 shadow-sm rounded-4 p-4">
//         <p>Full earnings history will be displayed here.</p>
//         <button
//           className="btn btn-outline-primary"
//           onClick={() => navigate("/dailyseemore/daily")}
//         >
//           Go to Full Daily See More
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// // --- Main Dashboard Component ---
// export const IncomeDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [showSeeMore, setShowSeeMore] = useState(false);

//   return (
//     <div className="main-container">
//       {/* Mobile Toggle */}
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

//         <main className="p-0">
//           <AnimatePresence mode="wait">
//             {showSeeMore ? (
//               <DailySeeMore key="see-more" onBack={() => setShowSeeMore(false)} />
//             ) : (
//               <motion.div
//                 key="earnings-content"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <EarningsContent onSeeMore={() => setShowSeeMore(true)} />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default IncomeDashboard;

// import React, { useState, useEffect, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Loader2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
// } from "recharts";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/IncomeDashboard.css";

// // --- API Configuration ---
// const API_BASE_URL = "https://sagarxo.app/web-api";
// const getAuthToken = () => localStorage.getItem("token") || "";

// // --- All 12 months for display ---
// const ALL_MONTHS = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// const ALL_MONTHS_SHORT = [
//   "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// ];

// // --- Helper: Get day name from Date object ---
// const getDayNameFromDateObj = (date) => {
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   return days[date.getDay()];
// };

// // --- Helper: Format date as DD/MM/YYYY (matching API format) ---
// const formatDateForAPI = (date) => {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// };

// // --- Helper: Generate last 7 days array ---
// const generateLast7Days = () => {
//   const days = [];
//   const today = new Date();
//   for (let i = 6; i >= 0; i--) {
//     const date = new Date(today);
//     date.setDate(today.getDate() - i);
//     days.push(date);
//   }
//   return days;
// };

// // --- API Service ---
// const fetchCustomerEarnings = async (type) => {
//   const apiTypeMap = {
//     daily: "daily",
//     monthly: "monthly",
//   };
//   const apiType = apiTypeMap[type] || type;

//   const response = await fetch(`${API_BASE_URL}/customer/earnings?type=${apiType}`, {
//     method: "GET",
//     headers: {
//       "Authorization": getAuthToken(),
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();
//   if (!data.success) {
//     throw new Error(data.message || "Failed to fetch earnings");
//   }

//   return Array.isArray(data.data.earnings) ? data.data.earnings : [];
// };

// // --- Data Formatting Helpers (Daily: full 7 days) ---
// const formatDailyDataForChart = (earnings) => {
//   const last7Days = generateLast7Days();
//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item?.date && item.total_earnings !== undefined) {
//       earningsMap[item.date] = parseFloat(item.total_earnings);
//     }
//   });

//   return last7Days.map(date => {
//     const dateStr = formatDateForAPI(date);
//     const value = earningsMap[dateStr] || 0;
//     return {
//       name: getDayNameFromDateObj(date), // "Mon", "Tue", etc.
//       value: value,
//       fullDate: dateStr,
//       hasData: earningsMap.hasOwnProperty(dateStr)
//     };
//   });
// };

// const formatDailyDataForTable = (earnings) => {
//   const last7Days = generateLast7Days();
//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item?.date && item.total_earnings !== undefined) {
//       earningsMap[item.date] = parseFloat(item.total_earnings);
//     }
//   });

//   return last7Days.map(date => {
//     const dateStr = formatDateForAPI(date);
//     const value = earningsMap[dateStr];
//     const hasData = value !== undefined;
//     return {
//       date: `${getDayNameFromDateObj(date)} ${date.getDate()}`,
//       income: hasData ? `${value.toFixed(2)} THB` : "—",
//       rawValue: hasData ? value : 0
//     };
//   });
// };

// // --- Monthly formatters (Full 12 months) ---
// const formatMonthlyDataForChart = (earnings) => {
//   // Determine year from first item or use current year
//   const year = earnings.length > 0 && earnings[0]?.year
//     ? earnings[0].year
//     : new Date().getFullYear();

//   // Create map of existing data by month name
//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item?.month && item.total_earnings !== undefined) {
//       earningsMap[item.month] = parseFloat(item.total_earnings);
//     }
//   });

//   // Build all 12 months
//   return ALL_MONTHS.map((monthName, index) => {
//     const value = earningsMap[monthName] || 0;
//     const hasData = earningsMap.hasOwnProperty(monthName);
//     return {
//       name: ALL_MONTHS_SHORT[index],
//       value: value,
//       month: monthName,
//       year: year,
//       hasData: hasData
//     };
//   });
// };

// const formatMonthlyDataForTable = (earnings) => {
//   const year = earnings.length > 0 && earnings[0]?.year
//     ? earnings[0].year
//     : new Date().getFullYear();

//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item?.month && item.total_earnings !== undefined) {
//       earningsMap[item.month] = parseFloat(item.total_earnings);
//     }
//   });

//   return ALL_MONTHS.map((monthName, index) => {
//     const value = earningsMap[monthName];
//     const hasData = value !== undefined;
//     return {
//       date: `${monthName} ${year}`,
//       income: hasData ? `${value.toFixed(2)} THB` : "—",
//       rawValue: hasData ? value : 0
//     };
//   });
// };

// // --- EarningsContent (Main Dashboard View) ---
// const EarningsContent = () => {
//   const [incomeType, setIncomeType] = useState("daily");
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // ← Added navigation

//   // Fetch data when type changes
//   useEffect(() => {
//     const loadEarnings = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const data = await fetchCustomerEarnings(incomeType);
//         setEarnings(data);
//       } catch (err) {
//         setError(err.message);
//         setEarnings([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadEarnings();
//   }, [incomeType]);

//   // Format data based on type
//   const chartData = useMemo(() => {
//     if (incomeType === "daily") {
//       return formatDailyDataForChart(earnings);
//     }
//     return formatMonthlyDataForChart(earnings);
//   }, [earnings, incomeType]);

//   const tableData = useMemo(() => {
//     if (incomeType === "daily") {
//       return formatDailyDataForTable(earnings);
//     }
//     return formatMonthlyDataForTable(earnings);
//   }, [earnings, incomeType]);

//   // Calculate total income (only from actual data, not filled zeros)
//   const totalIncome = useMemo(() => {
//     return earnings.reduce((sum, item) => sum + parseFloat(item.total_earnings || 0), 0);
//   }, [earnings]);

//   const hasData = chartData.length > 0 && !error;
//   const label = incomeType === "daily" ? "Daily Income" : "Monthly Income";
//   const dateLabel = incomeType === "daily"
//     ? new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
//     : (earnings.length > 0 && earnings[0]?.year) || new Date().getFullYear();

//   // Navigate to See More page with current type
//   const handleSeeMore = () => {
//     navigate(`/dailyseemore/${incomeType}`);
//   };

//   return (
//     <div className="earnings-container">
//       {/* Toggle Buttons */}
//       <div className="income-toggle-container">
//         <div className="income-toggle-group">
//           <button
//             className={`income-toggle-btn ${incomeType === "daily" ? "active" : ""}`}
//             onClick={() => setIncomeType("daily")}
//             disabled={loading}
//           >
//             Daily Income
//           </button>
//           <button
//             className={`income-toggle-btn ${incomeType === "monthly" ? "active" : ""}`}
//             onClick={() => setIncomeType("monthly")}
//             disabled={loading}
//           >
//             Monthly Income
//           </button>
//         </div>
//       </div>

//       <motion.div
//         key={incomeType}
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.3 }}
//         className="earnings-card"
//       >
//         {loading ? (
//           <div className="text-center py-5">
//             <Loader2 size={40} className="spin" />
//             <p className="mt-3 text-muted">Loading {incomeType} earnings...</p>
//           </div>
//         ) : error ? (
//           <div className="alert alert-danger m-3">{error}</div>
//         ) : !hasData ? (
//           <div className="text-center py-5">
//             <p className="text-muted">No {incomeType} income data available</p>
//           </div>
//         ) : (
//           <>
//             {/* Header with Total */}
//             <div className="earnings-header">
//               <div>
//                 <h2 className="total-amount">
//                   <span className="font-dollar">฿</span>{" "}
//                   {totalIncome.toLocaleString("en-US", {
//                     minimumFractionDigits: 2,
//                     maximumFractionDigits: 2,
//                   })}
//                 </h2>
//                 <p className="income-label">{label}</p>
//               </div>
//               <div className="current-date">{dateLabel}</div>
//             </div>

//             {/* Chart + Table Side by Side */}
//             <div className="earnings-body">
//               <div className="chart-section">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart data={chartData}>
//                     <defs>
//                       <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3} />
//                         <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
//                       </linearGradient>
//                     </defs>
//                     <CartesianGrid
//                       strokeDasharray="3 3"
//                       vertical={false}
//                       stroke="rgba(255,255,255,0.1)"
//                     />
//                     <XAxis
//                       dataKey="name"
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "white", fontSize: 12 }}
//                       dy={10}
//                     />
//                     <YAxis hide />
//                     <Tooltip
//                       contentStyle={{
//                         backgroundColor: "#e9527a",
//                         border: "1px solid white",
//                         borderRadius: "10px",
//                       }}
//                       itemStyle={{ color: "white" }}
//                       formatter={(value) => [`฿ ${value.toLocaleString()}`, "Income"]}
//                     />
//                     <Area
//                       type="monotone"
//                       dataKey="value"
//                       stroke="#ffffff"
//                       strokeWidth={3}
//                       fillOpacity={1}
//                       fill="url(#colorValue)"
//                       dot={{
//                         r: 6,
//                         fill: "white",
//                         strokeWidth: 2,
//                         stroke: "#e9527a",
//                       }}
//                       activeDot={{ r: 8, fill: "white" }}
//                     />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="table-section">
//                 <table className="income-table">
//                   <thead>
//                     <tr>
//                       <th>Date</th>
//                       <th>Income</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {tableData.map((row, i) => (
//                       <tr key={i}>
//                         <td>{row.date}</td>
//                         <td className="fw-bold">{row.income}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* See More Button */}
//             <div className="see-more-container">
//               <button className="see-more-btn" onClick={handleSeeMore}>
//                 See More
//               </button>
//             </div>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// // --- Main Dashboard Component ---
// export const IncomeDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="main-container">
//       {/* Mobile Toggle */}
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

//         <main className="p-0">
//           <EarningsContent />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default IncomeDashboard;

// import React, { useState, useEffect, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Loader2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
// } from "recharts";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/IncomeDashboard.css";

// // --- API Configuration ---
// const API_BASE_URL = "https://sagarxo.app/web-api";
// const getAuthToken = () => localStorage.getItem("token") || "";

// // --- All 12 months for display ---
// const ALL_MONTHS = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// const ALL_MONTHS_SHORT = [
//   "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// ];

// // --- Helper: Get day name from Date object (localised later) ---
// const getDayNameFromDateObj = (date, locale = "en") => {
//   return date.toLocaleDateString(locale === "th" ? "th-TH" : "en-US", { weekday: "short" });
// };

// // --- Helper: Format date as DD/MM/YYYY (matching API format) ---
// const formatDateForAPI = (date) => {
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// };

// // --- Helper: Generate last 7 days array ---
// const generateLast7Days = () => {
//   const days = [];
//   const today = new Date();
//   for (let i = 6; i >= 0; i--) {
//     const date = new Date(today);
//     date.setDate(today.getDate() - i);
//     days.push(date);
//   }
//   return days;
// };

// // --- API Service ---
// const fetchCustomerEarnings = async (type) => {
//   const apiTypeMap = {
//     daily: "daily",
//     monthly: "monthly",
//   };
//   const apiType = apiTypeMap[type] || type;

//   const response = await fetch(`${API_BASE_URL}/customer/earnings?type=${apiType}`, {
//     method: "GET",
//     headers: {
//       "Authorization": getAuthToken(),
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();
//   if (!data.success) {
//     throw new Error(data.message || "Failed to fetch earnings");
//   }

//   return Array.isArray(data.data.earnings) ? data.data.earnings : [];
// };

// // --- Data Formatting Helpers (with locale support) ---
// const formatDailyDataForChart = (earnings, locale) => {
//   const last7Days = generateLast7Days();
//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item?.date && item.total_earnings !== undefined) {
//       earningsMap[item.date] = parseFloat(item.total_earnings);
//     }
//   });

//   return last7Days.map(date => {
//     const dateStr = formatDateForAPI(date);
//     const value = earningsMap[dateStr] || 0;
//     return {
//       name: getDayNameFromDateObj(date, locale),
//       value: value,
//       fullDate: dateStr,
//       hasData: earningsMap.hasOwnProperty(dateStr)
//     };
//   });
// };

// const formatDailyDataForTable = (earnings, locale) => {
//   const last7Days = generateLast7Days();
//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item?.date && item.total_earnings !== undefined) {
//       earningsMap[item.date] = parseFloat(item.total_earnings);
//     }
//   });

//   return last7Days.map(date => {
//     const dateStr = formatDateForAPI(date);
//     const value = earningsMap[dateStr];
//     const hasData = value !== undefined;
//     // Format date: e.g., "Mon 15" or "จ. 15" depending on locale
//     const dayName = getDayNameFromDateObj(date, locale);
//     const dayNum = date.getDate();
//     return {
//       date: `${dayName} ${dayNum}`,
//       income: hasData ? value : 0,
//       incomeDisplay: hasData ? formatCurrencyValue(value, locale) : "—"
//     };
//   });
// };

// const formatMonthlyDataForChart = (earnings, locale) => {
//   const year = earnings.length > 0 && earnings[0]?.year
//     ? earnings[0].year
//     : new Date().getFullYear();

//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item?.month && item.total_earnings !== undefined) {
//       earningsMap[item.month] = parseFloat(item.total_earnings);
//     }
//   });

//   // For chart, month names are short (Jan, Feb, etc.) – we want them localized?
//   // But recharts uses string as is, so we keep English short names for simplicity.
//   // If you want localized month names, you'd need to map. We'll keep as is.
//   return ALL_MONTHS.map((monthName, index) => {
//     const value = earningsMap[monthName] || 0;
//     return {
//       name: ALL_MONTHS_SHORT[index],
//       value: value,
//       month: monthName,
//       year: year,
//       hasData: earningsMap.hasOwnProperty(monthName)
//     };
//   });
// };

// const formatMonthlyDataForTable = (earnings, locale) => {
//   const year = earnings.length > 0 && earnings[0]?.year
//     ? earnings[0].year
//     : new Date().getFullYear();

//   const earningsMap = {};
//   earnings.forEach(item => {
//     if (item?.month && item.total_earnings !== undefined) {
//       earningsMap[item.month] = parseFloat(item.total_earnings);
//     }
//   });

//   return ALL_MONTHS.map((monthName, index) => {
//     const value = earningsMap[monthName];
//     const hasData = value !== undefined;
//     // Format month name in current locale
//     const localizedMonth = new Date(year, index, 1).toLocaleDateString(
//       locale === "th" ? "th-TH" : "en-US",
//       { month: "long" }
//     );
//     return {
//       date: `${localizedMonth} ${year}`,
//       income: hasData ? value : 0,
//       incomeDisplay: hasData ? formatCurrencyValue(value, locale) : "—"
//     };
//   });
// };

// // Helper to format number as currency (no symbol, just number)
// const formatNumber = (value, locale = "en") => {
//   return value.toLocaleString(locale === "th" ? "th-TH" : "en-US", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });
// };

// const formatCurrencyValue = (value, locale) => {
//   return `${formatNumber(value, locale)} ${locale === "th" ? "บาท" : "THB"}`;
// };

// // --- EarningsContent (Main Dashboard View) ---
// const EarningsContent = () => {
//   const { t, i18n } = useTranslation();
//   const [incomeType, setIncomeType] = useState("daily");
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Fetch data when type changes
//   useEffect(() => {
//     const loadEarnings = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const data = await fetchCustomerEarnings(incomeType);
//         setEarnings(data);
//       } catch (err) {
//         setError(err.message);
//         setEarnings([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadEarnings();
//   }, [incomeType]);

//   // Format data based on type and current language
//   const chartData = useMemo(() => {
//     if (incomeType === "daily") {
//       return formatDailyDataForChart(earnings, i18n.language);
//     }
//     return formatMonthlyDataForChart(earnings, i18n.language);
//   }, [earnings, incomeType, i18n.language]);

//   const tableData = useMemo(() => {
//     if (incomeType === "daily") {
//       return formatDailyDataForTable(earnings, i18n.language);
//     }
//     return formatMonthlyDataForTable(earnings, i18n.language);
//   }, [earnings, incomeType, i18n.language]);

//   // Calculate total income (only from actual data, not filled zeros)
//   const totalIncome = useMemo(() => {
//     return earnings.reduce((sum, item) => sum + parseFloat(item.total_earnings || 0), 0);
//   }, [earnings]);

//   const hasData = chartData.length > 0 && !error;
//   const label = incomeType === "daily" ? t("incomeDashboard.dailyIncome") : t("incomeDashboard.monthlyIncome");

//   const dateLabel = incomeType === "daily"
//     ? new Date().toLocaleDateString(i18n.language === "th" ? "th-TH" : "en-GB", {
//         day: "numeric",
//         month: "short",
//         year: "numeric",
//       })
//     : (earnings.length > 0 && earnings[0]?.year) || new Date().getFullYear();

//   // Navigate to See More page with current type
//   const handleSeeMore = () => {
//     navigate(`/dailyseemore/${incomeType}`);
//   };

//   // Helper for tooltip formatter
//   const tooltipFormatter = (value) => {
//     return [`${formatNumber(value, i18n.language)} ${i18n.language === "th" ? "บาท" : "THB"}`, t("incomeDashboard.tooltipIncome")];
//   };

//   return (
//     <div className="earnings-container">
//       {/* Toggle Buttons */}
//       <div className="income-toggle-container">
//         <div className="income-toggle-group">
//           <button
//             className={`income-toggle-btn ${incomeType === "daily" ? "active" : ""}`}
//             onClick={() => setIncomeType("daily")}
//             disabled={loading}
//           >
//             {t("incomeDashboard.dailyIncome")}
//           </button>
//           <button
//             className={`income-toggle-btn ${incomeType === "monthly" ? "active" : ""}`}
//             onClick={() => setIncomeType("monthly")}
//             disabled={loading}
//           >
//             {t("incomeDashboard.monthlyIncome")}
//           </button>
//         </div>
//       </div>

//       <motion.div
//         key={incomeType}
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.3 }}
//         className="earnings-card"
//       >
//         {loading ? (
//           <div className="text-center py-5">
//             <Loader2 size={40} className="spin" />
//             <p className="mt-3 text-muted">
//               {incomeType === "daily" ? t("incomeDashboard.loadingDaily") : t("incomeDashboard.loadingMonthly")}
//             </p>
//           </div>
//         ) : error ? (
//           <div className="alert alert-danger m-3">{error}</div>
//         ) : !hasData ? (
//           <div className="text-center py-5">
//             <p className="text-muted">
//               {t("incomeDashboard.noData", { type: label.toLowerCase() })}
//             </p>
//           </div>
//         ) : (
//           <>
//             {/* Header with Total */}
//             <div className="earnings-header">
//               <div>
//                 <h2 className="total-amount">
//                   <span className="font-dollar">฿</span>{" "}
//                   {formatNumber(totalIncome, i18n.language)}
//                 </h2>
//                 <p className="income-label">{label}</p>
//               </div>
//               <div className="current-date">{dateLabel}</div>
//             </div>

//             {/* Chart + Table Side by Side */}
//             <div className="earnings-body">
//               <div className="chart-section">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart data={chartData}>
//                     <defs>
//                       <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3} />
//                         <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
//                       </linearGradient>
//                     </defs>
//                     <CartesianGrid
//                       strokeDasharray="3 3"
//                       vertical={false}
//                       stroke="rgba(255,255,255,0.1)"
//                     />
//                     <XAxis
//                       dataKey="name"
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "white", fontSize: 12 }}
//                       dy={10}
//                     />
//                     <YAxis hide />
//                     <Tooltip
//                       contentStyle={{
//                         backgroundColor: "#e9527a",
//                         border: "1px solid white",
//                         borderRadius: "10px",
//                       }}
//                       itemStyle={{ color: "white" }}
//                       formatter={tooltipFormatter}
//                     />
//                     <Area
//                       type="monotone"
//                       dataKey="value"
//                       stroke="#ffffff"
//                       strokeWidth={3}
//                       fillOpacity={1}
//                       fill="url(#colorValue)"
//                       dot={{
//                         r: 6,
//                         fill: "white",
//                         strokeWidth: 2,
//                         stroke: "#e9527a",
//                       }}
//                       activeDot={{ r: 8, fill: "white" }}
//                     />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="table-section">
//                 <table className="income-table">
//                   <thead>
//                     <tr>
//                       <th>{t("incomeDashboard.date")}</th>
//                       <th>{t("incomeDashboard.income")}</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {tableData.map((row, i) => (
//                       <tr key={i}>
//                         <td>{row.date}</td>
//                         <td className="fw-bold">{row.incomeDisplay}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* See More Button */}
//             <div className="see-more-container">
//               <button className="see-more-btn" onClick={handleSeeMore}>
//                 {t("incomeDashboard.seeMore")}
//               </button>
//             </div>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// // --- Main Dashboard Component ---
// export const IncomeDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="main-container">
//       {/* Mobile Toggle */}
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

//         <main className="p-0">
//           <EarningsContent />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default IncomeDashboard;

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../css/IncomeDashboard.css";

const API_BASE_URL = "https://sagarxo.app/web-api";
const getAuthToken = () => localStorage.getItem("token") || "";

const ALL_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDayNameFromDateObj = (date, locale = "en") => {
  return date.toLocaleDateString(locale === "th" ? "th-TH" : "en-US", {
    weekday: "short",
  });
};

const formatDateForAPI = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const generateLast7Days = () => {
  const days = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    days.push(date);
  }
  return days;
};

const fetchCustomerEarnings = async (type) => {
  const apiType = type === "daily" ? "daily" : "monthly";
  const response = await fetch(
    `${API_BASE_URL}/customer/earnings?type=${apiType}`,
    {
      method: "GET",
      headers: {
        Authorization: getAuthToken(),
        "Content-Type": "application/json",
      },
    },
  );
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data = await response.json();
  if (!data.success)
    throw new Error(data.message || "Failed to fetch earnings");
  return Array.isArray(data.data.earnings) ? data.data.earnings : [];
};

// ---- daily formatters (unchanged) ----
const formatDailyDataForChart = (earnings, locale) => {
  const last7Days = generateLast7Days();
  const earningsMap = {};
  earnings.forEach((item) => {
    if (item?.date && item.total_earnings !== undefined)
      earningsMap[item.date] = parseFloat(item.total_earnings);
  });
  return last7Days.map((date) => ({
    name: getDayNameFromDateObj(date, locale),
    value: earningsMap[formatDateForAPI(date)] || 0,
    fullDate: formatDateForAPI(date),
    hasData: earningsMap.hasOwnProperty(formatDateForAPI(date)),
  }));
};

const formatDailyDataForTable = (earnings, locale) => {
  const last7Days = generateLast7Days();
  const earningsMap = {};
  earnings.forEach((item) => {
    if (item?.date && item.total_earnings !== undefined)
      earningsMap[item.date] = parseFloat(item.total_earnings);
  });
  return last7Days.map((date) => {
    const dateStr = formatDateForAPI(date);
    const value = earningsMap[dateStr];
    const hasData = value !== undefined;
    const dayName = getDayNameFromDateObj(date, locale);
    const dayNum = date.getDate();
    return {
      date: `${dayName} ${dayNum}`,
      income: hasData ? value : 0,
      incomeDisplay: hasData ? formatCurrencyValue(value, locale) : "—",
    };
  });
};

// ---- monthly formatters (FIXED: localised short month names for chart) ----
const getShortMonthNames = (locale) => {
  // Returns an array of 12 short month names in current language (e.g.: Jan, Feb... or ม.ค., ก.พ....)
  const baseDate = new Date(2020, 0, 1); // any year with 12 months
  const months = [];
  for (let i = 0; i < 12; i++) {
    const date = new Date(2020, i, 1);
    months.push(
      date.toLocaleDateString(locale === "th" ? "th-TH" : "en-US", {
        month: "short",
      }),
    );
  }
  return months;
};

const formatMonthlyDataForChart = (earnings, locale) => {
  const year =
    earnings.length > 0 && earnings[0]?.year
      ? earnings[0].year
      : new Date().getFullYear();

  const earningsMap = {};
  earnings.forEach((item) => {
    if (item?.month && item.total_earnings !== undefined)
      earningsMap[item.month] = parseFloat(item.total_earnings);
  });

  const shortMonths = getShortMonthNames(locale);

  return ALL_MONTHS.map((monthName, index) => {
    const value = earningsMap[monthName] || 0;
    return {
      name: shortMonths[index], // localised short month (e.g. "ม.ค." for Thai)
      value: value,
      month: monthName,
      year: year,
      hasData: earningsMap.hasOwnProperty(monthName),
    };
  });
};

const formatMonthlyDataForTable = (earnings, locale) => {
  const year =
    earnings.length > 0 && earnings[0]?.year
      ? earnings[0].year
      : new Date().getFullYear();

  const earningsMap = {};
  earnings.forEach((item) => {
    if (item?.month && item.total_earnings !== undefined)
      earningsMap[item.month] = parseFloat(item.total_earnings);
  });

  return ALL_MONTHS.map((monthName, index) => {
    const value = earningsMap[monthName];
    const hasData = value !== undefined;
    const localizedMonth = new Date(year, index, 1).toLocaleDateString(
      locale === "th" ? "th-TH" : "en-US",
      { month: "long" },
    );
    return {
      date: `${localizedMonth} ${year}`,
      income: hasData ? value : 0,
      incomeDisplay: hasData ? formatCurrencyValue(value, locale) : "—",
    };
  });
};

// ---- numeric helpers ----
// const formatNumber = (value, locale = "en") => {
//   return value.toLocaleString(locale === "th" ? "th-TH" : "en-US", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });
// };


const formatNumber = (value, locale = "en") => {
  const num = parseInt(value) || 0;

  return num.toLocaleString(
    locale === "th" ? "th-TH" : "en-US"
  );
};

const formatCurrencyValue = (value, locale) => {
  return `${formatNumber(value, locale)} ${locale === "th" ? "บาท" : "THB"}`;
};

// ---- main content component ----
const EarningsContent = () => {
  const { t, i18n } = useTranslation();
  const [incomeType, setIncomeType] = useState("daily");
  const [earnings, setEarnings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadEarnings = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCustomerEarnings(incomeType);
        setEarnings(data);
      } catch (err) {
        setError(err.message);
        setEarnings([]);
      } finally {
        setLoading(false);
      }
    };
    loadEarnings();
  }, [incomeType]);

  // Re‑compute chart & table data when language changes
  const chartData = useMemo(() => {
    if (incomeType === "daily") {
      return formatDailyDataForChart(earnings, i18n.language);
    }
    return formatMonthlyDataForChart(earnings, i18n.language);
  }, [earnings, incomeType, i18n.language]);

  const tableData = useMemo(() => {
    if (incomeType === "daily") {
      return formatDailyDataForTable(earnings, i18n.language);
    }
    return formatMonthlyDataForTable(earnings, i18n.language);
  }, [earnings, incomeType, i18n.language]);

  // const totalIncome = useMemo(() => {
  //   return earnings.reduce(
  //     (sum, item) => sum + parseFloat(item.total_earnings || 0),
  //     0,
  //   );
  // }, [earnings]);

  // const totalIncome = useMemo(() => {
  //   // DAILY → show only today's earning
  //   if (incomeType === "daily") {
  //     const today = formatDateForAPI(new Date());

  //     const todayData = earnings.find((item) => item.date === today);

  //     return todayData ? parseFloat(todayData.total_earnings || 0) : 0;
  //   }

  //   // MONTHLY → show full month total
  //   return earnings.reduce(
  //     (sum, item) => sum + parseFloat(item.total_earnings || 0),
  //     0,
  //   );
  // }, [earnings, incomeType]);

  const totalIncome = useMemo(() => {

  // =========================
  // DAILY INCOME
  // =========================
  if (incomeType === "daily") {

    const today = formatDateForAPI(new Date());

    const todayData = earnings.find(
      (item) => item.date === today
    );

    return todayData
      ? parseFloat(todayData.total_earnings || 0)
      : 0;
  }

  // =========================
  // MONTHLY INCOME
  // ONLY CURRENT RUNNING MONTH
  // =========================

  const currentMonth = new Date().toLocaleString("en-US", {
    month: "long",
  });

  const currentYear = new Date().getFullYear();

  const currentMonthData = earnings.filter(
    (item) =>
      item.month === currentMonth &&
      Number(item.year) === currentYear
  );

  return currentMonthData.reduce(
    (sum, item) => sum + parseFloat(item.total_earnings || 0),
    0
  );

}, [earnings, incomeType]);
  const hasData = chartData.length > 0 && !error;
  const label =
    incomeType === "daily"
      ? t("incomeDashboard.dailyIncome")
      : t("incomeDashboard.monthlyIncome");
  const dateLabel =
    incomeType === "daily"
      ? new Date().toLocaleDateString(
          i18n.language === "th" ? "th-TH" : "en-GB",
          {
            day: "numeric",
            month: "short",
            year: "numeric",
          },
        )
      : (earnings.length > 0 && earnings[0]?.year) || new Date().getFullYear();

  const handleSeeMore = () => navigate(`/dailyseemore/${incomeType}`);

  const tooltipFormatter = (value) => {
    return [
      `${formatNumber(value, i18n.language)} ${i18n.language === "th" ? "บาท" : "THB"}`,
      t("incomeDashboard.tooltipIncome"),
    ];
  };

  return (
    <div className="earnings-container">
      <div className="income-toggle-container">
        <div className="income-toggle-group">
          <button
            className={`income-toggle-btn ${incomeType === "daily" ? "active" : ""}`}
            onClick={() => setIncomeType("daily")}
            disabled={loading}
          >
            {t("incomeDashboard.dailyIncome")}
          </button>
          <button
            className={`income-toggle-btn ${incomeType === "monthly" ? "active" : ""}`}
            onClick={() => setIncomeType("monthly")}
            disabled={loading}
          >
            {t("incomeDashboard.monthlyIncome")}
          </button>
        </div>
      </div>

      <motion.div
        key={incomeType}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="earnings-card"
      >
        {loading ? (
          <div className="text-center py-5">
            <Loader2 size={40} className="spin" />
            <p className="mt-3 text-muted">
              {incomeType === "daily"
                ? t("incomeDashboard.loadingDaily")
                : t("incomeDashboard.loadingMonthly")}
            </p>
          </div>
        ) : error ? (
          <div className="alert alert-danger m-3">{error}</div>
        ) : !hasData ? (
          <div className="text-center py-5">
            <p className="text-muted">
              {t("incomeDashboard.noData", { type: label.toLowerCase() })}
            </p>
          </div>
        ) : (
          <>
            {/* <div className="earnings-header">
              <div>
                <h2 className="total-amount">
                  <span className="font-dollar">฿</span>{" "}
                  {formatNumber(totalIncome, i18n.language)}
                </h2>
                <p className="income-label">{label}</p>
              </div>
              <div className="current-date">{dateLabel}</div>
            </div> */}

            <div className="earnings-header">
              <div className="income-header-left">
                <p className="income-label">
                  {incomeType === "daily"
                    ? t("incomeDashboard.dailyIncome")
                    : t("incomeDashboard.monthlyIncome")}
                </p>

                <h2 className="total-amount">
                  <span className="font-dollar">฿</span>

                  {formatNumber(totalIncome, i18n.language)}

                  <span className="thb-text">
                    {i18n.language === "th" ? "บาท" : "THB"}
                  </span>
                </h2>
              </div>

              <div className="current-date">{dateLabel}</div>
            </div>

            <div className="earnings-body">
              <div className="chart-section">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient
                        id="colorValue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#ffffff"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#ffffff"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="rgba(255,255,255,0.1)"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "white", fontSize: 12 }}
                      dy={10}
                      interval={0}
                      padding={{ left: 20, right: 20 }}
                    />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#e9527a",
                        border: "1px solid white",
                        borderRadius: "10px",
                      }}
                      itemStyle={{ color: "white" }}
                      formatter={tooltipFormatter}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#ffffff"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorValue)"
                      dot={{
                        r: 6,
                        fill: "white",
                        strokeWidth: 2,
                        stroke: "#e9527a",
                      }}
                      activeDot={{ r: 8, fill: "white" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="table-section">
                <table className="income-table">
                  <thead>
                    <tr>
                      <th>{t("incomeDashboard.date")}</th>
                      <th>{t("incomeDashboard.income")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, i) => (
                      <tr key={i}>
                        <td>{row.date}</td>
                        <td className="fw-bold">{row.incomeDisplay}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="see-more-container">
              <button className="see-more-btn" onClick={handleSeeMore}>
                {t("incomeDashboard.seeMore")}
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export const IncomeDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="main-container">
      <button
        className="mobile-toggle d-none"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>
      {isSidebarOpen && (
        <div
          className="sidebar-overlay d-lg-none"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="main-wrapper">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="p-0">
          <EarningsContent />
        </main>
      </div>
    </div>
  );
};

export default IncomeDashboard;
