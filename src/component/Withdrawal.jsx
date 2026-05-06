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












import React, { useState, useEffect, useMemo  } from "react";
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

// --------------------------------------------------
// Mapping from English bank name → i18n key
// Add all banks your backend might return
// --------------------------------------------------
const ENGLISH_BANK_TO_KEY = {
  "Bangkok Bank": "Bangkok_Bank",
  "Kasikorn Bank": "Kasikorn_Bank",
  "Siam Commercial Bank": "Siam_Commercial_Bank",
  "SCB": "SCB",
  "Krung Thai Bank": "Krung_Thai_Bank",
  "Krungthai Bank": "Krungthai_Bank",
  "Bank of Ayudhya": "Bank_of_Ayudhya",
  "Krungsri": "Krungsri",
  "Thanachart Bank": "Thanachart_Bank",
  "TMB Bank": "TMB_Bank",
  "TMBThanachart Bank": "TMBThanachart_Bank",
  "ttb": "ttb",
  "CIMB Thai Bank": "CIMB_Thai_Bank",
  "Standard Chartered Bank": "Standard_Chartered_Bank",
  "Hongkong and Shanghai Banking Corporation": "Hongkong_and_Shanghai_Banking_Corporation",
  "HSBC": "HSBC",
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
  const [isLegalVerified, setIsLegalVerified] = useState(false);
  const [legalLoading, setLegalLoading] = useState(true);

  const [showMessageModal, setShowMessageModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  // Auto-fill credit modal state
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [excessAmount, setExcessAmount] = useState(0);

  // Translate legal messages from API
  const translateLegalMessage = (message, status) => {
    if (i18n.language !== "th") return message;
    const translations = {
      "Your identity verification is complete.": "การยืนยันตัวตนของคุณเสร็จสมบูรณ์แล้ว",
      "Your identity verification is pending.": "การยืนยันตัวตนของคุณอยู่ระหว่างดำเนินการ",
      "Your identity verification has been rejected.": "การยืนยันตัวตนของคุณถูกปฏิเสธ",
      "Please complete your legal details.": "กรุณากรอกรายละเอียดทางกฎหมายของคุณ",
      "Your legal details are under review.": "รายละเอียดทางกฎหมายของคุณอยู่ระหว่างการตรวจสอบ",
      "Your legal details have been approved.": "รายละเอียดทางกฎหมายของคุณได้รับการอนุมัติแล้ว",
      "Your legal details have been rejected.": "รายละเอียดทางกฎหมายของคุณถูกปฏิเสธ",
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
  }, []);

  const showMessage = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
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
        }
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
        t("withdrawal.errorLoadDetails")
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

      const response = await fetch(
        "https://sagarxo.app/web-api/customer/legal-details-verification-status",
        {
          method: "GET",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
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
    ((parsedAmount * platformFeePercent) / 100).toFixed(2)
  );
  const netAmount = parseFloat((parsedAmount - platformFee).toFixed(2));

  // Translate the bank name using the mapping
  const translatedBankName = useMemo(() => {
    if (!bankDetails.bank) return "";
    const key = ENGLISH_BANK_TO_KEY[bankDetails.bank];
    return key ? t(`bankNames.${key}`) : bankDetails.bank; // fallback to raw English
  }, [bankDetails.bank, t]);

  // Amount change with auto-fill modal
  // const handleAmountChange = (e) => {
  //   const value = e.target.value;

  //   if (/^\d*\.?\d*$/.test(value)) {
  //     const numValue = parseFloat(value) || 0;

  //     if (numValue > credit && credit > 0) {
  //       setExcessAmount(numValue);
  //       setShowCreditModal(true);
  //       setRequestedAmount(value); // keep entered value for modal display
  //     } else {
  //       setRequestedAmount(value);
  //     }
  //   }
  // };



  const handleAmountChange = (e) => {
  let value = e.target.value;

  // Allow numbers + optional decimal input (user can type 194.50)
  if (!/^\d*\.?\d*$/.test(value)) return;

  let numValue = parseFloat(value) || 0;

  // 🔥 ROUND DOWN ALWAYS
  numValue = Math.floor(numValue);

  if (numValue > credit && credit > 0) {
    setExcessAmount(numValue);
    setShowCreditModal(true);
    setRequestedAmount(value);
  } else {
    setRequestedAmount(value);
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
        t("withdrawal.verificationMessage")
      );
      return;
    }

    if (!requestedAmount || parsedAmount <= 0) {
      showMessage(
        t("withdrawal.invalidAmount"),
        t("withdrawal.invalidAmountMessage")
      );
      return;
    }
    if (parsedAmount > credit) {
      showMessage(
        t("withdrawal.insufficientCredit"),
        t("withdrawal.insufficientCreditMessage")
      );
      return;
    }
    if (!bankDetails.name.trim() || !bankDetails.accountNumber.trim()) {
      showMessage(
        t("withdrawal.missingBankDetails"),
        t("withdrawal.missingBankDetailsMessage")
      );
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        showMessage(
          t("withdrawal.authError"),
          t("withdrawal.authErrorMessage")
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
        }
      );

      const result = await response.json();

      if (result.success) {
        showMessage(
          t("withdrawal.withdrawalSuccess"),
          result.message || t("withdrawal.withdrawalSuccessMessage")
        );
        setRequestedAmount("");
        fetchCustomerLegalDetails();
      } else {
        showMessage(
          t("withdrawal.withdrawalFailed"),
          result.message || t("withdrawal.withdrawalFailedMessage")
        );
      }
    } catch (err) {
      console.error("Withdrawal error:", err);
      showMessage(
        t("withdrawal.networkErrorTitle"),
        t("withdrawal.networkErrorMessage")
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

                    <i class="fa-solid fa-circle-info"></i>
                  </span>
                  <p className="text-colors" style={{ fontSize: "13px" }}>
                    {t("withdrawal.noticeMessage")}
                  </p>
                </div>

                <div>
                  {!legalLoading && legalMessage && (
                    <div className={`${getLegalStatusClass()} d-flex gap-2`}>
                      <span className="notice-icon text-colors">
                        <i
                          className={
                            legalStatus === "APPROVED"
                              ? "bi bi-check-circle-fill"
                              : "fa-solid fa-circle-info"
                          }
                        ></i>
                      </span>
                      <p className="notice-text ms-1">{legalMessage}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Credit Badge */}
              <div className="credit-badge">
                {t("withdrawal.credit")}{" "}
                {formatNumber(credit, i18n.language)} {t("thb")}
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
                    // onBlur={() => {
                    //   if (requestedAmount) {
                    //     setRequestedAmount(
                    //       parseFloat(requestedAmount).toFixed(2)
                    //     );
                    //   }
                    // }}

                    onBlur={() => {
  if (requestedAmount) {
    const value = Math.floor(parseFloat(requestedAmount) || 0);
    setRequestedAmount(value.toFixed(2)); // ✅ always .00
  }
}}


                    inputMode="decimal"
                    disabled={!isLegalVerified}
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
                    minHeight: "200px",
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
                    <span className="field-hint">
                      {t("withdrawal.nameHint")}
                    </span>
                  </div>

                  {/* ✅ BANK NAME – now a disabled input showing the translated name */}
                  <div className="form-field">
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
                  </div>

                  <div className="form-field">
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
                  </div>
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
                  {loading ? t("withdrawal.submitting") : t("withdrawal.submit")}
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

          <Button
    variant="primary"
    onClick={() => {
      setShowMessageModal(false);
      navigate("/withdrawalhistory");
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
            {t("withdrawal.insufficientCredit")}
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
            <p className="mb-2">{t("withdrawal.insufficientCreditMessage")}</p>
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
                  {formatNumber(credit, i18n.language)} {t("thb")}
                </strong>
              </div>
            </div>
            <p className="text-muted" style={{ fontSize: "14px" }}>
              {i18n.language === "th"
                ? "คุณต้องการใช้จำนวนเครดิตที่มีอยู่ทั้งหมดหรือไม่?"
                : "Would you like to use your full available credit?"}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          {/* <Button
            variant="outline-secondary"
            onClick={handleKeepEnteredAmount}
            className="px-4"
          >
            {i18n.language === "th" ? "ไม่, เก็บไว้" : "No, Keep it"}
          </Button> */}
          <Button
            variant="primary"
            onClick={handleAutoFillCredit}
            style={{ backgroundColor: "#e9527a", border: "none" }}
            className="px-4 w-50"
          >
            <i className="bi bi-check-lg me-1"></i>
            {i18n.language === "th" ? "ใช่, เติมเต็ม" : "Yes, Auto Fill"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
