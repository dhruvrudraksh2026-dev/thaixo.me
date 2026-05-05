// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/incomeDashboard.css";
// import Header from "./Header";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
// } from "recharts";

// /* ================= DAILY GRAPH DATA ================= */
// const graphData = [
//   { day: "Mon", value: 38 },
//   { day: "Tue", value: 40 },
//   { day: "Wed", value: 48 },
//   { day: "Thu", value: 50 },
//   { day: "Fri", value: 60 },
//   { day: "Sat", value: 65 },
//   { day: "Sun", value: 78 },
// ];

// /* ================= TABLE DATA ================= */
// const tableLeft = [
//   { date: "01/11/2025", income: "78 THB" },
//   { date: "02/11/2025", income: "65 THB" },
//   { date: "03/11/2025", income: "60 THB" },
//   { date: "04/11/2025", income: "50 THB" },
//   { date: "05/11/2025", income: "48 THB" },
//   { date: "06/11/2025", income: "40 THB" },
//   { date: "07/11/2025", income: "38 THB" },
//   { date: "08/11/2025", income: "38 THB" },
//   { date: "09/11/2025", income: "38 THB" },
//   { date: "10/11/2025", income: "38 THB" },
//   { date: "11/11/2025", income: "38 THB" },
//   { date: "12/11/2025", income: "38 THB" },
//   { date: "13/11/2025", income: "38 THB" },
//   { date: "14/11/2025", income: "38 THB" },
//   { date: "15/11/2025", income: "38 THB" },
// ];

// const tableRight = [
//   { date: "16/11/2025", income: "38 THB" },
//   { date: "17/11/2025", income: "38 THB" },
//   { date: "18/11/2025", income: "38 THB" },
//   { date: "19/11/2025", income: "38 THB" },
//   { date: "20/11/2025", income: "38 THB" },
//   { date: "21/11/2025", income: "38 THB" },
//   { date: "22/11/2025", income: "38 THB" },
//   { date: "23/11/2025", income: "38 THB" },
//   { date: "24/11/2025", income: "38 THB" },
//   { date: "25/11/2025", income: "38 THB" },
//   { date: "26/11/2025", income: "38 THB" },
//   { date: "27/11/2025", income: "38 THB" },
//   { date: "28/11/2025", income: "38 THB" },
//   { date: "29/11/2025", income: "38 THB" },
//   { date: "30/11/2025", income: "38 THB" },
//   { date: "31/11/2025", income: "38 THB" },
// ];

// const DailySeeMore = () => {
//   const [language, setLanguage] = useState(
//     localStorage.getItem("language") || "en"
//   );

//   /* ================= THEME + LANGUAGE ================= */
//   useEffect(() => {
//     const applyTheme = (t) => {
//       document.documentElement.setAttribute("data-theme", t || "light");
//     };

//     applyTheme(localStorage.getItem("theme"));

//     const handleStorage = (e) => {
//       if (e.key === "language") setLanguage(e.newValue || "en");
//       if (e.key === "theme") applyTheme(e.newValue);
//     };

//     window.addEventListener("storage", handleStorage);
//     return () => window.removeEventListener("storage", handleStorage);
//   }, []);

//   return (
//     <div className="income-wrapper bg-black">
//       <Header />

//       <div className="container mt-4">
//         {/* TOGGLE */}
//         <div className="d-flex justify-content-center mb-4">
//           <div className="income-toggle">
//             <button className="active">Daily Income</button>
//             <button>Monthly Income</button>
//           </div>
//         </div>

//         {/* CARD */}
//         <div className="income-card p-4" style={{ background: "#000" }}>
//           {/* TOP INFO */}
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <div>
//               <h1 className="income-amount">฿ 78,500.00</h1>
//               <p className="income-label">Daily Income</p>
//             </div>
//             <div className="income-date">18 Nov 2026</div>
//           </div>

//           {/* GRAPH */}
//           <div style={{ width: "100%", height: 260 }}>
//             <ResponsiveContainer>
//               <LineChart data={graphData}>
//                 <defs>
//                   <linearGradient id="incomeFill" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#05CFD9" stopOpacity={0.6} />
//                     <stop offset="100%" stopColor="#05CFD9" stopOpacity={0.05} />
//                   </linearGradient>
//                 </defs>

//                 <XAxis dataKey="day" stroke="#aaa" />
//                 <YAxis hide />
//                 <Tooltip />

//                 <Area
//                   type="monotone"
//                   dataKey="value"
//                   stroke="none"
//                   fill="url(#incomeFill)"
//                 />

//                 <Line
//                   type="monotone"
//                   dataKey="value"
//                   stroke="#fff"
//                   strokeWidth={2}
//                   dot={{ r: 5, fill: "#fff" }}
//                   label={{ position: "top", fill: "#fff", fontSize: 12 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* SEE MORE */}
//           <div className="text-center mt-4">
//             <button className="see-more-btn">See More</button>
//           </div>

//           {/* TABLE */}
//           <div className="row mt-5">
//             <div className="col-md-6">
//               <table className="table income-table">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Income</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tableLeft.map((r, i) => (
//                     <tr key={i}>
//                       <td>{r.date}</td>
//                       <td>{r.income}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="col-md-6">
//               <table className="table income-table">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Income</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tableRight.map((r, i) => (
//                     <tr key={i}>
//                       <td>{r.date}</td>
//                       <td>{r.income}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default DailySeeMore;

// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/incomeDashboard.css";
// import Header from "./Header";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
// } from "recharts";

// /* ================= DAILY TABLE ================= */
// const dailyTable = [
//   { d: "01/11/2026", v: "38 THB" },
//   { d: "02/11/2026", v: "40 THB" },
//   { d: "03/11/2026", v: "48 THB" },
//   { d: "04/11/2026", v: "50 THB" },
//   { d: "05/11/2026", v: "60 THB" },
//   { d: "06/11/2026", v: "65 THB" },
//   { d: "07/11/2026", v: "78 THB" },
//   { d: "08/11/2026", v: "38 THB" },
//   { d: "09/11/2026", v: "38 THB" },
//   { d: "10/11/2026", v: "38 THB" },
//   { d: "11/11/2026", v: "38 THB" },
//   { d: "12/11/2026", v: "38 THB" },
//   { d: "13/11/2026", v: "38 THB" },
//   { d: "14/11/2026", v: "38 THB" },
// ];

// /* ================= DAILY DATA ================= */
// const dailyGraph = [
//   { label: "Mon", value: 38 },
//   { label: "Tue", value: 40 },
//   { label: "Wed", value: 48 },
//   { label: "Thu", value: 50 },
//   { label: "Fri", value: 60 },
//   { label: "Sat", value: 65 },
//   { label: "Sun", value: 78 },
// ];

// /* ================= MONTHLY DATA ================= */
// const monthlyGraph = [
//   { label: "Jan", value: 200 },
//   { label: "Feb", value: 400 },
//   { label: "Mar", value: 1000 },
//   { label: "Apr", value: 800 },
//   { label: "May", value: 900 },
//   { label: "Jun", value: 1200 },
//   { label: "Jul", value: 2000 },
//   { label: "Aug", value: 3600 },
//   { label: "Sep", value: 4500 },
//   { label: "Oct", value: 4000 },
//   { label: "Nov", value: 8800 },
//   { label: "Dec", value: 9999 },
// ];

// /* ================= TABLE ================= */
// const monthlyTable = [
//   { m: "January", v: "200 THB" },
//   { m: "February", v: "400 THB" },
//   { m: "March", v: "1,000 THB" },
//   { m: "April", v: "800 THB" },
//   { m: "May", v: "900 THB" },
//   { m: "June", v: "1,200 THB" },
//   { m: "July", v: "2,000 THB" },
//   { m: "August", v: "3,600 THB" },
//   { m: "September", v: "4,500 THB" },
//   { m: "October", v: "4,000 THB" },
//   { m: "November", v: "8,800 THB" },
//   { m: "December", v: "9,999 THB" },
// ];

// const DailySeeMore = () => {
//   const [tab, setTab] = useState("daily");

//   /* ================= THEME ================= */
//   useEffect(() => {
//     const theme = localStorage.getItem("theme") || "dark";
//     document.documentElement.setAttribute("data-theme", theme);
//   }, []);

//   /* ================= COMMON GRAPH ================= */
//   const IncomeGraph = ({ data }) => (
//     <div style={{ height: 260 }}>
//       <ResponsiveContainer>
//         <LineChart data={data}>
//           <defs>
//             <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#05CFD9" stopOpacity={0.6} />
//               <stop offset="100%" stopColor="#05CFD9" stopOpacity={0.05} />
//             </linearGradient>
//           </defs>

//           <XAxis dataKey="label" stroke="#aaa" />
//           <YAxis hide />
//           <Tooltip />

//           <Area dataKey="value" fill="url(#fill)" stroke="none" />

//           <Line
//             dataKey="value"
//             stroke="#fff"
//             strokeWidth={2}
//             dot={{ r: 5, fill: "#fff" }}
//             label={{ fill: "#fff", fontSize: 12, position: "top" }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   /* ================= MONTHLY CARD ================= */

//   const MonthlyCard = ({ year }) => (
//   <div className="income-card p-4 mb-5" style={{ background: "#000" }}>
//     {/* HEADER */}
//     <div className="d-flex justify-content-between mb-3">
//       <div>
//         <h1 className="income-amount">฿ 20,700.00</h1>
//         <p className="income-label">Monthly Income</p>
//       </div>
//       <div className="income-date">{year}</div>
//     </div>

//     {/* ROW: GRAPH + TABLE */}
//     <div className="row align-items-start">
//       {/* GRAPH LEFT */}
//       <div className="col-lg-8 col-md-12">
//         <div style={{ height: 260 }}>
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={monthlyGraph}>
//               <defs>
//                 <linearGradient id={`fill-${year}`} x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#05CFD9" stopOpacity={0.6} />
//                   <stop offset="100%" stopColor="#05CFD9" stopOpacity={0.05} />
//                 </linearGradient>
//               </defs>

//               <XAxis dataKey="label" stroke="#aaa" />
//               <YAxis hide />
//               <Tooltip />

//               <Area
//                 dataKey="value"
//                 fill={`url(#fill-${year})`}
//                 stroke="none"
//               />

//               <Line
//                 dataKey="value"
//                 stroke="#fff"
//                 strokeWidth={2}
//                 dot={{ r: 4, fill: "#fff" }}
//                 label={{ fill: "#fff", fontSize: 11, position: "top" }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* TABLE RIGHT */}
//       <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
//         <table className="table income-table">
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Income</th>
//             </tr>
//           </thead>
//           <tbody>
//             {monthlyTable.map((r, i) => (
//               <tr key={i}>
//                 <td>{r.m}</td>
//                 <td>{r.v}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
// );

//   return (
//     <div className="income-wrapper bg-black">
//       <Header />

//       <div className="container mt-4">
//         {/* TOGGLE */}
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

//         {/* DAILY */}
//         {/* {tab === "daily" && (
//           <div className="income-card p-4" style={{ background: "#000" }}>
//             <div className="d-flex justify-content-between mb-3">
//               <div>
//                 <h1 className="income-amount">฿ 78,500.00</h1>
//                 <p className="income-label">Daily Income</p>
//               </div>
//               <div className="income-date">18 Nov 2026</div>
//             </div>

//             <IncomeGraph data={dailyGraph} />
//           </div>
//         )} */}

//         {tab === "daily" && (
//           <div className="income-card p-4 mb-5" style={{ background: "#000" }}>
//             {/* HEADER */}
//             <div className="d-flex justify-content-between mb-3">
//               <div>
//                 <h1 className="income-amount">฿ 78,500.00</h1>
//                 <p className="income-label">Daily Income</p>
//               </div>
//               <div className="income-date">18 Nov 2026</div>
//             </div>

//             {/* GRAPH */}
//             <IncomeGraph data={dailyGraph} />

//             {/* SEE MORE BUTTON */}
//             <div className="text-center my-4">
//               <button className="see-more-btn">See More</button>
//             </div>

//             {/* TABLE */}
//             <div className="row">
//               <div className="col-md-6">
//                 <table className="table income-table">
//                   <thead>
//                     <tr>
//                       <th>Date</th>
//                       <th>Income</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {dailyTable.slice(0, 7).map((r, i) => (
//                       <tr key={i}>
//                         <td>{r.d}</td>
//                         <td>{r.v}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="col-md-6">
//                 <table className="table income-table">
//                   <thead>
//                     <tr>
//                       <th>Date</th>
//                       <th>Income</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {dailyTable.slice(7).map((r, i) => (
//                       <tr key={i}>
//                         <td>{r.d}</td>
//                         <td>{r.v}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* MONTHLY */}
//         {tab === "monthly" && (
//           <>
//             <MonthlyCard year="2026" />
//             <MonthlyCard year="2025" />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DailySeeMore;

// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/incomeDashboard.css";
// import Header from "./Header";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
// } from "recharts";

// /* ================= DAILY TABLE ================= */
// const dailyTable = [
//   { d: "01/11/2026", v: "38 THB" },
//   { d: "02/11/2026", v: "40 THB" },
//   { d: "03/11/2026", v: "48 THB" },
//   { d: "04/11/2026", v: "50 THB" },
//   { d: "05/11/2026", v: "60 THB" },
//   { d: "06/11/2026", v: "65 THB" },
//   { d: "07/11/2026", v: "78 THB" },
//   { d: "08/11/2026", v: "38 THB" },
//   { d: "09/11/2026", v: "38 THB" },
//   { d: "10/11/2026", v: "38 THB" },
//   { d: "11/11/2026", v: "38 THB" },
//   { d: "12/11/2026", v: "38 THB" },
//   { d: "13/11/2026", v: "38 THB" },
//   { d: "14/11/2026", v: "38 THB" },
// ];

// /* ================= DAILY DATA ================= */
// const dailyGraph = [
//   { label: "Mon", value: 38 },
//   { label: "Tue", value: 40 },
//   { label: "Wed", value: 48 },
//   { label: "Thu", value: 50 },
//   { label: "Fri", value: 60 },
//   { label: "Sat", value: 65 },
//   { label: "Sun", value: 78 },
// ];

// /* ================= MONTHLY DATA ================= */
// const monthlyGraph = [
//   { label: "Jan", value: 200 },
//   { label: "Feb", value: 400 },
//   { label: "Mar", value: 1000 },
//   { label: "Apr", value: 800 },
//   { label: "May", value: 900 },
//   { label: "Jun", value: 1200 },
//   { label: "Jul", value: 2000 },
//   { label: "Aug", value: 3600 },
//   { label: "Sep", value: 4500 },
//   { label: "Oct", value: 4000 },
//   { label: "Nov", value: 8800 },
//   { label: "Dec", value: 9999 },
// ];

// /* ================= TABLE ================= */
// const monthlyTable = [
//   { m: "January", v: "200 THB" },
//   { m: "February", v: "400 THB" },
//   { m: "March", v: "1,000 THB" },
//   { m: "April", v: "800 THB" },
//   { m: "May", v: "900 THB" },
//   { m: "June", v: "1,200 THB" },
//   { m: "July", v: "2,000 THB" },
//   { m: "August", v: "3,600 THB" },
//   { m: "September", v: "4,500 THB" },
//   { m: "October", v: "4,000 THB" },
//   { m: "November", v: "8,800 THB" },
//   { m: "December", v: "9,999 THB" },
// ];

// const DailySeeMore = () => {
//   const [tab, setTab] = useState("daily");
//   const [language, setLanguage] = useState(
//     localStorage.getItem("language") || "en"
//   );

//   /* ================= TRANSLATIONS ================= */
//   const translations = {
//     en: {
//       dailyIncome: "Daily Income",
//       monthlyIncome: "Monthly Income",
//       income: "Income",
//       date: "Date",
//       seeMore: "See More",
//       monthly: "Monthly",
//       totalIncome: "Total Income",
//       jan: "Jan",
//       feb: "Feb",
//       mar: "Mar",
//       apr: "Apr",
//       may: "May",
//       jun: "Jun",
//       jul: "Jul",
//       aug: "Aug",
//       sep: "Sep",
//       oct: "Oct",
//       nov: "Nov",
//       dec: "Dec",
//       january: "January",
//       february: "February",
//       march: "March",
//       april: "April",
//       mayFull: "May",
//       june: "June",
//       july: "July",
//       august: "August",
//       september: "September",
//       october: "October",
//       november: "November",
//       december: "December",
//     },
//     th: {
//       dailyIncome: "รายได้รายวัน",
//       monthlyIncome: "รายได้รายเดือน",
//       income: "รายได้",
//       date: "วันที่",
//       seeMore: "ดูเพิ่มเติม",
//       monthly: "รายเดือน",
//       totalIncome: "รายได้รวม",
//       jan: "ม.ค.",
//       feb: "ก.พ.",
//       mar: "มี.ค.",
//       apr: "เม.ย.",
//       may: "พ.ค.",
//       jun: "มิ.ย.",
//       jul: "ก.ค.",
//       aug: "ส.ค.",
//       sep: "ก.ย.",
//       oct: "ต.ค.",
//       nov: "พ.ย.",
//       dec: "ธ.ค.",
//       january: "มกราคม",
//       february: "กุมภาพันธ์",
//       march: "มีนาคม",
//       april: "เมษายน",
//       mayFull: "พฤษภาคม",
//       june: "มิถุนายน",
//       july: "กรกฎาคม",
//       august: "สิงหาคม",
//       september: "กันยายน",
//       october: "ตุลาคม",
//       november: "พฤศจิกายน",
//       december: "ธันวาคม",
//     },
//   };

//   /* ================= THEME & LANGUAGE ================= */
//   useEffect(() => {
//     const theme = localStorage.getItem("theme") || "dark";
//     document.documentElement.setAttribute("data-theme", theme);

//     const lang = localStorage.getItem("language") || "en";
//     setLanguage(lang);
//   }, []);

//   /* ================= COMMON GRAPH ================= */
//   const IncomeGraph = ({ data, isMonthly = false }) => {
//     // Convert month labels based on language
//     const translatedData = data.map(item => {
//       if (isMonthly && language === "th") {
//         return {
//           ...item,
//           label: translations.th[item.label.toLowerCase()]
//         };
//       }
//       return item;
//     });

//     return (
//       <div style={{ height: 260 }}>
//         <ResponsiveContainer>
//           <LineChart data={translatedData}>
//             <defs>
//               <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor="#05CFD9" stopOpacity={0.6} />
//                 <stop offset="100%" stopColor="#05CFD9" stopOpacity={0.05} />
//               </linearGradient>
//             </defs>

//             <XAxis dataKey="label" stroke="#aaa" />
//             <YAxis hide />
//             <Tooltip formatter={(value) => [`฿ ${value}`, translations[language].income]} />

//             <Area dataKey="value" fill="url(#fill)" stroke="none" />

//             <Line
//               dataKey="value"
//               stroke="#fff"
//               strokeWidth={2}
//               dot={{ r: 5, fill: "#fff" }}
//               label={{ fill: "#fff", fontSize: 12, position: "top" }}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     );
//   };

//   /* ================= MONTHLY CARD ================= */
//   const MonthlyCard = ({ year }) => {
//     // Translate month names in table
//     const translatedMonthlyTable = monthlyTable.map(item => ({
//       ...item,
//       m: translations[language][item.m.toLowerCase()]
//     }));

//     // Translate month labels in graph data
//     const translatedMonthlyGraph = monthlyGraph.map(item => ({
//       ...item,
//       label: language === "th" ? translations.th[item.label.toLowerCase()] : item.label
//     }));

//     return (
//       <div className="income-card p-4 mb-5" style={{ background: "#000" }}>
//         {/* HEADER */}
//         <div className="d-flex justify-content-between mb-3">
//           <div>
//             <h1 className="income-amount">฿ 20,700.00</h1>
//             <p className="income-label">{translations[language].monthlyIncome}</p>
//           </div>
//           <div className="income-date">{year}</div>
//         </div>

//         {/* ROW: GRAPH + TABLE */}
//         <div className="row align-items-start">
//           {/* GRAPH LEFT */}
//           <div className="col-lg-8 col-md-12">
//             <div style={{ height: 260 }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={translatedMonthlyGraph}>
//                   <defs>
//                     <linearGradient id={`fill-${year}`} x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="0%" stopColor="#05CFD9" stopOpacity={0.6} />
//                       <stop offset="100%" stopColor="#05CFD9" stopOpacity={0.05} />
//                     </linearGradient>
//                   </defs>

//                   <XAxis dataKey="label" stroke="#aaa" />
//                   <YAxis hide />
//                   <Tooltip formatter={(value) => [`฿ ${value}`, translations[language].income]} />

//                   <Area
//                     dataKey="value"
//                     fill={`url(#fill-${year})`}
//                     stroke="none"
//                   />

//                   <Line
//                     dataKey="value"
//                     stroke="#fff"
//                     strokeWidth={2}
//                     dot={{ r: 4, fill: "#fff" }}
//                     label={{ fill: "#fff", fontSize: 11, position: "top" }}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* TABLE RIGHT */}
//           <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
//             <table className="table income-table">
//               <thead>
//                 <tr>
//                   <th>{translations[language].date}</th>
//                   <th>{translations[language].income}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {translatedMonthlyTable.map((r, i) => (
//                   <tr key={i}>
//                     <td>{r.m}</td>
//                     <td>{r.v}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="income-wrapper bg-black">
//       <Header />

//       <div className="container mt-4">
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

//         {/* DAILY */}
//         {tab === "daily" && (
//           <div className="income-card p-4 mb-5" style={{ background: "#000" }}>
//             {/* HEADER */}
//             <div className="d-flex justify-content-between mb-3">
//               <div>
//                 <h1 className="income-amount">฿ 78,500.00</h1>
//                 <p className="income-label">{translations[language].dailyIncome}</p>
//               </div>
//               <div className="income-date">18 Nov 2026</div>
//             </div>

//             {/* GRAPH */}
//             <IncomeGraph data={dailyGraph} />

//             {/* SEE MORE BUTTON */}
//             <div className="text-center my-4">
//               <button className="see-more-btn">
//                 {translations[language].seeMore}
//               </button>
//             </div>

//             {/* TABLE */}
//             <div className="row">
//               <div className="col-md-6">
//                 <table className="table income-table">
//                   <thead>
//                     <tr>
//                       <th>{translations[language].date}</th>
//                       <th>{translations[language].income}</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {dailyTable.slice(0, 7).map((r, i) => (
//                       <tr key={i}>
//                         <td>{r.d}</td>
//                         <td>{r.v}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="col-md-6">
//                 <table className="table income-table">
//                   <thead>
//                     <tr>
//                       <th>{translations[language].date}</th>
//                       <th>{translations[language].income}</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {dailyTable.slice(7).map((r, i) => (
//                       <tr key={i}>
//                         <td>{r.d}</td>
//                         <td>{r.v}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* MONTHLY */}
//         {tab === "monthly" && (
//           <>
//             <MonthlyCard year="2026" />
//             <MonthlyCard year="2025" />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DailySeeMore;

// import React, { useState } from 'react';
// import {
//   Home,
//   Wallet,
//   History,
//   ShieldCheck,
//   Flag,
//   Video,
//   HelpCircle,
//   Bell
// } from 'lucide-react';
// import {
//   XAxis,
//   Tooltip,
//   ResponsiveContainer,
//   AreaChart,
//   Area
// } from 'recharts';
// import { Container, Row, Col, Nav, Navbar, Button, Table, Card, Badge } from 'react-bootstrap';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import "../css/DailySeeMore.css";

// // --- Mock Data ---

// const dailyData = [
//   { day: 'Mon', income: 38 },
//   { day: 'Tue', income: 40 },
//   { day: 'Wed', income: 48 },
//   { day: 'Thu', income: 50 },
//   { day: 'Fri', income: 60 },
//   { day: 'Sat', income: 65 },
//   { day: 'Sun', income: 78 },
// ];

// const monthlyData = [
//   { month: 'Jan', income: 200 },
//   { month: 'Feb', income: 400 },
//   { month: 'Mar', income: 1300 },
//   { month: 'Apr', income: 250 },
//   { month: 'May', income: 300 },
//   { month: 'Jun', income: 1250 },
//   { month: 'Jul', income: 2000 },
//   { month: 'Aug', income: 2500 },
//   { month: 'Sep', income: 4325 },
//   { month: 'Oct', income: 4800 },
//   { month: 'Nov', income: 8250 },
//   { month: 'Dec', income: 9000 },
// ];

// const tableData = Array.from({ length: 31 }, (_, i) => ({
//   date: `${String(i + 1).padStart(2, '0')}/11/2025`,
//   income: i < 7 ? [78, 65, 60, 50, 48, 40, 38][i] : 38
// }));

// // --- Custom Styles ---
// const pinkColor = '#f06281';

// const styles = {
//   sidebar: {
//     backgroundColor: pinkColor,
//     minHeight: '100vh',
//     width: '260px',
//     position: 'fixed',
//     left: 0,
//     top: 0,
//     zIndex: 1000,
//     padding: '2rem 0',
//     boxShadow: '4px 0 10px rgba(0,0,0,0.1)'
//   },
//   sidebarItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '1rem',
//     padding: '0.8rem 1.5rem',
//     color: 'white',
//     textDecoration: 'none',
//     fontSize: '0.9rem',
//     fontWeight: 600,
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//     border: 'none',
//     background: 'none',
//     width: '100%',
//     textAlign: 'left'
//   },
//   sidebarItemActive: {
//     backgroundColor: 'white',
//     color: pinkColor,
//     borderRadius: '50px 0 0 50px',
//     marginLeft: '1.5rem',
//     boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//   },
//   header: {
//     backgroundColor: 'white',
//     height: '64px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 2rem',
//     borderBottom: '1px solid #eee',
//     position: 'sticky',
//     top: 0,
//     zIndex: 900
//   },
//   toggleContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     margin: '2.5rem 0'
//   },
//   toggleBox: {
//     backgroundColor: 'white',
//     border: `1px solid ${pinkColor}4D`, // 30% opacity
//     borderRadius: '50px',
//     padding: '0.4rem',
//     display: 'inline-flex',
//     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
//   },
//   toggleBtn: {
//     padding: '0.6rem 2.5rem',
//     borderRadius: '50px',
//     fontSize: '0.875rem',
//     fontWeight: 700,
//     border: 'none',
//     transition: 'all 0.3s ease'
//   },
//   incomeCard: {
//     backgroundColor: pinkColor,
//     borderRadius: '1.5rem',
//     padding: '2rem',
//     color: 'white',
//     border: 'none',
//     boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
//     position: 'relative',
//     overflow: 'hidden'
//   },
//   tableCard: {
//     borderRadius: '1.5rem',
//     border: '1px solid #eee',
//     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//     overflow: 'hidden',
//     marginTop: '2rem',
//     backgroundColor: 'white'
//   },
//   monthlyTableBox: {
//     backgroundColor: 'rgba(255, 255, 255, 0.15)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '1rem',
//     padding: '1.2rem',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     width: '100%'
//   }
// };

// export default function DailySeeMore() {
//   const [view, setView] = useState('daily');

//   return (
//     <div className="d-flex">
//       {/* Sidebar */}

//       <Sidebar />

//       {/* Main Content */}
//       <div style={styles.mainContent} className='mainContent'>

//         <Header />

//         <div className="container-lg">
//           {/* View Toggle */}
//           <div style={styles.toggleContainer}>
//             <div style={styles.toggleBox}>
//               <button
//                 onClick={() => setView('daily')}
//                 style={{
//                   ...styles.toggleBtn,
//                   backgroundColor: view === 'daily' ? pinkColor : 'transparent',
//                   color: view === 'daily' ? 'white' : pinkColor
//                 }}
//               >
//                 Daily Income
//               </button>
//               <button
//                 onClick={() => setView('monthly')}
//                 style={{
//                   ...styles.toggleBtn,
//                   backgroundColor: view === 'monthly' ? pinkColor : 'transparent',
//                   color: view === 'monthly' ? 'white' : pinkColor
//                 }}
//               >
//                 Monthly Income
//               </button>
//             </div>
//           </div>

//           {view === 'daily' ? (
//             <div className="fade-in">
//               {/* Daily Income Card */}
//               <Card style={styles.incomeCard}>
//                 <div className="position-relative" style={{ zIndex: 1 }}>
//                   <div className="d-flex align-items-baseline gap-2 mb-1">
//                     <span className="display-6 fw-light">฿</span>
//                     <span className="display-3 fw-bold">78.500.00</span>
//                   </div>
//                   <p className="opacity-75 h5 mb-4">Daily Income</p>

//                   <div style={{ height: '260px', width: '100%' }}>
//                     <ResponsiveContainer width="100%" height="100%">
//                       <AreaChart data={dailyData}>
//                         <defs>
//                           <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
//                             <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
//                             <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
//                           </linearGradient>
//                         </defs>
//                         <XAxis
//                           dataKey="day"
//                           axisLine={false}
//                           tickLine={false}
//                           tick={{ fill: '#ffffff', fontSize: 12 }}
//                           dy={10}
//                         />
//                         <Tooltip
//                           contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: 'none', color: pinkColor }}
//                           itemStyle={{ color: pinkColor }}
//                         />
//                         <Area
//                           type="monotone"
//                           dataKey="income"
//                           stroke="#ffffff"
//                           strokeWidth={3}
//                           fillOpacity={1}
//                           fill="url(#colorIncome)"
//                           dot={{ r: 6, fill: '#ffffff', strokeWidth: 2, stroke: pinkColor }}
//                         />
//                       </AreaChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>
//                 {/* Decorative circles */}
//                 <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '250px', height: '250px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(50px)' }}></div>
//               </Card>

//               {/* Data Table */}
//               <Card style={styles.tableCard}>
//                 <Row className="g-0">
//                   <Col md={6} className="border-end">
//                     <Table hover responsive className="m-0">
//                       <thead className="bg-light">
//                         <tr>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Date</th>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Income</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tableData.slice(0, 15).map((row, idx) => (
//                           <tr key={idx}>
//                             <td className="px-4 py-2 text-muted">{row.date}</td>
//                             <td className="px-4 py-2 fw-bold text-dark">{row.income} THB</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </Col>
//                   <Col md={6}>
//                     <Table hover responsive className="m-0">
//                       <thead className="bg-light">
//                         <tr>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Date</th>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Income</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tableData.slice(15).map((row, idx) => (
//                           <tr key={idx}>
//                             <td className="px-4 py-2 text-muted">{row.date}</td>
//                             <td className="px-4 py-2 fw-bold text-dark">{row.income} THB</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </Col>
//                 </Row>
//               </Card>
//             </div>
//           ) : (
//             <div className="fade-in">
//               {[2026, 2025].map((year) => (
//                 <Card key={year} style={styles.incomeCard} className="mb-4">
//                   <Row className="align-items-center">
//                     <Col lg={8}>
//                       <div className="d-flex justify-content-between align-items-start mb-4">
//                         <div>
//                           <div className="d-flex align-items-baseline gap-2 mb-1">
//                             <span className="display-6 fw-light">฿</span>
//                             <span className="display-3 fw-bold">20.700.00</span>
//                           </div>
//                           <p className="opacity-75 h5">Monthly Income</p>
//                         </div>
//                         <span className="display-6 fw-bold opacity-25">{year}</span>
//                       </div>

//                       <div style={{ height: '260px', width: '100%' }}>
//                         <ResponsiveContainer width="100%" height="100%">
//                           <AreaChart data={monthlyData}>
//                             <defs>
//                               <linearGradient id={`colorIncome${year}`} x1="0" y1="0" x2="0" y2="1">
//                                 <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
//                                 <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
//                               </linearGradient>
//                             </defs>
//                             <XAxis
//                               dataKey="month"
//                               axisLine={false}
//                               tickLine={false}
//                               tick={{ fill: '#ffffff', fontSize: 10 }}
//                               dy={10}
//                             />
//                             <Tooltip
//                               contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: 'none', color: pinkColor }}
//                             />
//                             <Area
//                               type="monotone"
//                               dataKey="income"
//                               stroke="#ffffff"
//                               strokeWidth={2}
//                               fillOpacity={1}
//                               fill={`url(#colorIncome${year})`}
//                               dot={{ r: 4, fill: '#ffffff' }}
//                             />
//                           </AreaChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </Col>
//                     <Col lg={4}>
//                       <div style={styles.monthlyTableBox}>
//                         <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                           <span>Month</span>
//                           <span>Income</span>
//                         </div>
//                         <div style={{ maxHeight: '250px', overflowY: 'auto' }} className="custom-scrollbar">
//                           {monthlyData.map((m, idx) => (
//                             <div key={idx} className="d-flex justify-content-between small mb-2">
//                               <span className="opacity-75">{m.month}</span>
//                               <span className="fw-bold">{m.income} THB</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </Col>
//                   </Row>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <style dangerouslySetInnerHTML={{ __html: `
//         .fade-in {
//           animation: fadeIn 0.5s ease-in-out;
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.1);
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(255, 255, 255, 0.3);
//           border-radius: 10px;
//         }
//       `}} />
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import {
//   Home,
//   Wallet,
//   History,
//   ShieldCheck,
//   Flag,
//   Video,
//   HelpCircle,
//   Bell,
//   Loader2
// } from 'lucide-react';
// import {
//   XAxis,
//   Tooltip,
//   ResponsiveContainer,
//   AreaChart,
//   Area
// } from 'recharts';
// import { Container, Row, Col, Nav, Navbar, Button, Table, Card, Badge } from 'react-bootstrap';
// import { useParams, useNavigate } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import "../css/DailySeeMore.css";

// // --- API Configuration ---
// const API_BASE_URL = 'https://sagarxo.app/web-api';
// const getAuthToken = () => localStorage.getItem('token') || '';

// // --- API Service ---
// const fetchCustomerEarnings = async (type) => {
//   const response = await fetch(`${API_BASE_URL}/customer/earnings?type=${type}`, {
//     method: 'GET',
//     headers: {
//       'Authorization': getAuthToken(),
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();

//   if (!data.success) {
//     throw new Error(data.message || 'Failed to fetch earnings');
//   }

//   return data.data.earnings;
// };

// // --- Data Formatting Helpers ---
// const formatChartData = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === 'monthly') {
//     // Backend: { year, month, total_earnings }
//     return earnings.map(item => ({
//       day: item.month.substring(0, 3),
//       month: item.month.substring(0, 3),
//       income: parseFloat(item.total_earnings),
//       year: item.year,
//       fullData: item
//     })).reverse();
//   } else {
//     // Backend daily/weekly: { date, total_earnings }
//     // Extract day name from date or use date
//     const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     return earnings.map((item, index) => {
//       const dateParts = item.date.split('/');
//       const dateObj = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
//       const dayName = days[dateObj.getDay()] || days[index % 7];

//       return {
//         day: dayName,
//         month: item.date,
//         income: parseFloat(item.total_earnings),
//         date: item.date,
//         fullData: item
//       };
//     }).reverse();
//   }
// };

// const formatTableData = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === 'monthly') {
//     return earnings.map(item => ({
//       date: `${item.month} ${item.year}`,
//       income: parseFloat(item.total_earnings),
//       displayIncome: `${parseFloat(item.total_earnings).toFixed(2)} THB`
//     }));
//   } else {
//     return earnings.map(item => ({
//       date: item.date,
//       income: parseFloat(item.total_earnings),
//       displayIncome: `${parseFloat(item.total_earnings).toFixed(2)} THB`
//     }));
//   }
// };

// // --- Custom Styles ---
// const pinkColor = '#f06281';

// const styles = {
//   sidebar: {
//     backgroundColor: pinkColor,
//     minHeight: '100vh',
//     width: '260px',
//     position: 'fixed',
//     left: 0,
//     top: 0,
//     zIndex: 1000,
//     padding: '2rem 0',
//     boxShadow: '4px 0 10px rgba(0,0,0,0.1)'
//   },
//   sidebarItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '1rem',
//     padding: '0.8rem 1.5rem',
//     color: 'white',
//     textDecoration: 'none',
//     fontSize: '0.9rem',
//     fontWeight: 600,
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//     border: 'none',
//     background: 'none',
//     width: '100%',
//     textAlign: 'left'
//   },
//   sidebarItemActive: {
//     backgroundColor: 'white',
//     color: pinkColor,
//     borderRadius: '50px 0 0 50px',
//     marginLeft: '1.5rem',
//     boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//   },
//   header: {
//     backgroundColor: 'white',
//     height: '64px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 2rem',
//     borderBottom: '1px solid #eee',
//     position: 'sticky',
//     top: 0,
//     zIndex: 900
//   },
//   toggleContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     margin: '2.5rem 0'
//   },
//   toggleBox: {
//     backgroundColor: 'white',
//     border: `1px solid ${pinkColor}4D`,
//     borderRadius: '50px',
//     padding: '0.4rem',
//     display: 'inline-flex',
//     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
//   },
//   toggleBtn: {
//     padding: '0.6rem 2.5rem',
//     borderRadius: '50px',
//     fontSize: '0.875rem',
//     fontWeight: 700,
//     border: 'none',
//     transition: 'all 0.3s ease'
//   },
//   incomeCard: {
//     backgroundColor: pinkColor,
//     borderRadius: '1.5rem',
//     padding: '2rem',
//     color: 'white',
//     border: 'none',
//     boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
//     position: 'relative',
//     overflow: 'hidden'
//   },
//   tableCard: {
//     borderRadius: '1.5rem',
//     border: '1px solid #eee',
//     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//     overflow: 'hidden',
//     marginTop: '2rem',
//     backgroundColor: 'white'
//   },
//   monthlyTableBox: {
//     backgroundColor: 'rgba(255, 255, 255, 0.15)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '1rem',
//     padding: '1.2rem',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     width: '100%'
//   },
//   mainContent: {
//     marginLeft: '260px',
//     width: 'calc(100% - 260px)',
//     minHeight: '100vh',
//     backgroundColor: '#f8f9fa'
//   },
//   loadingContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '300px',
//     color: pinkColor
//   },
//   errorContainer: {
//     padding: '2rem',
//     textAlign: 'center',
//     color: '#dc3545'
//   }
// };

// export default function DailySeeMore() {
//   const { type: urlType } = useParams();
//   const navigate = useNavigate();

//   // Support daily, weekly, monthly
//   const [view, setView] = useState(urlType || 'daily');
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Update view when URL param changes
//   useEffect(() => {
//     if (urlType && ['daily', 'weekly', 'monthly'].includes(urlType)) {
//       setView(urlType);
//     }
//   }, [urlType]);

//   // Fetch data when view changes
//   useEffect(() => {
//     const loadEarnings = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const data = await fetchCustomerEarnings(view);
//         setEarnings(data);
//       } catch (err) {
//         setError(err.message);
//         setEarnings([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadEarnings();
//   }, [view]);

//   // Format data for display
//   const chartData = formatChartData(earnings, view);
//   const tableData = formatTableData(earnings, view);

//   // Calculate total income
//   const totalIncome = earnings.reduce((sum, item) => {
//     return sum + parseFloat(item.total_earnings);
//   }, 0);

//   // Group monthly data by year
//   const groupByYear = (data) => {
//     const grouped = {};
//     data.forEach(item => {
//       const year = item.year || new Date().getFullYear();
//       if (!grouped[year]) grouped[year] = [];
//       grouped[year].push(item);
//     });
//     return grouped;
//   };

//   const monthlyByYear = view === 'monthly' ? groupByYear(earnings) : {};

//   // Handle view change
//   const handleViewChange = (newView) => {
//     setView(newView);
//     navigate(`/dailyseemore/${newView}`, { replace: true });
//   };

//   // Render loading state
//   if (loading) {
//     return (
//       <div className="d-flex">
//         <Sidebar />
//         <div style={styles.mainContent} className='mainContent'>
//           <Header />
//           <div style={styles.loadingContainer}>
//             <div className="text-center">
//               <Loader2 size={48} className="spin mb-3" />
//               <p>Loading {view} earnings...</p>
//             </div>
//           </div>
//         </div>
//         <style dangerouslySetInnerHTML={{ __html: `
//           .spin {
//             animation: spin 1s linear infinite;
//           }
//           @keyframes spin {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//           }
//         `}} />
//       </div>
//     );
//   }

//   // Render error state
//   if (error) {
//     return (
//       <div className="d-flex">
//         <Sidebar />
//         <div style={styles.mainContent} className='mainContent'>
//           <Header />
//           <div style={styles.errorContainer}>
//             <h4>Error Loading Data</h4>
//             <p>{error}</p>
//             <Button
//               variant="outline-danger"
//               onClick={() => window.location.reload()}
//               className="mt-3"
//             >
//               Retry
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div style={styles.mainContent} className='mainContent'>

//         <Header />

//         <div className="container-lg">
//           {/* View Toggle */}
//           <div style={styles.toggleContainer}>
//             <div style={styles.toggleBox}>
//               <button
//                 onClick={() => handleViewChange('daily')}
//                 style={{
//                   ...styles.toggleBtn,
//                   backgroundColor: view === 'daily' ? pinkColor : 'transparent',
//                   color: view === 'daily' ? 'white' : pinkColor
//                 }}
//               >
//                 Daily Income
//               </button>
//               <button
//                 onClick={() => handleViewChange('weekly')}
//                 style={{
//                   ...styles.toggleBtn,
//                   backgroundColor: view === 'weekly' ? pinkColor : 'transparent',
//                   color: view === 'weekly' ? 'white' : pinkColor
//                 }}
//               >
//                 Weekly Income
//               </button>
//               <button
//                 onClick={() => handleViewChange('monthly')}
//                 style={{
//                   ...styles.toggleBtn,
//                   backgroundColor: view === 'monthly' ? pinkColor : 'transparent',
//                   color: view === 'monthly' ? 'white' : pinkColor
//                 }}
//               >
//                 Monthly Income
//               </button>
//             </div>
//           </div>

//           {view === 'daily' || view === 'weekly' ? (
//             <div className="fade-in">
//               {/* Daily/Weekly Income Card */}
//               <Card style={styles.incomeCard}>
//                 <div className="position-relative" style={{ zIndex: 1 }}>
//                   <div className="d-flex align-items-baseline gap-2 mb-1">
//                     <span className="display-6 fw-light">฿</span>
//                     <span className="display-3 fw-bold">
//                       {totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//                     </span>
//                   </div>
//                   <p className="opacity-75 h5 mb-4">
//                     {view === 'daily' ? 'Daily' : 'Weekly'} Income
//                   </p>

//                   <div style={{ height: '260px', width: '100%' }}>
//                     <ResponsiveContainer width="100%" height="100%">
//                       <AreaChart data={chartData}>
//                         <defs>
//                           <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
//                             <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
//                             <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
//                           </linearGradient>
//                         </defs>
//                         <XAxis
//                           dataKey="day"
//                           axisLine={false}
//                           tickLine={false}
//                           tick={{ fill: '#ffffff', fontSize: 12 }}
//                           dy={10}
//                         />
//                         <Tooltip
//                           contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: 'none', color: pinkColor }}
//                           itemStyle={{ color: pinkColor }}
//                           formatter={(value) => [`฿ ${value.toLocaleString()}`, 'Income']}
//                         />
//                         <Area
//                           type="monotone"
//                           dataKey="income"
//                           stroke="#ffffff"
//                           strokeWidth={3}
//                           fillOpacity={1}
//                           fill="url(#colorIncome)"
//                           dot={{ r: 6, fill: '#ffffff', strokeWidth: 2, stroke: pinkColor }}
//                         />
//                       </AreaChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>
//                 {/* Decorative circles */}
//                 <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '250px', height: '250px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(50px)' }}></div>
//               </Card>

//               {/* Data Table */}
//               <Card style={styles.tableCard}>
//                 <Row className="g-0">
//                   <Col md={6} className="border-end">
//                     <Table hover responsive className="m-0">
//                       <thead className="bg-light">
//                         <tr>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Date</th>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Income</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tableData.slice(0, Math.ceil(tableData.length / 2)).map((row, idx) => (
//                           <tr key={idx}>
//                             <td className="px-4 py-2 text-muted">{row.date}</td>
//                             <td className="px-4 py-2 fw-bold text-dark">{row.displayIncome}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </Col>
//                   <Col md={6}>
//                     <Table hover responsive className="m-0">
//                       <thead className="bg-light">
//                         <tr>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Date</th>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Income</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tableData.slice(Math.ceil(tableData.length / 2)).map((row, idx) => (
//                           <tr key={idx}>
//                             <td className="px-4 py-2 text-muted">{row.date}</td>
//                             <td className="px-4 py-2 fw-bold text-dark">{row.displayIncome}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </Col>
//                 </Row>
//               </Card>
//             </div>
//           ) : (
//             <div className="fade-in">
//               {/* Monthly View - Grouped by Year */}
//               {Object.keys(monthlyByYear).sort((a, b) => b - a).map((year) => (
//                 <Card key={year} style={styles.incomeCard} className="mb-4">
//                   <Row className="align-items-center">
//                     <Col lg={8}>
//                       <div className="d-flex justify-content-between align-items-start mb-4">
//                         <div>
//                           <div className="d-flex align-items-baseline gap-2 mb-1">
//                             <span className="display-6 fw-light">฿</span>
//                             <span className="display-3 fw-bold">
//                               {monthlyByYear[year].reduce((sum, item) => sum + parseFloat(item.total_earnings), 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//                             </span>
//                           </div>
//                           <p className="opacity-75 h5">Monthly Income</p>
//                         </div>
//                         <span className="display-6 fw-bold opacity-25">{year}</span>
//                       </div>

//                       <div style={{ height: '260px', width: '100%' }}>
//                         <ResponsiveContainer width="100%" height="100%">
//                           <AreaChart data={formatChartData(monthlyByYear[year], 'monthly')}>
//                             <defs>
//                               <linearGradient id={`colorIncome${year}`} x1="0" y1="0" x2="0" y2="1">
//                                 <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
//                                 <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
//                               </linearGradient>
//                             </defs>
//                             <XAxis
//                               dataKey="month"
//                               axisLine={false}
//                               tickLine={false}
//                               tick={{ fill: '#ffffff', fontSize: 10 }}
//                               dy={10}
//                             />
//                             <Tooltip
//                               contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: 'none', color: pinkColor }}
//                               formatter={(value) => [`฿ ${value.toLocaleString()}`, 'Income']}
//                             />
//                             <Area
//                               type="monotone"
//                               dataKey="income"
//                               stroke="#ffffff"
//                               strokeWidth={2}
//                               fillOpacity={1}
//                               fill={`url(#colorIncome${year})`}
//                               dot={{ r: 4, fill: '#ffffff' }}
//                             />
//                           </AreaChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </Col>
//                     <Col lg={4}>
//                       <div style={styles.monthlyTableBox}>
//                         <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                           <span>Month</span>
//                           <span>Income</span>
//                         </div>
//                         <div style={{ maxHeight: '250px', overflowY: 'auto' }} className="custom-scrollbar">
//                           {formatTableData(monthlyByYear[year], 'monthly').map((m, idx) => (
//                             <div key={idx} className="d-flex justify-content-between small mb-2">
//                               <span className="opacity-75">{m.date}</span>
//                               <span className="fw-bold">{m.displayIncome}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </Col>
//                   </Row>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <style dangerouslySetInnerHTML={{ __html: `
//         .fade-in {
//           animation: fadeIn 0.5s ease-in-out;
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.1);
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(255, 255, 255, 0.3);
//           border-radius: 10px;
//         }
//         .spin {
//           animation: spin 1s linear infinite;
//         }
//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//       `}} />
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import {
//   Loader2
// } from 'lucide-react';
// import {
//   XAxis,
//   Tooltip,
//   ResponsiveContainer,
//   AreaChart,
//   Area
// } from 'recharts';
// import { Container, Row, Col, Nav, Navbar, Button, Table, Card, Badge } from 'react-bootstrap';
// import { useParams, useNavigate } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import "../css/DailySeeMore.css";

// // --- API Configuration ---
// const API_BASE_URL = 'https://sagarxo.app/web-api';
// const getAuthToken = () => localStorage.getItem('token') || '';

// // --- Map UI view to API type (adjust if needed) ---
// const API_TYPE_MAP = {
//   daily: 'daily',
//   weekly: 'weekly',
//   monthly: 'monthly'   // ✅ matches backend
// };

// // --- API Service ---
// const fetchCustomerEarnings = async (type) => {
//   const apiType = API_TYPE_MAP[type] || type;
//   const response = await fetch(`${API_BASE_URL}/customer/earnings?type=${apiType}`, {
//     method: 'GET',
//     headers: {
//       'Authorization': getAuthToken(),
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();

//   if (!data.success) {
//     throw new Error(data.message || 'Failed to fetch earnings');
//   }

//   return data.data.earnings || [];
// };

// // --- Data Formatting Helpers ---
// const formatChartData = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === 'monthly') {
//     return earnings.map(item => ({
//       day: item.month ? item.month.substring(0, 3) : '???',
//       month: item.month ? item.month.substring(0, 3) : '???',
//       income: parseFloat(item.total_earnings),
//       year: item.year,
//       fullData: item
//     })).reverse();
//   } else {
//     // daily / weekly
//     const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     return earnings.map((item, index) => {
//       const dateParts = item.date.split('/');
//       const dateObj = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
//       const dayName = days[dateObj.getDay()] || days[index % 7];

//       return {
//         day: dayName,
//         month: item.date,
//         income: parseFloat(item.total_earnings),
//         date: item.date,
//         fullData: item
//       };
//     }).reverse();
//   }
// };

// const formatTableData = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === 'monthly') {
//     return earnings.map(item => ({
//       date: item.month && item.year ? `${item.month} ${item.year}` : 'Unknown',
//       income: parseFloat(item.total_earnings),
//       displayIncome: `${parseFloat(item.total_earnings).toFixed(2)} THB`
//     }));
//   } else {
//     return earnings.map(item => ({
//       date: item.date || 'Unknown',
//       income: parseFloat(item.total_earnings),
//       displayIncome: `${parseFloat(item.total_earnings).toFixed(2)} THB`
//     }));
//   }
// };

// // --- Custom Styles ---
// const pinkColor = '#f06281';

// const styles = {
//   sidebar: {
//     backgroundColor: pinkColor,
//     minHeight: '100vh',
//     width: '260px',
//     position: 'fixed',
//     left: 0,
//     top: 0,
//     zIndex: 1000,
//     padding: '2rem 0',
//     boxShadow: '4px 0 10px rgba(0,0,0,0.1)'
//   },
//   sidebarItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '1rem',
//     padding: '0.8rem 1.5rem',
//     color: 'white',
//     textDecoration: 'none',
//     fontSize: '0.9rem',
//     fontWeight: 600,
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//     border: 'none',
//     background: 'none',
//     width: '100%',
//     textAlign: 'left'
//   },
//   sidebarItemActive: {
//     backgroundColor: 'white',
//     color: pinkColor,
//     borderRadius: '50px 0 0 50px',
//     marginLeft: '1.5rem',
//     boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//   },
//   header: {
//     backgroundColor: 'white',
//     height: '64px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 2rem',
//     borderBottom: '1px solid #eee',
//     position: 'sticky',
//     top: 0,
//     zIndex: 900
//   },
//   toggleContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     margin: '2.5rem 0'
//   },
//   toggleBox: {
//     backgroundColor: 'white',
//     border: `1px solid ${pinkColor}4D`,
//     borderRadius: '50px',
//     padding: '0.4rem',
//     display: 'inline-flex',
//     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
//   },
//   toggleBtn: {
//     padding: '0.6rem 2.5rem',
//     borderRadius: '50px',
//     fontSize: '0.875rem',
//     fontWeight: 700,
//     border: 'none',
//     transition: 'all 0.3s ease'
//   },
//   incomeCard: {
//     backgroundColor: pinkColor,
//     borderRadius: '1.5rem',
//     padding: '2rem',
//     color: 'white',
//     border: 'none',
//     boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
//     position: 'relative',
//     overflow: 'hidden'
//   },
//   tableCard: {
//     borderRadius: '1.5rem',
//     border: '1px solid #eee',
//     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//     overflow: 'hidden',
//     marginTop: '2rem',
//     backgroundColor: 'white'
//   },
//   monthlyTableBox: {
//     backgroundColor: 'rgba(255, 255, 255, 0.15)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '1rem',
//     padding: '1.2rem',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     width: '100%'
//   },
//   mainContent: {
//     marginLeft: '260px',
//     width: 'calc(100% - 260px)',
//     minHeight: '100vh',
//     backgroundColor: '#f8f9fa'
//   },
//   loadingContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '300px',
//     color: pinkColor
//   },
//   errorContainer: {
//     padding: '2rem',
//     textAlign: 'center',
//     color: '#dc3545'
//   }
// };

// export default function DailySeeMore() {
//   const { type: urlType } = useParams();
//   const navigate = useNavigate();

//   const [view, setView] = useState(urlType || 'daily');
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Update view when URL param changes
//   useEffect(() => {
//     if (urlType && ['daily', 'weekly', 'monthly'].includes(urlType)) {
//       setView(urlType);
//     }
//   }, [urlType]);

//   // Fetch data when view changes
//   useEffect(() => {
//     const loadEarnings = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const data = await fetchCustomerEarnings(view);
//         setEarnings(data);
//         console.log(`Fetched ${view} earnings:`, data); // debug
//       } catch (err) {
//         setError(err.message);
//         setEarnings([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadEarnings();
//   }, [view]);

//   // Format data for display
//   const chartData = formatChartData(earnings, view);
//   const tableData = formatTableData(earnings, view);

//   // Calculate total income
//   const totalIncome = earnings.reduce((sum, item) => {
//     return sum + parseFloat(item.total_earnings);
//   }, 0);

//   // Group monthly data by year
//   const groupByYear = (data) => {
//     const grouped = {};
//     data.forEach(item => {
//       const year = item.year || new Date().getFullYear();
//       if (!grouped[year]) grouped[year] = [];
//       grouped[year].push(item);
//     });
//     return grouped;
//   };

//   const monthlyByYear = view === 'monthly' ? groupByYear(earnings) : {};
//   const hasMonthlyData = Object.keys(monthlyByYear).length > 0;

//   // Handle view change
//   const handleViewChange = (newView) => {
//     setView(newView);
//     navigate(`/dailyseemore/${newView}`, { replace: true });
//   };

//   // Render loading state
//   if (loading) {
//     return (
//       <div className="d-flex">
//         <Sidebar />
//         <div style={styles.mainContent} className='mainContent'>
//           <Header />
//           <div style={styles.loadingContainer}>
//             <div className="text-center">
//               <Loader2 size={48} className="spin mb-3" />
//               <p>Loading {view} earnings...</p>
//             </div>
//           </div>
//         </div>
//         <style dangerouslySetInnerHTML={{ __html: `
//           .spin { animation: spin 1s linear infinite; }
//           @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         `}} />
//       </div>
//     );
//   }

//   // Render error state
//   if (error) {
//     return (
//       <div className="d-flex">
//         <Sidebar />
//         <div style={styles.mainContent} className='mainContent'>
//           <Header />
//           <div style={styles.errorContainer}>
//             <h4>Error Loading Data</h4>
//             <p>{error}</p>
//             <Button
//               variant="outline-danger"
//               onClick={() => window.location.reload()}
//               className="mt-3"
//             >
//               Retry
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Check if there is any data at all
//   if (earnings.length === 0) {
//     return (
//       <div className="d-flex">
//         <Sidebar />
//         <div style={styles.mainContent} className='mainContent'>
//           <Header />
//           <div className="container-lg">
//             <div style={styles.toggleContainer}>
//               <div style={styles.toggleBox}>
//                 <button
//                   onClick={() => handleViewChange('daily')}
//                   style={{ ...styles.toggleBtn, backgroundColor: view === 'daily' ? pinkColor : 'transparent', color: view === 'daily' ? 'white' : pinkColor }}
//                 >Daily Income</button>
//                 <button
//                   onClick={() => handleViewChange('weekly')}
//                   style={{ ...styles.toggleBtn, backgroundColor: view === 'weekly' ? pinkColor : 'transparent', color: view === 'weekly' ? 'white' : pinkColor }}
//                 >Weekly Income</button>
//                 <button
//                   onClick={() => handleViewChange('monthly')}
//                   style={{ ...styles.toggleBtn, backgroundColor: view === 'monthly' ? pinkColor : 'transparent', color: view === 'monthly' ? 'white' : pinkColor }}
//                 >Monthly Income</button>
//               </div>
//             </div>
//             <div className="text-center py-5">
//               <p className="text-muted">No {view} income data available.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex">
//       <Sidebar />
//       <div style={styles.mainContent} className='mainContent'>
//         <Header />
//         <div className="container-lg">
//           {/* View Toggle */}
//           <div style={styles.toggleContainer}>
//             <div style={styles.toggleBox}>
//               <button
//                 onClick={() => handleViewChange('daily')}
//                 style={{
//                   ...styles.toggleBtn,
//                   backgroundColor: view === 'daily' ? pinkColor : 'transparent',
//                   color: view === 'daily' ? 'white' : pinkColor
//                 }}
//               >
//                 Daily Income
//               </button>
//               <button
//                 onClick={() => handleViewChange('weekly')}
//                 style={{
//                   ...styles.toggleBtn,
//                   backgroundColor: view === 'weekly' ? pinkColor : 'transparent',
//                   color: view === 'weekly' ? 'white' : pinkColor
//                 }}
//               >
//                 Weekly Income
//               </button>
//               <button
//                 onClick={() => handleViewChange('monthly')}
//                 style={{
//                   ...styles.toggleBtn,
//                   backgroundColor: view === 'monthly' ? pinkColor : 'transparent',
//                   color: view === 'monthly' ? 'white' : pinkColor
//                 }}
//               >
//                 Monthly Income
//               </button>
//             </div>
//           </div>

//           {view === 'daily' || view === 'weekly' ? (
//             <div className="fade-in">
//               {/* Daily/Weekly Income Card */}
//               <Card style={styles.incomeCard}>
//                 <div className="position-relative" style={{ zIndex: 1 }}>
//                   <div className="d-flex align-items-baseline gap-2 mb-1">
//                     <span className="display-6 fw-light">฿</span>
//                     <span className="display-3 fw-bold">
//                       {totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//                     </span>
//                   </div>
//                   <p className="opacity-75 h5 mb-4">
//                     {view === 'daily' ? 'Daily' : 'Weekly'} Income
//                   </p>

//                   <div style={{ height: '260px', width: '100%' }}>
//                     <ResponsiveContainer width="100%" height="100%">
//                       <AreaChart data={chartData}>
//                         <defs>
//                           <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
//                             <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
//                             <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
//                           </linearGradient>
//                         </defs>
//                         <XAxis
//                           dataKey="day"
//                           axisLine={false}
//                           tickLine={false}
//                           tick={{ fill: '#ffffff', fontSize: 12 }}
//                           dy={10}
//                         />
//                         <Tooltip
//                           contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: 'none', color: pinkColor }}
//                           itemStyle={{ color: pinkColor }}
//                           formatter={(value) => [`฿ ${value.toLocaleString()}`, 'Income']}
//                         />
//                         <Area
//                           type="monotone"
//                           dataKey="income"
//                           stroke="#ffffff"
//                           strokeWidth={3}
//                           fillOpacity={1}
//                           fill="url(#colorIncome)"
//                           dot={{ r: 6, fill: '#ffffff', strokeWidth: 2, stroke: pinkColor }}
//                         />
//                       </AreaChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>
//                 <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '250px', height: '250px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(50px)' }}></div>
//               </Card>

//               {/* Data Table */}
//               <Card style={styles.tableCard}>
//                 <Row className="g-0">
//                   <Col md={6} className="border-end">
//                     <Table hover responsive className="m-0">
//                       <thead className="bg-light">
//                         <tr>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Date</th>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Income</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tableData.slice(0, Math.ceil(tableData.length / 2)).map((row, idx) => (
//                           <tr key={idx}>
//                             <td className="px-4 py-2 text-muted">{row.date}</td>
//                             <td className="px-4 py-2 fw-bold text-dark">{row.displayIncome}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </Col>
//                   <Col md={6}>
//                     <Table hover responsive className="m-0">
//                       <thead className="bg-light">
//                         <tr>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Date</th>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Income</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tableData.slice(Math.ceil(tableData.length / 2)).map((row, idx) => (
//                           <tr key={idx}>
//                             <td className="px-4 py-2 text-muted">{row.date}</td>
//                             <td className="px-4 py-2 fw-bold text-dark">{row.displayIncome}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </Col>
//                 </Row>
//               </Card>
//             </div>
//           ) : (
//             <div className="fade-in">
//               {!hasMonthlyData ? (
//                 <div className="text-center py-5">
//                   <p className="text-muted">No monthly income data available.</p>
//                 </div>
//               ) : (
//                 Object.keys(monthlyByYear).sort((a, b) => b - a).map((year) => (
//                   <Card key={year} style={styles.incomeCard} className="mb-4">
//                     <Row className="align-items-center">
//                       <Col lg={8}>
//                         <div className="d-flex justify-content-between align-items-start mb-4">
//                           <div>
//                             <div className="d-flex align-items-baseline gap-2 mb-1">
//                               <span className="display-6 fw-light">฿</span>
//                               <span className="display-3 fw-bold">
//                                 {monthlyByYear[year].reduce((sum, item) => sum + parseFloat(item.total_earnings), 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//                               </span>
//                             </div>
//                             <p className="opacity-75 h5">Monthly Income</p>
//                           </div>
//                           <span className="display-6 fw-bold opacity-25">{year}</span>
//                         </div>

//                         <div style={{ height: '260px', width: '100%' }}>
//                           <ResponsiveContainer width="100%" height="100%">
//                             <AreaChart data={formatChartData(monthlyByYear[year], 'monthly')}>
//                               <defs>
//                                 <linearGradient id={`colorIncome${year}`} x1="0" y1="0" x2="0" y2="1">
//                                   <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
//                                   <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
//                                 </linearGradient>
//                               </defs>
//                               <XAxis
//                                 dataKey="month"
//                                 axisLine={false}
//                                 tickLine={false}
//                                 tick={{ fill: '#ffffff', fontSize: 10 }}
//                                 dy={10}
//                               />
//                               <Tooltip
//                                 contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: 'none', color: pinkColor }}
//                                 formatter={(value) => [`฿ ${value.toLocaleString()}`, 'Income']}
//                               />
//                               <Area
//                                 type="monotone"
//                                 dataKey="income"
//                                 stroke="#ffffff"
//                                 strokeWidth={2}
//                                 fillOpacity={1}
//                                 fill={`url(#colorIncome${year})`}
//                                 dot={{ r: 4, fill: '#ffffff' }}
//                               />
//                             </AreaChart>
//                           </ResponsiveContainer>
//                         </div>
//                       </Col>
//                       <Col lg={4}>
//                         <div style={styles.monthlyTableBox}>
//                           <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                             <span>Month</span>
//                             <span>Income</span>
//                           </div>
//                           <div style={{ maxHeight: '250px', overflowY: 'auto' }} className="custom-scrollbar">
//                             {formatTableData(monthlyByYear[year], 'monthly').map((m, idx) => (
//                               <div key={idx} className="d-flex justify-content-between small mb-2">
//                                 <span className="opacity-75">{m.date}</span>
//                                 <span className="fw-bold">{m.displayIncome}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </Col>
//                     </Row>
//                   </Card>
//                 ))
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <style dangerouslySetInnerHTML={{ __html: `
//         .fade-in { animation: fadeIn 0.5s ease-in-out; }
//         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
//         .custom-scrollbar::-webkit-scrollbar { width: 4px; }
//         .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 10px; }
//       `}} />
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import {
//   Loader2
// } from 'lucide-react';
// import {
//   XAxis,
//   Tooltip,
//   ResponsiveContainer,
//   AreaChart,
//   Area
// } from 'recharts';
// import { Container, Row, Col, Button, Table, Card, Badge } from 'react-bootstrap';
// import { useParams, useNavigate } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import "../css/DailySeeMore.css";

// // --- API Configuration ---
// const API_BASE_URL = 'https://sagarxo.app/web-api';
// const getAuthToken = () => localStorage.getItem('token') || '';

// // --- Map UI view to API type ---
// const API_TYPE_MAP = {
//   daily: 'daily',
//   monthly: 'monthly'
// };

// // --- API Service ---
// const fetchCustomerEarnings = async (type) => {
//   const apiType = API_TYPE_MAP[type] || type;
//   const response = await fetch(`${API_BASE_URL}/customer/earnings?type=${apiType}`, {
//     method: 'GET',
//     headers: {
//       'Authorization': getAuthToken(),
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();

//   if (!data.success) {
//     throw new Error(data.message || 'Failed to fetch earnings');
//   }

//   return data.data.earnings || [];
// };

// // --- Data Formatting Helpers ---
// const formatChartData = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === 'monthly') {
//     return earnings.map(item => ({
//       day: item.month ? item.month.substring(0, 3) : '???',
//       month: item.month ? item.month.substring(0, 3) : '???',
//       income: parseFloat(item.total_earnings),
//       year: item.year,
//       fullData: item
//     })).reverse();
//   } else {
//     // Daily only
//     const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     return earnings.map((item, index) => {
//       // Handle different date formats safely
//       let dateObj;
//       if (item.date && item.date.includes('/')) {
//         const dateParts = item.date.split('/');
//         dateObj = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
//       } else if (item.date) {
//         dateObj = new Date(item.date);
//       } else {
//         dateObj = new Date();
//       }

//       const dayName = days[dateObj.getDay()] || days[index % 7];

//       return {
//         day: dayName,
//         month: item.date,
//         income: parseFloat(item.total_earnings),
//         date: item.date,
//         fullData: item
//       };
//     }).reverse();
//   }
// };

// const formatTableData = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === 'monthly') {
//     return earnings.map(item => ({
//       date: item.month && item.year ? `${item.month} ${item.year}` : 'Unknown',
//       income: parseFloat(item.total_earnings),
//       displayIncome: `${parseFloat(item.total_earnings).toFixed(2)} THB`
//     }));
//   } else {
//     // Daily
//     return earnings.map(item => ({
//       date: item.date || 'Unknown',
//       income: parseFloat(item.total_earnings),
//       displayIncome: `${parseFloat(item.total_earnings).toFixed(2)} THB`
//     }));
//   }
// };

// // --- Custom Styles ---
// const pinkColor = '#f06281';

// const styles = {
//   sidebar: {
//     backgroundColor: pinkColor,
//     minHeight: '100vh',
//     width: '260px',
//     position: 'fixed',
//     left: 0,
//     top: 0,
//     zIndex: 1000,
//     padding: '2rem 0',
//     boxShadow: '4px 0 10px rgba(0,0,0,0.1)'
//   },
//   sidebarItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '1rem',
//     padding: '0.8rem 1.5rem',
//     color: 'white',
//     textDecoration: 'none',
//     fontSize: '0.9rem',
//     fontWeight: 600,
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//     border: 'none',
//     background: 'none',
//     width: '100%',
//     textAlign: 'left'
//   },
//   sidebarItemActive: {
//     backgroundColor: 'white',
//     color: pinkColor,
//     borderRadius: '50px 0 0 50px',
//     marginLeft: '1.5rem',
//     boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//   },
//   header: {
//     backgroundColor: 'white',
//     height: '64px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 2rem',
//     borderBottom: '1px solid #eee',
//     position: 'sticky',
//     top: 0,
//     zIndex: 900
//   },
//   toggleContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     margin: '2.5rem 0'
//   },
//   toggleBox: {
//     backgroundColor: 'white',
//     border: `1px solid ${pinkColor}4D`,
//     borderRadius: '50px',
//     padding: '0.4rem',
//     display: 'inline-flex',
//     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
//   },
//   toggleBtn: {
//     padding: '0.6rem 2.5rem',
//     borderRadius: '50px',
//     fontSize: '0.875rem',
//     fontWeight: 700,
//     border: 'none',
//     transition: 'all 0.3s ease',
//     cursor: 'pointer'
//   },
//   incomeCard: {
//     backgroundColor: pinkColor,
//     borderRadius: '1.5rem',
//     padding: '2rem',
//     color: 'white',
//     border: 'none',
//     boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
//     position: 'relative',
//     overflow: 'hidden'
//   },
//   tableCard: {
//     borderRadius: '1.5rem',
//     border: '1px solid #eee',
//     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//     overflow: 'hidden',
//     marginTop: '2rem',
//     backgroundColor: 'white'
//   },
//   monthlyTableBox: {
//     backgroundColor: 'rgba(255, 255, 255, 0.15)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '1rem',
//     padding: '1.2rem',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     width: '100%'
//   },
//   mainContent: {
//     marginLeft: '260px',
//     width: 'calc(100% - 260px)',
//     minHeight: '100vh',
//     backgroundColor: '#f8f9fa'
//   },
//   loadingContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '300px',
//     color: pinkColor
//   },
//   errorContainer: {
//     padding: '2rem',
//     textAlign: 'center',
//     color: '#dc3545'
//   }
// };

// export default function DailySeeMore() {
//   const { type: urlType } = useParams();
//   const navigate = useNavigate();

//   // Initialize with safe default
//   const [view, setView] = useState('daily');
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Update view when URL param changes - with validation
//   useEffect(() => {
//     const validType = urlType === 'monthly' ? 'monthly' : 'daily';
//     if (validType !== view) {
//       setView(validType);
//     }
//   }, [urlType]);

//   // Fetch data when view changes - with proper cleanup
//   useEffect(() => {
//     let isMounted = true;

//     const loadEarnings = async () => {
//       // Reset state before fetching new data
//       if (isMounted) {
//         setLoading(true);
//         setError(null);
//         setEarnings([]); // Clear previous data immediately
//       }

//       try {
//         const data = await fetchCustomerEarnings(view);

//         // Only update if component is still mounted and view hasn't changed
//         if (isMounted) {
//           setEarnings(data);
//           console.log(`✅ Fetched ${view} earnings:`, data.length, 'items');
//         }
//       } catch (err) {
//         if (isMounted) {
//           console.error(`❌ Error fetching ${view} earnings:`, err);
//           setError(err.message);
//           setEarnings([]);
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//           setIsTransitioning(false);
//         }
//       }
//     };

//     loadEarnings();

//     // Cleanup function to prevent state updates on unmounted component
//     return () => {
//       isMounted = false;
//     };
//   }, [view]);

//   // Format data for display
//   const chartData = formatChartData(earnings, view);
//   const tableData = formatTableData(earnings, view);

//   // Calculate total income safely
//   const totalIncome = earnings.reduce((sum, item) => {
//     return sum + parseFloat(item.total_earnings || 0);
//   }, 0);

//   // Group monthly data by year
//   const groupByYear = (data) => {
//     const grouped = {};
//     data.forEach(item => {
//       const year = item.year || new Date().getFullYear();
//       if (!grouped[year]) grouped[year] = [];
//       grouped[year].push(item);
//     });
//     return grouped;
//   };

//   const monthlyByYear = view === 'monthly' ? groupByYear(earnings) : {};
//   const hasMonthlyData = Object.keys(monthlyByYear).length > 0;

//   // Handle view change with transition state
//   const handleViewChange = (newView) => {
//     if (newView === view) return; // Don't reload if same view

//     console.log(`🔄 Switching from ${view} to ${newView}`);
//     setIsTransitioning(true);
//     setView(newView);
//     navigate(`/dailyseemore/${newView}`, { replace: true });
//   };

//   // Render loading state
//   if (loading && !isTransitioning) {
//     return (
//       <div className="d-flex">
//         <Sidebar />
//         <div style={styles.mainContent} className='mainContent'>
//           <Header />
//           <div style={styles.loadingContainer}>
//             <div className="text-center">
//               <Loader2 size={48} className="spin mb-3" />
//               <p>Loading {view} earnings...</p>
//             </div>
//           </div>
//         </div>
//         <style dangerouslySetInnerHTML={{ __html: `
//           .spin { animation: spin 1s linear infinite; }
//           @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         `}} />
//       </div>
//     );
//   }

//   // Render error state
//   if (error) {
//     return (
//       <div className="d-flex">
//         <Sidebar />
//         <div style={styles.mainContent} className='mainContent'>
//           <Header />
//           <div style={styles.errorContainer}>
//             <h4>Error Loading Data</h4>
//             <p>{error}</p>
//             <Button
//               variant="outline-danger"
//               onClick={() => window.location.reload()}
//               className="mt-3"
//             >
//               Retry
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex">
//       <Sidebar />
//       <div style={styles.mainContent} className='mainContent'>
//         <Header />
//         <div className="container-lg">
//           {/* View Toggle - Only Daily & Monthly */}
//           <div style={styles.toggleContainer}>
//             <div style={styles.toggleBox}>
//               <button
//                 onClick={() => handleViewChange('daily')}
//                 disabled={isTransitioning}
//                 style={{
//                   ...styles.toggleBtn,
//                   backgroundColor: view === 'daily' ? pinkColor : 'transparent',
//                   color: view === 'daily' ? 'white' : pinkColor,
//                   opacity: isTransitioning ? 0.6 : 1,
//                   cursor: isTransitioning ? 'not-allowed' : 'pointer'
//                 }}
//               >
//                 Daily Income
//               </button>
//               <button
//                 onClick={() => handleViewChange('monthly')}
//                 disabled={isTransitioning}
//                 style={{
//                   ...styles.toggleBtn,
//                   backgroundColor: view === 'monthly' ? pinkColor : 'transparent',
//                   color: view === 'monthly' ? 'white' : pinkColor,
//                   opacity: isTransitioning ? 0.6 : 1,
//                   cursor: isTransitioning ? 'not-allowed' : 'pointer'
//                 }}
//               >
//                 Monthly Income
//               </button>
//             </div>
//           </div>

//           {/* Show loading during transition */}
//           {isTransitioning && (
//             <div style={styles.loadingContainer}>
//               <div className="text-center">
//                 <Loader2 size={48} className="spin mb-3" />
//                 <p>Switching to {view}...</p>
//               </div>
//             </div>
//           )}

//           {/* No Data State */}
//           {!isTransitioning && earnings.length === 0 && (
//             <div className="text-center py-5 fade-in">
//               <p className="text-muted">No {view} income data available.</p>
//               <Button
//                 variant="outline-primary"
//                 onClick={() => window.location.reload()}
//                 className="mt-2"
//               >
//                 Refresh Data
//               </Button>
//             </div>
//           )}

//           {/* Daily View */}
//           {!isTransitioning && view === 'daily' && earnings.length > 0 && (
//             <div className="fade-in">
//               {/* Daily Income Card */}
//               <Card style={styles.incomeCard}>
//                 <div className="position-relative" style={{ zIndex: 1 }}>
//                   <div className="d-flex align-items-baseline gap-2 mb-1">
//                     <span className="display-6 fw-light">฿</span>
//                     <span className="display-3 fw-bold">
//                       {totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//                     </span>
//                   </div>
//                   <p className="opacity-75 h5 mb-4">Daily Income</p>

//                   <div style={{ height: '260px', width: '100%' }}>
//                     <ResponsiveContainer width="100%" height="100%">
//                       <AreaChart data={chartData} key={`daily-chart-${earnings.length}`}>
//                         <defs>
//                           <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
//                             <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
//                             <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
//                           </linearGradient>
//                         </defs>
//                         <XAxis
//                           dataKey="day"
//                           axisLine={false}
//                           tickLine={false}
//                           tick={{ fill: '#ffffff', fontSize: 12 }}
//                           dy={10}
//                         />
//                         <Tooltip
//                           contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: 'none', color: pinkColor }}
//                           itemStyle={{ color: pinkColor }}
//                           formatter={(value) => [`฿ ${value.toLocaleString()}`, 'Income']}
//                         />
//                         <Area
//                           type="monotone"
//                           dataKey="income"
//                           stroke="#ffffff"
//                           strokeWidth={3}
//                           fillOpacity={1}
//                           fill="url(#colorIncome)"
//                           dot={{ r: 6, fill: '#ffffff', strokeWidth: 2, stroke: pinkColor }}
//                           isAnimationActive={true}
//                           animationDuration={1000}
//                         />
//                       </AreaChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>
//                 <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '250px', height: '250px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(50px)' }}></div>
//               </Card>

//               {/* Data Table - Two Column Layout */}
//               <Card style={styles.tableCard}>
//                 <Row className="g-0">
//                   <Col md={6} className="border-end">
//                     <Table hover responsive className="m-0">
//                       <thead className="bg-light">
//                         <tr>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Date</th>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Income</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tableData.slice(0, Math.ceil(tableData.length / 2)).map((row, idx) => (
//                           <tr key={`left-${idx}`}>
//                             <td className="px-4 py-2 text-muted">{row.date}</td>
//                             <td className="px-4 py-2 fw-bold text-dark">{row.displayIncome}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </Col>
//                   <Col md={6}>
//                     <Table hover responsive className="m-0">
//                       <thead className="bg-light">
//                         <tr>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Date</th>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Income</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tableData.slice(Math.ceil(tableData.length / 2)).map((row, idx) => (
//                           <tr key={`right-${idx}`}>
//                             <td className="px-4 py-2 text-muted">{row.date}</td>
//                             <td className="px-4 py-2 fw-bold text-dark">{row.displayIncome}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </Col>
//                 </Row>
//               </Card>
//             </div>
//           )}

//           {/* Monthly View */}
//           {!isTransitioning && view === 'monthly' && (
//             <div className="fade-in">
//               {!hasMonthlyData ? (
//                 <div className="text-center py-5">
//                   <p className="text-muted">No monthly income data available.</p>
//                   <Button
//                     variant="outline-primary"
//                     onClick={() => window.location.reload()}
//                     className="mt-2"
//                   >
//                     Refresh Data
//                   </Button>
//                 </div>
//               ) : (
//                 Object.keys(monthlyByYear).sort((a, b) => b - a).map((year) => (
//                   <Card key={year} style={styles.incomeCard} className="mb-4">
//                     <Row className="align-items-center">
//                       <Col lg={8}>
//                         <div className="d-flex justify-content-between align-items-start mb-4">
//                           <div>
//                             <div className="d-flex align-items-baseline gap-2 mb-1">
//                               <span className="display-6 fw-light">฿</span>
//                               <span className="display-3 fw-bold">
//                                 {monthlyByYear[year].reduce((sum, item) => sum + parseFloat(item.total_earnings || 0), 0)
//                                   .toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//                               </span>
//                             </div>
//                             <p className="opacity-75 h5">Monthly Income - {year}</p>
//                           </div>
//                           <span className="display-6 fw-bold opacity-25">{year}</span>
//                         </div>

//                         <div style={{ height: '260px', width: '100%' }}>
//                           <ResponsiveContainer width="100%" height="100%">
//                             <AreaChart
//                               data={formatChartData(monthlyByYear[year], 'monthly')}
//                               key={`monthly-chart-${year}-${earnings.length}`}
//                             >
//                               <defs>
//                                 <linearGradient id={`colorIncome${year}`} x1="0" y1="0" x2="0" y2="1">
//                                   <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
//                                   <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
//                                 </linearGradient>
//                               </defs>
//                               <XAxis
//                                 dataKey="month"
//                                 axisLine={false}
//                                 tickLine={false}
//                                 tick={{ fill: '#ffffff', fontSize: 10 }}
//                                 dy={10}
//                               />
//                               <Tooltip
//                                 contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: 'none', color: pinkColor }}
//                                 formatter={(value) => [`฿ ${value.toLocaleString()}`, 'Income']}
//                               />
//                               <Area
//                                 type="monotone"
//                                 dataKey="income"
//                                 stroke="#ffffff"
//                                 strokeWidth={2}
//                                 fillOpacity={1}
//                                 fill={`url(#colorIncome${year})`}
//                                 dot={{ r: 4, fill: '#ffffff' }}
//                                 isAnimationActive={true}
//                                 animationDuration={1000}
//                               />
//                             </AreaChart>
//                           </ResponsiveContainer>
//                         </div>
//                       </Col>
//                       <Col lg={4}>
//                         <div style={styles.monthlyTableBox}>
//                           <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                             <span>Month</span>
//                             <span>Income</span>
//                           </div>
//                           <div style={{ maxHeight: '250px', overflowY: 'auto' }} className="custom-scrollbar">
//                             {formatTableData(monthlyByYear[year], 'monthly').map((m, idx) => (
//                               <div key={`month-${year}-${idx}`} className="d-flex justify-content-between small mb-2">
//                                 <span className="opacity-75">{m.date}</span>
//                                 <span className="fw-bold">{m.displayIncome}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </Col>
//                     </Row>
//                   </Card>
//                 ))
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <style dangerouslySetInnerHTML={{ __html: `
//         .fade-in { animation: fadeIn 0.5s ease-in-out; }
//         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
//         .custom-scrollbar::-webkit-scrollbar { width: 4px; }
//         .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 10px; }
//       `}} />
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import {
//   Loader2
// } from 'lucide-react';
// import {
//   XAxis,
//   Tooltip,
//   ResponsiveContainer,
//   AreaChart,
//   Area
// } from 'recharts';
// import { Container, Row, Col, Button, Table, Card, Badge } from 'react-bootstrap';
// import { useParams, useNavigate } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import "../css/DailySeeMore.css";

// // --- API Configuration ---
// const API_BASE_URL = 'https://sagarxo.app/web-api';
// const getAuthToken = () => localStorage.getItem('token') || '';

// // --- Map UI view to API type ---
// const API_TYPE_MAP = {
//   daily: 'daily',
//   monthly: 'monthly'
// };

// // --- API Service ---
// const fetchCustomerEarnings = async (type) => {
//   const apiType = API_TYPE_MAP[type] || type;
//   const response = await fetch(`${API_BASE_URL}/customer/earnings?type=${apiType}`, {
//     method: 'GET',
//     headers: {
//       'Authorization': getAuthToken(),
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();

//   if (!data.success) {
//     throw new Error(data.message || 'Failed to fetch earnings');
//   }

//   return data.data.earnings || [];
// };

// // --- Data Formatting Helpers ---
// const formatChartData = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === 'monthly') {
//     return earnings.map(item => ({
//       day: item.month ? item.month.substring(0, 3) : '???',
//       month: item.month ? item.month.substring(0, 3) : '???',
//       income: parseFloat(item.total_earnings),
//       year: item.year,
//       fullData: item
//     })).reverse();
//   } else {
//     // Daily only
//     const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     return earnings.map((item, index) => {
//       // Handle different date formats safely
//       let dateObj;
//       if (item.date && item.date.includes('/')) {
//         const dateParts = item.date.split('/');
//         dateObj = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
//       } else if (item.date) {
//         dateObj = new Date(item.date);
//       } else {
//         dateObj = new Date();
//       }

//       const dayName = days[dateObj.getDay()] || days[index % 7];

//       return {
//         day: dayName,
//         month: item.date,
//         income: parseFloat(item.total_earnings),
//         date: item.date,
//         fullData: item
//       };
//     }).reverse();
//   }
// };

// const formatTableData = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === 'monthly') {
//     return earnings.map(item => ({
//       date: item.month && item.year ? `${item.month} ${item.year}` : 'Unknown',
//       income: parseFloat(item.total_earnings),
//       displayIncome: `${parseFloat(item.total_earnings).toFixed(2)} THB`
//     }));
//   } else {
//     // Daily
//     return earnings.map(item => ({
//       date: item.date || 'Unknown',
//       income: parseFloat(item.total_earnings),
//       displayIncome: `${parseFloat(item.total_earnings).toFixed(2)} THB`
//     }));
//   }
// };

// // --- Custom Styles ---
// const pinkColor = '#f06281';

// const styles = {
//   sidebar: {
//     backgroundColor: pinkColor,
//     minHeight: '100vh',
//     width: '260px',
//     position: 'fixed',
//     left: 0,
//     top: 0,
//     zIndex: 1000,
//     padding: '2rem 0',
//     boxShadow: '4px 0 10px rgba(0,0,0,0.1)'
//   },
//   sidebarItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '1rem',
//     padding: '0.8rem 1.5rem',
//     color: 'white',
//     textDecoration: 'none',
//     fontSize: '0.9rem',
//     fontWeight: 600,
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//     border: 'none',
//     background: 'none',
//     width: '100%',
//     textAlign: 'left'
//   },
//   sidebarItemActive: {
//     backgroundColor: 'white',
//     color: pinkColor,
//     borderRadius: '50px 0 0 50px',
//     marginLeft: '1.5rem',
//     boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//   },
//   header: {
//     backgroundColor: 'white',
//     height: '64px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 2rem',
//     borderBottom: '1px solid #eee',
//     position: 'sticky',
//     top: 0,
//     zIndex: 900
//   },
//   toggleContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     margin: '2.5rem 0'
//   },
//   toggleBox: {
//     backgroundColor: 'white',
//     border: `1px solid ${pinkColor}4D`,
//     borderRadius: '50px',
//     padding: '0.4rem',
//     display: 'inline-flex',
//     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
//   },
//   toggleBtn: {
//     padding: '0.6rem 2.5rem',
//     borderRadius: '50px',
//     fontSize: '0.875rem',
//     fontWeight: 700,
//     border: 'none',
//     transition: 'all 0.3s ease',
//     cursor: 'pointer'
//   },
//   incomeCard: {
//     backgroundColor: pinkColor,
//     borderRadius: '1.5rem',
//     padding: '2rem',
//     color: 'white',
//     border: 'none',
//     boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
//     position: 'relative',
//     overflow: 'hidden'
//   },
//   tableCard: {
//     borderRadius: '1.5rem',
//     border: '1px solid #eee',
//     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//     overflow: 'hidden',
//     marginTop: '2rem',
//     backgroundColor: 'white'
//   },
//   dailyTableBox: {
//     backgroundColor: 'rgba(255, 255, 255, 0.15)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '1rem',
//     padding: '1.2rem',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     width: '100%',
//     height: '100%'
//   },
//   monthlyTableBox: {
//     backgroundColor: 'rgba(255, 255, 255, 0.15)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '1rem',
//     padding: '1.2rem',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     width: '100%',
//     height: '100%'
//   },
//   mainContent: {
//     marginLeft: '260px',
//     width: 'calc(100% - 260px)',
//     minHeight: '100vh',
//     backgroundColor: '#f8f9fa'
//   },
//   loadingContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '300px',
//     color: pinkColor
//   },
//   errorContainer: {
//     padding: '2rem',
//     textAlign: 'center',
//     color: '#dc3545'
//   },
//   // Responsive styles
//   '@media (max-width: 991px)': {
//     mainContent: {
//       marginLeft: '0',
//       width: '100%'
//     }
//   }
// };

// export default function DailySeeMore() {
//   const { type: urlType } = useParams();
//   const navigate = useNavigate();

//   // Initialize with safe default
//   const [view, setView] = useState('daily');
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Update view when URL param changes - with validation
//   useEffect(() => {
//     const validType = urlType === 'monthly' ? 'monthly' : 'daily';
//     if (validType !== view) {
//       setView(validType);
//     }
//   }, [urlType]);

//   // Fetch data when view changes - with proper cleanup
//   useEffect(() => {
//     let isMounted = true;

//     const loadEarnings = async () => {
//       // Reset state before fetching new data
//       if (isMounted) {
//         setLoading(true);
//         setError(null);
//         setEarnings([]); // Clear previous data immediately
//       }

//       try {
//         const data = await fetchCustomerEarnings(view);

//         // Only update if component is still mounted and view hasn't changed
//         if (isMounted) {
//           setEarnings(data);
//           console.log(`✅ Fetched ${view} earnings:`, data.length, 'items');
//         }
//       } catch (err) {
//         if (isMounted) {
//           console.error(`❌ Error fetching ${view} earnings:`, err);
//           setError(err.message);
//           setEarnings([]);
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//           setIsTransitioning(false);
//         }
//       }
//     };

//     loadEarnings();

//     // Cleanup function to prevent state updates on unmounted component
//     return () => {
//       isMounted = false;
//     };
//   }, [view]);

//   // Format data for display
//   const chartData = formatChartData(earnings, view);
//   const tableData = formatTableData(earnings, view);

//   // Calculate total income safely
//   const totalIncome = earnings.reduce((sum, item) => {
//     return sum + parseFloat(item.total_earnings || 0);
//   }, 0);

//   // Group monthly data by year
//   const groupByYear = (data) => {
//     const grouped = {};
//     data.forEach(item => {
//       const year = item.year || new Date().getFullYear();
//       if (!grouped[year]) grouped[year] = [];
//       grouped[year].push(item);
//     });
//     return grouped;
//   };

//   const monthlyByYear = view === 'monthly' ? groupByYear(earnings) : {};
//   const hasMonthlyData = Object.keys(monthlyByYear).length > 0;

//   // Handle view change with transition state
//   const handleViewChange = (newView) => {
//     if (newView === view) return; // Don't reload if same view

//     console.log(`🔄 Switching from ${view} to ${newView}`);
//     setIsTransitioning(true);
//     setView(newView);
//     navigate(`/dailyseemore/${newView}`, { replace: true });
//   };

//   // Render loading state
//   if (loading && !isTransitioning) {
//     return (
//       <div className="d-flex">
//         <Sidebar />
//         <div style={styles.mainContent} className='mainContent'>
//           <Header />
//           <div style={styles.loadingContainer}>
//             <div className="text-center">
//               <Loader2 size={48} className="spin mb-3" />
//               <p>Loading {view} earnings...</p>
//             </div>
//           </div>
//         </div>
//         <style dangerouslySetInnerHTML={{ __html: `
//           .spin { animation: spin 1s linear infinite; }
//           @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         `}} />
//       </div>
//     );
//   }

//   // Render error state
//   if (error) {
//     return (
//       <div className="d-flex">
//         <Sidebar />
//         <div style={styles.mainContent} className='mainContent'>
//           <Header />
//           <div style={styles.errorContainer}>
//             <h4>Error Loading Data</h4>
//             <p>{error}</p>
//             <Button
//               variant="outline-danger"
//               onClick={() => window.location.reload()}
//               className="mt-3"
//             >
//               Retry
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex">
//       <Sidebar />
//       <div style={styles.mainContent} className='mainContent'>
//         <Header />
//         <div className="container-lg">
//           {/* View Toggle - Only Daily & Monthly */}
//           <div style={styles.toggleContainer}>
//             <div style={styles.toggleBox}>
//               <button
//                 onClick={() => handleViewChange('daily')}
//                 disabled={isTransitioning}
//                 style={{
//                   ...styles.toggleBtn,
//                   backgroundColor: view === 'daily' ? pinkColor : 'transparent',
//                   color: view === 'daily' ? 'white' : pinkColor,
//                   opacity: isTransitioning ? 0.6 : 1,
//                   cursor: isTransitioning ? 'not-allowed' : 'pointer'
//                 }}
//               >
//                 Daily Income
//               </button>
//               <button
//                 onClick={() => handleViewChange('monthly')}
//                 disabled={isTransitioning}
//                 style={{
//                   ...styles.toggleBtn,
//                   backgroundColor: view === 'monthly' ? pinkColor : 'transparent',
//                   color: view === 'monthly' ? 'white' : pinkColor,
//                   opacity: isTransitioning ? 0.6 : 1,
//                   cursor: isTransitioning ? 'not-allowed' : 'pointer'
//                 }}
//               >
//                 Monthly Income
//               </button>
//             </div>
//           </div>

//           {/* Show loading during transition */}
//           {isTransitioning && (
//             <div style={styles.loadingContainer}>
//               <div className="text-center">
//                 <Loader2 size={48} className="spin mb-3" />
//                 <p>Switching to {view}...</p>
//               </div>
//             </div>
//           )}

//           {/* No Data State */}
//           {!isTransitioning && earnings.length === 0 && (
//             <div className="text-center py-5 fade-in">
//               <p className="text-muted">No {view} income data available.</p>
//               <Button
//                 variant="outline-primary"
//                 onClick={() => window.location.reload()}
//                 className="mt-2"
//               >
//                 Refresh Data
//               </Button>
//             </div>
//           )}

//           {/* Daily View - Side by Side Layout (Chart + Data) */}
//           {!isTransitioning && view === 'daily' && earnings.length > 0 && (
//             <div className="fade-in">
//               <Card style={styles.incomeCard}>
//                 <Row className="align-items-stretch">
//                   {/* Left Side - Chart (8 columns on large, full width on small) */}
//                   <Col lg={8} md={12} className="mb-4 mb-lg-0">
//                     <div className="position-relative" style={{ zIndex: 1 }}>
//                       <div className="d-flex justify-content-between align-items-start mb-4">
//                         <div>
//                           <div className="d-flex align-items-baseline gap-2 mb-1">
//                             <span className="display-6 fw-light">฿</span>
//                             <span className="display-3 fw-bold">
//                               {totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//                             </span>
//                           </div>
//                           <p className="opacity-75 h5">Daily Income</p>
//                         </div>
//                         <span className="display-6 fw-bold opacity-25">
//                           {new Date().getFullYear()}
//                         </span>
//                       </div>

//                       <div style={{ height: '260px', width: '100%' }}>
//                         <ResponsiveContainer width="100%" height="100%">
//                           <AreaChart data={chartData} key={`daily-chart-${earnings.length}`}>
//                             <defs>
//                               <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
//                                 <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
//                                 <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
//                               </linearGradient>
//                             </defs>
//                             <XAxis
//                               dataKey="day"
//                               axisLine={false}
//                               tickLine={false}
//                               tick={{ fill: '#ffffff', fontSize: 12 }}
//                               dy={10}
//                             />
//                             <Tooltip
//                               contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: 'none', color: pinkColor }}
//                               itemStyle={{ color: pinkColor }}
//                               formatter={(value) => [`฿ ${value.toLocaleString()}`, 'Income']}
//                             />
//                             <Area
//                               type="monotone"
//                               dataKey="income"
//                               stroke="#ffffff"
//                               strokeWidth={3}
//                               fillOpacity={1}
//                               fill="url(#colorIncome)"
//                               dot={{ r: 6, fill: '#ffffff', strokeWidth: 2, stroke: pinkColor }}
//                               isAnimationActive={true}
//                               animationDuration={1000}
//                             />
//                           </AreaChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
//                   </Col>

//                   {/* Right Side - Data Table (4 columns on large, full width on small) */}
//                   <Col lg={4} md={12}>
//                     <div style={styles.dailyTableBox}>
//                       <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                         <span>Date</span>
//                         <span>Income</span>
//                       </div>
//                       <div style={{ maxHeight: '300px', overflowY: 'auto' }} className="custom-scrollbar">
//                         {tableData.map((row, idx) => (
//                           <div key={`daily-${idx}`} className="d-flex justify-content-between small mb-2">
//                             <span className="opacity-75">{row.date}</span>
//                             <span className="fw-bold">{row.displayIncome}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </Col>
//                 </Row>
//                 <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '250px', height: '250px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(50px)' }}></div>
//               </Card>

//               {/* Alternative: Detailed Data Table Below (Optional - for more data) */}
//               {/* <Card style={styles.tableCard} className="mt-4">
//                 <div className="p-3 border-bottom">
//                   <h5 className="mb-0 text-secondary">Detailed Daily Breakdown</h5>
//                 </div>
//                 <Row className="g-0">
//                   <Col md={6} className="border-end">
//                     <Table hover responsive className="m-0">
//                       <thead className="bg-light">
//                         <tr>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Date</th>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Income</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tableData.slice(0, Math.ceil(tableData.length / 2)).map((row, idx) => (
//                           <tr key={`left-${idx}`}>
//                             <td className="px-4 py-2 text-muted">{row.date}</td>
//                             <td className="px-4 py-2 fw-bold text-dark">{row.displayIncome}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </Col>
//                   <Col md={6}>
//                     <Table hover responsive className="m-0">
//                       <thead className="bg-light">
//                         <tr>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Date</th>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Income</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tableData.slice(Math.ceil(tableData.length / 2)).map((row, idx) => (
//                           <tr key={`right-${idx}`}>
//                             <td className="px-4 py-2 text-muted">{row.date}</td>
//                             <td className="px-4 py-2 fw-bold text-dark">{row.displayIncome}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </Col>
//                 </Row>
//               </Card> */}
//             </div>
//           )}

//           {/* Monthly View - Side by Side Layout */}
//           {!isTransitioning && view === 'monthly' && (
//             <div className="fade-in">
//               {!hasMonthlyData ? (
//                 <div className="text-center py-5">
//                   <p className="text-muted">No monthly income data available.</p>
//                   <Button
//                     variant="outline-primary"
//                     onClick={() => window.location.reload()}
//                     className="mt-2"
//                   >
//                     Refresh Data
//                   </Button>
//                 </div>
//               ) : (
//                 Object.keys(monthlyByYear).sort((a, b) => b - a).map((year) => (
//                   <Card key={year} style={styles.incomeCard} className="mb-4">
//                     <Row className="align-items-stretch">
//                       {/* Left Side - Chart */}
//                       <Col lg={8} md={12} className="mb-4 mb-lg-0">
//                         <div className="position-relative" style={{ zIndex: 1 }}>
//                           <div className="d-flex justify-content-between align-items-start mb-4">
//                             <div>
//                               <div className="d-flex align-items-baseline gap-2 mb-1">
//                                 <span className="display-6 fw-light">฿</span>
//                                 <span className="display-3 fw-bold">
//                                   {monthlyByYear[year].reduce((sum, item) => sum + parseFloat(item.total_earnings || 0), 0)
//                                     .toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//                                 </span>
//                               </div>
//                               <p className="opacity-75 h5">Monthly Income - {year}</p>
//                             </div>
//                             <span className="display-6 fw-bold opacity-25">{year}</span>
//                           </div>

//                           <div style={{ height: '260px', width: '100%' }}>
//                             <ResponsiveContainer width="100%" height="100%">
//                               <AreaChart
//                                 data={formatChartData(monthlyByYear[year], 'monthly')}
//                                 key={`monthly-chart-${year}-${earnings.length}`}
//                               >
//                                 <defs>
//                                   <linearGradient id={`colorIncome${year}`} x1="0" y1="0" x2="0" y2="1">
//                                     <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
//                                     <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
//                                   </linearGradient>
//                                 </defs>
//                                 <XAxis
//                                   dataKey="month"
//                                   axisLine={false}
//                                   tickLine={false}
//                                   tick={{ fill: '#ffffff', fontSize: 10 }}
//                                   dy={10}
//                                 />
//                                 <Tooltip
//                                   contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: 'none', color: pinkColor }}
//                                   formatter={(value) => [`฿ ${value.toLocaleString()}`, 'Income']}
//                                 />
//                                 <Area
//                                   type="monotone"
//                                   dataKey="income"
//                                   stroke="#ffffff"
//                                   strokeWidth={2}
//                                   fillOpacity={1}
//                                   fill={`url(#colorIncome${year})`}
//                                   dot={{ r: 4, fill: '#ffffff' }}
//                                   isAnimationActive={true}
//                                   animationDuration={1000}
//                                 />
//                               </AreaChart>
//                             </ResponsiveContainer>
//                           </div>
//                         </div>
//                       </Col>

//                       {/* Right Side - Data */}
//                       <Col lg={4} md={12}>
//                         <div style={styles.monthlyTableBox}>
//                           <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                             <span>Month</span>
//                             <span>Income</span>
//                           </div>
//                           <div style={{ maxHeight: '300px', overflowY: 'auto' }} className="custom-scrollbar">
//                             {formatTableData(monthlyByYear[year], 'monthly').map((m, idx) => (
//                               <div key={`month-${year}-${idx}`} className="d-flex justify-content-between small mb-2">
//                                 <span className="opacity-75">{m.date}</span>
//                                 <span className="fw-bold">{m.displayIncome}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </Col>
//                     </Row>
//                   </Card>
//                 ))
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <style dangerouslySetInnerHTML={{ __html: `
//         .fade-in { animation: fadeIn 0.5s ease-in-out; }
//         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
//         .custom-scrollbar::-webkit-scrollbar { width: 4px; }
//         .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 10px; }

//         /* Responsive adjustments */
//         @media (max-width: 991px) {
//           .mainContent {
//             margin-left: 0 !important;
//             width: 100% !important;
//           }
//         }

//         @media (max-width: 768px) {
//           .display-3 {
//             font-size: 2.5rem;
//           }
//           .display-6 {
//             font-size: 1.5rem;
//           }
//         }
//       `}} />
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import {
//   Loader2
// } from 'lucide-react';
// import {
//   XAxis,
//   Tooltip,
//   ResponsiveContainer,
//   AreaChart,
//   Area
// } from 'recharts';
// import { Container, Row, Col, Button, Table, Card, Badge } from 'react-bootstrap';
// import { useParams, useNavigate } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import "../css/DailySeeMore.css";

// // --- API Configuration ---
// const API_BASE_URL = 'https://sagarxo.app/web-api';
// const getAuthToken = () => localStorage.getItem('token') || '';

// // --- Map UI view to API type ---
// const API_TYPE_MAP = {
//   daily: 'daily',
//   monthly: 'monthly'
// };

// // --- API Service ---
// const fetchCustomerEarnings = async (type) => {
//   const apiType = API_TYPE_MAP[type] || type;
//   const response = await fetch(`${API_BASE_URL}/customer/earnings?type=${apiType}`, {
//     method: 'GET',
//     headers: {
//       'Authorization': getAuthToken(),
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();

//   if (!data.success) {
//     throw new Error(data.message || 'Failed to fetch earnings');
//   }

//   return data.data.earnings || [];
// };

// // --- Data Formatting Helpers ---
// const formatChartData = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === 'monthly') {
//     return earnings.map(item => ({
//       day: item.month ? item.month.substring(0, 3) : '???',
//       month: item.month ? item.month.substring(0, 3) : '???',
//       income: parseFloat(item.total_earnings),
//       year: item.year,
//       fullData: item
//     })).reverse();
//   } else {
//     // Daily only
//     const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     return earnings.map((item, index) => {
//       // Handle different date formats safely
//       let dateObj;
//       if (item.date && item.date.includes('/')) {
//         const dateParts = item.date.split('/');
//         dateObj = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
//       } else if (item.date) {
//         dateObj = new Date(item.date);
//       } else {
//         dateObj = new Date();
//       }

//       const dayName = days[dateObj.getDay()] || days[index % 7];

//       return {
//         day: dayName,
//         month: item.date,
//         income: parseFloat(item.total_earnings),
//         date: item.date,
//         fullData: item
//       };
//     }).reverse();
//   }
// };

// const formatTableData = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === 'monthly') {
//     return earnings.map(item => ({
//       date: item.month && item.year ? `${item.month} ${item.year}` : 'Unknown',
//       income: parseFloat(item.total_earnings),
//       displayIncome: `${parseFloat(item.total_earnings).toFixed(2)} THB`
//     }));
//   } else {
//     // Daily
//     return earnings.map(item => ({
//       date: item.date || 'Unknown',
//       income: parseFloat(item.total_earnings),
//       displayIncome: `${parseFloat(item.total_earnings).toFixed(2)} THB`
//     }));
//   }
// };

// // --- Custom Styles ---
// const pinkColor = '#f06281';

// const styles = {
//   sidebar: {
//     backgroundColor: pinkColor,
//     minHeight: '100vh',
//     width: '260px',
//     position: 'fixed',
//     left: 0,
//     top: 0,
//     zIndex: 1000,
//     padding: '2rem 0',
//     boxShadow: '4px 0 10px rgba(0,0,0,0.1)'
//   },
//   sidebarItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '1rem',
//     padding: '0.8rem 1.5rem',
//     color: 'white',
//     textDecoration: 'none',
//     fontSize: '0.9rem',
//     fontWeight: 600,
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//     border: 'none',
//     background: 'none',
//     width: '100%',
//     textAlign: 'left'
//   },
//   sidebarItemActive: {
//     backgroundColor: 'white',
//     color: pinkColor,
//     borderRadius: '50px 0 0 50px',
//     marginLeft: '1.5rem',
//     boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//   },
//   header: {
//     backgroundColor: 'white',
//     height: '64px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 2rem',
//     borderBottom: '1px solid #eee',
//     position: 'sticky',
//     top: 0,
//     zIndex: 900
//   },
//   toggleContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     margin: '2.5rem 0'
//   },
//   toggleBox: {
//     backgroundColor: 'white',
//     border: `1px solid ${pinkColor}4D`,
//     borderRadius: '50px',
//     padding: '0.4rem',
//     display: 'inline-flex',
//     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
//   },
//   toggleBtn: {
//     padding: '0.6rem 2.5rem',
//     borderRadius: '50px',
//     fontSize: '0.875rem',
//     fontWeight: 700,
//     border: 'none',
//     transition: 'all 0.3s ease',
//     cursor: 'pointer'
//   },
//   incomeCard: {
//     backgroundColor: pinkColor,
//     borderRadius: '1.5rem',
//     padding: '2rem',
//     color: 'white',
//     border: 'none',
//     boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
//     position: 'relative',
//     overflow: 'hidden'
//   },
//   tableCard: {
//     borderRadius: '1.5rem',
//     border: '1px solid #eee',
//     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//     overflow: 'hidden',
//     marginTop: '2rem',
//     backgroundColor: 'white'
//   },
//   dailyTableBox: {
//     backgroundColor: 'rgba(255, 255, 255, 0.15)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '1rem',
//     padding: '1.2rem',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     width: '100%',
//     height: '100%'
//   },
//   monthlyTableBox: {
//     backgroundColor: 'rgba(255, 255, 255, 0.15)',
//     backdropFilter: 'blur(10px)',
//     borderRadius: '1rem',
//     padding: '1.2rem',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     width: '100%',
//     height: '100%'
//   },
//   mainContent: {
//     marginLeft: '260px',
//     width: 'calc(100% - 260px)',
//     minHeight: '100vh',
//     backgroundColor: '#f8f9fa'
//   },
//   loadingContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '300px',
//     color: pinkColor
//   },
//   errorContainer: {
//     padding: '2rem',
//     textAlign: 'center',
//     color: '#dc3545'
//   },
//   // Responsive styles
//   '@media (max-width: 991px)': {
//     mainContent: {
//       marginLeft: '0',
//       width: '100%'
//     }
//   }
// };

// export default function DailySeeMore() {
//   const { type: urlType } = useParams();
//   const navigate = useNavigate();

//   // Initialize with safe default
//   const [view, setView] = useState('daily');
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Close Sidebar
//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   // Update view when URL param changes - with validation
//   useEffect(() => {
//     const validType = urlType === 'monthly' ? 'monthly' : 'daily';
//     if (validType !== view) {
//       setView(validType);
//     }
//   }, [urlType]);

//   // Fetch data when view changes - with proper cleanup
//   useEffect(() => {
//     let isMounted = true;

//     const loadEarnings = async () => {
//       // Reset state before fetching new data
//       if (isMounted) {
//         setLoading(true);
//         setError(null);
//         setEarnings([]); // Clear previous data immediately
//       }

//       try {
//         const data = await fetchCustomerEarnings(view);

//         // Only update if component is still mounted and view hasn't changed
//         if (isMounted) {
//           setEarnings(data);
//           console.log(`✅ Fetched ${view} earnings:`, data.length, 'items');
//         }
//       } catch (err) {
//         if (isMounted) {
//           console.error(`❌ Error fetching ${view} earnings:`, err);
//           setError(err.message);
//           setEarnings([]);
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//           setIsTransitioning(false);
//         }
//       }
//     };

//     loadEarnings();

//     // Cleanup function to prevent state updates on unmounted component
//     return () => {
//       isMounted = false;
//     };
//   }, [view]);

//   // Format data for display
//   const chartData = formatChartData(earnings, view);
//   const tableData = formatTableData(earnings, view);

//   // Calculate total income safely
//   const totalIncome = earnings.reduce((sum, item) => {
//     return sum + parseFloat(item.total_earnings || 0);
//   }, 0);

//   // Group monthly data by year
//   const groupByYear = (data) => {
//     const grouped = {};
//     data.forEach(item => {
//       const year = item.year || new Date().getFullYear();
//       if (!grouped[year]) grouped[year] = [];
//       grouped[year].push(item);
//     });
//     return grouped;
//   };

//   const monthlyByYear = view === 'monthly' ? groupByYear(earnings) : {};
//   const hasMonthlyData = Object.keys(monthlyByYear).length > 0;

//   // Handle view change with transition state
//   const handleViewChange = (newView) => {
//     if (newView === view) return; // Don't reload if same view

//     console.log(`🔄 Switching from ${view} to ${newView}`);
//     setIsTransitioning(true);
//     setView(newView);
//     navigate(`/dailyseemore/${newView}`, { replace: true });
//   };

//   // Render loading state
//   if (loading && !isTransitioning) {
//     return (
//       <div className="d-flex">
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div style={styles.mainContent} className='mainContent'>
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div style={styles.loadingContainer}>
//             <div className="text-center">
//               <Loader2 size={48} className="spin mb-3" />
//               <p>Loading {view} earnings...</p>
//             </div>
//           </div>
//         </div>
//         <style dangerouslySetInnerHTML={{ __html: `
//           .spin { animation: spin 1s linear infinite; }
//           @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         `}} />
//       </div>
//     );
//   }

//   // Render error state
//   if (error) {
//     return (
//       <div className="d-flex">
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div style={styles.mainContent} className='mainContent'>
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div style={styles.errorContainer}>
//             <h4>Error Loading Data</h4>
//             <p>{error}</p>
//             <Button
//               variant="outline-danger"
//               onClick={() => window.location.reload()}
//               className="mt-3"
//             >
//               Retry
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex">
//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//       <div style={styles.mainContent} className='mainContent'>
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//         <div className="container-lg">
//           {/* View Toggle - Only Daily & Monthly */}
//           <div style={styles.toggleContainer}>
//             <div style={styles.toggleBox}>
//               <button
//                 onClick={() => handleViewChange('daily')}
//                 disabled={isTransitioning}
//                 style={{
//                   ...styles.toggleBtn,
//                   backgroundColor: view === 'daily' ? pinkColor : 'transparent',
//                   color: view === 'daily' ? 'white' : pinkColor,
//                   opacity: isTransitioning ? 0.6 : 1,
//                   cursor: isTransitioning ? 'not-allowed' : 'pointer'
//                 }}
//               >
//                 Daily Income
//               </button>
//               <button
//                 onClick={() => handleViewChange('monthly')}
//                 disabled={isTransitioning}
//                 style={{
//                   ...styles.toggleBtn,
//                   backgroundColor: view === 'monthly' ? pinkColor : 'transparent',
//                   color: view === 'monthly' ? 'white' : pinkColor,
//                   opacity: isTransitioning ? 0.6 : 1,
//                   cursor: isTransitioning ? 'not-allowed' : 'pointer'
//                 }}
//               >
//                 Monthly Income
//               </button>
//             </div>
//           </div>

//           {/* Show loading during transition */}
//           {isTransitioning && (
//             <div style={styles.loadingContainer}>
//               <div className="text-center">
//                 <Loader2 size={48} className="spin mb-3" />
//                 <p>Switching to {view}...</p>
//               </div>
//             </div>
//           )}

//           {/* No Data State */}
//           {!isTransitioning && earnings.length === 0 && (
//             <div className="text-center py-5 fade-in">
//               <p className="text-muted">No {view} income data available.</p>
//               <Button
//                 variant="outline-primary"
//                 onClick={() => window.location.reload()}
//                 className="mt-2"
//               >
//                 Refresh Data
//               </Button>
//             </div>
//           )}

//           {/* Daily View - Side by Side Layout (Chart + Data) */}
//           {!isTransitioning && view === 'daily' && earnings.length > 0 && (
//             <div className="fade-in">
//               <Card style={styles.incomeCard}>
//                 <Row className="align-items-stretch">
//                   {/* Left Side - Chart (8 columns on large, full width on small) */}
//                   <Col lg={8} md={12} className="mb-4 mb-lg-0">
//                     <div className="position-relative" style={{ zIndex: 1 }}>
//                       <div className="d-flex justify-content-between align-items-start mb-4">
//                         <div>
//                           <div className="d-flex align-items-baseline gap-2 mb-1">
//                             <span className="display-6 fw-light">฿</span>
//                             <span className="display-3 fw-bold">
//                               {totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//                             </span>
//                           </div>
//                           <p className="opacity-75 h5">Daily Income</p>
//                         </div>
//                         <span className="display-6 fw-bold opacity-25">
//                           {new Date().getFullYear()}
//                         </span>
//                       </div>

//                       <div style={{ height: '260px', width: '100%' }}>
//                         <ResponsiveContainer width="100%" height="100%">
//                           <AreaChart data={chartData} key={`daily-chart-${earnings.length}`}>
//                             <defs>
//                               <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
//                                 <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
//                                 <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
//                               </linearGradient>
//                             </defs>
//                             <XAxis
//                               dataKey="day"
//                               axisLine={false}
//                               tickLine={false}
//                               tick={{ fill: '#ffffff', fontSize: 12 }}
//                               dy={10}
//                             />
//                             <Tooltip
//                               contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: 'none', color: pinkColor }}
//                               itemStyle={{ color: pinkColor }}
//                               formatter={(value) => [`฿ ${value.toLocaleString()}`, 'Income']}
//                             />
//                             <Area
//                               type="monotone"
//                               dataKey="income"
//                               stroke="#ffffff"
//                               strokeWidth={3}
//                               fillOpacity={1}
//                               fill="url(#colorIncome)"
//                               dot={{ r: 6, fill: '#ffffff', strokeWidth: 2, stroke: pinkColor }}
//                               isAnimationActive={true}
//                               animationDuration={1000}
//                             />
//                           </AreaChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
//                   </Col>

//                   {/* Right Side - Data Table (4 columns on large, full width on small) */}
//                   <Col lg={4} md={12}>
//                     <div style={styles.dailyTableBox}>
//                       <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                         <span>Date</span>
//                         <span>Income</span>
//                       </div>
//                       <div style={{ maxHeight: '300px', overflowY: 'auto' }} className="custom-scrollbar">
//                         {tableData.map((row, idx) => (
//                           <div key={`daily-${idx}`} className="d-flex justify-content-between small mb-2">
//                             <span className="opacity-75">{row.date}</span>
//                             <span className="fw-bold">{row.displayIncome}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </Col>
//                 </Row>
//                 <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '250px', height: '250px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(50px)' }}></div>
//               </Card>

//               {/* Alternative: Detailed Data Table Below (Optional - for more data) */}
//               {/* <Card style={styles.tableCard} className="mt-4">
//                 <div className="p-3 border-bottom">
//                   <h5 className="mb-0 text-secondary">Detailed Daily Breakdown</h5>
//                 </div>
//                 <Row className="g-0">
//                   <Col md={6} className="border-end">
//                     <Table hover responsive className="m-0">
//                       <thead className="bg-light">
//                         <tr>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Date</th>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Income</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tableData.slice(0, Math.ceil(tableData.length / 2)).map((row, idx) => (
//                           <tr key={`left-${idx}`}>
//                             <td className="px-4 py-2 text-muted">{row.date}</td>
//                             <td className="px-4 py-2 fw-bold text-dark">{row.displayIncome}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </Col>
//                   <Col md={6}>
//                     <Table hover responsive className="m-0">
//                       <thead className="bg-light">
//                         <tr>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Date</th>
//                           <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Income</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tableData.slice(Math.ceil(tableData.length / 2)).map((row, idx) => (
//                           <tr key={`right-${idx}`}>
//                             <td className="px-4 py-2 text-muted">{row.date}</td>
//                             <td className="px-4 py-2 fw-bold text-dark">{row.displayIncome}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </Col>
//                 </Row>
//               </Card> */}
//             </div>
//           )}

//           {/* Monthly View - Side by Side Layout */}
//           {!isTransitioning && view === 'monthly' && (
//             <div className="fade-in">
//               {!hasMonthlyData ? (
//                 <div className="text-center py-5">
//                   <p className="text-muted">No monthly income data available.</p>
//                   <Button
//                     variant="outline-primary"
//                     onClick={() => window.location.reload()}
//                     className="mt-2"
//                   >
//                     Refresh Data
//                   </Button>
//                 </div>
//               ) : (
//                 Object.keys(monthlyByYear).sort((a, b) => b - a).map((year) => (
//                   <Card key={year} style={styles.incomeCard} className="mb-4">
//                     <Row className="align-items-stretch">
//                       {/* Left Side - Chart */}
//                       <Col lg={8} md={12} className="mb-4 mb-lg-0">
//                         <div className="position-relative" style={{ zIndex: 1 }}>
//                           <div className="d-flex justify-content-between align-items-start mb-4">
//                             <div>
//                               <div className="d-flex align-items-baseline gap-2 mb-1">
//                                 <span className="display-6 fw-light">฿</span>
//                                 <span className="display-3 fw-bold">
//                                   {monthlyByYear[year].reduce((sum, item) => sum + parseFloat(item.total_earnings || 0), 0)
//                                     .toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//                                 </span>
//                               </div>
//                               <p className="opacity-75 h5">Monthly Income - {year}</p>
//                             </div>
//                             <span className="display-6 fw-bold opacity-25">{year}</span>
//                           </div>

//                           <div style={{ height: '260px', width: '100%' }}>
//                             <ResponsiveContainer width="100%" height="100%">
//                               <AreaChart
//                                 data={formatChartData(monthlyByYear[year], 'monthly')}
//                                 key={`monthly-chart-${year}-${earnings.length}`}
//                               >
//                                 <defs>
//                                   <linearGradient id={`colorIncome${year}`} x1="0" y1="0" x2="0" y2="1">
//                                     <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
//                                     <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
//                                   </linearGradient>
//                                 </defs>
//                                 <XAxis
//                                   dataKey="month"
//                                   axisLine={false}
//                                   tickLine={false}
//                                   tick={{ fill: '#ffffff', fontSize: 10 }}
//                                   dy={10}
//                                 />
//                                 <Tooltip
//                                   contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: 'none', color: pinkColor }}
//                                   formatter={(value) => [`฿ ${value.toLocaleString()}`, 'Income']}
//                                 />
//                                 <Area
//                                   type="monotone"
//                                   dataKey="income"
//                                   stroke="#ffffff"
//                                   strokeWidth={2}
//                                   fillOpacity={1}
//                                   fill={`url(#colorIncome${year})`}
//                                   dot={{ r: 4, fill: '#ffffff' }}
//                                   isAnimationActive={true}
//                                   animationDuration={1000}
//                                 />
//                               </AreaChart>
//                             </ResponsiveContainer>
//                           </div>
//                         </div>
//                       </Col>

//                       {/* Right Side - Data */}
//                       <Col lg={4} md={12}>
//                         <div style={styles.monthlyTableBox}>
//                           <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                             <span>Month</span>
//                             <span>Income</span>
//                           </div>
//                           <div style={{ maxHeight: '300px', overflowY: 'auto' }} className="custom-scrollbar">
//                             {formatTableData(monthlyByYear[year], 'monthly').map((m, idx) => (
//                               <div key={`month-${year}-${idx}`} className="d-flex justify-content-between small mb-2">
//                                 <span className="opacity-75">{m.date}</span>
//                                 <span className="fw-bold">{m.displayIncome}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </Col>
//                     </Row>
//                   </Card>
//                 ))
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <style dangerouslySetInnerHTML={{ __html: `
//         .fade-in { animation: fadeIn 0.5s ease-in-out; }
//         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
//         .custom-scrollbar::-webkit-scrollbar { width: 4px; }
//         .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 10px; }

//         /* Responsive adjustments */
//         @media (max-width: 991px) {
//           .mainContent {
//             margin-left: 0 !important;
//             width: 100% !important;
//           }
//         }

//         @media (max-width: 768px) {
//           .display-3 {
//             font-size: 2.5rem;
//           }
//           .display-6 {
//             font-size: 1.5rem;
//           }
//         }
//       `}} />
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Loader2 } from "lucide-react";
// import { XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Table,
//   Card,
//   Badge,
// } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import "../css/DailySeeMore.css";

// // --- API Configuration ---
// const API_BASE_URL = "https://sagarxo.app/web-api";
// const getAuthToken = () => localStorage.getItem("token") || "";

// // --- Map UI view to API type ---
// const API_TYPE_MAP = {
//   daily: "daily",
//   monthly: "monthly",
// };

// // --- All 12 months for display ---
// const ALL_MONTHS = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const ALL_MONTHS_SHORT = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// // --- API Service ---
// const fetchCustomerEarnings = async (type) => {
//   const apiType = API_TYPE_MAP[type] || type;
//   const response = await fetch(
//     `${API_BASE_URL}/customer/earnings?type=${apiType}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: getAuthToken(),
//         "Content-Type": "application/json",
//       },
//     },
//   );

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();

//   if (!data.success) {
//     throw new Error(data.message || "Failed to fetch earnings");
//   }

//   return data.data.earnings || [];
// };

// // --- Data Formatting Helpers ---
// const formatChartData = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === "monthly") {
//     return earnings
//       .map((item) => ({
//         day: item.month ? item.month.substring(0, 3) : "???",
//         month: item.month ? item.month.substring(0, 3) : "???",
//         income: parseFloat(item.total_earnings),
//         year: item.year,
//         fullData: item,
//       }))
//       .reverse();
//   } else {
//     // Daily only
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     return earnings
//       .map((item, index) => {
//         // Handle different date formats safely
//         let dateObj;
//         if (item.date && item.date.includes("/")) {
//           const dateParts = item.date.split("/");
//           dateObj = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
//         } else if (item.date) {
//           dateObj = new Date(item.date);
//         } else {
//           dateObj = new Date();
//         }

//         const dayName = days[dateObj.getDay()] || days[index % 7];

//         return {
//           day: dayName,
//           month: item.date,
//           income: parseFloat(item.total_earnings),
//           date: item.date,
//           fullData: item,
//         };
//       })
//       .reverse();
//   }
// };

// // --- Format monthly data with all 12 months (show "—" for empty months) ---
// const formatMonthlyTableData = (earnings, year) => {
//   // Create map of existing data
//   const dataMap = {};
//   earnings.forEach((item) => {
//     const monthName = item.month;
//     if (monthName) {
//       dataMap[monthName] = parseFloat(item.total_earnings || 0);
//     }
//   });

//   // Build all 12 months with data or "—"
//   return ALL_MONTHS.map((monthName, index) => {
//     const hasData = dataMap[monthName] !== undefined;
//     const income = dataMap[monthName] || 0;

//     return {
//       date: `${monthName} ${year}`,
//       monthShort: ALL_MONTHS_SHORT[index],
//       income: hasData ? income : 0,
//       displayIncome: hasData ? `${income.toFixed(2)} THB` : "—",
//       hasData: hasData,
//     };
//   });
// };

// // --- Format monthly chart data with all 12 months ---
// const formatMonthlyChartData = (earnings, year) => {
//   const dataMap = {};
//   earnings.forEach((item) => {
//     const monthName = item.month;
//     if (monthName) {
//       dataMap[monthName] = parseFloat(item.total_earnings || 0);
//     }
//   });

//   return ALL_MONTHS.map((monthName, index) => {
//     const hasData = dataMap[monthName] !== undefined;
//     const income = dataMap[monthName] || 0;

//     return {
//       day: ALL_MONTHS_SHORT[index],
//       month: ALL_MONTHS_SHORT[index],
//       income: hasData ? income : 0,
//       year: year,
//       hasData: hasData,
//       fullData: hasData
//         ? { month: monthName, year: year, total_earnings: income }
//         : null,
//     };
//   });
// };

// const formatTableData = (earnings, type) => {
//   if (!earnings || earnings.length === 0) return [];

//   if (type === "monthly") {
//     return earnings.map((item) => ({
//       date: item.month && item.year ? `${item.month} ${item.year}` : "Unknown",
//       income: parseFloat(item.total_earnings),
//       displayIncome: `${parseFloat(item.total_earnings).toFixed(2)} THB`,
//     }));
//   } else {
//     // Daily
//     return earnings.map((item) => ({
//       date: item.date || "Unknown",
//       income: parseFloat(item.total_earnings),
//       displayIncome: `${parseFloat(item.total_earnings).toFixed(2)} THB`,
//     }));
//   }
// };

// // --- Custom Styles ---
// const pinkColor = "#f06281";

// const styles = {
//   sidebar: {
//     backgroundColor: pinkColor,
//     minHeight: "100vh",
//     width: "260px",
//     position: "fixed",
//     left: 0,
//     top: 0,
//     zIndex: 1000,
//     padding: "2rem 0",
//     boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
//   },
//   sidebarItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "1rem",
//     padding: "0.8rem 1.5rem",
//     color: "white",
//     textDecoration: "none",
//     fontSize: "0.9rem",
//     fontWeight: 600,
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//     border: "none",
//     background: "none",
//     width: "100%",
//     textAlign: "left",
//   },
//   sidebarItemActive: {
//     backgroundColor: "white",
//     color: pinkColor,
//     borderRadius: "50px 0 0 50px",
//     marginLeft: "1.5rem",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//   },
//   header: {
//     backgroundColor: "white",
//     height: "64px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0 2rem",
//     borderBottom: "1px solid #eee",
//     position: "sticky",
//     top: 0,
//     zIndex: 900,
//   },
//   toggleContainer: {
//     display: "flex",
//     justifyContent: "center",
//     margin: "2.5rem 0",
//   },
//   toggleBox: {
//     backgroundColor: "white",
//     border: `1px solid ${pinkColor}4D`,
//     borderRadius: "50px",
//     padding: "0.4rem",
//     display: "inline-flex",
//     boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//   },
//   toggleBtn: {
//     padding: "0.6rem 2.5rem",
//     borderRadius: "50px",
//     fontSize: "0.875rem",
//     fontWeight: 700,
//     border: "none",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//   },
//   incomeCard: {
//     backgroundColor: pinkColor,
//     borderRadius: "1.5rem",
//     padding: "2rem",
//     color: "white",
//     border: "none",
//     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
//     position: "relative",
//     overflow: "hidden",
//   },
//   tableCard: {
//     borderRadius: "1.5rem",
//     border: "1px solid #eee",
//     boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//     overflow: "hidden",
//     marginTop: "2rem",
//     backgroundColor: "white",
//   },
//   dailyTableBox: {
//     backgroundColor: "rgba(255, 255, 255, 0.15)",
//     backdropFilter: "blur(10px)",
//     borderRadius: "1rem",
//     padding: "1.2rem",
//     border: "1px solid rgba(255, 255, 255, 0.2)",
//     width: "100%",
//     height: "100%",
//   },
//   monthlyTableBox: {
//     backgroundColor: "rgba(255, 255, 255, 0.15)",
//     backdropFilter: "blur(10px)",
//     borderRadius: "1rem",
//     padding: "1.2rem",
//     border: "1px solid rgba(255, 255, 255, 0.2)",
//     width: "100%",
//     height: "100%",
//   },
//   mainContent: {
//     marginLeft: "260px",
//     width: "calc(100% - 260px)",
//     minHeight: "100vh",
//     backgroundColor: "#f8f9fa",
//   },
//   loadingContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "300px",
//     color: pinkColor,
//   },
//   errorContainer: {
//     padding: "2rem",
//     textAlign: "center",
//     color: "#dc3545",
//   },
//   // Responsive styles
//   "@media (max-width: 991px)": {
//     mainContent: {
//       marginLeft: "0",
//       width: "100%",
//     },
//   },
// };

// export default function DailySeeMore() {
//   const { type: urlType } = useParams();
//   const navigate = useNavigate();

//   // Initialize with safe default
//   const [view, setView] = useState("daily");
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Close Sidebar
//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   // Update view when URL param changes - with validation
//   useEffect(() => {
//     const validType = urlType === "monthly" ? "monthly" : "daily";
//     if (validType !== view) {
//       setView(validType);
//     }
//   }, [urlType]);

//   // Fetch data when view changes - with proper cleanup
//   useEffect(() => {
//     let isMounted = true;

//     const loadEarnings = async () => {
//       // Reset state before fetching new data
//       if (isMounted) {
//         setLoading(true);
//         setError(null);
//         setEarnings([]); // Clear previous data immediately
//       }

//       try {
//         const data = await fetchCustomerEarnings(view);

//         // Only update if component is still mounted and view hasn't changed
//         if (isMounted) {
//           setEarnings(data);
//           console.log(`✅ Fetched ${view} earnings:`, data.length, "items");
//         }
//       } catch (err) {
//         if (isMounted) {
//           console.error(`❌ Error fetching ${view} earnings:`, err);
//           setError(err.message);
//           setEarnings([]);
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//           setIsTransitioning(false);
//         }
//       }
//     };

//     loadEarnings();

//     // Cleanup function to prevent state updates on unmounted component
//     return () => {
//       isMounted = false;
//     };
//   }, [view]);

//   // Format data for display
//   const chartData = formatChartData(earnings, view);
//   const tableData = formatTableData(earnings, view);

//   // Calculate total income safely
//   const totalIncome = earnings.reduce((sum, item) => {
//     return sum + parseFloat(item.total_earnings || 0);
//   }, 0);

//   // Group monthly data by year
//   const groupByYear = (data) => {
//     const grouped = {};
//     data.forEach((item) => {
//       const year = item.year || new Date().getFullYear();
//       if (!grouped[year]) grouped[year] = [];
//       grouped[year].push(item);
//     });
//     return grouped;
//   };

//   const monthlyByYear = view === "monthly" ? groupByYear(earnings) : {};
//   const hasMonthlyData = Object.keys(monthlyByYear).length > 0;

//   // Handle view change with transition state
//   const handleViewChange = (newView) => {
//     if (newView === view) return; // Don't reload if same view

//     console.log(`🔄 Switching from ${view} to ${newView}`);
//     setIsTransitioning(true);
//     setView(newView);
//     navigate(`/dailyseemore/${newView}`, { replace: true });
//   };

//   // Render loading state
//   if (loading && !isTransitioning) {
//     return (
//       <div className="d-flex">
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div style={styles.mainContent} className="mainContent">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div style={styles.loadingContainer}>
//             <div className="text-center">
//               <Loader2 size={48} className="spin mb-3" />
//               <p>Loading {view} earnings...</p>
//             </div>
//           </div>
//         </div>
//         <style
//           dangerouslySetInnerHTML={{
//             __html: `
//           .spin { animation: spin 1s linear infinite; }
//           @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         `,
//           }}
//         />
//       </div>
//     );
//   }

//   // Render error state
//   if (error) {
//     return (
//       <div className="d-flex">
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//         <div style={styles.mainContent} className="mainContent">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div style={styles.errorContainer}>
//             <h4>Error Loading Data</h4>
//             <p>{error}</p>
//             <Button
//               variant="outline-danger"
//               onClick={() => window.location.reload()}
//               className="mt-3"
//             >
//               Retry
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex">
//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
//       <div style={styles.mainContent} className="mainContent">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//         <div className="container-lg">
//           {/* View Toggle - Only Daily & Monthly */}
//           <div style={styles.toggleContainer}>
//             <div style={styles.toggleBox}>
//               {/* <button 
//                 onClick={() => handleViewChange('daily')}
//                 disabled={isTransitioning}
//                 style={{ 
//                   ...styles.toggleBtn, 
//                   backgroundColor: view === 'daily' ? pinkColor : 'transparent', 
//                   color: view === 'daily' ? 'white' : pinkColor,
//                   opacity: isTransitioning ? 0.6 : 1,
//                   cursor: isTransitioning ? 'not-allowed' : 'pointer'
//                 }}
//               >
//                 Daily Income
//               </button>
//               <button 
//                 onClick={() => handleViewChange('monthly')}
//                 disabled={isTransitioning}
//                 style={{ 
//                   ...styles.toggleBtn, 
//                   backgroundColor: view === 'monthly' ? pinkColor : 'transparent', 
//                   color: view === 'monthly' ? 'white' : pinkColor,
//                   opacity: isTransitioning ? 0.6 : 1,
//                   cursor: isTransitioning ? 'not-allowed' : 'pointer'
//                 }}
//               >
//                 Monthly Income
//               </button> */}

//               <button
//                 className={`income-toggle-btn ${view === "daily" ? "active" : ""}`}
//                 onClick={() => handleViewChange("daily")}
//                 disabled={isTransitioning}
//               >
//                 Daily Income
//               </button>

//               <button
//                 className={`income-toggle-btn ${view === "monthly" ? "active" : ""}`}
//                 onClick={() => handleViewChange("monthly")}
//                 disabled={isTransitioning}
//               >
//                 Monthly Income
//               </button>
//             </div>
//           </div>

//           {/* Show loading during transition */}
//           {isTransitioning && (
//             <div style={styles.loadingContainer}>
//               <div className="text-center">
//                 <Loader2 size={48} className="spin mb-3" />
//                 <p>Switching to {view}...</p>
//               </div>
//             </div>
//           )}

//           {/* No Data State */}
//           {!isTransitioning && earnings.length === 0 && (
//             <div className="text-center py-5 fade-in">
//               <p className="text-muted">No {view} income data available.</p>
//               <Button
//                 variant="outline-primary"
//                 onClick={() => window.location.reload()}
//                 className="mt-2"
//               >
//                 Refresh Data
//               </Button>
//             </div>
//           )}

//           {/* Daily View - Side by Side Layout (Chart + Data) */}
//           {!isTransitioning && view === "daily" && earnings.length > 0 && (
//             <div className="fade-in">
//               <Card style={styles.incomeCard}>
//                 <Row className="align-items-stretch">
//                   {/* Left Side - Chart (8 columns on large, full width on small) */}
//                   <Col lg={8} md={12} className="mb-4 mb-lg-0">
//                     <div className="position-relative" style={{ zIndex: 1 }}>
//                       <div className="d-flex justify-content-between align-items-start mb-4">
//                         <div>
//                           <div className="d-flex align-items-baseline gap-2 mb-1">
//                             <span className="font-dollar">฿</span>
//                             <span className="display-3 fw-bold">
//                               {totalIncome.toLocaleString("en-US", {
//                                 minimumFractionDigits: 2,
//                                 maximumFractionDigits: 2,
//                               })}
//                             </span>
//                           </div>
//                           <p className="opacity-75 h5">Daily Income</p>
//                         </div>
//                         <span className="display-6 fw-bold opacity-25">
//                           {new Date().getFullYear()}
//                         </span>
//                       </div>

//                       <div style={{ height: "260px", width: "100%" }}>
//                         <ResponsiveContainer width="100%" height="100%">
//                           <AreaChart
//                             data={chartData}
//                             key={`daily-chart-${earnings.length}`}
//                           >
//                             <defs>
//                               <linearGradient
//                                 id="colorIncome"
//                                 x1="0"
//                                 y1="0"
//                                 x2="0"
//                                 y2="1"
//                               >
//                                 <stop
//                                   offset="5%"
//                                   stopColor="#ffffff"
//                                   stopOpacity={0.4}
//                                 />
//                                 <stop
//                                   offset="95%"
//                                   stopColor="#ffffff"
//                                   stopOpacity={0}
//                                 />
//                               </linearGradient>
//                             </defs>
//                             <XAxis
//                               dataKey="day"
//                               axisLine={false}
//                               tickLine={false}
//                               tick={{ fill: "#ffffff", fontSize: 12 }}
//                               dy={10}
//                             />
//                             <Tooltip
//                               contentStyle={{
//                                 backgroundColor: "#ffffff",
//                                 borderRadius: "8px",
//                                 border: "none",
//                                 color: pinkColor,
//                               }}
//                               itemStyle={{ color: pinkColor }}
//                               formatter={(value) => [
//                                 `฿ ${value.toLocaleString()}`,
//                                 "Income",
//                               ]}
//                             />
//                             <Area
//                               type="monotone"
//                               dataKey="income"
//                               stroke="#ffffff"
//                               strokeWidth={3}
//                               fillOpacity={1}
//                               fill="url(#colorIncome)"
//                               dot={{
//                                 r: 6,
//                                 fill: "#ffffff",
//                                 strokeWidth: 2,
//                                 stroke: pinkColor,
//                               }}
//                               isAnimationActive={true}
//                               animationDuration={1000}
//                             />
//                           </AreaChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
//                   </Col>

//                   {/* Right Side - Data Table (4 columns on large, full width on small) */}
//                   <Col lg={4} md={12}>
//                     <div style={styles.dailyTableBox}>
//                       <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                         <span>Date</span>
//                         <span className="mx-5">Income</span>
//                       </div>
//                       <div
//                         style={{ maxHeight: "300px", overflowY: "auto" }}
//                         className="custom-scrollbar"
//                       >
//                         {tableData.map((row, idx) => (
//                           <div
//                             key={`daily-${idx}`}
//                             className="d-flex justify-content-between small mb-2"
//                           >
//                             <span className="opacity-75">{row.date}</span>
//                             <span className="fw-bold mx-3">{row.displayIncome}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </Col>
//                 </Row>
//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: "-100px",
//                     right: "-100px",
//                     width: "250px",
//                     height: "250px",
//                     backgroundColor: "rgba(255,255,255,0.1)",
//                     borderRadius: "50%",
//                     filter: "blur(50px)",
//                   }}
//                 ></div>
//               </Card>
//             </div>
//           )}

//           {/* Monthly View - Side by Side Layout with All 12 Months */}
//           {!isTransitioning && view === "monthly" && (
//             <div className="fade-in">
//               {!hasMonthlyData ? (
//                 <div className="text-center py-5">
//                   <p className="text-muted">
//                     No monthly income data available.
//                   </p>
//                   <Button
//                     variant="outline-primary"
//                     onClick={() => window.location.reload()}
//                     className="mt-2"
//                   >
//                     Refresh Data
//                   </Button>
//                 </div>
//               ) : (
//                 Object.keys(monthlyByYear)
//                   .sort((a, b) => b - a)
//                   .map((year) => {
//                     const yearEarnings = monthlyByYear[year];
//                     const yearChartData = formatMonthlyChartData(
//                       yearEarnings,
//                       year,
//                     );
//                     const yearTableData = formatMonthlyTableData(
//                       yearEarnings,
//                       year,
//                     );
//                     const yearTotalIncome = yearEarnings.reduce(
//                       (sum, item) => sum + parseFloat(item.total_earnings || 0),
//                       0,
//                     );

//                     return (
//                       <Card
//                         key={year}
//                         style={styles.incomeCard}
//                         className="mb-4"
//                       >
//                         <Row className="align-items-stretch">
//                           {/* Left Side - Chart with all 12 months */}
//                           <Col lg={8} md={12} className="mb-4 mb-lg-0">
//                             <div
//                               className="position-relative"
//                               style={{ zIndex: 1 }}
//                             >
//                               <div className="d-flex justify-content-between align-items-start mb-4">
//                                 <div>
//                                   <div className="d-flex align-items-baseline gap-2 mb-1">
//                                     <span className="font-dollar">
//                                       ฿
//                                     </span>
//                                     <span className="display-3 fw-bold">
//                                       {yearTotalIncome.toLocaleString("en-US", {
//                                         minimumFractionDigits: 2,
//                                         maximumFractionDigits: 2,
//                                       })}
//                                     </span>
//                                   </div>
//                                   <p className="opacity-75 h5">
//                                     Monthly Income - {year}
//                                   </p>
//                                 </div>
//                                 <span className="display-6 fw-bold opacity-25">
//                                   {year}
//                                 </span>
//                               </div>

//                               <div style={{ height: "260px", width: "100%" }}>
//                                 <ResponsiveContainer width="100%" height="100%">
//                                   <AreaChart
//                                     data={yearChartData}
//                                     key={`monthly-chart-${year}-${earnings.length}`}
//                                   >
//                                     <defs>
//                                       <linearGradient
//                                         id={`colorIncome${year}`}
//                                         x1="0"
//                                         y1="0"
//                                         x2="0"
//                                         y2="1"
//                                       >
//                                         <stop
//                                           offset="5%"
//                                           stopColor="#ffffff"
//                                           stopOpacity={0.4}
//                                         />
//                                         <stop
//                                           offset="95%"
//                                           stopColor="#ffffff"
//                                           stopOpacity={0}
//                                         />
//                                       </linearGradient>
//                                     </defs>
//                                     <XAxis
//                                       dataKey="month"
//                                       axisLine={false}
//                                       tickLine={false}
//                                       tick={{ fill: "#ffffff", fontSize: 10 }}
//                                       dy={10}
//                                     />
//                                     <Tooltip
//                                       contentStyle={{
//                                         backgroundColor: "#ffffff",
//                                         borderRadius: "8px",
//                                         border: "none",
//                                         color: pinkColor,
//                                       }}
//                                       formatter={(value, name, props) => {
//                                         const hasData = props?.payload?.hasData;
//                                         return [
//                                           hasData
//                                             ? `฿ ${value.toLocaleString()}`
//                                             : "—",
//                                           "Income",
//                                         ];
//                                       }}
//                                     />
//                                     <Area
//                                       type="monotone"
//                                       dataKey="income"
//                                       stroke="#ffffff"
//                                       strokeWidth={2}
//                                       fillOpacity={1}
//                                       fill={`url(#colorIncome${year})`}
//                                       dot={(props) => {
//                                         const { cx, cy, payload } = props;
//                                         const hasData = payload?.hasData;
//                                         return (
//                                           <circle
//                                             cx={cx}
//                                             cy={cy}
//                                             r={hasData ? 4 : 0}
//                                             fill="#ffffff"
//                                           />
//                                         );
//                                       }}
//                                       isAnimationActive={true}
//                                       animationDuration={1000}
//                                     />
//                                   </AreaChart>
//                                 </ResponsiveContainer>
//                               </div>
//                             </div>
//                           </Col>

//                           {/* Right Side - Data with all 12 months (show "—" for empty) */}
//                           <Col lg={4} md={12}>
//                             <div style={styles.monthlyTableBox}>
//                               <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                                 <span>Month</span>
//                                 <span className="mx-5">Income</span>
//                               </div>
//                               <div
//                                 style={{
//                                   maxHeight: "300px",
//                                   overflowY: "auto",
//                                 }}
//                                 className="custom-scrollbar"
//                               >
//                                 {/* {yearTableData.map((m, idx) => (
//                                   <div
//                                     key={`month-${year}-${idx}`}
//                                     className="d-flex justify-content-between small mb-2"
//                                   >
//                                     <span className="opacity-75">{m.date}</span>
//                                     <span
//                                       className={`${m.hasData ? "fw-bold" : "opacity-50"} mx-2`}
//                                     >
//                                       {m.displayIncome}
//                                     </span>
//                                   </div>
//                                 ))} */}

//                                 {yearTableData.map((m, idx) => (
//                                   <div
//                                     key={`month-${year}-${idx}`}
//                                     className="d-flex justify-content-between small mb-2"
//                                   >
//                                     {/* <span className="opacity-75">{m.date}</span> */}
//                                     <span className="opacity-75">
//                                     {m.date.split(" ")[0]}
//                                     </span>
//                                     <span
//                                       className={`${m.hasData ? "fw-bold" : "opacity-50"} mx-4`}
//                                     >
//                                       {m.displayIncome}
//                                     </span>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           </Col>
//                         </Row>
//                       </Card>
//                     );
//                   })
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         .fade-in { animation: fadeIn 0.5s ease-in-out; }
//         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
//         .custom-scrollbar::-webkit-scrollbar { width: 4px; }
//         .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 10px; }
        
//         /* Responsive adjustments */
//         @media (max-width: 991px) {
//           .mainContent {
//             margin-left: 0 !important;
//             width: 100% !important;
//           }
//         }
        
//         @media (max-width: 768px) {
//           .display-3 {
//             font-size: 2.5rem;
//           }
//           .display-6 {
//             font-size: 1.5rem;
//           }
//         }
//       `,
//         }}
//       />
//     </div>
//   );
// }


















// import React, { useState, useEffect, useMemo } from "react";
// import { Loader2 } from "lucide-react";
// import { XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Table,
//   Card,
//   Badge,
// } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import "../css/DailySeeMore.css";

// // --- API Configuration ---
// const API_BASE_URL = "https://sagarxo.app/web-api";
// const getAuthToken = () => localStorage.getItem("token") || "";

// // --- Map UI view to API type ---
// const API_TYPE_MAP = {
//   daily: "daily",
//   monthly: "monthly",
// };

// // --- All 12 months for display ---
// const ALL_MONTHS = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const ALL_MONTHS_SHORT = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
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
//   const apiType = API_TYPE_MAP[type] || type;
//   const response = await fetch(
//     `${API_BASE_URL}/customer/earnings?type=${apiType}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: getAuthToken(),
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();
//   if (!data.success) {
//     throw new Error(data.message || "Failed to fetch earnings");
//   }

//   return data.data.earnings || [];
// };

// // --- Daily formatters (Full 7 days) ---
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
//       day: getDayNameFromDateObj(date),
//       income: value,
//       date: dateStr,
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
//       date: dateStr,
//       income: hasData ? value : 0,
//       displayIncome: hasData ? `${value.toFixed(2)} THB` : "—",
//     };
//   });
// };

// // --- Monthly formatters (Full 12 months) ---
// const formatMonthlyChartData = (earnings, year) => {
//   const dataMap = {};
//   earnings.forEach((item) => {
//     const monthName = item.month;
//     if (monthName) {
//       dataMap[monthName] = parseFloat(item.total_earnings || 0);
//     }
//   });

//   return ALL_MONTHS.map((monthName, index) => {
//     const hasData = dataMap[monthName] !== undefined;
//     const income = dataMap[monthName] || 0;
//     return {
//       day: ALL_MONTHS_SHORT[index],
//       month: ALL_MONTHS_SHORT[index],
//       income: hasData ? income : 0,
//       year: year,
//       hasData: hasData,
//       fullData: hasData
//         ? { month: monthName, year: year, total_earnings: income }
//         : null,
//     };
//   });
// };

// const formatMonthlyTableData = (earnings, year) => {
//   const dataMap = {};
//   earnings.forEach((item) => {
//     const monthName = item.month;
//     if (monthName) {
//       dataMap[monthName] = parseFloat(item.total_earnings || 0);
//     }
//   });

//   return ALL_MONTHS.map((monthName, index) => {
//     const hasData = dataMap[monthName] !== undefined;
//     const income = dataMap[monthName] || 0;
//     return {
//       date: `${monthName} ${year}`,
//       monthShort: ALL_MONTHS_SHORT[index],
//       income: hasData ? income : 0,
//       displayIncome: hasData ? `${income.toFixed(2)} THB` : "—",
//       hasData: hasData,
//     };
//   });
// };

// // --- Custom Styles ---
// const pinkColor = "#f06281";

// const styles = {
//   sidebar: {
//     backgroundColor: pinkColor,
//     minHeight: "100vh",
//     width: "260px",
//     position: "fixed",
//     left: 0,
//     top: 0,
//     zIndex: 1000,
//     padding: "2rem 0",
//     boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
//   },
//   sidebarItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "1rem",
//     padding: "0.8rem 1.5rem",
//     color: "white",
//     textDecoration: "none",
//     fontSize: "0.9rem",
//     fontWeight: 600,
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//     border: "none",
//     background: "none",
//     width: "100%",
//     textAlign: "left",
//   },
//   sidebarItemActive: {
//     backgroundColor: "white",
//     color: pinkColor,
//     borderRadius: "50px 0 0 50px",
//     marginLeft: "1.5rem",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//   },
//   header: {
//     backgroundColor: "white",
//     height: "64px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0 2rem",
//     borderBottom: "1px solid #eee",
//     position: "sticky",
//     top: 0,
//     zIndex: 900,
//   },
//   toggleContainer: {
//     display: "flex",
//     justifyContent: "center",
//     margin: "2.5rem 0",
//   },
//   toggleBox: {
//     backgroundColor: "white",
//     border: `1px solid ${pinkColor}4D`,
//     borderRadius: "50px",
//     padding: "0.4rem",
//     display: "inline-flex",
//     boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//   },
//   toggleBtn: {
//     padding: "0.6rem 2.5rem",
//     borderRadius: "50px",
//     fontSize: "0.875rem",
//     fontWeight: 700,
//     border: "none",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//   },
//   incomeCard: {
//     backgroundColor: pinkColor,
//     borderRadius: "1.5rem",
//     padding: "2rem",
//     color: "white",
//     border: "none",
//     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
//     position: "relative",
//     overflow: "hidden",
//   },
//   tableCard: {
//     borderRadius: "1.5rem",
//     border: "1px solid #eee",
//     boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//     overflow: "hidden",
//     marginTop: "2rem",
//     backgroundColor: "white",
//   },
//   dailyTableBox: {
//     backgroundColor: "rgba(255, 255, 255, 0.15)",
//     backdropFilter: "blur(10px)",
//     borderRadius: "1rem",
//     padding: "1.2rem",
//     border: "1px solid rgba(255, 255, 255, 0.2)",
//     width: "100%",
//     height: "100%",
//   },
//   monthlyTableBox: {
//     backgroundColor: "rgba(255, 255, 255, 0.15)",
//     backdropFilter: "blur(10px)",
//     borderRadius: "1rem",
//     padding: "1.2rem",
//     border: "1px solid rgba(255, 255, 255, 0.2)",
//     width: "100%",
//     height: "100%",
//   },
//   mainContent: {
//     marginLeft: "260px",
//     width: "calc(100% - 260px)",
//     minHeight: "100vh",
//     backgroundColor: "#f8f9fa",
//   },
//   loadingContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "300px",
//     color: pinkColor,
//   },
//   errorContainer: {
//     padding: "2rem",
//     textAlign: "center",
//     color: "#dc3545",
//   },
//   "@media (max-width: 991px)": {
//     mainContent: {
//       marginLeft: "0",
//       width: "100%",
//     },
//   },
// };

// export default function DailySeeMore() {
//   const { type: urlType } = useParams();
//   const navigate = useNavigate();

//   const [view, setView] = useState("daily");
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   useEffect(() => {
//     const validType = urlType === "monthly" ? "monthly" : "daily";
//     if (validType !== view) {
//       setView(validType);
//     }
//   }, [urlType]);

//   useEffect(() => {
//     let isMounted = true;

//     const loadEarnings = async () => {
//       if (isMounted) {
//         setLoading(true);
//         setError(null);
//         setEarnings([]);
//       }

//       try {
//         const data = await fetchCustomerEarnings(view);
//         if (isMounted) {
//           setEarnings(data);
//         }
//       } catch (err) {
//         if (isMounted) {
//           setError(err.message);
//           setEarnings([]);
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//           setIsTransitioning(false);
//         }
//       }
//     };

//     loadEarnings();

//     return () => {
//       isMounted = false;
//     };
//   }, [view]);

//   // Daily data (full 7 days)
//   const dailyChartData = useMemo(() => {
//     if (view === "daily") return formatDailyDataForChart(earnings);
//     return [];
//   }, [earnings, view]);

//   const dailyTableData = useMemo(() => {
//     if (view === "daily") return formatDailyDataForTable(earnings);
//     return [];
//   }, [earnings, view]);

//   // Total income (only from actual data)
//   const totalIncome = useMemo(() => {
//     return earnings.reduce((sum, item) => sum + parseFloat(item.total_earnings || 0), 0);
//   }, [earnings]);

//   // Group monthly data by year
//   const groupByYear = (data) => {
//     const grouped = {};
//     data.forEach((item) => {
//       const year = item.year || new Date().getFullYear();
//       if (!grouped[year]) grouped[year] = [];
//       grouped[year].push(item);
//     });
//     return grouped;
//   };

//   const monthlyByYear = view === "monthly" ? groupByYear(earnings) : {};
//   const hasMonthlyData = Object.keys(monthlyByYear).length > 0;

//   const handleViewChange = (newView) => {
//     if (newView === view) return;
//     setIsTransitioning(true);
//     setView(newView);
//     navigate(`/dailyseemore/${newView}`, { replace: true });
//   };

//   if (loading && !isTransitioning) {
//     return (
//       <div className="d-flex">
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} activeItem="earnings" />
//         <div style={styles.mainContent} className="mainContent">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div style={styles.loadingContainer}>
//             <div className="text-center">
//               <Loader2 size={48} className="spin mb-3" />
//               <p>Loading {view} earnings...</p>
//             </div>
//           </div>
//         </div>
//         <style
//           dangerouslySetInnerHTML={{
//             __html: `
//           .spin { animation: spin 1s linear infinite; }
//           @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         `,
//           }}
//         />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="d-flex">
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} activeItem="earnings" />
//         <div style={styles.mainContent} className="mainContent">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div style={styles.errorContainer}>
//             <h4>Error Loading Data</h4>
//             <p>{error}</p>
//             <Button
//               variant="outline-danger"
//               onClick={() => window.location.reload()}
//               className="mt-3"
//             >
//               Retry
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex">
//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} activeItem="earnings" />
//       <div style={styles.mainContent} className="mainContent">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//         <div className="container-lg">
//           {/* Toggle Buttons */}
//           <div style={styles.toggleContainer}>
//             <div style={styles.toggleBox}>
//               <button
//                 className={`income-toggle-btn ${view === "daily" ? "active" : ""}`}
//                 onClick={() => handleViewChange("daily")}
//                 disabled={isTransitioning}
//               >
//                 Daily Income
//               </button>
//               <button
//                 className={`income-toggle-btn ${view === "monthly" ? "active" : ""}`}
//                 onClick={() => handleViewChange("monthly")}
//                 disabled={isTransitioning}
//               >
//                 Monthly Income
//               </button>
//             </div>
//           </div>

//           {isTransitioning && (
//             <div style={styles.loadingContainer}>
//               <div className="text-center">
//                 <Loader2 size={48} className="spin mb-3" />
//                 <p>Switching to {view}...</p>
//               </div>
//             </div>
//           )}

//           {!isTransitioning && earnings.length === 0 && (
//             <div className="text-center py-5 fade-in">
//               <p className="text-muted">No {view} income data available.</p>
//               <Button
//                 variant="outline-primary"
//                 onClick={() => window.location.reload()}
//                 className="mt-2"
//               >
//                 Refresh Data
//               </Button>
//             </div>
//           )}

//           {/* Daily View */}
//           {!isTransitioning && view === "daily" && (
//             <div className="fade-in">
//               <Card style={styles.incomeCard}>
//                 <Row className="align-items-stretch">
//                   <Col lg={8} md={12} className="mb-4 mb-lg-0">
//                     <div className="position-relative" style={{ zIndex: 1 }}>
//                       <div className="d-flex justify-content-between align-items-start mb-4">
//                         <div>
//                           <div className="d-flex align-items-baseline gap-2 mb-1">
//                             <span className="font-dollar">฿</span>
//                             <span className="display-3 fw-bold">
//                               {totalIncome.toLocaleString("en-US", {
//                                 minimumFractionDigits: 2,
//                                 maximumFractionDigits: 2,
//                               })}
//                             </span>
//                           </div>
//                           <p className="opacity-75 h5">Daily Income</p>
//                         </div>
//                         <span className="display-6 fw-bold opacity-25">
//                           {new Date().getFullYear()}
//                         </span>
//                       </div>

//                       <div style={{ height: "260px", width: "100%" }}>
//                         <ResponsiveContainer width="100%" height="100%">
//                           <AreaChart data={dailyChartData}>
//                             <defs>
//                               <linearGradient
//                                 id="colorIncome"
//                                 x1="0"
//                                 y1="0"
//                                 x2="0"
//                                 y2="1"
//                               >
//                                 <stop
//                                   offset="5%"
//                                   stopColor="#ffffff"
//                                   stopOpacity={0.4}
//                                 />
//                                 <stop
//                                   offset="95%"
//                                   stopColor="#ffffff"
//                                   stopOpacity={0}
//                                 />
//                               </linearGradient>
//                             </defs>
//                             <XAxis
//                               dataKey="day"
//                               axisLine={false}
//                               tickLine={false}
//                               tick={{ fill: "#ffffff", fontSize: 12 }}
//                               dy={10}
//                             />
//                             <Tooltip
//                               contentStyle={{
//                                 backgroundColor: "#ffffff",
//                                 borderRadius: "8px",
//                                 border: "none",
//                                 color: pinkColor,
//                               }}
//                               itemStyle={{ color: pinkColor }}
//                               formatter={(value) => [
//                                 `฿ ${value.toLocaleString()}`,
//                                 "Income",
//                               ]}
//                             />
//                             <Area
//                               type="monotone"
//                               dataKey="income"
//                               stroke="#ffffff"
//                               strokeWidth={3}
//                               fillOpacity={1}
//                               fill="url(#colorIncome)"
//                               dot={{
//                                 r: 6,
//                                 fill: "#ffffff",
//                                 strokeWidth: 2,
//                                 stroke: pinkColor,
//                               }}
//                               isAnimationActive={true}
//                               animationDuration={1000}
//                             />
//                           </AreaChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
//                   </Col>

//                   <Col lg={4} md={12}>
//                     <div style={styles.dailyTableBox}>
//                       <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                         <span>Date</span>
//                         <span className="mx-5">Income</span>
//                       </div>
//                       <div
//                         style={{ maxHeight: "300px", overflowY: "auto" }}
//                         className="custom-scrollbar"
//                       >
//                         {dailyTableData.map((row, idx) => (
//                           <div
//                             key={`daily-${idx}`}
//                             className="d-flex justify-content-between small mb-2"
//                           >
//                             <span className="opacity-75">{row.date}</span>
//                             <span className="fw-bold mx-3">{row.displayIncome}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </Col>
//                 </Row>
//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: "-100px",
//                     right: "-100px",
//                     width: "250px",
//                     height: "250px",
//                     backgroundColor: "rgba(255,255,255,0.1)",
//                     borderRadius: "50%",
//                     filter: "blur(50px)",
//                   }}
//                 ></div>
//               </Card>
//             </div>
//           )}

//           {/* Monthly View */}
//           {!isTransitioning && view === "monthly" && (
//             <div className="fade-in">
//               {!hasMonthlyData ? (
//                 <div className="text-center py-5">
//                   <p className="text-muted">No monthly income data available.</p>
//                   <Button
//                     variant="outline-primary"
//                     onClick={() => window.location.reload()}
//                     className="mt-2"
//                   >
//                     Refresh Data
//                   </Button>
//                 </div>
//               ) : (
//                 Object.keys(monthlyByYear)
//                   .sort((a, b) => b - a)
//                   .map((year) => {
//                     const yearEarnings = monthlyByYear[year];
//                     const yearChartData = formatMonthlyChartData(yearEarnings, year);
//                     const yearTableData = formatMonthlyTableData(yearEarnings, year);
//                     const yearTotalIncome = yearEarnings.reduce(
//                       (sum, item) => sum + parseFloat(item.total_earnings || 0),
//                       0
//                     );

//                     return (
//                       <Card key={year} style={styles.incomeCard} className="mb-4">
//                         <Row className="align-items-stretch">
//                           <Col lg={8} md={12} className="mb-4 mb-lg-0">
//                             <div className="position-relative" style={{ zIndex: 1 }}>
//                               <div className="d-flex justify-content-between align-items-start mb-4">
//                                 <div>
//                                   <div className="d-flex align-items-baseline gap-2 mb-1">
//                                     <span className="font-dollar">฿</span>
//                                     <span className="display-3 fw-bold">
//                                       {yearTotalIncome.toLocaleString("en-US", {
//                                         minimumFractionDigits: 2,
//                                         maximumFractionDigits: 2,
//                                       })}
//                                     </span>
//                                   </div>
//                                   <p className="opacity-75 h5">
//                                     Monthly Income - {year}
//                                   </p>
//                                 </div>
//                                 <span className="display-6 fw-bold opacity-25">
//                                   {year}
//                                 </span>
//                               </div>

//                               <div style={{ height: "260px", width: "100%" }}>
//                                 <ResponsiveContainer width="100%" height="100%">
//                                   <AreaChart data={yearChartData}>
//                                     <defs>
//                                       <linearGradient
//                                         id={`colorIncome${year}`}
//                                         x1="0"
//                                         y1="0"
//                                         x2="0"
//                                         y2="1"
//                                       >
//                                         <stop
//                                           offset="5%"
//                                           stopColor="#ffffff"
//                                           stopOpacity={0.4}
//                                         />
//                                         <stop
//                                           offset="95%"
//                                           stopColor="#ffffff"
//                                           stopOpacity={0}
//                                         />
//                                       </linearGradient>
//                                     </defs>
//                                     <XAxis
//                                       dataKey="month"
//                                       axisLine={false}
//                                       tickLine={false}
//                                       tick={{ fill: "#ffffff", fontSize: 10 }}
//                                       dy={10}
//                                     />
//                                     <Tooltip
//                                       contentStyle={{
//                                         backgroundColor: "#ffffff",
//                                         borderRadius: "8px",
//                                         border: "none",
//                                         color: pinkColor,
//                                       }}
//                                       formatter={(value, name, props) => {
//                                         const hasData = props?.payload?.hasData;
//                                         return [
//                                           hasData ? `฿ ${value.toLocaleString()}` : "—",
//                                           "Income",
//                                         ];
//                                       }}
//                                     />
//                                     <Area
//                                       type="monotone"
//                                       dataKey="income"
//                                       stroke="#ffffff"
//                                       strokeWidth={2}
//                                       fillOpacity={1}
//                                       fill={`url(#colorIncome${year})`}
//                                       dot={(props) => {
//                                         const { cx, cy, payload } = props;
//                                         const hasData = payload?.hasData;
//                                         return (
//                                           <circle
//                                             cx={cx}
//                                             cy={cy}
//                                             r={hasData ? 4 : 0}
//                                             fill="#ffffff"
//                                           />
//                                         );
//                                       }}
//                                       isAnimationActive={true}
//                                       animationDuration={1000}
//                                     />
//                                   </AreaChart>
//                                 </ResponsiveContainer>
//                               </div>
//                             </div>
//                           </Col>

//                           <Col lg={4} md={12}>
//                             <div style={styles.monthlyTableBox}>
//                               <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                                 <span>Month</span>
//                                 <span className="mx-5">Income</span>
//                               </div>
//                               <div
//                                 style={{ maxHeight: "300px", overflowY: "auto" }}
//                                 className="custom-scrollbar"
//                               >
//                                 {yearTableData.map((m, idx) => (
//                                   <div
//                                     key={`month-${year}-${idx}`}
//                                     className="d-flex justify-content-between small mb-2"
//                                   >
//                                     <span className="opacity-75">
//                                       {m.date.split(" ")[0]}
//                                     </span>
//                                     <span
//                                       className={`${m.hasData ? "fw-bold" : "opacity-50"} mx-4`}
//                                     >
//                                       {m.displayIncome}
//                                     </span>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           </Col>
//                         </Row>
//                       </Card>
//                     );
//                   })
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         .fade-in { animation: fadeIn 0.5s ease-in-out; }
//         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
//         .custom-scrollbar::-webkit-scrollbar { width: 4px; }
//         .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 10px; }
        
//         @media (max-width: 991px) {
//           .mainContent {
//             margin-left: 0 !important;
//             width: 100% !important;
//           }
//         }
        
//         @media (max-width: 768px) {
//           .display-3 {
//             font-size: 2.5rem;
//           }
//           .display-6 {
//             font-size: 1.5rem;
//           }
//         }
//       `,
//         }}
//       />
//     </div>
//   );
// }






















// import React, { useState, useEffect, useMemo } from "react";
// import { Loader2 } from "lucide-react";
// import { XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Table,
//   Card,
//   Badge,
// } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import "../css/DailySeeMore.css";

// // --- API Configuration ---
// const API_BASE_URL = "https://sagarxo.app/web-api";
// const getAuthToken = () => localStorage.getItem("token") || "";

// // --- Map UI view to API type ---
// const API_TYPE_MAP = {
//   daily: "daily",
//   monthly: "monthly",
// };

// // --- All 12 months for display ---
// const ALL_MONTHS = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const ALL_MONTHS_SHORT = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
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
//   const apiType = API_TYPE_MAP[type] || type;
//   const response = await fetch(
//     `${API_BASE_URL}/customer/earnings?type=${apiType}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: getAuthToken(),
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();
//   if (!data.success) {
//     throw new Error(data.message || "Failed to fetch earnings");
//   }

//   return data.data.earnings || [];
// };

// // --- Daily formatters (Full 7 days) ---
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
//       day: getDayNameFromDateObj(date),
//       income: value,
//       date: dateStr,
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
//       date: dateStr,
//       income: hasData ? value : 0,
//       displayIncome: hasData ? `${value.toFixed(2)} THB` : "—",
//     };
//   });
// };

// // --- Monthly formatters (Full 12 months) ---
// const formatMonthlyChartData = (earnings, year) => {
//   const dataMap = {};
//   earnings.forEach((item) => {
//     const monthName = item.month;
//     if (monthName) {
//       dataMap[monthName] = parseFloat(item.total_earnings || 0);
//     }
//   });

//   return ALL_MONTHS.map((monthName, index) => {
//     const hasData = dataMap[monthName] !== undefined;
//     const income = dataMap[monthName] || 0;
//     return {
//       day: ALL_MONTHS_SHORT[index],
//       month: ALL_MONTHS_SHORT[index],
//       income: hasData ? income : 0,
//       year: year,
//       hasData: hasData,
//       fullData: hasData
//         ? { month: monthName, year: year, total_earnings: income }
//         : null,
//     };
//   });
// };

// const formatMonthlyTableData = (earnings, year) => {
//   const dataMap = {};
//   earnings.forEach((item) => {
//     const monthName = item.month;
//     if (monthName) {
//       dataMap[monthName] = parseFloat(item.total_earnings || 0);
//     }
//   });

//   return ALL_MONTHS.map((monthName, index) => {
//     const hasData = dataMap[monthName] !== undefined;
//     const income = dataMap[monthName] || 0;
//     return {
//       date: `${monthName} ${year}`,
//       monthShort: ALL_MONTHS_SHORT[index],
//       income: hasData ? income : 0,
//       displayIncome: hasData ? `${income.toFixed(2)} THB` : "—",
//       hasData: hasData,
//     };
//   });
// };

// // --- Custom Styles ---
// const pinkColor = "#f06281";

// const styles = {
//   sidebar: {
//     backgroundColor: pinkColor,
//     minHeight: "100vh",
//     width: "260px",
//     position: "fixed",
//     left: 0,
//     top: 0,
//     zIndex: 1000,
//     padding: "2rem 0",
//     boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
//   },
//   sidebarItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "1rem",
//     padding: "0.8rem 1.5rem",
//     color: "white",
//     textDecoration: "none",
//     fontSize: "0.9rem",
//     fontWeight: 600,
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//     border: "none",
//     background: "none",
//     width: "100%",
//     textAlign: "left",
//   },
//   sidebarItemActive: {
//     backgroundColor: "white",
//     color: pinkColor,
//     borderRadius: "50px 0 0 50px",
//     marginLeft: "1.5rem",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//   },
//   header: {
//     backgroundColor: "white",
//     height: "64px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0 2rem",
//     borderBottom: "1px solid #eee",
//     position: "sticky",
//     top: 0,
//     zIndex: 900,
//   },
//   toggleContainer: {
//     display: "flex",
//     justifyContent: "center",
//     margin: "2.5rem 0",
//   },
//   toggleBox: {
//     backgroundColor: "white",
//     border: `1px solid ${pinkColor}4D`,
//     borderRadius: "50px",
//     padding: "0.4rem",
//     display: "inline-flex",
//     boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//   },
//   toggleBtn: {
//     padding: "0.6rem 2.5rem",
//     borderRadius: "50px",
//     fontSize: "0.875rem",
//     fontWeight: 700,
//     border: "none",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//   },
//   incomeCard: {
//     backgroundColor: pinkColor,
//     borderRadius: "1.5rem",
//     padding: "2rem",
//     color: "white",
//     border: "none",
//     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
//     position: "relative",
//     overflow: "hidden",
//   },
//   tableCard: {
//     borderRadius: "1.5rem",
//     border: "1px solid #eee",
//     boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//     overflow: "hidden",
//     marginTop: "2rem",
//     backgroundColor: "white",
//   },
//   dailyTableBox: {
//     backgroundColor: "rgba(255, 255, 255, 0.15)",
//     backdropFilter: "blur(10px)",
//     borderRadius: "1rem",
//     padding: "1.2rem",
//     border: "1px solid rgba(255, 255, 255, 0.2)",
//     width: "100%",
//     height: "100%",
//   },
//   monthlyTableBox: {
//     backgroundColor: "rgba(255, 255, 255, 0.15)",
//     backdropFilter: "blur(10px)",
//     borderRadius: "1rem",
//     padding: "1.2rem",
//     border: "1px solid rgba(255, 255, 255, 0.2)",
//     width: "100%",
//     height: "100%",
//   },
//   mainContent: {
//     marginLeft: "260px",
//     width: "calc(100% - 260px)",
//     minHeight: "100vh",
//     backgroundColor: "#f8f9fa",
//   },
//   loadingContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "300px",
//     color: pinkColor,
//   },
//   errorContainer: {
//     padding: "2rem",
//     textAlign: "center",
//     color: "#dc3545",
//   },
//   "@media (max-width: 991px)": {
//     mainContent: {
//       marginLeft: "0",
//       width: "100%",
//     },
//   },
// };

// export default function DailySeeMore() {
//   const { type: urlType } = useParams();
//   const navigate = useNavigate();

//   const [view, setView] = useState("daily");
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   useEffect(() => {
//     const validType = urlType === "monthly" ? "monthly" : "daily";
//     if (validType !== view) {
//       setView(validType);
//     }
//   }, [urlType]);

//   useEffect(() => {
//     let isMounted = true;

//     const loadEarnings = async () => {
//       if (isMounted) {
//         setLoading(true);
//         setError(null);
//         setEarnings([]);
//       }

//       try {
//         const data = await fetchCustomerEarnings(view);
//         if (isMounted) {
//           setEarnings(data);
//         }
//       } catch (err) {
//         if (isMounted) {
//           setError(err.message);
//           setEarnings([]);
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//           setIsTransitioning(false);
//         }
//       }
//     };

//     loadEarnings();

//     return () => {
//       isMounted = false;
//     };
//   }, [view]);

//   // Daily data (full 7 days)
//   const dailyChartData = useMemo(() => {
//     if (view === "daily") return formatDailyDataForChart(earnings);
//     return [];
//   }, [earnings, view]);

//   const dailyTableData = useMemo(() => {
//     if (view === "daily") return formatDailyDataForTable(earnings);
//     return [];
//   }, [earnings, view]);

//   // Total income (only from actual data)
//   const totalIncome = useMemo(() => {
//     return earnings.reduce((sum, item) => sum + parseFloat(item.total_earnings || 0), 0);
//   }, [earnings]);

//   // Group monthly data by year
//   const groupByYear = (data) => {
//     const grouped = {};
//     data.forEach((item) => {
//       const year = item.year || new Date().getFullYear();
//       if (!grouped[year]) grouped[year] = [];
//       grouped[year].push(item);
//     });
//     return grouped;
//   };

//   const monthlyByYear = view === "monthly" ? groupByYear(earnings) : {};
//   const hasMonthlyData = Object.keys(monthlyByYear).length > 0;

//   const handleViewChange = (newView) => {
//     if (newView === view) return;
//     setIsTransitioning(true);
//     setView(newView);
//     navigate(`/dailyseemore/${newView}`, { replace: true });
//   };

//   if (loading && !isTransitioning) {
//     return (
//       <div className="d-flex">
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} activeItem="earnings" />
//         <div style={styles.mainContent} className="mainContent">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div style={styles.loadingContainer}>
//             <div className="text-center">
//               <Loader2 size={48} className="spin mb-3" />
//               <p>Loading {view} earnings...</p>
//             </div>
//           </div>
//         </div>
//         <style
//           dangerouslySetInnerHTML={{
//             __html: `
//           .spin { animation: spin 1s linear infinite; }
//           @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         `,
//           }}
//         />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="d-flex">
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} activeItem="earnings" />
//         <div style={styles.mainContent} className="mainContent">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div style={styles.errorContainer}>
//             <h4>Error Loading Data</h4>
//             <p>{error}</p>
//             <Button
//               variant="outline-danger"
//               onClick={() => window.location.reload()}
//               className="mt-3"
//             >
//               Retry
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex">
//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} activeItem="earnings" />
//       <div style={styles.mainContent} className="mainContent">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//         <div className="container-lg">
//           {/* Toggle Buttons */}
//           <div style={styles.toggleContainer}>
//             <div style={styles.toggleBox}>
//               <button
//                 className={`income-toggle-btn ${view === "daily" ? "active" : ""}`}
//                 onClick={() => handleViewChange("daily")}
//                 disabled={isTransitioning}
//               >
//                 Daily Income
//               </button>
//               <button
//                 className={`income-toggle-btn ${view === "monthly" ? "active" : ""}`}
//                 onClick={() => handleViewChange("monthly")}
//                 disabled={isTransitioning}
//               >
//                 Monthly Income
//               </button>
//             </div>
//           </div>

//           {isTransitioning && (
//             <div style={styles.loadingContainer}>
//               <div className="text-center">
//                 <Loader2 size={48} className="spin mb-3" />
//                 <p>Switching to {view}...</p>
//               </div>
//             </div>
//           )}

//           {!isTransitioning && earnings.length === 0 && (
//             <div className="text-center py-5 fade-in">
//               <p className="text-muted">No {view} income data available.</p>
//               <Button
//                 variant="outline-primary"
//                 onClick={() => window.location.reload()}
//                 className="mt-2"
//               >
//                 Refresh Data
//               </Button>
//             </div>
//           )}

//           {/* Daily View */}
//           {!isTransitioning && view === "daily" && (
//             <div className="fade-in">
//               <Card style={styles.incomeCard}>
//                 <Row className="align-items-stretch">
//                   <Col lg={8} md={12} className="mb-4 mb-lg-0">
//                     <div className="position-relative" style={{ zIndex: 1 }}>
//                       <div className="d-flex justify-content-between align-items-start mb-4">
//                         <div>
//                           <div className="d-flex align-items-baseline gap-2 mb-1">
//                             <span className="font-dollar">฿</span>
//                             <span className="display-3 fw-bold">
//                               {totalIncome.toLocaleString("en-US", {
//                                 minimumFractionDigits: 2,
//                                 maximumFractionDigits: 2,
//                               })}
//                             </span>
//                           </div>
//                           <p className="opacity-75 h5">Daily Income</p>
//                         </div>
//                         <span className="display-6 fw-bold opacity-25">
//                           {new Date().getFullYear()}
//                         </span>
//                       </div>

//                       <div style={{ height: "260px", width: "100%" }}>
//                         <ResponsiveContainer width="100%" height="100%">
//                           <AreaChart data={dailyChartData}>
//                             <defs>
//                               <linearGradient
//                                 id="colorIncome"
//                                 x1="0"
//                                 y1="0"
//                                 x2="0"
//                                 y2="1"
//                               >
//                                 <stop
//                                   offset="5%"
//                                   stopColor="#ffffff"
//                                   stopOpacity={0.4}
//                                 />
//                                 <stop
//                                   offset="95%"
//                                   stopColor="#ffffff"
//                                   stopOpacity={0}
//                                 />
//                               </linearGradient>
//                             </defs>
//                             <XAxis
//                               dataKey="day"
//                               axisLine={false}
//                               tickLine={false}
//                               tick={{ fill: "#ffffff", fontSize: 12 }}
//                               dy={10}
//                             />
//                             <Tooltip
//                               contentStyle={{
//                                 backgroundColor: "#ffffff",
//                                 borderRadius: "8px",
//                                 border: "none",
//                                 color: pinkColor,
//                               }}
//                               itemStyle={{ color: pinkColor }}
//                               formatter={(value) => [
//                                 `฿ ${value.toLocaleString()}`,
//                                 "Income",
//                               ]}
//                             />
//                             <Area
//                               type="monotone"
//                               dataKey="income"
//                               stroke="#ffffff"
//                               strokeWidth={3}
//                               fillOpacity={1}
//                               fill="url(#colorIncome)"
//                               dot={{
//                                 r: 6,
//                                 fill: "#ffffff",
//                                 strokeWidth: 2,
//                                 stroke: pinkColor,
//                               }}
//                               isAnimationActive={true}
//                               animationDuration={1000}
//                             />
//                           </AreaChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
//                   </Col>

//                   <Col lg={4} md={12}>
//                     <div style={styles.dailyTableBox}>
//                       <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                         <span>Date</span>
//                         <span className="mx-5">Income</span>
//                       </div>
//                       <div
//                         style={{ maxHeight: "300px", overflowY: "auto" }}
//                         className="custom-scrollbar"
//                       >
//                         {dailyTableData.map((row, idx) => (
//                           <div
//                             key={`daily-${idx}`}
//                             className="d-flex justify-content-between small mb-2"
//                           >
//                             <span className="opacity-75">{row.date}</span>
//                             <span className="fw-bold mx-3">{row.displayIncome}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </Col>
//                 </Row>
//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: "-100px",
//                     right: "-100px",
//                     width: "250px",
//                     height: "250px",
//                     backgroundColor: "rgba(255,255,255,0.1)",
//                     borderRadius: "50%",
//                     filter: "blur(50px)",
//                   }}
//                 ></div>
//               </Card>
//             </div>
//           )}

//           {/* Monthly View */}
//           {!isTransitioning && view === "monthly" && (
//             <div className="fade-in">
//               {!hasMonthlyData ? (
//                 <div className="text-center py-5">
//                   <p className="text-muted">No monthly income data available.</p>
//                   <Button
//                     variant="outline-primary"
//                     onClick={() => window.location.reload()}
//                     className="mt-2"
//                   >
//                     Refresh Data
//                   </Button>
//                 </div>
//               ) : (
//                 Object.keys(monthlyByYear)
//                   .sort((a, b) => b - a)
//                   .map((year) => {
//                     const yearEarnings = monthlyByYear[year];
//                     const yearChartData = formatMonthlyChartData(yearEarnings, year);
//                     const yearTableData = formatMonthlyTableData(yearEarnings, year);
//                     const yearTotalIncome = yearEarnings.reduce(
//                       (sum, item) => sum + parseFloat(item.total_earnings || 0),
//                       0
//                     );

//                     return (
//                       <Card key={year} style={styles.incomeCard} className="mb-4">
//                         <Row className="align-items-stretch">
//                           <Col lg={8} md={12} className="mb-4 mb-lg-0">
//                             <div className="position-relative" style={{ zIndex: 1 }}>
//                               <div className="d-flex justify-content-between align-items-start mb-4">
//                                 <div>
//                                   <div className="d-flex align-items-baseline gap-2 mb-1">
//                                     <span className="font-dollar">฿</span>
//                                     <span className="display-3 fw-bold">
//                                       {yearTotalIncome.toLocaleString("en-US", {
//                                         minimumFractionDigits: 2,
//                                         maximumFractionDigits: 2,
//                                       })}
//                                     </span>
//                                   </div>
//                                   <p className="opacity-75 h5">
//                                     Monthly Income - {year}
//                                   </p>
//                                 </div>
//                                 <span className="display-6 fw-bold opacity-25">
//                                   {year}
//                                 </span>
//                               </div>

//                               <div style={{ height: "260px", width: "100%" }}>
//                                 <ResponsiveContainer width="100%" height="100%">
//                                   <AreaChart data={yearChartData}>
//                                     <defs>
//                                       <linearGradient
//                                         id={`colorIncome${year}`}
//                                         x1="0"
//                                         y1="0"
//                                         x2="0"
//                                         y2="1"
//                                       >
//                                         <stop
//                                           offset="5%"
//                                           stopColor="#ffffff"
//                                           stopOpacity={0.4}
//                                         />
//                                         <stop
//                                           offset="95%"
//                                           stopColor="#ffffff"
//                                           stopOpacity={0}
//                                         />
//                                       </linearGradient>
//                                     </defs>
//                                     <XAxis
//                                       dataKey="month"
//                                       axisLine={false}
//                                       tickLine={false}
//                                       tick={{ fill: "#ffffff", fontSize: 10 }}
//                                       dy={10}
//                                     />
//                                     <Tooltip
//                                       contentStyle={{
//                                         backgroundColor: "#ffffff",
//                                         borderRadius: "8px",
//                                         border: "none",
//                                         color: pinkColor,
//                                       }}
//                                       formatter={(value, name, props) => {
//                                         const hasData = props?.payload?.hasData;
//                                         return [
//                                           hasData ? `฿ ${value.toLocaleString()}` : "—",
//                                           "Income",
//                                         ];
//                                       }}
//                                     />
//                                     <Area
//                                       type="monotone"
//                                       dataKey="income"
//                                       stroke="#ffffff"
//                                       strokeWidth={2}
//                                       fillOpacity={1}
//                                       fill={`url(#colorIncome${year})`}
//                                       dot={(props) => {
//                                         const { cx, cy, payload } = props;
//                                         const hasData = payload?.hasData;
//                                         return (
//                                           <circle
//                                             cx={cx}
//                                             cy={cy}
//                                             r={hasData ? 4 : 0}
//                                             fill="#ffffff"
//                                           />
//                                         );
//                                       }}
//                                       isAnimationActive={true}
//                                       animationDuration={1000}
//                                     />
//                                   </AreaChart>
//                                 </ResponsiveContainer>
//                               </div>
//                             </div>
//                           </Col>

//                           <Col lg={4} md={12}>
//                             <div style={styles.monthlyTableBox}>
//                               <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                                 <span>Month</span>
//                                 <span className="mx-5">Income</span>
//                               </div>
//                               <div
//                                 style={{ maxHeight: "300px", overflowY: "auto" }}
//                                 className="custom-scrollbar"
//                               >
//                                 {yearTableData.map((m, idx) => (
//                                   <div
//                                     key={`month-${year}-${idx}`}
//                                     className="d-flex justify-content-between small mb-2"
//                                   >
//                                     <span className="opacity-75">
//                                       {m.date.split(" ")[0]}
//                                     </span>
//                                     <span
//                                       className={`${m.hasData ? "fw-bold" : "opacity-50"} mx-4`}
//                                     >
//                                       {m.displayIncome}
//                                     </span>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           </Col>
//                         </Row>
//                       </Card>
//                     );
//                   })
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         .fade-in { animation: fadeIn 0.5s ease-in-out; }
//         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
//         .custom-scrollbar::-webkit-scrollbar { width: 4px; }
//         .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 10px; }
        
//         @media (max-width: 991px) {
//           .mainContent {
//             margin-left: 0 !important;
//             width: 100% !important;
//           }
//         }
        
//         @media (max-width: 768px) {
//           .display-3 {
//             font-size: 2.5rem;
//           }
//           .display-6 {
//             font-size: 1.5rem;
//           }
//         }
//       `,
//         }}
//       />
//     </div>
//   );
// }



























// import React, { useState, useEffect, useMemo } from "react";
// import { Loader2 } from "lucide-react";
// import { XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Table,
//   Card,
//   Badge,
// } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import "../css/DailySeeMore.css";

// // --- API Configuration ---
// const API_BASE_URL = "https://sagarxo.app/web-api";
// const getAuthToken = () => localStorage.getItem("token") || "";

// // --- Map UI view to API type ---
// const API_TYPE_MAP = {
//   daily: "daily",
//   monthly: "monthly",
// };

// // --- All 12 months for display (English names used for API mapping) ---
// const ALL_MONTHS = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// // --- Helper: Get day name from Date object (localised) ---
// const getDayNameFromDateObj = (date, locale) => {
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
//   const apiType = API_TYPE_MAP[type] || type;
//   const response = await fetch(
//     `${API_BASE_URL}/customer/earnings?type=${apiType}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: getAuthToken(),
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();
//   if (!data.success) {
//     throw new Error(data.message || "Failed to fetch earnings");
//   }

//   return data.data.earnings || [];
// };

// // --- Format number with locale ---
// const formatNumber = (value, locale) => {
//   return value.toLocaleString(locale === "th" ? "th-TH" : "en-US", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });
// };

// const formatCurrency = (value, locale, t) => {
//   const symbol = t("thb"); // reuses existing 'thb' from i18n
//   return `${formatNumber(value, locale)} ${symbol}`;
// };

// // --- Daily formatters (with locale) ---
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
//       day: getDayNameFromDateObj(date, locale),
//       income: value,
//       date: dateStr,
//       hasData: earningsMap.hasOwnProperty(dateStr)
//     };
//   });
// };

// const formatDailyDataForTable = (earnings, locale, t) => {
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
//     // Format date: "Mon 15" or "จ. 15"
//     const dayName = getDayNameFromDateObj(date, locale);
//     const dayNum = date.getDate();
//     return {
//       date: `${dayName} ${dayNum}`,
//       income: hasData ? value : 0,
//       displayIncome: hasData ? formatCurrency(value, locale, t) : "—",
//     };
//   });
// };

// // --- Monthly formatters (still use English month names for API mapping) ---
// const formatMonthlyChartData = (earnings, year, locale) => {
//   const dataMap = {};
//   earnings.forEach((item) => {
//     const monthName = item.month;
//     if (monthName) {
//       dataMap[monthName] = parseFloat(item.total_earnings || 0);
//     }
//   });

//   // For chart axis we use short English names (Jan, Feb) – they don't need translation for now
//   const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//   return ALL_MONTHS.map((monthName, index) => {
//     const hasData = dataMap[monthName] !== undefined;
//     const income = dataMap[monthName] || 0;
//     return {
//       day: shortMonths[index],
//       month: shortMonths[index],
//       income: hasData ? income : 0,
//       year: year,
//       hasData: hasData,
//       fullData: hasData
//         ? { month: monthName, year: year, total_earnings: income }
//         : null,
//     };
//   });
// };

// const formatMonthlyTableData = (earnings, year, locale, t) => {
//   const dataMap = {};
//   earnings.forEach((item) => {
//     const monthName = item.month;
//     if (monthName) {
//       dataMap[monthName] = parseFloat(item.total_earnings || 0);
//     }
//   });

//   return ALL_MONTHS.map((monthName, index) => {
//     const hasData = dataMap[monthName] !== undefined;
//     const income = dataMap[monthName] || 0;
//     // Localised full month name
//     const dateObj = new Date(year, index, 1);
//     const localMonth = dateObj.toLocaleDateString(locale === "th" ? "th-TH" : "en-US", { month: "long" });
//     return {
//       date: `${localMonth} ${year}`,
//       monthShort: ALL_MONTHS_SHORT[index],
//       income: hasData ? income : 0,
//       displayIncome: hasData ? formatCurrency(income, locale, t) : "—",
//       hasData: hasData,
//     };
//   });
// };

// const ALL_MONTHS_SHORT = [
//   "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// ];

// // --- Custom Styles (unchanged, using pinkColor) ---
// const pinkColor = "#f06281";

// const styles = {
//   sidebar: {
//     backgroundColor: pinkColor,
//     minHeight: "100vh",
//     width: "260px",
//     position: "fixed",
//     left: 0,
//     top: 0,
//     zIndex: 1000,
//     padding: "2rem 0",
//     boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
//   },
//   sidebarItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "1rem",
//     padding: "0.8rem 1.5rem",
//     color: "white",
//     textDecoration: "none",
//     fontSize: "0.9rem",
//     fontWeight: 600,
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//     border: "none",
//     background: "none",
//     width: "100%",
//     textAlign: "left",
//   },
//   sidebarItemActive: {
//     backgroundColor: "white",
//     color: pinkColor,
//     borderRadius: "50px 0 0 50px",
//     marginLeft: "1.5rem",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//   },
//   header: {
//     backgroundColor: "white",
//     height: "64px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0 2rem",
//     borderBottom: "1px solid #eee",
//     position: "sticky",
//     top: 0,
//     zIndex: 900,
//   },
//   toggleContainer: {
//     display: "flex",
//     justifyContent: "center",
//     margin: "2.5rem 0",
//   },
//   toggleBox: {
//     backgroundColor: "white",
//     border: `1px solid ${pinkColor}4D`,
//     borderRadius: "50px",
//     padding: "0.4rem",
//     display: "inline-flex",
//     boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//   },
//   toggleBtn: {
//     padding: "0.6rem 2.5rem",
//     borderRadius: "50px",
//     fontSize: "0.875rem",
//     fontWeight: 700,
//     border: "none",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//   },
//   incomeCard: {
//     backgroundColor: pinkColor,
//     borderRadius: "1.5rem",
//     padding: "2rem",
//     color: "white",
//     border: "none",
//     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
//     position: "relative",
//     overflow: "hidden",
//   },
//   dailyTableBox: {
//     backgroundColor: "rgba(255, 255, 255, 0.15)",
//     backdropFilter: "blur(10px)",
//     borderRadius: "1rem",
//     padding: "1.2rem",
//     border: "1px solid rgba(255, 255, 255, 0.2)",
//     width: "100%",
//     height: "100%",
//   },
//   monthlyTableBox: {
//     backgroundColor: "rgba(255, 255, 255, 0.15)",
//     backdropFilter: "blur(10px)",
//     borderRadius: "1rem",
//     padding: "1.2rem",
//     border: "1px solid rgba(255, 255, 255, 0.2)",
//     width: "100%",
//     height: "100%",
//   },
//   mainContent: {
//     marginLeft: "260px",
//     width: "calc(100% - 260px)",
//     minHeight: "100vh",
//     backgroundColor: "#f8f9fa",
//   },
//   loadingContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "300px",
//     color: pinkColor,
//   },
//   errorContainer: {
//     padding: "2rem",
//     textAlign: "center",
//     color: "#dc3545",
//   },
// };

// export default function DailySeeMore() {
//   const { t, i18n } = useTranslation();
//   const { type: urlType } = useParams();
//   const navigate = useNavigate();

//   const [view, setView] = useState("daily");
//   const [earnings, setEarnings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   useEffect(() => {
//     const validType = urlType === "monthly" ? "monthly" : "daily";
//     if (validType !== view) {
//       setView(validType);
//     }
//   }, [urlType]);

//   useEffect(() => {
//     let isMounted = true;

//     const loadEarnings = async () => {
//       if (isMounted) {
//         setLoading(true);
//         setError(null);
//         setEarnings([]);
//       }

//       try {
//         const data = await fetchCustomerEarnings(view);
//         if (isMounted) {
//           setEarnings(data);
//         }
//       } catch (err) {
//         if (isMounted) {
//           setError(err.message);
//           setEarnings([]);
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//           setIsTransitioning(false);
//         }
//       }
//     };

//     loadEarnings();

//     return () => {
//       isMounted = false;
//     };
//   }, [view]);

//   // Daily data (full 7 days) – re-run when language changes
//   const dailyChartData = useMemo(() => {
//     if (view === "daily") return formatDailyDataForChart(earnings, i18n.language);
//     return [];
//   }, [earnings, view, i18n.language]);

//   const dailyTableData = useMemo(() => {
//     if (view === "daily") return formatDailyDataForTable(earnings, i18n.language, t);
//     return [];
//   }, [earnings, view, i18n.language, t]);

//   // Total income (only from actual data)
//   const totalIncome = useMemo(() => {
//     return earnings.reduce((sum, item) => sum + parseFloat(item.total_earnings || 0), 0);
//   }, [earnings]);

//   // Group monthly data by year
//   const groupByYear = (data) => {
//     const grouped = {};
//     data.forEach((item) => {
//       const year = item.year || new Date().getFullYear();
//       if (!grouped[year]) grouped[year] = [];
//       grouped[year].push(item);
//     });
//     return grouped;
//   };

//   const monthlyByYear = view === "monthly" ? groupByYear(earnings) : {};
//   const hasMonthlyData = Object.keys(monthlyByYear).length > 0;

//   const handleViewChange = (newView) => {
//     if (newView === view) return;
//     setIsTransitioning(true);
//     setView(newView);
//     navigate(`/dailyseemore/${newView}`, { replace: true });
//   };

//   // Helper for tooltip formatter
//   const tooltipFormatter = (value) => {
//     return [formatCurrency(value, i18n.language, t), t("dailySeeMore.tooltipIncome")];
//   };

//   // Loading + Transition states
//   if (loading && !isTransitioning) {
//     return (
//       <div className="d-flex">
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} activeItem="earnings" />
//         <div style={styles.mainContent} className="mainContent">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div style={styles.loadingContainer}>
//             <div className="text-center">
//               <Loader2 size={48} className="spin mb-3" />
//               <p>{t("dailySeeMore.loading", { view: t(view) })}</p>
//             </div>
//           </div>
//         </div>
//         <style
//           dangerouslySetInnerHTML={{
//             __html: `
//           .spin { animation: spin 1s linear infinite; }
//           @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         `,
//           }}
//         />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="d-flex">
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} activeItem="earnings" />
//         <div style={styles.mainContent} className="mainContent">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div style={styles.errorContainer}>
//             <h4>{t("dailySeeMore.errorTitle")}</h4>
//             <p>{error}</p>
//             <Button
//               variant="outline-danger"
//               onClick={() => window.location.reload()}
//               className="mt-3"
//             >
//               {t("dailySeeMore.retry")}
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex">
//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} activeItem="earnings" />
//       <div style={styles.mainContent} className="mainContent">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//         <div className="container-lg">
//           {/* Toggle Buttons */}
//           <div style={styles.toggleContainer}>
//             <div style={styles.toggleBox}>
//               <button
//                 className={`income-toggle-btn ${view === "daily" ? "active" : ""}`}
//                 onClick={() => handleViewChange("daily")}
//                 disabled={isTransitioning}
//               >
//                 {t("dailySeeMore.dailyIncome")}
//               </button>
//               <button
//                 className={`income-toggle-btn ${view === "monthly" ? "active" : ""}`}
//                 onClick={() => handleViewChange("monthly")}
//                 disabled={isTransitioning}
//               >
//                 {t("dailySeeMore.monthlyIncome")}
//               </button>
//             </div>
//           </div>

//           {isTransitioning && (
//             <div style={styles.loadingContainer}>
//               <div className="text-center">
//                 <Loader2 size={48} className="spin mb-3" />
//                 <p>{t("dailySeeMore.switching", { view: t(view) })}</p>
//               </div>
//             </div>
//           )}

//           {!isTransitioning && earnings.length === 0 && (
//             <div className="text-center py-5 fade-in">
//               <p className="text-muted">{t("dailySeeMore.noData", { view: t(view) })}</p>
//               <Button
//                 variant="outline-primary"
//                 onClick={() => window.location.reload()}
//                 className="mt-2"
//               >
//                 {t("dailySeeMore.refreshData")}
//               </Button>
//             </div>
//           )}

//           {/* Daily View */}
//           {!isTransitioning && view === "daily" && (
//             <div className="fade-in">
//               <Card style={styles.incomeCard}>
//                 <Row className="align-items-stretch">
//                   <Col lg={8} md={12} className="mb-4 mb-lg-0">
//                     <div className="position-relative" style={{ zIndex: 1 }}>
//                       <div className="d-flex justify-content-between align-items-start mb-4">
//                         <div>
//                           <div className="d-flex align-items-baseline gap-2 mb-1">
//                             <span className="font-dollar">{t("thb")}</span>
//                             <span className="display-3 fw-bold">
//                               {formatNumber(totalIncome, i18n.language)}
//                             </span>
//                           </div>
//                           <p className="opacity-75 h5">{t("dailySeeMore.dailyIncome")}</p>
//                         </div>
//                         <span className="display-6 fw-bold opacity-25">
//                           {new Date().getFullYear()}
//                         </span>
//                       </div>

//                       <div style={{ height: "260px", width: "100%" }}>
//                         <ResponsiveContainer width="100%" height="100%">
//                           <AreaChart data={dailyChartData}>
//                             <defs>
//                               <linearGradient
//                                 id="colorIncome"
//                                 x1="0"
//                                 y1="0"
//                                 x2="0"
//                                 y2="1"
//                               >
//                                 <stop
//                                   offset="5%"
//                                   stopColor="#ffffff"
//                                   stopOpacity={0.4}
//                                 />
//                                 <stop
//                                   offset="95%"
//                                   stopColor="#ffffff"
//                                   stopOpacity={0}
//                                 />
//                               </linearGradient>
//                             </defs>
//                             <XAxis
//                               dataKey="day"
//                               axisLine={false}
//                               tickLine={false}
//                               tick={{ fill: "#ffffff", fontSize: 12 }}
//                               dy={10}
//                             />
//                             <Tooltip
//                               contentStyle={{
//                                 backgroundColor: "#ffffff",
//                                 borderRadius: "8px",
//                                 border: "none",
//                                 color: pinkColor,
//                               }}
//                               itemStyle={{ color: pinkColor }}
//                               formatter={tooltipFormatter}
//                             />
//                             <Area
//                               type="monotone"
//                               dataKey="income"
//                               stroke="#ffffff"
//                               strokeWidth={3}
//                               fillOpacity={1}
//                               fill="url(#colorIncome)"
//                               dot={{
//                                 r: 6,
//                                 fill: "#ffffff",
//                                 strokeWidth: 2,
//                                 stroke: pinkColor,
//                               }}
//                               isAnimationActive={true}
//                               animationDuration={1000}
//                             />
//                           </AreaChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
//                   </Col>

//                   <Col lg={4} md={12}>
//                     <div style={styles.dailyTableBox}>
//                       <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                         <span>{t("dailySeeMore.date")}</span>
//                         <span className="mx-5">{t("dailySeeMore.income")}</span>
//                       </div>
//                       <div
//                         style={{ maxHeight: "300px", overflowY: "auto" }}
//                         className="custom-scrollbar"
//                       >
//                         {dailyTableData.map((row, idx) => (
//                           <div
//                             key={`daily-${idx}`}
//                             className="d-flex justify-content-between small mb-2"
//                           >
//                             <span className="opacity-75">{row.date}</span>
//                             <span className="fw-bold mx-3">{row.displayIncome}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </Col>
//                 </Row>
//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: "-100px",
//                     right: "-100px",
//                     width: "250px",
//                     height: "250px",
//                     backgroundColor: "rgba(255,255,255,0.1)",
//                     borderRadius: "50%",
//                     filter: "blur(50px)",
//                   }}
//                 ></div>
//               </Card>
//             </div>
//           )}

//           {/* Monthly View */}
//           {!isTransitioning && view === "monthly" && (
//             <div className="fade-in">
//               {!hasMonthlyData ? (
//                 <div className="text-center py-5">
//                   <p className="text-muted">{t("dailySeeMore.noData", { view: t("monthly") })}</p>
//                   <Button
//                     variant="outline-primary"
//                     onClick={() => window.location.reload()}
//                     className="mt-2"
//                   >
//                     {t("dailySeeMore.refreshData")}
//                   </Button>
//                 </div>
//               ) : (
//                 Object.keys(monthlyByYear)
//                   .sort((a, b) => b - a)
//                   .map((year) => {
//                     const yearEarnings = monthlyByYear[year];
//                     const yearChartData = formatMonthlyChartData(yearEarnings, year, i18n.language);
//                     const yearTableData = formatMonthlyTableData(yearEarnings, year, i18n.language, t);
//                     const yearTotalIncome = yearEarnings.reduce(
//                       (sum, item) => sum + parseFloat(item.total_earnings || 0),
//                       0
//                     );

//                     return (
//                       <Card key={year} style={styles.incomeCard} className="mb-4">
//                         <Row className="align-items-stretch">
//                           <Col lg={8} md={12} className="mb-4 mb-lg-0">
//                             <div className="position-relative" style={{ zIndex: 1 }}>
//                               <div className="d-flex justify-content-between align-items-start mb-4">
//                                 <div>
//                                   <div className="d-flex align-items-baseline gap-2 mb-1">
//                                     <span className="font-dollar">{t("thb")}</span>
//                                     <span className="display-3 fw-bold">
//                                       {formatNumber(yearTotalIncome, i18n.language)}
//                                     </span>
//                                   </div>
//                                   <p className="opacity-75 h5">
//                                     {t("dailySeeMore.yearLabel", { year })}
//                                   </p>
//                                 </div>
//                                 <span className="display-6 fw-bold opacity-25">
//                                   {year}
//                                 </span>
//                               </div>

//                               <div style={{ height: "260px", width: "100%" }}>
//                                 <ResponsiveContainer width="100%" height="100%">
//                                   <AreaChart data={yearChartData}>
//                                     <defs>
//                                       <linearGradient
//                                         id={`colorIncome${year}`}
//                                         x1="0"
//                                         y1="0"
//                                         x2="0"
//                                         y2="1"
//                                       >
//                                         <stop
//                                           offset="5%"
//                                           stopColor="#ffffff"
//                                           stopOpacity={0.4}
//                                         />
//                                         <stop
//                                           offset="95%"
//                                           stopColor="#ffffff"
//                                           stopOpacity={0}
//                                         />
//                                       </linearGradient>
//                                     </defs>
//                                     <XAxis
//                                       dataKey="month"
//                                       axisLine={false}
//                                       tickLine={false}
//                                       tick={{ fill: "#ffffff", fontSize: 10 }}
//                                       dy={10}
//                                     />
//                                     <Tooltip
//                                       contentStyle={{
//                                         backgroundColor: "#ffffff",
//                                         borderRadius: "8px",
//                                         border: "none",
//                                         color: pinkColor,
//                                       }}
//                                       formatter={(value, name, props) => {
//                                         const hasData = props?.payload?.hasData;
//                                         return [
//                                           hasData ? formatCurrency(value, i18n.language, t) : "—",
//                                           t("dailySeeMore.tooltipIncome"),
//                                         ];
//                                       }}
//                                     />
//                                     <Area
//                                       type="monotone"
//                                       dataKey="income"
//                                       stroke="#ffffff"
//                                       strokeWidth={2}
//                                       fillOpacity={1}
//                                       fill={`url(#colorIncome${year})`}
//                                       dot={(props) => {
//                                         const { cx, cy, payload } = props;
//                                         const hasData = payload?.hasData;
//                                         return (
//                                           <circle
//                                             cx={cx}
//                                             cy={cy}
//                                             r={hasData ? 4 : 0}
//                                             fill="#ffffff"
//                                           />
//                                         );
//                                       }}
//                                       isAnimationActive={true}
//                                       animationDuration={1000}
//                                     />
//                                   </AreaChart>
//                                 </ResponsiveContainer>
//                               </div>
//                             </div>
//                           </Col>

//                           <Col lg={4} md={12}>
//                             <div style={styles.monthlyTableBox}>
//                               <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
//                                 <span>{t("dailySeeMore.month")}</span>
//                                 <span className="mx-5">{t("dailySeeMore.income")}</span>
//                               </div>
//                               <div
//                                 style={{ maxHeight: "300px", overflowY: "auto" }}
//                                 className="custom-scrollbar"
//                               >
//                                 {yearTableData.map((m, idx) => (
//                                   <div
//                                     key={`month-${year}-${idx}`}
//                                     className="d-flex justify-content-between small mb-2"
//                                   >
//                                     <span className="opacity-75">
//                                       {m.date.split(" ")[0]}
//                                     </span>
//                                     <span
//                                       className={`${m.hasData ? "fw-bold" : "opacity-50"} mx-4`}
//                                     >
//                                       {m.displayIncome}
//                                     </span>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           </Col>
//                         </Row>
//                       </Card>
//                     );
//                   })
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         .fade-in { animation: fadeIn 0.5s ease-in-out; }
//         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
//         .custom-scrollbar::-webkit-scrollbar { width: 4px; }
//         .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 10px; }
        
//         @media (max-width: 991px) {
//           .mainContent {
//             margin-left: 0 !important;
//             width: 100% !important;
//           }
//         }
        
//         @media (max-width: 768px) {
//           .display-3 {
//             font-size: 2.5rem;
//           }
//           .display-6 {
//             font-size: 1.5rem;
//           }
//         }
//       `,
//         }}
//       />
//     </div>
//   );
// }







import React, { useState, useEffect, useMemo } from "react";
import { Loader2 } from "lucide-react";
import { XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Card,
  Badge,
} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../css/DailySeeMore.css";

// --- API Configuration ---
const API_BASE_URL = "https://sagarxo.app/web-api";
const getAuthToken = () => localStorage.getItem("token") || "";

// --- Map UI view to API type ---
const API_TYPE_MAP = {
  daily: "daily",
  monthly: "monthly",
};

// --- All 12 months for display (English names used for API mapping) ---
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

// Helper: get localised short month names (e.g. Jan, Feb or ม.ค., ก.พ.)
const getShortMonthNames = (locale) => {
  const months = [];
  for (let i = 0; i < 12; i++) {
    const date = new Date(2020, i, 1);
    months.push(date.toLocaleDateString(locale === "th" ? "th-TH" : "en-US", { month: "short" }));
  }
  return months;
};

// --- Helper: Get day name from Date object (localised) ---
const getDayNameFromDateObj = (date, locale) => {
  return date.toLocaleDateString(locale === "th" ? "th-TH" : "en-US", { weekday: "short" });
};

// --- Helper: Format date as DD/MM/YYYY (matching API format) ---
const formatDateForAPI = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// --- Helper: Generate last 7 days array ---
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

// --- API Service ---
const fetchCustomerEarnings = async (type) => {
  const apiType = API_TYPE_MAP[type] || type;
  const response = await fetch(
    `${API_BASE_URL}/customer/earnings?type=${apiType}`,
    {
      method: "GET",
      headers: {
        Authorization: getAuthToken(),
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  if (!data.success) {
    throw new Error(data.message || "Failed to fetch earnings");
  }

  return data.data.earnings || [];
};

// --- Format number with locale ---
const formatNumber = (value, locale) => {
  return value.toLocaleString(locale === "th" ? "th-TH" : "en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const formatCurrency = (value, locale, t) => {
  const symbol = t("thb"); // reuses existing 'thb' from i18n
  return `${formatNumber(value, locale)} ${symbol}`;
};

// --- Daily formatters (with locale) ---
const formatDailyDataForChart = (earnings, locale) => {
  const last7Days = generateLast7Days();
  const earningsMap = {};
  earnings.forEach(item => {
    if (item?.date && item.total_earnings !== undefined) {
      earningsMap[item.date] = parseFloat(item.total_earnings);
    }
  });

  return last7Days.map(date => {
    const dateStr = formatDateForAPI(date);
    const value = earningsMap[dateStr] || 0;
    return {
      day: getDayNameFromDateObj(date, locale),
      income: value,
      date: dateStr,
      hasData: earningsMap.hasOwnProperty(dateStr)
    };
  });
};

const formatDailyDataForTable = (earnings, locale, t) => {
  const last7Days = generateLast7Days();
  const earningsMap = {};
  earnings.forEach(item => {
    if (item?.date && item.total_earnings !== undefined) {
      earningsMap[item.date] = parseFloat(item.total_earnings);
    }
  });

  return last7Days.map(date => {
    const dateStr = formatDateForAPI(date);
    const value = earningsMap[dateStr];
    const hasData = value !== undefined;
    const dayName = getDayNameFromDateObj(date, locale);
    const dayNum = date.getDate();
    return {
      date: `${dayName} ${dayNum}`,
      income: hasData ? value : 0,
      displayIncome: hasData ? formatCurrency(value, locale, t) : "—",
    };
  });
};

// --- Monthly formatters (FIXED: localised short month names for chart) ---
const formatMonthlyChartData = (earnings, year, locale) => {
  const dataMap = {};
  earnings.forEach((item) => {
    const monthName = item.month;
    if (monthName) {
      dataMap[monthName] = parseFloat(item.total_earnings || 0);
    }
  });

  const shortMonths = getShortMonthNames(locale); // ← localised short months

  return ALL_MONTHS.map((monthName, index) => {
    const hasData = dataMap[monthName] !== undefined;
    const income = dataMap[monthName] || 0;
    return {
      month: shortMonths[index],        // X‑axis label (localised)
      income: hasData ? income : 0,
      year: year,
      hasData: hasData,
      fullData: hasData
        ? { month: monthName, year: year, total_earnings: income }
        : null,
    };
  });
};

const formatMonthlyTableData = (earnings, year, locale, t) => {
  const dataMap = {};
  earnings.forEach((item) => {
    const monthName = item.month;
    if (monthName) {
      dataMap[monthName] = parseFloat(item.total_earnings || 0);
    }
  });

  return ALL_MONTHS.map((monthName, index) => {
    const hasData = dataMap[monthName] !== undefined;
    const income = dataMap[monthName] || 0;
    // Localised full month name
    const dateObj = new Date(year, index, 1);
    const localMonth = dateObj.toLocaleDateString(locale === "th" ? "th-TH" : "en-US", { month: "long" });
    return {
      date: `${localMonth} ${year}`,
      income: hasData ? income : 0,
      displayIncome: hasData ? formatCurrency(income, locale, t) : "—",
      hasData: hasData,
    };
  });
};

// --- Custom Styles (unchanged, using pinkColor) ---
const pinkColor = "#f06281";

const styles = {
  sidebar: {
    backgroundColor: pinkColor,
    minHeight: "100vh",
    width: "260px",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 1000,
    padding: "2rem 0",
    boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
  },
  sidebarItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0.8rem 1.5rem",
    color: "white",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 600,
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: "none",
    background: "none",
    width: "100%",
    textAlign: "left",
  },
  sidebarItemActive: {
    backgroundColor: "white",
    color: pinkColor,
    borderRadius: "50px 0 0 50px",
    marginLeft: "1.5rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  header: {
    backgroundColor: "white",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    zIndex: 900,
  },
  toggleContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "2.5rem 0",
  },
  toggleBox: {
    backgroundColor: "white",
    border: `1px solid ${pinkColor}4D`,
    borderRadius: "50px",
    padding: "0.4rem",
    display: "inline-flex",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },
  toggleBtn: {
    padding: "0.6rem 2.5rem",
    borderRadius: "50px",
    fontSize: "0.875rem",
    fontWeight: 700,
    border: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  incomeCard: {
    backgroundColor: pinkColor,
    borderRadius: "1.5rem",
    padding: "2rem",
    color: "white",
    border: "none",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    position: "relative",
    overflow: "hidden",
  },
  dailyTableBox: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    borderRadius: "1rem",
    padding: "1.2rem",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    width: "100%",
    height: "100%",
  },
  monthlyTableBox: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    borderRadius: "1rem",
    padding: "1.2rem",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    width: "100%",
    height: "100%",
  },
  mainContent: {
    marginLeft: "260px",
    width: "calc(100% - 260px)",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    color: pinkColor,
  },
  errorContainer: {
    padding: "2rem",
    textAlign: "center",
    color: "#dc3545",
  },
};

export default function DailySeeMore() {
  const { t, i18n } = useTranslation();
  const { type: urlType } = useParams();
  const navigate = useNavigate();

  const [view, setView] = useState("daily");
  const [earnings, setEarnings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCloseSidebar = () => setIsSidebarOpen(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const validType = urlType === "monthly" ? "monthly" : "daily";
    if (validType !== view) {
      setView(validType);
    }
  }, [urlType]);

  useEffect(() => {
    let isMounted = true;

    const loadEarnings = async () => {
      if (isMounted) {
        setLoading(true);
        setError(null);
        setEarnings([]);
      }

      try {
        const data = await fetchCustomerEarnings(view);
        if (isMounted) {
          setEarnings(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setEarnings([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
          setIsTransitioning(false);
        }
      }
    };

    loadEarnings();

    return () => {
      isMounted = false;
    };
  }, [view]);

  // Daily data (full 7 days) – re-run when language changes
  const dailyChartData = useMemo(() => {
    if (view === "daily") return formatDailyDataForChart(earnings, i18n.language);
    return [];
  }, [earnings, view, i18n.language]);

  const dailyTableData = useMemo(() => {
    if (view === "daily") return formatDailyDataForTable(earnings, i18n.language, t);
    return [];
  }, [earnings, view, i18n.language, t]);

  // Total income (only from actual data)
  const totalIncome = useMemo(() => {
    return earnings.reduce((sum, item) => sum + parseFloat(item.total_earnings || 0), 0);
  }, [earnings]);

  // Group monthly data by year
  const groupByYear = (data) => {
    const grouped = {};
    data.forEach((item) => {
      const year = item.year || new Date().getFullYear();
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(item);
    });
    return grouped;
  };

  const monthlyByYear = view === "monthly" ? groupByYear(earnings) : {};
  const hasMonthlyData = Object.keys(monthlyByYear).length > 0;

  const handleViewChange = (newView) => {
    if (newView === view) return;
    setIsTransitioning(true);
    setView(newView);
    navigate(`/dailyseemore/${newView}`, { replace: true });
  };

  // Helper for tooltip formatter
  const tooltipFormatter = (value) => {
    return [formatCurrency(value, i18n.language, t), t("dailySeeMore.tooltipIncome")];
  };

  // Loading + Transition states
  if (loading && !isTransitioning) {
    return (
      <div className="d-flex">
        <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} activeItem="earnings" />
        <div style={styles.mainContent} className="mainContent">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div style={styles.loadingContainer}>
            <div className="text-center">
              <Loader2 size={48} className="spin mb-3" />
              <p>{t("dailySeeMore.loading", { view: t(view) })}</p>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .spin { animation: spin 1s linear infinite; }
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        `,
          }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex">
        <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} activeItem="earnings" />
        <div style={styles.mainContent} className="mainContent">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div style={styles.errorContainer}>
            <h4>{t("dailySeeMore.errorTitle")}</h4>
            <p>{error}</p>
            <Button
              variant="outline-danger"
              onClick={() => window.location.reload()}
              className="mt-3"
            >
              {t("dailySeeMore.retry")}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex">
      <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} activeItem="earnings" />
      <div style={styles.mainContent} className="mainContent">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="container-lg">
          {/* Toggle Buttons */}
          <div style={styles.toggleContainer}>
            <div style={styles.toggleBox}>
              <button
                className={`income-toggle-btn ${view === "daily" ? "active" : ""}`}
                onClick={() => handleViewChange("daily")}
                disabled={isTransitioning}
              >
                {t("dailySeeMore.dailyIncome")}
              </button>
              <button
                className={`income-toggle-btn ${view === "monthly" ? "active" : ""}`}
                onClick={() => handleViewChange("monthly")}
                disabled={isTransitioning}
              >
                {t("dailySeeMore.monthlyIncome")}
              </button>
            </div>
          </div>

          {isTransitioning && (
            <div style={styles.loadingContainer}>
              <div className="text-center">
                <Loader2 size={48} className="spin mb-3" />
                <p>{t("dailySeeMore.switching", { view: t(view) })}</p>
              </div>
            </div>
          )}

          {!isTransitioning && earnings.length === 0 && (
            <div className="text-center py-5 fade-in">
              <p className="text-muted">{t("dailySeeMore.noData", { view: t(view) })}</p>
              <Button
                variant="outline-primary"
                onClick={() => window.location.reload()}
                className="mt-2"
              >
                {t("dailySeeMore.refreshData")}
              </Button>
            </div>
          )}

          {/* Daily View */}
          {!isTransitioning && view === "daily" && (
            <div className="fade-in">
              <Card style={styles.incomeCard}>
                <Row className="align-items-stretch">
                  <Col lg={8} md={12} className="mb-4 mb-lg-0">
                    <div className="position-relative" style={{ zIndex: 1 }}>
                      <div className="d-flex justify-content-between align-items-start mb-4">
                        <div>
                          <div className="d-flex align-items-baseline gap-2 mb-1">
                            {/* <span className="font-dollar">{t("thb")}</span> */}
                            <span className="display-3 fw-bold">฿</span>
                            <span className="display-3 fw-bold">
                              {formatNumber(totalIncome, i18n.language)}
                            </span>
                          </div>
                          <p className="opacity-75 h5">{t("dailySeeMore.dailyIncome")}</p>
                        </div>
                        <span className="display-6 fw-bold opacity-25">
                          {new Date().getFullYear()}
                        </span>
                      </div>

                      <div style={{ height: "260px", width: "100%" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={dailyChartData}>
                            <defs>
                              <linearGradient
                                id="colorIncome"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="5%"
                                  stopColor="#ffffff"
                                  stopOpacity={0.4}
                                />
                                <stop
                                  offset="95%"
                                  stopColor="#ffffff"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                            </defs>
                            <XAxis
                              dataKey="day"
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: "#ffffff", fontSize: 12 }}
                              dy={10}
                            />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#ffffff",
                                borderRadius: "8px",
                                border: "none",
                                color: pinkColor,
                              }}
                              itemStyle={{ color: pinkColor }}
                              formatter={tooltipFormatter}
                            />
                            <Area
                              type="monotone"
                              dataKey="income"
                              stroke="#ffffff"
                              strokeWidth={3}
                              fillOpacity={1}
                              fill="url(#colorIncome)"
                              dot={{
                                r: 6,
                                fill: "#ffffff",
                                strokeWidth: 2,
                                stroke: pinkColor,
                              }}
                              isAnimationActive={true}
                              animationDuration={1000}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </Col>

                  <Col lg={4} md={12}>
                    <div style={styles.dailyTableBox}>
                      <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
                        <span>{t("dailySeeMore.date")}</span>
                        <span className="mx-5">{t("dailySeeMore.income")}</span>
                      </div>
                      <div
                        style={{ maxHeight: "300px", overflowY: "auto" }}
                        className="custom-scrollbar"
                      >
                        {dailyTableData.map((row, idx) => (
                          <div
                            key={`daily-${idx}`}
                            className="d-flex justify-content-between small mb-2"
                          >
                            <span className="opacity-75">{row.date}</span>
                            <span className="fw-bold mx-3">{row.displayIncome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-100px",
                    right: "-100px",
                    width: "250px",
                    height: "250px",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    filter: "blur(50px)",
                  }}
                ></div>
              </Card>
            </div>
          )}

          {/* Monthly View */}
          {!isTransitioning && view === "monthly" && (
            <div className="fade-in">
              {!hasMonthlyData ? (
                <div className="text-center py-5">
                  <p className="text-muted">{t("dailySeeMore.noData", { view: t("monthly") })}</p>
                  <Button
                    variant="outline-primary"
                    onClick={() => window.location.reload()}
                    className="mt-2"
                  >
                    {t("dailySeeMore.refreshData")}
                  </Button>
                </div>
              ) : (
                Object.keys(monthlyByYear)
                  .sort((a, b) => b - a)
                  .map((year) => {
                    const yearEarnings = monthlyByYear[year];
                    const yearChartData = formatMonthlyChartData(yearEarnings, year, i18n.language);
                    const yearTableData = formatMonthlyTableData(yearEarnings, year, i18n.language, t);
                    const yearTotalIncome = yearEarnings.reduce(
                      (sum, item) => sum + parseFloat(item.total_earnings || 0),
                      0
                    );

                    return (
                      <Card key={year} style={styles.incomeCard} className="mb-4">
                        <Row className="align-items-stretch">
                          <Col lg={8} md={12} className="mb-4 mb-lg-0">
                            <div className="position-relative" style={{ zIndex: 1 }}>
                              <div className="d-flex justify-content-between align-items-start mb-4">
                                <div>
                                  <div className="d-flex align-items-baseline gap-2 mb-1">
                                    {/* <span className="font-dollar">{t("thb")}</span> */}
                                    <span className="display-3 fw-bold">฿</span>
                                    <span className="display-3 fw-bold">
                                      {formatNumber(yearTotalIncome, i18n.language)}
                                    </span>
                                  </div>
                                  {/* {view === "monthly" && (
  <p className="opacity-75 h5">
    {t("dailySeeMore.yearLabel")}
  </p>
)} */}


{view === "monthly" && (
  <p className="opacity-75 h5">
    {t("dailySeeMore.monthlyIncome")} - {year}
  </p>
)}
                                </div>
                                <span className="display-6 fw-bold opacity-25">
                                  {year}
                                </span>
                              </div>

                              <div style={{ height: "260px", width: "100%" }}>
                                <ResponsiveContainer width="100%" height="100%">
                                  <AreaChart data={yearChartData}>
                                    <defs>
                                      <linearGradient
                                        id={`colorIncome${year}`}
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                      >
                                        <stop
                                          offset="5%"
                                          stopColor="#ffffff"
                                          stopOpacity={0.4}
                                        />
                                        <stop
                                          offset="95%"
                                          stopColor="#ffffff"
                                          stopOpacity={0}
                                        />
                                      </linearGradient>
                                    </defs>
                                    <XAxis
                                      dataKey="month"
                                      axisLine={false}
                                      tickLine={false}
                                      tick={{ fill: "#ffffff", fontSize: 10 }}
                                      dy={10}
                                    />
                                    <Tooltip
                                      contentStyle={{
                                        backgroundColor: "#ffffff",
                                        borderRadius: "8px",
                                        border: "none",
                                        color: pinkColor,
                                      }}
                                      formatter={(value, name, props) => {
                                        const hasData = props?.payload?.hasData;
                                        return [
                                          hasData ? formatCurrency(value, i18n.language, t) : "—",
                                          t("dailySeeMore.tooltipIncome"),
                                        ];
                                      }}
                                    />
                                    <Area
                                      type="monotone"
                                      dataKey="income"
                                      stroke="#ffffff"
                                      strokeWidth={2}
                                      fillOpacity={1}
                                      fill={`url(#colorIncome${year})`}
                                      dot={(props) => {
                                        const { cx, cy, payload } = props;
                                        const hasData = payload?.hasData;
                                        return (
                                          <circle
                                            cx={cx}
                                            cy={cy}
                                            r={hasData ? 4 : 0}
                                            fill="#ffffff"
                                          />
                                        );
                                      }}
                                      isAnimationActive={true}
                                      animationDuration={1000}
                                    />
                                  </AreaChart>
                                </ResponsiveContainer>
                              </div>
                            </div>
                          </Col>

                          <Col lg={4} md={12}>
                            <div style={styles.monthlyTableBox}>
                              <div className="d-flex justify-content-between border-bottom border-white border-opacity-25 pb-2 mb-2 small fw-bold text-uppercase opacity-75">
                                <span>{t("dailySeeMore.month")}</span>
                                <span className="mx-5">{t("dailySeeMore.income")}</span>
                              </div>
                              <div
                                style={{ maxHeight: "300px", overflowY: "auto" }}
                                className="custom-scrollbar"
                              >
                                {yearTableData.map((m, idx) => (
                                  <div
                                    key={`month-${year}-${idx}`}
                                    className="d-flex justify-content-between small mb-2"
                                  >
                                    <span className="opacity-75">
                                      {m.date.split(" ")[0]}
                                    </span>
                                    <span
                                      className={`${m.hasData ? "fw-bold" : "opacity-50"} mx-4`}
                                    >
                                      {m.displayIncome}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    );
                  })
              )}
            </div>
          )}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .fade-in { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 10px; }
        
        @media (max-width: 991px) {
          .mainContent {
            margin-left: 0 !important;
            width: 100% !important;
          }
        }
        
        @media (max-width: 768px) {
          .display-3 {
            font-size: 2.5rem;
          }
          .display-6 {
            font-size: 1.5rem;
          }
        }
      `,
        }}
      />
    </div>
  );
}










