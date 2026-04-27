// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/BankTransfer.css";

// const BankTransfer = () => {
//   return (
//     <div className="bt-page">
//       {/* HEADER */}
//       <header className="bt-header">
//         <div className="bt-logo">
//           <span className="bt-logo-xo">XO</span>
//           <span className="bt-logo-text">Thaixo</span>
//         </div>

//         <div className="bt-header-right">
//           <div className="bt-credit">Credit – 10,000.00</div>
//           <img
//             src="https://i.pravatar.cc/40"
//             alt="profile"
//             className="bt-avatar"
//           />
//         </div>
//       </header>

//       {/* BODY */}
//       <div className="bt-body">
//         <div className="bt-form">
//           <h2 className="bt-title">Bank Transfer</h2>

//           <div className="bt-field">
//             <input type="number" placeholder="Enter Amount" />
//             <small>
//               * A standard 2% cut will be applied to the total amount during
//               withdrawal
//             </small>
//           </div>

//           <div className="bt-field">
//             <select>
//               <option>Choose your Bank</option>
//               <option>Bangkok Bank</option>
//               <option>Kasikorn Bank</option>
//               <option>Siam Commercial Bank</option>
//             </select>
//           </div>

//           <div className="bt-field">
//             <input type="text" placeholder="Account Holder Name" />
//           </div>

//           <div className="bt-field">
//             <input type="text" placeholder="Bank Account Number" />
//           </div>

//           <button className="bt-submit">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankTransfer;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/BankTransfer.css";
// import Header from './Header';

// const BankTransfer = () => {
//   return (
//     <div className="bt-page">
//       {/* HEADER */}
//    <Header />

//       {/* BODY */}
//       <div className="bt-body">
//         <div className="bt-form">

//           <h2 className="bt-title">Bank Transfer</h2>

//           {/* Amount */}
//           <div className="bt-input-group">
//             <label className="bt-label">Enter Amount*</label>
//             <input type="number" className="bt-input" />
//           </div>

//           <p className="bt-note">
//             *A standard 2% cut will be applied to the total amount during Withdrawal.
//           </p>

//           {/* Bank Select */}
//           <div className="bt-input-group">
//             <label className="bt-label">Choose Your Bank*</label>
//             <select className="bt-input bt-select">
//               <option>Bangkok Bank</option>
//               <option>Kasikorn Bank</option>
//               <option>Siam Commercial Bank</option>
//             </select>
//           </div>

//           {/* Name */}
//           <div className="bt-input-group">
//             <label className="bt-label">Account Holder Name*</label>
//             <input type="text" className="bt-input" />
//           </div>

//           {/* Account Number */}
//           <div className="bt-input-group">
//             <label className="bt-label">Bank Account Number*</label>
//             <input type="text" className="bt-input" />
//           </div>

//           <button className="bt-submit">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankTransfer;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/BankTransfer.css";
// import Header from './Header';

// const BankTransfer = () => {
//   return (
//     <div className="bt-page">
//       {/* HEADER */}
//    <Header />

//       {/* BODY */}
//       <div className="bt-body">
//         <div className="bt-form">

//           <h2 className="bt-title">Bank Transfer</h2>

//           {/* Amount */}
//           <div className="bt-input-group">
//             <label className="bt-label">Enter Amount*</label>
//             <input type="number" className="bt-input" />
//           </div>

//           <p className="bt-note">
//             *A standard 2% cut will be applied to the total amount during Withdrawal.
//           </p>

//           {/* Bank Select */}
//           <div className="bt-input-group">
//             <label className="bt-label">Choose Your Bank*</label>
//             <select className="bt-input bt-select">
//               <option>Bangkok Bank</option>
//               <option>Kasikorn Bank</option>
//               <option>Siam Commercial Bank</option>
//             </select>
//           </div>

//           {/* Name */}
//           <div className="bt-input-group">
//             <label className="bt-label">Account Holder Name*</label>
//             <input type="text" className="bt-input" />
//           </div>

//           {/* Account Number */}
//           <div className="bt-input-group">
//             <label className="bt-label">Bank Account Number*</label>
//             <input type="text" className="bt-input" />
//           </div>

//           <button className="bt-submit">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankTransfer;

// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/BankTransfer.css";
// import Header from "./Header";

// const BankTransfer = () => {

//   /* ===============================
//      APPLY THEME (LIGHT / DARK / SYSTEM)
//   =============================== */
//   const applyTheme = () => {
//     const savedTheme = localStorage.getItem("theme") || "system";

//     if (savedTheme === "system") {
//       // Allow OS preference to control theme
//       document.documentElement.removeAttribute("data-theme");
//     } else {
//       document.documentElement.setAttribute("data-theme", savedTheme);
//     }
//   };

//   /* INITIAL THEME APPLY */
//   useEffect(() => {
//     applyTheme();
//   }, []);

//   /* LISTEN TO OS THEME CHANGES (SYSTEM MODE ONLY) */
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
//     <div className="bt-page bg-black">
//       {/* HEADER */}
//       <Header />

//       {/* BODY */}
//       <div className="bt-body">
//         <div className="bt-form">
//           <h1 className="bt-title ">Bank Transfer</h1>

//           {/* Amount */}
//           <div className="bt-input-group">
//             <label className="bt-label">Enter Amount*</label>
//             <input
//               type="number"
//               className="bt-input"
//               placeholder="Enter amount"
//             />
//           </div>

//           <p className="bt-note">
//             *A standard 2% cut will be applied to the total amount during
//             withdrawal.
//           </p>

//           {/* Bank Select */}
//           <div className="bt-input-group">
//             <label className="bt-label">Choose Your Bank*</label>
//             <select className="bt-input bt-select">
//               <option value="">Select Bank</option>
//               <option>Bangkok Bank</option>
//               <option>Kasikorn Bank</option>
//               <option>Siam Commercial Bank</option>
//             </select>
//           </div>

//           {/* Account Holder */}
//           <div className="bt-input-group">
//             <label className="bt-label">Account Holder Name*</label>
//             <input
//               type="text"
//               className="bt-input"
//               placeholder="Enter account holder name"
//             />
//           </div>

//           {/* Account Number */}
//           <div className="bt-input-group">
//             <label className="bt-label">Bank Account Number*</label>
//             <input
//               type="text"
//               className="bt-input"
//               placeholder="Enter bank account number"
//             />
//           </div>

//           <button className="bt-submit">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankTransfer;










// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/BankTransfer.css";
// import Header from "./Header";

// const BankTransfer = () => {
//   /* ===============================
//      LANGUAGE STATE
//   =============================== */
//   const [language, setLanguage] = useState(
//     localStorage.getItem("language") || "en",
//   );

//   /* ===============================
//      FORM STATE
//   =============================== */
//   const [amount, setAmount] = useState("");
//   const [credit] = useState(10000);

//   /* ===============================
//    PAGE-SPECIFIC OVERFLOW
// =============================== */
//   useEffect(() => {
//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "auto";

//     return () => {
//       document.body.style.overflow = previousOverflow;
//     };
//   }, []);

//   /* ===============================
//      TRANSLATIONS
//   =============================== */
//   const translations = {
//     en: {
//       title: "Bank Transfer",
//       info: "All withdrawal requests placed between 6:00 PM and 10:00 AM (Thailand Time) will be processed after 10:00 AM.",
//       credit: "Credit",
//       enterAmount: "Requested Amount*",
//       amountPlaceholder: "Enter amount",
//       note: "*A standard 2% cut will be applied to the total amount during withdrawal.",
//       chooseBank: "Choose Your Bank*",
//       selectBank: "Select Bank",
//       accountHolder: "Account Holder Name*",
//       accountHolderPlaceholder: "Enter account holder name",
//       accountNumber: "Bank Account Number*",
//       accountNumberPlaceholder: "Enter bank account number",
//       requestedAmount: "Requested Amount",
//       transactionFee: "2% Transaction Fee",
//       netAmount: "Net Amount",
//       submit: "Submit",
//     },
//     th: {
//       title: "โอนเงินผ่านธนาคาร",
//       info: "คำขอถอนเงินที่ทำรายการระหว่างเวลา 18:00 น. ถึง 10:00 น. (เวลาไทย) จะดำเนินการหลัง 10:00 น.",
//       credit: "เครดิต",
//       enterAmount: "กรอกจำนวนเงิน*",
//       amountPlaceholder: "กรอกจำนวนเงิน",
//       note: "*จะมีการหักค่าธรรมเนียมมาตรฐาน 2% จากยอดรวมในระหว่างการถอนเงิน",
//       chooseBank: "เลือกธนาคารของคุณ*",
//       selectBank: "เลือกธนาคาร",
//       accountHolder: "ชื่อเจ้าของบัญชี*",
//       accountHolderPlaceholder: "กรอกชื่อเจ้าของบัญชี",
//       accountNumber: "หมายเลขบัญชีธนาคาร*",
//       accountNumberPlaceholder: "กรอกหมายเลขบัญชี",
//       requestedAmount: "จำนวนเงินที่ร้องขอ",
//       transactionFee: "ค่าธรรมเนียม 2%",
//       netAmount: "จำนวนเงินสุทธิ",
//       submit: "ส่งคำขอ",
//     },
//   };

//   const t = translations[language];

//   /* ===============================
//      APPLY THEME
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
//      PAGE-SPECIFIC OVERFLOW
//   =============================== */
//   useEffect(() => {
//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "auto";
//     return () => {
//       document.body.style.overflow = previousOverflow;
//     };
//   }, []);

//   /* ===============================
//      CALCULATIONS
//   =============================== */
//   const transactionFee = amount ? (amount * 2) / 100 : 0;
//   const netAmount = amount ? amount - transactionFee : 0;

//   return (
//     <div className="bt-page bg-black bt-scroll">
//       <Header />

//       <div className="bt-body">
//         <div className="bt-form">
//           <h1 className="bt-title mb-4">{t.title}</h1>

//           {/* INFO MESSAGE */}
//           <div className="bt-info-box mb-3">
//             <span className="bt-info-icon">!</span>
//             <p>{t.info}</p>
//           </div>

//           {/* CREDIT BOX */}
//           <button className="bt-credit-box mb-4 p-1 border-white bg-transparent">
//             <span className="text-white">{t.credit} - </span>
//             <span className="text-white">{credit.toLocaleString()}</span>
//           </button>

//           {/* AMOUNT */}
//           <div className="bt-input-group">
//             <label className="bt-label">{t.enterAmount}</label>
//             <input
//               type="number"
//               className="bt-input"
//               placeholder={t.amountPlaceholder}
//               value={amount}
//               onChange={(e) => setAmount(Number(e.target.value))}
//             />
//           </div>

//           <p className="bt-note">{t.note}</p>

//           {/* BANK SELECT */}
//           <div className="bt-input-group">
//             <label className="bt-label">{t.chooseBank}</label>
//             <select className="bt-input bt-select">
//               <option value="">{t.selectBank}</option>
//               <option>Bangkok Bank</option>
//               <option>Kasikorn Bank</option>
//               <option>Siam Commercial Bank</option>
//             </select>
//           </div>

//           {/* ACCOUNT HOLDER */}
//           <div className="bt-input-group">
//             <label className="bt-label">{t.accountHolder}</label>
//             <input
//               type="text"
//               className="bt-input"
//               placeholder={t.accountHolderPlaceholder}
//             />
//           </div>

//           {/* ACCOUNT NUMBER */}
//           <div className="bt-input-group mb-4">
//             <label className="bt-label">{t.accountNumber}</label>
//             <input
//               type="text"
//               className="bt-input"
//               placeholder={t.accountNumberPlaceholder}
//             />
//           </div>

//           {/* SUMMARY BOX */}
//           <div className="bt-summary-box">
//             <div className="bt-summary-row px-2">
//               <span>{t.requestedAmount}</span>
//               <span>{amount ? amount.toLocaleString() : "0"}</span>
//             </div>

//             <div className="bt-summary-row px-2">
//               <span>{t.transactionFee}</span>
//               <span>{transactionFee.toLocaleString()}</span>
//             </div>

//             <div
//               className="bt-summary-row bt-net text-black px-2"
//               style={{ background: "#05CFD9" }}
//             >
//               <span>{t.netAmount}</span>
//               <span className="text-black">{netAmount.toLocaleString()}</span>
//             </div>
//           </div>

//           <button className="bt-submit mt-4 bg-colorsss">{t.submit}</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BankTransfer;
















import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/BankTransfer.css";
import Header from "./Header";

const BankTransfer = () => {
  const navigate = useNavigate();

  /* ===============================
     LANGUAGE STATE
  =============================== */
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  /* ===============================
     FORM STATE
  =============================== */
  const [amount, setAmount] = useState("");
  const [bank, setBank] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [credit] = useState(10000);

  /* ===============================
     PAGE OVERFLOW
  =============================== */
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  /* ===============================
     TRANSLATIONS
  =============================== */
  const translations = {
    en: {
      title: "Bank Transfer",
      info:
        "All withdrawal requests placed between 6:00 PM and 10:00 AM (Thailand Time) will be processed after 10:00 AM.",
      credit: "Credit",
      enterAmount: "Requested Amount*",
      amountPlaceholder: "Enter amount",
      note:
        "*A standard 2% cut will be applied to the total amount during withdrawal.",
      chooseBank: "Choose Your Bank*",
      selectBank: "Select Bank",
      accountHolder: "Account Holder Name*",
      accountHolderPlaceholder: "Enter account holder name",
      accountNumber: "Bank Account Number*",
      accountNumberPlaceholder: "Enter bank account number",
      requestedAmount: "Requested Amount",
      transactionFee: "2% Transaction Fee",
      netAmount: "Net Amount",
      submit: "Submit",
    },
    th: {
      title: "โอนเงินผ่านธนาคาร",
      info:
        "คำขอถอนเงินที่ทำรายการระหว่างเวลา 18:00 น. ถึง 10:00 น. (เวลาไทย) จะดำเนินการหลัง 10:00 น.",
      credit: "เครดิต",
      enterAmount: "กรอกจำนวนเงิน*",
      amountPlaceholder: "กรอกจำนวนเงิน",
      note:
        "*จะมีการหักค่าธรรมเนียมมาตรฐาน 2% จากยอดรวมในระหว่างการถอนเงิน",
      chooseBank: "เลือกธนาคารของคุณ*",
      selectBank: "เลือกธนาคาร",
      accountHolder: "ชื่อเจ้าของบัญชี*",
      accountHolderPlaceholder: "กรอกชื่อเจ้าของบัญชี",
      accountNumber: "หมายเลขบัญชีธนาคาร*",
      accountNumberPlaceholder: "กรอกหมายเลขบัญชี",
      requestedAmount: "จำนวนเงินที่ร้องขอ",
      transactionFee: "ค่าธรรมเนียม 2%",
      netAmount: "จำนวนเงินสุทธิ",
      submit: "ส่งคำขอ",
    },
  };

  const t = translations[language];

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

  /* ===============================
     SUBMIT HANDLER (REDIRECT)
  =============================== */
  const handleSubmit = () => {
    if (!amount || !bank || !accountHolder || !accountNumber) {
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
    <div className="bt-page bg-black bt-scroll">
      <Header />

      <div className="bt-body">
        <div className="bt-form">
          <h1 className="bt-title mb-4">{t.title}</h1>

          {/* INFO */}
          <div className="bt-info-box mb-3">
            <span className="bt-info-icon">!</span>
            <p>{t.info}</p>
          </div>

          {/* CREDIT */}
          <button className="bt-credit-box mb-4 p-1 border-white bg-transparent">
            <span className="text-white">{t.credit} - </span>
            <span className="text-white">{credit.toLocaleString()}</span>
          </button>

          {/* AMOUNT */}
          <div className="bt-input-group">
            <label className="bt-label">{t.enterAmount}</label>
            <input
              type="number"
              className="bt-input"
              placeholder={t.amountPlaceholder}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <p className="bt-note">{t.note}</p>

          {/* BANK */}
          <div className="bt-input-group">
            <label className="bt-label">{t.chooseBank}</label>
            <select
              className="bt-input bt-select"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
            >
              <option value="">{t.selectBank}</option>
              <option value="Bangkok Bank">Bangkok Bank</option>
              <option value="Kasikorn Bank">Kasikorn Bank</option>
              <option value="Siam Commercial Bank">
                Siam Commercial Bank
              </option>
            </select>
          </div>

          {/* ACCOUNT HOLDER */}
          <div className="bt-input-group">
            <label className="bt-label">{t.accountHolder}</label>
            <input
              type="text"
              className="bt-input"
              placeholder={t.accountHolderPlaceholder}
              value={accountHolder}
              onChange={(e) => setAccountHolder(e.target.value)}
            />
          </div>

          {/* ACCOUNT NUMBER */}
          <div className="bt-input-group mb-4">
            <label className="bt-label">{t.accountNumber}</label>
            <input
              type="text"
              className="bt-input"
              placeholder={t.accountNumberPlaceholder}
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>

          {/* SUMMARY */}
          <div className="bt-summary-box">
            <div className="bt-summary-row px-2">
              <span>{t.requestedAmount}</span>
              <span>{amount ? amount.toLocaleString() : "0"}</span>
            </div>

            <div className="bt-summary-row px-2">
              <span>{t.transactionFee}</span>
              <span>{transactionFee.toLocaleString()}</span>
            </div>

            <div
              className="bt-summary-row bt-net text-black px-2"
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
            className="bt-submit mt-4 bg-colorsss"
            onClick={handleSubmit}
          >
            {t.submit}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;

