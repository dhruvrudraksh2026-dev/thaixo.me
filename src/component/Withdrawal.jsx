// import React, { useState, useEffect } from "react";
// import "../css/Withdrawal.css";

// const BANKS = [
//   "Bangkok Bank",
//   "Kasikorn Bank",
//   "Siam Commercial Bank",
//   "Krungthai Bank",
//   "Bank of Ayudhya",
//   "TMBThanachart Bank",
// ];

// const TRANSACTION_FEE_PERCENT = 2;

// export default function Withdrawal() {
//   const [credit, setCredit] = useState(10000);
//   const [requestedAmount, setRequestedAmount] = useState("");
//   const [bankDetails, setBankDetails] = useState({
//     name: "Suda Chaiyaporn",
//     bank: "Bangkok Bank",
//     accountNumber: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [error, setError] = useState(null);

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const transactionFee = parseFloat(
//     ((parsedAmount * TRANSACTION_FEE_PERCENT) / 100).toFixed(2)
//   );
//   const netAmount = parseFloat((parsedAmount - transactionFee).toFixed(2));

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBankDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     if (!requestedAmount || parsedAmount <= 0) {
//       setError("Please enter a valid requested amount.");
//       return;
//     }
//     if (parsedAmount > credit) {
//       setError("Requested amount exceeds available credit.");
//       return;
//     }
//     if (!bankDetails.name.trim()) {
//       setError("Please enter your name.");
//       return;
//     }
//     if (!bankDetails.bank) {
//       setError("Please choose your bank.");
//       return;
//     }
//     if (!bankDetails.accountNumber.trim()) {
//       setError("Please enter your bank account number.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       const response = await fetch(
//         `${import.meta.env.VITE_SERVER_URL}/customer/withdrawal`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             requested_amount: parsedAmount,
//             bank_name: bankDetails.bank,
//             account_holder_name: bankDetails.name,
//             bank_account_no: bankDetails.accountNumber,
//             transaction_fee: transactionFee,
//             net_amount: netAmount,
//           }),
//         }
//       );

//       const result = await response.json();

//       if (result.success) {
//         setSuccess(result.message || "Withdrawal request submitted successfully!");
//         setRequestedAmount("");
//         setBankDetails((prev) => ({ ...prev, accountNumber: "" }));
//       } else {
//         setError(result.message || "Withdrawal request failed. Please try again.");
//       }
//     } catch (err) {
//       setError("Network error. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="withdrawal-page">
//       <div className="withdrawal-wrapper">

//         {/* Notice Banner */}
//         <div className="notice-banner">
//           <span className="notice-icon">&#9432;</span>
//           <p className="notice-text">
//             All withdrawal requests placed between 6:00 PM and 10:00 AM
//             (Thailand Time) will be processed after 10:00 AM.
//           </p>
//         </div>

//         {/* Credit Badge */}
//         <div className="credit-badge">
//           Credit &mdash; {credit.toLocaleString()}.00
//         </div>

//         {/* Requested Amount */}
//         <div className="form-field">
//           <label className="field-label">Requested Amount*</label>
//           <input
//             type="number"
//             className="field-input"
//             value={requestedAmount}
//             onChange={(e) => setRequestedAmount(e.target.value)}
//             min="0"
//             max={credit}
//             placeholder=""
//           />
//           <span className="field-hint">
//             *A standard 2% cut will be applied to the total amount during Withdrawal.
//           </span>
//         </div>

//         {/* Bank Details Section */}
//         <div className="section-title">Your Bank Details</div>

//         {/* Enter Name */}
//         <div className="form-field">
//           <label className="field-label">Enter Name*</label>
//           <input
//             type="text"
//             name="name"
//             className="field-input"
//             value={bankDetails.name}
//             onChange={handleChange}
//             placeholder="As per ID"
//           />
//           <span className="field-hint">*as per id</span>
//         </div>

//         {/* Choose Bank */}
//         <div className="form-field">
//           <label className="field-label">Choose Your Bank</label>
//           <div className="select-wrapper">
//             <select
//               name="bank"
//               className="field-select"
//               value={bankDetails.bank}
//               onChange={handleChange}
//             >
//               {BANKS.map((b) => (
//                 <option key={b} value={b}>{b}</option>
//               ))}
//             </select>
//             <span className="select-arrow">&#9660;</span>
//           </div>
//         </div>

//         {/* Account Number */}
//         <div className="form-field">
//           <label className="field-label">Enter Your Bank Account Number</label>
//           <input
//             type="text"
//             name="accountNumber"
//             className="field-input"
//             value={bankDetails.accountNumber}
//             onChange={handleChange}
//             placeholder=""
//           />
//         </div>

//         {/* Summary Table */}
//         <div className="summary-table">
//           <div className="summary-row">
//             <span className="summary-label">Requested Amount</span>
//             <span className="summary-value">{parsedAmount > 0 ? parsedAmount.toLocaleString() : "—"}</span>
//           </div>
//           <div className="summary-row">
//             <span className="summary-label">2% Transaction Fee</span>
//             <span className="summary-value">{parsedAmount > 0 ? transactionFee.toLocaleString() : "—"}</span>
//           </div>
//           <div className="summary-row net-row">
//             <span className="summary-label net-label">Net amount</span>
//             <span className="summary-value net-value">
//               {parsedAmount > 0 ? netAmount.toLocaleString() : "—"}
//             </span>
//           </div>
//         </div>

//         {/* Feedback */}
//         {error && <div className="feedback-error">{error}</div>}
//         {success && <div className="feedback-success">{success}</div>}

//         {/* Submit */}
//         <button
//           className="submit-btn"
//           onClick={handleSubmit}
//           disabled={loading}
//         >
//           {loading ? "Submitting..." : "Submit"}
//         </button>

//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";

// const BANKS = [
//   "Bangkok Bank",
//   "Kasikorn Bank",
//   "Siam Commercial Bank",
//   "Krungthai Bank",
//   "Bank of Ayudhya",
//   "TMBThanachart Bank",
// ];

// const TRANSACTION_FEE_PERCENT = 2;

// export default function Withdrawal() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const [credit] = useState(10000);
//   const [requestedAmount, setRequestedAmount] = useState("");
//   const [bankDetails, setBankDetails] = useState({
//     name: "Suda Chaiyaporn",
//     bank: "Bangkok Bank",
//     accountNumber: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [error, setError] = useState(null);

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const transactionFee = parseFloat(
//     ((parsedAmount * TRANSACTION_FEE_PERCENT) / 100).toFixed(2)
//   );
//   const netAmount = parseFloat((parsedAmount - transactionFee).toFixed(2));

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBankDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     if (!requestedAmount || parsedAmount <= 0) {
//       setError("Please enter a valid requested amount.");
//       return;
//     }
//     if (parsedAmount > credit) {
//       setError("Requested amount exceeds available credit.");
//       return;
//     }
//     if (!bankDetails.name.trim()) {
//       setError("Please enter your name.");
//       return;
//     }
//     if (!bankDetails.bank) {
//       setError("Please choose your bank.");
//       return;
//     }
//     if (!bankDetails.accountNumber.trim()) {
//       setError("Please enter your bank account number.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       const response = await fetch(
//         `${import.meta.env.VITE_SERVER_URL}/customer/withdrawal`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             requested_amount: parsedAmount,
//             bank_name: bankDetails.bank,
//             account_holder_name: bankDetails.name,
//             bank_account_no: bankDetails.accountNumber,
//             transaction_fee: transactionFee,
//             net_amount: netAmount,
//           }),
//         }
//       );

//       const result = await response.json();

//       if (result.success) {
//         setSuccess(result.message || "Withdrawal request submitted successfully!");
//         setRequestedAmount("");
//         setBankDetails((prev) => ({ ...prev, accountNumber: "" }));
//       } else {
//         setError(result.message || "Withdrawal request failed. Please try again.");
//       }
//     } catch (err) {
//       setError("Network error. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="main-container">

//       {/* Mobile Toggle Button — same as IncomeDashboard */}
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {/* Overlay — same as IncomeDashboard */}
//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar — same as IncomeDashboard */}
//       <Sidebar show={isSidebarOpen}  />

//       {/* Main Wrapper — same as IncomeDashboard */}
//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">

//               {/* Notice Banner */}
//               <div className="notice-banner">
//                 <span className="notice-icon">&#9432;</span>
//                 <p className="notice-text">
//                   All withdrawal requests placed between 6:00 PM and 10:00 AM
//                   (Thailand Time) will be processed after 10:00 AM.
//                 </p>
//               </div>

//               {/* Credit Badge */}
//               <div className="credit-badge">
//                 Credit &mdash; {credit.toLocaleString()}.00
//               </div>

//               {/* Requested Amount */}
//               <div className="form-field">
//                 <label className="field-label">Requested Amount*</label>
//                 <input
//                   type="number"
//                   className="field-input"
//                   value={requestedAmount}
//                   onChange={(e) => setRequestedAmount(e.target.value)}
//                   min="0"
//                   max={credit}
//                   placeholder=""
//                 />
//                 <span className="field-hint">
//                   *A standard 2% cut will be applied to the total amount during Withdrawal.
//                 </span>
//               </div>

//               {/* Bank Details Section */}
//               <div className="section-title">Your Bank Details</div>

//               {/* Enter Name */}
//               <div className="form-field">
//                 <label className="field-label">Enter Name*</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className="field-input"
//                   value={bankDetails.name}
//                   onChange={handleChange}
//                   placeholder="As per ID"
//                 />
//                 <span className="field-hint">*as per id</span>
//               </div>

//               {/* Choose Bank */}
//               <div className="form-field">
//                 <label className="field-label">Choose Your Bank</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="bank"
//                     className="field-select"
//                     value={bankDetails.bank}
//                     onChange={handleChange}
//                   >
//                     {BANKS.map((b) => (
//                       <option key={b} value={b}>{b}</option>
//                     ))}
//                   </select>
//                   <span className="select-arrow">&#9660;</span>
//                 </div>
//               </div>

//               {/* Account Number */}
//               <div className="form-field">
//                 <label className="field-label">Enter Your Bank Account Number</label>
//                 <input
//                   type="text"
//                   name="accountNumber"
//                   className="field-input"
//                   value={bankDetails.accountNumber}
//                   onChange={handleChange}
//                   placeholder=""
//                 />
//               </div>

//               {/* Summary Table */}
//               <div className="summary-table">
//                 <div className="summary-row">
//                   <span className="summary-label">Requested Amount</span>
//                   <span className="summary-value">
//                     {parsedAmount > 0 ? parsedAmount.toLocaleString() : "—"}
//                   </span>
//                 </div>
//                 <div className="summary-row">
//                   <span className="summary-label">2% Transaction Fee</span>
//                   <span className="summary-value">
//                     {parsedAmount > 0 ? transactionFee.toLocaleString() : "—"}
//                   </span>
//                 </div>
//                 <div className="summary-row net-row">
//                   <span className="summary-label net-label">Net amount</span>
//                   <span className="summary-value net-value">
//                     {parsedAmount > 0 ? netAmount.toLocaleString() : "—"}
//                   </span>
//                 </div>
//               </div>

//               {/* Feedback */}
//               {error && <div className="feedback-error">{error}</div>}
//               {success && <div className="feedback-success">{success}</div>}

//               {/* Submit */}
//               <button
//                 className="submit-btn"
//                 onClick={handleSubmit}
//                 disabled={loading}
//               >
//                 {loading ? "Submitting..." : "Submit"}
//               </button>

//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";

// const BANKS = [
//   "Bangkok Bank",
//   "Kasikorn Bank",
//   "Siam Commercial Bank",
//   "Krungthai Bank",
//   "Bank of Ayudhya",
//   "TMBThanachart Bank",
// ];

// export default function Withdrawal() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [credit, setCredit] = useState(0);
//   const [requestedAmount, setRequestedAmount] = useState("");
//   const [bankDetails, setBankDetails] = useState({
//     name: "",
//     bank: "Bangkok Bank",
//     accountNumber: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [error, setError] = useState(null);
//   const [platformFeePercent, setPlatformFeePercent] = useState(3); // Default 3%, will be fetched from API

//   // Fetch withdrawable amount on component mount
//   useEffect(() => {
//     fetchWithdrawableAmount();
//   }, []);

//   const fetchWithdrawableAmount = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       // This endpoint should return the withdrawable amount
//       // Adjust this URL based on your actual API
//       const response = await fetch(
//         `${import.meta.env.VITE_SERVER_URL}/customer/withdrawable-amount`,
//         {
//           method: "GET",
//           headers: {
//             "Authorization": token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await response.json();
//       if (data.success && data.data) {
//         setCredit(parseFloat(data.data.withdrawable_amount) || 0);
//         // If platform fees percentage is returned, update it
//         if (data.data.platform_fees_percentage) {
//           setPlatformFeePercent(parseFloat(data.data.platform_fees_percentage));
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching withdrawable amount:", err);
//     }
//   };

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const platformFee = parseFloat(
//     ((parsedAmount * platformFeePercent) / 100).toFixed(2)
//   );
//   const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBankDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     // Validation
//     if (!requestedAmount || parsedAmount <= 0) {
//       setError("Please enter a valid requested amount.");
//       return;
//     }
//     if (parsedAmount > credit) {
//       setError("Requested amount exceeds available credit.");
//       return;
//     }
//     if (!bankDetails.name.trim()) {
//       setError("Please enter your name.");
//       return;
//     }
//     if (!bankDetails.bank) {
//       setError("Please choose your bank.");
//       return;
//     }
//     if (!bankDetails.accountNumber.trim()) {
//       setError("Please enter your bank account number.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         setError("Please login to continue.");
//         return;
//       }

//       // API call matching your backend exactly
//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/withdrawal",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": token, // Your backend expects the token directly
//           },
//           body: JSON.stringify({
//             amount: String(parsedAmount), // Backend expects amount as string
//           }),
//         }
//       );

//       const result = await response.json();
//       console.log("Withdrawal response:", result);

//       if (result.success) {
//         setSuccess(result.message || "Withdrawal request submitted successfully!");
//         // Reset form
//         setRequestedAmount("");
//         setBankDetails((prev) => ({ ...prev, accountNumber: "" }));
//         // Refresh credit amount
//         fetchWithdrawableAmount();
//       } else {
//         // Handle specific backend error messages
//         setError(result.message || "Withdrawal request failed. Please try again.");
//       }
//     } catch (err) {
//       console.error("Withdrawal error:", err);
//       setError("Network error. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="main-container">
//       {/* Mobile Toggle Button — same as IncomeDashboard */}
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {/* Overlay — same as IncomeDashboard */}
//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar — same as IncomeDashboard */}
//       <Sidebar show={isSidebarOpen} />

//       {/* Main Wrapper — same as IncomeDashboard */}
//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">
//               {/* Notice Banner */}
//               <div className="notice-banner">
//                 <span className="notice-icon">&#9432;</span>
//                 <p className="notice-text">
//                   All withdrawal requests placed between 6:00 PM and 10:00 AM
//                   (Thailand Time) will be processed after 10:00 AM.
//                 </p>
//               </div>

//               {/* Credit Badge */}
//               <div className="credit-badge">
//                 Available Credit — {credit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ฿
//               </div>

//               {/* Requested Amount */}
//               <div className="form-field">
//                 <label className="field-label">Requested Amount*</label>
//                 <input
//                   type="number"
//                   className="field-input"
//                   value={requestedAmount}
//                   onChange={(e) => setRequestedAmount(e.target.value)}
//                   min="0"
//                   max={credit}
//                   placeholder="Enter amount"
//                 />
//                 <span className="field-hint">
//                   *A standard {platformFeePercent}% platform fee will be applied to the total amount during Withdrawal.
//                 </span>
//               </div>

//               {/* Bank Details Section */}
//               <div className="section-title">Your Bank Details</div>

//               {/* Enter Name */}
//               <div className="form-field">
//                 <label className="field-label">Enter Name*</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className="field-input"
//                   value={bankDetails.name}
//                   onChange={handleChange}
//                   placeholder="As per ID"
//                 />
//                 <span className="field-hint">*as per id</span>
//               </div>

//               {/* Choose Bank */}
//               <div className="form-field">
//                 <label className="field-label">Choose Your Bank</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="bank"
//                     className="field-select"
//                     value={bankDetails.bank}
//                     onChange={handleChange}
//                   >
//                     {BANKS.map((b) => (
//                       <option key={b} value={b}>{b}</option>
//                     ))}
//                   </select>
//                   <span className="select-arrow">&#9660;</span>
//                 </div>
//               </div>

//               {/* Account Number */}
//               <div className="form-field">
//                 <label className="field-label">Enter Your Bank Account Number</label>
//                 <input
//                   type="text"
//                   name="accountNumber"
//                   className="field-input"
//                   value={bankDetails.accountNumber}
//                   onChange={handleChange}
//                   placeholder=""
//                 />
//               </div>

//               {/* Summary Table */}
//               <div className="summary-table">
//                 <div className="summary-row">
//                   <span className="summary-label">Requested Amount</span>
//                   <span className="summary-value">
//                     {parsedAmount > 0 ? parsedAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "—"}
//                   </span>
//                 </div>
//                 <div className="summary-row">
//                   <span className="summary-label">{platformFeePercent}% Platform Fee</span>
//                   <span className="summary-value">
//                     {parsedAmount > 0 ? platformFee.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "—"}
//                   </span>
//                 </div>
//                 <div className="summary-row net-row">
//                   <span className="summary-label net-label">Net amount</span>
//                   <span className="summary-value net-value">
//                     {parsedAmount > 0 ? netAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "—"}
//                   </span>
//                 </div>
//               </div>

//               {/* Feedback */}
//               {error && <div className="feedback-error">{error}</div>}
//               {success && <div className="feedback-success">{success}</div>}

//               {/* Submit */}
//               <button
//                 className="submit-btn"
//                 onClick={handleSubmit}
//                 disabled={loading}
//               >
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";

// const BANKS = [
//   "Bangkok Bank",
//   "Kasikorn Bank",
//   "Siam Commercial Bank",
//   "Krungthai Bank",
//   "Bank of Ayudhya",
//   "TMBThanachart Bank",
// ];

// export default function Withdrawal() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [credit, setCredit] = useState(0);
//   const [requestedAmount, setRequestedAmount] = useState("");
//   const [bankDetails, setBankDetails] = useState({
//     name: "",
//     bank: "Bangkok Bank",
//     accountNumber: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [error, setError] = useState(null);
//   const [platformFeePercent, setPlatformFeePercent] = useState(3);

//   // Legal verification states
//   const [legalStatus, setLegalStatus] = useState(null); // 'NOTSTARTED','PENDING','APPROVED','REJECTED'
//   const [legalMessage, setLegalMessage] = useState("");
//   const [isLegalVerified, setIsLegalVerified] = useState(false);
//   const [legalLoading, setLegalLoading] = useState(true);

//   // Fetch withdrawable amount and legal status on mount
//   useEffect(() => {
//     fetchWithdrawableAmount();
//     fetchLegalVerificationStatus();
//   }, []);

//   const fetchWithdrawableAmount = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(
//         `${import.meta.env.VITE_SERVER_URL}/customer/withdrawable-amount`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await response.json();
//       if (data.success && data.data) {
//         setCredit(parseFloat(data.data.withdrawable_amount) || 0);
//         if (data.data.platform_fees_percentage) {
//           setPlatformFeePercent(parseFloat(data.data.platform_fees_percentage));
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching withdrawable amount:", err);
//     }
//   };

//   const fetchLegalVerificationStatus = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setLegalMessage("Please log in to check verification status.");
//         setLegalLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         setLegalStatus(result.data.status);
//         setLegalMessage(result.data.message);
//         setIsLegalVerified(result.data.is_legal_details_verified === true);
//       } else {
//         setLegalMessage(result.message || "Unable to fetch verification status.");
//         setIsLegalVerified(false);
//       }
//     } catch (err) {
//       console.error("Error fetching legal verification status:", err);
//       setLegalMessage("Network error. Please check your connection.");
//       setIsLegalVerified(false);
//     } finally {
//       setLegalLoading(false);
//     }
//   };

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const platformFee = parseFloat(
//     ((parsedAmount * platformFeePercent) / 100).toFixed(2)
//   );
//   const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBankDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     // Legal verification check
//     if (!isLegalVerified) {
//       setError("Your identity verification is not complete. Please complete verification before requesting a withdrawal.");
//       return;
//     }

//     // Validation
//     if (!requestedAmount || parsedAmount <= 0) {
//       setError("Please enter a valid requested amount.");
//       return;
//     }
//     if (parsedAmount > credit) {
//       setError("Requested amount exceeds available credit.");
//       return;
//     }
//     if (!bankDetails.name.trim()) {
//       setError("Please enter your name.");
//       return;
//     }
//     if (!bankDetails.bank) {
//       setError("Please choose your bank.");
//       return;
//     }
//     if (!bankDetails.accountNumber.trim()) {
//       setError("Please enter your bank account number.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         setError("Please login to continue.");
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/withdrawal",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             amount: String(parsedAmount),
//           }),
//         }
//       );

//       const result = await response.json();
//       console.log("Withdrawal response:", result);

//       if (result.success) {
//         setSuccess(result.message || "Withdrawal request submitted successfully!");
//         setRequestedAmount("");
//         setBankDetails((prev) => ({ ...prev, accountNumber: "" }));
//         fetchWithdrawableAmount();
//       } else {
//         setError(result.message || "Withdrawal request failed. Please try again.");
//       }
//     } catch (err) {
//       console.error("Withdrawal error:", err);
//       setError("Network error. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Determine the banner style based on legal status
//   const getLegalStatusClass = () => {
//     switch (legalStatus) {
//       case "APPROVED":
//         return "legal-banner success";
//       case "PENDING":
//         return "legal-banner warning";
//       case "REJECTED":
//         return "legal-banner error";
//       case "NOTSTARTED":
//       default:
//         return "legal-banner info";
//     }
//   };

//   return (
//     <div className="main-container">
//       {/* Mobile Toggle Button */}
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <Sidebar show={isSidebarOpen} />

//       {/* Main Wrapper */}
//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">
//               {/* Notice Banner (time restriction) */}
//               <div className="notice-banner">
//                 <span className="notice-icon">&#9432;</span>
//                 <p className="notice-text">
//                   All withdrawal requests placed between 6:00 PM and 10:00 AM
//                   (Thailand Time) will be processed after 10:00 AM.
//                 </p>
//               </div>

//               {/* Legal Verification Status Banner */}
//               {!legalLoading && legalMessage && (
//                 <div className={getLegalStatusClass()}>
//                   <span className="notice-icon">
//                     {legalStatus === "APPROVED" ? "✓" : "ⓘ"}
//                   </span>
//                   <p className="notice-text">{legalMessage}</p>
//                 </div>
//               )}

//               {/* Credit Badge */}
//               <div className="credit-badge">
//                 Available Credit —{" "}
//                 {credit.toLocaleString("en-US", {
//                   minimumFractionDigits: 2,
//                   maximumFractionDigits: 2,
//                 })}{" "}
//                 ฿
//               </div>

//               {/* Requested Amount */}
//               <div className="form-field">
//                 <label className="field-label">Requested Amount*</label>
//                 <input
//                   type="number"
//                   className="field-input"
//                   value={requestedAmount}
//                   onChange={(e) => setRequestedAmount(e.target.value)}
//                   min="0"
//                   max={credit}
//                   placeholder="Enter amount"
//                   disabled={!isLegalVerified}
//                 />
//                 <span className="field-hint">
//                   *A standard {platformFeePercent}% platform fee will be applied to the total amount during Withdrawal.
//                 </span>
//               </div>

//               {/* Bank Details Section */}
//               <div className="section-title">Your Bank Details</div>

//               {/* Enter Name */}
//               <div className="form-field">
//                 <label className="field-label">Enter Name*</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className="field-input"
//                   value={bankDetails.name}
//                   onChange={handleChange}
//                   placeholder="As per ID"
//                   disabled={!isLegalVerified}
//                 />
//                 <span className="field-hint">*as per id</span>
//               </div>

//               {/* Choose Bank */}
//               <div className="form-field">
//                 <label className="field-label">Choose Your Bank</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="bank"
//                     className="field-select"
//                     value={bankDetails.bank}
//                     onChange={handleChange}
//                     disabled={true}
//                   >
//                     {BANKS.map((b) => (
//                       <option  key={b} value={b}>
//                         {b}
//                       </option>
//                     ))}
//                   </select>
//                   <span className="select-arrow">&#9660;</span>
//                 </div>
//               </div>

//               {/* Account Number */}
//               <div className="form-field">
//                 <label className="field-label">Enter Your Bank Account Number</label>
//                 <input
//                   type="text"
//                   name="accountNumber"
//                   className="field-input"
//                   value={bankDetails.accountNumber}
//                   onChange={handleChange}
//                   placeholder=""
//                   disabled={!isLegalVerified}
//                 />
//               </div>

//               {/* Summary Table */}
//               <div className="summary-table">
//                 <div className="summary-row">
//                   <span className="summary-label">Requested Amount</span>
//                   <span className="summary-value">
//                     {parsedAmount > 0
//                       ? parsedAmount.toLocaleString("en-US", {
//                           minimumFractionDigits: 2,
//                           maximumFractionDigits: 2,
//                         })
//                       : "—"}
//                   </span>
//                 </div>
//                 <div className="summary-row">
//                   <span className="summary-label">{platformFeePercent}% Platform Fee</span>
//                   <span className="summary-value">
//                     {parsedAmount > 0
//                       ? platformFee.toLocaleString("en-US", {
//                           minimumFractionDigits: 2,
//                           maximumFractionDigits: 2,
//                         })
//                       : "—"}
//                   </span>
//                 </div>
//                 <div className="summary-row net-row">
//                   <span className="summary-label net-label">Net amount</span>
//                   <span className="summary-value net-value">
//                     {parsedAmount > 0
//                       ? netAmount.toLocaleString("en-US", {
//                           minimumFractionDigits: 2,
//                           maximumFractionDigits: 2,
//                         })
//                       : "—"}
//                   </span>
//                 </div>
//               </div>

//               {/* Feedback */}
//               {error && <div className="feedback-error">{error}</div>}
//               {success && <div className="feedback-success">{success}</div>}

//               {/* Submit */}
//               <button
//                 className="submit-btn"
//                 onClick={handleSubmit}
//                 disabled={loading || !isLegalVerified}
//               >
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";

// const BANKS = [
//   "Bangkok Bank",
//   "Kasikorn Bank",
//   "Siam Commercial Bank",
//   "Krungthai Bank",
//   "Bank of Ayudhya",
//   "TMBThanachart Bank",
// ];

// export default function Withdrawal() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [credit, setCredit] = useState(0);
//   const [requestedAmount, setRequestedAmount] = useState("");

//   const [bankDetails, setBankDetails] = useState({
//     name: "",
//     bank: "",
//     accountNumber: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [error, setError] = useState(null);
//   const [platformFeePercent, setPlatformFeePercent] = useState(3);

//   // Legal verification states
//   const [legalStatus, setLegalStatus] = useState(null);
//   const [legalMessage, setLegalMessage] = useState("");
//   const [isLegalVerified, setIsLegalVerified] = useState(false);
//   const [legalLoading, setLegalLoading] = useState(true);

//   // Fetch all data on mount
//   useEffect(() => {
//     fetchCustomerLegalDetails();
//     fetchLegalVerificationStatus();
//   }, []);

//   // New API: Get Customer Legal Details (Credit + Platform Fee + Bank Details)
//   const fetchCustomerLegalDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         },
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         const { legal_details, platform_fees_percentage, customer_credit } =
//           result.data;

//         // Set Credit
//         setCredit(parseFloat(customer_credit) || 0);

//         // Set Dynamic Platform Fee
//         if (platform_fees_percentage) {
//           setPlatformFeePercent(parseFloat(platform_fees_percentage));
//         }

//         // Set Bank Details (Pre-filled & will be disabled)
//         if (legal_details) {
//           setBankDetails({
//             name: legal_details.legal_name || "",
//             bank: legal_details.bank_name || "Bangkok Bank",
//             accountNumber: legal_details.bank_account_no || "",
//           });
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching customer legal details:", err);
//       setError("Failed to load your bank and credit details.");
//     }
//   };

//   // Legal Verification Status
//   const fetchLegalVerificationStatus = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setLegalMessage("Please log in to check verification status.");
//         setLegalLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         },
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         setLegalStatus(result.data.status);
//         setLegalMessage(result.data.message);
//         setIsLegalVerified(result.data.is_legal_details_verified === true);
//       } else {
//         setLegalMessage(
//           result.message || "Unable to fetch verification status.",
//         );
//         setIsLegalVerified(false);
//       }
//     } catch (err) {
//       console.error("Error fetching legal verification status:", err);
//       setLegalMessage("Network error. Please check your connection.");
//       setIsLegalVerified(false);
//     } finally {
//       setLegalLoading(false);
//     }
//   };

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const platformFee = parseFloat(
//     ((parsedAmount * platformFeePercent) / 100).toFixed(2),
//   );
//   const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     if (!isLegalVerified) {
//       setError(
//         "Your identity verification is not complete. Please complete verification before requesting a withdrawal.",
//       );
//       return;
//     }

//     if (!requestedAmount || parsedAmount <= 0) {
//       setError("Please enter a valid requested amount.");
//       return;
//     }
//     if (parsedAmount > credit) {
//       setError("Requested amount exceeds available credit.");
//       return;
//     }
//     if (!bankDetails.name.trim() || !bankDetails.accountNumber.trim()) {
//       setError("Bank details are missing. Please contact support.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("Please login to continue.");
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/withdrawal",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             amount: String(parsedAmount),
//           }),
//         },
//       );

//       const result = await response.json();

//       if (result.success) {
//         setSuccess(
//           result.message || "Withdrawal request submitted successfully!",
//         );
//         setRequestedAmount("");
//         fetchCustomerLegalDetails(); // Refresh credit & details after success
//       } else {
//         setError(
//           result.message || "Withdrawal request failed. Please try again.",
//         );
//       }
//     } catch (err) {
//       console.error("Withdrawal error:", err);
//       setError("Network error. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getLegalStatusClass = () => {
//     switch (legalStatus) {
//       case "APPROVED":
//         return "legal-banner success";
//       case "PENDING":
//         return "legal-banner warning";
//       case "REJECTED":
//         return "legal-banner error";
//       case "NOTSTARTED":
//       default:
//         return "legal-banner info";
//     }
//   };

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">
//               {/* Notice Banner */}
//               <div className="notice-banner">
//                 <span className="notice-icon">&#9432;</span>
//                 <p className="notice-text">
//                   All withdrawal requests placed between 6:00 PM and 10:00 AM
//                   (Thailand Time) will be processed after 10:00 AM.
//                 </p>
//               </div>

//               {/* Legal Verification Status Banner */}
//               {!legalLoading && legalMessage && (
//                 <div className={`${getLegalStatusClass()} d-flex gap-2`}>
//                   <span className="notice-icon text-white">
//                     {legalStatus === "APPROVED" ? "✓" : "ⓘ"}
//                   </span>
//                   <p className="notice-text text-white">{legalMessage}</p>
//                 </div>
//               )}

//               {/* Credit Badge */}
//               <div className="credit-badge">
//                 Credit{" "}
//                 {credit.toLocaleString("en-US", {
//                   minimumFractionDigits: 2,
//                   maximumFractionDigits: 2,
//                 })}{" "}
//                 ฿
//               </div>

//               {/* Requested Amount */}
//               <div className="form-field">
//                 <label className="field-label">Requested Amount*</label>
//                 <input
//                   type="number"
//                   className="field-input"
//                   value={requestedAmount}
//                   onChange={(e) => setRequestedAmount(e.target.value)}
//                   min="0"
//                   max={credit}
//                   placeholder="Enter amount"
//                   disabled={!isLegalVerified}
//                 />
//                 <span className="field-hint">
//                   *A standard {platformFeePercent}% platform fee will be applied
//                   to the total amount during Withdrawal.
//                 </span>
//               </div>

//               {/* Bank Details Section - All fields disabled with default data */}
//               <div className="section-title">Your Bank Details</div>

//               <div className="form-field">
//                 <label className="field-label">Enter Name*</label>
//                 <input
//                   type="text"
//                   className="field-input text-white"
//                   value={bankDetails.name}
//                   disabled={true}
//                   placeholder="As per ID"
//                 />
//                 <span className="field-hint">
//                   *Auto-filled from your legal details
//                 </span>
//               </div>

//               <div className="form-field">
//                 <label className="field-label">Choose Your Bank</label>
//                 <div className="select-wrapper w-100">
//                   <select
//                     className="field-select w-100 text-white"
//                     value={bankDetails.bank}
//                     disabled={true}
//                   >
//                     {BANKS.map((b) => (
//                       <option key={b} value={b}>
//                         {b}
//                       </option>
//                     ))}
//                   </select>
//                   {/* <span className="select-arrow">&#9660;</span> */}
//                 </div>
//               </div>

//               <div className="form-field">
//                 <label className="field-label">
//                   Enter Your Bank Account Number
//                 </label>
//                 <input
//                   type="text"
//                   className="field-input text-white"
//                   value={bankDetails.accountNumber}
//                   disabled={true}
//                   placeholder=""
//                 />
//               </div>

//               {/* Summary Table */}
//               <div className="summary-table">
//                 <div className="summary-row">
//                   <span className="summary-label">Requested Amount</span>
//                   <span className="summary-value">
//                     {parsedAmount > 0
//                       ? parsedAmount.toLocaleString("en-US", {
//                           minimumFractionDigits: 2,
//                           maximumFractionDigits: 2,
//                         })
//                       : "—"}
//                   </span>
//                 </div>
//                 <div className="summary-row">
//                   <span className="summary-label">
//                     {platformFeePercent}% Transection Fee
//                   </span>
//                   <span className="summary-value">
//                     {parsedAmount > 0
//                       ? platformFee.toLocaleString("en-US", {
//                           minimumFractionDigits: 2,
//                           maximumFractionDigits: 2,
//                         })
//                       : "—"}
//                   </span>
//                 </div>
//                 <div className="summary-row net-row">
//                   <span className="summary-label net-label">Net amount</span>
//                   <span className="summary-value net-value">
//                     {parsedAmount > 0
//                       ? netAmount.toLocaleString("en-US", {
//                           minimumFractionDigits: 2,
//                           maximumFractionDigits: 2,
//                         })
//                       : "—"}
//                   </span>
//                 </div>
//               </div>

//               {error && <div className="feedback-error">{error}</div>}
//               {success && <div className="feedback-success">{success}</div>}

//               <button
//                 className="submit-btn"
//                 onClick={handleSubmit}
//                 disabled={loading || !isLegalVerified}
//               >
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";

// const BANKS = [
//   "Bangkok Bank",
//   "Kasikorn Bank",
//   "Siam Commercial Bank",
//   "Krungthai Bank",
//   "Bank of Ayudhya",
//   "TMBThanachart Bank",
// ];

// export default function Withdrawal() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [credit, setCredit] = useState(0);
//   const [requestedAmount, setRequestedAmount] = useState("");

//   const [bankDetails, setBankDetails] = useState({
//     name: "",
//     bank: "",
//     accountNumber: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [error, setError] = useState(null);
//   const [platformFeePercent, setPlatformFeePercent] = useState(3);

//   // Legal verification states
//   const [legalStatus, setLegalStatus] = useState(null);
//   const [legalMessage, setLegalMessage] = useState("");
//   const [isLegalVerified, setIsLegalVerified] = useState(false);
//   const [legalLoading, setLegalLoading] = useState(true);

//   // Fetch all data on mount
//   useEffect(() => {
//     fetchCustomerLegalDetails();
//     fetchLegalVerificationStatus();
//   }, []);

//   // New API: Get Customer Legal Details (Credit + Platform Fee + Bank Details)
//   const fetchCustomerLegalDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         },
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         const { legal_details, platform_fees_percentage, customer_credit } =
//           result.data;

//         // Set Credit
//         setCredit(parseFloat(customer_credit) || 0);

//         // Set Dynamic Platform Fee
//         if (platform_fees_percentage) {
//           setPlatformFeePercent(parseFloat(platform_fees_percentage));
//         }

//         // Set Bank Details (Pre-filled & will be disabled)
//         if (legal_details) {
//           setBankDetails({
//             name: legal_details.legal_name || "",
//             bank: legal_details.bank_name || "Bangkok Bank",
//             accountNumber: legal_details.bank_account_no || "",
//           });
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching customer legal details:", err);
//       setError("Failed to load your bank and credit details.");
//     }
//   };

//   // Legal Verification Status
//   const fetchLegalVerificationStatus = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setLegalMessage("Please log in to check verification status.");
//         setLegalLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         },
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         setLegalStatus(result.data.status);
//         setLegalMessage(result.data.message);
//         setIsLegalVerified(result.data.is_legal_details_verified === true);
//       } else {
//         setLegalMessage(
//           result.message || "Unable to fetch verification status.",
//         );
//         setIsLegalVerified(false);
//       }
//     } catch (err) {
//       console.error("Error fetching legal verification status:", err);
//       setLegalMessage("Network error. Please check your connection.");
//       setIsLegalVerified(false);
//     } finally {
//       setLegalLoading(false);
//     }
//   };

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const platformFee = parseFloat(
//     ((parsedAmount * platformFeePercent) / 100).toFixed(2),
//   );
//   const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     if (!isLegalVerified) {
//       setError(
//         "Your identity verification is not complete. Please complete verification before requesting a withdrawal.",
//       );
//       return;
//     }

//     if (!requestedAmount || parsedAmount <= 0) {
//       setError("Please enter a valid requested amount.");
//       return;
//     }
//     if (parsedAmount > credit) {
//       setError("Requested amount exceeds available credit.");
//       return;
//     }
//     if (!bankDetails.name.trim() || !bankDetails.accountNumber.trim()) {
//       setError("Bank details are missing. Please contact support.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("Please login to continue.");
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/withdrawal",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             amount: String(parsedAmount),
//           }),
//         },
//       );

//       const result = await response.json();

//       if (result.success) {
//         setSuccess(
//           result.message || "Withdrawal request submitted successfully!",
//         );
//         setRequestedAmount("");
//         fetchCustomerLegalDetails(); // Refresh credit & details after success
//       } else {
//         setError(
//           result.message || "Withdrawal request failed. Please try again.",
//         );
//       }
//     } catch (err) {
//       console.error("Withdrawal error:", err);
//       setError("Network error. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getLegalStatusClass = () => {
//     switch (legalStatus) {
//       case "APPROVED":
//         return "legal-banner success";
//       case "PENDING":
//         return "legal-banner warning";
//       case "REJECTED":
//         return "legal-banner error";
//       case "NOTSTARTED":
//       default:
//         return "legal-banner info";
//     }
//   };

//   // Close Sidebar
//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={handleCloseSidebar}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">
//               {/* Notice Banner */}
//               <div className="notice-banner">
//                 <div className="d-flex gap-2">

//                 <span className="notice-icon">&#9432;</span>
//                 <p className="text-colors" style={{fontSize:'13px'}}>
//                   All withdrawal requests placed between 6:00 PM and 10:00 AM
//                   (Thailand Time) will be processed after 10:00 AM.
//                 </p>
//                 </div>

//                 <div>

//                  {!legalLoading && legalMessage && (
//                    <div className={`${getLegalStatusClass()} d-flex gap-2`}>
//                   <span className="notice-icon text-colors">
//                     {legalStatus === "APPROVED" ? "✓" : "ⓘ"}
//                   </span>
//                   <p className="notice-text">{legalMessage}</p>
//                 </div>
//               )}
//               </div>
//               </div>

//               {/* Legal Verification Status Banner */}

//               {/* Credit Badge */}
//               <div className="credit-badge">
//                 Credit{" "}
//                 {credit.toLocaleString("en-US", {
//                   minimumFractionDigits: 2,
//                   maximumFractionDigits: 2,
//                 })}{" "}
//                 ฿
//               </div>

//               {/* Requested Amount */}
//               <div className="form-field">
//                 <label className="field-label">Requested Amount*</label>
//                 <input
//                   type="number"
//                   className="field-input"
//                   value={requestedAmount}
//                   onChange={(e) => setRequestedAmount(e.target.value)}
//                   min="0"
//                   max={credit}
//                   placeholder="Enter amount"
//                   disabled={!isLegalVerified}
//                 />
//                 <span className="field-hint">
//                   *A standard {platformFeePercent}% platform fee will be applied
//                   to the total amount during Withdrawal.
//                 </span>
//               </div>

//               {/* Bank Details Section - All fields disabled with default data */}
//               <div className="section-title">Your Bank Details</div>

//               <div className="form-field">
//                 <label className="field-label">Enter Name*</label>
//                 <input
//                   type="text"
//                   className="field-input text-white"
//                   value={bankDetails.name}
//                   disabled={true}
//                   placeholder="As per ID"
//                 />
//                 <span className="field-hint">
//                   *Auto-filled from your legal details
//                 </span>
//               </div>

//               <div className="form-field">
//                 <label className="field-label">Choose Your Bank</label>
//                 <div className="select-wrapper w-100">
//                   <select
//                     className="field-select w-100 text-white"
//                     value={bankDetails.bank}
//                     disabled={true}
//                   >
//                     {BANKS.map((b) => (
//                       <option key={b} value={b}>
//                         {b}
//                       </option>
//                     ))}
//                   </select>
//                   {/* <span className="select-arrow">&#9660;</span> */}
//                 </div>
//               </div>

//               <div className="form-field">
//                 <label className="field-label">
//                   Enter Your Bank Account Number
//                 </label>
//                 <input
//                   type="text"
//                   className="field-input text-white"
//                   value={bankDetails.accountNumber}
//                   disabled={true}
//                   placeholder=""
//                 />
//               </div>

//               {/* Summary Table */}
//               <div className="summary-table">
//                 <div className="summary-row">
//                   <span className="summary-label">Requested Amount</span>
//                   <span className="summary-value">
//                     {parsedAmount > 0
//                       ? parsedAmount.toLocaleString("en-US", {
//                           minimumFractionDigits: 2,
//                           maximumFractionDigits: 2,
//                         })
//                       : "—"}
//                   </span>
//                 </div>
//                 <div className="summary-row">
//                   <span className="summary-label">
//                     {platformFeePercent}% Transection Fee
//                   </span>
//                   <span className="summary-value">
//                     {parsedAmount > 0
//                       ? platformFee.toLocaleString("en-US", {
//                           minimumFractionDigits: 2,
//                           maximumFractionDigits: 2,
//                         })
//                       : "—"}
//                   </span>
//                 </div>
//                 <div className="summary-row net-row">
//                   <span className="summary-label net-label">Net amount</span>
//                   <span className="summary-value net-value">
//                     {parsedAmount > 0
//                       ? netAmount.toLocaleString("en-US", {
//                           minimumFractionDigits: 2,
//                           maximumFractionDigits: 2,
//                         })
//                       : "—"}
//                   </span>
//                 </div>
//               </div>

//               {error && <div className="feedback-error">{error}</div>}
//               {success && <div className="feedback-success">{success}</div>}

//               <button
//                 className="submit-btn"
//                 onClick={handleSubmit}
//                 disabled={loading || !isLegalVerified}
//               >
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";

// const BANKS = [
//   "Bangkok Bank",
//   "Kasikorn Bank",
//   "Siam Commercial Bank",
//   "Krungthai Bank",
//   "Bank of Ayudhya",
//   "TMBThanachart Bank",
// ];

// export default function Withdrawal() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [credit, setCredit] = useState(0);
//   const [requestedAmount, setRequestedAmount] = useState("");

//   const [bankDetails, setBankDetails] = useState({
//     name: "",
//     bank: "",
//     accountNumber: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [error, setError] = useState(null);
//   const [platformFeePercent, setPlatformFeePercent] = useState(3);

//   // Legal verification states
//   const [legalStatus, setLegalStatus] = useState(null);
//   const [legalMessage, setLegalMessage] = useState("");
//   const [isLegalVerified, setIsLegalVerified] = useState(false);
//   const [legalLoading, setLegalLoading] = useState(true);

//   // Fetch all data on mount
//   useEffect(() => {
//     fetchCustomerLegalDetails();
//     fetchLegalVerificationStatus();
//   }, []);

//   // New API: Get Customer Legal Details (Credit + Platform Fee + Bank Details)
//   const fetchCustomerLegalDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         const { legal_details, platform_fees_percentage, customer_credit } =
//           result.data;

//         // Set Credit
//         setCredit(parseFloat(customer_credit) || 0);

//         // Set Dynamic Platform Fee
//         if (platform_fees_percentage) {
//           setPlatformFeePercent(parseFloat(platform_fees_percentage));
//         }

//         // Set Bank Details (Pre-filled & will be disabled)
//         if (legal_details) {
//           setBankDetails({
//             name: legal_details.legal_name || "",
//             bank: legal_details.bank_name || "Bangkok Bank",
//             accountNumber: legal_details.bank_account_no || "",
//           });
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching customer legal details:", err);
//       setError("Failed to load your bank and credit details.");
//     }
//   };

//   // Legal Verification Status
//   const fetchLegalVerificationStatus = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setLegalMessage("Please log in to check verification status.");
//         setLegalLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         setLegalStatus(result.data.status);
//         setLegalMessage(result.data.message);
//         setIsLegalVerified(result.data.is_legal_details_verified === true);
//       } else {
//         setLegalMessage(
//           result.message || "Unable to fetch verification status."
//         );
//         setIsLegalVerified(false);
//       }
//     } catch (err) {
//       console.error("Error fetching legal verification status:", err);
//       setLegalMessage("Network error. Please check your connection.");
//       setIsLegalVerified(false);
//     } finally {
//       setLegalLoading(false);
//     }
//   };

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const platformFee = parseFloat(
//     ((parsedAmount * platformFeePercent) / 100).toFixed(2)
//   );
//   const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     if (!isLegalVerified) {
//       setError(
//         "Your identity verification is not complete. Please complete verification before requesting a withdrawal."
//       );
//       return;
//     }

//     if (!requestedAmount || parsedAmount <= 0) {
//       setError("Please enter a valid requested amount.");
//       return;
//     }
//     if (parsedAmount > credit) {
//       setError("Requested amount exceeds available credit.");
//       return;
//     }
//     if (!bankDetails.name.trim() || !bankDetails.accountNumber.trim()) {
//       setError("Bank details are missing. Please contact support.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("Please login to continue.");
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/withdrawal",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             amount: String(parsedAmount),
//           }),
//         }
//       );

//       const result = await response.json();

//       if (result.success) {
//         setSuccess(
//           result.message || "Withdrawal request submitted successfully!"
//         );
//         setRequestedAmount("");
//         fetchCustomerLegalDetails(); // Refresh credit & details after success
//       } else {
//         setError(
//           result.message || "Withdrawal request failed. Please try again."
//         );
//       }
//     } catch (err) {
//       console.error("Withdrawal error:", err);
//       setError("Network error. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getLegalStatusClass = () => {
//     switch (legalStatus) {
//       case "APPROVED":
//         return "legal-banner success";
//       case "PENDING":
//         return "legal-banner warning";
//       case "REJECTED":
//         return "legal-banner error";
//       case "NOTSTARTED":
//       default:
//         return "legal-banner info";
//     }
//   };

//   // Show popup with verification message when user clicks on locked area
//   const showVerificationPopup = () => {
//     if (!isLegalVerified && legalMessage) {
//       alert(legalMessage);
//     }
//   };

//   // Close Sidebar
//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={handleCloseSidebar}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">
//               {/* Notice Banner */}
//               <div className="notice-banner">
//                 <div className="d-flex gap-2">
//                   <span className="notice-icon">&#9432;</span>
//                   <p className="text-colors" style={{ fontSize: "13px" }}>
//                     All withdrawal requests placed between 6:00 PM and 10:00 AM
//                     (Thailand Time) will be processed after 10:00 AM.
//                   </p>
//                 </div>

//                 <div>
//                   {!legalLoading && legalMessage && (
//                     <div className={`${getLegalStatusClass()} d-flex gap-2`}>
//                       <span className="notice-icon text-colors">
//                         {legalStatus === "APPROVED" ? "✓" : "ⓘ"}
//                       </span>
//                       <p className="notice-text">{legalMessage}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Credit Badge */}
//               <div className="credit-badge">
//                 Credit{" "}
//                 {credit.toLocaleString("en-US", {
//                   minimumFractionDigits: 2,
//                   maximumFractionDigits: 2,
//                 })}{" "}
//                 ฿
//               </div>

//               {/* Form wrapper with relative positioning for overlay */}
//               <div style={{ position: "relative" }}>
//                 {/* Overlay when not verified - covers entire form area */}
//                 {!isLegalVerified && (
//                   <div
//                     onClick={showVerificationPopup}
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       inset:"-1000px",
//                       right: 0,
//                       bottom: 0,
//                       backgroundColor: "rgb(255 255 255 / 17%)",
//                       backdropFilter: "blur(2px)",
//                       zIndex: 10,
//                       borderRadius: "12px",
//                       cursor: "pointer",
//                     }}
//                   />
//                 )}

//                 {/* Requested Amount */}
//                 <div className="form-field">
//                   <label className="field-label">Requested Amount*</label>
//                   <input
//                     type="number"
//                     className="field-input"
//                     value={requestedAmount}
//                     onChange={(e) => setRequestedAmount(e.target.value)}
//                     min="0"
//                     max={credit}
//                     placeholder="Enter amount"
//                     disabled={!isLegalVerified}
//                     onClick={() => {
//                       if (!isLegalVerified) showVerificationPopup();
//                     }}
//                   />
//                   <span className="field-hint">
//                     *A standard {platformFeePercent}% platform fee will be applied
//                     to the total amount during Withdrawal.
//                   </span>
//                 </div>

//                 {/* Bank Details Section - All fields disabled with default data */}
//                 <div className="section-title">Your Bank Details</div>

//                 <div className="form-field">
//                   <label className="field-label">Enter Name*</label>
//                   <input
//                     type="text"
//                     className="field-input text-white"
//                     value={bankDetails.name}
//                     disabled={true}
//                     placeholder="As per ID"
//                   />
//                   <span className="field-hint">
//                     *Auto-filled from your legal details
//                   </span>
//                 </div>

//                 <div className="form-field">
//                   <label className="field-label">Choose Your Bank</label>
//                   <div className="select-wrapper w-100">
//                     <select
//                       className="field-select field-selectsss w-100 text-white"
//                       value={bankDetails.bank}
//                       disabled={true}
//                     >
//                       {BANKS.map((b) => (
//                         <option key={b} value={b}>
//                           {b}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 <div className="form-field">
//                   <label className="field-label">
//                     Enter Your Bank Account Number
//                   </label>
//                   <input
//                     type="text"
//                     className="field-input text-white"
//                     value={bankDetails.accountNumber}
//                     disabled={true}
//                     placeholder=""
//                   />
//                 </div>

//                 {/* Summary Table */}
//                 <div
//                   className="summary-table"
//                   onClick={() => {
//                     if (!isLegalVerified) showVerificationPopup();
//                   }}
//                   style={{ cursor: !isLegalVerified ? "pointer" : "default" }}
//                 >
//                   <div className="summary-row">
//                     <span className="summary-label">Requested Amount</span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? parsedAmount.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row">
//                     <span className="summary-label">
//                       {platformFeePercent}% Transection Fee
//                     </span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? platformFee.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row net-row">
//                     <span className="summary-label net-label">Net amount</span>
//                     <span className="summary-value net-value">
//                       {parsedAmount > 0
//                         ? netAmount.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                 </div>

//                 {error && <div className="feedback-error">{error}</div>}
//                 {success && <div className="feedback-success">{success}</div>}

//                 <button
//                   className="submit-btn"
//                   onClick={handleSubmit}
//                   disabled={loading || !isLegalVerified}
//                 >
//                   {loading ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Modal, Button } from "react-bootstrap"; // ← Added for modal popup
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";

// const BANKS = [
//   "Bangkok Bank",
//   "Kasikorn Bank",
//   "Siam Commercial Bank",
//   "Krungthai Bank",
//   "Bank of Ayudhya",
//   "TMBThanachart Bank",
// ];

// export default function Withdrawal() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [credit, setCredit] = useState(0);
//   const [requestedAmount, setRequestedAmount] = useState("");

//   const [bankDetails, setBankDetails] = useState({
//     name: "",
//     bank: "",
//     accountNumber: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [error, setError] = useState(null);
//   const [platformFeePercent, setPlatformFeePercent] = useState(3);

//   // Legal verification states
//   const [legalStatus, setLegalStatus] = useState(null);
//   const [legalMessage, setLegalMessage] = useState("");
//   const [isLegalVerified, setIsLegalVerified] = useState(false);
//   const [legalLoading, setLegalLoading] = useState(true);

//   // Modal state for popup messages
//   const [showMessageModal, setShowMessageModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [modalMessage, setModalMessage] = useState("");

//   // Fetch all data on mount
//   useEffect(() => {
//     fetchCustomerLegalDetails();
//     fetchLegalVerificationStatus();
//   }, []);

//   // Helper to show modal message instead of alert
//   const showMessage = (title, message) => {
//     setModalTitle(title);
//     setModalMessage(message);
//     setShowMessageModal(true);
//   };

//   // New API: Get Customer Legal Details (Credit + Platform Fee + Bank Details)
//   const fetchCustomerLegalDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         const { legal_details, platform_fees_percentage, customer_credit } =
//           result.data;

//         // Set Credit
//         setCredit(parseFloat(customer_credit) || 0);

//         // Set Dynamic Platform Fee
//         if (platform_fees_percentage) {
//           setPlatformFeePercent(parseFloat(platform_fees_percentage));
//         }

//         // Set Bank Details (Pre-filled & will be disabled)
//         if (legal_details) {
//           setBankDetails({
//             name: legal_details.legal_name || "",
//             bank: legal_details.bank_name || "Bangkok Bank",
//             accountNumber: legal_details.bank_account_no || "",
//           });
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching customer legal details:", err);
//       setError("Failed to load your bank and credit details.");
//     }
//   };

//   // Legal Verification Status
//   const fetchLegalVerificationStatus = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setLegalMessage("Please log in to check verification status.");
//         setLegalLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         setLegalStatus(result.data.status);
//         setLegalMessage(result.data.message);
//         setIsLegalVerified(result.data.is_legal_details_verified === true);
//       } else {
//         setLegalMessage(
//           result.message || "Unable to fetch verification status."
//         );
//         setIsLegalVerified(false);
//       }
//     } catch (err) {
//       console.error("Error fetching legal verification status:", err);
//       setLegalMessage("Network error. Please check your connection.");
//       setIsLegalVerified(false);
//     } finally {
//       setLegalLoading(false);
//     }
//   };

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const platformFee = parseFloat(
//     ((parsedAmount * platformFeePercent) / 100).toFixed(2)
//   );
//   const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     if (!isLegalVerified) {
//       setError(
//         "Your identity verification is not complete. Please complete verification before requesting a withdrawal."
//       );
//       return;
//     }

//     if (!requestedAmount || parsedAmount <= 0) {
//       setError("Please enter a valid requested amount.");
//       return;
//     }
//     if (parsedAmount > credit) {
//       setError("Requested amount exceeds available credit.");
//       return;
//     }
//     if (!bankDetails.name.trim() || !bankDetails.accountNumber.trim()) {
//       setError("Bank details are missing. Please contact support.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("Please login to continue.");
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/withdrawal",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             amount: String(parsedAmount),
//           }),
//         }
//       );

//       const result = await response.json();

//       if (result.success) {
//         showMessage(
//           "Success",
//           result.message || "Withdrawal request submitted successfully!"
//         );
//         setRequestedAmount("");
//         fetchCustomerLegalDetails(); // Refresh credit & details after success
//       } else {
//         setError(
//           result.message || "Withdrawal request failed. Please try again."
//         );
//       }
//     } catch (err) {
//       console.error("Withdrawal error:", err);
//       setError("Network error. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getLegalStatusClass = () => {
//     switch (legalStatus) {
//       case "APPROVED":
//         return "legal-banner success";
//       case "PENDING":
//         return "legal-banner warning";
//       case "REJECTED":
//         return "legal-banner error";
//       case "NOTSTARTED":
//       default:
//         return "legal-banner info";
//     }
//   };

//   // Show popup with verification message when user clicks on locked area
//   const showVerificationPopup = () => {
//     if (!isLegalVerified && legalMessage) {
//       showMessage("Verification Status", legalMessage);
//     }
//   };

//   // Close Sidebar
//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={handleCloseSidebar}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">
//               {/* Notice Banner */}
//               <div className="notice-banner">
//                 <div className="d-flex gap-2">
//                   <span className="notice-icon">&#9432;</span>
//                   <p className="text-colors" style={{ fontSize: "13px" }}>
//                     All withdrawal requests placed between 6:00 PM and 10:00 AM
//                     (Thailand Time) will be processed after 10:00 AM.
//                   </p>
//                 </div>

//                 <div>
//                   {!legalLoading && legalMessage && (
//                     <div className={`${getLegalStatusClass()} d-flex gap-2`}>
//                       <span className="notice-icon text-colors">
//                         {legalStatus === "APPROVED" ? "✓" : "ⓘ"}
//                       </span>
//                       <p className="notice-text">{legalMessage}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Credit Badge */}
//               <div className="credit-badge">
//                 Credit{" "}
//                 {credit.toLocaleString("en-US", {
//                   minimumFractionDigits: 2,
//                   maximumFractionDigits: 2,
//                 })}{" "}
//                 ฿
//               </div>

//               {/* Form wrapper with relative positioning for overlay */}
//               <div style={{ position: "relative" }}>
//                 {/* Overlay when not verified - covers entire form area */}
//                 {!isLegalVerified && (
//                   <div
//                     onClick={showVerificationPopup}
//                     style={{
//                       position: "absolute",
//                       top: -20,
//                       left: -20,
//                       right: -20,
//                       inset:"-300px",
//                       bottom: -40,
//                       backgroundColor: "rgba(255, 255, 255, 0.5)",
//                       backdropFilter: "blur(2px)",
//                       zIndex: 10,
//                       borderRadius: "12px",
//                       cursor: "pointer",
//                     }}
//                   />
//                 )}

//                 {/* Requested Amount */}
//                 <div className="form-field">
//                   <label className="field-label">Requested Amount*</label>
//                   <input
//                     type="number"
//                     className="field-input"
//                     value={requestedAmount}
//                     onChange={(e) => setRequestedAmount(e.target.value)}
//                     min="0"
//                     max={credit}
//                     placeholder="Enter amount"
//                     disabled={!isLegalVerified}
//                     onClick={() => {
//                       if (!isLegalVerified) showVerificationPopup();
//                     }}
//                   />
//                   <span className="field-hint">
//                     *A standard {platformFeePercent}% Legal fee will be applied
//                     to the total amount during Withdrawal.
//                   </span>
//                 </div>

//                 {/* Bank Details Section - All fields disabled with default data */}
//                 <div className="section-title">Your Bank Details</div>

//                 <div className="form-field">
//                   <label className="field-label">Enter Name*</label>
//                   <input
//                     type="text"
//                     className="field-input text-white"
//                     value={bankDetails.name}
//                     disabled={true}
//                     placeholder="As per ID"
//                   />
//                   <span className="field-hint">
//                     *Auto-filled from your legal details
//                   </span>
//                 </div>

//                 <div className="form-field">
//                   <label className="field-label">Choose Your Bank</label>
//                   <div className="select-wrapper w-100">
//                     <select
//                       className="field-select field-selectsss w-100 text-white"
//                       value={bankDetails.bank}
//                       disabled={true}
//                     >
//                       {BANKS.map((b) => (
//                         <option key={b} value={b}>
//                           {b}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 <div className="form-field">
//                   <label className="field-label">
//                     Enter Your Bank Account Number
//                   </label>
//                   <input
//                     type="text"
//                     className="field-input text-white"
//                     value={bankDetails.accountNumber}
//                     disabled={true}
//                     placeholder=""
//                   />
//                 </div>

//                 {/* Summary Table */}
//                 <div
//                   className="summary-table"
//                   onClick={() => {
//                     if (!isLegalVerified) showVerificationPopup();
//                   }}
//                   style={{ cursor: !isLegalVerified ? "pointer" : "default" }}
//                 >
//                   <div className="summary-row">
//                     <span className="summary-label">Requested Amount</span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? parsedAmount.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row">
//                     <span className="summary-label">
//                       {platformFeePercent}% Legal Fee
//                     </span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? platformFee.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row net-row">
//                     <span className="summary-label net-label">Net amount</span>
//                     <span className="summary-value net-value">
//                       {parsedAmount > 0
//                         ? netAmount.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                 </div>

//                 {error && <div className="feedback-error">{error}</div>}
//                 {success && <div className="feedback-success">{success}</div>}

//                 <button
//                   className="submit-btn"
//                   onClick={handleSubmit}
//                   disabled={loading || !isLegalVerified}
//                 >
//                   {loading ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Message Modal Popup */}
//       <Modal
//         show={showMessageModal}
//         onHide={() => setShowMessageModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{modalTitle}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{modalMessage}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant="primary"
//             onClick={() => setShowMessageModal(false)}
//             style={{ backgroundColor: "#e9527a", border: "none" }}
//           >
//             OK
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Modal, Button } from "react-bootstrap";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";

// const BANKS = [
//   "Bangkok Bank",
//   "Kasikorn Bank",
//   "Siam Commercial Bank",
//   "Krungthai Bank",
//   "Bank of Ayudhya",
//   "TMBThanachart Bank",
// ];

// export default function Withdrawal() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [credit, setCredit] = useState(0);
//   const [requestedAmount, setRequestedAmount] = useState("");

//   const [bankDetails, setBankDetails] = useState({
//     name: "",
//     bank: "",
//     accountNumber: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [error, setError] = useState(null);
//   const [platformFeePercent, setPlatformFeePercent] = useState(3);

//   const [legalStatus, setLegalStatus] = useState(null);
//   const [legalMessage, setLegalMessage] = useState("");
//   const [isLegalVerified, setIsLegalVerified] = useState(false);
//   const [legalLoading, setLegalLoading] = useState(true);

//   const [showMessageModal, setShowMessageModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [modalMessage, setModalMessage] = useState("");

//   useEffect(() => {
//     fetchCustomerLegalDetails();
//     fetchLegalVerificationStatus();
//   }, []);

//   const showMessage = (title, message) => {
//     setModalTitle(title);
//     setModalMessage(message);
//     setShowMessageModal(true);
//   };

//   const fetchCustomerLegalDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         const { legal_details, platform_fees_percentage, customer_credit } =
//           result.data;

//         setCredit(parseFloat(customer_credit) || 0);
//         if (platform_fees_percentage) {
//           setPlatformFeePercent(parseFloat(platform_fees_percentage));
//         }
//         if (legal_details) {
//           setBankDetails({
//             name: legal_details.legal_name || "",
//             bank: legal_details.bank_name || "Bangkok Bank",
//             accountNumber: legal_details.bank_account_no || "",
//           });
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching customer legal details:", err);
//       setError("Failed to load your bank and credit details.");
//     }
//   };

//   const fetchLegalVerificationStatus = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setLegalMessage("Please log in to check verification status.");
//         setLegalLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         setLegalStatus(result.data.status);
//         setLegalMessage(result.data.message);
//         setIsLegalVerified(result.data.is_legal_details_verified === true);
//       } else {
//         setLegalMessage(
//           result.message || "Unable to fetch verification status."
//         );
//         setIsLegalVerified(false);
//       }
//     } catch (err) {
//       console.error("Error fetching legal verification status:", err);
//       setLegalMessage("Network error. Please check your connection.");
//       setIsLegalVerified(false);
//     } finally {
//       setLegalLoading(false);
//     }
//   };

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const platformFee = parseFloat(
//     ((parsedAmount * platformFeePercent) / 100).toFixed(2)
//   );
//   const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     if (!isLegalVerified) {
//       setError(
//         "Your identity verification is not complete. Please complete verification before requesting a withdrawal."
//       );
//       return;
//     }

//     if (!requestedAmount || parsedAmount <= 0) {
//       setError("Please enter a valid requested amount.");
//       return;
//     }
//     if (parsedAmount > credit) {
//       setError("Requested amount exceeds available credit.");
//       return;
//     }
//     if (!bankDetails.name.trim() || !bankDetails.accountNumber.trim()) {
//       setError("Bank details are missing. Please contact support.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("Please login to continue.");
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/withdrawal",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             amount: String(parsedAmount),
//           }),
//         }
//       );

//       const result = await response.json();

//       if (result.success) {
//         showMessage(
//           "Success",
//           result.message || "Withdrawal request submitted successfully!"
//         );
//         setRequestedAmount("");
//         fetchCustomerLegalDetails();
//       } else {
//         setError(
//           result.message || "Withdrawal request failed. Please try again."
//         );
//       }
//     } catch (err) {
//       console.error("Withdrawal error:", err);
//       setError("Network error. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getLegalStatusClass = () => {
//     switch (legalStatus) {
//       case "APPROVED":
//         return "legal-banner success";
//       case "PENDING":
//         return "legal-banner warning";
//       case "REJECTED":
//         return "legal-banner error";
//       case "NOTSTARTED":
//       default:
//         return "legal-banner info";
//     }
//   };

//   const showVerificationPopup = () => {
//     if (!isLegalVerified && legalMessage) {
//       showMessage("Verification Status", legalMessage);
//     }
//   };

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={handleCloseSidebar}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">
//               {/* Notice Banner */}
//               <div className="notice-banner">
//                 <div className="d-flex gap-2">
//                   <span className="notice-icon">&#9432;</span>
//                   <p className="text-colors" style={{ fontSize: "13px" }}>
//                     All withdrawal requests placed between 6:00 PM and 10:00 AM
//                     (Thailand Time) will be processed after 10:00 AM.
//                   </p>
//                 </div>

//                 <div>
//                   {!legalLoading && legalMessage && (
//                     <div className={`${getLegalStatusClass()} d-flex gap-2`}>
//                       <span className="notice-icon text-colors">
//                         {legalStatus === "APPROVED" ? "✓" : "ⓘ"}
//                       </span>
//                       <p className="notice-text">{legalMessage}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Credit Badge */}
//               <div className="credit-badge">
//                 Credit{" "}
//                 {credit.toLocaleString("en-US", {
//                   minimumFractionDigits: 2,
//                   maximumFractionDigits: 2,
//                 })}{" "}
//                 ฿
//               </div>

//               {/* Form wrapper */}
//               <div style={{ position: "relative" }}>
//                 {/* Requested Amount */}
//                 <div className="form-field mt-0">
//                   <label className="field-label">Requested Amount*</label>
//                   {/* <input
//                     type="number"
//                     className="field-input text-white"
//                     value={requestedAmount}
//                     onChange={(e) => setRequestedAmount(e.target.value)}
//                     min="0"
//                     max={credit}
//                     placeholder="Enter amount"
//                     disabled={!isLegalVerified}
//                     onClick={() => {
//                       if (!isLegalVerified) showVerificationPopup();
//                     }}
//                   /> */}

//                   <input
//   type="text"
//   className="field-input text-white mt-0"
//   value={requestedAmount}
//   placeholder="Enter amount"

//   onChange={(e) => {
//     const value = e.target.value;

//     // Allow only numbers + decimal
//     if (/^\d*\.?\d*$/.test(value)) {
//       setRequestedAmount(value);
//     }
//   }}

//   onBlur={() => {
//     // Optional: format to 2 decimals
//     if (requestedAmount) {
//       setRequestedAmount(parseFloat(requestedAmount).toFixed(2));
//     }
//   }}

//   inputMode="decimal" // mobile numeric keyboard
//   disabled={!isLegalVerified}

//   onClick={() => {
//     if (!isLegalVerified) showVerificationPopup();
//   }}
// />
//                   <span className="field-hint">
//                     *A standard {platformFeePercent}% Legal fee will be applied
//                     to the total amount during Withdrawal.
//                   </span>
//                 </div>

//                 {/* Bank Details Section with permanent blur overlay */}
//                 <div
//                   // style={{
//                   //   position: "relative",
//                   //   minHeight: "200px", // ensures overlay has area to cover
//                   // }}
//                     style={{
//     position: "relative",
//     minHeight: "200px",
//     // ✅ Your blur glass CSS
//     background: "#f9ced921",
//     backdropFilter: "blur(12px)",
//     WebkitBackdropFilter: "blur(12px)", // Safari support
//     // border: "1px solid rgba(255,255,255,0.3)",
//     // boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
//     borderRadius: "10px", // optional but looks better
//     padding:'15px'
//   }}
//                 >
//                   {/* Blur overlay – stays forever until verified */}
//                   {!isLegalVerified && (
//                     <div
//                       onClick={showVerificationPopup}
//                       style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         backgroundColor: "rgba(255, 255, 255, 0.5)",
//                         backdropFilter: "blur(3px)",
//                         WebkitBackdropFilter: "blur(3px)", // Safari support
//                         zIndex: 9999,
//                         borderRadius: "8px",
//                         cursor: "pointer",
//                       }}
//                     />
//                   )}

//                   <div className="section-title">Your Bank Details</div>

//                   <div className="form-field">
//                     <label className="field-label">Enter Name*</label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.name}
//                       disabled={true}
//                       placeholder="As per ID"
//                     />
//                     <span className="field-hint">
//                       *Auto-filled from your legal details
//                     </span>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">Choose Your Bank</label>
//                     <div className="select-wrapper w-100">
//                       <select
//                         className="field-select field-selectsss w-100 text-white"
//                         value={bankDetails.bank}
//                         disabled={true}
//                       >
//                         {BANKS.map((b) => (
//                           <option key={b} value={b}>
//                             {b}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">
//                       Enter Your Bank Account Number
//                     </label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.accountNumber}
//                       disabled={true}
//                       placeholder=""
//                     />
//                   </div>
//                 </div>

//                 {/* Summary Table */}
//                 <div
//                   className="summary-table"
//                   onClick={() => {
//                     if (!isLegalVerified) showVerificationPopup();
//                   }}
//                   style={{ cursor: !isLegalVerified ? "pointer" : "default" }}
//                 >
//                   <div className="summary-row">
//                     <span className="summary-label">Requested Amount</span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? parsedAmount.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row">
//                     <span className="summary-label">
//                       {platformFeePercent}% Legal Fee
//                     </span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? platformFee.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row net-row">
//                     <span className="summary-label net-label">Net amount</span>
//                     <span className="summary-value net-value">
//                       {parsedAmount > 0
//                         ? netAmount.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                 </div>

//                 {error && <div className="feedback-error">{error}</div>}
//                 {success && <div className="feedback-success">{success}</div>}

//                 <button
//                   className="submit-btn"
//                   onClick={handleSubmit}
//                   disabled={loading || !isLegalVerified}
//                 >
//                   {loading ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Message Modal Popup */}
//       <Modal
//         show={showMessageModal}
//         onHide={() => setShowMessageModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{modalTitle}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{modalMessage}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant="primary"
//             onClick={() => setShowMessageModal(false)}
//             style={{ backgroundColor: "#e9527a", border: "none" }}
//           >
//             OK
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Modal, Button } from "react-bootstrap";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const BANKS = [
//   "Bangkok Bank",
//   "Kasikorn Bank",
//   "Siam Commercial Bank",
//   "Krungthai Bank",
//   "Bank of Ayudhya",
//   "TMBThanachart Bank",
// ];

// export default function Withdrawal() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [credit, setCredit] = useState(0);
//   const [requestedAmount, setRequestedAmount] = useState("");

//   const [bankDetails, setBankDetails] = useState({
//     name: "",
//     bank: "",
//     accountNumber: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [platformFeePercent, setPlatformFeePercent] = useState(3);

//   const [legalStatus, setLegalStatus] = useState(null);
//   const [legalMessage, setLegalMessage] = useState("");
//   const [isLegalVerified, setIsLegalVerified] = useState(false);
//   const [legalLoading, setLegalLoading] = useState(true);

//   const [showMessageModal, setShowMessageModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [modalMessage, setModalMessage] = useState("");

//   useEffect(() => {
//     fetchCustomerLegalDetails();
//     fetchLegalVerificationStatus();
//   }, []);

//   const showMessage = (title, message) => {
//     setModalTitle(title);
//     setModalMessage(message);
//     setShowMessageModal(true);
//   };

//   const fetchCustomerLegalDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         const { legal_details, platform_fees_percentage, customer_credit } =
//           result.data;

//         setCredit(parseFloat(customer_credit) || 0);
//         if (platform_fees_percentage) {
//           setPlatformFeePercent(parseFloat(platform_fees_percentage));
//         }
//         if (legal_details) {
//           setBankDetails({
//             name: legal_details.legal_name || "",
//             bank: legal_details.bank_name || "Bangkok Bank",
//             accountNumber: legal_details.bank_account_no || "",
//           });
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching customer legal details:", err);
//       showMessage("Error", "Failed to load your bank and credit details.");
//     }
//   };

//   const fetchLegalVerificationStatus = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setLegalMessage("Please log in to check verification status.");
//         setLegalLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         setLegalStatus(result.data.status);
//         setLegalMessage(result.data.message);
//         setIsLegalVerified(result.data.is_legal_details_verified === true);
//       } else {
//         setLegalMessage(
//           result.message || "Unable to fetch verification status."
//         );
//         setIsLegalVerified(false);
//       }
//     } catch (err) {
//       console.error("Error fetching legal verification status:", err);
//       setLegalMessage("Network error. Please check your connection.");
//       setIsLegalVerified(false);
//     } finally {
//       setLegalLoading(false);
//     }
//   };

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const platformFee = parseFloat(
//     ((parsedAmount * platformFeePercent) / 100).toFixed(2)
//   );
//   const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isLegalVerified) {
//       showMessage(
//         "Verification Required",
//         "Your identity verification is not complete. Please complete verification before requesting a withdrawal."
//       );
//       return;
//     }

//     if (!requestedAmount || parsedAmount <= 0) {
//       showMessage("Invalid Amount", "Please enter a valid requested amount.");
//       return;
//     }
//     if (parsedAmount > credit) {
//       showMessage("Insufficient Credit", "Requested amount exceeds available credit.");
//       return;
//     }
//     if (!bankDetails.name.trim() || !bankDetails.accountNumber.trim()) {
//       showMessage("Missing Bank Details", "Bank details are missing. Please contact support.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         showMessage("Authentication Error", "Please login to continue.");
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/withdrawal",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             amount: String(parsedAmount),
//           }),
//         }
//       );

//       const result = await response.json();

//       if (result.success) {
//         showMessage(
//           "Success",
//           result.message || "Withdrawal request submitted successfully!"
//         );
//         setRequestedAmount("");
//         fetchCustomerLegalDetails();
//       } else {
//         showMessage(
//           "Withdrawal Failed",
//           result.message || "Withdrawal request failed. Please try again."
//         );
//       }
//     } catch (err) {
//       console.error("Withdrawal error:", err);
//       showMessage("Network Error", "Network error. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getLegalStatusClass = () => {
//     switch (legalStatus) {
//       case "APPROVED":
//         return "legal-banner success";
//       case "PENDING":
//         return "legal-banner warning";
//       case "REJECTED":
//         return "legal-banner error";
//       case "NOTSTARTED":
//       default:
//         return "legal-banner info";
//     }
//   };

//   const showVerificationPopup = () => {
//     if (!isLegalVerified && legalMessage) {
//       showMessage("Verification Status", legalMessage);
//     }
//   };

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={handleCloseSidebar}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">
//               {/* Notice Banner */}
//               <div className="notice-banner">
//                 <div className="d-flex gap-2">
//                   <span className="notice-icon">&#9432;</span>
//                   <p className="text-colors" style={{ fontSize: "13px" }}>
//                     All withdrawal requests placed between 6:00 PM and 10:00 AM
//                     (Thailand Time) will be processed after 10:00 AM.
//                   </p>
//                 </div>

//                 <div>
//                   {!legalLoading && legalMessage && (
//                     <div className={`${getLegalStatusClass()} d-flex gap-2`}>
//                       {/* <span className="notice-icon iconss-border text-colors">
//                         {legalStatus === "APPROVED" ? "✓" : "ⓘ"}
//                       </span> */}

//                         <span className="notice-icon text-colors">
//   <i
//     className={
//       legalStatus === "APPROVED"
//         ? "bi bi-check-circle-fill"
//         : "bi bi-info-circle"
//     }
//   ></i>
// </span>

//                       <p className="notice-text">{legalMessage}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Credit Badge */}
//               <div className="credit-badge">
//                 Credit{" "}
//                 {credit.toLocaleString("en-US", {
//                   minimumFractionDigits: 2,
//                   maximumFractionDigits: 2,
//                 })}{" "}
//                 ฿
//               </div>

//               {/* Form wrapper */}
//               <div style={{ position: "relative" }}>
//                 {/* Requested Amount */}
//                 <div className="form-field mt-0">
//                   <label className="field-label">Requested Amount*</label>
//                   <input
//                     type="text"
//                     className="field-input text-white mt-0"
//                     value={requestedAmount}
//                     placeholder="Enter amount"
//                     onChange={(e) => {
//                       const value = e.target.value;
//                       if (/^\d*\.?\d*$/.test(value)) {
//                         setRequestedAmount(value);
//                       }
//                     }}
//                     onBlur={() => {
//                       if (requestedAmount) {
//                         setRequestedAmount(parseFloat(requestedAmount).toFixed(2));
//                       }
//                     }}
//                     inputMode="decimal"
//                     disabled={!isLegalVerified}
//                     onClick={() => {
//                       if (!isLegalVerified) showVerificationPopup();
//                     }}
//                   />
//                   <span className="field-hint">
//                     *A standard {platformFeePercent}% Legal fee will be applied
//                     to the total amount during Withdrawal.
//                   </span>
//                 </div>

//                 {/* Bank Details Section with permanent blur overlay */}
//                 <div
//                   style={{
//                     position: "relative",
//                     minHeight: "200px",
//                     background: "#f9ced921",
//                     backdropFilter: "blur(1px)",
//                     WebkitBackdropFilter: "blur(12px)",
//                     borderRadius: "10px",
//                     padding: "15px",
//                   }}
//                 >
//                   {!isLegalVerified && (
//                     <div
//                       onClick={showVerificationPopup}
//                       style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                      inset:" 500px",
//     backgroundcolor: "rgba(255, 255, 255, -19.5)",
//     backdropfilter: "blur(1px)",
//                         WebkitBackdropFilter: "blur(3px)",
//                         zIndex: 9999,
//                         borderRadius: "8px",
//                         cursor: "pointer",
//                       }}
//                     />
//                   )}

//                   <div className="section-title">Your Bank Details <span style={{fontSize:'12px'}}>(non editable this data)</span></div>

//                   <div className="form-field">
//                     <label className="field-label">Enter Name*</label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.name}
//                       disabled={true}
//                       placeholder="As per ID"
//                     />
//                     <span className="field-hint">
//                       *Auto-filled from your legal details
//                     </span>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">Choose Your Bank</label>
//                     <div className="select-wrapper w-100">
//                       <select
//                         className="field-select field-selectsss w-100 text-white"
//                         value={bankDetails.bank}
//                         disabled={true}
//                       >
//                         {BANKS.map((b) => (
//                           <option key={b} value={b}>
//                             {b}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">
//                       Enter Your Bank Account Number
//                     </label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.accountNumber}
//                       disabled={true}
//                       placeholder=""
//                     />
//                   </div>
//                 </div>

//                 {/* Summary Table */}
//                 <div
//                   className="summary-table"
//                   onClick={() => {
//                     if (!isLegalVerified) showVerificationPopup();
//                   }}
//                   style={{ cursor: !isLegalVerified ? "pointer" : "default" }}
//                 >
//                   <div className="summary-row">
//                     <span className="summary-label">Requested Amount</span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? parsedAmount.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row">
//                     <span className="summary-label">
//                       {platformFeePercent}% Legal Fee
//                     </span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? platformFee.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row net-row">
//                     <span className="summary-label net-label">Net amount</span>
//                     <span className="summary-value net-value">
//                       {parsedAmount > 0
//                         ? netAmount.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Error and success messages are now handled via modal popup */}
//                 {/* No inline error/success divs */}

//                 <button
//                   className="submit-btn"
//                   onClick={handleSubmit}
//                   disabled={loading || !isLegalVerified}
//                 >
//                   {loading ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Message Modal Popup (used for errors, success, and info) */}
//       <Modal
//         show={showMessageModal}
//         onHide={() => setShowMessageModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{modalTitle}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{modalMessage}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant="primary"
//             onClick={() => setShowMessageModal(false)}
//             style={{ backgroundColor: "#e9527a", border: "none" }}
//           >
//             OK
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Modal, Button } from "react-bootstrap";
// import { useTranslation } from "react-i18next";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const BANKS = [
//   "Bangkok Bank",
//   "Kasikorn Bank",
//   "Siam Commercial Bank",
//   "Krungthai Bank",
//   "Bank of Ayudhya",
//   "TMBThanachart Bank",
// ];

// export default function Withdrawal() {
//   const { t } = useTranslation();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [credit, setCredit] = useState(0);
//   const [requestedAmount, setRequestedAmount] = useState("");

//   const [bankDetails, setBankDetails] = useState({
//     name: "",
//     bank: "",
//     accountNumber: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [platformFeePercent, setPlatformFeePercent] = useState(3);

//   const [legalStatus, setLegalStatus] = useState(null);
//   const [legalMessage, setLegalMessage] = useState("");
//   const [isLegalVerified, setIsLegalVerified] = useState(false);
//   const [legalLoading, setLegalLoading] = useState(true);

//   const [showMessageModal, setShowMessageModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [modalMessage, setModalMessage] = useState("");

//   useEffect(() => {
//     fetchCustomerLegalDetails();
//     fetchLegalVerificationStatus();
//   }, []);

//   const showMessage = (title, message) => {
//     setModalTitle(title);
//     setModalMessage(message);
//     setShowMessageModal(true);
//   };

//   const fetchCustomerLegalDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         const { legal_details, platform_fees_percentage, customer_credit } =
//           result.data;

//         setCredit(parseFloat(customer_credit) || 0);
//         if (platform_fees_percentage) {
//           setPlatformFeePercent(parseFloat(platform_fees_percentage));
//         }
//         if (legal_details) {
//           setBankDetails({
//             name: legal_details.legal_name || "",
//             bank: legal_details.bank_name || "Bangkok Bank",
//             accountNumber: legal_details.bank_account_no || "",
//           });
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching customer legal details:", err);
//       showMessage(t("withdrawal.errorLoadDetails"), t("withdrawal.errorLoadDetails"));
//     }
//   };

//   const fetchLegalVerificationStatus = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setLegalMessage(t("withdrawal.authErrorMessage"));
//         setLegalLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         setLegalStatus(result.data.status);
//         setLegalMessage(result.data.message);
//         setIsLegalVerified(result.data.is_legal_details_verified === true);
//       } else {
//         setLegalMessage(
//           result.message || t("withdrawal.errorNetwork")
//         );
//         setIsLegalVerified(false);
//       }
//     } catch (err) {
//       console.error("Error fetching legal verification status:", err);
//       setLegalMessage(t("withdrawal.errorNetwork"));
//       setIsLegalVerified(false);
//     } finally {
//       setLegalLoading(false);
//     }
//   };

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const platformFee = parseFloat(
//     ((parsedAmount * platformFeePercent) / 100).toFixed(2)
//   );
//   const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isLegalVerified) {
//       showMessage(
//         t("withdrawal.verificationRequired"),
//         t("withdrawal.verificationMessage")
//       );
//       return;
//     }

//     if (!requestedAmount || parsedAmount <= 0) {
//       showMessage(t("withdrawal.invalidAmount"), t("withdrawal.invalidAmountMessage"));
//       return;
//     }
//     if (parsedAmount > credit) {
//       showMessage(t("withdrawal.insufficientCredit"), t("withdrawal.insufficientCreditMessage"));
//       return;
//     }
//     if (!bankDetails.name.trim() || !bankDetails.accountNumber.trim()) {
//       showMessage(t("withdrawal.missingBankDetails"), t("withdrawal.missingBankDetailsMessage"));
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         showMessage(t("withdrawal.authError"), t("withdrawal.authErrorMessage"));
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/withdrawal",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             amount: String(parsedAmount),
//           }),
//         }
//       );

//       const result = await response.json();

//       if (result.success) {
//         showMessage(
//           t("withdrawal.withdrawalSuccess"),
//           result.message || t("withdrawal.withdrawalSuccessMessage")
//         );
//         setRequestedAmount("");
//         fetchCustomerLegalDetails();
//       } else {
//         showMessage(
//           t("withdrawal.withdrawalFailed"),
//           result.message || t("withdrawal.withdrawalFailedMessage")
//         );
//       }
//     } catch (err) {
//       console.error("Withdrawal error:", err);
//       showMessage(t("withdrawal.networkErrorTitle"), t("withdrawal.networkErrorMessage"));
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getLegalStatusClass = () => {
//     switch (legalStatus) {
//       case "APPROVED":
//         return "legal-banner success";
//       case "PENDING":
//         return "legal-banner warning";
//       case "REJECTED":
//         return "legal-banner error";
//       case "NOTSTARTED":
//       default:
//         return "legal-banner info";
//     }
//   };

//   const showVerificationPopup = () => {
//     if (!isLegalVerified && legalMessage) {
//       showMessage(t("withdrawal.verificationStatusTitle"), legalMessage);
//     }
//   };

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={handleCloseSidebar}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">
//               {/* Notice Banner */}
//               <div className="notice-banner">
//                 <div className="d-flex gap-2">
//                   <span className="notice-icon">&#9432;</span>
//                   <p className="text-colors" style={{ fontSize: "13px" }}>
//                     {t("withdrawal.noticeMessage")}
//                   </p>
//                 </div>

//                 <div>
//                   {!legalLoading && legalMessage && (
//                     <div className={`${getLegalStatusClass()} d-flex gap-2`}>
//                       <span className="notice-icon text-colors">
//                         <i
//                           className={
//                             legalStatus === "APPROVED"
//                               ? "bi bi-check-circle-fill"
//                               : "bi bi-info-circle"
//                           }
//                         ></i>
//                       </span>
//                       <p className="notice-text">{legalMessage}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Credit Badge */}
//               <div className="credit-badge">
//                 {t("withdrawal.credit")}{" "}
//                 {credit.toLocaleString("en-US", {
//                   minimumFractionDigits: 2,
//                   maximumFractionDigits: 2,
//                 })}{" "}
//                 ฿
//               </div>

//               {/* Form wrapper */}
//               <div style={{ position: "relative" }}>
//                 {/* Requested Amount */}
//                 <div className="form-field mt-0">
//                   <label className="field-label">{t("withdrawal.requestedAmount")}</label>
//                   <input
//                     type="text"
//                     className="field-input text-white mt-0"
//                     value={requestedAmount}
//                     placeholder={t("withdrawal.amountPlaceholder")}
//                     onChange={(e) => {
//                       const value = e.target.value;
//                       if (/^\d*\.?\d*$/.test(value)) {
//                         setRequestedAmount(value);
//                       }
//                     }}
//                     onBlur={() => {
//                       if (requestedAmount) {
//                         setRequestedAmount(parseFloat(requestedAmount).toFixed(2));
//                       }
//                     }}
//                     inputMode="decimal"
//                     disabled={!isLegalVerified}
//                     onClick={() => {
//                       if (!isLegalVerified) showVerificationPopup();
//                     }}
//                   />
//                   <span className="field-hint">
//                     {t("withdrawal.feeHint", { fee: platformFeePercent })}
//                   </span>
//                 </div>

//                 {/* Bank Details Section with permanent blur overlay */}
//                 <div
//                   style={{
//                     position: "relative",
//                     minHeight: "200px",
//                     background: "#f9ced921",
//                     backdropFilter: "blur(1px)",
//                     WebkitBackdropFilter: "blur(12px)",
//                     borderRadius: "10px",
//                     padding: "15px",
//                   }}
//                 >
//                   {!isLegalVerified && (
//                     <div
//                       onClick={showVerificationPopup}
//                       style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         inset:" 500px",
//                         backgroundcolor: "rgba(255, 255, 255, -19.5)",
//                         backdropfilter: "blur(1px)",
//                         WebkitBackdropFilter: "blur(3px)",
//                         zIndex: 9999,
//                         borderRadius: "8px",
//                         cursor: "pointer",
//                       }}
//                     />
//                   )}

//                   <div className="section-title">
//                     {t("withdrawal.bankDetailsTitle")}{" "}
//                     <span style={{ fontSize: '12px' }}>{t("withdrawal.nonEditableNote")}</span>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">{t("withdrawal.enterName")}</label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.name}
//                       disabled={true}
//                       placeholder={t("withdrawal.namePlaceholder")}
//                     />
//                     <span className="field-hint">{t("withdrawal.nameHint")}</span>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">{t("withdrawal.chooseBank")}</label>
//                     <div className="select-wrapper w-100">
//                       <select
//                         className="field-select field-selectsss w-100 text-white"
//                         value={bankDetails.bank}
//                         disabled={true}
//                       >
//                         {BANKS.map((b) => (
//                           <option key={b} value={b}>
//                             {b}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">
//                       {t("withdrawal.bankAccountNumber")}
//                     </label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.accountNumber}
//                       disabled={true}
//                       placeholder=""
//                     />
//                   </div>
//                 </div>

//                 {/* Summary Table */}
//                 <div
//                   className="summary-table"
//                   onClick={() => {
//                     if (!isLegalVerified) showVerificationPopup();
//                   }}
//                   style={{ cursor: !isLegalVerified ? "pointer" : "default" }}
//                 >
//                   <div className="summary-row">
//                     <span className="summary-label">{t("withdrawal.requestedAmountLabel")}</span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? parsedAmount.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row">
//                     <span className="summary-label">
//                       {t("withdrawal.legalFeeLabel", { fee: platformFeePercent })}
//                     </span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? platformFee.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row net-row">
//                     <span className="summary-label net-label">{t("withdrawal.netAmountLabel")}</span>
//                     <span className="summary-value net-value">
//                       {parsedAmount > 0
//                         ? netAmount.toLocaleString("en-US", {
//                             minimumFractionDigits: 2,
//                             maximumFractionDigits: 2,
//                           })
//                         : "—"}
//                     </span>
//                   </div>
//                 </div>

//                 <button
//                   className="submit-btn"
//                   onClick={handleSubmit}
//                   disabled={loading || !isLegalVerified}
//                 >
//                   {loading ? t("withdrawal.submitting") : t("withdrawal.submit")}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Message Modal Popup */}
//       <Modal
//         show={showMessageModal}
//         onHide={() => setShowMessageModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{modalTitle}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{modalMessage}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant="primary"
//             onClick={() => setShowMessageModal(false)}
//             style={{ backgroundColor: "#e9527a", border: "none" }}
//           >
//             {t("withdrawal.ok")}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Modal, Button } from "react-bootstrap";
// import { useTranslation } from "react-i18next";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const BANKS = [
//   "Bangkok Bank",
//   "Kasikorn Bank",
//   "Siam Commercial Bank",
//   "Krungthai Bank",
//   "Bank of Ayudhya",
//   "TMBThanachart Bank",
// ];

// // Helper: format number with locale
// const formatNumber = (value, locale) => {
//   if (value === null || value === undefined || isNaN(value)) return "—";
//   return value.toLocaleString(locale === "th" ? "th-TH" : "en-US", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });
// };

// export default function Withdrawal() {
//   const { t, i18n } = useTranslation();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [credit, setCredit] = useState(0);
//   const [requestedAmount, setRequestedAmount] = useState("");

//   const [bankDetails, setBankDetails] = useState({
//     name: "",
//     bank: "",
//     accountNumber: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [platformFeePercent, setPlatformFeePercent] = useState(3);

//   const [legalStatus, setLegalStatus] = useState(null);
//   const [legalMessage, setLegalMessage] = useState("");
//   const [isLegalVerified, setIsLegalVerified] = useState(false);
//   const [legalLoading, setLegalLoading] = useState(true);

//   const [showMessageModal, setShowMessageModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [modalMessage, setModalMessage] = useState("");

//   useEffect(() => {
//     fetchCustomerLegalDetails();
//     fetchLegalVerificationStatus();
//   }, []);

//   const showMessage = (title, message) => {
//     setModalTitle(title);
//     setModalMessage(message);
//     setShowMessageModal(true);
//   };

//   const fetchCustomerLegalDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         const { legal_details, platform_fees_percentage, customer_credit } =
//           result.data;

//         setCredit(parseFloat(customer_credit) || 0);
//         if (platform_fees_percentage) {
//           setPlatformFeePercent(parseFloat(platform_fees_percentage));
//         }
//         if (legal_details) {
//           setBankDetails({
//             name: legal_details.legal_name || "",
//             bank: legal_details.bank_name || "Bangkok Bank",
//             accountNumber: legal_details.bank_account_no || "",
//           });
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching customer legal details:", err);
//       showMessage(t("withdrawal.errorLoadDetails"), t("withdrawal.errorLoadDetails"));
//     }
//   };

//   const fetchLegalVerificationStatus = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setLegalMessage(t("withdrawal.authErrorMessage"));
//         setLegalLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         setLegalStatus(result.data.status);
//         setLegalMessage(result.data.message);
//         setIsLegalVerified(result.data.is_legal_details_verified === true);
//       } else {
//         setLegalMessage(
//           result.message || t("withdrawal.errorNetwork")
//         );
//         setIsLegalVerified(false);
//       }
//     } catch (err) {
//       console.error("Error fetching legal verification status:", err);
//       setLegalMessage(t("withdrawal.errorNetwork"));
//       setIsLegalVerified(false);
//     } finally {
//       setLegalLoading(false);
//     }
//   };

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const platformFee = parseFloat(
//     ((parsedAmount * platformFeePercent) / 100).toFixed(2)
//   );
//   const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isLegalVerified) {
//       showMessage(
//         t("withdrawal.verificationRequired"),
//         t("withdrawal.verificationMessage")
//       );
//       return;
//     }

//     if (!requestedAmount || parsedAmount <= 0) {
//       showMessage(t("withdrawal.invalidAmount"), t("withdrawal.invalidAmountMessage"));
//       return;
//     }
//     if (parsedAmount > credit) {
//       showMessage(t("withdrawal.insufficientCredit"), t("withdrawal.insufficientCreditMessage"));
//       return;
//     }
//     if (!bankDetails.name.trim() || !bankDetails.accountNumber.trim()) {
//       showMessage(t("withdrawal.missingBankDetails"), t("withdrawal.missingBankDetailsMessage"));
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         showMessage(t("withdrawal.authError"), t("withdrawal.authErrorMessage"));
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/withdrawal",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             amount: String(parsedAmount),
//           }),
//         }
//       );

//       const result = await response.json();

//       if (result.success) {
//         showMessage(
//           t("withdrawal.withdrawalSuccess"),
//           result.message || t("withdrawal.withdrawalSuccessMessage")
//         );
//         setRequestedAmount("");
//         fetchCustomerLegalDetails();
//       } else {
//         showMessage(
//           t("withdrawal.withdrawalFailed"),
//           result.message || t("withdrawal.withdrawalFailedMessage")
//         );
//       }
//     } catch (err) {
//       console.error("Withdrawal error:", err);
//       showMessage(t("withdrawal.networkErrorTitle"), t("withdrawal.networkErrorMessage"));
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getLegalStatusClass = () => {
//     switch (legalStatus) {
//       case "APPROVED":
//         return "legal-banner success";
//       case "PENDING":
//         return "legal-banner warning";
//       case "REJECTED":
//         return "legal-banner error";
//       case "NOTSTARTED":
//       default:
//         return "legal-banner info";
//     }
//   };

//   const showVerificationPopup = () => {
//     if (!isLegalVerified && legalMessage) {
//       showMessage(t("withdrawal.verificationStatusTitle"), legalMessage);
//     }
//   };

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={handleCloseSidebar}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">
//               {/* Notice Banner */}
//               <div className="notice-banner">
//                 <div className="d-flex gap-2">
//                   <span className="notice-icon">&#9432;</span>
//                   <p className="text-colors" style={{ fontSize: "13px" }}>
//                     {t("withdrawal.noticeMessage")}
//                   </p>
//                 </div>

//                 <div>
//                   {!legalLoading && legalMessage && (
//                     <div className={`${getLegalStatusClass()} d-flex gap-2`}>
//                       <span className="notice-icon text-colors">
//                         <i
//                           className={
//                             legalStatus === "APPROVED"
//                               ? "bi bi-check-circle-fill"
//                               : "bi bi-info-circle"
//                           }
//                         ></i>
//                       </span>
//                       <p className="notice-text">{legalMessage}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Credit Badge – now using translated currency and localised number */}
//               <div className="credit-badge">
//                 {t("withdrawal.credit")}{" "}
//                 {formatNumber(credit, i18n.language)}{" "}
//                 {t("thb")}
//               </div>

//               {/* Form wrapper */}
//               <div style={{ position: "relative" }}>
//                 {/* Requested Amount */}
//                 <div className="form-field mt-0">
//                   <label className="field-label">{t("withdrawal.requestedAmount")}</label>
//                   <input
//                     type="text"
//                     className="field-input text-white mt-0"
//                     value={requestedAmount}
//                     placeholder={t("withdrawal.amountPlaceholder")}
//                     onChange={(e) => {
//                       const value = e.target.value;
//                       if (/^\d*\.?\d*$/.test(value)) {
//                         setRequestedAmount(value);
//                       }
//                     }}
//                     onBlur={() => {
//                       if (requestedAmount) {
//                         setRequestedAmount(parseFloat(requestedAmount).toFixed(2));
//                       }
//                     }}
//                     inputMode="decimal"
//                     disabled={!isLegalVerified}
//                     onClick={() => {
//                       if (!isLegalVerified) showVerificationPopup();
//                     }}
//                   />
//                   <span className="field-hint">
//                     {t("withdrawal.feeHint", { fee: platformFeePercent })}
//                   </span>
//                 </div>

//                 {/* Bank Details Section with permanent blur overlay */}
//                 <div
//                   style={{
//                     position: "relative",
//                     minHeight: "200px",
//                     background: "#f9ced921",
//                     backdropFilter: "blur(1px)",
//                     WebkitBackdropFilter: "blur(12px)",
//                     borderRadius: "10px",
//                     padding: "15px",
//                   }}
//                 >
//                   {!isLegalVerified && (
//                     <div
//                       onClick={showVerificationPopup}
//                       style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         inset:" 500px",
//                         backgroundcolor: "rgba(255, 255, 255, -19.5)",
//                         backdropfilter: "blur(1px)",
//                         WebkitBackdropFilter: "blur(3px)",
//                         zIndex: 9999,
//                         borderRadius: "8px",
//                         cursor: "pointer",
//                       }}
//                     />
//                   )}

//                   <div className="section-title">
//                     {t("withdrawal.bankDetailsTitle")}{" "}
//                     <span style={{ fontSize: '12px' }}>{t("withdrawal.nonEditableNote")}</span>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">{t("withdrawal.enterName")}</label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.name}
//                       disabled={true}
//                       placeholder={t("withdrawal.namePlaceholder")}
//                     />
//                     <span className="field-hint">{t("withdrawal.nameHint")}</span>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">{t("withdrawal.chooseBank")}</label>
//                     <div className="select-wrapper w-100">
//                       <select
//                         className="field-select field-selectsss w-100 text-white"
//                         value={bankDetails.bank}
//                         disabled={true}
//                       >
//                         {BANKS.map((b) => (
//                           <option key={b} value={b}>
//                             {b}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">
//                       {t("withdrawal.bankAccountNumber")}
//                     </label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.accountNumber}
//                       disabled={true}
//                       placeholder=""
//                     />
//                   </div>
//                 </div>

//                 {/* Summary Table – numbers now localised */}
//                 <div
//                   className="summary-table"
//                   onClick={() => {
//                     if (!isLegalVerified) showVerificationPopup();
//                   }}
//                   style={{ cursor: !isLegalVerified ? "pointer" : "default" }}
//                 >
//                   <div className="summary-row">
//                     <span className="summary-label">{t("withdrawal.requestedAmountLabel")}</span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(parsedAmount, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row">
//                     <span className="summary-label">
//                       {t("withdrawal.legalFeeLabel", { fee: platformFeePercent })}
//                     </span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(platformFee, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row net-row">
//                     <span className="summary-label net-label">{t("withdrawal.netAmountLabel")}</span>
//                     <span className="summary-value net-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(netAmount, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                 </div>

//                 <button
//                   className="submit-btn"
//                   onClick={handleSubmit}
//                   disabled={loading || !isLegalVerified}
//                 >
//                   {loading ? t("withdrawal.submitting") : t("withdrawal.submit")}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Message Modal Popup */}
//       <Modal
//         show={showMessageModal}
//         onHide={() => setShowMessageModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{modalTitle}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{modalMessage}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant="primary"
//             onClick={() => setShowMessageModal(false)}
//             style={{ backgroundColor: "#e9527a", border: "none" }}
//           >
//             {t("withdrawal.ok")}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// import React, { useState, useEffect, useMemo } from "react";
// import { Menu, X } from "lucide-react";
// import { Modal, Button } from "react-bootstrap";
// import { useTranslation } from "react-i18next";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const BANKS = [
//   "Bangkok Bank",
//   "Kasikorn Bank",
//   "Siam Commercial Bank",
//   "Krungthai Bank",
//   "Bank of Ayudhya",
//   "TMBThanachart Bank",
// ];

// // Helper: format number with locale
// const formatNumber = (value, locale) => {
//   if (value === null || value === undefined || isNaN(value)) return "—";
//   return value.toLocaleString(locale === "th" ? "th-TH" : "en-US", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });
// };

// export default function Withdrawal() {
//   const { t, i18n } = useTranslation();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [credit, setCredit] = useState(0);
//   const [requestedAmount, setRequestedAmount] = useState("");

//   const [bankDetails, setBankDetails] = useState({
//     name: "",
//     bank: "",
//     accountNumber: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [platformFeePercent, setPlatformFeePercent] = useState(3);

//   const [legalStatus, setLegalStatus] = useState(null);
//   const [legalMessage, setLegalMessage] = useState("");
//   const [isLegalVerified, setIsLegalVerified] = useState(false);
//   const [legalLoading, setLegalLoading] = useState(true);

//   const [showMessageModal, setShowMessageModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [modalMessage, setModalMessage] = useState("");

//   // Create translated bank list (dynamic based on language)
//   const bankList = useMemo(() => {
//     return BANKS.map(bank => ({
//       value: bank,
//       label: t(`bankNames.${bank}`, { defaultValue: bank })
//     }));
//   }, [t]);

//   useEffect(() => {
//     fetchCustomerLegalDetails();
//     fetchLegalVerificationStatus();
//   }, []);

//   const showMessage = (title, message) => {
//     setModalTitle(title);
//     setModalMessage(message);
//     setShowMessageModal(true);
//   };

//   const fetchCustomerLegalDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         const { legal_details, platform_fees_percentage, customer_credit } =
//           result.data;

//         setCredit(parseFloat(customer_credit) || 0);
//         if (platform_fees_percentage) {
//           setPlatformFeePercent(parseFloat(platform_fees_percentage));
//         }
//         if (legal_details) {
//           setBankDetails({
//             name: legal_details.legal_name || "",
//             bank: legal_details.bank_name || "Bangkok Bank",
//             accountNumber: legal_details.bank_account_no || "",
//           });
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching customer legal details:", err);
//       showMessage(t("withdrawal.errorLoadDetails"), t("withdrawal.errorLoadDetails"));
//     }
//   };

//   const fetchLegalVerificationStatus = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setLegalMessage(t("withdrawal.authErrorMessage"));
//         setLegalLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         setLegalStatus(result.data.status);
//         setLegalMessage(result.data.message);
//         setIsLegalVerified(result.data.is_legal_details_verified === true);
//       } else {
//         setLegalMessage(
//           result.message || t("withdrawal.errorNetwork")
//         );
//         setIsLegalVerified(false);
//       }
//     } catch (err) {
//       console.error("Error fetching legal verification status:", err);
//       setLegalMessage(t("withdrawal.errorNetwork"));
//       setIsLegalVerified(false);
//     } finally {
//       setLegalLoading(false);
//     }
//   };

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const platformFee = parseFloat(
//     ((parsedAmount * platformFeePercent) / 100).toFixed(2)
//   );
//   const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isLegalVerified) {
//       showMessage(
//         t("withdrawal.verificationRequired"),
//         t("withdrawal.verificationMessage")
//       );
//       return;
//     }

//     if (!requestedAmount || parsedAmount <= 0) {
//       showMessage(t("withdrawal.invalidAmount"), t("withdrawal.invalidAmountMessage"));
//       return;
//     }
//     if (parsedAmount > credit) {
//       showMessage(t("withdrawal.insufficientCredit"), t("withdrawal.insufficientCreditMessage"));
//       return;
//     }
//     if (!bankDetails.name.trim() || !bankDetails.accountNumber.trim()) {
//       showMessage(t("withdrawal.missingBankDetails"), t("withdrawal.missingBankDetailsMessage"));
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         showMessage(t("withdrawal.authError"), t("withdrawal.authErrorMessage"));
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/withdrawal",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             amount: String(parsedAmount),
//           }),
//         }
//       );

//       const result = await response.json();

//       if (result.success) {
//         showMessage(
//           t("withdrawal.withdrawalSuccess"),
//           result.message || t("withdrawal.withdrawalSuccessMessage")
//         );
//         setRequestedAmount("");
//         fetchCustomerLegalDetails();
//       } else {
//         showMessage(
//           t("withdrawal.withdrawalFailed"),
//           result.message || t("withdrawal.withdrawalFailedMessage")
//         );
//       }
//     } catch (err) {
//       console.error("Withdrawal error:", err);
//       showMessage(t("withdrawal.networkErrorTitle"), t("withdrawal.networkErrorMessage"));
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getLegalStatusClass = () => {
//     switch (legalStatus) {
//       case "APPROVED":
//         return "legal-banner success";
//       case "PENDING":
//         return "legal-banner warning";
//       case "REJECTED":
//         return "legal-banner error";
//       case "NOTSTARTED":
//       default:
//         return "legal-banner info";
//     }
//   };

//   const showVerificationPopup = () => {
//     if (!isLegalVerified && legalMessage) {
//       showMessage(t("withdrawal.verificationStatusTitle"), legalMessage);
//     }
//   };

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={handleCloseSidebar}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">
//               {/* Notice Banner */}
//               <div className="notice-banner">
//                 <div className="d-flex gap-2">
//                   <span className="notice-icon">&#9432;</span>
//                   <p className="text-colors" style={{ fontSize: "13px" }}>
//                     {t("withdrawal.noticeMessage")}
//                   </p>
//                 </div>

//                 <div>
//                   {!legalLoading && legalMessage && (
//                     <div className={`${getLegalStatusClass()} d-flex gap-2`}>
//                       <span className="notice-icon text-colors">
//                         <i
//                           className={
//                             legalStatus === "APPROVED"
//                               ? "bi bi-check-circle-fill"
//                               : "bi bi-info-circle"
//                           }
//                         ></i>
//                       </span>
//                       <p className="notice-text">{legalMessage}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Credit Badge */}
//               <div className="credit-badge">
//                 {t("withdrawal.credit")}{" "}
//                 {formatNumber(credit, i18n.language)}{" "}
//                 {t("thb")}
//               </div>

//               {/* Form wrapper */}
//               <div style={{ position: "relative" }}>
//                 {/* Requested Amount */}
//                 <div className="form-field mt-0">
//                   <label className="field-label">{t("withdrawal.requestedAmount")}</label>
//                   <input
//                     type="text"
//                     className="field-input text-white mt-0"
//                     value={requestedAmount}
//                     placeholder={t("withdrawal.amountPlaceholder")}
//                     onChange={(e) => {
//                       const value = e.target.value;
//                       if (/^\d*\.?\d*$/.test(value)) {
//                         setRequestedAmount(value);
//                       }
//                     }}
//                     onBlur={() => {
//                       if (requestedAmount) {
//                         setRequestedAmount(parseFloat(requestedAmount).toFixed(2));
//                       }
//                     }}
//                     inputMode="decimal"
//                     disabled={!isLegalVerified}
//                     onClick={() => {
//                       if (!isLegalVerified) showVerificationPopup();
//                     }}
//                   />
//                   <span className="field-hint">
//                     {t("withdrawal.feeHint", { fee: platformFeePercent })}
//                   </span>
//                 </div>

//                 {/* Bank Details Section with permanent blur overlay */}
//                 <div
//                   style={{
//                     position: "relative",
//                     minHeight: "200px",
//                     background: "#f9ced921",
//                     backdropFilter: "blur(1px)",
//                     WebkitBackdropFilter: "blur(12px)",
//                     borderRadius: "10px",
//                     padding: "15px",
//                   }}
//                 >
//                   {!isLegalVerified && (
//                     <div
//                       onClick={showVerificationPopup}
//                       style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         inset:" 500px",
//                         backgroundcolor: "rgba(255, 255, 255, -19.5)",
//                         backdropfilter: "blur(1px)",
//                         WebkitBackdropFilter: "blur(3px)",
//                         zIndex: 9999,
//                         borderRadius: "8px",
//                         cursor: "pointer",
//                       }}
//                     />
//                   )}

//                   <div className="section-title">
//                     {t("withdrawal.bankDetailsTitle")}{" "}
//                     <span style={{ fontSize: '12px' }}>{t("withdrawal.nonEditableNote")}</span>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">{t("withdrawal.enterName")}</label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.name}
//                       disabled={true}
//                       placeholder={t("withdrawal.namePlaceholder")}
//                     />
//                     <span className="field-hint">{t("withdrawal.nameHint")}</span>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">{t("withdrawal.chooseBank")}</label>
//                     <div className="select-wrapper w-100">
//                       <select
//                         className="field-select field-selectsss w-100 text-white"
//                         value={bankDetails.bank}
//                         disabled={true}
//                       >
//                         {bankList.map((bank) => (
//                           <option key={bank.value} value={bank.value}>
//                             {bank.label}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">
//                       {t("withdrawal.bankAccountNumber")}
//                     </label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.accountNumber}
//                       disabled={true}
//                       placeholder=""
//                     />
//                   </div>
//                 </div>

//                 {/* Summary Table */}
//                 <div
//                   className="summary-table"
//                   onClick={() => {
//                     if (!isLegalVerified) showVerificationPopup();
//                   }}
//                   style={{ cursor: !isLegalVerified ? "pointer" : "default" }}
//                 >
//                   <div className="summary-row">
//                     <span className="summary-label">{t("withdrawal.requestedAmountLabel")}</span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(parsedAmount, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row">
//                     <span className="summary-label">
//                       {t("withdrawal.legalFeeLabel", { fee: platformFeePercent })}
//                     </span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(platformFee, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row net-row">
//                     <span className="summary-label net-label">{t("withdrawal.netAmountLabel")}</span>
//                     <span className="summary-value net-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(netAmount, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                 </div>

//                 <button
//                   className="submit-btn"
//                   onClick={handleSubmit}
//                   disabled={loading || !isLegalVerified}
//                 >
//                   {loading ? t("withdrawal.submitting") : t("withdrawal.submit")}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Message Modal Popup */}
//       <Modal
//         show={showMessageModal}
//         onHide={() => setShowMessageModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{modalTitle}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{modalMessage}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant="primary"
//             onClick={() => setShowMessageModal(false)}
//             style={{ backgroundColor: "#e9527a", border: "none" }}
//           >
//             {t("withdrawal.ok")}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// import React, { useState, useEffect, useMemo } from "react";
// import { Menu, X } from "lucide-react";
// import { Modal, Button } from "react-bootstrap";
// import { useTranslation } from "react-i18next";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const BANKS = [
//   "Bangkok Bank",
//   "Kasikorn Bank",
//   "Siam Commercial Bank",
//   "Krungthai Bank",
//   "Bank of Ayudhya",
//   "TMBThanachart Bank",
// ];

// // Helper: format number with locale
// const formatNumber = (value, locale) => {
//   if (value === null || value === undefined || isNaN(value)) return "—";
//   return value.toLocaleString(locale === "th" ? "th-TH" : "en-US", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });
// };

// export default function Withdrawal() {
//   const { t, i18n } = useTranslation();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [credit, setCredit] = useState(0);
//   const [requestedAmount, setRequestedAmount] = useState("");

//   const [bankDetails, setBankDetails] = useState({
//     name: "",
//     bank: "",
//     accountNumber: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [platformFeePercent, setPlatformFeePercent] = useState(3);

//   const [legalStatus, setLegalStatus] = useState(null);
//   const [legalMessageOriginal, setLegalMessageOriginal] = useState("");
//   const [legalMessage, setLegalMessage] = useState("");
//   const [isLegalVerified, setIsLegalVerified] = useState(false);
//   const [legalLoading, setLegalLoading] = useState(true);

//   const [showMessageModal, setShowMessageModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [modalMessage, setModalMessage] = useState("");

//   // Translated bank list
//   const bankList = useMemo(() => {
//     return BANKS.map(bank => ({
//       value: bank,
//       label: t(`bankNames.${bank}`, { defaultValue: bank })
//     }));
//   }, [t]);

//   // Helper to translate legal messages from API
//   const translateLegalMessage = (message, status) => {
//     if (i18n.language !== 'th') return message;

//     const translations = {
//       "Your identity verification is complete.": "การยืนยันตัวตนของคุณเสร็จสมบูรณ์แล้ว",
//       "Your identity verification is pending.": "การยืนยันตัวตนของคุณอยู่ระหว่างดำเนินการ",
//       "Your identity verification has been rejected.": "การยืนยันตัวตนของคุณถูกปฏิเสธ",
//       "Please complete your legal details.": "กรุณากรอกรายละเอียดทางกฎหมายของคุณ",
//       "Your legal details are under review.": "รายละเอียดทางกฎหมายของคุณอยู่ระหว่างการตรวจสอบ",
//       "Your legal details have been approved.": "รายละเอียดทางกฎหมายของคุณได้รับการอนุมัติแล้ว",
//       "Your legal details have been rejected.": "รายละเอียดทางกฎหมายของคุณถูกปฏิเสธ",
//     };

//     if (translations[message]) return translations[message];
//     switch (status) {
//       case "APPROVED": return "รายละเอียดทางกฎหมายของคุณได้รับการอนุมัติแล้ว";
//       case "PENDING": return "รายละเอียดทางกฎหมายของคุณอยู่ระหว่างการตรวจสอบ";
//       case "REJECTED": return "รายละเอียดทางกฎหมายของคุณถูกปฏิเสธ";
//       default: return message;
//     }
//   };

//   // Re‑translate legal message when language changes
//   useEffect(() => {
//     if (legalMessageOriginal) {
//       setLegalMessage(translateLegalMessage(legalMessageOriginal, legalStatus));
//     }
//   }, [i18n.language]);

//   useEffect(() => {
//     fetchCustomerLegalDetails();
//     fetchLegalVerificationStatus();
//   }, []);

//   const showMessage = (title, message) => {
//     setModalTitle(title);
//     setModalMessage(message);
//     setShowMessageModal(true);
//   };

//   const fetchCustomerLegalDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         const { legal_details, platform_fees_percentage, customer_credit } = result.data;

//         setCredit(parseFloat(customer_credit) || 0);
//         if (platform_fees_percentage) {
//           setPlatformFeePercent(parseFloat(platform_fees_percentage));
//         }
//         if (legal_details) {
//           setBankDetails({
//             name: legal_details.legal_name || "",
//             bank: legal_details.bank_name || "",
//             accountNumber: legal_details.bank_account_no || "",
//           });
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching customer legal details:", err);
//       showMessage(t("withdrawal.errorLoadDetails"), t("withdrawal.errorLoadDetails"));
//     }
//   };

//   const fetchLegalVerificationStatus = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setLegalMessage(t("withdrawal.authErrorMessage"));
//         setLegalLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         setLegalStatus(result.data.status);
//         const original = result.data.message;
//         setLegalMessageOriginal(original);
//         setLegalMessage(translateLegalMessage(original, result.data.status));
//         setIsLegalVerified(result.data.is_legal_details_verified === true);
//       } else {
//         setLegalMessage(result.message || t("withdrawal.errorNetwork"));
//         setIsLegalVerified(false);
//       }
//     } catch (err) {
//       console.error("Error fetching legal verification status:", err);
//       setLegalMessage(t("withdrawal.errorNetwork"));
//       setIsLegalVerified(false);
//     } finally {
//       setLegalLoading(false);
//     }
//   };

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const platformFee = parseFloat(((parsedAmount * platformFeePercent) / 100).toFixed(2));
//   const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isLegalVerified) {
//       showMessage(
//         t("withdrawal.verificationRequired"),
//         t("withdrawal.verificationMessage")
//       );
//       return;
//     }

//     if (!requestedAmount || parsedAmount <= 0) {
//       showMessage(t("withdrawal.invalidAmount"), t("withdrawal.invalidAmountMessage"));
//       return;
//     }
//     if (parsedAmount > credit) {
//       showMessage(t("withdrawal.insufficientCredit"), t("withdrawal.insufficientCreditMessage"));
//       return;
//     }
//     if (!bankDetails.name.trim() || !bankDetails.accountNumber.trim()) {
//       showMessage(t("withdrawal.missingBankDetails"), t("withdrawal.missingBankDetailsMessage"));
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         showMessage(t("withdrawal.authError"), t("withdrawal.authErrorMessage"));
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/withdrawal",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             amount: String(parsedAmount),
//           }),
//         }
//       );

//       const result = await response.json();

//       if (result.success) {
//         showMessage(
//           t("withdrawal.withdrawalSuccess"),
//           result.message || t("withdrawal.withdrawalSuccessMessage")
//         );
//         setRequestedAmount("");
//         fetchCustomerLegalDetails();
//       } else {
//         showMessage(
//           t("withdrawal.withdrawalFailed"),
//           result.message || t("withdrawal.withdrawalFailedMessage")
//         );
//       }
//     } catch (err) {
//       console.error("Withdrawal error:", err);
//       showMessage(t("withdrawal.networkErrorTitle"), t("withdrawal.networkErrorMessage"));
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getLegalStatusClass = () => {
//     switch (legalStatus) {
//       case "APPROVED":
//         return "legal-banner success";
//       case "PENDING":
//         return "legal-banner warning";
//       case "REJECTED":
//         return "legal-banner error";
//       case "NOTSTARTED":
//       default:
//         return "legal-banner info";
//     }
//   };

//   const showVerificationPopup = () => {
//     if (!isLegalVerified && legalMessage) {
//       showMessage(t("withdrawal.verificationStatusTitle"), legalMessage);
//     }
//   };

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={handleCloseSidebar}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">
//               {/* Notice Banner */}
//               <div className="notice-banner">
//                 <div className="d-flex gap-2">
//                   {/* <span className="notice-icon">&#9432;</span> */}
//                   <span class="notice-icon text-colors"><i class="bi bi-info-circle"></i></span>
//                   {/* <i className="bi bi-info-circle" style={{color:'red'}}></i> */}
//                   <p className="text-colors" style={{ fontSize: "13px" }}>
//                     {t("withdrawal.noticeMessage")}
//                   </p>
//                 </div>

//                 <div>
//                   {!legalLoading && legalMessage && (
//                     <div className={`${getLegalStatusClass()} d-flex gap-2`}>
//                       <span className="notice-icon text-colors">
//                         <i
//                           className={
//                             legalStatus === "APPROVED"
//                               ? "bi bi-check-circle-fill"
//                               : "bi bi-info-circle"
//                           }
//                         ></i>
//                       </span>
//                       <p className="notice-text">{legalMessage}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Credit Badge */}
//               <div className="credit-badge">
//                 {t("withdrawal.credit")}{" "}
//                 {formatNumber(credit, i18n.language)}{" "}
//                 {t("thb")}
//               </div>

//               {/* Form wrapper */}
//               <div style={{ position: "relative" }}>
//                 {/* Requested Amount */}
//                 <div className="form-field mt-0" onClick={() => { if (!isLegalVerified) showVerificationPopup(); }} style={{ cursor: !isLegalVerified ? "pointer" : "default" }}>
//                   <label className="field-label">{t("withdrawal.requestedAmount")}</label>
//                   <input
//                     type="text"
//                     className="field-input text-white mt-0"
//                     value={requestedAmount}
//                     placeholder={t("withdrawal.amountPlaceholder")}
//                     onChange={(e) => {
//                       const value = e.target.value;
//                       if (/^\d*\.?\d*$/.test(value)) {
//                         setRequestedAmount(value);
//                       }
//                     }}
//                     onBlur={() => {
//                       if (requestedAmount) {
//                         setRequestedAmount(parseFloat(requestedAmount).toFixed(2));
//                       }
//                     }}
//                     inputMode="decimal"
//                     disabled={!isLegalVerified}
//                     onClick={() => {
//                       if (!isLegalVerified) showVerificationPopup();
//                     }}
//                   />
//                   <span className="field-hint">
//                     {t("withdrawal.feeHint", { fee: platformFeePercent })}
//                   </span>
//                 </div>

//                 {/* Bank Details Section with permanent blur overlay */}
//                 <div
//                   style={{
//                     position: "relative",
//                     minHeight: "200px",
//                     background: "#f9ced921",
//                     backdropFilter: "blur(1px)",
//                     WebkitBackdropFilter: "blur(12px)",
//                     borderRadius: "10px",
//                     padding: "15px",
//                   }}
//                 >
//                   {!isLegalVerified && (
//                     <div
//                       onClick={showVerificationPopup}
//                       style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         inset:" 500px",
//                         backgroundcolor: "rgba(255, 255, 255, -19.5)",
//                         backdropfilter: "blur(1px)",
//                         WebkitBackdropFilter: "blur(3px)",
//                         zIndex: 9999,
//                         borderRadius: "8px",
//                         cursor: "pointer",
//                       }}
//                     />
//                   )}

//                   <div className="section-title">
//                     {t("withdrawal.bankDetailsTitle")}{" "}
//                     <span style={{ fontSize: '12px' }}>{t("withdrawal.nonEditableNote")}</span>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">{t("withdrawal.enterName")}</label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.name}
//                       disabled={true}
//                       placeholder={t("withdrawal.namePlaceholder")}
//                     />
//                     <span className="field-hint">{t("withdrawal.nameHint")}</span>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label z-3">{t("withdrawal.chooseBank")}</label>
//                     <div className="select-wrapper w-100">
//                       <select
//                         className="field-select field-selectsss w-100 text-white"
//                         value={bankDetails.bank}
//                         disabled={true}
//                       >
//                         {bankList.map((bank) => (
//                           <option key={bank.value} value={bank.value}>
//                             {bank.label}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">
//                       {t("withdrawal.bankAccountNumber")}
//                     </label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.accountNumber}
//                       disabled={true}
//                       placeholder=""
//                     />
//                   </div>
//                 </div>

//                 {/* Summary Table */}
//                 <div
//                   className="summary-table"
//                 >
//                   <div className="summary-row">
//                     <span className="summary-label">{t("withdrawal.requestedAmountLabel")}</span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(parsedAmount, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row">
//                     {/* <span className="summary-label">
//                       {t("withdrawal.legalFeeLabel", { fee: platformFeePercent })}
//                     </span> */}

//                     <span className="summary-label">
//   {t("Tax Fee")}
// </span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(platformFee, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row net-row">
//                     <span className="summary-label net-label">{t("withdrawal.netAmountLabel")}</span>
//                     <span className="summary-value net-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(netAmount, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                 </div>

//                 <button
//                   className="submit-btn"
//                   onClick={handleSubmit}
//                   disabled={loading || !isLegalVerified}
//                 >
//                   {loading ? t("withdrawal.submitting") : t("withdrawal.submit")}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Message Modal Popup */}
//       <Modal
//         show={showMessageModal}
//         onHide={() => setShowMessageModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{modalTitle}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{modalMessage}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant="primary"
//             onClick={() => setShowMessageModal(false)}
//             style={{ backgroundColor: "#e9527a", border: "none" }}
//           >
//             {t("withdrawal.ok")}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// import React, { useState, useEffect, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { Modal, Button } from "react-bootstrap";
// import { useTranslation } from "react-i18next";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// // Bank keys used for translations only (no longer needed for select)
// const BANKS = [
//   "Bangkok_Bank",
//   "Kasikorn_Bank",
//   "Siam_Commercial_Bank",
//   "Krung_Thai_Bank",
//   "Bank_of_Ayudhya",
//   "TMBThanachart_Bank",
// ];

// // Helper: format number with locale
// const formatNumber = (value, locale) => {
//   if (value === null || value === undefined || isNaN(value)) return "—";
//   return value.toLocaleString(locale === "th" ? "th-TH" : "en-US", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });
// };

// // Format number as whole number (no decimals)
// const formatWholeNumber = (value, locale) => {
//   if (value === null || value === undefined || isNaN(value)) return "—";

//   return Math.floor(value).toLocaleString(locale === "th" ? "th-TH" : "en-US");
// };

// // --------------------------------------------------
// // Mapping from English bank name → i18n key
// // Add all banks your backend might return
// // --------------------------------------------------
// const ENGLISH_BANK_TO_KEY = {
//   "Bangkok Bank": "Bangkok_Bank",
//   "Kasikorn Bank": "Kasikorn_Bank",
//   "Siam Commercial Bank": "Siam_Commercial_Bank",
//   SCB: "SCB",
//   "Krung Thai Bank": "Krung_Thai_Bank",
//   "Krungthai Bank": "Krungthai_Bank",
//   "Bank of Ayudhya": "Bank_of_Ayudhya",
//   Krungsri: "Krungsri",
//   "Thanachart Bank": "Thanachart_Bank",
//   "TMB Bank": "TMB_Bank",
//   "TMBThanachart Bank": "TMBThanachart_Bank",
//   ttb: "ttb",
//   "CIMB Thai Bank": "CIMB_Thai_Bank",
//   "Standard Chartered Bank": "Standard_Chartered_Bank",
//   "Hongkong and Shanghai Banking Corporation":
//     "Hongkong_and_Shanghai_Banking_Corporation",
//   HSBC: "HSBC",
// };

// export default function Withdrawal() {
//   const { t, i18n } = useTranslation();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [credit, setCredit] = useState(0);
//   const [requestedAmount, setRequestedAmount] = useState("");
//   const navigate = useNavigate();

//   const [bankDetails, setBankDetails] = useState({
//     name: "",
//     bank: "", // English name from backend
//     accountNumber: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [platformFeePercent, setPlatformFeePercent] = useState(3);

//   const [legalStatus, setLegalStatus] = useState(null);
//   const [legalMessageOriginal, setLegalMessageOriginal] = useState("");
//   const [legalMessage, setLegalMessage] = useState("");
//   const [shouldRedirect, setShouldRedirect] = useState(false);
//   const [isLegalVerified, setIsLegalVerified] = useState(false);
//   const [legalLoading, setLegalLoading] = useState(true);

//   const [showMessageModal, setShowMessageModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [modalMessage, setModalMessage] = useState("");

//   // Auto-fill credit modal state
//   const [showCreditModal, setShowCreditModal] = useState(false);
//   const [excessAmount, setExcessAmount] = useState(0);

//   const translateApiMessage = (message) => {
//   if (i18n.language !== "th") return message;

//   const translations = {
//     "Minimum Withdrawable Amount Is 500.00 Only":
//       "จำนวนเงินถอนขั้นต่ำคือ 500.00 บาทเท่านั้น",

//     "Withdrawal request submitted successfully":
//       "ส่งคำขอถอนเงินสำเร็จแล้ว",

//     "Insufficient balance":
//       "ยอดเงินคงเหลือไม่เพียงพอ",
//   };

//   return translations[message] || message;
// };
//   // Translate legal messages from API
//   const translateLegalMessage = (message, status) => {
//     if (i18n.language !== "th") return message;
//     const translations = {
//       "Your identity verification is complete.":
//         "การยืนยันตัวตนของคุณเสร็จสมบูรณ์แล้ว",
//       "Your identity verification is pending.":
//         "การยืนยันตัวตนของคุณอยู่ระหว่างดำเนินการ",
//       "Your identity verification has been rejected.":
//         "การยืนยันตัวตนของคุณถูกปฏิเสธ",
//       "Please complete your legal details.":
//         "กรุณากรอกรายละเอียดทางกฎหมายของคุณ",
//       "Your legal details are under review.":
//         "รายละเอียดทางกฎหมายของคุณอยู่ระหว่างการตรวจสอบ",
//       "Your legal details have been approved.":
//         "รายละเอียดทางกฎหมายของคุณได้รับการอนุมัติแล้ว",
//       "Your legal details have been rejected.":
//         "รายละเอียดทางกฎหมายของคุณถูกปฏิเสธ",
//     };
//     if (translations[message]) return translations[message];
//     switch (status) {
//       case "APPROVED":
//         return "รายละเอียดทางกฎหมายของคุณได้รับการอนุมัติแล้ว";
//       case "PENDING":
//         return "รายละเอียดทางกฎหมายของคุณอยู่ระหว่างการตรวจสอบ";
//       case "REJECTED":
//         return "รายละเอียดทางกฎหมายของคุณถูกปฏิเสธ";
//       default:
//         return message;
//     }
//   };

//   // Re‑translate when language changes
//   useEffect(() => {
//     if (legalMessageOriginal) {
//       setLegalMessage(translateLegalMessage(legalMessageOriginal, legalStatus));
//     }
//   }, [i18n.language]);

//   useEffect(() => {
//     fetchCustomerLegalDetails();
//     fetchLegalVerificationStatus();
//   }, []);

//   const showMessage = (title, message) => {
//     setModalTitle(title);
//     setModalMessage(message);
//     setShowMessageModal(true);
//   };

//   const fetchCustomerLegalDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         },
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         const { legal_details, platform_fees_percentage, customer_credit } =
//           result.data;

//         setCredit(parseFloat(customer_credit) || 0);
//         if (platform_fees_percentage) {
//           setPlatformFeePercent(parseFloat(platform_fees_percentage));
//         }
//         if (legal_details) {
//           setBankDetails({
//             name: legal_details.legal_name || "",
//             bank: legal_details.bank_name || "", // still English
//             accountNumber: legal_details.bank_account_no || "",
//           });
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching customer legal details:", err);
//       showMessage(
//         t("withdrawal.errorLoadDetails"),
//         t("withdrawal.errorLoadDetails"),
//       );
//     }
//   };

//   const fetchLegalVerificationStatus = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setLegalMessage(t("withdrawal.authErrorMessage"));
//         setLegalLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         },
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         setLegalStatus(result.data.status);
//         const original = result.data.message;
//         setLegalMessageOriginal(original);
//         setLegalMessage(translateLegalMessage(original, result.data.status));
//         setIsLegalVerified(result.data.is_legal_details_verified === true);
//       } else {
//         setLegalMessage(result.message || t("withdrawal.errorNetwork"));
//         setIsLegalVerified(false);
//       }
//     } catch (err) {
//       console.error("Error fetching legal verification status:", err);
//       setLegalMessage(t("withdrawal.errorNetwork"));
//       setIsLegalVerified(false);
//     } finally {
//       setLegalLoading(false);
//     }
//   };

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const platformFee = parseFloat(
//     ((parsedAmount * platformFeePercent) / 100).toFixed(2),
//   );
//   const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

//   // Translate the bank name using the mapping
//   const translatedBankName = useMemo(() => {
//     if (!bankDetails.bank) return "";
//     const key = ENGLISH_BANK_TO_KEY[bankDetails.bank];
//     return key ? t(`bankNames.${key}`) : bankDetails.bank; // fallback to raw English
//   }, [bankDetails.bank, t]);

//   // Amount change with auto-fill modal
//   // const handleAmountChange = (e) => {
//   //   const value = e.target.value;

//   //   if (/^\d*\.?\d*$/.test(value)) {
//   //     const numValue = parseFloat(value) || 0;

//   //     if (numValue > credit && credit > 0) {
//   //       setExcessAmount(numValue);
//   //       setShowCreditModal(true);
//   //       setRequestedAmount(value); // keep entered value for modal display
//   //     } else {
//   //       setRequestedAmount(value);
//   //     }
//   //   }
//   // };

//   // const handleAmountChange = (e) => {
//   //   let value = e.target.value;

//   //   // Allow numbers + optional decimal input (user can type 194.50)
//   //   if (!/^\d*\.?\d*$/.test(value)) return;

//   //   let numValue = parseFloat(value) || 0;

//   //   // 🔥 ROUND DOWN ALWAYS
//   //   numValue = Math.floor(numValue);

//   //   if (numValue > credit && credit > 0) {
//   //     setExcessAmount(numValue);
//   //     setShowCreditModal(true);
//   //     setRequestedAmount(value);
//   //   } else {
//   //     setRequestedAmount(value);
//   //   }
//   // };

//   const MIN_WITHDRAWAL = 500;

// const handleAmountChange = (e) => {
//   let value = e.target.value;

//   // Allow only numbers + decimal
//   if (!/^\d*\.?\d*$/.test(value)) return;

//   let numValue = parseFloat(value) || 0;

//   // Always round down
//   numValue = Math.floor(numValue);

//   setRequestedAmount(value);

//   // ✅ Check only after 3 digits entered
//   if (value.length >= 3) {

//     // ✅ Minimum withdrawal check
//     if (numValue < MIN_WITHDRAWAL) {
//       setExcessAmount(numValue);

//       setModalTitle(
//         i18n.language === "th"
//           ? "จำนวนเงินขั้นต่ำ"
//           : "Minimum Withdrawal Amount"
//       );

//       setModalMessage(
//         i18n.language === "th"
//           ? "จำนวนเงินถอนขั้นต่ำคือ 500 บาท"
//           : "Minimum withdrawable amount is 500 THB"
//       );

//       setShowCreditModal(true);
//       return;
//     }

//     // ✅ Insufficient credit check
//     if (numValue > credit && credit > 0) {
//       setExcessAmount(numValue);

//       setModalTitle(
//         i18n.language === "th"
//           ? "เครดิตไม่เพียงพอ"
//           : "Insufficient Credit"
//       );

//       setModalMessage(
//         i18n.language === "th"
//           ? "เครดิตของคุณไม่เพียงพอ"
//           : "Your credit is insufficient"
//       );

//       setShowCreditModal(true);
//     }
//   }
// };

//   // const handleAutoFillCredit = () => {
//   //   setRequestedAmount(credit.toFixed(2));
//   //   setShowCreditModal(false);
//   // };

//   const handleAutoFillCredit = () => {
//     const value = Math.floor(credit);
//     setRequestedAmount(value.toFixed(2)); // ✅ 1000.00
//     setShowCreditModal(false);
//   };

//   const handleKeepEnteredAmount = () => {
//     setShowCreditModal(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isLegalVerified) {
//       showMessage(
//         t("withdrawal.verificationRequired"),
//         t("withdrawal.verificationMessage"),
//       );
//       return;
//     }

//     if (!requestedAmount || parsedAmount <= 0) {
//       showMessage(
//         t("withdrawal.invalidAmount"),
//         t("withdrawal.invalidAmountMessage"),
//       );
//       return;
//     }
//     if (parsedAmount > credit) {
//       showMessage(
//         t("withdrawal.insufficientCredit"),
//         t("withdrawal.insufficientCreditMessage"),
//       );
//       return;
//     }
//     if (!bankDetails.name.trim() || !bankDetails.accountNumber.trim()) {
//       showMessage(
//         t("withdrawal.missingBankDetails"),
//         t("withdrawal.missingBankDetailsMessage"),
//       );
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         showMessage(
//           t("withdrawal.authError"),
//           t("withdrawal.authErrorMessage"),
//         );
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/withdrawal",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             amount: String(parsedAmount),
//           }),
//         },
//       );

//       const result = await response.json();

//       if (result.success) {
//         // showMessage(
//         //   t("withdrawal.withdrawalSuccess"),
//         //   result.message || t("withdrawal.withdrawalSuccessMessage"),
//         // );
//         showMessage(
//   t("withdrawal.withdrawalSuccess"),
//   translateApiMessage(
//     result.message || t("withdrawal.withdrawalSuccessMessage")
//   ),
// );
//         setRequestedAmount("");
//         fetchCustomerLegalDetails();
//       } else {
//         // showMessage(
//         //   t("withdrawal.withdrawalFailed"),
//         //   result.message || t("withdrawal.withdrawalFailedMessage"),
//         // );

//         showMessage(
//   t("withdrawal.withdrawalFailed"),
//   translateApiMessage(
//     result.message || t("withdrawal.withdrawalFailedMessage")
//   ),
// );
//       }
//     } catch (err) {
//       console.error("Withdrawal error:", err);
//       showMessage(
//         t("withdrawal.networkErrorTitle"),
//         t("withdrawal.networkErrorMessage"),
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getLegalStatusClass = () => {
//     switch (legalStatus) {
//       case "APPROVED":
//         return "legal-banner success";
//       case "PENDING":
//         return "legal-banner warning";
//       case "REJECTED":
//         return "legal-banner error";
//       default:
//         return "legal-banner info";
//     }
//   };

//   const showVerificationPopup = () => {
//     if (!isLegalVerified && legalMessage) {
//       showMessage(t("withdrawal.verificationStatusTitle"), legalMessage);
//     }
//   };

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={handleCloseSidebar}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">
//               {/* Notice Banner */}
//               <div className="notice-banner">
//                 <div className="d-flex gap-2">
//                   <span className="notice-icon text-colors">
//                     {/* <i className="bi bi-info-circle"></i> */}

//                     {/* <i class="fa-solid fa-circle-info"></i> */}

//                     <svg width="20" height="20" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M16.0174 0.111698C9.95169 0.962875 4.76199 4.62376 2.01012 10.0035C0.67138 12.6149 0.0763821 14.9618 0.0102712 17.9699C-0.0558396 20.4904 0.192076 22.2506 0.902768 24.4074C1.29943 25.5892 2.25804 27.589 2.93568 28.622C5.77844 32.9688 10.1996 35.8611 15.4389 36.8032C16.4801 36.9933 19.4138 37.0677 20.5707 36.9272C27.4711 36.1421 33.264 31.6631 35.8093 25.1677C36.206 24.143 36.5778 22.8042 36.801 21.5564C36.991 20.5152 37.0654 17.5815 36.9249 16.4246C36.2969 10.9126 33.2558 5.97077 28.6197 2.93794C27.6446 2.30162 25.6117 1.30996 24.5291 0.94635C23.3805 0.557949 22.1326 0.268711 20.9426 0.111698C19.7609 -0.0370483 17.133 -0.0370483 16.0174 0.111698ZM19.3229 8.83833C19.4799 8.91271 19.7278 9.10278 19.8766 9.25979C20.4137 9.82173 20.3972 9.61513 20.3972 15.375V20.6061L20.1576 21.0193C19.3808 22.3745 17.5627 22.3415 16.8024 20.9697L16.5545 20.5234V15.3998C16.5545 9.74736 16.538 9.8961 17.0751 9.30937C17.6949 8.62347 18.5461 8.44167 19.3229 8.83833ZM19.2898 24.4074C20.8104 25.0355 21.141 27.0106 19.9179 28.0849C19.546 28.4154 18.9345 28.6633 18.4965 28.6633C17.2569 28.6633 16.1248 27.3907 16.3066 26.2007C16.4719 25.0685 17.3644 24.2835 18.4717 24.2835C18.761 24.2835 19.1328 24.3413 19.2898 24.4074Z" fill="#EC5D80"/>
// </svg>

//                   </span>
//                   <p className="text-colors" style={{ fontSize: "13px" }}>
//                     {t("withdrawal.noticeMessage")}
//                   </p>
//                 </div>

//                 <div className="d-flex gap-2">
//                   <span className="notice-icon text-colors">
//                     {/* <i className="bi bi-info-circle"></i> */}

//                     {/* <i class="fa-solid fa-circle-info"></i> */}
//                   <svg width="20" height="20" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M16.0174 0.111698C9.95169 0.962875 4.76199 4.62376 2.01012 10.0035C0.67138 12.6149 0.0763821 14.9618 0.0102712 17.9699C-0.0558396 20.4904 0.192076 22.2506 0.902768 24.4074C1.29943 25.5892 2.25804 27.589 2.93568 28.622C5.77844 32.9688 10.1996 35.8611 15.4389 36.8032C16.4801 36.9933 19.4138 37.0677 20.5707 36.9272C27.4711 36.1421 33.264 31.6631 35.8093 25.1677C36.206 24.143 36.5778 22.8042 36.801 21.5564C36.991 20.5152 37.0654 17.5815 36.9249 16.4246C36.2969 10.9126 33.2558 5.97077 28.6197 2.93794C27.6446 2.30162 25.6117 1.30996 24.5291 0.94635C23.3805 0.557949 22.1326 0.268711 20.9426 0.111698C19.7609 -0.0370483 17.133 -0.0370483 16.0174 0.111698ZM19.3229 8.83833C19.4799 8.91271 19.7278 9.10278 19.8766 9.25979C20.4137 9.82173 20.3972 9.61513 20.3972 15.375V20.6061L20.1576 21.0193C19.3808 22.3745 17.5627 22.3415 16.8024 20.9697L16.5545 20.5234V15.3998C16.5545 9.74736 16.538 9.8961 17.0751 9.30937C17.6949 8.62347 18.5461 8.44167 19.3229 8.83833ZM19.2898 24.4074C20.8104 25.0355 21.141 27.0106 19.9179 28.0849C19.546 28.4154 18.9345 28.6633 18.4965 28.6633C17.2569 28.6633 16.1248 27.3907 16.3066 26.2007C16.4719 25.0685 17.3644 24.2835 18.4717 24.2835C18.761 24.2835 19.1328 24.3413 19.2898 24.4074Z" fill="#EC5D80"/>
// </svg>
//                   </span>
//                   <p className="text-colors" style={{ fontSize: "13px" }}>
//                     {t("withdrawal.noticeMessage2")}
//                   </p>
//                 </div>

//                 <div>
//                   {!legalLoading && legalMessage && (
//                     <div className={`${getLegalStatusClass()} d-flex gap-2`}>
//                       <span className="notice-icon text-colors">
//                         {/* <i
//                           className={
//                             legalStatus === "APPROVED"
//                               ? "bi bi-check-circle-fill"
//                               : "fa-solid fa-circle-info"
//                           }
//                         ></i> */}

//                         {legalStatus === "APPROVED" ? (
//   <svg
//     width="20"
//     height="22"
//     viewBox="0 0 27 26"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M9.06119 0.101879C8.90057 0.159241 8.70554 0.251019 8.62524 0.302645C8.40726 0.446047 8.05736 0.887732 7.87954 1.23764C7.7304 1.52445 7.37475 2.55696 7.28298 2.94701C7.26003 3.03879 7.15678 3.30266 7.05927 3.52637L6.86997 3.93937L6.56596 3.97952C6.39387 4.0082 5.80305 4.02541 5.25238 4.01968C3.74377 4.01394 3.14721 4.16882 2.64816 4.69654C2.07454 5.30457 2.01718 6.14206 2.47034 7.46137C2.79156 8.39636 2.85466 8.6086 2.92923 9.04455C2.96938 9.28547 2.96365 9.29694 2.68831 9.55507C2.53917 9.69847 2.26957 9.91071 2.09749 10.0254C1.9254 10.1402 1.77053 10.2434 1.75332 10.2606C1.73611 10.2778 1.58123 10.3868 1.40915 10.5073C0.428266 11.1784 -0.047835 11.9298 0.00379042 12.7329C0.0324712 13.0943 0.238973 13.6449 0.42253 13.8228C0.474155 13.8801 0.663449 14.0694 0.835533 14.2415C1.00188 14.4193 1.16249 14.5627 1.1797 14.5627C1.20265 14.5627 1.28869 14.6258 1.37473 14.7004C1.46651 14.775 1.67875 14.9241 1.85083 15.0274C2.29252 15.3027 2.90055 15.8247 2.93497 15.9738C2.96938 16.1115 2.76862 17.0063 2.64242 17.2817C2.53917 17.5054 2.33841 18.1019 2.30399 18.2912C2.28678 18.3715 2.24663 18.5895 2.21221 18.7788C2.03439 19.6794 2.40724 20.5169 3.14721 20.8897C3.61183 21.1249 4.21413 21.2109 5.37284 21.2052C5.92351 21.1995 6.47991 21.2167 6.61758 21.2396C6.84129 21.2798 6.87571 21.3085 7.02485 21.6125C7.18546 21.928 7.24856 22.1058 7.4608 22.8515C7.69598 23.6775 8.05162 24.3945 8.3499 24.6584C8.65965 24.9337 8.72275 24.9796 8.9522 25.0886C9.64054 25.427 10.9656 25.0025 11.9465 24.1249C12.3136 23.798 12.9675 23.3964 13.1511 23.3849C13.3289 23.3677 13.8337 23.6603 14.4417 24.1306C15.1473 24.6756 15.5316 24.9108 16.0364 25.1001C16.3518 25.2205 16.4723 25.2377 16.8222 25.2148C17.2983 25.1804 17.7572 24.9624 18.0153 24.6412C18.1014 24.5379 18.2046 24.4117 18.2448 24.3601C18.4685 24.0848 18.8241 23.1727 19.0536 22.2836C19.1052 22.0943 19.2142 21.796 19.306 21.6125C19.4723 21.2912 19.4781 21.2855 19.7763 21.2454C19.9427 21.2167 20.5048 21.1995 21.0268 21.2052C22.8624 21.2109 23.5851 20.9356 23.9924 20.0694C24.1129 19.8113 24.1415 19.6622 24.1473 19.2664C24.153 18.9968 24.1358 18.687 24.1129 18.5723C24.0727 18.3715 23.7744 17.4538 23.5851 16.9318C23.5335 16.7998 23.4819 16.6048 23.4647 16.5016C23.4475 16.3983 23.4188 16.232 23.4016 16.1344C23.3729 15.9796 23.4016 15.9222 23.5679 15.7559C23.7458 15.5723 24.3022 15.1364 24.5316 14.9929C25.1454 14.6144 25.7247 14.0981 26.0058 13.6908C26.2008 13.404 26.3614 12.9222 26.3614 12.6124C26.3614 12.3543 26.2066 11.8151 26.0976 11.6889C26.0517 11.643 26.0173 11.5799 26.0173 11.557C26.0173 11.3849 25.283 10.7425 24.4685 10.1918C24.1358 9.96807 23.7572 9.67553 23.6196 9.53786C23.3786 9.29694 23.3729 9.29121 23.4131 8.98719C23.436 8.82084 23.5393 8.42505 23.6482 8.10956C24.0899 6.79598 24.1415 6.58948 24.1415 6.01586C24.1473 5.36767 24.0383 5.0866 23.6482 4.68507C23.132 4.16308 22.719 4.05409 21.1702 4.03115C20.5106 4.02541 19.8566 4.00247 19.719 3.97952C19.4895 3.94511 19.4666 3.92216 19.3117 3.61814C19.2199 3.44032 19.0536 2.96996 18.9331 2.57416C18.7438 1.93172 18.6176 1.60475 18.3538 1.05408C18.2104 0.761536 17.8031 0.354269 17.4876 0.199392C16.587 -0.248028 15.7209 0.0387802 14.1434 1.30647C13.9713 1.44414 13.6788 1.6277 13.4952 1.71947C13.2027 1.85714 13.1396 1.86862 13.0077 1.80552C12.6061 1.6277 12.2161 1.38104 11.935 1.12292C11.74 0.939358 11.1205 0.509146 11.0574 0.509146C11.023 0.509146 10.9885 0.4862 10.9771 0.463257C10.9484 0.388685 10.3461 0.119087 10.065 0.0559883C9.6979 -0.0300541 9.39388 -0.0185814 9.06119 0.101879Z"
//       fill="#49ADF4"
//     />
//     <path
//       d="M16.513 10.5492C16.4442 10.5779 15.4117 11.3351 14.2128 12.2299L12.0388 13.8647L11.0694 12.8953C10.536 12.3618 10.0197 11.8857 9.92219 11.8399C9.38873 11.5875 8.74628 11.8972 8.66024 12.4536C8.57419 12.9527 8.61435 13.01 9.94514 14.358C10.6335 15.0464 11.2931 15.6831 11.4136 15.7749C11.6947 15.9814 12.1191 16.0043 12.4059 15.8265C12.8075 15.5856 17.4021 12.098 17.5398 11.9316C17.7635 11.6678 17.7979 11.3523 17.6316 11.0253C17.5628 10.8762 17.4308 10.7041 17.3448 10.6467C17.1727 10.5205 16.7081 10.4632 16.513 10.5492Z"
//       fill="white"
//     />
//   </svg>
// ) : (
//   <i className="fa-solid fa-circle-info"></i>
// )}
//                       </span>
//                       <p className="notice-text mt-1 ms-0">{legalMessage}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Credit Badge */}
//               {/* <div className="credit-badge">
//                 {t("withdrawal.credit")}{" "}
//                 {formatNumber(credit, i18n.language)} {t("thb")}
//               </div> */}

//               {/* Credit Badge - Without Decimal Points */}
//               <div className="credit-badge">
//                 {t("withdrawal.credit")}{" "}
//                 {formatWholeNumber(credit, i18n.language)} {t("thb")}
//               </div>

//               {/* Form wrapper */}
//               <div style={{ position: "relative" }}>
//                 {/* Requested Amount */}
//                 <div
//                   className="form-field mt-0"
//                   onClick={() => {
//                     if (!isLegalVerified) showVerificationPopup();
//                   }}
//                   style={{ cursor: !isLegalVerified ? "pointer" : "default" }}
//                 >
//                   <label className="field-label">
//                     {t("withdrawal.requestedAmount")}
//                   </label>
//                   <input
//                     type="text"
//                     className="field-input text-white mt-0"
//                     value={requestedAmount}
//                     placeholder={t("withdrawal.amountPlaceholder")}
//                     onChange={handleAmountChange}
//                     // onBlur={() => {
//                     //   if (requestedAmount) {
//                     //     setRequestedAmount(
//                     //       parseFloat(requestedAmount).toFixed(2)
//                     //     );
//                     //   }
//                     // }}

//                     onBlur={() => {
//                       if (requestedAmount) {
//                         const value = Math.floor(
//                           parseFloat(requestedAmount) || 0,
//                         );
//                         setRequestedAmount(value.toFixed(2)); // ✅ always .00
//                       }
//                     }}
//                     inputMode="decimal"
//                     disabled={!isLegalVerified}
//                     onClick={() => {
//                       if (!isLegalVerified) showVerificationPopup();
//                     }}
//                   />
//                   <span className="field-hint">
//                     {t("withdrawal.feeHint", { fee: platformFeePercent })}
//                   </span>
//                 </div>

//                 {/* Bank Details Section */}
//                 <div
//                   style={{
//                     position: "relative",
//                     minHeight: "200px",
//                     background: "#f9ced921",
//                     backdropFilter: "blur(1px)",
//                     WebkitBackdropFilter: "blur(12px)",
//                     borderRadius: "10px",
//                     padding: "15px",
//                   }}
//                 >
//                   {!isLegalVerified && (
//                     <div
//                       onClick={showVerificationPopup}
//                       style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: "rgba(255,255,255,0)",
//                         backdropFilter: "blur(0px)",
//                         WebkitBackdropFilter: "blur(0px)",
//                         zIndex: 9999,
//                         borderRadius: "8px",
//                         cursor: "pointer",
//                       }}
//                     />
//                   )}

//                   <div className="section-title">
//                     {t("withdrawal.bankDetailsTitle")}{" "}
//                     <span style={{ fontSize: "12px" }}>
//                       {t("withdrawal.nonEditableNote")}
//                     </span>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">
//                       {t("withdrawal.enterName")}
//                     </label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.name}
//                       disabled={true}
//                       placeholder={t("withdrawal.namePlaceholder")}
//                     />
//                     <span className="field-hint">
//                       {t("withdrawal.nameHint")}
//                     </span>
//                   </div>

//                   {/* ✅ BANK NAME – now a disabled input showing the translated name */}
//                   <div className="form-field">
//                     <label className="field-label">
//                       {t("withdrawal.chooseBank")}
//                     </label>
//                     <input
//                       type="text"
//                       className="field-input text-overflow text-white"
//                       value={translatedBankName}
//                       disabled={true}
//                       placeholder=""
//                     />
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">
//                       {t("withdrawal.bankAccountNumber")}
//                     </label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.accountNumber}
//                       disabled={true}
//                       placeholder=""
//                     />
//                   </div>
//                 </div>

//                 {/* Summary Table */}
//                 <div className="summary-table">
//                   <div className="summary-row">
//                     <span className="summary-label">
//                       {t("withdrawal.requestedAmountLabel")}
//                     </span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(parsedAmount, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row">
//                     <span className="summary-label">
//                       {/* {t("withdrawal.legalfeeLabel", { fee: platformFeePercent })} */}

//                       {t("withdrawal.taxFeeLabel", { fee: platformFeePercent })}
//                     </span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(platformFee, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row net-row">
//                     <span className="summary-label net-label">
//                       {t("withdrawal.netAmountLabel")}
//                     </span>
//                     <span className="summary-value net-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(netAmount, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                 </div>

//                 <button
//                   className="submit-btn"
//                   onClick={handleSubmit}
//                   disabled={loading || !isLegalVerified}
//                 >
//                   {loading
//                     ? t("withdrawal.submitting")
//                     : t("withdrawal.submit")}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Message Modal Popup */}
//       <Modal
//         show={showMessageModal}
//         onHide={() => setShowMessageModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{modalTitle}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{modalMessage}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           {/* <Button
//             variant="primary"
//             onClick={() => setShowMessageModal(false)}
//             style={{ backgroundColor: "#e9527a", border: "none" }}
//           >
//             {t("withdrawal.ok")}
//           </Button> */}

//           <Button
//             variant="primary"
//             onClick={() => {
//               setShowMessageModal(false);
//               navigate("/withdrawalhistory");
//             }}
//             style={{ backgroundColor: "#e9527a", border: "none" }}
//           >
//             {t("withdrawal.ok")}
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Auto-fill Credit Modal */}
//       {/* <Modal
//         show={showCreditModal}
//         onHide={() => setShowCreditModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title style={{ color: "#e9527a" }}>
//             <i className="bi bi-exclamation-triangle-fill me-2"></i>
//             {t("withdrawal.insufficientCredit")}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="text-center mb-3">
//             <div className="mb-3">
//               <i
//                 className="bi bi-wallet2"
//                 style={{ fontSize: "48px", color: "#e9527a" }}
//               ></i>
//             </div>
//             <p className="mb-2">{t("withdrawal.insufficientCreditMessage")}</p>
//             <div className="d-flex justify-content-center gap-4 my-3">
//               <div className="text-center">
//                 <small className="text-muted d-block">
//                   {t("withdrawal.requestedAmountLabel")}
//                 </small>
//                 <strong className="text-danger">
//                   {formatNumber(excessAmount, i18n.language)} {t("thb")}
//                 </strong>
//               </div>
//               <div className="text-center">
//                 <small className="text-muted d-block">
//                   {t("withdrawal.credit")}
//                 </small>
//                 <strong className="text-success">
//                   {formatWholeNumber(credit, i18n.language)} {t("thb")}
//                 </strong>
//               </div>
//             </div>
//             <p className="text-muted" style={{ fontSize: "14px" }}>
//               {i18n.language === "th"
//                 ? "คุณต้องการใช้จำนวนเครดิตที่มีอยู่ทั้งหมดหรือไม่?"
//                 : "Would you like to use your full available credit?"}
//             </p>
//           </div>
//         </Modal.Body>
//         <Modal.Footer className="justify-content-center">
//           <Button
//             variant="primary"
//             onClick={handleAutoFillCredit}
//             style={{ backgroundColor: "#e9527a", border: "none" }}
//             className="px-4 w-50"
//           >
//             <i className="bi bi-check-lg me-1"></i>
//             {i18n.language === "th" ? "ใช่, เติมเต็ม" : "Yes, Auto Fill"}
//           </Button>
//         </Modal.Footer>
//       </Modal> */}

//       {/* Auto-fill Credit Modal */}
// <Modal
//   show={showCreditModal}
//   onHide={() => setShowCreditModal(false)}
//   centered
// >
//   <Modal.Header closeButton>
//     <Modal.Title style={{ color: "#e9527a" }}>
//       <i className="bi bi-exclamation-triangle-fill me-2"></i>

//       {modalTitle ||
//         (i18n.language === "th"
//           ? "เครดิตไม่เพียงพอ"
//           : "Insufficient Credit")}
//     </Modal.Title>
//   </Modal.Header>

//   <Modal.Body>
//     <div className="text-center mb-3">
//       <div className="mb-3">
//         <i
//           className="bi bi-wallet2"
//           style={{ fontSize: "48px", color: "#e9527a" }}
//         ></i>
//       </div>

//       <p className="mb-2">
//         {modalMessage ||
//           t("withdrawal.insufficientCreditMessage")}
//       </p>

//       <div className="d-flex justify-content-center gap-4 my-3">
//         <div className="text-center">
//           <small className="text-muted d-block">
//             {t("withdrawal.requestedAmountLabel")}
//           </small>

//           <strong className="text-danger">
//             {formatNumber(excessAmount, i18n.language)} {t("thb")}
//           </strong>
//         </div>

//         <div className="text-center">
//           <small className="text-muted d-block">
//             {t("withdrawal.credit")}
//           </small>

//           <strong className="text-success">
//             {formatWholeNumber(credit, i18n.language)} {t("thb")}
//           </strong>
//         </div>
//       </div>

//       {/* Minimum amount message */}
//       {excessAmount > 0 && excessAmount < 500 ? (
//         <p className="text-danger fw-bold" style={{ fontSize: "14px" }}>
//           {i18n.language === "th"
//             ? "กรุณากรอกขั้นต่ำ 500 บาท"
//             : "Please enter minimum 500 THB"}
//         </p>
//       ) : (
//         <p className="text-muted" style={{ fontSize: "14px" }}>
//           {i18n.language === "th"
//             ? "คุณต้องการใช้จำนวนเครดิตที่มีอยู่ทั้งหมดหรือไม่?"
//             : "Would you like to use your full available credit?"}
//         </p>
//       )}
//     </div>
//   </Modal.Body>

//   <Modal.Footer className="justify-content-center">
//     {/* Show button only when credit insufficient */}
//     {!(excessAmount > 0 && excessAmount < 500) && (
//       <Button
//         variant="primary"
//         onClick={handleAutoFillCredit}
//         style={{ backgroundColor: "#e9527a", border: "none" }}
//         className="px-4 w-50"
//       >
//         <i className="bi bi-check-lg me-1"></i>

//         {i18n.language === "th"
//           ? "ใช่, เติมเต็ม"
//           : "Yes, Auto Fill"}
//       </Button>
//     )}
//   </Modal.Footer>
// </Modal>

//     </div>
//   );
// }








// import React, { useState, useEffect, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { Modal, Button } from "react-bootstrap";
// import { useTranslation } from "react-i18next";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/Withdrawal.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// // Bank keys used for translations only (no longer needed for select)
// const BANKS = [
//   "Bangkok_Bank",
//   "Kasikorn_Bank",
//   "Siam_Commercial_Bank",
//   "Krung_Thai_Bank",
//   "Bank_of_Ayudhya",
//   "TMBThanachart_Bank",
// ];

// // Helper: format number with locale
// const formatNumber = (value, locale) => {
//   if (value === null || value === undefined || isNaN(value)) return "—";
//   return value.toLocaleString(locale === "th" ? "th-TH" : "en-US", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });
// };

// // Format number as whole number (no decimals)
// const formatWholeNumber = (value, locale) => {
//   if (value === null || value === undefined || isNaN(value)) return "—";

//   return Math.floor(value).toLocaleString(locale === "th" ? "th-TH" : "en-US");
// };

// // --------------------------------------------------
// // Mapping from English bank name → i18n key
// // Add all banks your backend might return
// // --------------------------------------------------
// const ENGLISH_BANK_TO_KEY = {
//   "Bangkok Bank": "Bangkok_Bank",
//   "Kasikorn Bank": "Kasikorn_Bank",
//   "Siam Commercial Bank": "Siam_Commercial_Bank",
//   SCB: "SCB",
//   "Krung Thai Bank": "Krung_Thai_Bank",
//   "Krungthai Bank": "Krungthai_Bank",
//   "Bank of Ayudhya": "Bank_of_Ayudhya",
//   Krungsri: "Krungsri",
//   "Thanachart Bank": "Thanachart_Bank",
//   "TMB Bank": "TMB_Bank",
//   "TMBThanachart Bank": "TMBThanachart_Bank",
//   ttb: "ttb",
//   "CIMB Thai Bank": "CIMB_Thai_Bank",
//   "Standard Chartered Bank": "Standard_Chartered_Bank",
//   "Hongkong and Shanghai Banking Corporation":
//     "Hongkong_and_Shanghai_Banking_Corporation",
//   HSBC: "HSBC",
// };

// export default function Withdrawal() {
//   const { t, i18n } = useTranslation();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [credit, setCredit] = useState(0);
//   const [requestedAmount, setRequestedAmount] = useState("");
//   const navigate = useNavigate();

//   const [bankDetails, setBankDetails] = useState({
//     name: "",
//     bank: "", // English name from backend
//     accountNumber: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [platformFeePercent, setPlatformFeePercent] = useState(3);

//   const [legalStatus, setLegalStatus] = useState(null);
//   const [legalMessageOriginal, setLegalMessageOriginal] = useState("");
//   const [legalMessage, setLegalMessage] = useState("");
//   const [shouldRedirect, setShouldRedirect] = useState(false);
//   const [isLegalVerified, setIsLegalVerified] = useState(false);
//   const [legalLoading, setLegalLoading] = useState(true);

//   const [showMessageModal, setShowMessageModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [modalMessage, setModalMessage] = useState("");

//   // Auto-fill credit modal state
//   const [showCreditModal, setShowCreditModal] = useState(false);
//   const [excessAmount, setExcessAmount] = useState(0);

//   const translateApiMessage = (message) => {
//     if (i18n.language !== "th") return message;

//     const translations = {
//       "Minimum Withdrawable Amount Is 500.00 Only":
//         "จำนวนเงินถอนขั้นต่ำคือ 500.00 บาทเท่านั้น",

//       "Withdrawal request submitted successfully": "ส่งคำขอถอนเงินสำเร็จแล้ว",

//       "Insufficient balance": "ยอดเงินคงเหลือไม่เพียงพอ",
//     };

//     return translations[message] || message;
//   };
//   // Translate legal messages from API
//   const translateLegalMessage = (message, status) => {
//     if (i18n.language !== "th") return message;
//     const translations = {
//       "Your identity verification is complete.":
//         "การยืนยันตัวตนของคุณเสร็จสมบูรณ์แล้ว",
//       "Your identity verification is pending.":
//         "การยืนยันตัวตนของคุณอยู่ระหว่างดำเนินการ",
//       "Your identity verification has been rejected.":
//         "การยืนยันตัวตนของคุณถูกปฏิเสธ",
//       "Please complete your legal details.":
//         "กรุณากรอกรายละเอียดทางกฎหมายของคุณ",
//       "Your legal details are under review.":
//         "รายละเอียดทางกฎหมายของคุณอยู่ระหว่างการตรวจสอบ",
//       "Your legal details have been approved.":
//         "รายละเอียดทางกฎหมายของคุณได้รับการอนุมัติแล้ว",
//       "Your legal details have been rejected.":
//         "รายละเอียดทางกฎหมายของคุณถูกปฏิเสธ",
//     };
//     if (translations[message]) return translations[message];
//     switch (status) {
//       case "APPROVED":
//         return "รายละเอียดทางกฎหมายของคุณได้รับการอนุมัติแล้ว";
//       case "PENDING":
//         return "รายละเอียดทางกฎหมายของคุณอยู่ระหว่างการตรวจสอบ";
//       case "REJECTED":
//         return "รายละเอียดทางกฎหมายของคุณถูกปฏิเสธ";
//       default:
//         return message;
//     }
//   };

//   // Re‑translate when language changes
//   useEffect(() => {
//     if (legalMessageOriginal) {
//       setLegalMessage(translateLegalMessage(legalMessageOriginal, legalStatus));
//     }
//   }, [i18n.language]);

//   useEffect(() => {
//     fetchCustomerLegalDetails();
//     fetchLegalVerificationStatus();
//   }, []);

//   // const showMessage = (title, message) => {
//   //   setModalTitle(title);
//   //   setModalMessage(message);
//   //   setShowMessageModal(true);
//   // };

//   const showMessage = (title, message, redirect = false) => {
//     setModalTitle(title);
//     setModalMessage(message);
//     setShouldRedirect(redirect);
//     setShowMessageModal(true);
//   };

//   const fetchCustomerLegalDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         },
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         const { legal_details, platform_fees_percentage, customer_credit } =
//           result.data;

//         setCredit(parseFloat(customer_credit) || 0);
//         if (platform_fees_percentage) {
//           setPlatformFeePercent(parseFloat(platform_fees_percentage));
//         }
//         if (legal_details) {
//           setBankDetails({
//             name: legal_details.legal_name || "",
//             bank: legal_details.bank_name || "", // still English
//             accountNumber: legal_details.bank_account_no || "",
//           });
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching customer legal details:", err);
//       showMessage(
//         t("withdrawal.errorLoadDetails"),
//         t("withdrawal.errorLoadDetails"),
//       );
//     }
//   };

//   const fetchLegalVerificationStatus = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setLegalMessage(t("withdrawal.authErrorMessage"));
//         setLegalLoading(false);
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         },
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         setLegalStatus(result.data.status);
//         const original = result.data.message;
//         setLegalMessageOriginal(original);
//         setLegalMessage(translateLegalMessage(original, result.data.status));
//         setIsLegalVerified(result.data.is_legal_details_verified === true);
//       } else {
//         setLegalMessage(result.message || t("withdrawal.errorNetwork"));
//         setIsLegalVerified(false);
//       }
//     } catch (err) {
//       console.error("Error fetching legal verification status:", err);
//       setLegalMessage(t("withdrawal.errorNetwork"));
//       setIsLegalVerified(false);
//     } finally {
//       setLegalLoading(false);
//     }
//   };

//   const parsedAmount = parseFloat(requestedAmount) || 0;
//   const platformFee = parseFloat(
//     ((parsedAmount * platformFeePercent) / 100).toFixed(2),
//   );
//   const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

//   // Translate the bank name using the mapping
//   const translatedBankName = useMemo(() => {
//     if (!bankDetails.bank) return "";
//     const key = ENGLISH_BANK_TO_KEY[bankDetails.bank];
//     return key ? t(`bankNames.${key}`) : bankDetails.bank; // fallback to raw English
//   }, [bankDetails.bank, t]);

//   const MIN_WITHDRAWAL = 500;

//   const handleAmountChange = (e) => {
//     let value = e.target.value;

//     // Allow only numbers + decimal
//     if (!/^\d*\.?\d*$/.test(value)) return;

//     let numValue = parseFloat(value) || 0;

//     // Always round down
//     numValue = Math.floor(numValue);

//     setRequestedAmount(value);

//     // ✅ Check only after 3 digits entered
//     if (value.length >= 3) {
//       // ✅ Minimum withdrawal check
//       if (numValue < MIN_WITHDRAWAL) {
//         setExcessAmount(numValue);

//         setModalTitle(
//           i18n.language === "th"
//             ? "จำนวนเงินขั้นต่ำ"
//             : "Minimum Withdrawal Amount",
//         );

//         setModalMessage(
//           i18n.language === "th"
//             ? "จำนวนเงินถอนขั้นต่ำคือ 500 บาท"
//             : "Minimum withdrawable amount is 500 THB",
//         );

//         setShowCreditModal(true);
//         return;
//       }

//       // ✅ Insufficient credit check
//       if (numValue > credit && credit > 0) {
//         setExcessAmount(numValue);

//         setModalTitle(
//           i18n.language === "th" ? "เครดิตไม่เพียงพอ" : "Insufficient Credit",
//         );

//         setModalMessage(
//           i18n.language === "th"
//             ? "เครดิตของคุณไม่เพียงพอ"
//             : "Your credit is insufficient",
//         );

//         setShowCreditModal(true);
//       }
//     }
//   };

//   // const handleAutoFillCredit = () => {
//   //   setRequestedAmount(credit.toFixed(2));
//   //   setShowCreditModal(false);
//   // };

//   const handleAutoFillCredit = () => {
//     const value = Math.floor(credit);
//     setRequestedAmount(value.toFixed(2)); // ✅ 1000.00
//     setShowCreditModal(false);
//   };

//   const handleKeepEnteredAmount = () => {
//     setShowCreditModal(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isLegalVerified) {
//       showMessage(
//         t("withdrawal.verificationRequired"),
//         t("withdrawal.verificationMessage"),
//       );
//       return;
//     }

//     if (!requestedAmount || parsedAmount <= 0) {
//       showMessage(
//         t("withdrawal.invalidAmount"),
//         t("withdrawal.invalidAmountMessage"),
//       );
//       return;
//     }
//     if (parsedAmount > credit) {
//       showMessage(
//         t("withdrawal.insufficientCredit"),
//         t("withdrawal.insufficientCreditMessage"),
//       );
//       return;
//     }
//     if (!bankDetails.name.trim() || !bankDetails.accountNumber.trim()) {
//       showMessage(
//         t("withdrawal.missingBankDetails"),
//         t("withdrawal.missingBankDetailsMessage"),
//       );
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         showMessage(
//           t("withdrawal.authError"),
//           t("withdrawal.authErrorMessage"),
//         );
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/withdrawal",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//           body: JSON.stringify({
//             amount: String(parsedAmount),
//           }),
//         },
//       );

//       const result = await response.json();

//       if (result.success) {
//         // showMessage(
//         //   t("withdrawal.withdrawalSuccess"),
//         //   result.message || t("withdrawal.withdrawalSuccessMessage"),
//         // );
//         //         showMessage(
//         //   t("withdrawal.withdrawalSuccess"),
//         //   translateApiMessage(
//         //     result.message || t("withdrawal.withdrawalSuccessMessage")
//         //   ),
//         // );

//         showMessage(
//           t("withdrawal.withdrawalSuccess"),
//           translateApiMessage(
//             result.message || t("withdrawal.withdrawalSuccessMessage"),
//           ),
//           true, // ✅ redirect only on success
//         );
//         setRequestedAmount("");
//         fetchCustomerLegalDetails();
//       } else {
//         // showMessage(
//         //   t("withdrawal.withdrawalFailed"),
//         //   result.message || t("withdrawal.withdrawalFailedMessage"),
//         // );

//         //         showMessage(
//         //   t("withdrawal.withdrawalFailed"),
//         //   translateApiMessage(
//         //     result.message || t("withdrawal.withdrawalFailedMessage")
//         //   ),
//         // );

//         showMessage(
//           t("withdrawal.withdrawalFailed"),
//           translateApiMessage(
//             result.message || t("withdrawal.withdrawalFailedMessage"),
//           ),
//           false, // ❌ no redirect
//         );
//       }
//     } catch (err) {
//       console.error("Withdrawal error:", err);
//       showMessage(
//         t("withdrawal.networkErrorTitle"),
//         t("withdrawal.networkErrorMessage"),
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getLegalStatusClass = () => {
//     switch (legalStatus) {
//       case "APPROVED":
//         return "legal-banner success";
//       case "PENDING":
//         return "legal-banner warning";
//       case "REJECTED":
//         return "legal-banner error";
//       default:
//         return "legal-banner info";
//     }
//   };

//   const showVerificationPopup = () => {
//     if (!isLegalVerified && legalMessage) {
//       showMessage(t("withdrawal.verificationStatusTitle"), legalMessage);
//     }
//   };

//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="main-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div
//           className="sidebar-overlay d-lg-none"
//           onClick={handleCloseSidebar}
//         />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       <div className="main-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <main className="p-0">
//           <div className="withdrawal-page">
//             <div className="withdrawal-wrapper">
//               {/* Notice Banner */}
//               <div className="notice-banner">
//                 <div className="d-flex gap-2">
//                   <span className="notice-icon text-colors">
//                     {/* <i className="bi bi-info-circle"></i> */}

//                     {/* <i class="fa-solid fa-circle-info"></i> */}

//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 37 37"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M16.0174 0.111698C9.95169 0.962875 4.76199 4.62376 2.01012 10.0035C0.67138 12.6149 0.0763821 14.9618 0.0102712 17.9699C-0.0558396 20.4904 0.192076 22.2506 0.902768 24.4074C1.29943 25.5892 2.25804 27.589 2.93568 28.622C5.77844 32.9688 10.1996 35.8611 15.4389 36.8032C16.4801 36.9933 19.4138 37.0677 20.5707 36.9272C27.4711 36.1421 33.264 31.6631 35.8093 25.1677C36.206 24.143 36.5778 22.8042 36.801 21.5564C36.991 20.5152 37.0654 17.5815 36.9249 16.4246C36.2969 10.9126 33.2558 5.97077 28.6197 2.93794C27.6446 2.30162 25.6117 1.30996 24.5291 0.94635C23.3805 0.557949 22.1326 0.268711 20.9426 0.111698C19.7609 -0.0370483 17.133 -0.0370483 16.0174 0.111698ZM19.3229 8.83833C19.4799 8.91271 19.7278 9.10278 19.8766 9.25979C20.4137 9.82173 20.3972 9.61513 20.3972 15.375V20.6061L20.1576 21.0193C19.3808 22.3745 17.5627 22.3415 16.8024 20.9697L16.5545 20.5234V15.3998C16.5545 9.74736 16.538 9.8961 17.0751 9.30937C17.6949 8.62347 18.5461 8.44167 19.3229 8.83833ZM19.2898 24.4074C20.8104 25.0355 21.141 27.0106 19.9179 28.0849C19.546 28.4154 18.9345 28.6633 18.4965 28.6633C17.2569 28.6633 16.1248 27.3907 16.3066 26.2007C16.4719 25.0685 17.3644 24.2835 18.4717 24.2835C18.761 24.2835 19.1328 24.3413 19.2898 24.4074Z"
//                         fill="#EC5D80"
//                       />
//                     </svg>
//                   </span>
//                   <p className="text-colors" style={{ fontSize: "13px" }}>
//                     {t("withdrawal.noticeMessage")}
//                   </p>
//                 </div>

//                 <div className="d-flex gap-2">
//                   <span className="notice-icon text-colors">
//                     {/* <i className="bi bi-info-circle"></i> */}

//                     {/* <i class="fa-solid fa-circle-info"></i> */}
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 37 37"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M16.0174 0.111698C9.95169 0.962875 4.76199 4.62376 2.01012 10.0035C0.67138 12.6149 0.0763821 14.9618 0.0102712 17.9699C-0.0558396 20.4904 0.192076 22.2506 0.902768 24.4074C1.29943 25.5892 2.25804 27.589 2.93568 28.622C5.77844 32.9688 10.1996 35.8611 15.4389 36.8032C16.4801 36.9933 19.4138 37.0677 20.5707 36.9272C27.4711 36.1421 33.264 31.6631 35.8093 25.1677C36.206 24.143 36.5778 22.8042 36.801 21.5564C36.991 20.5152 37.0654 17.5815 36.9249 16.4246C36.2969 10.9126 33.2558 5.97077 28.6197 2.93794C27.6446 2.30162 25.6117 1.30996 24.5291 0.94635C23.3805 0.557949 22.1326 0.268711 20.9426 0.111698C19.7609 -0.0370483 17.133 -0.0370483 16.0174 0.111698ZM19.3229 8.83833C19.4799 8.91271 19.7278 9.10278 19.8766 9.25979C20.4137 9.82173 20.3972 9.61513 20.3972 15.375V20.6061L20.1576 21.0193C19.3808 22.3745 17.5627 22.3415 16.8024 20.9697L16.5545 20.5234V15.3998C16.5545 9.74736 16.538 9.8961 17.0751 9.30937C17.6949 8.62347 18.5461 8.44167 19.3229 8.83833ZM19.2898 24.4074C20.8104 25.0355 21.141 27.0106 19.9179 28.0849C19.546 28.4154 18.9345 28.6633 18.4965 28.6633C17.2569 28.6633 16.1248 27.3907 16.3066 26.2007C16.4719 25.0685 17.3644 24.2835 18.4717 24.2835C18.761 24.2835 19.1328 24.3413 19.2898 24.4074Z"
//                         fill="#EC5D80"
//                       />
//                     </svg>
//                   </span>
//                   <p className="text-colors" style={{ fontSize: "13px" }}>
//                     {t("withdrawal.noticeMessage2")}
//                   </p>
//                 </div>

//                 <div>
//                   {!legalLoading && legalMessage && (
//                     <div className={`${getLegalStatusClass()} d-flex gap-2`}>
//                       <span className="notice-icon text-colors">
//                         {/* <i
//                           className={
//                             legalStatus === "APPROVED"
//                               ? "bi bi-check-circle-fill"
//                               : "fa-solid fa-circle-info"
//                           }
//                         ></i> */}

//                         {legalStatus === "APPROVED" ? (
//                           <svg
//                             width="20"
//                             height="22"
//                             viewBox="0 0 27 26"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               d="M9.06119 0.101879C8.90057 0.159241 8.70554 0.251019 8.62524 0.302645C8.40726 0.446047 8.05736 0.887732 7.87954 1.23764C7.7304 1.52445 7.37475 2.55696 7.28298 2.94701C7.26003 3.03879 7.15678 3.30266 7.05927 3.52637L6.86997 3.93937L6.56596 3.97952C6.39387 4.0082 5.80305 4.02541 5.25238 4.01968C3.74377 4.01394 3.14721 4.16882 2.64816 4.69654C2.07454 5.30457 2.01718 6.14206 2.47034 7.46137C2.79156 8.39636 2.85466 8.6086 2.92923 9.04455C2.96938 9.28547 2.96365 9.29694 2.68831 9.55507C2.53917 9.69847 2.26957 9.91071 2.09749 10.0254C1.9254 10.1402 1.77053 10.2434 1.75332 10.2606C1.73611 10.2778 1.58123 10.3868 1.40915 10.5073C0.428266 11.1784 -0.047835 11.9298 0.00379042 12.7329C0.0324712 13.0943 0.238973 13.6449 0.42253 13.8228C0.474155 13.8801 0.663449 14.0694 0.835533 14.2415C1.00188 14.4193 1.16249 14.5627 1.1797 14.5627C1.20265 14.5627 1.28869 14.6258 1.37473 14.7004C1.46651 14.775 1.67875 14.9241 1.85083 15.0274C2.29252 15.3027 2.90055 15.8247 2.93497 15.9738C2.96938 16.1115 2.76862 17.0063 2.64242 17.2817C2.53917 17.5054 2.33841 18.1019 2.30399 18.2912C2.28678 18.3715 2.24663 18.5895 2.21221 18.7788C2.03439 19.6794 2.40724 20.5169 3.14721 20.8897C3.61183 21.1249 4.21413 21.2109 5.37284 21.2052C5.92351 21.1995 6.47991 21.2167 6.61758 21.2396C6.84129 21.2798 6.87571 21.3085 7.02485 21.6125C7.18546 21.928 7.24856 22.1058 7.4608 22.8515C7.69598 23.6775 8.05162 24.3945 8.3499 24.6584C8.65965 24.9337 8.72275 24.9796 8.9522 25.0886C9.64054 25.427 10.9656 25.0025 11.9465 24.1249C12.3136 23.798 12.9675 23.3964 13.1511 23.3849C13.3289 23.3677 13.8337 23.6603 14.4417 24.1306C15.1473 24.6756 15.5316 24.9108 16.0364 25.1001C16.3518 25.2205 16.4723 25.2377 16.8222 25.2148C17.2983 25.1804 17.7572 24.9624 18.0153 24.6412C18.1014 24.5379 18.2046 24.4117 18.2448 24.3601C18.4685 24.0848 18.8241 23.1727 19.0536 22.2836C19.1052 22.0943 19.2142 21.796 19.306 21.6125C19.4723 21.2912 19.4781 21.2855 19.7763 21.2454C19.9427 21.2167 20.5048 21.1995 21.0268 21.2052C22.8624 21.2109 23.5851 20.9356 23.9924 20.0694C24.1129 19.8113 24.1415 19.6622 24.1473 19.2664C24.153 18.9968 24.1358 18.687 24.1129 18.5723C24.0727 18.3715 23.7744 17.4538 23.5851 16.9318C23.5335 16.7998 23.4819 16.6048 23.4647 16.5016C23.4475 16.3983 23.4188 16.232 23.4016 16.1344C23.3729 15.9796 23.4016 15.9222 23.5679 15.7559C23.7458 15.5723 24.3022 15.1364 24.5316 14.9929C25.1454 14.6144 25.7247 14.0981 26.0058 13.6908C26.2008 13.404 26.3614 12.9222 26.3614 12.6124C26.3614 12.3543 26.2066 11.8151 26.0976 11.6889C26.0517 11.643 26.0173 11.5799 26.0173 11.557C26.0173 11.3849 25.283 10.7425 24.4685 10.1918C24.1358 9.96807 23.7572 9.67553 23.6196 9.53786C23.3786 9.29694 23.3729 9.29121 23.4131 8.98719C23.436 8.82084 23.5393 8.42505 23.6482 8.10956C24.0899 6.79598 24.1415 6.58948 24.1415 6.01586C24.1473 5.36767 24.0383 5.0866 23.6482 4.68507C23.132 4.16308 22.719 4.05409 21.1702 4.03115C20.5106 4.02541 19.8566 4.00247 19.719 3.97952C19.4895 3.94511 19.4666 3.92216 19.3117 3.61814C19.2199 3.44032 19.0536 2.96996 18.9331 2.57416C18.7438 1.93172 18.6176 1.60475 18.3538 1.05408C18.2104 0.761536 17.8031 0.354269 17.4876 0.199392C16.587 -0.248028 15.7209 0.0387802 14.1434 1.30647C13.9713 1.44414 13.6788 1.6277 13.4952 1.71947C13.2027 1.85714 13.1396 1.86862 13.0077 1.80552C12.6061 1.6277 12.2161 1.38104 11.935 1.12292C11.74 0.939358 11.1205 0.509146 11.0574 0.509146C11.023 0.509146 10.9885 0.4862 10.9771 0.463257C10.9484 0.388685 10.3461 0.119087 10.065 0.0559883C9.6979 -0.0300541 9.39388 -0.0185814 9.06119 0.101879Z"
//                               fill="#49ADF4"
//                             />
//                             <path
//                               d="M16.513 10.5492C16.4442 10.5779 15.4117 11.3351 14.2128 12.2299L12.0388 13.8647L11.0694 12.8953C10.536 12.3618 10.0197 11.8857 9.92219 11.8399C9.38873 11.5875 8.74628 11.8972 8.66024 12.4536C8.57419 12.9527 8.61435 13.01 9.94514 14.358C10.6335 15.0464 11.2931 15.6831 11.4136 15.7749C11.6947 15.9814 12.1191 16.0043 12.4059 15.8265C12.8075 15.5856 17.4021 12.098 17.5398 11.9316C17.7635 11.6678 17.7979 11.3523 17.6316 11.0253C17.5628 10.8762 17.4308 10.7041 17.3448 10.6467C17.1727 10.5205 16.7081 10.4632 16.513 10.5492Z"
//                               fill="white"
//                             />
//                           </svg>
//                         ) : (
//                           <i className="fa-solid fa-circle-info"></i>
//                         )}
//                       </span>
//                       <p className="notice-text mt-1 ms-0">{legalMessage}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Credit Badge */}
//               {/* <div className="credit-badge">
//                 {t("withdrawal.credit")}{" "}
//                 {formatNumber(credit, i18n.language)} {t("thb")}
//               </div> */}

//               {/* Credit Badge - Without Decimal Points */}
//               <div className="credit-badge">
//                 {t("withdrawal.credit")}{" "}
//                 {formatWholeNumber(credit, i18n.language)} {t("thb")}
//               </div>

//               {/* Form wrapper */}
//               <div style={{ position: "relative" }}>
//                 {/* Requested Amount */}
//                 <div
//                   className="form-field mt-0"
//                   onClick={() => {
//                     if (!isLegalVerified) showVerificationPopup();
//                   }}
//                   style={{ cursor: !isLegalVerified ? "pointer" : "default" }}
//                 >
//                   <label className="field-label">
//                     {t("withdrawal.requestedAmount")}
//                   </label>
//                   <input
//                     type="text"
//                     className="field-input text-white mt-0"
//                     value={requestedAmount}
//                     placeholder={t("withdrawal.amountPlaceholder")}
//                     onChange={handleAmountChange}
//                     // onBlur={() => {
//                     //   if (requestedAmount) {
//                     //     setRequestedAmount(
//                     //       parseFloat(requestedAmount).toFixed(2)
//                     //     );
//                     //   }
//                     // }}

//                     onBlur={() => {
//                       if (requestedAmount) {
//                         const value = Math.floor(
//                           parseFloat(requestedAmount) || 0,
//                         );
//                         setRequestedAmount(value.toFixed(2)); // ✅ always .00
//                       }
//                     }}
//                     inputMode="decimal"
//                     disabled={!isLegalVerified}
//                     onClick={() => {
//                       if (!isLegalVerified) showVerificationPopup();
//                     }}
//                   />
//                   <span className="field-hint">
//                     {t("withdrawal.feeHint", { fee: platformFeePercent })}
//                   </span>
//                 </div>

//                 {/* Bank Details Section */}
//                 <div
//                   style={{
//                     position: "relative",
//                     minHeight: "200px",
//                     background: "#f9ced921",
//                     backdropFilter: "blur(1px)",
//                     WebkitBackdropFilter: "blur(12px)",
//                     borderRadius: "10px",
//                     padding: "15px",
//                   }}
//                 >
//                   {!isLegalVerified && (
//                     <div
//                       onClick={showVerificationPopup}
//                       style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: "rgba(255,255,255,0)",
//                         backdropFilter: "blur(0px)",
//                         WebkitBackdropFilter: "blur(0px)",
//                         zIndex: 9999,
//                         borderRadius: "8px",
//                         cursor: "pointer",
//                       }}
//                     />
//                   )}

//                   <div className="section-title">
//                     {t("withdrawal.bankDetailsTitle")}{" "}
//                     <span style={{ fontSize: "12px" }}>
//                       {t("withdrawal.nonEditableNote")}
//                     </span>
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">
//                       {t("withdrawal.enterName")}
//                     </label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.name}
//                       disabled={true}
//                       placeholder={t("withdrawal.namePlaceholder")}
//                     />
//                     <span className="field-hint">
//                       {t("withdrawal.nameHint")}
//                     </span>
//                   </div>

//                   {/* ✅ BANK NAME – now a disabled input showing the translated name */}
//                   <div className="form-field">
//                     <label className="field-label">
//                       {t("withdrawal.chooseBank")}
//                     </label>
//                     <input
//                       type="text"
//                       className="field-input text-overflow text-white"
//                       value={translatedBankName}
//                       disabled={true}
//                       placeholder=""
//                     />
//                   </div>

//                   <div className="form-field">
//                     <label className="field-label">
//                       {t("withdrawal.bankAccountNumber")}
//                     </label>
//                     <input
//                       type="text"
//                       className="field-input text-white"
//                       value={bankDetails.accountNumber}
//                       disabled={true}
//                       placeholder=""
//                     />
//                   </div>
//                 </div>

//                 {/* Summary Table */}
//                 <div className="summary-table">
//                   <div className="summary-row">
//                     <span className="summary-label">
//                       {t("withdrawal.requestedAmountLabel")}
//                     </span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(parsedAmount, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row">
//                     <span className="summary-label">
//                       {/* {t("withdrawal.legalfeeLabel", { fee: platformFeePercent })} */}

//                       {t("withdrawal.taxFeeLabel", { fee: platformFeePercent })}
//                     </span>
//                     <span className="summary-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(platformFee, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                   <div className="summary-row net-row">
//                     <span className="summary-label net-label">
//                       {t("withdrawal.netAmountLabel")}
//                     </span>
//                     <span className="summary-value net-value">
//                       {parsedAmount > 0
//                         ? `${formatNumber(netAmount, i18n.language)} ${t("thb")}`
//                         : "—"}
//                     </span>
//                   </div>
//                 </div>

//                 <button
//                   className="submit-btn"
//                   onClick={handleSubmit}
//                   disabled={loading || !isLegalVerified}
//                 >
//                   {loading
//                     ? t("withdrawal.submitting")
//                     : t("withdrawal.submit")}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Message Modal Popup */}
//       <Modal
//         show={showMessageModal}
//         onHide={() => setShowMessageModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>{modalTitle}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="mb-0">{modalMessage}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           {/* <Button
//             variant="primary"
//             onClick={() => setShowMessageModal(false)}
//             style={{ backgroundColor: "#e9527a", border: "none" }}
//           >
//             {t("withdrawal.ok")}
//           </Button> */}

//           {/* <Button
//             variant="primary"
//             onClick={() => {
//               setShowMessageModal(false);
//               navigate("/withdrawalhistory");
//             }}
//             style={{ backgroundColor: "#e9527a", border: "none" }}
//           >
//             {t("withdrawal.ok")}
//           </Button> */}

//           <Button
//             variant="primary"
//             onClick={() => {
//               setShowMessageModal(false);

//               // ✅ Redirect only on success
//               if (shouldRedirect) {
//                 navigate("/withdrawalhistory");
//               }
//             }}
//             style={{ backgroundColor: "#e9527a", border: "none" }}
//           >
//             {t("withdrawal.ok")}
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Auto-fill Credit Modal */}
//       <Modal
//         show={showCreditModal}
//         onHide={() => setShowCreditModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title style={{ color: "#e9527a" }}>
//             <i className="bi bi-exclamation-triangle-fill me-2"></i>

//             {modalTitle ||
//               (i18n.language === "th"
//                 ? "เครดิตไม่เพียงพอ"
//                 : "Insufficient Credit")}
//           </Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <div className="text-center mb-3">
//             <div className="mb-3">
//               <i
//                 className="bi bi-wallet2"
//                 style={{ fontSize: "48px", color: "#e9527a" }}
//               ></i>
//             </div>

//             <p className="mb-2">
//               {modalMessage || t("withdrawal.insufficientCreditMessage")}
//             </p>

//             <div className="d-flex justify-content-center gap-4 my-3">
//               <div className="text-center">
//                 <small className="text-muted d-block">
//                   {t("withdrawal.requestedAmountLabel")}
//                 </small>

//                 <strong className="text-danger">
//                   {formatNumber(excessAmount, i18n.language)} {t("thb")}
//                 </strong>
//               </div>

//               <div className="text-center">
//                 <small className="text-muted d-block">
//                   {t("withdrawal.credit")}
//                 </small>

//                 <strong className="text-success">
//                   {formatWholeNumber(credit, i18n.language)} {t("thb")}
//                 </strong>
//               </div>
//             </div>

//             {/* Minimum amount message */}
//             {excessAmount > 0 && excessAmount < 500 ? (
//               <p className="text-danger fw-bold" style={{ fontSize: "14px" }}>
//                 {i18n.language === "th"
//                   ? "กรุณากรอกขั้นต่ำ 500 บาท"
//                   : "Please enter minimum 500 THB"}
//               </p>
//             ) : (
//               <p className="text-muted" style={{ fontSize: "14px" }}>
//                 {i18n.language === "th"
//                   ? "คุณต้องการใช้จำนวนเครดิตที่มีอยู่ทั้งหมดหรือไม่?"
//                   : "Would you like to use your full available credit?"}
//               </p>
//             )}
//           </div>
//         </Modal.Body>

//         <Modal.Footer className="justify-content-center">
//           {/* Show button only when credit insufficient */}
//           {!(excessAmount > 0 && excessAmount < 500) && (
//             <Button
//               variant="primary"
//               onClick={handleAutoFillCredit}
//               style={{ backgroundColor: "#e9527a", border: "none" }}
//               className="px-4 w-50"
//             >
//               <i className="bi bi-check-lg me-1"></i>

//               {i18n.language === "th" ? "ใช่, เติมเต็ม" : "Yes, Auto Fill"}
//             </Button>
//           )}
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }










import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../css/Withdrawal.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Bank keys used for translations only (no longer needed for select)
const BANKS = [
  "Bangkok_Bank",
  "Kasikorn_Bank",
  "Siam_Commercial_Bank",
  "Krung_Thai_Bank",
  "Bank_of_Ayudhya",
  "TMBThanachart_Bank",
];

// Helper: format number with locale
const formatNumber = (value, locale) => {
  if (value === null || value === undefined || isNaN(value)) return "—";
  return value.toLocaleString(locale === "th" ? "th-TH" : "en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

// Format number as whole number (no decimals)
const formatWholeNumber = (value, locale) => {
  if (value === null || value === undefined || isNaN(value)) return "—";

  return Math.floor(value).toLocaleString(locale === "th" ? "th-TH" : "en-US");
};

// --------------------------------------------------
// Mapping from English bank name → i18n key
// Add all banks your backend might return
// --------------------------------------------------
const ENGLISH_BANK_TO_KEY = {
  "Bangkok Bank": "Bangkok_Bank",
  "Kasikorn Bank": "Kasikorn_Bank",
  "Siam Commercial Bank": "Siam_Commercial_Bank",
  SCB: "SCB",
  "Krung Thai Bank": "Krung_Thai_Bank",
  "Krungthai Bank": "Krungthai_Bank",
  "Bank of Ayudhya": "Bank_of_Ayudhya",
  Krungsri: "Krungsri",
  "Thanachart Bank": "Thanachart_Bank",
  "TMB Bank": "TMB_Bank",
  "TMBThanachart Bank": "TMBThanachart_Bank",
  ttb: "ttb",
  "CIMB Thai Bank": "CIMB_Thai_Bank",
  "Standard Chartered Bank": "Standard_Chartered_Bank",
  "Hongkong and Shanghai Banking Corporation":
    "Hongkong_and_Shanghai_Banking_Corporation",
  HSBC: "HSBC",
};

export default function Withdrawal() {
  const { t, i18n } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [credit, setCredit] = useState(0);
  const [requestedAmount, setRequestedAmount] = useState("");
  const navigate = useNavigate();

  const [bankDetails, setBankDetails] = useState({
    name: "",
    bank: "", // English name from backend
    accountNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [platformFeePercent, setPlatformFeePercent] = useState(3);

  const [legalStatus, setLegalStatus] = useState(null);
  const [legalMessageOriginal, setLegalMessageOriginal] = useState("");
  const [legalMessage, setLegalMessage] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [isLegalVerified, setIsLegalVerified] = useState(false);
  const [legalLoading, setLegalLoading] = useState(true);

  const [showMessageModal, setShowMessageModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  // Auto-fill credit modal state
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [excessAmount, setExcessAmount] = useState(0);

  // ✅ NEW: Track if user has typed 3+ digits
  const [hasTypedThreeDigits, setHasTypedThreeDigits] = useState(false);

  const translateApiMessage = (message) => {
    if (i18n.language !== "th") return message;

    const translations = {
      "Minimum Withdrawable Amount Is 500.00 Only":
        "จำนวนเงินถอนขั้นต่ำคือ 500.00 บาทเท่านั้น",

      "Withdrawal request submitted successfully": "ส่งคำขอถอนเงินสำเร็จแล้ว",

      "Insufficient balance": "ยอดเงินคงเหลือไม่เพียงพอ",
    };

    return translations[message] || message;
  };
  // Translate legal messages from API
  const translateLegalMessage = (message, status) => {
    if (i18n.language !== "th") return message;
    const translations = {
      "Your identity verification is complete.":
        "การยืนยันตัวตนของคุณเสร็จสมบูรณ์แล้ว",
      "Your identity verification is pending.":
        "การยืนยันตัวตนของคุณอยู่ระหว่างดำเนินการ",
      "Your identity verification has been rejected.":
        "การยืนยันตัวตนของคุณถูกปฏิเสธ",
      "Please complete your legal details.":
        "กรุณากรอกรายละเอียดทางกฎหมายของคุณ",
      "Your legal details are under review.":
        "รายละเอียดทางกฎหมายของคุณอยู่ระหว่างการตรวจสอบ",
      "Your legal details have been approved.":
        "รายละเอียดทางกฎหมายของคุณได้รับการอนุมัติแล้ว",
      "Your legal details have been rejected.":
        "รายละเอียดทางกฎหมายของคุณถูกปฏิเสธ",
    };
    if (translations[message]) return translations[message];
    switch (status) {
      case "APPROVED":
        return "รายละเอียดทางกฎหมายของคุณได้รับการอนุมัติแล้ว";
      case "PENDING":
        return "รายละเอียดทางกฎหมายของคุณอยู่ระหว่างการตรวจสอบ";
      case "REJECTED":
        return "รายละเอียดทางกฎหมายของคุณถูกปฏิเสธ";
      default:
        return message;
    }
  };

  // Re‑translate when language changes
  useEffect(() => {
    if (legalMessageOriginal) {
      setLegalMessage(translateLegalMessage(legalMessageOriginal, legalStatus));
    }
  }, [i18n.language]);

  useEffect(() => {
    fetchCustomerLegalDetails();
    fetchLegalVerificationStatus();
  }, [i18n.language]);

  // const showMessage = (title, message) => {
  //   setModalTitle(title);
  //   setModalMessage(message);
  //   setShowMessageModal(true);
  // };

  const showMessage = (title, message, redirect = false) => {
    setModalTitle(title);
    setModalMessage(message);
    setShouldRedirect(redirect);
    setShowMessageModal(true);
  };

  const fetchCustomerLegalDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch(
        "https://sagarxo.app/web-api/customer/legal-details",
        {
          method: "GET",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        },
      );

      const result = await response.json();

      if (result.success && result.data) {
        const { legal_details, platform_fees_percentage, customer_credit } =
          result.data;

        setCredit(parseFloat(customer_credit) || 0);
        if (platform_fees_percentage) {
          setPlatformFeePercent(parseFloat(platform_fees_percentage));
        }
        if (legal_details) {
          setBankDetails({
            name: legal_details.legal_name || "",
            bank: legal_details.bank_name || "", // still English
            accountNumber: legal_details.bank_account_no || "",
          });
        }
      }
    } catch (err) {
      console.error("Error fetching customer legal details:", err);
      showMessage(
        t("withdrawal.errorLoadDetails"),
        t("withdrawal.errorLoadDetails"),
      );
    }
  };

  const fetchLegalVerificationStatus = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLegalMessage(t("withdrawal.authErrorMessage"));
        setLegalLoading(false);
        return;
      }

      const language = localStorage.getItem("language");
      const response = await fetch(
        `https://sagarxo.app/web-api/customer/legal-details-verification-status?language=${language}`,
        {
          method: "GET",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        },
      );

      const result = await response.json();

      if (result.success && result.data) {
        setLegalStatus(result.data.status);
        const original = result.data.message;
        setLegalMessageOriginal(original);
        setLegalMessage(translateLegalMessage(original, result.data.status));
        setIsLegalVerified(result.data.is_legal_details_verified === true);
      } else {
        setLegalMessage(result.message || t("withdrawal.errorNetwork"));
        setIsLegalVerified(false);
      }
    } catch (err) {
      console.error("Error fetching legal verification status:", err);
      setLegalMessage(t("withdrawal.errorNetwork"));
      setIsLegalVerified(false);
    } finally {
      setLegalLoading(false);
    }
  };

  const parsedAmount = parseFloat(requestedAmount) || 0;
  const platformFee = parseFloat(
    ((parsedAmount * platformFeePercent) / 100).toFixed(2),
  );
  const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

  // Translate the bank name using the mapping
  const translatedBankName = useMemo(() => {
    if (!bankDetails.bank) return "";
    const key = ENGLISH_BANK_TO_KEY[bankDetails.bank];
    return key ? t(`bankNames.${key}`) : bankDetails.bank; // fallback to raw English
  }, [bankDetails.bank, t]);

  const MIN_WITHDRAWAL = 500;

  const handleAmountChange = (e) => {
    let value = e.target.value;

    // Allow only numbers + decimal
    if (!/^\d*\.?\d*$/.test(value)) return;

    let numValue = parseFloat(value) || 0;

    // Always round down
    numValue = Math.floor(numValue);

    setRequestedAmount(value);

    // ✅ Track if user has typed 3+ digits (but DON'T show popup here)
    const digitsOnly = value.replace(/\D/g, '');
    setHasTypedThreeDigits(digitsOnly.length >= 3);

    // ✅ Insufficient credit check (optional - can also move to blur if needed)
    if (digitsOnly.length >= 3 && numValue > credit && credit > 0) {
      setExcessAmount(numValue);
      setModalTitle(
        i18n.language === "th" ? "เครดิตไม่เพียงพอ" : "Insufficient Credit"
      );
      setModalMessage(
        i18n.language === "th"
          ? "เครดิตของคุณไม่เพียงพอ"
          : "Your credit is insufficient"
      );
      setShowCreditModal(true);
    }
  };

  // ✅ NEW: Handle blur (click outside input or tab away)
  const handleAmountBlur = () => {
    const numValue = parseFloat(requestedAmount) || 0;
    const flooredValue = Math.floor(numValue);

    // Format to .00 on blur
    if (requestedAmount) {
      setRequestedAmount(flooredValue.toFixed(2));
    }

    // ✅ Show minimum withdrawal popup ONLY on blur, not while typing
    if (hasTypedThreeDigits && flooredValue > 0 && flooredValue < MIN_WITHDRAWAL) {
      setExcessAmount(flooredValue);
      setModalTitle(
        i18n.language === "th"
          ? "จำนวนเงินขั้นต่ำ"
          : "Minimum Withdrawal Amount"
      );
      setModalMessage(
        i18n.language === "th"
          ? "จำนวนเงินถอนขั้นต่ำคือ 250 บาท"
          : "Minimum withdrawable amount is 250 THB"
      );
      setShowCreditModal(true);
    }
  };

  // const handleAutoFillCredit = () => {
  //   setRequestedAmount(credit.toFixed(2));
  //   setShowCreditModal(false);
  // };

  const handleAutoFillCredit = () => {
    const value = Math.floor(credit);
    setRequestedAmount(value.toFixed(2)); // ✅ 1000.00
    setShowCreditModal(false);
  };

  const handleKeepEnteredAmount = () => {
    setShowCreditModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLegalVerified) {
      showMessage(
        t("withdrawal.verificationRequired"),
        t("withdrawal.verificationMessage"),
      );
      return;
    }

    if (!requestedAmount || parsedAmount <= 0) {
      showMessage(
        t("withdrawal.invalidAmount"),
        t("withdrawal.invalidAmountMessage"),
      );
      return;
    }
    if (parsedAmount > credit) {
      showMessage(
        t("withdrawal.insufficientCredit"),
        t("withdrawal.insufficientCreditMessage"),
      );
      return;
    }
    // if (!bankDetails.name.trim() || !bankDetails.accountNumber.trim()) {
    //   showMessage(
    //     t("withdrawal.missingBankDetails"),
    //     t("withdrawal.missingBankDetailsMessage"),
    //   );
    //   return;
    // }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        showMessage(
          t("withdrawal.authError"),
          t("withdrawal.authErrorMessage"),
        );
        return;
      }

      const response = await fetch(
        "https://sagarxo.app/web-api/customer/withdrawal",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            amount: String(parsedAmount),
          }),
        },
      );

      const result = await response.json();

      if (result.success) {
        // showMessage(
        //   t("withdrawal.withdrawalSuccess"),
        //   result.message || t("withdrawal.withdrawalSuccessMessage"),
        // );
        //         showMessage(
        //   t("withdrawal.withdrawalSuccess"),
        //   translateApiMessage(
        //     result.message || t("withdrawal.withdrawalSuccessMessage")
        //   ),
        // );

        showMessage(
          t("withdrawal.withdrawalSuccess"),
          translateApiMessage(
            result.message || t("withdrawal.withdrawalSuccessMessage"),
          ),
          true, // ✅ redirect only on success
        );
        setRequestedAmount("");
        fetchCustomerLegalDetails();
      } else {
        // showMessage(
        //   t("withdrawal.withdrawalFailed"),
        //   result.message || t("withdrawal.withdrawalFailedMessage"),
        // );

        //         showMessage(
        //   t("withdrawal.withdrawalFailed"),
        //   translateApiMessage(
        //     result.message || t("withdrawal.withdrawalFailedMessage")
        //   ),
        // );

        showMessage(
          t("withdrawal.withdrawalFailed"),
          translateApiMessage(
            result.message || t("withdrawal.withdrawalFailedMessage"),
          ),
          false, // ❌ no redirect
        );
      }
    } catch (err) {
      console.error("Withdrawal error:", err);
      showMessage(
        t("withdrawal.networkErrorTitle"),
        t("withdrawal.networkErrorMessage"),
      );
    } finally {
      setLoading(false);
    }
  };

  const getLegalStatusClass = () => {
    switch (legalStatus) {
      case "APPROVED":
        return "legal-banner success";
      case "PENDING":
        return "legal-banner warning";
      case "REJECTED":
        return "legal-banner error";
      default:
        return "legal-banner info";
    }
  };

  const showVerificationPopup = () => {
    if (!isLegalVerified && legalMessage) {
      showMessage(t("withdrawal.verificationStatusTitle"), legalMessage);
    }
  };

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="main-container">
      <button
        className="mobile-toggle d-none"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {isSidebarOpen && (
        <div
          className="sidebar-overlay d-lg-none"
          onClick={handleCloseSidebar}
        />
      )}

      <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

      <div className="main-wrapper">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="p-0">
          <div className="withdrawal-page">
            <div className="withdrawal-wrapper">
              {/* Notice Banner */}
              <div className="notice-banner">
                <div className="d-flex gap-2">
                  <span className="notice-icon text-colors">
                    {/* <i className="bi bi-info-circle"></i> */}

                    {/* <i class="fa-solid fa-circle-info"></i> */}

                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0174 0.111698C9.95169 0.962875 4.76199 4.62376 2.01012 10.0035C0.67138 12.6149 0.0763821 14.9618 0.0102712 17.9699C-0.0558396 20.4904 0.192076 22.2506 0.902768 24.4074C1.29943 25.5892 2.25804 27.589 2.93568 28.622C5.77844 32.9688 10.1996 35.8611 15.4389 36.8032C16.4801 36.9933 19.4138 37.0677 20.5707 36.9272C27.4711 36.1421 33.264 31.6631 35.8093 25.1677C36.206 24.143 36.5778 22.8042 36.801 21.5564C36.991 20.5152 37.0654 17.5815 36.9249 16.4246C36.2969 10.9126 33.2558 5.97077 28.6197 2.93794C27.6446 2.30162 25.6117 1.30996 24.5291 0.94635C23.3805 0.557949 22.1326 0.268711 20.9426 0.111698C19.7609 -0.0370483 17.133 -0.0370483 16.0174 0.111698ZM19.3229 8.83833C19.4799 8.91271 19.7278 9.10278 19.8766 9.25979C20.4137 9.82173 20.3972 9.61513 20.3972 15.375V20.6061L20.1576 21.0193C19.3808 22.3745 17.5627 22.3415 16.8024 20.9697L16.5545 20.5234V15.3998C16.5545 9.74736 16.538 9.8961 17.0751 9.30937C17.6949 8.62347 18.5461 8.44167 19.3229 8.83833ZM19.2898 24.4074C20.8104 25.0355 21.141 27.0106 19.9179 28.0849C19.546 28.4154 18.9345 28.6633 18.4965 28.6633C17.2569 28.6633 16.1248 27.3907 16.3066 26.2007C16.4719 25.0685 17.3644 24.2835 18.4717 24.2835C18.761 24.2835 19.1328 24.3413 19.2898 24.4074Z"
                        fill="#EC5D80"
                      />
                    </svg>
                  </span>
                  <p className="text-colors" style={{ fontSize: "13px" }}>
                    {t("withdrawal.noticeMessage")}
                  </p>
                </div>

                <div className="d-flex gap-2">
                  <span className="notice-icon text-colors">
                    {/* <i className="bi bi-info-circle"></i> */}

                    {/* <i class="fa-solid fa-circle-info"></i> */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0174 0.111698C9.95169 0.962875 4.76199 4.62376 2.01012 10.0035C0.67138 12.6149 0.0763821 14.9618 0.0102712 17.9699C-0.0558396 20.4904 0.192076 22.2506 0.902768 24.4074C1.29943 25.5892 2.25804 27.589 2.93568 28.622C5.77844 32.9688 10.1996 35.8611 15.4389 36.8032C16.4801 36.9933 19.4138 37.0677 20.5707 36.9272C27.4711 36.1421 33.264 31.6631 35.8093 25.1677C36.206 24.143 36.5778 22.8042 36.801 21.5564C36.991 20.5152 37.0654 17.5815 36.9249 16.4246C36.2969 10.9126 33.2558 5.97077 28.6197 2.93794C27.6446 2.30162 25.6117 1.30996 24.5291 0.94635C23.3805 0.557949 22.1326 0.268711 20.9426 0.111698C19.7609 -0.0370483 17.133 -0.0370483 16.0174 0.111698ZM19.3229 8.83833C19.4799 8.91271 19.7278 9.10278 19.8766 9.25979C20.4137 9.82173 20.3972 9.61513 20.3972 15.375V20.6061L20.1576 21.0193C19.3808 22.3745 17.5627 22.3415 16.8024 20.9697L16.5545 20.5234V15.3998C16.5545 9.74736 16.538 9.8961 17.0751 9.30937C17.6949 8.62347 18.5461 8.44167 19.3229 8.83833ZM19.2898 24.4074C20.8104 25.0355 21.141 27.0106 19.9179 28.0849C19.546 28.4154 18.9345 28.6633 18.4965 28.6633C17.2569 28.6633 16.1248 27.3907 16.3066 26.2007C16.4719 25.0685 17.3644 24.2835 18.4717 24.2835C18.761 24.2835 19.1328 24.3413 19.2898 24.4074Z"
                        fill="#EC5D80"
                      />
                    </svg>
                  </span>
                  <p className="text-colors" style={{ fontSize: "13px" }}>
                    {t("withdrawal.noticeMessage2")}
                  </p>
                </div>

                <div>
                  {!legalLoading && legalMessage && (
                    <div className={`${getLegalStatusClass()} d-flex gap-2`}>
                      <span className="notice-icon text-colors">
                        {/* <i
                          className={
                            legalStatus === "APPROVED"
                              ? "bi bi-check-circle-fill"
                              : "fa-solid fa-circle-info"
                          }
                        ></i> */}

                        {legalStatus === "APPROVED" ? (
                          <svg
                            width="20"
                            height="22"
                            viewBox="0 0 27 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.06119 0.101879C8.90057 0.159241 8.70554 0.251019 8.62524 0.302645C8.40726 0.446047 8.05736 0.887732 7.87954 1.23764C7.7304 1.52445 7.37475 2.55696 7.28298 2.94701C7.26003 3.03879 7.15678 3.30266 7.05927 3.52637L6.86997 3.93937L6.56596 3.97952C6.39387 4.0082 5.80305 4.02541 5.25238 4.01968C3.74377 4.01394 3.14721 4.16882 2.64816 4.69654C2.07454 5.30457 2.01718 6.14206 2.47034 7.46137C2.79156 8.39636 2.85466 8.6086 2.92923 9.04455C2.96938 9.28547 2.96365 9.29694 2.68831 9.55507C2.53917 9.69847 2.26957 9.91071 2.09749 10.0254C1.9254 10.1402 1.77053 10.2434 1.75332 10.2606C1.73611 10.2778 1.58123 10.3868 1.40915 10.5073C0.428266 11.1784 -0.047835 11.9298 0.00379042 12.7329C0.0324712 13.0943 0.238973 13.6449 0.42253 13.8228C0.474155 13.8801 0.663449 14.0694 0.835533 14.2415C1.00188 14.4193 1.16249 14.5627 1.1797 14.5627C1.20265 14.5627 1.28869 14.6258 1.37473 14.7004C1.46651 14.775 1.67875 14.9241 1.85083 15.0274C2.29252 15.3027 2.90055 15.8247 2.93497 15.9738C2.96938 16.1115 2.76862 17.0063 2.64242 17.2817C2.53917 17.5054 2.33841 18.1019 2.30399 18.2912C2.28678 18.3715 2.24663 18.5895 2.21221 18.7788C2.03439 19.6794 2.40724 20.5169 3.14721 20.8897C3.61183 21.1249 4.21413 21.2109 5.37284 21.2052C5.92351 21.1995 6.47991 21.2167 6.61758 21.2396C6.84129 21.2798 6.87571 21.3085 7.02485 21.6125C7.18546 21.928 7.24856 22.1058 7.4608 22.8515C7.69598 23.6775 8.05162 24.3945 8.3499 24.6584C8.65965 24.9337 8.72275 24.9796 8.9522 25.0886C9.64054 25.427 10.9656 25.0025 11.9465 24.1249C12.3136 23.798 12.9675 23.3964 13.1511 23.3849C13.3289 23.3677 13.8337 23.6603 14.4417 24.1306C15.1473 24.6756 15.5316 24.9108 16.0364 25.1001C16.3518 25.2205 16.4723 25.2377 16.8222 25.2148C17.2983 25.1804 17.7572 24.9624 18.0153 24.6412C18.1014 24.5379 18.2046 24.4117 18.2448 24.3601C18.4685 24.0848 18.8241 23.1727 19.0536 22.2836C19.1052 22.0943 19.2142 21.796 19.306 21.6125C19.4723 21.2912 19.4781 21.2855 19.7763 21.2454C19.9427 21.2167 20.5048 21.1995 21.0268 21.2052C22.8624 21.2109 23.5851 20.9356 23.9924 20.0694C24.1129 19.8113 24.1415 19.6622 24.1473 19.2664C24.153 18.9968 24.1358 18.687 24.1129 18.5723C24.0727 18.3715 23.7744 17.4538 23.5851 16.9318C23.5335 16.7998 23.4819 16.6048 23.4647 16.5016C23.4475 16.3983 23.4188 16.232 23.4016 16.1344C23.3729 15.9796 23.4016 15.9222 23.5679 15.7559C23.7458 15.5723 24.3022 15.1364 24.5316 14.9929C25.1454 14.6144 25.7247 14.0981 26.0058 13.6908C26.2008 13.404 26.3614 12.9222 26.3614 12.6124C26.3614 12.3543 26.2066 11.8151 26.0976 11.6889C26.0517 11.643 26.0173 11.5799 26.0173 11.557C26.0173 11.3849 25.283 10.7425 24.4685 10.1918C24.1358 9.96807 23.7572 9.67553 23.6196 9.53786C23.3786 9.29694 23.3729 9.29121 23.4131 8.98719C23.436 8.82084 23.5393 8.42505 23.6482 8.10956C24.0899 6.79598 24.1415 6.58948 24.1415 6.01586C24.1473 5.36767 24.0383 5.0866 23.6482 4.68507C23.132 4.16308 22.719 4.05409 21.1702 4.03115C20.5106 4.02541 19.8566 4.00247 19.719 3.97952C19.4895 3.94511 19.4666 3.92216 19.3117 3.61814C19.2199 3.44032 19.0536 2.96996 18.9331 2.57416C18.7438 1.93172 18.6176 1.60475 18.3538 1.05408C18.2104 0.761536 17.8031 0.354269 17.4876 0.199392C16.587 -0.248028 15.7209 0.0387802 14.1434 1.30647C13.9713 1.44414 13.6788 1.6277 13.4952 1.71947C13.2027 1.85714 13.1396 1.86862 13.0077 1.80552C12.6061 1.6277 12.2161 1.38104 11.935 1.12292C11.74 0.939358 11.1205 0.509146 11.0574 0.509146C11.023 0.509146 10.9885 0.4862 10.9771 0.463257C10.9484 0.388685 10.3461 0.119087 10.065 0.0559883C9.6979 -0.0300541 9.39388 -0.0185814 9.06119 0.101879Z"
                              fill="#49ADF4"
                            />
                            <path
                              d="M16.513 10.5492C16.4442 10.5779 15.4117 11.3351 14.2128 12.2299L12.0388 13.8647L11.0694 12.8953C10.536 12.3618 10.0197 11.8857 9.92219 11.8399C9.38873 11.5875 8.74628 11.8972 8.66024 12.4536C8.57419 12.9527 8.61435 13.01 9.94514 14.358C10.6335 15.0464 11.2931 15.6831 11.4136 15.7749C11.6947 15.9814 12.1191 16.0043 12.4059 15.8265C12.8075 15.5856 17.4021 12.098 17.5398 11.9316C17.7635 11.6678 17.7979 11.3523 17.6316 11.0253C17.5628 10.8762 17.4308 10.7041 17.3448 10.6467C17.1727 10.5205 16.7081 10.4632 16.513 10.5492Z"
                              fill="white"
                            />
                          </svg>
                        ) : (
                          <i className="fa-solid fa-circle-info"></i>
                        )}
                      </span>
                      <p className="notice-text mt-1 ms-0">{legalMessage}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Credit Badge */}
              {/* <div className="credit-badge">
                {t("withdrawal.credit")}{" "}
                {formatNumber(credit, i18n.language)} {t("thb")}
              </div> */}

              {/* Credit Badge - Without Decimal Points */}
              <div className="credit-badge">
                {t("withdrawal.credit")}{" "}
                {formatWholeNumber(credit, i18n.language)} {t("thb")}
              </div>

              {/* Form wrapper */}
              <div style={{ position: "relative" }}>
                {/* Requested Amount */}
                <div
                  className="form-field mt-0"
                  onClick={() => {
                    if (!isLegalVerified) showVerificationPopup();
                  }}
                  style={{ cursor: !isLegalVerified ? "pointer" : "default" }}
                >
                  <label className="field-label">
                    {t("withdrawal.requestedAmount")}
                  </label>
                  <input
                    type="text"
                    className="field-input text-white mt-0"
                    value={requestedAmount}
                    placeholder={t("withdrawal.amountPlaceholder")}
                    onChange={handleAmountChange}
                    onBlur={handleAmountBlur}
                    inputMode="decimal"
                    readOnly={!isLegalVerified}
                    onClick={() => {
                      if (!isLegalVerified) showVerificationPopup();
                    }}
                  />
                  <span className="field-hint">
                    {t("withdrawal.feeHint", { fee: platformFeePercent })}
                  </span>
                </div>

                {/* Bank Details Section */}
                <div
                  style={{
                    position: "relative",
                    minHeight: "150px",
                    background: "#f9ced921",
                    backdropFilter: "blur(1px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderRadius: "10px",
                    padding: "15px",
                  }}
                >
                  {!isLegalVerified && (
                    <div
                      onClick={showVerificationPopup}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(255,255,255,0)",
                        backdropFilter: "blur(0px)",
                        WebkitBackdropFilter: "blur(0px)",
                        zIndex: 9999,
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    />
                  )}

                  <div className="section-title">
                    {t("withdrawal.bankDetailsTitle")}{" "}
                    <span style={{ fontSize: "12px" }}>
                      {t("withdrawal.nonEditableNote")}
                    </span>
                  </div>

                  <div className="form-field">
                    <label className="field-label">
                      {t("withdrawal.enterName")}
                    </label>
                    <input
                      type="text"
                      className="field-input text-white"
                      value={bankDetails.name}
                      disabled={true}
                      placeholder={t("withdrawal.namePlaceholder")}
                    />
                    {/* <span className="field-hint">
                      {t("withdrawal.nameHint")}
                    </span> */}
                  </div>

                  {/* ✅ BANK NAME – now a disabled input showing the translated name */}
                  {/* <div className="form-field">
                    <label className="field-label">
                      {t("withdrawal.chooseBank")}
                    </label>
                    <input
                      type="text"
                      className="field-input text-overflow text-white"
                      value={translatedBankName}
                      disabled={true}
                      placeholder=""
                    />
                  </div> */}

                  {/* <div className="form-field">
                    <label className="field-label">
                      {t("withdrawal.bankAccountNumber")}
                    </label>
                    <input
                      type="text"
                      className="field-input text-white"
                      value={bankDetails.accountNumber}
                      disabled={true}
                      placeholder=""
                    />
                  </div> */}
                </div>

                {/* Summary Table */}
                <div className="summary-table">
                  <div className="summary-row">
                    <span className="summary-label">
                      {t("withdrawal.requestedAmountLabel")}
                    </span>
                    <span className="summary-value">
                      {parsedAmount > 0
                        ? `${formatNumber(parsedAmount, i18n.language)} ${t("thb")}`
                        : "—"}
                    </span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">
                      {/* {t("withdrawal.legalfeeLabel", { fee: platformFeePercent })} */}

                      {t("withdrawal.taxFeeLabel", { fee: platformFeePercent })}
                    </span>
                    <span className="summary-value">
                      {parsedAmount > 0
                        ? `${formatNumber(platformFee, i18n.language)} ${t("thb")}`
                        : "—"}
                    </span>
                  </div>
                  <div className="summary-row net-row">
                    <span className="summary-label net-label">
                      {t("withdrawal.netAmountLabel")}
                    </span>
                    <span className="summary-value net-value">
                      {parsedAmount > 0
                        ? `${formatNumber(netAmount, i18n.language)} ${t("thb")}`
                        : "—"}
                    </span>
                  </div>
                </div>

                <button
                  className="submit-btn"
                  onClick={handleSubmit}
                  disabled={loading || !isLegalVerified}
                >
                  {loading
                    ? t("withdrawal.submitting")
                    : t("withdrawal.submit")}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Message Modal Popup */}
      <Modal
        show={showMessageModal}
        onHide={() => setShowMessageModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">{modalMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button
            variant="primary"
            onClick={() => setShowMessageModal(false)}
            style={{ backgroundColor: "#e9527a", border: "none" }}
          >
            {t("withdrawal.ok")}
          </Button> */}

          {/* <Button
            variant="primary"
            onClick={() => {
              setShowMessageModal(false);
              navigate("/withdrawalhistory");
            }}
            style={{ backgroundColor: "#e9527a", border: "none" }}
          >
            {t("withdrawal.ok")}
          </Button> */}

          <Button
            variant="primary"
            onClick={() => {
              setShowMessageModal(false);

              // ✅ Redirect only on success
              if (shouldRedirect) {
                navigate("/withdrawalhistory");
              }
            }}
            style={{ backgroundColor: "#e9527a", border: "none" }}
          >
            {t("withdrawal.ok")}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Auto-fill Credit Modal */}
      <Modal
        show={showCreditModal}
        onHide={() => setShowCreditModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#e9527a" }}>
            <i className="bi bi-exclamation-triangle-fill me-2"></i>

            {modalTitle ||
              (i18n.language === "th"
                ? "เครดิตไม่เพียงพอ"
                : "Insufficient Credit")}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="text-center mb-3">
            <div className="mb-3">
              <i
                className="bi bi-wallet2"
                style={{ fontSize: "48px", color: "#e9527a" }}
              ></i>
            </div>

            <p className="mb-2">
              {modalMessage || t("withdrawal.insufficientCreditMessage")}
            </p>

            <div className="d-flex justify-content-center gap-4 my-3">
              <div className="text-center">
                <small className="text-muted d-block">
                  {t("withdrawal.requestedAmountLabel")}
                </small>

                <strong className="text-danger">
                  {formatNumber(excessAmount, i18n.language)} {t("thb")}
                </strong>
              </div>

              <div className="text-center">
                <small className="text-muted d-block">
                  {t("withdrawal.credit")}
                </small>

                <strong className="text-success">
                  {formatWholeNumber(credit, i18n.language)} {t("thb")}
                </strong>
              </div>
            </div>

            {/* Minimum amount message */}
            {excessAmount > 0 && excessAmount < 250 ? (
              <p className="text-danger fw-bold" style={{ fontSize: "14px" }}>
                {i18n.language === "th"
                  ? "กรุณากรอกขั้นต่ำ 250 บาท"
                  : "Please enter minimum 250 THB"}
              </p>
            ) : (
              <p className="text-muted" style={{ fontSize: "14px" }}>
                {i18n.language === "th"
                  ? "คุณต้องการใช้จำนวนเครดิตที่มีอยู่ทั้งหมดหรือไม่?"
                  : "Would you like to use your full available credit?"}
              </p>
            )}
          </div>
        </Modal.Body>

        <Modal.Footer className="justify-content-center">
          {/* Show button only when credit insufficient */}
          {!(excessAmount > 0 && excessAmount < 500) && (
            <Button
              variant="primary"
              onClick={handleAutoFillCredit}
              style={{ backgroundColor: "#e9527a", border: "none" }}
              className="px-4 w-50"
            >
              <i className="bi bi-check-lg me-1"></i>

              {i18n.language === "th" ? "ใช่, เติมเต็ม" : "Yes, Auto Fill"}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}