// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/VideoCallHistory.css";
// import Header from "./Header";

// const VideoCallHistory = () => {
//   const data = Array(20).fill({
//     date: "18/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58pm",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   });

//   return (
//     <div className="history-wrapper min-vh-100">
//       {/* HEADER */}
//       <Header />

//       {/* CONTENT */}
//       <div className="container-fluid px-5 mt-4">
//         <h3 className="text-white fw-bold mb-3">Video Call History</h3>

//         <div className="table-responsive history-table-wrapper">
//           <table className="table history-table mb-0">
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Username</th>
//                 <th>Time</th>
//                 <th>Duartion</th>
//                 <th>Rate</th>
//                 <th>Income</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((row, index) => (
//                 <tr key={index}>
//                   <td>{row.date}</td>
//                   <td>{row.username}</td>
//                   <td>{row.time}</td>
//                   <td>{row.duration}</td>
//                   <td>{row.rate}</td>
//                   <td>{row.income}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCallHistory;


















// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/VideoCallHistory.css";
// import Header from "./Header";

// const VideoCallHistory = () => {
//   // Sample data
//   const data = Array(20).fill({
//     date: "18/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58pm",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   });

//   // 1️⃣ Theme setup
//   useEffect(() => {
//     // Set initial theme from localStorage
//     const currentTheme = localStorage.getItem("theme") || "light";
//     document.documentElement.setAttribute("data-theme", currentTheme);

//     // Listen to theme changes in Header
//     const handleStorageChange = (e) => {
//       if (e.key === "theme") {
//         const newTheme = e.newValue || "light";
//         document.documentElement.setAttribute("data-theme", newTheme);
//       }
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   return (
//     <div className="history-wrapper min-vh-100">
//       {/* HEADER */}
//       <Header />

//       {/* CONTENT */}
//       <div className="container-fluid px-5 mt-4">
//         <h3 className="text-white fw-bold mb-3">Video Call History</h3>

//         <div className="table-responsive history-table-wrapper">
//           <table className="table history-table mb-0">
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Username</th>
//                 <th>Time</th>
//                 <th>Duration</th>
//                 <th>Rate</th>
//                 <th>Income</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((row, index) => (
//                 <tr key={index}>
//                   <td>{row.date}</td>
//                   <td>{row.username}</td>
//                   <td>{row.time}</td>
//                   <td>{row.duration}</td>
//                   <td>{row.rate}</td>
//                   <td>{row.income}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCallHistory;
































// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/VideoCallHistory.css";
// import Header from "./Header";

// const VideoCallHistory = () => {
//   const data = Array(20).fill({
//     date: "18/11/2025",
//     username: "Raj_suvana",
//     time: "09:45 - 09:58pm",
//     duration: "14 min",
//     rate: "02 ฿",
//     income: "028 ฿",
//   });

//   // Full theme listener
//   useEffect(() => {
//     const applyTheme = (t) => {
//       document.documentElement.setAttribute("data-theme", t || "light");
//     };

//     // Initial theme
//     applyTheme(localStorage.getItem("theme"));

//     // Listen for theme changes from Header
//     const handleStorageChange = (e) => {
//       if (e.key === "theme") applyTheme(e.newValue);
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   return (
//     <div className="history-wrapper min-vh-100">
//       <Header />

//       <div className="container-fluid px-5 mt-4">
//         <h3 className="fw-bold mb-3">Video Call History</h3>

//         <div className="table-responsive history-table-wrapper">
//           <table className="table history-table mb-0">
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Username</th>
//                 <th>Time</th>
//                 <th>Duration</th>
//                 <th>Rate</th>
//                 <th>Income</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((row, index) => (
//                 <tr key={index}>
//                   <td>{row.date}</td>
//                   <td>{row.username}</td>
//                   <td>{row.time}</td>
//                   <td>{row.duration}</td>
//                   <td>{row.rate}</td>
//                   <td>{row.income}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCallHistory;























import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/VideoCallHistory.css";
import Header from "./Header";

const VideoCallHistory = () => {
  const data = Array(20).fill({
    date: "18/11/2025",
    username: "Raj_suvana",
    time: "09:45 - 09:58pm",
    duration: "14 min",
    rate: "02 ฿",
    income: "028 ฿",
  });

  /* ===============================
     APPLY THEME (READ FROM STORAGE)
  =============================== */
  const applyTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "system";

    if (savedTheme === "system") {
      // IMPORTANT: remove attribute so :root applies
      document.documentElement.removeAttribute("data-theme");
      return;
    }

    // light or dark
    document.documentElement.setAttribute("data-theme", savedTheme);
  };

  /* Initial theme apply */
  useEffect(() => {
    applyTheme();
  }, []);

  /* Listen to OS theme changes (SYSTEM ONLY) */
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "system") {
        document.documentElement.removeAttribute("data-theme");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="history-wrapper min-vh-100">
      <Header />

      <div className="container-fluid px-5 mt-4">
        <h3 className="fw-bold mb-3 video-call-history">Video Call History</h3>

        <div className="table-responsive history-table-wrapper">
          <table className="table history-table mb-0">
            <thead>
              <tr>
                <th>Date</th>
                <th>Username</th>
                <th>Time</th>
                <th>Duration</th>
                <th>Rate</th>
                <th>Income</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.date}</td>
                  <td>{row.username}</td>
                  <td>{row.time}</td>
                  <td>{row.duration}</td>
                  <td>{row.rate}</td>
                  <td>{row.income}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VideoCallHistory;
