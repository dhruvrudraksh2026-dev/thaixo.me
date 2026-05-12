// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Dashboard.css";
// import Coinicon from "../assets/Coinicon.png";

// import { Menu, X, Bell, Wallet, TrendingUp, Calendar } from "lucide-react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";

// const chartData = [
//   { name: "Mon", value: 2000 },
//   { name: "Tue", value: 4500 },
//   { name: "Wed", value: 4200 },
//   { name: "Thu", value: 5800 },
//   { name: "Fri", value: 7200 },
//   { name: "Sat", value: 6800 },
//   { name: "Sun", value: 9500 },
// ];

// const weeklyList = [
//   { date: "18/11/2025", income: "78 THB" },
//   { date: "17/11/2025", income: "65 THB" },
//   { date: "16/11/2025", income: "60 THB" },
//   { date: "15/11/2025", income: "50 THB" },
//   { date: "14/11/2025", income: "48 THB" },
//   { date: "13/11/2025", income: "40 THB" },
//   { date: "12/11/2025", income: "38 THB" },
// ];

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="d-flex min-vh-100 bg-white">
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

//       {/* Main Content */}
//       <main className="main-content flex-grow-1">
//         {/* Header Section */}
//         {/* <Header /> */}
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//         {/* Welcome Section */}
//         <div className="mb-4 px-4">
//           <h3 className="h3 fw-bold text-dark mt-4">
//             Welcome back Binish_Saba!
//           </h3>
//         </div>

//         {/* Stats Cards */}
//         <Row className="g-4 mb-5 px-4">
//           <Col xs={12} md={4}>
//             <Card
//               className="stat-card"
//               style={{ paddingRight: "0px", paddingBottom: "0px" }}
//             >
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   Current Balance
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span> 12,000
//                 </h4>
//                 {/* <Wallet className="stat-card-icon" /> */}

//                 <img
//                   src={Coinicon}
//                   alt="Image-not-found"
//                   className="img-fluid"
//                   style={{
//                     marginLeft: "auto",
//                     display: "block",
//                     width: "40px",
//                   }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={12} md={4}>
//             <Card
//               className="stat-card"
//               style={{ paddingRight: "0px", paddingBottom: "0px" }}
//             >
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   Today's Earnings
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span> 4,000
//                 </h4>
//                 <img
//                   src={Coinicon}
//                   alt="Image-not-found"
//                   className="img-fluid"
//                   style={{
//                     marginLeft: "auto",
//                     display: "block",
//                     width: "40px",
//                   }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={12} md={4}>
//             <Card
//               className="stat-card"
//               style={{ paddingRight: "0px", paddingBottom: "0px" }}
//             >
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   Last Month Earnings
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span> 2,000
//                 </h4>
//                 <img
//                   src={Coinicon}
//                   alt="Image-not-found"
//                   className="img-fluid"
//                   style={{
//                     marginLeft: "auto",
//                     display: "block",
//                     width: "40px",
//                   }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         {/* Content Grid */}
//         <Row className="g-5 px-4">
//           {/* Graph Section */}
//           <Col xs={12} lg={8}>
//             <div className="mb-4">
//               <h5 className="h5 fw-bold text-dark mb-1">Earning Graph</h5>
//               <p className="small text-muted d-flex align-items-center mb-0">
//                 Weekly Progress <span className="pink-dot"></span> 12200
//               </p>
//             </div>
//             <div style={{ height: "300px", width: "100%" }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={chartData}>
//                   <defs>
//                     <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#e95d82" stopOpacity={0.3} />
//                       <stop offset="95%" stopColor="#e95d82" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid
//                     strokeDasharray="3 3"
//                     vertical={false}
//                     stroke="#f0f0f0"
//                   />
//                   <XAxis
//                     dataKey="name"
//                     axisLine={false}
//                     tickLine={false}
//                     tick={{ fill: "#999", fontSize: 12 }}
//                     dy={10}
//                   />
//                   <YAxis hide />
//                   <Tooltip
//                     contentStyle={{
//                       borderRadius: "12px",
//                       border: "none",
//                       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                     }}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="value"
//                     stroke="#e95d82"
//                     strokeWidth={3}
//                     fillOpacity={1}
//                     fill="url(#colorValue)"
//                     dot={{
//                       r: 4,
//                       fill: "#e95d82",
//                       strokeWidth: 2,
//                       stroke: "#fff",
//                     }}
//                     activeDot={{
//                       r: 6,
//                       fill: "#e95d82",
//                       strokeWidth: 2,
//                       stroke: "#fff",
//                     }}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </Col>

//           {/* Weekly List Section */}
//           <Col xs={12} lg={4}>
//             <h5 className="h5 fw-bold text-dark mb-4">Weekly list</h5>
//             <div className="border rounded-3 overflow-hidden">
//               <Table responsive className="custom-table mb-0">
//                 <thead>
//                   <tr>
//                     <th className="px-3 py-3">Date</th>
//                     <th className="px-3 py-3 text-end">Income</th>
//                   </tr>
//                 </thead>
//                 <tbody className="border-top-0">
//                   {weeklyList.map((item, index) => (
//                     <tr key={index}>
//                       <td className="px-3 py-3 text-muted">{item.date}</td>
//                       <td className="px-3 py-3 text-end fw-semibold text-dark">
//                         {item.income}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </div>
//           </Col>
//         </Row>
//       </main>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Dashboard.css";
// import Coinicon from "../assets/Coinicon.png";
// import axios from "axios";

// import { Menu, X, Bell, Wallet, TrendingUp, Calendar, AlertCircle } from "lucide-react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";

// // Static chart data (kept as is)
// const chartData = [
//   { name: "Mon", value: 2000 },
//   { name: "Tue", value: 4500 },
//   { name: "Wed", value: 4200 },
//   { name: "Thu", value: 5800 },
//   { name: "Fri", value: 7200 },
//   { name: "Sat", value: 6800 },
//   { name: "Sun", value: 9500 },
// ];

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [stats, setStats] = useState({
//     current_balance: "0.00",
//     today_earnings: "0.00",
//     last_month_earnings: "0.00"
//   });
//   const [weeklyEarnings, setWeeklyEarnings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [userName, setUserName] = useState("User");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchEarningsStats();
//     fetchWeeklyEarnings();
//   }, []);

//   const fetchEarningsStats = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("Token from localStorage:", token);

//       if (!token) {
//         console.log("No token found, redirecting to login");
//         setError("Please login to view dashboard");
//         setLoading(false);
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/earnings-stats`;
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
//         console.log("Earnings stats received:", data.data);
//         setStats({
//           current_balance: parseFloat(data.data.current_balance || 0).toFixed(2),
//           today_earnings: parseFloat(data.data.today_earnings || 0).toFixed(2),
//           last_month_earnings: parseFloat(data.data.last_month_earnings || 0).toFixed(2)
//         });

//         const storedName = localStorage.getItem("userName");
//         if (storedName) setUserName(storedName);
//       } else {
//         console.log("API returned success=false:", data.message);
//         setError(data.message || 'Failed to fetch earnings stats');
//       }
//     } catch (err) {
//       console.error("Error fetching earnings stats:", err);
//       console.error("Error response:", err.response);

//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         setError("Authentication failed. Please login again.");
//         localStorage.removeItem("token");
//         setTimeout(() => navigate('/'), 2000);
//       } else {
//         setError(err.response?.data?.message || 'An error occurred while fetching dashboard data');
//       }
//     } finally {
//       if (!weeklyEarnings.length) {
//         setLoading(false);
//       }
//     }
//   };

//   // NEW: Fetch weekly earnings from API with type=weekly
//   const fetchWeeklyEarnings = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/earnings?type=weekly`;
//       console.log("Fetching weekly earnings from URL:", apiUrl);

//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${token}`
//         },
//         withCredentials: true,
//       });

//       console.log("Weekly Earnings API Response:", response);
//       const data = response.data;

//       if (data.loginRequired) {
//         console.log("Login required for weekly earnings");
//         return;
//       }

//       if (data.success && data.data && data.data.earnings) {
//         console.log("Weekly earnings received:", data.data.earnings);

//         // Transform API data to match the weekly list format
//         const transformedData = data.data.earnings.map((item) => ({
//           date: item.date,
//           income: `${parseFloat(item.total_earnings).toFixed(0)} THB`
//         }));

//         console.log("Transformed weekly data:", transformedData);
//         setWeeklyEarnings(transformedData);
//       } else {
//         console.log("No weekly earnings data found");
//         setWeeklyEarnings([]);
//       }
//     } catch (err) {
//       console.error("Error fetching weekly earnings:", err);
//       // Don't set global error for this, just log it
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Loading State
//   if (loading) {
//     return (
//       <div className="d-flex min-vh-100 bg-white">
//         <Sidebar show={isSidebarOpen} />
//         <main className="main-content flex-grow-1">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
//             <div className="text-center">
//               <div className="spinner-border" role="status" style={{ color: '#e9527a' }}>
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3 text-muted">Loading dashboard data...</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   // Error State
//   if (error) {
//     return (
//       <div className="d-flex min-vh-100 bg-white">
//         <Sidebar show={isSidebarOpen} />
//         <main className="main-content flex-grow-1">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
//             <div className="text-center">
//               <AlertCircle size={48} className="text-danger mb-3" />
//               <p className="text-danger mb-3">{error}</p>
//               <button
//                 onClick={() => {
//                   fetchEarningsStats();
//                   fetchWeeklyEarnings();
//                 }}
//                 className="btn btn-primary"
//                 style={{ backgroundColor: '#e9527a', border: 'none', padding: '8px 24px' }}
//               >
//                 Try Again
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   // Format numbers with commas for display
//   const formatNumber = (value) => {
//     const num = parseFloat(value);
//     return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
//   };

//   // Calculate total weekly earnings from API data
//   const totalWeeklyEarnings = weeklyEarnings.reduce((sum, item) => {
//     const amount = parseFloat(item.income.replace(' THB', ''));
//     return sum + (isNaN(amount) ? 0 : amount);
//   }, 0);

//   return (
//     <div className="d-flex min-vh-100 bg-white">
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

//       {/* Main Content */}
//       <main className="main-content flex-grow-1">
//         {/* Header Section */}
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         {/* Welcome Section */}
//         <div className="mb-4 px-4">
//           <h3 className="h3 fw-bold text-dark mt-4">
//             Welcome back {userName}!
//           </h3>
//         </div>

//         {/* Stats Cards */}
//         <Row className="g-4 mb-5 px-4">
//           <Col xs={12} md={4}>
//             <Card
//               className="stat-card"
//               style={{ paddingRight: "0px", paddingBottom: "0px" }}
//             >
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   Current Balance
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span> {formatNumber(stats.current_balance)}
//                 </h4>
//                 <img
//                   src={Coinicon}
//                   alt="Image-not-found"
//                   className="img-fluid"
//                   style={{
//                     marginLeft: "auto",
//                     display: "block",
//                     width: "40px",
//                   }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={12} md={4}>
//             <Card
//               className="stat-card"
//               style={{ paddingRight: "0px", paddingBottom: "0px" }}
//             >
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   Today's Earnings
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span> {formatNumber(stats.today_earnings)}
//                 </h4>
//                 <img
//                   src={Coinicon}
//                   alt="Image-not-found"
//                   className="img-fluid"
//                   style={{
//                     marginLeft: "auto",
//                     display: "block",
//                     width: "40px",
//                   }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={12} md={4}>
//             <Card
//               className="stat-card"
//               style={{ paddingRight: "0px", paddingBottom: "0px" }}
//             >
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   Last Month Earnings
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span> {formatNumber(stats.last_month_earnings)}
//                 </h4>
//                 <img
//                   src={Coinicon}
//                   alt="Image-not-found"
//                   className="img-fluid"
//                   style={{
//                     marginLeft: "auto",
//                     display: "block",
//                     width: "40px",
//                   }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         {/* Content Grid */}
//         <Row className="g-5 px-4">
//           {/* Graph Section */}
//           <Col xs={12} lg={8}>
//             <div className="mb-4">
//               <h5 className="h5 fw-bold text-dark mb-1">Earning Graph</h5>
//               <p className="small text-muted d-flex align-items-center mb-0">
//                 Weekly Progress <span className="pink-dot"></span> {totalWeeklyEarnings}
//               </p>
//             </div>
//             <div style={{ height: "300px", width: "100%" }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={chartData}>
//                   <defs>
//                     <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#e95d82" stopOpacity={0.3} />
//                       <stop offset="95%" stopColor="#e95d82" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid
//                     strokeDasharray="3 3"
//                     vertical={false}
//                     stroke="#f0f0f0"
//                   />
//                   <XAxis
//                     dataKey="name"
//                     axisLine={false}
//                     tickLine={false}
//                     tick={{ fill: "#999", fontSize: 12 }}
//                     dy={10}
//                   />
//                   <YAxis hide />
//                   <Tooltip
//                     contentStyle={{
//                       borderRadius: "12px",
//                       border: "none",
//                       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                     }}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="value"
//                     stroke="#e95d82"
//                     strokeWidth={3}
//                     fillOpacity={1}
//                     fill="url(#colorValue)"
//                     dot={{
//                       r: 4,
//                       fill: "#e95d82",
//                       strokeWidth: 2,
//                       stroke: "#fff",
//                     }}
//                     activeDot={{
//                       r: 6,
//                       fill: "#e95d82",
//                       strokeWidth: 2,
//                       stroke: "#fff",
//                     }}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </Col>

//           {/* Weekly List Section - Now populated from API */}
//           <Col xs={12} lg={4}>
//             <h5 className="h5 fw-bold text-dark mb-4">Weekly list</h5>
//             <div className="border rounded-3 overflow-hidden">
//               <Table responsive className="custom-table mb-0">
//                 <thead>
//                   <tr>
//                     <th className="px-3 py-3">Date</th>
//                     <th className="px-3 py-3 text-end">Income</th>
//                   </tr>
//                 </thead>
//                 <tbody className="border-top-0">
//                   {weeklyEarnings.length === 0 ? (
//                     <tr>
//                       <td colSpan="2" className="text-center py-4 text-muted">
//                         No weekly earnings data available
//                       </td>
//                     </tr>
//                   ) : (
//                     weeklyEarnings.map((item, index) => (
//                       <tr key={index}>
//                         <td className="px-3 py-3 text-muted">{item.date}</td>
//                         <td className="px-3 py-3 text-end fw-semibold text-dark">
//                           {item.income}
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </Table>
//             </div>
//           </Col>
//         </Row>
//       </main>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Dashboard.css";
// import Coinicon from "../assets/Coinicon.png";
// import axios from "axios";

// import { Menu, X, Bell, Wallet, TrendingUp, Calendar, AlertCircle } from "lucide-react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";

// // Dynamic chart data that will be updated from API
// const defaultChartData = [
//   { name: "Mon", value: 0 },
//   { name: "Tue", value: 0 },
//   { name: "Wed", value: 0 },
//   { name: "Thu", value: 0 },
//   { name: "Fri", value: 0 },
//   { name: "Sat", value: 0 },
//   { name: "Sun", value: 0 },
// ];

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [stats, setStats] = useState({
//     current_balance: "0.00",
//     today_earnings: "0.00",
//     last_month_earnings: "0.00"
//   });
//   const [weeklyEarnings, setWeeklyEarnings] = useState([]);
//   const [chartData, setChartData] = useState(defaultChartData);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [userName, setUserName] = useState("User");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchEarningsStats();
//     fetchWeeklyEarnings();
//   }, []);

//   const fetchEarningsStats = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("Token from localStorage:", token);

//       if (!token) {
//         console.log("No token found, redirecting to login");
//         setError("Please login to view dashboard");
//         setLoading(false);
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/earnings-stats`;
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
//         console.log("Earnings stats received:", data.data);
//         setStats({
//           current_balance: parseFloat(data.data.current_balance || 0).toFixed(2),
//           today_earnings: parseFloat(data.data.today_earnings || 0).toFixed(2),
//           last_month_earnings: parseFloat(data.data.last_month_earnings || 0).toFixed(2)
//         });

//         const storedName = localStorage.getItem("userName");
//         if (storedName) setUserName(storedName);
//       } else {
//         console.log("API returned success=false:", data.message);
//         setError(data.message || 'Failed to fetch earnings stats');
//       }
//     } catch (err) {
//       console.error("Error fetching earnings stats:", err);
//       console.error("Error response:", err.response);

//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         setError("Authentication failed. Please login again.");
//         localStorage.removeItem("token");
//         setTimeout(() => navigate('/'), 2000);
//       } else {
//         setError(err.response?.data?.message || 'An error occurred while fetching dashboard data');
//       }
//     } finally {
//       if (!weeklyEarnings.length) {
//         setLoading(false);
//       }
//     }
//   };

//   // Fetch weekly earnings from API with type=weekly
//   const fetchWeeklyEarnings = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/earnings?type=weekly`;
//       console.log("Fetching weekly earnings from URL:", apiUrl);

//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${token}`
//         },
//         withCredentials: true,
//       });

//       console.log("Weekly Earnings API Response:", response);
//       const data = response.data;

//       if (data.loginRequired) {
//         console.log("Login required for weekly earnings");
//         return;
//       }

//       if (data.success && data.data && data.data.earnings) {
//         console.log("Weekly earnings received:", data.data.earnings);

//         // Transform API data to match the weekly list format
//         const transformedData = data.data.earnings.map((item) => ({
//           date: item.date,
//           income: `${parseFloat(item.total_earnings).toFixed(0)} THB`,
//           raw_income: parseFloat(item.total_earnings)
//         }));

//         console.log("Transformed weekly data:", transformedData);
//         setWeeklyEarnings(transformedData);

//         // Update chart data based on weekly earnings
//         updateChartData(transformedData);
//       } else {
//         console.log("No weekly earnings data found");
//         setWeeklyEarnings([]);
//       }
//     } catch (err) {
//       console.error("Error fetching weekly earnings:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to update chart data dynamically based on weekly earnings
//   const updateChartData = (weeklyData) => {
//     // Create a map of day names to values
//     const dayMap = {
//       "Mon": 0, "Tue": 0, "Wed": 0, "Thu": 0, "Fri": 0, "Sat": 0, "Sun": 0
//     };

//     // Map day names to their index
//     const dayOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//     // Process weekly data to populate chart
//     weeklyData.forEach(item => {
//       // Try to parse date and get day of week
//       const dateParts = item.date.split('/');
//       if (dateParts.length === 3) {
//         const day = parseInt(dateParts[0]);
//         const month = parseInt(dateParts[1]) - 1;
//         const year = parseInt(dateParts[2]);
//         const dateObj = new Date(year, month, day);
//         const dayIndex = dateObj.getDay(); // 0 = Sunday, 1 = Monday, etc.

//         // Convert to our day names (Monday first)
//         let dayName = "";
//         switch(dayIndex) {
//           case 0: dayName = "Sun"; break;
//           case 1: dayName = "Mon"; break;
//           case 2: dayName = "Tue"; break;
//           case 3: dayName = "Wed"; break;
//           case 4: dayName = "Thu"; break;
//           case 5: dayName = "Fri"; break;
//           case 6: dayName = "Sat"; break;
//           default: break;
//         }

//         if (dayMap.hasOwnProperty(dayName)) {
//           dayMap[dayName] += item.raw_income;
//         }
//       }
//     });

//     // Convert to chart data format
//     const newChartData = dayOrder.map(day => ({
//       name: day,
//       value: Math.round(dayMap[day])
//     }));

//     setChartData(newChartData);
//   };

//   // Loading State
//   if (loading) {
//     return (
//       <div className="d-flex min-vh-100 bg-white">
//         <Sidebar show={isSidebarOpen} />
//         <main className="main-content flex-grow-1">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
//             <div className="text-center">
//               <div className="spinner-border" role="status" style={{ color: '#e9527a' }}>
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3 text-muted">Loading dashboard data...</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   // Error State
//   if (error) {
//     return (
//       <div className="d-flex min-vh-100 bg-white">
//         <Sidebar show={isSidebarOpen} />
//         <main className="main-content flex-grow-1">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
//             <div className="text-center">
//               <AlertCircle size={48} className="text-danger mb-3" />
//               <p className="text-danger mb-3">{error}</p>
//               <button
//                 onClick={() => {
//                   fetchEarningsStats();
//                   fetchWeeklyEarnings();
//                 }}
//                 className="btn btn-primary"
//                 style={{ backgroundColor: '#e9527a', border: 'none', padding: '8px 24px' }}
//               >
//                 Try Again
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   // Format numbers with commas for display
//   const formatNumber = (value) => {
//     const num = parseFloat(value);
//     return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
//   };

//   // Calculate total weekly earnings from API data
//   const totalWeeklyEarnings = weeklyEarnings.reduce((sum, item) => {
//     const amount = parseFloat(item.income.replace(' THB', ''));
//     return sum + (isNaN(amount) ? 0 : amount);
//   }, 0);

//   // Get the highest value for chart scaling
//   const maxChartValue = Math.max(...chartData.map(item => item.value), 1000);

//   return (
//     <div className="d-flex min-vh-100 bg-white">
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

//       {/* Main Content */}
//       <main className="main-content flex-grow-1">
//         {/* Header Section */}
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         {/* Welcome Section */}
//         <div className="mb-4 px-4">
//           <h3 className="h3 fw-bold text-dark mt-4">
//             Welcome back {userName}!
//           </h3>
//         </div>

//         {/* Stats Cards - Dynamic Data */}
//         <Row className="g-4 mb-5 px-4">
//           <Col xs={12} md={4}>
//             <Card
//               className="stat-card"
//               style={{ paddingRight: "0px", paddingBottom: "0px" }}
//             >
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   Current Balance
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span> {formatNumber(stats.current_balance)}
//                 </h4>
//                 <img
//                   src={Coinicon}
//                   alt="Image-not-found"
//                   className="img-fluid"
//                   style={{
//                     marginLeft: "auto",
//                     display: "block",
//                     width: "40px",
//                   }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={12} md={4}>
//             <Card
//               className="stat-card"
//               style={{ paddingRight: "0px", paddingBottom: "0px" }}
//             >
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   Today's Earnings
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span> {formatNumber(stats.today_earnings)}
//                 </h4>
//                 <img
//                   src={Coinicon}
//                   alt="Image-not-found"
//                   className="img-fluid"
//                   style={{
//                     marginLeft: "auto",
//                     display: "block",
//                     width: "40px",
//                   }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={12} md={4}>
//             <Card
//               className="stat-card"
//               style={{ paddingRight: "0px", paddingBottom: "0px" }}
//             >
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   Last Month Earnings
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span> {formatNumber(stats.last_month_earnings)}
//                 </h4>
//                 <img
//                   src={Coinicon}
//                   alt="Image-not-found"
//                   className="img-fluid"
//                   style={{
//                     marginLeft: "auto",
//                     display: "block",
//                     width: "40px",
//                   }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         {/* Content Grid */}
//         <Row className="g-5 px-4">
//           {/* Graph Section - Dynamic Chart Data */}
//           <Col xs={12} lg={8}>
//             <div className="mb-4">
//               <h5 className="h5 fw-bold text-dark mb-1">Earning Graph</h5>
//               <p className="small text-muted d-flex align-items-center mb-0">
//                 Weekly Progress <span className="pink-dot"></span> {totalWeeklyEarnings}
//               </p>
//             </div>
//             <div style={{ height: "300px", width: "100%" }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={chartData}>
//                   <defs>
//                     <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#e95d82" stopOpacity={0.3} />
//                       <stop offset="95%" stopColor="#e95d82" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid
//                     strokeDasharray="3 3"
//                     vertical={false}
//                     stroke="#f0f0f0"
//                   />
//                   <XAxis
//                     dataKey="name"
//                     axisLine={false}
//                     tickLine={false}
//                     tick={{ fill: "#999", fontSize: 12 }}
//                     dy={10}
//                   />
//                   <YAxis
//                     hide={false}
//                     tick={{ fill: "#999", fontSize: 12 }}
//                     domain={[0, maxChartValue]}
//                   />
//                   <Tooltip
//                     formatter={(value) => [`${value} THB`, 'Earnings']}
//                     contentStyle={{
//                       borderRadius: "12px",
//                       border: "none",
//                       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                     }}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="value"
//                     stroke="#e95d82"
//                     strokeWidth={3}
//                     fillOpacity={1}
//                     fill="url(#colorValue)"
//                     dot={{
//                       r: 4,
//                       fill: "#e95d82",
//                       strokeWidth: 2,
//                       stroke: "#fff",
//                     }}
//                     activeDot={{
//                       r: 6,
//                       fill: "#e95d82",
//                       strokeWidth: 2,
//                       stroke: "#fff",
//                     }}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </Col>

//           {/* Weekly List Section - Dynamic Data from API */}
//           <Col xs={12} lg={4}>
//             <h5 className="h5 fw-bold text-dark mb-4">Weekly list</h5>
//             <div className="border rounded-3 overflow-hidden">
//               <Table responsive className="custom-table mb-0">
//                 <thead>
//                   <tr>
//                     <th className="px-3 py-3">Date</th>
//                     <th className="px-3 py-3 text-end">Income</th>
//                   </tr>
//                 </thead>
//                 <tbody className="border-top-0">
//                   {weeklyEarnings.length === 0 ? (
//                     <tr>
//                       <td colSpan="2" className="text-center py-4 text-muted">
//                         No weekly earnings data available
//                       </td>
//                     </tr>
//                   ) : (
//                     weeklyEarnings.map((item, index) => (
//                       <tr key={index}>
//                         <td className="px-3 py-3 text-muted">{item.date}</td>
//                         <td className="px-3 py-3 text-end fw-semibold text-dark">
//                           {item.income}
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </Table>
//             </div>
//           </Col>
//         </Row>
//       </main>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Dashboard.css";
// import Coinicon from "../assets/Coinicon.png";
// import axios from "axios";

// import { Menu, X, Bell, Wallet, TrendingUp, Calendar, AlertCircle } from "lucide-react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";

// // Translations for Dashboard
// const dashboardTranslations = {
//   en: {
//     welcome: "Welcome back {name}!",
//     todayEarnings: "Today's Earnings",
//     currentBalance: "Current Balance",
//     lastMonthEarnings: "Last Month Earnings",
//     earningGraph: "Earning Graph",
//     weeklyProgress: "Weekly Progress",
//     weeklyList: "Weekly list",
//     date: "Date",
//     income: "Income",
//     noData: "No weekly earnings data available",
//     loading: "Loading dashboard data...",
//     tryAgain: "Try Again",
//     errorSession: "Session expired. Please login again.",
//     errorFetch: "An error occurred while fetching dashboard data",
//     tooltipEarnings: "Earnings",
//   },
//   th: {
//     welcome: "ยินดีต้อนรับกลับ {name}!",
//     todayEarnings: "รายได้วันนี้",
//     currentBalance: "ยอดเงินคงเหลือ",
//     lastMonthEarnings: "รายได้เดือนที่แล้ว",
//     earningGraph: "กราฟรายได้",
//     weeklyProgress: "ความคืบหน้ารายสัปดาห์",
//     weeklyList: "รายการรายสัปดาห์",
//     date: "วันที่",
//     income: "รายได้",
//     noData: "ไม่มีข้อมูลรายได้รายสัปดาห์",
//     loading: "กำลังโหลดข้อมูลแดชบอร์ด...",
//     tryAgain: "ลองอีกครั้ง",
//     errorSession: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
//     errorFetch: "เกิดข้อผิดพลาดในการดึงข้อมูลแดชบอร์ด",
//     tooltipEarnings: "รายได้",
//   },
// };

// // Default chart data
// const defaultChartData = [
//   { name: "Mon", value: 0 },
//   { name: "Tue", value: 0 },
//   { name: "Wed", value: 0 },
//   { name: "Thu", value: 0 },
//   { name: "Fri", value: 0 },
//   { name: "Sat", value: 0 },
//   { name: "Sun", value: 0 },
// ];

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [stats, setStats] = useState({
//     current_balance: "0.00",
//     today_earnings: "0.00",
//     last_month_earnings: "0.00"
//   });
//   const [weeklyEarnings, setWeeklyEarnings] = useState([]);
//   const [chartData, setChartData] = useState(defaultChartData);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [userName, setUserName] = useState("User");
//   const [language, setLanguage] = useState(() => {
//     return localStorage.getItem('appLanguage') || 'en';
//   });
//   const navigate = useNavigate();
//   const t = dashboardTranslations[language];

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

//   useEffect(() => {
//     fetchEarningsStats();
//     fetchWeeklyEarnings();
//   }, []);

//   const fetchEarningsStats = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("Token from localStorage:", token);

//       if (!token) {
//         console.log("No token found, redirecting to login");
//         setError(t.errorSession);
//         setLoading(false);
//         setTimeout(() => navigate('/'), 2000);
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/earnings-stats`;
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

//       if (data.loginRequired) {
//         console.log("Login required - token may be invalid");
//         setError(t.errorSession);
//         localStorage.removeItem("token");
//         setTimeout(() => navigate('/'), 2000);
//         setLoading(false);
//         return;
//       }

//       if (data.success && data.data) {
//         console.log("Earnings stats received:", data.data);
//         setStats({
//           current_balance: parseFloat(data.data.current_balance || 0).toFixed(2),
//           today_earnings: parseFloat(data.data.today_earnings || 0).toFixed(2),
//           last_month_earnings: parseFloat(data.data.last_month_earnings || 0).toFixed(2)
//         });

//         const storedName = localStorage.getItem("userName");
//         if (storedName) setUserName(storedName);
//       } else {
//         console.log("API returned success=false:", data.message);
//         setError(data.message || t.errorFetch);
//       }
//     } catch (err) {
//       console.error("Error fetching earnings stats:", err);
//       console.error("Error response:", err.response);

//       if (err.response?.status === 401 || err.response?.data?.loginRequired) {
//         setError(t.errorSession);
//         localStorage.removeItem("token");
//         setTimeout(() => navigate('/'), 2000);
//       } else {
//         setError(err.response?.data?.message || t.errorFetch);
//       }
//     } finally {
//       if (!weeklyEarnings.length) {
//         setLoading(false);
//       }
//     }
//   };

//   const fetchWeeklyEarnings = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         return;
//       }

//       const apiUrl = `${import.meta.env.VITE_SERVER_URL}/customer/earnings?type=weekly`;
//       console.log("Fetching weekly earnings from URL:", apiUrl);

//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${token}`
//         },
//         withCredentials: true,
//       });

//       console.log("Weekly Earnings API Response:", response);
//       const data = response.data;

//       if (data.loginRequired) {
//         console.log("Login required for weekly earnings");
//         return;
//       }

//       if (data.success && data.data && data.data.earnings) {
//         console.log("Weekly earnings received:", data.data.earnings);

//         const transformedData = data.data.earnings.map((item) => ({
//           date: item.date,
//           income: `${parseFloat(item.total_earnings).toFixed(0)} THB`,
//           raw_income: parseFloat(item.total_earnings)
//         }));

//         console.log("Transformed weekly data:", transformedData);
//         setWeeklyEarnings(transformedData);
//         updateChartData(transformedData);
//       } else {
//         console.log("No weekly earnings data found");
//         setWeeklyEarnings([]);
//       }
//     } catch (err) {
//       console.error("Error fetching weekly earnings:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateChartData = (weeklyData) => {
//     const dayMap = {
//       "Mon": 0, "Tue": 0, "Wed": 0, "Thu": 0, "Fri": 0, "Sat": 0, "Sun": 0
//     };
//     const dayOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//     weeklyData.forEach(item => {
//       const dateParts = item.date.split('/');
//       if (dateParts.length === 3) {
//         const day = parseInt(dateParts[0]);
//         const month = parseInt(dateParts[1]) - 1;
//         const year = parseInt(dateParts[2]);
//         const dateObj = new Date(year, month, day);
//         const dayIndex = dateObj.getDay();
//         let dayName = "";
//         switch(dayIndex) {
//           case 0: dayName = "Sun"; break;
//           case 1: dayName = "Mon"; break;
//           case 2: dayName = "Tue"; break;
//           case 3: dayName = "Wed"; break;
//           case 4: dayName = "Thu"; break;
//           case 5: dayName = "Fri"; break;
//           case 6: dayName = "Sat"; break;
//           default: break;
//         }
//         if (dayMap.hasOwnProperty(dayName)) {
//           dayMap[dayName] += item.raw_income;
//         }
//       }
//     });

//     const newChartData = dayOrder.map(day => ({
//       name: day,
//       value: Math.round(dayMap[day])
//     }));
//     setChartData(newChartData);
//   };

//   const formatNumber = (value) => {
//     const num = parseFloat(value);
//     return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
//   };

//   const totalWeeklyEarnings = weeklyEarnings.reduce((sum, item) => {
//     const amount = parseFloat(item.income.replace(' THB', ''));
//     return sum + (isNaN(amount) ? 0 : amount);
//   }, 0);
//   const maxChartValue = Math.max(...chartData.map(item => item.value), 1000);

//   if (loading) {
//     return (
//       <div className="d-flex min-vh-100 bg-white">
//         <Sidebar show={isSidebarOpen} />
//         <main className="main-content flex-grow-1">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
//             <div className="text-center">
//               <div className="spinner-border" role="status" style={{ color: '#e9527a' }}>
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3 text-muted">{t.loading}</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="d-flex min-vh-100 bg-white">
//         <Sidebar show={isSidebarOpen} />
//         <main className="main-content flex-grow-1">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
//             <div className="text-center">
//               <AlertCircle size={48} className="text-danger mb-3" />
//               <p className="text-danger mb-3">{error}</p>
//               <button
//                 onClick={() => {
//                   fetchEarningsStats();
//                   fetchWeeklyEarnings();
//                 }}
//                 className="btn btn-primary"
//                 style={{ backgroundColor: '#e9527a', border: 'none', padding: '8px 24px' }}
//               >
//                 {t.tryAgain}
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex min-vh-100 bg-white">
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

//       <main className="main-content flex-grow-1">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <div className="mb-4 px-4">
//           <h3 className="h3 fw-bold text-dark mt-4">
//             {t.welcome.replace('{name}', userName)}
//           </h3>
//         </div>

//         <Row className="g-4 mb-5 px-4">
//           <Col xs={12} md={4}>
//             <Card className="stat-card" style={{ paddingRight: "0px", paddingBottom: "0px" }}>
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">{t.todayEarnings}</p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span> {formatNumber(stats.today_earnings)}
//                 </h4>
//                 <img src={Coinicon} alt="Image-not-found" className="img-fluid" style={{ marginLeft: "auto", display: "block", width: "40px" }} />
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col xs={12} md={4}>
//             <Card className="stat-card" style={{ paddingRight: "0px", paddingBottom: "0px" }}>
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">{t.currentBalance}</p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span> {formatNumber(stats.current_balance)}
//                 </h4>
//                 <img src={Coinicon} alt="Image-not-found" className="img-fluid" style={{ marginLeft: "auto", display: "block", width: "40px" }} />
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col xs={12} md={4}>
//             <Card className="stat-card" style={{ paddingRight: "0px", paddingBottom: "0px" }}>
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">{t.lastMonthEarnings}</p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span> {formatNumber(stats.last_month_earnings)}
//                 </h4>
//                 <img src={Coinicon} alt="Image-not-found" className="img-fluid" style={{ marginLeft: "auto", display: "block", width: "40px" }} />
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row className="g-5 px-4 align-items-center">
//           <Col xs={12} lg={8}>
//             <div className="mb-4">
//               <h5 className="h5 fw-bold text-dark mb-1">{t.earningGraph}</h5>
//               <p className="small text-muted d-flex align-items-center mb-0">
//                 {t.weeklyProgress} <span className="pink-dot"></span> {totalWeeklyEarnings}
//               </p>
//             </div>
//             <div style={{ height: "300px", width: "100%" }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={chartData}>
//                   <defs>
//                     <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#e95d82" stopOpacity={0.3} />
//                       <stop offset="95%" stopColor="#e95d82" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
//                   <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#999", fontSize: 12 }} dy={10} />
//                   <YAxis hide={false} tick={{ fill: "#999", fontSize: 12 }} domain={[0, maxChartValue]} />
//                   <Tooltip
//                     formatter={(value) => [`${value} THB`, t.tooltipEarnings]}
//                     contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="value"
//                     stroke="#e95d82"
//                     strokeWidth={3}
//                     fillOpacity={1}
//                     fill="url(#colorValue)"
//                     dot={{ r: 4, fill: "#e95d82", strokeWidth: 2, stroke: "#fff" }}
//                     activeDot={{ r: 6, fill: "#e95d82", strokeWidth: 2, stroke: "#fff" }}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </Col>

//           <Col xs={12} lg={4}>
//             <h5 className="h5 fw-bold text-dark mb-4">{t.weeklyList}</h5>
//             <div className="border rounded-3 overflow-hidden">
//               <Table responsive className="custom-table mb-0">
//                 <thead>
//                   <tr>
//                     <th className="px-3 py-3">{t.date}</th>
//                     <th className="px-3 py-3 text-end">{t.income}</th>
//                   </tr>
//                 </thead>
//                 <tbody className="border-top-0">
//                   {weeklyEarnings.length === 0 ? (
//                     <tr>
//                       <td colSpan="2" className="text-center py-4 text-muted">
//                         {t.noData}
//                       </td>
//                     </tr>
//                   ) : (
//                     weeklyEarnings.map((item, index) => (
//                       <tr key={index}>
//                         <td className="px-3 py-3 text-muted">{item.date}</td>
//                         <td className="px-3 py-3 text-end fw-semibold text-dark">{item.income}</td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </Table>
//             </div>
//           </Col>
//         </Row>
//       </main>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Dashboard.css";
// import Coinicon from "../assets/Coinicon.png";
// import axios from "axios";

// import { Menu, X, AlertCircle } from "lucide-react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { Row, Col, Card, Table } from "react-bootstrap";

// // Translations (unchanged)
// const dashboardTranslations = {
//   en: {
//     welcome: "Welcome back {name}!",
//     todayEarnings: "Today's Earnings",
//     currentBalance: "Current Balance",
//     lastMonthEarnings: "Last Month Earnings",
//     earningGraph: "Earning Graph",
//     weeklyProgress: "Weekly Progress",
//     weeklyList: "Weekly list",
//     date: "Date",
//     income: "Income",
//     noData: "No weekly earnings data available",
//     loading: "Loading dashboard data...",
//     tryAgain: "Try Again",
//     errorSession: "Session expired. Please login again.",
//     errorFetch: "An error occurred while fetching dashboard data",
//     tooltipEarnings: "Earnings",
//   },
//   th: {
//     welcome: "ยินดีต้อนรับกลับ {name}!",
//     todayEarnings: "รายได้วันนี้",
//     currentBalance: "ยอดเงินคงเหลือ",
//     lastMonthEarnings: "รายได้เดือนที่แล้ว",
//     earningGraph: "กราฟรายได้",
//     weeklyProgress: "ความคืบหน้ารายสัปดาห์",
//     weeklyList: "รายการรายสัปดาห์",
//     date: "วันที่",
//     income: "รายได้",
//     noData: "ไม่มีข้อมูลรายได้รายสัปดาห์",
//     loading: "กำลังโหลดข้อมูลแดชบอร์ด...",
//     tryAgain: "ลองอีกครั้ง",
//     errorSession: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
//     errorFetch: "เกิดข้อผิดพลาดในการดึงข้อมูลแดชบอร์ด",
//     tooltipEarnings: "รายได้",
//   },
// };

// const defaultChartData = [
//   { name: "Mon", value: 0 },
//   { name: "Tue", value: 0 },
//   { name: "Wed", value: 0 },
//   { name: "Thu", value: 0 },
//   { name: "Fri", value: 0 },
//   { name: "Sat", value: 0 },
//   { name: "Sun", value: 0 },
// ];

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [stats, setStats] = useState({
//     current_balance: 0,
//     today_earnings: 0,
//     last_month_earnings: 0,
//   });
//   const [weeklyEarnings, setWeeklyEarnings] = useState([]);
//   const [chartData, setChartData] = useState(defaultChartData);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [userName, setUserName] = useState("User");
//   const [language, setLanguage] = useState(
//     () => localStorage.getItem("appLanguage") || "en",
//   );

//   const navigate = useNavigate();
//   const t = dashboardTranslations[language];

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   // Format number to show 2 decimal places with comma (e.g., 1,234.56)
//   const formatNumber = (value) => {
//     const num = parseFloat(value) || 0;
//     return num.toLocaleString("en-US", {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     });
//   };

//   useEffect(() => {
//     fetchEarningsStats();
//     fetchWeeklyEarnings();
//   }, []);

//   const fetchEarningsStats = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError(t.errorSession);
//         setLoading(false);
//         setTimeout(() => navigate("/"), 2000);
//         return;
//       }

//       const response = await axios.get(
//         `${import.meta.env.VITE_SERVER_URL}/customer/earnings-stats`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `${token}`,
//           },
//           withCredentials: true,
//         },
//       );

//       const data = response.data;

//       if (data.success && data.data) {
//         setStats({
//           current_balance: parseFloat(data.data.current_balance || 0),
//           today_earnings: parseFloat(data.data.today_earnings || 0),
//           last_month_earnings: parseFloat(data.data.last_month_earnings || 0),
//         });

//         const storedName = localStorage.getItem("userName");
//         if (storedName) setUserName(storedName);
//       } else {
//         setError(data.message || t.errorFetch);
//       }
//     } catch (err) {
//       console.error("Error fetching stats:", err);
//       if (err.response?.status === 401) {
//         setError(t.errorSession);
//         localStorage.removeItem("token");
//         setTimeout(() => navigate("/"), 2000);
//       } else {
//         setError(t.errorFetch);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchWeeklyEarnings = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await axios.get(
//         `${import.meta.env.VITE_SERVER_URL}/customer/earnings?type=weekly`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `${token}`,
//           },
//           withCredentials: true,
//         },
//       );

//       const data = response.data;

//       if (data.success && data.data?.earnings) {
//         const transformed = data.data.earnings.map((item) => ({
//           date: item.date,
//           income: parseFloat(item.total_earnings || 0), // raw number
//           displayIncome: formatNumber(item.total_earnings) + " THB", // formatted for display
//         }));

//         setWeeklyEarnings(transformed);
//         updateChartData(transformed);
//       } else {
//         setWeeklyEarnings([]);
//       }
//     } catch (err) {
//       console.error("Error fetching weekly earnings:", err);
//       setWeeklyEarnings([]);
//     }
//   };

//   const updateChartData = (weeklyData) => {
//     const dayMap = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
//     const dayOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//     weeklyData.forEach((item) => {
//       const dateParts = item.date.split("/");
//       if (dateParts.length === 3) {
//         const day = parseInt(dateParts[0]);
//         const month = parseInt(dateParts[1]) - 1;
//         const year = parseInt(dateParts[2]);
//         const dateObj = new Date(year, month, day);
//         const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
//           dateObj.getDay()
//         ];
//         if (dayMap[dayName] !== undefined) {
//           dayMap[dayName] += item.income;
//         }
//       }
//     });

//     const newChartData = dayOrder.map((day) => ({
//       name: day,
//       value: Math.round(dayMap[day]),
//     }));

//     setChartData(newChartData);
//   };

//   const totalWeeklyEarnings = weeklyEarnings.reduce(
//     (sum, item) => sum + item.income,
//     0,
//   );

//   if (loading) {
//     return (
//       <div className="d-flex min-vh-100 bg-white">
//         {/* <Sidebar show={isSidebarOpen} /> */}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <main className="main-content flex-grow-1">
//           {/* <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} /> */}
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div
//             className="d-flex justify-content-center align-items-center"
//             style={{ height: "60vh" }}
//           >
//             <div className="text-center">
//               <div
//                 className="spinner-border"
//                 role="status"
//                 style={{ color: "#e9527a" }}
//               />
//               <p className="mt-3 text-muted">{t.loading}</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="d-flex min-vh-100 bg-white">
//         {/* <Sidebar show={isSidebarOpen} /> */}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <main className="main-content flex-grow-1">
//           {/* <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} /> */}
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div
//             className="d-flex justify-content-center align-items-center"
//             style={{ height: "60vh" }}
//           >
//             <div className="text-center">
//               <AlertCircle size={48} className="text-danger mb-3" />
//               <p className="text-danger">{error}</p>
//               <button
//                 onClick={() => window.location.reload()}
//                 className="btn btn-primary mt-3"
//               >
//                 {t.tryAgain}
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex min-vh-100 bg-white">
//       {/* <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button> */}

//        <button 
//         className="mobile-toggle d-none" 
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {/* {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )} */}


//        {isSidebarOpen && (
//         <div 
//           className="sidebar-overlay d-lg-none" 
//           onClick={handleCloseSidebar}
//         />
//       )}

//       {/* <Sidebar show={isSidebarOpen} /> */}


//        {/* Sidebar with onClose prop (KEY ADDITION) */}
//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />



//       <main className="main-content flex-grow-1">
//         {/* <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} /> */}


//          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

          

//         <div className="mb-4 px-4">
//           <h3 className="h3 fw-bold text-dark mt-4">
//             {t.welcome.replace("{name}", userName)}
//           </h3>
//         </div>

//         <Row className="g-4 mb-5 px-4">
//           <Col xs={12} md={4}>
//             <Card className="stat-card">
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   {t.todayEarnings}
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span>
//                   {formatNumber(stats.today_earnings)}
//                 </h4>
//                 <img
//                   src={Coinicon}
//                   alt="coin"
//                   className="img-fluid"
//                   style={{
//                     marginLeft: "auto",
//                     display: "block",
//                     width: "40px",
//                   }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col xs={12} md={4}>
//             <Card className="stat-card">
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   {t.currentBalance}
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span>
//                   {formatNumber(stats.current_balance)}
//                 </h4>
//                 <img
//                   src={Coinicon}
//                   alt="coin"
//                   className="img-fluid"
//                   style={{
//                     marginLeft: "auto",
//                     display: "block",
//                     width: "40px",
//                   }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col xs={12} md={4}>
//             <Card className="stat-card">
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   {t.lastMonthEarnings}
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span>
//                   {formatNumber(stats.last_month_earnings)}
//                 </h4>
//                 <img
//                   src={Coinicon}
//                   alt="coin"
//                   className="img-fluid"
//                   style={{
//                     marginLeft: "auto",
//                     display: "block",
//                     width: "40px",
//                   }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row className="g-5 px-4 align-items-start">
//           <Col xs={12} lg={8}>
//             <div className="mb-4">
//               <h5 className="h5 fw-bold text-dark mb-1">{t.earningGraph}</h5>
//               <p className="small text-muted">
//                 {t.weeklyProgress} • {formatNumber(totalWeeklyEarnings)} THB
//               </p>
//             </div>
//             <div style={{ height: "300px", width: "100%" }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={chartData}>
//                   <defs>
//                     <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#e95d82" stopOpacity={0.3} />
//                       <stop offset="95%" stopColor="#e95d82" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid
//                     strokeDasharray="3 3"
//                     vertical={false}
//                     stroke="#f0f0f0"
//                   />
//                   <XAxis
//                     dataKey="name"
//                     axisLine={false}
//                     tickLine={false}
//                     tick={{ fill: "#999", fontSize: 12 }}
//                     dy={10}
//                   />
//                   <YAxis tick={{ fill: "#999", fontSize: 12 }} />
//                   <Tooltip
//                     formatter={(value) => [`${value} THB`, t.tooltipEarnings]}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="value"
//                     stroke="#e95d82"
//                     strokeWidth={3}
//                     fill="url(#colorValue)"
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </Col>

//           <Col xs={12} lg={4}>
//             <h5 className="h5 fw-bold text-dark mb-4">{t.weeklyList}</h5>
//             <div className="border rounded-3 overflow-hidden">
//               <Table responsive className="custom-table mb-0">
//                 <thead>
//                   <tr>
//                     <th className="px-3 py-3">{t.date}</th>
//                     <th className="px-3 py-3 text-end">{t.income}</th>
//                   </tr>
//                 </thead>
//                 <tbody className="border-top-0">
//                   {weeklyEarnings.length === 0 ? (
//                     <tr>
//                       <td colSpan="2" className="text-center py-4 text-muted">
//                         {t.noData}
//                       </td>
//                     </tr>
//                   ) : (
//                     weeklyEarnings.map((item, index) => (
//                       <tr key={index}>
//                         <td className="px-3 py-3 text-muted">{item.date}</td>
//                         <td className="px-3 py-3 text-end fw-semibold text-dark">
//                           {item.displayIncome}
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </Table>
//             </div>
//           </Col>
//         </Row>
//       </main>
//     </div>
//   );
// }














import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../css/Dashboard.css";
import Coinicon from "../assets/Coinicon.png";
import axios from "axios";
import { Menu, X, AlertCircle } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Row, Col, Card, Table } from "react-bootstrap";

// Default chart data (day names will be translated later)
const defaultChartDataRaw = [
  { dayKey: "mon", value: 0 },
  { dayKey: "tue", value: 0 },
  { dayKey: "wed", value: 0 },
  { dayKey: "thu", value: 0 },
  { dayKey: "fri", value: 0 },
  { dayKey: "sat", value: 0 },
  { dayKey: "sun", value: 0 },
];

export default function Dashboard() {
  const { t, i18n } = useTranslation();              // use i18next hook
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    current_balance: 0,
    today_earnings: 0,
    last_month_earnings: 0,
  });
  const [weeklyEarnings, setWeeklyEarnings] = useState([]);
  const [chartData, setChartData] = useState(defaultChartDataRaw);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState("User");
  const navigate = useNavigate();
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  // Helper: format number with locale
  const formatNumber = (value, locale = i18n.language) => {
    const num = parseFloat(value) || 0;
    return num.toLocaleString(locale === 'th' ? 'th-TH' : 'en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Helper: format date from "DD/MM/YYYY" to localized string
  const formatDate = (dateStr, locale = i18n.language) => {
    const parts = dateStr.split('/');
    if (parts.length !== 3) return dateStr;
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const year = parseInt(parts[2]);
    const date = new Date(year, month, day);
    return date.toLocaleDateString(locale === 'th' ? 'th-TH' : 'en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Helper: get translated day names for chart
  const getTranslatedChartData = () => {
    const dayNames = {
      en: { mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun" },
      th: { mon: "จ.", tue: "อ.", wed: "พ.", thu: "พฤ.", fri: "ศ.", sat: "ส.", sun: "อา." }
    };
    const currentLang = i18n.language;
    return chartData.map(item => ({
      name: dayNames[currentLang]?.[item.dayKey] || item.dayKey,
      value: item.value
    }));
  };

  // Fetch stats
  const fetchEarningsStats = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError(t("errorSession"));
        setLoading(false);
        setTimeout(() => navigate("/"), 2000);
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/customer/earnings-stats`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          withCredentials: true,
        }
      );

      const data = response.data;
      if (data.success && data.data) {
        setStats({
          current_balance: parseFloat(data.data.current_balance || 0),
          today_earnings: parseFloat(data.data.today_earnings || 0),
          last_month_earnings: parseFloat(data.data.last_month_earnings || 0),
        });
        const storedName = localStorage.getItem("userName");
        if (storedName) setUserName(storedName);
      } else {
        setError(data.message || t("errorFetch"));
      }
    } catch (err) {
      console.error("Error fetching stats:", err);
      if (err.response?.status === 401) {
        setError(t("errorSession"));
        localStorage.removeItem("token");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setError(t("errorFetch"));
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch weekly earnings
  const fetchWeeklyEarnings = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/customer/earnings?type=weekly`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          withCredentials: true,
        }
      );

      const data = response.data;
      if (data.success && data.data?.earnings) {
        const transformed = data.data.earnings.map((item) => ({
          rawDate: item.date,
          date: formatDate(item.date),     // localized date
          income: parseFloat(item.total_earnings || 0),
        }));
        setWeeklyEarnings(transformed);
        updateChartData(transformed);
      } else {
        setWeeklyEarnings([]);
      }
    } catch (err) {
      console.error("Error fetching weekly earnings:", err);
      setWeeklyEarnings([]);
    }
  };

  // Update chart data from weekly earnings
  const updateChartData = (weeklyData) => {
    const dayMap = {
      mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0, sun: 0
    };
    const dayKeyFromDate = (dateStr) => {
      const parts = dateStr.split('/');
      if (parts.length !== 3) return null;
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1;
      const year = parseInt(parts[2]);
      const dateObj = new Date(year, month, day);
      const dayIndex = dateObj.getDay(); // 0=Sun ... 6=Sat
      const keys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      return keys[dayIndex];
    };

    weeklyData.forEach((item) => {
      const dayKey = dayKeyFromDate(item.rawDate);
      if (dayKey && dayMap[dayKey] !== undefined) {
        dayMap[dayKey] += item.income;
      }
    });

    const newChartData = defaultChartDataRaw.map((item) => ({
      dayKey: item.dayKey,
      value: Math.round(dayMap[item.dayKey]),
    }));
    setChartData(newChartData);
  };

  // Re-run formatting when language changes
  useEffect(() => {
    if (weeklyEarnings.length > 0) {
      // Re-format dates when language changes
      const updated = weeklyEarnings.map(item => ({
        ...item,
        date: formatDate(item.rawDate)
      }));
      setWeeklyEarnings(updated);
    }
  }, [i18n.language]);

  // Initial data fetch
  useEffect(() => {
    fetchEarningsStats();
    fetchWeeklyEarnings();
  }, []);

  const totalWeeklyEarnings = weeklyEarnings.reduce(
    (sum, item) => sum + item.income,
    0
  );

  // Loading state
  if (loading) {
    return (
      <div className="d-flex min-vh-100 bg-white">
        <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
        <main className="main-content flex-grow-1">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
            <div className="text-center">
              <div className="spinner-border" role="status" style={{ color: "#e9527a" }} />
              <p className="mt-3 text-muted">{t("loading")}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="d-flex min-vh-100 bg-white">
        <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
        <main className="main-content flex-grow-1">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
            <div className="text-center">
              <AlertCircle size={48} className="text-danger mb-3" />
              <p className="text-danger">{error}</p>
              <button onClick={() => window.location.reload()} className="btn btn-primary mt-3">
                {t("tryAgain")}
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Main render
  return (
    <div className="d-flex min-vh-100 bg-white">
      <button className="mobile-toggle d-none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? <X /> : <Menu />}
      </button>
      {/* {isSidebarOpen && (
        <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
      )} */}

      {isSidebarOpen && (
  <div
    className="sidebar-overlay"
    onClick={handleCloseSidebar}
  />
)}
      {/* <Sidebar show={isSidebarOpen}  onClose={handleCloseSidebar} /> */}

      <Sidebar
  show={isSidebarOpen}
  onClose={handleCloseSidebar}
/>
      <main className="main-content flex-grow-1">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="mb-4 px-4">
          <h3 className="h3 fw-bold text-dark mt-4">
            {t("welcome", { name: userName })}
          </h3>
        </div>

        <Row className="g-4 mb-5 px-4">
          <Col xs={12} md={4}>
            <Card className="stat-card">
              <Card.Body className="p-0">
                <p className="small fw-medium text-muted mb-2">{t("todayEarnings")}</p>
                <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
                  <span style={{ color: "var(--thaixo-pink)" }}>฿</span>
                  {formatNumber(stats.today_earnings)}
                </h4>
                <img src={Coinicon} alt="coin" className="img-fluid" style={{ marginLeft: "auto", display: "block", width: "40px" }} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="stat-card">
              <Card.Body className="p-0">
                <p className="small fw-medium text-muted mb-2">{t("currentBalance")}</p>
                <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
                  <span style={{ color: "var(--thaixo-pink)" }}>฿</span>
                  {formatNumber(stats.current_balance)}
                </h4>
                <img src={Coinicon} alt="coin" className="img-fluid" style={{ marginLeft: "auto", display: "block", width: "40px" }} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="stat-card">
              <Card.Body className="p-0">
                <p className="small fw-medium text-muted mb-2">{t("lastMonthEarnings")}</p>
                <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
                  <span style={{ color: "var(--thaixo-pink)" }}>฿</span>
                  {formatNumber(stats.last_month_earnings)}
                </h4>
                <img src={Coinicon} alt="coin" className="img-fluid" style={{ marginLeft: "auto", display: "block", width: "40px" }} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-5 px-4 align-items-start">
          <Col xs={12} lg={8}>
            <div className="mb-4">
              <h5 className="h5 fw-bold text-dark mb-1">{t("earningGraph")}</h5>
              <p className="small text-muted">
                {t("weeklyProgress")} • {formatNumber(totalWeeklyEarnings)} {t("thb")}
              </p>
            </div>
            <div style={{ height: "300px", width: "100%" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={getTranslatedChartData()}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e95d82" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#e95d82" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#999", fontSize: 12 }} dy={10} />
                  <YAxis tick={{ fill: "#999", fontSize: 12 }} />
                  <Tooltip formatter={(value) => [`${formatNumber(value)} ${t("thb")}`, t("tooltipEarnings")]} />
                  <Area type="monotone" dataKey="value" stroke="#e95d82" strokeWidth={3} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Col>

          <Col xs={12} lg={4} className="mb-lg-0 mb-5">
            <h5 className="h5 fw-bold text-dark mb-4">{t("weeklyList")}</h5>
            <div className="border rounded-3 overflow-hidden">
              <Table responsive className="custom-table mb-0">
                <thead>
                  <tr>
                    <th className="px-3 py-3">{t("date")}</th>
                    <th className="px-3 py-3 text-end">{t("income")}</th>
                  </tr>
                </thead>
                <tbody className="border-top-0">
                  {weeklyEarnings.length === 0 ? (
                    <tr>
                      <td colSpan="2" className="text-center py-4 text-muted">{t("noData")}</td>
                    </tr>
                  ) : (
                    weeklyEarnings.map((item, index) => (
                      <tr key={index}>
                        <td className="px-3 py-3 text-muted">{item.date}</td>
                        <td className="px-3 py-3 text-end fw-semibold text-dark">
                          {formatNumber(item.income)} {t("thb")}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
}









// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Dashboard.css";
// import Coinicon from "../assets/Coinicon.png";
// import axios from "axios";
// import { Menu, X, AlertCircle } from "lucide-react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { Row, Col, Card, Table } from "react-bootstrap";

// // Translations - Same structure as other pages
// const dashboardTranslations = {
//   en: {
//     welcome: "Welcome back {name}!",
//     todayEarnings: "Today's Earnings",
//     currentBalance: "Current Balance",
//     lastMonthEarnings: "Last Month Earnings",
//     earningGraph: "Earning Graph",
//     weeklyProgress: "Weekly Progress",
//     weeklyList: "Weekly list",
//     date: "Date",
//     income: "Income",
//     noData: "No weekly earnings data available",
//     loading: "Loading dashboard data...",
//     tryAgain: "Try Again",
//     errorSession: "Session expired. Please login again.",
//     errorFetch: "An error occurred while fetching dashboard data",
//     tooltipEarnings: "Earnings",
//   },
//   th: {
//     welcome: "ยินดีต้อนรับกลับ {name}!",
//     todayEarnings: "รายได้วันนี้",
//     currentBalance: "ยอดเงินคงเหลือ",
//     lastMonthEarnings: "รายได้เดือนที่แล้ว",
//     earningGraph: "กราฟรายได้",
//     weeklyProgress: "ความคืบหน้ารายสัปดาห์",
//     weeklyList: "รายการรายสัปดาห์",
//     date: "วันที่",
//     income: "รายได้",
//     noData: "ไม่มีข้อมูลรายได้รายสัปดาห์",
//     loading: "กำลังโหลดข้อมูลแดชบอร์ด...",
//     tryAgain: "ลองอีกครั้ง",
//     errorSession: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง",
//     errorFetch: "เกิดข้อผิดพลาดในการดึงข้อมูลแดชบอร์ด",
//     tooltipEarnings: "รายได้",
//   },
// };

// const defaultChartData = [
//   { name: "Mon", value: 0 },
//   { name: "Tue", value: 0 },
//   { name: "Wed", value: 0 },
//   { name: "Thu", value: 0 },
//   { name: "Fri", value: 0 },
//   { name: "Sat", value: 0 },
//   { name: "Sun", value: 0 },
// ];

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [stats, setStats] = useState({
//     current_balance: 0,
//     today_earnings: 0,
//     last_month_earnings: 0,
//   });
//   const [weeklyEarnings, setWeeklyEarnings] = useState([]);
//   const [chartData, setChartData] = useState(defaultChartData);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [userName, setUserName] = useState("User");

//   // Language State (Same as other pages)
//   const [language, setLanguage] = useState(() => 
//     localStorage.getItem("appLanguage") || "en"
//   );

//   const navigate = useNavigate();
//   const t = dashboardTranslations[language];

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   // Format number with 2 decimal places
//   const formatNumber = (value) => {
//     const num = parseFloat(value) || 0;
//     return num.toLocaleString("en-US", {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     });
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
//     fetchEarningsStats();
//     fetchWeeklyEarnings();
//   }, []);

//   const fetchEarningsStats = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError(t.errorSession);
//         setLoading(false);
//         setTimeout(() => navigate("/"), 2000);
//         return;
//       }

//       const response = await axios.get(
//         `${import.meta.env.VITE_SERVER_URL}/customer/earnings-stats`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `${token}`,
//           },
//           withCredentials: true,
//         }
//       );

//       const data = response.data;
//       if (data.success && data.data) {
//         setStats({
//           current_balance: parseFloat(data.data.current_balance || 0),
//           today_earnings: parseFloat(data.data.today_earnings || 0),
//           last_month_earnings: parseFloat(data.data.last_month_earnings || 0),
//         });
//         const storedName = localStorage.getItem("userName");
//         if (storedName) setUserName(storedName);
//       } else {
//         setError(data.message || t.errorFetch);
//       }
//     } catch (err) {
//       console.error("Error fetching stats:", err);
//       if (err.response?.status === 401) {
//         setError(t.errorSession);
//         localStorage.removeItem("token");
//         setTimeout(() => navigate("/"), 2000);
//       } else {
//         setError(t.errorFetch);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchWeeklyEarnings = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await axios.get(
//         `${import.meta.env.VITE_SERVER_URL}/customer/earnings?type=weekly`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `${token}`,
//           },
//           withCredentials: true,
//         }
//       );

//       const data = response.data;
//       if (data.success && data.data?.earnings) {
//         const transformed = data.data.earnings.map((item) => ({
//           date: item.date,
//           income: parseFloat(item.total_earnings || 0),
//           displayIncome: formatNumber(item.total_earnings) + " THB",
//         }));
//         setWeeklyEarnings(transformed);
//         updateChartData(transformed);
//       } else {
//         setWeeklyEarnings([]);
//       }
//     } catch (err) {
//       console.error("Error fetching weekly earnings:", err);
//       setWeeklyEarnings([]);
//     }
//   };

//   const updateChartData = (weeklyData) => {
//     const dayMap = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
//     const dayOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//     weeklyData.forEach((item) => {
//       const dateParts = item.date.split("/");
//       if (dateParts.length === 3) {
//         const day = parseInt(dateParts[0]);
//         const month = parseInt(dateParts[1]) - 1;
//         const year = parseInt(dateParts[2]);
//         const dateObj = new Date(year, month, day);
//         const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dateObj.getDay()];
//         if (dayMap[dayName] !== undefined) {
//           dayMap[dayName] += item.income;
//         }
//       }
//     });

//     const newChartData = dayOrder.map((day) => ({
//       name: day,
//       value: Math.round(dayMap[day]),
//     }));
//     setChartData(newChartData);
//   };

//   const totalWeeklyEarnings = weeklyEarnings.reduce(
//     (sum, item) => sum + item.income,
//     0
//   );

//   // Loading State
//   if (loading) {
//     return (
//       <div className="d-flex min-vh-100 bg-white">
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <main className="main-content flex-grow-1">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
//             <div className="text-center">
//               <div className="spinner-border" role="status" style={{ color: "#e9527a" }} />
//               <p className="mt-3 text-muted">{t.loading}</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   // Error State
//   if (error) {
//     return (
//       <div className="d-flex min-vh-100 bg-white">
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <main className="main-content flex-grow-1">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
//             <div className="text-center">
//               <AlertCircle size={48} className="text-danger mb-3" />
//               <p className="text-danger">{error}</p>
//               <button
//                 onClick={() => window.location.reload()}
//                 className="btn btn-primary mt-3"
//                 style={{ backgroundColor: '#e9527a', border: 'none' }}
//               >
//                 {t.tryAgain}
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex min-vh-100 bg-white">
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

//       <main className="main-content flex-grow-1">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         {/* Language Toggle - Same style as Login, OTP, HelpSupport */}
//         <div 
//           className="language-toggle-wrapper" 
//           style={{ 
//             position: 'absolute', 
//             top: '25px', 
//             right: '30px', 
//             zIndex: 100 
//           }}
//         >
//           <button
//             onClick={toggleLanguage}
//             className="btn btn-sm btn-outline-secondary"
//             style={{ borderRadius: '20px', padding: '4px 12px' }}
//           >
//             {language === 'en' ? 'ไทย' : 'English'}
//           </button>
//         </div>

//         <div className="mb-4 px-4">
//           <h3 className="h3 fw-bold text-dark mt-4">
//             {t.welcome.replace("{name}", userName)}
//           </h3>
//         </div>

//         <Row className="g-4 mb-5 px-4">
//           <Col xs={12} md={4}>
//             <Card className="stat-card">
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   {t.todayEarnings}
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span>
//                   {formatNumber(stats.today_earnings)}
//                 </h4>
//                 <img
//                   src={Coinicon}
//                   alt="coin"
//                   className="img-fluid"
//                   style={{ marginLeft: "auto", display: "block", width: "40px" }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col xs={12} md={4}>
//             <Card className="stat-card">
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   {t.currentBalance}
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span>
//                   {formatNumber(stats.current_balance)}
//                 </h4>
//                 <img
//                   src={Coinicon}
//                   alt="coin"
//                   className="img-fluid"
//                   style={{ marginLeft: "auto", display: "block", width: "40px" }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col xs={12} md={4}>
//             <Card className="stat-card">
//               <Card.Body className="p-0">
//                 <p className="small fw-medium text-muted mb-2">
//                   {t.lastMonthEarnings}
//                 </p>
//                 <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
//                   <span style={{ color: "var(--thaixo-pink)" }}>฿</span>
//                   {formatNumber(stats.last_month_earnings)}
//                 </h4>
//                 <img
//                   src={Coinicon}
//                   alt="coin"
//                   className="img-fluid"
//                   style={{ marginLeft: "auto", display: "block", width: "40px" }}
//                 />
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row className="g-5 px-4 align-items-start">
//           <Col xs={12} lg={8}>
//             <div className="mb-4">
//               <h5 className="h5 fw-bold text-dark mb-1">{t.earningGraph}</h5>
//               <p className="small text-muted">
//                 {t.weeklyProgress} • {formatNumber(totalWeeklyEarnings)} THB
//               </p>
//             </div>
//             <div style={{ height: "300px", width: "100%" }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={chartData}>
//                   <defs>
//                     <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#e95d82" stopOpacity={0.3} />
//                       <stop offset="95%" stopColor="#e95d82" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
//                   <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#999", fontSize: 12 }} dy={10} />
//                   <YAxis tick={{ fill: "#999", fontSize: 12 }} />
//                   <Tooltip formatter={(value) => [`${value} THB`, t.tooltipEarnings]} />
//                   <Area
//                     type="monotone"
//                     dataKey="value"
//                     stroke="#e95d82"
//                     strokeWidth={3}
//                     fill="url(#colorValue)"
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </Col>

//           <Col xs={12} lg={4}>
//             <h5 className="h5 fw-bold text-dark mb-4">{t.weeklyList}</h5>
//             <div className="border rounded-3 overflow-hidden">
//               <Table responsive className="custom-table mb-0">
//                 <thead>
//                   <tr>
//                     <th className="px-3 py-3">{t.date}</th>
//                     <th className="px-3 py-3 text-end">{t.income}</th>
//                   </tr>
//                 </thead>
//                 <tbody className="border-top-0">
//                   {weeklyEarnings.length === 0 ? (
//                     <tr>
//                       <td colSpan="2" className="text-center py-4 text-muted">
//                         {t.noData}
//                       </td>
//                     </tr>
//                   ) : (
//                     weeklyEarnings.map((item, index) => (
//                       <tr key={index}>
//                         <td className="px-3 py-3 text-muted">{item.date}</td>
//                         <td className="px-3 py-3 text-end fw-semibold text-dark">
//                           {item.displayIncome}
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </Table>
//             </div>
//           </Col>
//         </Row>
//       </main>
//     </div>
//   );
// }
