// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/incomeDashboard.css";
// import Header from "./Header";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const dailyData = [
//   { day: "Mon", value: 38 },
//   { day: "Tue", value: 40 },
//   { day: "Wed", value: 48 },
//   { day: "Thu", value: 50 },
//   { day: "Fri", value: 60 },
//   { day: "Sat", value: 65 },
//   { day: "Sun", value: 78 },
// ];

// const tableData = [
//   { date: "18/11/2025", income: "78 THB" },
//   { date: "17/11/2025", income: "65 THB" },
//   { date: "16/11/2025", income: "60 THB" },
//   { date: "15/11/2025", income: "50 THB" },
//   { date: "14/11/2025", income: "48 THB" },
//   { date: "13/11/2025", income: "40 THB" },
//   { date: "12/11/2025", income: "38 THB" },
// ];

// const IncomeDashboard = () => {
//   const [tab, setTab] = useState("daily");

//   return (
//     <div className="income-wrapper min-vh-100">
//       <Header />

//       <div className="container-fluid px-5 mt-4">
//         {/* Toggle */}
//         <div className="d-flex justify-content-center mb-4">
//           <div className="income-toggle">
//             <button
//               className={tab === "daily" ? "active" : ""}
//               onClick={() => setTab("daily")}
//             >
//               Daily Income
//             </button>
//             <button
//               className={tab === "monthly" ? "active" : ""}
//               onClick={() => setTab("monthly")}
//             >
//               Monthly Income
//             </button>
//           </div>
//         </div>

//         {/* Card */}
//         <div className="income-card p-4">
//           <div className="row">
//             {/* LEFT */}
//             <div className="col-lg-8">
//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <div>
//                   <h1 className="income-amount">฿ 78,500.00</h1>
//                   <p className="income-label">Daily Income</p>
//                 </div>
//                 <div className="income-date">18 Nov 2026</div>
//               </div>

//               <div className="chart-box">
//                 <ResponsiveContainer width="100%" height={220}>
//                   <LineChart data={dailyData}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
//                     <XAxis dataKey="day" stroke="#fff" />
//                     <YAxis stroke="#fff" />
//                     <Tooltip />
//                     <Line
//                       type="monotone"
//                       dataKey="value"
//                       stroke="#ffffff"
//                       strokeWidth={2}
//                       dot={{ r: 4 }}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="col-lg-4">
//               <table className="table income-table">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Income</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tableData.map((row, i) => (
//                     <tr key={i}>
//                       <td>{row.date}</td>
//                       <td>{row.income}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="text-center mt-4">
//             <button className="see-more-btn">See More</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IncomeDashboard;

// import React, { useState , useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/incomeDashboard.css";
// import Header from "./Header";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// /* ================= DAILY DATA ================= */
// const dailyData = [
//   { day: "Mon", value: 38 },
//   { day: "Tue", value: 40 },
//   { day: "Wed", value: 48 },
//   { day: "Thu", value: 50 },
//   { day: "Fri", value: 60 },
//   { day: "Sat", value: 65 },
//   { day: "Sun", value: 78 },
// ];

// const dailyTableData = [
//   { date: "18/11/2025", income: "78 THB" },
//   { date: "17/11/2025", income: "65 THB" },
//   { date: "16/11/2025", income: "60 THB" },
//   { date: "15/11/2025", income: "50 THB" },
//   { date: "14/11/2025", income: "48 THB" },
//   { date: "13/11/2025", income: "40 THB" },
//   { date: "12/11/2025", income: "38 THB" },
// ];

// /* ================= MONTHLY DATA ================= */
// const monthlyData = [
//   { month: "Jan", value: 200 },
//   { month: "Feb", value: 400 },
//   { month: "Mar", value: 1000 },
//   { month: "Apr", value: 800 },
//   { month: "May", value: 900 },
//   { month: "Jun", value: 1200 },
//   { month: "Jul", value: 2000 },
//   { month: "Aug", value: 3600 },
//   { month: "Sep", value: 4500 },
//   { month: "Oct", value: 4000 },
//   { month: "Nov", value: 8800 },
//   { month: "Dec", value: 9999 },
// ];

// const monthlyTableData = [
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

//   /* ===== THEME LISTENER (same as VideoCallHistory) ===== */

// const IncomeDashboard = () => {
//   const [tab, setTab] = useState("daily");

//     useEffect(() => {
//     const applyTheme = (t) => {
//       document.documentElement.setAttribute("data-theme", t || "light");
//     };

//     applyTheme(localStorage.getItem("theme"));

//     const handleStorageChange = (e) => {
//       if (e.key === "theme") applyTheme(e.newValue);
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   return (
//     <div className="income-wrapper bg-black" id="income-wrapper-bg">
//       <Header />

//       <div className="container-fluid px-5 mt-4">
//         {/* ================= TOGGLE ================= */}
//         <div className="d-flex justify-content-center mb-4">
//           <div className="income-toggle">
//             <button
//               className={tab === "daily" ? "active" : ""}
//               onClick={() => setTab("daily")}
//             >
//               Daily Income
//             </button>
//             <button
//               className={tab === "monthly" ? "active" : ""}
//               onClick={() => setTab("monthly")}
//             >
//               Monthly Income
//             </button>
//           </div>
//         </div>

//         {/* ================= CARD ================= */}
//         <div className="container">
//         <div className="income-card p-4" style={{background:'#1A0A0E'}}>
//           <div className="row">
//             {/* ================= LEFT ================= */}
//             <div className="col-lg-8">
//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <div>
//                   <h1 className="income-amount">
//                     {tab === "daily" ? "฿ 78,500.00" : "฿ 20,700.00"}
//                   </h1>
//                   <p className="income-label">
//                     {tab === "daily" ? "Daily Income" : "Monthly Income"}
//                   </p>
//                 </div>

//                 <div className="income-date">
//                   {tab === "daily" ? "18 Nov 2026" : "2026"}
//                 </div>
//               </div>

//               {/* ================= CHART ================= */}
//               <div className="chart-box">
//                 <ResponsiveContainer width="100%" height={220}>
//                   <LineChart data={tab === "daily" ? dailyData : monthlyData}>
//                     <CartesianGrid
//                       strokeDasharray="3 3"
//                       stroke="rgba(255,255,255,0.2)"
//                     />
//                     <XAxis
//                       dataKey={tab === "daily" ? "day" : "month"}
//                       stroke="#fff"
//                     />
//                     <YAxis stroke="#fff" />
//                     <Tooltip />
//                     <Line
//                       type="monotone"
//                       dataKey="value"
//                       stroke="#ffffff"
//                       strokeWidth={2}
//                       dot={{ r: 4 }}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//               <div className="text-center mt-5">
//                 <button className="see-more-btn">See More</button>
//               </div>
//             </div>

//             {/* ================= RIGHT ================= */}
//             <div className="col-lg-4">
//               <table className="table income-table">
//                 <thead>
//                   <tr>
//                     <th>{tab === "daily" ? "Date" : "Month"}</th>
//                     <th>Income</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {(tab === "daily" ? dailyTableData : monthlyTableData).map(
//                     (row, i) => (
//                       <tr key={i}>
//                         <td className="date-incone-color">{row.date}</td>
//                         <td className="date-incone-color">{row.income}</td>
//                       </tr>
//                     )
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default IncomeDashboard;















// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/incomeDashboard.css";
// import Header from "./Header";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// /* ================= DAILY DATA ================= */
// const dailyData = [
//   { day: "Mon", value: 38 },
//   { day: "Tue", value: 40 },
//   { day: "Wed", value: 48 },
//   { day: "Thu", value: 50 },
//   { day: "Fri", value: 60 },
//   { day: "Sat", value: 65 },
//   { day: "Sun", value: 78 },
// ];

// const dailyTableData = [
//   { date: "18/11/2025", income: "78 THB" },
//   { date: "17/11/2025", income: "65 THB" },
//   { date: "16/11/2025", income: "60 THB" },
//   { date: "15/11/2025", income: "50 THB" },
//   { date: "14/11/2025", income: "48 THB" },
//   { date: "13/11/2025", income: "40 THB" },
//   { date: "12/11/2025", income: "38 THB" },
// ];

// /* ================= MONTHLY DATA (KEYS) ================= */
// const monthlyData = [
//   { month: "jan", value: 200 },
//   { month: "feb", value: 400 },
//   { month: "mar", value: 1000 },
//   { month: "apr", value: 800 },
//   { month: "may", value: 900 },
//   { month: "jun", value: 1200 },
//   { month: "jul", value: 2000 },
//   { month: "aug", value: 3600 },
//   { month: "sep", value: 4500 },
//   { month: "oct", value: 4000 },
//   { month: "nov", value: 8800 },
//   { month: "dec", value: 9999 },
// ];

// const monthlyTableData = [
//   { date: "jan", income: "200 THB" },
//   { date: "feb", income: "400 THB" },
//   { date: "mar", income: "1,000 THB" },
//   { date: "apr", income: "800 THB" },
//   { date: "may", income: "900 THB" },
//   { date: "jun", income: "1,200 THB" },
//   { date: "jul", income: "2,000 THB" },
//   { date: "aug", income: "3,600 THB" },
//   { date: "sep", income: "4,500 THB" },
//   { date: "oct", income: "4,000 THB" },
//   { date: "nov", income: "8,800 THB" },
//   { date: "dec", income: "9,999 THB" },
// ];

// /* ================= TRANSLATIONS ================= */
// const translations = {
//   en: {
//     dailyIncome: "Daily Income",
//     monthlyIncome: "Monthly Income",
//     date: "Date",
//     month: "Month",
//     income: "Income",
//     seeMore: "See More",

//     jan: "January",
//     feb: "February",
//     mar: "March",
//     apr: "April",
//     may: "May",
//     jun: "June",
//     jul: "July",
//     aug: "August",
//     sep: "September",
//     oct: "October",
//     nov: "November",
//     dec: "December",
//   },
//   th: {
//     dailyIncome: "รายได้รายวัน",
//     monthlyIncome: "รายได้รายเดือน",
//     date: "วันที่",
//     month: "เดือน",
//     income: "รายได้",
//     seeMore: "ดูเพิ่มเติม",

//     jan: "มกราคม",
//     feb: "กุมภาพันธ์",
//     mar: "มีนาคม",
//     apr: "เมษายน",
//     may: "พฤษภาคม",
//     jun: "มิถุนายน",
//     jul: "กรกฎาคม",
//     aug: "สิงหาคม",
//     sep: "กันยายน",
//     oct: "ตุลาคม",
//     nov: "พฤศจิกายน",
//     dec: "ธันวาคม",
//   },
// };

// const IncomeDashboard = () => {
//   const [tab, setTab] = useState("daily");
//   const [language, setLanguage] = useState(
//     localStorage.getItem("language") || "en",
//   );

//   useEffect(() => {
//     const applyTheme = (t) => {
//       document.documentElement.setAttribute("data-theme", t || "light");
//     };

//     applyTheme(localStorage.getItem("theme"));

//     const handleStorageChange = (e) => {
//       if (e.key === "theme") applyTheme(e.newValue);
//       if (e.key === "language") setLanguage(e.newValue || "en");
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   return (
//     <div className="income-wrapper bg-black" id="income-wrapper-bg">
//       <Header />

//       <div className="container-fluid px-5 mt-4">
//         {/* TOGGLE */}
//         <div className="d-flex justify-content-center mb-4">
//           <div className="income-toggle">
//             <button
//               className={tab === "daily" ? "active" : ""}
//               onClick={() => setTab("daily")}
//             >
//               {translations[language].dailyIncome}
//             </button>
//             <button
//               className={tab === "monthly" ? "active" : ""}
//               onClick={() => setTab("monthly")}
//             >
//               {translations[language].monthlyIncome}
//             </button>
//           </div>
//         </div>

//         {/* CARD */}
//         <div className="container">
//           <div className="income-card p-4" style={{ background: "#1A0A0E" }}>
//             <div className="row">
//               {/* LEFT */}
//               <div className="col-lg-8">
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <div>
//                     <h1 className="income-amount">
//                       {tab === "daily" ? "฿ 78,500.00" : "฿ 20,700.00"}
//                     </h1>
//                     <p className="income-label">
//                       {tab === "daily"
//                         ? translations[language].dailyIncome
//                         : translations[language].monthlyIncome}
//                     </p>
//                   </div>

//                   <div className="income-date">
//                     {tab === "daily" ? "18 Nov 2026" : "2026"}
//                   </div>
//                 </div>

//                 {/* CHART */}
//                 <ResponsiveContainer width="100%" height={220}>
//                   <LineChart data={tab === "daily" ? dailyData : monthlyData}>
//                     <CartesianGrid
//                       strokeDasharray="3 3"
//                       stroke="rgba(255,255,255,0.2)"
//                     />
//                     <XAxis
//                       dataKey={tab === "daily" ? "day" : "month"}
//                       tickFormatter={(val) =>
//                         tab === "monthly" ? translations[language][val] : val
//                       }
//                       stroke="#fff"
//                     />
//                     <YAxis stroke="#fff" />
//                     <Tooltip />
//                     <Line
//                       type="monotone"
//                       dataKey="value"
//                       stroke="#fff"
//                       strokeWidth={2}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>

//                 <div className="text-center mt-5">
//                   {/* <button className="see-more-btn">
//                     {translations[language].seeMore}
//                   </button> */}

//                   <button
//                     className="see-more-btn"
//                     onClick={() => navigate("/daily-see-more")}
//                   >
//                     {translations[language].seeMore}
//                   </button>
//                 </div>
//               </div>

//               {/* RIGHT */}
//               <div className="col-lg-4">
//                 <table className="table income-table">
//                   <thead>
//                     <tr>
//                       <th>
//                         {tab === "daily"
//                           ? translations[language].date
//                           : translations[language].month}
//                       </th>
//                       <th>{translations[language].income}</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {(tab === "daily" ? dailyTableData : monthlyTableData).map(
//                       (row, i) => (
//                         <tr key={i}>
//                           <td className="date-incone-color">
//                             {tab === "daily"
//                               ? row.date
//                               : translations[language][row.date]}
//                           </td>
//                           <td className="date-incone-color">{row.income}</td>
//                         </tr>
//                       ),
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IncomeDashboard;

















import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/incomeDashboard.css";
import Header from "./Header";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ================= DAILY DATA ================= */
const dailyData = [
  { day: "Mon", value: 38 },
  { day: "Tue", value: 40 },
  { day: "Wed", value: 48 },
  { day: "Thu", value: 50 },
  { day: "Fri", value: 60 },
  { day: "Sat", value: 65 },
  { day: "Sun", value: 78 },
];

const dailyTableData = [
  { date: "18/11/2025", income: "78 THB" },
  { date: "17/11/2025", income: "65 THB" },
  { date: "16/11/2025", income: "60 THB" },
  { date: "15/11/2025", income: "50 THB" },
  { date: "14/11/2025", income: "48 THB" },
  { date: "13/11/2025", income: "40 THB" },
  { date: "12/11/2025", income: "38 THB" },
];

/* ================= MONTHLY DATA ================= */
const monthlyData = [
  { month: "jan", value: 200 },
  { month: "feb", value: 400 },
  { month: "mar", value: 1000 },
  { month: "apr", value: 800 },
  { month: "may", value: 900 },
  { month: "jun", value: 1200 },
  { month: "jul", value: 2000 },
  { month: "aug", value: 3600 },
  { month: "sep", value: 4500 },
  { month: "oct", value: 4000 },
  { month: "nov", value: 8800 },
  { month: "dec", value: 9999 },
];

const monthlyTableData = [
  { date: "jan", income: "200 THB" },
  { date: "feb", income: "400 THB" },
  { date: "mar", income: "1,000 THB" },
  { date: "apr", income: "800 THB" },
  { date: "may", income: "900 THB" },
  { date: "jun", income: "1,200 THB" },
  { date: "jul", income: "2,000 THB" },
  { date: "aug", income: "3,600 THB" },
  { date: "sep", income: "4,500 THB" },
  { date: "oct", income: "4,000 THB" },
  { date: "nov", income: "8,800 THB" },
  { date: "dec", income: "9,999 THB" },
];

/* ================= TRANSLATIONS ================= */
const translations = {
  en: {
    dailyIncome: "Daily Income",
    monthlyIncome: "Monthly Income",
    date: "Date",
    month: "Month",
    income: "Income",
    seeMore: "See More",
    jan: "January",
    feb: "February",
    mar: "March",
    apr: "April",
    may: "May",
    jun: "June",
    jul: "July",
    aug: "August",
    sep: "September",
    oct: "October",
    nov: "November",
    dec: "December",
  },
  th: {
    dailyIncome: "รายได้รายวัน",
    monthlyIncome: "รายได้รายเดือน",
    date: "วันที่",
    month: "เดือน",
    income: "รายได้",
    seeMore: "ดูเพิ่มเติม",
    jan: "มกราคม",
    feb: "กุมภาพันธ์",
    mar: "มีนาคม",
    apr: "เมษายน",
    may: "พฤษภาคม",
    jun: "มิถุนายน",
    jul: "กรกฎาคม",
    aug: "สิงหาคม",
    sep: "กันยายน",
    oct: "ตุลาคม",
    nov: "พฤศจิกายน",
    dec: "ธันวาคม",
  },
};

const IncomeDashboard = () => {
  const [tab, setTab] = useState("daily");
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "language") setLanguage(e.newValue || "en");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="income-wrapper bg-black">
      <Header />

      <div className="container-fluid px-5 mt-4">
        {/* TOGGLE */}
        <div className="d-flex justify-content-center mb-4">
          <div className="income-toggle">
            <button
              className={tab === "daily" ? "active" : ""}
              onClick={() => setTab("daily")}
            >
              {translations[language].dailyIncome}
            </button>
            <button
              className={tab === "monthly" ? "active" : ""}
              onClick={() => setTab("monthly")}
            >
              {translations[language].monthlyIncome}
            </button>
          </div>
        </div>

        {/* CARD */}
        <div className="income-card p-4" style={{ background: "#1A0A0E" }}>
          <div className="row">
            {/* LEFT */}
            <div className="col-lg-8">
              <h1 className="income-amount">
                {tab === "daily" ? "฿ 78,500.00" : "฿ 20,700.00"}
              </h1>

              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={tab === "daily" ? dailyData : monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey={tab === "daily" ? "day" : "month"}
                    tickFormatter={(v) =>
                      tab === "monthly"
                        ? translations[language][v]
                        : v
                    }
                  />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#fff" />
                </LineChart>
              </ResponsiveContainer>

              <div className="text-center mt-4">
                <button
                  className="see-more-btn"
                  onClick={() =>
                    navigate("/DailySeeMore", {
                      state: { activeTab: tab },
                    })
                  }
                >
                  {translations[language].seeMore}
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-4">
              <table className="table income-table">
                <thead>
                  <tr>
                    <th>
                      {tab === "daily"
                        ? translations[language].date
                        : translations[language].month}
                    </th>
                    <th>{translations[language].income}</th>
                  </tr>
                </thead>
                <tbody>
                  {(tab === "daily"
                    ? dailyTableData
                    : monthlyTableData
                  ).map((row, i) => (
                    <tr key={i}>
                      <td>
                        {tab === "daily"
                          ? row.date
                          : translations[language][row.date]}
                      </td>
                      <td>{row.income}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeDashboard;
