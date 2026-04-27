// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/EWalletWithdrawal.css";
// import Header from "./Header";

// const EWalletWithdrawal = () => {
//   return (
//     <div className="ew-page">
//       {/* HEADER */}
//      <Header />

//       {/* BODY */}
//       <div className="ew-body">
//         <div className="ew-form">
//           <h2 className="ew-title">E - Wallet Withdrawl</h2>

//           <div className="ew-field">
//             <input type="number" placeholder="Enter Amount" />
//             <small>
//               * A standard 2% cut will be applied to the total amount during
//               withdrawal
//             </small>
//           </div>

//           <div className="ew-field">
//             <select>
//               <option>Choose Your Bank</option>
//               <option selected>True Money</option>
//               <option>Line Pay</option>
//               <option>Paytm</option>
//             </select>
//           </div>

//           <div className="ew-field">
//             <input type="text" placeholder="Enter Register Mobile Number" />
//           </div>

//           <button className="ew-submit">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EWalletWithdrawal;






















// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/EWalletWithdrawal.css";
// import Header from "./Header";

// const EWalletWithdrawal = () => {
//   return (
//     <div className="ew-page">
//       <Header />

//       <div className="ew-body">
//         <div className="ew-form">

//           <h2 className="ew-title">E - Wallet Withdrawal</h2>

//           {/* Amount */}
//           <div className="ew-input-group">
//             <label className="ew-label">Enter Amount*</label>
//             <input type="number" className="ew-input" />
//           </div>

//           <p className="ew-note">
//             *A standard 2% cut will be applied to the total amount during Withdrawal.
//           </p>

//           {/* Wallet Select */}
//           <div className="ew-input-group">
//             <label className="ew-label">Choose Your Bank*</label>
//             <select className="ew-input ew-select">
//               <option>True Money</option>
//               <option>Line Pay</option>
//               <option>Paytm</option>
//             </select>
//           </div>

//           {/* Mobile */}
//           <div className="ew-input-group">
//             <label className="ew-label">Enter Register Mobile Number*</label>
//             <input type="text" className="ew-input" />
//           </div>

//           <button className="ew-submit">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EWalletWithdrawal;


















// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/EWalletWithdrawal.css";
// import Header from "./Header";

// const EWalletWithdrawal = () => {

//   /* ===============================
//      APPLY THEME (LIGHT / DARK / SYSTEM)
//   =============================== */
//   const applyTheme = () => {
//     const savedTheme = localStorage.getItem("theme") || "system";

//     if (savedTheme === "system") {
//       // Let OS preference control theme
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
//     <div className="ew-page">
//       {/* HEADER */}
//       <Header />

//       {/* BODY */}
//       <div className="ew-body">
//         <div className="ew-form">
//           <h2 className="ew-title">E - Wallet Withdrawal</h2>

//           {/* Amount */}
//           <div className="ew-input-group mb-0">
//             <label className="ew-label">Requested Amount*</label>
//             <input
//               type="number"
//               className="ew-input"
//               placeholder="Enter amount"
//             />
//           </div>

//           <p className="ew-note">
//             *A standard 2% cut will be applied to the total amount during
//             withdrawal.
//           </p>

//           {/* Wallet Select */}
//           <div className="ew-input-group">
//             <label className="ew-label">Choose Your Wallet*</label>
//             <select className="ew-input ew-select">
//               <option value="">Select Wallet</option>
//               <option>True Money</option>
//               <option>Line Pay</option>
//               <option>Paytm</option>
//             </select>
//           </div>

//           {/* Mobile */}
//           <div className="ew-input-group">
//             <label className="ew-label">
//               Enter Registered Mobile Number*
//             </label>
//             <input
//               type="text"
//               className="ew-input"
//               placeholder="Enter mobile number"
//             />
//           </div>

//           <button className="ew-submit">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EWalletWithdrawal;















  // import React, { useEffect, useState } from "react";
  // import "bootstrap/dist/css/bootstrap.min.css";
  // import "../css/EWalletWithdrawal.css";
  // import Header from "./Header";

  // const EWalletWithdrawal = () => {
  //   /* ===============================
  //     LANGUAGE STATE
  //   =============================== */
  //   const [language, setLanguage] = useState(
  //     localStorage.getItem("language") || "en"
  //   );

  //   /* ===============================
  //     FORM STATE
  //   =============================== */
  //   const [amount, setAmount] = useState("");
  //   const [credit] = useState(10000);

  //   /* ===============================
  //     PAGE-SPECIFIC OVERFLOW
  //   =============================== */
  //   useEffect(() => {
  //     const previousOverflow = document.body.style.overflow;
  //     document.body.style.overflow = "auto";

  //     return () => {
  //       document.body.style.overflow = previousOverflow;
  //     };
  //   }, []);

  //   /* ===============================
  //     TRANSLATIONS
  //   =============================== */
  //   const translations = {
  //     en: {
  //       title: "E - Wallet Withdrawal",
  //       info:
  //         "All withdrawal requests placed between 6:00 PM and 10:00 AM (Thailand Time) will be processed after 10:00 AM.",
  //       credit: "Credit",
  //       enterAmount: "Requested Amount*",
  //       amountPlaceholder: "Enter amount",
  //       note:
  //         "*A standard 2% cut will be applied to the total amount during withdrawal.",
  //       chooseWallet: "Choose Your Bank",
  //       selectWallet: "Select Wallet",
  //       mobile: "Enter Registered Mobile Number*",
  //       mobilePlaceholder: "Enter mobile number",
  //       requestedAmount: "Requested Amount",
  //       transactionFee: "2% Transaction Fee",
  //       netAmount: "Net Amount",
  //       submit: "Submit",
  //     },
  //     th: {
  //       title: "ถอนเงินผ่านกระเป๋าเงินอิเล็กทรอนิกส์",
  //       info:
  //         "คำขอถอนเงินที่ทำรายการระหว่างเวลา 18:00 น. ถึง 10:00 น. (เวลาไทย) จะดำเนินการหลัง 10:00 น.",
  //       credit: "เครดิต",
  //       enterAmount: "จำนวนเงินที่ร้องขอ*",
  //       amountPlaceholder: "กรอกจำนวนเงิน",
  //       note:
  //         "*จะมีการหักค่าธรรมเนียมมาตรฐาน 2% จากยอดรวมในระหว่างการถอนเงิน",
  //       chooseWallet: "เลือกกระเป๋าเงินของคุณ*",
  //       selectWallet: "เลือกกระเป๋าเงิน",
  //       mobile: "หมายเลขโทรศัพท์ที่ลงทะเบียน*",
  //       mobilePlaceholder: "กรอกหมายเลขโทรศัพท์",
  //       requestedAmount: "จำนวนเงินที่ร้องขอ",
  //       transactionFee: "ค่าธรรมเนียม 2%",
  //       netAmount: "จำนวนเงินสุทธิ",
  //       submit: "ส่งคำขอ",
  //     },
  //   };

  //   const t = translations[language];

  //   /* ===============================
  //     APPLY THEME
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
  //     CALCULATIONS
  //   =============================== */
  //   const transactionFee = amount ? (amount * 2) / 100 : 0;
  //   const netAmount = amount ? amount - transactionFee : 0;

  //   return (
  //     <div className="ew-page bg-black ew-scroll">
  //       <Header />

  //       <div className="ew-body">
  //         <div className="ew-form">
  //           <h2 className="ew-title mb-4">{t.title}</h2>

  //           {/* INFO BOX */}
  //           <div className="ew-info-box mb-3">
  //             <span className="ew-info-icon">!</span>
  //             <p>{t.info}</p>
  //           </div>

  //           {/* CREDIT BOX */}
  //           <button className="ew-credit-box mb-4 p-1 border-white bg-transparent">
  //             <span className="text-white">{t.credit} - </span>
  //             <span className="text-white">{credit.toLocaleString()}</span>
  //           </button>

  //           {/* AMOUNT */}
  //           <div className="ew-input-group mb-2">
  //             <label className="ew-label bg-black">{t.enterAmount}</label>
  //             <input
  //               type="number"
  //               className="ew-input"
  //               placeholder={t.amountPlaceholder}
  //               value={amount}
  //               onChange={(e) => setAmount(Number(e.target.value))}
  //             />
  //           </div>

  //           <p className="ew-note mb-3">{t.note}</p>

  //           {/* WALLET SELECT */}
  //           <div className="ew-input-group mb-3">
  //             <label className="ew-label bg-black">{t.chooseWallet}</label>
  //             <select className="ew-input ew-select">
  //               <option value="">{t.selectWallet}</option>
  //               <option>True Money</option>
  //               <option>Line Pay</option>
  //               <option>Paytm</option>
  //             </select>
  //           </div>

  //           {/* MOBILE */}
  //           <div className="ew-input-group mb-4">
  //             <label className="ew-label bg-black">{t.mobile}</label>
  //             <input
  //               type="text"
  //               className="ew-input"
  //               placeholder={t.mobilePlaceholder}
  //             />
  //           </div>

  //           {/* SUMMARY BOX */}
  //           <div className="ew-summary-box">
  //             <div className="ew-summary-row px-2">
  //               <span>{t.requestedAmount}</span>
  //               <span>{amount ? amount.toLocaleString() : "0"}</span>
  //             </div>

  //             <div className="ew-summary-row px-2">
  //               <span>{t.transactionFee}</span>
  //               <span>{transactionFee.toLocaleString()}</span>
  //             </div>

  //             <div
  //               className="ew-summary-row ew-net text-black px-2"
  //               style={{ background: "#05CFD9" }}
  //             >
  //               <span>{t.netAmount}</span>
  //               <span className="text-black">
  //                 {netAmount.toLocaleString()}
  //               </span>
  //             </div>
  //           </div>

  //           <button className="ew-submit mt-4 bg-colorsss">{t.submit}</button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default EWalletWithdrawal;


















  import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/EWalletWithdrawal.css";
import Header from "./Header";

const EWalletWithdrawal = () => {
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
  const [wallet, setWallet] = useState("");
  const [mobile, setMobile] = useState("");
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
      title: "E - Wallet Withdrawal",
      info:
        "All withdrawal requests placed between 6:00 PM and 10:00 AM (Thailand Time) will be processed after 10:00 AM.",
      credit: "Credit",
      enterAmount: "Requested Amount*",
      amountPlaceholder: "Enter amount",
      note:
        "*A standard 2% cut will be applied to the total amount during withdrawal.",
      chooseWallet: "Choose Your Wallet*",
      selectWallet: "Select Wallet",
      mobile: "Enter Registered Mobile Number*",
      mobilePlaceholder: "Enter mobile number",
      requestedAmount: "Requested Amount",
      transactionFee: "2% Transaction Fee",
      netAmount: "Net Amount",
      submit: "Submit",
    },
    th: {
      title: "ถอนเงินผ่านกระเป๋าเงินอิเล็กทรอนิกส์",
      info:
        "คำขอถอนเงินที่ทำรายการระหว่างเวลา 18:00 น. ถึง 10:00 น. (เวลาไทย) จะดำเนินการหลัง 10:00 น.",
      credit: "เครดิต",
      enterAmount: "จำนวนเงินที่ร้องขอ*",
      amountPlaceholder: "กรอกจำนวนเงิน",
      note:
        "*จะมีการหักค่าธรรมเนียมมาตรฐาน 2% จากยอดรวมในระหว่างการถอนเงิน",
      chooseWallet: "เลือกกระเป๋าเงินของคุณ*",
      selectWallet: "เลือกกระเป๋าเงิน",
      mobile: "หมายเลขโทรศัพท์ที่ลงทะเบียน*",
      mobilePlaceholder: "กรอกหมายเลขโทรศัพท์",
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
    if (!amount || !wallet || !mobile) {
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
    <div className="ew-page bg-black ew-scroll">
      <Header />

      <div className="ew-body">
        <div className="ew-form">
          <h2 className="ew-title mb-4">{t.title}</h2>

          {/* INFO */}
          <div className="ew-info-box mb-3">
            <span className="ew-info-icon">!</span>
            <p>{t.info}</p>
          </div>

          {/* CREDIT */}
          <button className="ew-credit-box mb-4 p-1 border-white bg-transparent">
            <span className="text-white">{t.credit} - </span>
            <span className="text-white">{credit.toLocaleString()}</span>
          </button>

          {/* AMOUNT */}
          <div className="ew-input-group mb-2">
            <label className="ew-label bg-black">{t.enterAmount}</label>
            <input
              type="number"
              className="ew-input"
              placeholder={t.amountPlaceholder}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <p className="ew-note mb-3">{t.note}</p>

          {/* WALLET */}
          <div className="ew-input-group mb-3">
            <label className="ew-label bg-black">{t.chooseWallet}</label>
            <select
              className="ew-input ew-select"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
            >
              <option value="">{t.selectWallet}</option>
              <option value="True Money">True Money</option>
              <option value="Line Pay">Line Pay</option>
              <option value="Paytm">Paytm</option>
            </select>
          </div>

          {/* MOBILE */}
          <div className="ew-input-group mb-4">
            <label className="ew-label bg-black">{t.mobile}</label>
            <input
              type="text"
              className="ew-input"
              placeholder={t.mobilePlaceholder}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          {/* SUMMARY */}
          <div className="ew-summary-box">
            <div className="ew-summary-row px-2">
              <span>{t.requestedAmount}</span>
              <span>{amount ? amount.toLocaleString() : "0"}</span>
            </div>

            <div className="ew-summary-row px-2">
              <span>{t.transactionFee}</span>
              <span>{transactionFee.toLocaleString()}</span>
            </div>

            <div
              className="ew-summary-row ew-net text-black px-2"
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
            className="ew-submit mt-4 bg-colorsss"
            onClick={handleSubmit}
          >
            {t.submit}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EWalletWithdrawal;
