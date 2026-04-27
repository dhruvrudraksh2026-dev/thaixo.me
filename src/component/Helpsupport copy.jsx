// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/Helpsupport.css";
// import Header from "./Header";

// const Helpsupport = () => {
//   return (
//     <div className="help-wrapper min-vh-100">
//       <Header />

//       <div className="container d-flex justify-content-center align-items-center mt-5">
//         <div className="help-card text-center p-5">
//           <h1 className="help-title">How can we help?</h1>
//           <p className="help-subtitle">
//             Find helpful articles to make the most of your experience.
//           </p>

//           <hr className="help-divider" />

//           <div className="row mt-4">
//             <div className="col-md-4 mb-3">
//               <div className="help-box">
//                 <h5>Your Profile</h5>
//                 <span>Start Chat →</span>
//               </div>
//             </div>

//             <div className="col-md-4 mb-3">
//               <div className="help-box">
//                 <h5>Withdrawal</h5>
//                 <span>Start Chat →</span>
//               </div>
//             </div>

//             <div className="col-md-4 mb-3">
//               <div className="help-box">
//                 <h5>Profile Strength</h5>
//                 <span>Start Chat →</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Helpsupport;
















// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/Helpsupport.css";
// import Header from "./Header";
// import line from "../assets/line.png";
// import telegram from "../assets/telegram.png";
// import whatsapp from "../assets/whatsapp.png";

// const Helpsupport = () => {
//   /* ===============================
//      THEME HANDLER (LIGHT / DARK / SYSTEM)
//   =============================== */
//   useEffect(() => {
//     const applyTheme = () => {
//       const theme = localStorage.getItem("theme") || "system";

//       if (theme === "system") {
//         document.documentElement.removeAttribute("data-theme");
//       } else {
//         document.documentElement.setAttribute("data-theme", theme);
//       }
//     };

//     // Initial apply
//     applyTheme();

//     // Listen to OS theme changes (SYSTEM only)
//     const media = window.matchMedia("(prefers-color-scheme: dark)");
//     const handleSystemChange = () => {
//       if ((localStorage.getItem("theme") || "system") === "system") {
//         document.documentElement.removeAttribute("data-theme");
//       }
//     };

//     // Sync across tabs
//     const handleStorageChange = (e) => {
//       if (e.key === "theme") applyTheme();
//     };

//     media.addEventListener("change", handleSystemChange);
//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       media.removeEventListener("change", handleSystemChange);
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   return (
//     <div className="help-wrapper min-vh-100 bg-black">
//       <Header />

//       <div className="container d-flex justify-content-center align-items-center mt-5">
//         <div className="help-card text-center p-5 bg-black">
//           <h1 className="help-title">How can we help?</h1>
//           <p className="help-subtitle">
//             Find helpful articles to make the most of your experience.
//           </p>

//           <hr className="help-divider" />

//           <div className="row mt-4 mt-5 pt-lg-5 ">
//             <div className="col-md-4 mb-3">
//               <div className="help-box bg-white">
//                 <div className="d-flex align-items-center justify-content-center gap-3">
//                   <img
//                     src={line}
//                     style={{ width: "20%" }}
//                     alt="Image-Not-Found"
//                   />
//                   <div>
//                     <h5 className="p-0 m-0 text-start other-color">Line</h5>
//                     <span className="p-0 m-0 other-color">Start Chat →</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-3">
//               <div className="help-box bg-white">
//                 <div className="d-flex align-items-center justify-content-center gap-3">
//                   <img
//                     src={telegram}
//                     style={{ width: "20%" }}
//                     alt="Image-Not-Found"
//                   />
//                   <div>
//                     <h5 className="p-0 m-0 other-color">Telegram</h5>
//                     <span className="p-0 m-0 other-color">Start Chat →</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-3">
//               <div className="help-box bg-white">
//                 <div className="d-flex align-items-center justify-content-center gap-3">
//                   <img
//                     src={whatsapp}
//                     style={{ width: "20%" }}
//                     alt="Image-Not-Found"
//                   />
//                   <div>
//                     <h5 className="p-0 m-0 other-color">WhatsApp</h5>
//                     <span className="p-0 m-0 other-color">Start Chat →</span>
//                   </div>
//                 </div>
//               </div>
//             </div>



//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Helpsupport;










import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Helpsupport.css";
import Header from "./Header";
import line from "../assets/line.png";
import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";

const Helpsupport = () => {
  /* ===============================
     LANGUAGE STATE
  =============================== */
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  /* ===============================
     TRANSLATIONS
  =============================== */
  const translations = {
    en: {
      title: "How can we help?",
      subtitle: "Find helpful articles to make the most of your experience.",
      startChat: "Start Chat →",
      line: "Line",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
    },
    th: {
      title: "เราจะช่วยคุณได้อย่างไร?",
      subtitle: "ค้นหาบทความที่เป็นประโยชน์เพื่อประสบการณ์ที่ดีที่สุดของคุณ",
      startChat: "เริ่มแชท →",
      line: "ไลน์",
      telegram: "เทเลแกรม",
      whatsapp: "วอตส์แอป",
    },
  };

  const t = translations[language];

  /* ===============================
     THEME HANDLER
  =============================== */
  useEffect(() => {
    const applyTheme = () => {
      const theme = localStorage.getItem("theme") || "system";
      if (theme === "system") {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", theme);
      }
    };

    applyTheme();
    setLanguage(localStorage.getItem("language") || "en");

    const handleStorageChange = (e) => {
      if (e.key === "language") setLanguage(e.newValue || "en");
      if (e.key === "theme") applyTheme();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="help-wrapper min-vh-100 bg-black">
      <Header />

      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="help-card text-center p-5 bg-black">
          <h1 className="help-title">{t.title}</h1>
          <p className="help-subtitle">{t.subtitle}</p>

          <hr className="help-divider" />

          <div className="row mt-4 pt-lg-5">
            {/* LINE */}
            <div className="col-md-4 mb-3">
              <div className="help-box bg-white">
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <img src={line} style={{ width: "20%" }} alt="Line" />
                  <div>
                    <h5 className="p-0 m-0 text-start other-color">
                      {t.line}
                    </h5>
                    <span className="p-0 m-0 other-color">
                      {t.startChat}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* TELEGRAM */}
            <div className="col-md-4 mb-3">
              <div className="help-box bg-white">
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <img src={telegram} style={{ width: "20%" }} alt="Telegram" />
                  <div>
                    <h5 className="p-0 m-0 other-color">
                      {t.telegram}
                    </h5>
                    <span className="p-0 m-0 other-color">
                      {t.startChat}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* WHATSAPP */}
            <div className="col-md-4 mb-3">
              <div className="help-box bg-white">
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <img src={whatsapp} style={{ width: "20%" }} alt="WhatsApp" />
                  <div>
                    <h5 className="p-0 m-0 other-color">
                      {t.whatsapp}
                    </h5>
                    <span className="p-0 m-0 other-color">
                      {t.startChat}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpsupport;

