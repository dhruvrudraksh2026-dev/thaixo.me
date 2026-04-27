// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/withdrawalHistory.css";
// import Header from "./Header";

// const WithdrawalHistory = () => {
//   const rows = [
//     { date: "17/11/2025", amount: "25 ฿", method: "UPI", tx: "#th1234XO", time: "4 hrs", note: "Credited Successfully", status: "Completed" },
//     { date: "17/11/2025", amount: "25 ฿", method: "Bank", tx: "#th5678XO", time: "–", note: "Invalid Wallet Id", status: "Rejected" },
//     { date: "17/11/2025", amount: "25 ฿", method: "Wallet", tx: "#th1243XO", time: "24 hrs", note: "Processing", status: "Pending" },
//     { date: "18/11/2025", amount: "25 ฿", method: "UPI", tx: "#th1234XO", time: "4 hrs", note: "Credited Successfully", status: "Completed" },
//     { date: "16/11/2025", amount: "25 ฿", method: "Bank", tx: "#th5678XO", time: "–", note: "Invalid Wallet Id", status: "Rejected" },
//     { date: "16/11/2025", amount: "25 ฿", method: "Wallet", tx: "#th1243XO", time: "24 hrs", note: "Processing", status: "Pending" },
//   ];

//   return (
//     <div className="withdrawal-history-wrapper min-vh-100">
//       <Header />

//       <div className="container-fluid px-5 mt-4">
//         <h3 className="text-white fw-bold mb-3">Withdrawal History</h3>

//         <div className="table-responsive history-table-wrapper">
//           <table className="table history-tables mb-0">
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Amount</th>
//                 <th>Method</th>
//                 <th>Transaction ID</th>
//                 <th>Processing Time</th>
//                 <th>Note</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((r, i) => (
//                 <tr key={i}>
//                   <td className="text-white">{r.date}</td>
//                   <td className="text-white">{r.amount}</td>
//                   <td className="text-white">{r.method}</td>
//                   <td className="text-white">{r.tx}</td>
//                   <td className="text-white">{r.time}</td>
//                   <td className="text-white">{r.note}</td>
//                   <td className="text-white">
//                     <span className={`status ${r.status.toLowerCase()}`}>
//                       {r.status === "Completed" && "🟢"}
//                       {r.status === "Rejected" && "🔴"}
//                       {r.status === "Pending" && "⏳"} {r.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WithdrawalHistory;



























// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/withdrawalHistory.css";
// import Header from "./Header";

// const WithdrawalHistory = () => {
//   const rows = [
//     { date: "17/11/2025", amount: "25 ฿", method: "UPI", tx: "#th1234XO", time: "4 hrs", note: "Credited Successfully", status: "Completed" },
//     { date: "17/11/2025", amount: "25 ฿", method: "Bank", tx: "#th5678XO", time: "–", note: "Invalid Wallet Id", status: "Rejected" },
//     { date: "17/11/2025", amount: "25 ฿", method: "Wallet", tx: "#th1243XO", time: "24 hrs", note: "Processing", status: "Pending" },
//     { date: "18/11/2025", amount: "25 ฿", method: "UPI", tx: "#th1234XO", time: "4 hrs", note: "Credited Successfully", status: "Completed" },
//     { date: "16/11/2025", amount: "25 ฿", method: "Bank", tx: "#th5678XO", time: "–", note: "Invalid Wallet Id", status: "Rejected" },
//     { date: "16/11/2025", amount: "25 ฿", method: "Wallet", tx: "#th1243XO", time: "24 hrs", note: "Processing", status: "Pending" },
//   ];

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

//   return (
//     <div className="withdrawal-history-wrapper min-vh-100 bg-black">
//       <Header />

//       <div className="container-fluid px-5 mt-4">
//         <h3 className="heading-text fw-bold mb-3">Withdrawal History</h3>

//         <div className="table-responsive history-table-wrapper">
//           <table className="table history-tables mb-0">
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Amount</th>
//                 <th>Method</th>
//                 <th>Transaction ID</th>
//                 <th>Processing Time</th>
//                 <th>Note</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((r, i) => (
//                 <tr key={i}>
//                   <td className="text-color">{r.date}</td>
//                   <td className="text-color">{r.amount}</td>
//                   <td className="text-color">{r.method}</td>
//                   <td className="text-color">{r.tx}</td>
//                   <td className="text-color">{r.time}</td>
//                   <td className="text-color">{r.note}</td>
//                   <td className="text-color">
//                     <span className={`status ${r.status.toLowerCase()}`}>
//                       {r.status === "Completed" && "🟢"}
//                       {r.status === "Rejected" && "🔴"}
//                       {r.status === "Pending" && "⏳"} {r.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WithdrawalHistory;














import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/withdrawalHistory.css";
import Header from "./Header";

const WithdrawalHistory = () => {

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const translations = {
    en: {
      title: "Withdrawal History",
      date: "Date",
      amount: "Amount",
      method: "Method",
      tx: "Transaction ID",
      time: "Processing Time",
      note: "Note",
      status: "Status",
      completed: "Completed",
      rejected: "Rejected",
      pending: "Pending",

      UPI: "UPI",
      Bank: "Bank",
      Wallet: "Wallet",

      credited: "Credited Successfully",
      invalid: "Invalid Wallet Id",
      processing: "Processing",
    },
    th: {
      title: "ประวัติการถอนเงิน",
      date: "วันที่",
      amount: "จำนวนเงิน",
      method: "วิธีการ",
      tx: "รหัสธุรกรรม",
      time: "เวลาที่ใช้",
      note: "หมายเหตุ",
      status: "สถานะ",
      completed: "สำเร็จ",
      rejected: "ถูกปฏิเสธ",
      pending: "กำลังดำเนินการ",

      UPI: "พร้อมเพย์",
      Bank: "ธนาคาร",
      Wallet: "วอลเล็ต",

      credited: "โอนเงินสำเร็จ",
      invalid: "รหัสวอลเล็ตไม่ถูกต้อง",
      processing: "กำลังดำเนินการ",
    },
  };

  const rows = [
    { date: "17/11/2025", amount: "25 ฿", method: "UPI", tx: "#th1234XO", time: "4 hrs", note: "credited", status: "Completed" },
    { date: "17/11/2025", amount: "25 ฿", method: "Bank", tx: "#th5678XO", time: "–", note: "invalid", status: "Rejected" },
    { date: "17/11/2025", amount: "25 ฿", method: "Wallet", tx: "#th1243XO", time: "24 hrs", note: "processing", status: "Pending" },
    { date: "18/11/2025", amount: "25 ฿", method: "UPI", tx: "#th1234XO", time: "4 hrs", note: "Credited Successfully", status: "Completed" },
    { date: "16/11/2025", amount: "25 ฿", method: "Bank", tx: "#th5678XO", time: "–", note: "Invalid Wallet Id", status: "Rejected" },
    { date: "16/11/2025", amount: "25 ฿", method: "Wallet", tx: "#th1243XO", time: "24 hrs", note: "Processing", status: "Pending" },
  ];

  useEffect(() => {
    const lang = localStorage.getItem("language") || "en";
    setLanguage(lang);
  }, []);

  return (
    <div className="withdrawal-history-wrapper min-vh-100 bg-black">
      <Header />

      <div className="container-fluid px-5 mt-4">
        <h3 className="heading-text fw-bold mb-3">
          {translations[language].title}
        </h3>

        <div className="table-responsive history-table-wrapper">
          <table className="table history-tables mb-0">
            <thead>
              <tr>
                <th>{translations[language].date}</th>
                <th>{translations[language].amount}</th>
                <th>{translations[language].method}</th>
                <th>{translations[language].tx}</th>
                <th>{translations[language].time}</th>
                <th>{translations[language].note}</th>
                <th>{translations[language].status}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>{r.date}</td>
                  <td>{r.amount}</td>
                  <td>{translations[language][r.method]}</td>
                  <td>{r.tx}</td>
                  <td>{r.time}</td>
                  <td>{translations[language][r.note]}</td>
                  <td>
                    <span className={`status ${r.status.toLowerCase()}`}>
                      {r.status === "Completed" && "🟢 "}
                      {r.status === "Rejected" && "🔴 "}
                      {r.status === "Pending" && "⏳ "}
                      {translations[language][r.status.toLowerCase()]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalHistory;
