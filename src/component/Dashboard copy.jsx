// import React from "react";
// import Header from "../component/Header";
// import "../css/Dashboard.css";
// // import logo from "../assets/logo.png";
// import Profile from "../assets/Profile.png";
// import Dashboardbg from "../assets/Dashboardbg.png";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-wrapper">

//       {/* Header */}
//      <Header />

//       {/* Main Content */}
//       <div className="dashboard-body container-fluid">
//         <div className="row h-100 align-items-center">

//           {/* Left watermark space */}
//           <div className="col-md-8 d-none d-md-block">
//             {/* <div className="watermark-text">X</div> */}

//             <img src={Dashboardbg} alt="User" className="img-fluid" style={{marginLeft:'-15px'}} />
//           </div>

//           {/* Right action buttons */}
//           <div className="col-md-4 d-flex justify-content-center">
//             <div className="menu-buttons">
//               <button className="menu-btn">Your Income</button>
//               <button className="menu-btn active">Withdrawal</button>
//               <button className="menu-btn">Video Call Earn History</button>
//               <button className="menu-btn">Withdrawal History</button>
//               <button className="menu-btn">Your Profile Strength</button>
//               <button className="menu-btn">Help & Support</button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../component/Header";
// import "../css/Dashboard.css";
// import Dashboardbg from "../assets/Dashboardbg.png";

// const Dashboard = () => {
//   /* ===============================
//      MENU SELECTION STATE
//   =============================== */
//   const [activeMenu, setActiveMenu] = useState("Withdrawal");
//   const navigate = useNavigate();

//   /* ===============================
//      APPLY THEME (READ FROM STORAGE)
//   =============================== */
//   const applyTheme = () => {
//     const savedTheme = localStorage.getItem("theme") || "system";

//     if (savedTheme === "system") {
//       document.documentElement.removeAttribute("data-theme");
//       return;
//     }

//     document.documentElement.setAttribute("data-theme", savedTheme);
//   };

//   /* Initial theme apply */
//   useEffect(() => {
//     applyTheme();
//   }, []);

//   /* Listen to OS theme changes (SYSTEM ONLY) */
//   useEffect(() => {
//     const media = window.matchMedia("(prefers-color-scheme: dark)");

//     const handleChange = () => {
//       if ((localStorage.getItem("theme") || "system") === "system") {
//         document.documentElement.removeAttribute("data-theme");
//       }
//     };

//     media.addEventListener("change", handleChange);
//     return () => media.removeEventListener("change", handleChange);
//   }, []);

//   /* ===============================
//      MENU ITEMS
//   =============================== */
//   const menuItems = [
//     // "Your Income",
//     "Withdrawal",
//     // "Video Call Earn History",
//     "Withdrawal History",
//     "Your Profile Strength",
//     "Help & Support",
//   ];

//   /* ===============================
//      MENU ROUTES
//   =============================== */
//   const menuRoutes = {
//     "Your Income": "/IncomeDashboard",
//     "Withdrawal": "/withdrawal",
//     "Video Call Earn History": "/VideoCallHistory",
//     "Withdrawal History": "/WithdrawalHistory",
//     "Your Profile Strength": "/withdrawal",
//     "Help & Support": "/Helpsupport",
//   };

//   /* ===============================
//      HANDLE MENU CLICK
//   =============================== */
//   const handleMenuClick = (item) => {
//     setActiveMenu(item);
//     navigate(menuRoutes[item]);
//   };

//   return (
//     <div className="dashboard-wrapper">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <div className="dashboard-body container-fluid">
//         <div className="row h-100 align-items-center justify-content-center">

//           {/* Left Image */}
//           {/* <div className="col-md-8 d-none">
//             <img
//               src={Dashboardbg}
//               alt="Dashboard"
//               className="img-fluid"
//               style={{ marginLeft: "-15px" }}
//             />
//           </div> */}

//           {/* Right Menu */}
//           <div className="col-md-4 d-flex justify-content-center">
//             <div className="menu-buttons">
//               {menuItems.map((item) => (
//                 <button
//                   key={item}
//                   className={`menu-btn ${
//                     activeMenu === item ? "active" : ""
//                   }`}
//                   onClick={() => handleMenuClick(item)}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Selected Section Title */}
//         <div className="row mt-4">
//           <div className="col-12 text-center">
//             <h4 className="selected-title">{activeMenu}</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../component/Header";
// import "../css/Dashboard.css";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   /* ===============================
//      LANGUAGE STATE
//   =============================== */
//   const [language, setLanguage] = useState(
//     localStorage.getItem("language") || "en"
//   );

//   /* ===============================
//      MENU SELECTION STATE
//   =============================== */
//   const [activeMenu, setActiveMenu] = useState("Withdrawal");

//   /* ===============================
//      TRANSLATIONS
//   =============================== */
//   const translations = {
//     en: {
//       Withdrawal: "Withdrawal",
//       WithdrawalHistory: "Withdrawal History",
//       ProfileStrength: "Your Profile Strength",
//       HelpSupport: "Help & Support",
//     },
//     th: {
//       Withdrawal: "การถอนเงิน",
//       WithdrawalHistory: "ประวัติการถอนเงิน",
//       ProfileStrength: "ความแข็งแกร่งของโปรไฟล์ของคุณ",
//       HelpSupport: "ช่วยเหลือและการสนับสนุน",
//     },
//   };

//   /* ===============================
//      MENU ITEMS
//   =============================== */
//   const menuItems = [
//     "Withdrawal",
//     "WithdrawalHistory",
//     "ProfileStrength",
//     "HelpSupport",
//   ];

//   /* ===============================
//      MENU ROUTES
//   =============================== */
//   const menuRoutes = {
//     Withdrawal: "/withdrawal",
//     WithdrawalHistory: "/WithdrawalHistory",
//     ProfileStrength: "/IncomeDashboard",
//     HelpSupport: "/Helpsupport",
//   };

//   const handleMenuClick = (item) => {
//     setActiveMenu(item);
//     navigate(menuRoutes[item]);
//   };

//   /* Listen for language change from Header */
//   useEffect(() => {
//     const lang = localStorage.getItem("language") || "en";
//     setLanguage(lang);
//   }, []);

//   return (
//     <div className="dashboard-wrapper">
//       <Header />

//       <div className="dashboard-body container-fluid">
//         <div className="row h-100 align-items-center justify-content-center">
//           <div className="col-md-4 d-flex justify-content-center">
//             <div className="menu-buttons">
//               {menuItems.map((item) => (
//                 <button
//                   key={item}
//                   className={`menu-btn ${
//                     activeMenu === item ? "active" : ""
//                   }`}
//                   onClick={() => handleMenuClick(item)}
//                 >
//                   {translations[language][item]}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Selected Section Title */}
//         <div className="row mt-4">
//           <div className="col-12 text-center">
//             <h4 className="selected-title">
//               {translations[language][activeMenu]}
//             </h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

  import React, { useState } from "react";
  import Sidebar from "./Sidebar";
  import "../css/Dashboard.css";

  import { Menu, X, Bell, Wallet, TrendingUp, Calendar } from "lucide-react";
  import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";

  const chartData = [
    { name: "Mon", value: 2000 },
    { name: "Tue", value: 4500 },
    { name: "Wed", value: 4200 },
    { name: "Thu", value: 5800 },
    { name: "Fri", value: 7200 },
    { name: "Sat", value: 6800 },
    { name: "Sun", value: 9500 },
  ];

  const weeklyList = [
    { date: "18/11/2025", income: "78 THB" },
    { date: "17/11/2025", income: "65 THB" },
    { date: "16/11/2025", income: "60 THB" },
    { date: "15/11/2025", income: "50 THB" },
    { date: "14/11/2025", income: "48 THB" },
    { date: "13/11/2025", income: "40 THB" },
    { date: "12/11/2025", income: "38 THB" },
  ];

  export default function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
      <div className="d-flex min-vh-100 bg-white">
        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle d-lg-none"
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
        <Sidebar show={isSidebarOpen} />

        {/* Main Content */}
        <main className="main-content flex-grow-1">
          {/* Header Section */}
          <header className="d-flex justify-content-between align-items-center mb-5 border-bottom border-light pb-3">
            <h2 className="h5 fw-semibold text-secondary mb-0">
              ThaiXO Creator Studio
            </h2>
            <div className="d-flex align-items-center gap-3">
              <div className="position-relative cursor-pointer">
                <Bell size={24} className="text-muted" />
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger border border-white"
                  style={{
                    fontSize: "10px",
                    padding: "4px 6px",
                    marginTop: "4px",
                  }}
                >
                  2
                </span>
              </div>
              <div
                className="rounded-circle overflow-hidden border border-light cursor-pointer"
                style={{ width: "40px", height: "40px" }}
              >
                <img
                  src="https://picsum.photos/seed/avatar/100/100"
                  alt="Profile"
                  className="w-100 h-100 object-fit-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </header>

          {/* Welcome Section */}
          <div className="mb-4">
            <h3 className="h3 fw-bold text-dark">Welcome back Binish_Saba!</h3>
          </div>

          {/* Stats Cards */}
          <Row className="g-4 mb-5">
            <Col xs={12} md={4}>
              <Card className="stat-card">
                <Card.Body className="p-0">
                  <p className="small fw-medium text-muted mb-2">
                    Current Balance
                  </p>
                  <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
                    <span style={{ color: "var(--thaixo-pink)" }}>฿</span> 12,000
                  </h4>
                  <Wallet className="stat-card-icon" />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="stat-card">
                <Card.Body className="p-0">
                  <p className="small fw-medium text-muted mb-2">
                    Today's Earnings
                  </p>
                  <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
                    <span style={{ color: "var(--thaixo-pink)" }}>฿</span> 4,000
                  </h4>
                  <TrendingUp className="stat-card-icon" />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="stat-card">
                <Card.Body className="p-0">
                  <p className="small fw-medium text-muted mb-2">
                    Last Month Earnings
                  </p>
                  <h4 className="h2 fw-bold d-flex align-items-center gap-2 mb-0">
                    <span style={{ color: "var(--thaixo-pink)" }}>฿</span> 2,000
                  </h4>
                  <Calendar className="stat-card-icon" />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Content Grid */}
          <Row className="g-5">
            {/* Graph Section */}
            <Col xs={12} lg={8}>
              <div className="mb-4">
                <h5 className="h5 fw-bold text-dark mb-1">Earning Graph</h5>
                <p className="small text-muted d-flex align-items-center mb-0">
                  Weekly Progress <span className="pink-dot"></span> 12200
                </p>
              </div>
              <div style={{ height: "300px", width: "100%" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#e95d82" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#e95d82" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f0f0f0"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#999", fontSize: 12 }}
                      dy={10}
                    />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#e95d82"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorValue)"
                      dot={{
                        r: 4,
                        fill: "#e95d82",
                        strokeWidth: 2,
                        stroke: "#fff",
                      }}
                      activeDot={{
                        r: 6,
                        fill: "#e95d82",
                        strokeWidth: 2,
                        stroke: "#fff",
                      }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Col>

            {/* Weekly List Section */}
            <Col xs={12} lg={4}>
              <h5 className="h5 fw-bold text-dark mb-4">Weekly list</h5>
              <div className="border rounded-3 overflow-hidden">
                <Table responsive className="custom-table mb-0">
                  <thead>
                    <tr>
                      <th className="px-3 py-3">Date</th>
                      <th className="px-3 py-3 text-end">Income</th>
                    </tr>
                  </thead>
                  <tbody className="border-top-0">
                    {weeklyList.map((item, index) => (
                      <tr key={index}>
                        <td className="px-3 py-3 text-muted">{item.date}</td>
                        <td className="px-3 py-3 text-end fw-semibold text-dark">
                          {item.income}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </main>
      </div>
    );
  }

// // Dashboard.jsx
// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../component/Header";
// import "../css/Dashboard.css";
// import { LanguageProvider, LanguageContext } from "../component/LanguageContext";
import Dashboard from "./Dashboard";

// const DashboardContent = () => {
//   const navigate = useNavigate();
//   const { language } = useContext(LanguageContext);

//   const [activeMenu, setActiveMenu] = useState("Withdrawal");

//   const translations = {
//     en: {
//       Withdrawal: "Withdrawal",
//       WithdrawalHistory: "Withdrawal History",
//       ProfileStrength: "Your Profile Strength",
//       HelpSupport: "Help & Support",
//     },
//     th: {
//       Withdrawal: "การถอนเงิน",
//       WithdrawalHistory: "ประวัติการถอนเงิน",
//       ProfileStrength: "ความแข็งแกร่งของโปรไฟล์ของคุณ",
//       HelpSupport: "ช่วยเหลือและการสนับสนุน",
//     },
//   };

//   const menuItems = [
//     "Withdrawal",
//     "WithdrawalHistory",
//     "ProfileStrength",
//     "HelpSupport",
//   ];

//   const menuRoutes = {
//     Withdrawal: "/withdrawal",
//     WithdrawalHistory: "/WithdrawalHistory",
//     ProfileStrength: "/withdrawal",
//     HelpSupport: "/Helpsupport",
//   };

//   const handleMenuClick = (item) => {
//     setActiveMenu(item);
//     navigate(menuRoutes[item]);
//   };

//   return (
//     <div className="dashboard-wrapper">
//       <Header />

//       <div className="dashboard-body container-fluid">
//         <div className="row h-100 align-items-center justify-content-center">
//           <div className="col-md-4 d-flex justify-content-center">
//             <div className="menu-buttons">
//               {menuItems.map((item) => (
//                 <button
//                   key={item}
//                   className={`menu-btn ${
//                     activeMenu === item ? "active" : ""
//                   }`}
//                   onClick={() => handleMenuClick(item)}
//                 >
//                   {translations[language][item]}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div className="col-12 text-center">
//             <h4 className="selected-title">
//               {translations[language][activeMenu]}
//             </h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ✅ PROVIDER ONLY FOR DASHBOARD */
// const Dashboard = () => {
//   return (
//     <LanguageProvider>
//       <DashboardContent />
//     </LanguageProvider>
//   );
// };

// export default Dashboard;
