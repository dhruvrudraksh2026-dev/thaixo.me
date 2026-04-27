// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/WithdrawalPromptPay.css";
// import Header from "./Header";

// const WithdrawalPromptPay = () => {
//   return (
//     <div className="ppw-page">
//       {/* HEADER */}
//    <Header />

//       {/* BODY */}
//       <div className="ppw-body">
//         <div className="ppw-form-wrapper">
//           <h2 className="ppw-title">Withdrawal Prompt Pay</h2>

//           <div className="ppw-field">
//             <input type="number" placeholder="Enter Amount" />
//             <small>
//               * A standard 2% cut will be applied to the total amount during
//               withdrawal
//             </small>
//           </div>

//           <div className="ppw-field">
//             <input type="text" placeholder="Enter Prompt Pay Number" />
//           </div>

//           <button className="ppw-submit">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WithdrawalPromptPay;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/WithdrawalPromptPay.css";
// import Header from "./Header";

// const WithdrawalPromptPay = () => {
//   return (
//     <div className="ppw-page">
//       <Header />

//       <div className="ppw-body">
//         <div className="ppw-form-wrapper">
//           {/* Amount */}
//           <div className="ppw-input-group">
//             <label className="ppw-label">Enter Amount*</label>
//             <input type="number" className="ppw-input" />
//           </div>

//           <p className="ppw-note">
//             *A standard 2% cut will be applied to the total amount during
//             Withdrawal.
//           </p>

//           {/* PromptPay */}
//           <div className="ppw-input-group mt-4">
//             <label className="ppw-label">Enter Prompt Pay Number*</label>
//             <input type="text" className="ppw-input" />
//           </div>

//           <button className="ppw-submit mt-5">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WithdrawalPromptPay;

// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/WithdrawalPromptPay.css";
// import Header from "./Header";

// const WithdrawalPromptPay = () => {
//   /* ===============================
//      APPLY THEME (LIGHT / DARK / SYSTEM)
//   =============================== */
//   const applyTheme = () => {
//     const savedTheme = localStorage.getItem("theme") || "system";

//     if (savedTheme === "system") {
//       // Remove attribute so :root controls theme
//       document.documentElement.removeAttribute("data-theme");
//     } else {
//       document.documentElement.setAttribute("data-theme", savedTheme);
//     }
//   };

//   /* INITIAL THEME APPLY */
//   useEffect(() => {
//     applyTheme();
//   }, []);

//   /* LISTEN TO SYSTEM THEME CHANGES */
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
//     <div className="ppw-page">
//       <Header />

//       <div className="ppw-body">
//         <div className="ppw-form-wrapper">

//           <h1 className="mb-5 heading-of-the-WithdrawalPromptPay" style={{wordSpacing:'0px'}}>Withdrawal Prompt Pay</h1>

//           {/* Amount */}
//           <div className="ppw-input-group mb-2">
//             <label className="ppw-label">Enter Amount*</label>
//             <input
//               type="number"
//               className="ppw-input"
//               placeholder="Enter amount"
//             />
//           </div>

//           <p className="ppw-note mb-5">
//             *A standard 2% cut will be applied to the total amount during
//             Withdrawal.
//           </p>

//           {/* PromptPay */}
//           <div className="ppw-input-group mt-4 mb-3">
//             <label className="ppw-label">Enter Prompt Pay Number*</label>
//             <input
//               type="text"
//               className="ppw-input"
//               placeholder="Enter PromptPay number"
//             />
//           </div>
//           <div className="submit-buttons">
//             <button className="ppw-submit mt-5">Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WithdrawalPromptPay;

// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/WithdrawalPromptPay.css";
// import Header from "./Header";

// const WithdrawalPromptPay = () => {
//   /* ===============================
//      APPLY THEME (LIGHT / DARK / SYSTEM)
//   =============================== */
//   const applyTheme = () => {
//     const savedTheme = localStorage.getItem("theme") || "system";

//     if (savedTheme === "system") {
//       document.documentElement.removeAttribute("data-theme");
//     } else {
//       document.documentElement.setAttribute("data-theme", savedTheme);
//     }
//   };

//   /* INITIAL APPLY */
//   useEffect(() => {
//     applyTheme();
//   }, []);

//   /* LISTEN SYSTEM THEME CHANGE */
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
//     <div className="ppw-page">
//       <Header />

//       <div className="ppw-body">
//         <div className="ppw-form-wrapper">
//           <h1 className="mb-5 heading-of-the-WithdrawalPromptPay">
//             Withdrawal Prompt Pay
//           </h1>

//           {/* Amount */}
//           <div className="ppw-input-group mb-2">
//             <label className="ppw-label">Enter Amount*</label>
//             <input
//               type="number"
//               className="ppw-input"
//               placeholder="Enter amount"
//             />
//           </div>

//           <p className="ppw-note mb-5">
//             *A standard 2% cut will be applied to the total amount during
//             Withdrawal.
//           </p>

//           {/* PromptPay */}
//           <div className="ppw-input-group mt-4 mb-3">
//             <label className="ppw-label">Enter Prompt Pay Number*</label>
//             <input
//               type="text"
//               className="ppw-input"
//               placeholder="Enter PromptPay number"
//             />
//           </div>

//           <div className="submit-buttons">
//             <button className="ppw-submit mt-5">Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WithdrawalPromptPay;

// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/WithdrawalPromptPay.css";
// import Header from "./Header";

// const WithdrawalPromptPay = () => {
//   const [amount, setAmount] = useState("");
//   const [promptPay, setPromptPay] = useState("");

//   /* ===============================
//      APPLY THEME (LIGHT / DARK / SYSTEM)
//   =============================== */
//   const applyTheme = () => {
//     const savedTheme = localStorage.getItem("theme") || "system";

//     if (savedTheme === "system") {
//       document.documentElement.removeAttribute("data-theme");
//     } else {
//       document.documentElement.setAttribute("data-theme", savedTheme);
//     }
//   };

//   useEffect(() => {
//     applyTheme();
//   }, []);

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
//      CALCULATIONS
//   =============================== */
//   const transactionFee = amount ? (amount * 2) / 100 : 0;
//   const netAmount = amount ? amount - transactionFee : 0;

//   return (
//     <div className="ppw-page">
//       <Header />

//       <div className="ppw-body">
//         <div className="ppw-form-wrapper mt-5">
//           <h1 className="mb-4 heading-of-the-WithdrawalPromptPay mt-5">
//             Withdrawal Prompt Pay
//           </h1>

//           {/* INFO MESSAGE */}
//           <div className="ppw-info-box mb-4">
//             <span className="ppw-info-icon">!</span>
//             <p className="p-0 m-0">
//               All withdrawal requests placed between 6:00 PM and 10:00 AM
//               (Thailand Time) will be processed after 10:00 AM.
//             </p>
//           </div>

//           {/* Amount */}
//           <div className="ppw-input-group mb-2">
//             <label className="ppw-label">Enter Amount*</label>
//             <input
//               type="number"
//               className="ppw-input"
//               placeholder="Enter amount"
//               value={amount}
//               onChange={(e) => setAmount(Number(e.target.value))}
//             />
//           </div>

//           <p className="ppw-note mb-4">
//             *A standard 2% cut will be applied to the total amount during
//             Withdrawal.
//           </p>

//           {/* PromptPay */}
//           <div className="ppw-input-group mt-3 mb-4">
//             <label className="ppw-label">Enter Prompt Pay Number*</label>
//             <input
//               type="text"
//               className="ppw-input"
//               placeholder="Enter PromptPay number"
//               value={promptPay}
//               onChange={(e) => setPromptPay(e.target.value)}
//             />
//           </div>

//           {/* SUMMARY */}
//           <div className="ppw-summary-box">
//             <div className="ppw-summary-row">
//               <span>Requested Amount</span>
//               <span>{amount ? amount.toLocaleString() : "0"}</span>
//             </div>

//             <div className="ppw-summary-row">
//               <span>2% Transaction Fee</span>
//               <span>{transactionFee.toLocaleString()}</span>
//             </div>

//             <div className="ppw-summary-row ppw-net">
//               <span>Net Amount</span>
//               <span>{netAmount.toLocaleString()}</span>
//             </div>
//           </div>

//           <div className="submit-buttons">
//             <button className="ppw-submit mt-4">Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WithdrawalPromptPay;

// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/WithdrawalPromptPay.css";
// import Header from "./Header";

// const WithdrawalPromptPay = () => {
//   const [amount, setAmount] = useState("");
//   const [promptPay, setPromptPay] = useState("");
//   const [credit, setCredit] = useState(10000); // CREDIT VALUE

//   /* ===============================
//      APPLY THEME (LIGHT / DARK / SYSTEM)
//   =============================== */
//   const applyTheme = () => {
//     const savedTheme = localStorage.getItem("theme") || "system";

//     if (savedTheme === "system") {
//       document.documentElement.removeAttribute("data-theme");
//     } else {
//       document.documentElement.setAttribute("data-theme", savedTheme);
//     }
//   };

//   useEffect(() => {
//     applyTheme();
//   }, []);

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
//      CALCULATIONS
//   =============================== */
//   const transactionFee = amount ? (amount * 2) / 100 : 0;
//   const netAmount = amount ? amount - transactionFee : 0;

//   return (
//     <div className="ppw-page bg-black">
//       <Header />

//       <div className="ppw-body mt-5">
//         <div className="ppw-form-wrapper mt-5">
//           <h1 className="mb-4 heading-of-the-WithdrawalPromptPay">
//             Withdrawal Prompt Pay
//           </h1>

//           {/* INFO MESSAGE */}
//           <div className="ppw-info-box mb-3">
//             <span className="ppw-info-icon">!</span>
//             <p>
//               All withdrawal requests placed between 6:00 PM and 10:00 AM
//               (Thailand Time) will be processed after 10:00 AM.
//             </p>
//           </div>

//           {/* CREDIT */}
//           <button className="ppw-credit-box mb-4 p-1 border-white bg-transparent">
//             <span className="text-white">Credit - </span>
//             <span className="text-white">{credit.toLocaleString()}</span>
//           </button>

//           {/* AMOUNT */}
//           <div className="ppw-input-group mb-2">
//             <label className="ppw-label">Enter Amount*</label>
//             <input
//               type="number"
//               className="ppw-input"
//               placeholder="Enter amount"
//               value={amount}
//               onChange={(e) => setAmount(Number(e.target.value))}
//             />
//           </div>

//           <p className="ppw-note mb-3">
//             *A standard 2% cut will be applied to the total amount during
//             Withdrawal.
//           </p>

//           {/* PROMPT PAY */}
//           <div className="ppw-input-group mt-2 mb-3">
//             <label className="ppw-label">Enter Prompt Pay Number*</label>
//             <input
//               type="text"
//               className="ppw-input"
//               placeholder="Enter PromptPay number"
//               value={promptPay}
//               onChange={(e) => setPromptPay(e.target.value)}
//             />
//           </div>

//           {/* SUMMARY */}
//           <div className="ppw-summary-box">
//             <div className="ppw-summary-row ps-2 px-2">
//               <span>Requested Amount</span>
//               <span>{amount ? amount.toLocaleString() : "0"}</span>
//             </div>

//             <div className="ppw-summary-row ps-2 px-2">
//               <span>2% Transaction Fee</span>
//               <span>{transactionFee.toLocaleString()}</span>
//             </div>

//             <div className="ppw-summary-row ppw-net text-black ps-2 ps-2 px-2" style={{background:"#05CFD9"}}>
//               <span>Net Amount</span>
//               <span className="text-black">{netAmount.toLocaleString()}</span>
//             </div>
//           </div>

//           <div className="submit-buttons">
//             <button className="ppw-submit mt-4">Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WithdrawalPromptPay;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/WithdrawalPromptPay.css";
import Header from "./Header";

const WithdrawalPromptPay = () => {
  const navigate = useNavigate(); // 👈 ADD THIS
  /* ===============================
     LANGUAGE STATE
  =============================== */
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en",
  );

  /* ===============================
     FORM STATE
  =============================== */
  const [amount, setAmount] = useState("");
  const [promptPay, setPromptPay] = useState("");
  const [credit] = useState(10000);

  const handleSubmit = () => {
    // Optional validation
    if (!amount || !promptPay) {
      alert(
        language === "th"
          ? "กรุณากรอกข้อมูลให้ครบถ้วน"
          : "Please fill all required fields",
      );
      return;
    }

    // Redirect to Withdrawal History page
    navigate("/withdrawalhistory");
  };

  /* ===============================
     TRANSLATIONS
  =============================== */
  const translations = {
    en: {
      title: "Withdrawal Prompt Pay",
      infoMessage:
        "All withdrawal requests placed between 6:00 PM and 10:00 AM (Thailand Time) will be processed after 10:00 AM.",
      credit: "Credit",
      enterAmount: "Requested Amount**",
      amountPlaceholder: "Requested Amount*",
      feeNote:
        "*A standard 2% cut will be applied to the total amount during Withdrawal.",
      enterPromptPay: "Enter Prompt Pay Number*",
      promptPayPlaceholder: "Enter PromptPay number",
      requestedAmount: "Requested Amount",
      transactionFee: "2% Transaction Fee",
      netAmount: "Net Amount",
      submit: "Submit",
    },
    th: {
      title: "ถอนเงินพร้อมเพย์",
      infoMessage:
        "คำขอถอนเงินที่ทำรายการระหว่างเวลา 18:00 น. ถึง 10:00 น. (เวลาไทย) จะดำเนินการหลัง 10:00 น.",
      credit: "เครดิต",
      enterAmount: "กรอกจำนวนเงิน*",
      amountPlaceholder: "กรอกจำนวนเงิน",
      feeNote: "*จะมีการหักค่าธรรมเนียม 2% จากยอดรวมในระหว่างการถอนเงิน",
      enterPromptPay: "กรอกหมายเลขพร้อมเพย์*",
      promptPayPlaceholder: "กรอกหมายเลขพร้อมเพย์",
      requestedAmount: "จำนวนเงินที่ร้องขอ",
      transactionFee: "ค่าธรรมเนียม 2%",
      netAmount: "ยอดสุทธิ",
      submit: "ส่งคำขอ",
    },
  };

  /* ===============================
     APPLY THEME
  =============================== */
  const applyTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "system";

    if (savedTheme === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  };

  useEffect(() => {
    applyTheme();
  }, []);

  useEffect(() => {
    const lang = localStorage.getItem("language") || "en";
    setLanguage(lang);
  }, []);

  /* ===============================
     CALCULATIONS
  =============================== */
  const transactionFee = amount ? (amount * 2) / 100 : 0;
  const netAmount = amount ? amount - transactionFee : 0;

  const t = translations[language];

  return (
    <div className="ppw-page bg-black">
      <Header />

      <div className="ppw-body mt-5">
        <div className="ppw-form-wrapper mt-5">
          <h1 className="mb-4 heading-of-the-WithdrawalPromptPay">{t.title}</h1>

          {/* INFO MESSAGE */}
          <div className="ppw-info-box mb-3">
            <span className="ppw-info-icon">!</span>
            <p>{t.infoMessage}</p>
          </div>

          {/* CREDIT */}
          <button className="ppw-credit-box mb-4 p-1 border-white bg-transparent">
            <span className="text-white">{t.credit} - </span>
            <span className="text-white">{credit.toLocaleString()}</span>
          </button>

          {/* AMOUNT */}
          <div className="ppw-input-group mb-2">
            <label className="ppw-label">{t.enterAmount}</label>
            <input
              type="number"
              className="ppw-input"
              placeholder={t.amountPlaceholder}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <p className="ppw-note mb-3">{t.feeNote}</p>

          {/* PROMPT PAY */}
          <div className="ppw-input-group mt-2 mb-3">
            <label className="ppw-label">{t.enterPromptPay}</label>
            <input
              type="text"
              className="ppw-input"
              placeholder={t.promptPayPlaceholder}
              value={promptPay}
              onChange={(e) => setPromptPay(e.target.value)}
            />
          </div>

          {/* SUMMARY */}
          <div className="ppw-summary-box">
            <div className="ppw-summary-row ps-2 px-2">
              <span>{t.requestedAmount}</span>
              <span>{amount ? amount.toLocaleString() : "0"}</span>
            </div>

            <div className="ppw-summary-row ps-2 px-2">
              <span>{t.transactionFee}</span>
              <span>{transactionFee.toLocaleString()}</span>
            </div>

            <div
              className="ppw-summary-row ppw-net ps-2 px-2 text-black"
              style={{ background: "#05CFD9" }}
            >
              <span>{t.netAmount}</span>
              <span className="text-black">{netAmount.toLocaleString()}</span>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="submit-buttons">
            {/* <button className="ppw-submit bg-colorsss mt-4">{t.submit}</button> */}
            <button
              className="ppw-submit bg-colorsss mt-4"
              onClick={handleSubmit}
            >
              {t.submit}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalPromptPay;
