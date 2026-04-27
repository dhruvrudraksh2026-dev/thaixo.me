// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/kpluspay.css";

// const KPlusPay = () => {
//   return (
//     <div className="kpp-page">
//       {/* HEADER */}
//       <header className="kpp-header">
//         <div className="kpp-logo">
//           <span className="kpp-logo-xo">XO</span>
//           <span className="kpp-logo-text">Thaixo</span>
//         </div>

//         <div className="kpp-header-right">
//           <div className="kpp-credit">Credit – 10,000.00</div>
//           <img
//             src="https://i.pravatar.cc/40"
//             alt="profile"
//             className="kpp-avatar"
//           />
//         </div>
//       </header>

//       {/* BODY */}
//       <div className="kpp-body">
//         <div className="kpp-form">
//           <h2 className="kpp-title">K plus Pay</h2>

//           <div className="kpp-field">
//             <input type="number" placeholder="Enter Amount" />
//             <small>
//               * A standard 2% cut will be applied to the total amount during
//               withdrawal
//             </small>
//           </div>

//           <div className="kpp-field">
//             <input type="text" placeholder="Account Holder Name" />
//           </div>

//           <div className="kpp-field">
//             <input type="text" placeholder="Kbank Account Number" />
//           </div>

//           <div className="kpp-field">
//             <input type="text" placeholder="Registered Mobile Number" />
//           </div>

//           <button className="kpp-submit">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KPlusPay;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/kpluspay.css";
// import Header from './Header';

// const KPlusPay = () => {
//   return (
//     <div className="kpp-page">
//       {/* HEADER */}
//       <Header />

//       {/* BODY */}
//       <div className="kpp-body ms-lg-5 ms-md-0">
//         <div className="kpp-form">

//           <h2 className="kpp-title">K Plus Pay</h2>

//           {/* Amount */}
//           <div className="kpp-input-group">
//             <label className="kpp-label">Enter Amount*</label>
//             <input type="number" className="kpp-input" />
//           </div>

//           <p className="kpp-note">
//             *A standard 2% cut will be applied to the total amount during withdrawal.
//           </p>

//           {/* Account Holder */}
//           <div className="kpp-input-group">
//             <label className="kpp-label">Account Holder Name*</label>
//             <input type="text" className="kpp-input" />
//           </div>

//           {/* Account Number */}
//           <div className="kpp-input-group">
//             <label className="kpp-label">KBank Account Number*</label>
//             <input type="text" className="kpp-input" />
//           </div>

//           {/* Mobile */}
//           <div className="kpp-input-group">
//             <label className="kpp-label">Registered Mobile Number*</label>
//             <input type="text" className="kpp-input" />
//           </div>

//           <button className="kpp-submit">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KPlusPay;

// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/kpluspay.css";
// import Header from "./Header";

// const KPlusPay = () => {

//   /* ===============================
//      APPLY THEME (LIGHT / DARK / SYSTEM)
//   =============================== */
//   const applyTheme = () => {
//     const savedTheme = localStorage.getItem("theme") || "system";

//     if (savedTheme === "system") {
//       // Let :root decide based on OS
//       document.documentElement.removeAttribute("data-theme");
//     } else {
//       document.documentElement.setAttribute("data-theme", savedTheme);
//     }
//   };

//   /* INITIAL THEME APPLY */
//   useEffect(() => {
//     applyTheme();
//   }, []);

//   /* LISTEN TO OS THEME CHANGES (SYSTEM MODE) */
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

//     const handleChange = () => {
//       if ((localStorage.getItem("theme") || "system") === "system") {
//         document.documentElement.removeAttribute("data-theme");
//       }
//     };

//     mediaQuery.addEventListener("change", handleChange);
//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, []);

//   return (
//     <div className="kpp-page">
//       {/* HEADER */}
//       <Header />

//       {/* BODY */}
//       <div className="kpp-body ms-lg-5 ms-md-0">
//         <div className="kpp-form">
//           <h1 className="kpp-title">K Plus Pay</h1>

//           {/* Amount */}
//           <div className="kpp-input-group">
//             <label className="kpp-label">Enter Amount*</label>
//             <input
//               type="number"
//               className="kpp-input"
//               placeholder="Enter amount"
//             />
//           </div>

//           <p className="kpp-note">
//             *A standard 2% cut will be applied to the total amount during
//             withdrawal.
//           </p>

//           {/* Account Holder */}
//           <div className="kpp-input-group">
//             <label className="kpp-label">Account Holder Name*</label>
//             <input
//               type="text"
//               className="kpp-input"
//               placeholder="Enter account holder name"
//             />
//           </div>

//           {/* Account Number */}
//           <div className="kpp-input-group">
//             <label className="kpp-label">KBank Account Number*</label>
//             <input
//               type="text"
//               className="kpp-input"
//               placeholder="Enter account number"
//             />
//           </div>

//           {/* Mobile */}
//           <div className="kpp-input-group">
//             <label className="kpp-label">Registered Mobile Number*</label>
//             <input
//               type="text"
//               className="kpp-input"
//               placeholder="Enter mobile number"
//             />
//           </div>

//           <button className="kpp-submit">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KPlusPay;

// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/kpluspay.css";
// import Header from "./Header";

// const KPlusPay = () => {
//   const [amount, setAmount] = useState("");
//   const [credit, setCredit] = useState(10000);

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
//     <div className="kpp-page bg-black">
//       <Header />

//       <div className="kpp-body">
//         <div className="kpp-form">
//           <h1 className="kpp-title mb-4">K Plus Pay</h1>

//           {/* INFO MESSAGE */}
//           <div className="kpp-info-box mb-3">
//             <span className="kpp-info-icon">!</span>
//             <p>
//               All withdrawal requests placed between 6:00 PM and 10:00 AM
//               (Thailand Time) will be processed after 10:00 AM.
//             </p>
//           </div>

//           {/* CREDIT BOX */}
//           <button className="kpp-credit-box mb-4 p-1 border-white bg-transparent">
//             <span className="text-white">Credit - </span>
//             <span className="text-white">{credit.toLocaleString()}</span>
//           </button>

//           {/* AMOUNT */}
//           <div className="kpp-input-group mb-2">
//             <label className="kpp-label bg-black">Enter Amount*</label>
//             <input
//               type="number"
//               className="kpp-input"
//               placeholder="Enter amount"
//               value={amount}
//               onChange={(e) => setAmount(Number(e.target.value))}
//             />
//           </div>

//           <p className="kpp-note mb-3">
//             *A standard 2% cut will be applied to the total amount during
//             withdrawal.
//           </p>

//           {/* ACCOUNT HOLDER */}
//           <div className="kpp-input-group mb-3">
//             <label className="kpp-label bg-black">Account Holder Name*</label>
//             <input
//               type="text"
//               className="kpp-input"
//               placeholder="Enter account holder name"
//             />
//           </div>

//           {/* ACCOUNT NUMBER */}
//           <div className="kpp-input-group mb-3">
//             <label className="kpp-label bg-black">KBank Account Number*</label>
//             <input
//               type="text"
//               className="kpp-input"
//               placeholder="Enter account number"
//             />
//           </div>

//           {/* MOBILE */}
//           <div className="kpp-input-group mb-4">
//             <label className="kpp-label bg-black">Registered Mobile Number*</label>
//             <input
//               type="text"
//               className="kpp-input"
//               placeholder="Enter mobile number"
//             />
//           </div>

//           {/* SUMMARY BOX */}
//           <div className="kpp-summary-box">
//             <div className="kpp-summary-row px-2 ">
//               <span>Requested Amount</span>
//               <span>{amount ? amount.toLocaleString() : "0"}</span>
//             </div>

//             <div className="kpp-summary-row px-2">
//               <span>2% Transaction Fee</span>
//               <span>{transactionFee.toLocaleString()}</span>
//             </div>

//             <div
//               className="kpp-summary-row kpp-net text-black px-2"
//               style={{ background: "#05CFD9" }}
//             >
//               <span>Net Amount</span>
//               <span className="text-black">
//                 {netAmount.toLocaleString()}
//               </span>
//             </div>
//           </div>

//           <button className="kpp-submit mt-4">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KPlusPay;











// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/kpluspay.css";
// import Header from "./Header";

// const KPlusPay = () => {
//   const navigate = useNavigate(); // 👈 ADD THIS
//   /* ===============================
//      LANGUAGE STATE
//   =============================== */
//   const [language, setLanguage] = useState(
//     localStorage.getItem("language") || "en",
//   );

//   const [amount, setAmount] = useState("");
//   const [credit, setCredit] = useState(10000);

//   /* ===============================
//      TRANSLATIONS
//   =============================== */
//   const translations = {
//     en: {
//       title: "K Plus Pay",
//       info: "All withdrawal requests placed between 6:00 PM and 10:00 AM (Thailand Time) will be processed after 10:00 AM.",
//       credit: "Credit",
//       enterAmount: "Requested Amount*",
//       amountPlaceholder: "Account Holder Name*",
//       note: "*A standard 2% cut will be applied to the total amount during withdrawal.",
//       accountHolder: "Account Holder Name*",
//       accountHolderPlaceholder: "Enter account holder name",
//       accountNumber: "KBank Account Number*",
//       accountNumberPlaceholder: "Enter account number",
//       mobile: "K+ Registered Mobile Number*",
//       mobilePlaceholder: "Enter mobile number",
//       requestedAmount: "Requested Amount",
//       transactionFee: "2% Transaction Fee",
//       netAmount: "Net Amount",
//       submit: "Submit",
//     },
//     th: {
//       title: "เคพลัสเพย์",
//       info: "คำขอถอนเงินทั้งหมดที่ทำรายการระหว่างเวลา 18:00 น. ถึง 10:00 น. (เวลาไทย) จะได้รับการดำเนินการหลังเวลา 10:00 น.",
//       credit: "เครดิต",
//       enterAmount: "กรอกจำนวนเงิน*",
//       amountPlaceholder: "กรอกจำนวนเงิน",
//       note: "*จะมีการหักค่าธรรมเนียมมาตรฐาน 2% จากยอดรวมในระหว่างการถอนเงิน",
//       accountHolder: "ชื่อเจ้าของบัญชี*",
//       accountHolderPlaceholder: "กรอกชื่อเจ้าของบัญชี",
//       accountNumber: "หมายเลขบัญชีธนาคารกสิกร*",
//       accountNumberPlaceholder: "กรอกหมายเลขบัญชี",
//       mobile: "หมายเลขโทรศัพท์ที่ลงทะเบียน*",
//       mobilePlaceholder: "กรอกหมายเลขโทรศัพท์",
//       requestedAmount: "จำนวนเงินที่ร้องขอ",
//       transactionFee: "ค่าธรรมเนียม 2%",
//       netAmount: "จำนวนเงินสุทธิ",
//       submit: "ส่งคำขอ",
//     },
//   };

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

//     // Listen language change from Header
//     const lang = localStorage.getItem("language") || "en";
//     setLanguage(lang);
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
//      PAGE-SPECIFIC BODY OVERFLOW
//      (ONLY FOR KPlusPay)
//   =============================== */
//   useEffect(() => {
//     // Save previous overflow value
//     const previousOverflow = document.body.style.overflow;

//     // Enable scroll for this page
//     document.body.style.overflow = "auto";

//     // Cleanup when leaving the page
//     return () => {
//       document.body.style.overflow = previousOverflow;
//     };
//   }, []);

//   /* ===============================
//      CALCULATIONS
//   =============================== */
//   const transactionFee = amount ? (amount * 2) / 100 : 0;
//   const netAmount = amount ? amount - transactionFee : 0;

//   const t = translations[language];

//   const handleSubmit = () => {
//     // Optional validation
//     if (!amount || !promptPay) {
//       alert(
//         language === "th"
//           ? "กรุณากรอกข้อมูลให้ครบถ้วน"
//           : "Please fill all required fields",
//       );
//       return;
//     }

//     // Redirect to Withdrawal History page
//     navigate("/withdrawalhistory");
//   };

//   return (
//     <div className="kpp-page bg-black kpp-scroll">
//       <Header />

//       <div className="kpp-body">
//         <div className="kpp-form">
//           <h1 className="kpp-title mb-4">{t.title}</h1>

//           {/* INFO MESSAGE */}
//           <div className="kpp-info-box mb-3">
//             <span className="kpp-info-icon">!</span>
//             <p>{t.info}</p>
//           </div>

//           {/* CREDIT BOX */}
//           <button className="kpp-credit-box mb-4 p-1 border-white bg-transparent">
//             <span className="text-white">{t.credit} - </span>
//             <span className="text-white">{credit.toLocaleString()}</span>
//           </button>

//           {/* AMOUNT */}
//           <div className="kpp-input-group mb-2">
//             <label className="kpp-label bg-black">{t.enterAmount}</label>
//             <input
//               type="number"
//               className="kpp-input"
//               placeholder={t.amountPlaceholder}
//               value={amount}
//               onChange={(e) => setAmount(Number(e.target.value))}
//             />
//           </div>

//           <p className="kpp-note mb-3">{t.note}</p>

//           {/* ACCOUNT HOLDER */}
//           <div className="kpp-input-group mb-3">
//             <label className="kpp-label bg-black">{t.accountHolder}</label>
//             <input
//               type="text"
//               className="kpp-input"
//               placeholder={t.accountHolderPlaceholder}
//             />
//           </div>

//           {/* ACCOUNT NUMBER */}
//           <div className="kpp-input-group mb-3">
//             <label className="kpp-label bg-black">{t.accountNumber}</label>
//             <input
//               type="text"
//               className="kpp-input"
//               placeholder={t.accountNumberPlaceholder}
//             />
//           </div>

//           {/* MOBILE */}
//           <div className="kpp-input-group mb-4">
//             <label className="kpp-label bg-black">{t.mobile}</label>
//             <input
//               type="text"
//               className="kpp-input"
//               placeholder={t.mobilePlaceholder}
//             />
//           </div>

//           {/* SUMMARY BOX */}
//           <div className="kpp-summary-box">
//             <div className="kpp-summary-row px-2">
//               <span>{t.requestedAmount}</span>
//               <span>{amount ? amount.toLocaleString() : "0"}</span>
//             </div>

//             <div className="kpp-summary-row px-2">
//               <span>{t.transactionFee}</span>
//               <span>{transactionFee.toLocaleString()}</span>
//             </div>

//             <div
//               className="kpp-summary-row kpp-net text-black px-2"
//               style={{ background: "#05CFD9" }}
//             >
//               <span>{t.netAmount}</span>
//               <span className="text-black">{netAmount.toLocaleString()}</span>
//             </div>
//           </div>

//           {/* <button className="kpp-submit mt-4 bg-colorsss">{t.submit}</button> */}
//           <button
//             className="kpp-submit mt-4 bg-colorsss"
//             onClick={handleSubmit}
//           >
//             {t.submit}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KPlusPay;












import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/kpluspay.css";
import Header from "./Header";

const KPlusPay = () => {
  const navigate = useNavigate();

  /* ===============================
     LANGUAGE STATE
  =============================== */
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  /* ===============================
     FORM STATES
  =============================== */
  const [amount, setAmount] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [mobile, setMobile] = useState("");
  const [credit] = useState(10000);

  /* ===============================
     TRANSLATIONS
  =============================== */
  const translations = {
    en: {
      title: "K Plus Pay",
      info:
        "All withdrawal requests placed between 6:00 PM and 10:00 AM (Thailand Time) will be processed after 10:00 AM.",
      credit: "Credit",
      enterAmount: "Requested Amount*",
      amountPlaceholder: "Enter amount",
      note: "*A standard 2% cut will be applied to the total amount during withdrawal.",
      accountHolder: "Account Holder Name*",
      accountHolderPlaceholder: "Enter account holder name",
      accountNumber: "KBank Account Number*",
      accountNumberPlaceholder: "Enter account number",
      mobile: "K+ Registered Mobile Number*",
      mobilePlaceholder: "Enter mobile number",
      requestedAmount: "Requested Amount",
      transactionFee: "2% Transaction Fee",
      netAmount: "Net Amount",
      submit: "Submit",
    },
    th: {
      title: "เคพลัสเพย์",
      info:
        "คำขอถอนเงินทั้งหมดที่ทำรายการระหว่างเวลา 18:00 น. ถึง 10:00 น. (เวลาไทย) จะได้รับการดำเนินการหลังเวลา 10:00 น.",
      credit: "เครดิต",
      enterAmount: "กรอกจำนวนเงิน*",
      amountPlaceholder: "กรอกจำนวนเงิน",
      note:
        "*จะมีการหักค่าธรรมเนียมมาตรฐาน 2% จากยอดรวมในระหว่างการถอนเงิน",
      accountHolder: "ชื่อเจ้าของบัญชี*",
      accountHolderPlaceholder: "กรอกชื่อเจ้าของบัญชี",
      accountNumber: "หมายเลขบัญชีธนาคารกสิกร*",
      accountNumberPlaceholder: "กรอกหมายเลขบัญชี",
      mobile: "หมายเลขโทรศัพท์ที่ลงทะเบียน*",
      mobilePlaceholder: "กรอกหมายเลขโทรศัพท์",
      requestedAmount: "จำนวนเงินที่ร้องขอ",
      transactionFee: "ค่าธรรมเนียม 2%",
      netAmount: "จำนวนเงินสุทธิ",
      submit: "ส่งคำขอ",
    },
  };

  /* ===============================
     APPLY THEME
  =============================== */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";

    if (savedTheme === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    setLanguage(localStorage.getItem("language") || "en");
  }, []);

  /* ===============================
     CALCULATIONS
  =============================== */
  const transactionFee = amount ? (amount * 2) / 100 : 0;
  const netAmount = amount ? amount - transactionFee : 0;
  const t = translations[language];

  /* ===============================
     SUBMIT HANDLER
  =============================== */
  const handleSubmit = () => {
    if (!amount || !accountHolder || !accountNumber || !mobile) {
      alert(
        language === "th"
          ? "กรุณากรอกข้อมูลให้ครบถ้วน"
          : "Please fill all required fields"
      );
      return;
    }

    // ✅ Redirect to Withdrawal History
    navigate("/withdrawalhistory");
  };

  return (
    <div className="kpp-page bg-black kpp-scroll">
      <Header />

      <div className="kpp-body">
        <div className="kpp-form">
          <h1 className="kpp-title mb-4">{t.title}</h1>

          {/* INFO */}
          <div className="kpp-info-box mb-3">
            <span className="kpp-info-icon">!</span>
            <p>{t.info}</p>
          </div>

          {/* CREDIT */}
          <button className="kpp-credit-box mb-4 p-1 border-white bg-transparent">
            <span className="text-white">{t.credit} - </span>
            <span className="text-white">{credit.toLocaleString()}</span>
          </button>

          {/* AMOUNT */}
          <div className="kpp-input-group mb-2">
            <label className="kpp-label bg-black">{t.enterAmount}</label>
            <input
              type="number"
              className="kpp-input"
              placeholder={t.amountPlaceholder}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <p className="kpp-note mb-3">{t.note}</p>

          {/* ACCOUNT HOLDER */}
          <div className="kpp-input-group mb-3">
            <label className="kpp-label bg-black">{t.accountHolder}</label>
            <input
              type="text"
              className="kpp-input"
              placeholder={t.accountHolderPlaceholder}
              value={accountHolder}
              onChange={(e) => setAccountHolder(e.target.value)}
            />
          </div>

          {/* ACCOUNT NUMBER */}
          <div className="kpp-input-group mb-3">
            <label className="kpp-label bg-black">{t.accountNumber}</label>
            <input
              type="text"
              className="kpp-input"
              placeholder={t.accountNumberPlaceholder}
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>

          {/* MOBILE */}
          <div className="kpp-input-group mb-4">
            <label className="kpp-label bg-black">{t.mobile}</label>
            <input
              type="text"
              className="kpp-input"
              placeholder={t.mobilePlaceholder}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          {/* SUMMARY */}
          <div className="kpp-summary-box">
            <div className="kpp-summary-row px-2">
              <span>{t.requestedAmount}</span>
              <span>{amount ? amount.toLocaleString() : "0"}</span>
            </div>

            <div className="kpp-summary-row px-2">
              <span>{t.transactionFee}</span>
              <span>{transactionFee.toLocaleString()}</span>
            </div>

            <div
              className="kpp-summary-row kpp-net text-black px-2"
              style={{ background: "#05CFD9" }}
            >
              <span>{t.netAmount}</span>
              <span className="text-black">
                {netAmount.toLocaleString()}
              </span>
            </div>
          </div>

          {/* SUBMIT */}
          <button
            className="kpp-submit mt-4 bg-colorsss"
            onClick={handleSubmit}
          >
            {t.submit}
          </button>
        </div>
      </div>
    </div>
  );
};

export default KPlusPay;
