// import React, { useState } from 'react';
// import { Upload } from 'lucide-react';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import '../css/SelfCreator.css';

// const SelfCreator = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState('verify');

//   const [formData, setFormData] = useState({
//     name: 'Suda Chaiyaporn',
//     idType: 'Passport',
//     bank: 'Bangkok Bank',
//     accountNumber: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', formData);
//     alert('Form submitted successfully!');
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleItemClick = (item) => {
//     setActiveItem(item);
//     if (window.innerWidth <= 992) {
//       setIsSidebarOpen(false);
//     }
//   };

//   const UploadIcon = () => (
//     <div className="upload-icon-container">
//       <svg className="upload-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12 15V3M12 3L8 7M12 3L16 7" strokeLinecap="round" strokeLinejoin="round"/>
//         <path d="M2 17V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V17" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     </div>
//   );

//   return (
//     <div className="dashboard-container">
//       <Sidebar
//         isOpen={isSidebarOpen}
//         activeItem={activeItem}
//         onItemClick={handleItemClick}
//       />

//       <main className="main-content">
//         <Header onToggleSidebar={toggleSidebar} />

//         <div className="content-area">
//           <div className="self-creator-container">
//             <h2 className="self-creator-title">Self Creator</h2>

//             <form className="form-wrapper" onSubmit={handleSubmit}>
//               {/* Enter Name */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Enter Name*</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className="form-input-custom"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//                 <span className="helper-text">*as per id</span>
//               </div>

//               {/* Choose ID Type */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Choose an ID type and upload the photo</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="idType"
//                     className="form-select-custom"
//                     value={formData.idType}
//                     onChange={handleChange}
//                   >
//                     <option value="Passport">Passport</option>
//                     <option value="ID Card">ID Card</option>
//                     <option value="Driving License">Driving License</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Upload ID Photo */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Upload Photo of Selected ID</label>
//                 <div className="upload-box">
//                   <UploadIcon />
//                   <span className="upload-text">Browse & Upload Photo</span>
//                 </div>
//               </div>

//               {/* Choose Bank */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Choose Your Bank</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="bank"
//                     className="form-select-custom"
//                     value={formData.bank}
//                     onChange={handleChange}
//                   >
//                     <option value="Bangkok Bank">Bangkok Bank</option>
//                     <option value="Kasikorn Bank">Kasikorn Bank</option>
//                     <option value="Siam Commercial Bank">Siam Commercial Bank</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Bank Account Number */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Enter Your Bank Account Number</label>
//                 <input
//                   type="text"
//                   name="accountNumber"
//                   className="form-input-custom"
//                   placeholder=""
//                   value={formData.accountNumber}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* Upload Passbook Photo */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Upload Bank Passbook Photo</label>
//                 <div className="upload-box">
//                   <UploadIcon />
//                   <span className="upload-text">Browse & Upload Photo</span>
//                 </div>
//               </div>

//               <button type="submit" className="submit-btn-custom">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SelfCreator;














// import React, { useState, useRef } from "react";
// import { Upload } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/SelfCreator.css";
// import { Menu, X } from "lucide-react";

// const SelfCreator = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("verify");

//   // Form data
//   const [formData, setFormData] = useState({
//     name: "Suda Chaiyaporn",
//     idType: "Passport",
//     bank: "Bangkok Bank",
//     accountNumber: "",
//   });

//   // File refs and state
//   const idPhotoRef = useRef(null);
//   const passbookRef = useRef(null);
//   const [idPhotoFile, setIdPhotoFile] = useState(null);
//   const [passbookFile, setPassbookFile] = useState(null);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle file changes
//   const handleIdPhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setIdPhotoFile(file);
//   };

//   const handlePassbookChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setPassbookFile(file);
//   };

//   // Trigger file inputs
//   const triggerIdPhotoUpload = () => idPhotoRef.current.click();
//   const triggerPassbookUpload = () => passbookRef.current.click();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", { ...formData, idPhotoFile, passbookFile });
//     alert("Form submitted successfully!");
//   };

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   const handleItemClick = (item) => {
//     setActiveItem(item);
//     if (window.innerWidth <= 992) setIsSidebarOpen(false);
//   };

//   // Upload icon
//   const UploadIcon = () => (
//     <div className="upload-icon-container">
//       <Upload size={24} />
//     </div>
//   );

//   return (
//     <div className="dashboard-container">
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

//       <main className="main-content">
//         {/* <Header onToggleSidebar={toggleSidebar} /> */}

//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <div className="content-area">
//           <div className="self-creator-container">
//             <h2 className="self-creator-title">Self Creator</h2>

//             <form className="form-wrapper" onSubmit={handleSubmit}>
//               {/* Enter Name */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Enter Name*</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className="form-input-custom"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//                 <span className="helper-text">*as per id</span>
//               </div>

//               {/* Choose ID Type */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Choose an ID type</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="idType"
//                     className="form-select-custom"
//                     value={formData.idType}
//                     onChange={handleChange}
//                   >
//                     <option value="Passport">Passport</option>
//                     <option value="ID Card">ID Card</option>
//                     <option value="Driving License">Driving License</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Upload ID Photo */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">
//                   Upload Photo of Selected ID
//                 </label>
//                 <div className="upload-box" onClick={triggerIdPhotoUpload}>
//                   <UploadIcon />
//                   <span className="upload-text">
//                     {idPhotoFile ? idPhotoFile.name : "Browse & Upload Photo"}
//                   </span>
//                 </div>
//                 <input
//                   type="file"
//                   ref={idPhotoRef}
//                   onChange={handleIdPhotoChange}
//                   style={{ display: "none" }}
//                   accept="image/*"
//                 />
//               </div>

//               {/* Choose Bank */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Choose Your Bank</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="bank"
//                     className="form-select-custom"
//                     value={formData.bank}
//                     onChange={handleChange}
//                   >
//                     <option value="Bangkok Bank">Bangkok Bank</option>
//                     <option value="Kasikorn Bank">Kasikorn Bank</option>
//                     <option value="Siam Commercial Bank">
//                       Siam Commercial Bank
//                     </option>
//                   </select>
//                 </div>
//               </div>

//               {/* Bank Account Number */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">
//                   Enter Your Bank Account Number
//                 </label>
//                 <input
//                   type="text"
//                   name="accountNumber"
//                   className="form-input-custom"
//                   placeholder=""
//                   value={formData.accountNumber}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* Upload Passbook Photo */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">
//                   Upload Bank Passbook Photo
//                 </label>
//                 <div className="upload-box" onClick={triggerPassbookUpload}>
//                   <UploadIcon />
//                   <span className="upload-text">
//                     {passbookFile ? passbookFile.name : "Browse & Upload Photo"}
//                   </span>
//                 </div>
//                 <input
//                   type="file"
//                   ref={passbookRef}
//                   onChange={handlePassbookChange}
//                   style={{ display: "none" }}
//                   accept="image/*"
//                 />
//               </div>

//               <button type="submit" className="submit-btn-custom">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SelfCreator;































// import React, { useState, useRef } from "react";
// import { Upload } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/SelfCreator.css";
// import { Menu, X } from "lucide-react";

// const SelfCreator = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("verify");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Form data - mapped exactly to backend API fields
//   const [formData, setFormData] = useState({
//     legal_name: "",
//     document_type: "passport", // backend values: passport, driving_licence, thai_national_id
//     bank_name: "",
//     bank_account_no: "",
//   });

//   // File refs and state - mapped exactly to backend API file fields
//   const legalIdImageRef = useRef(null);
//   const passbookImageRef = useRef(null);
//   const [legalIdImageFile, setLegalIdImageFile] = useState(null);
//   const [passbookImageFile, setPassbookImageFile] = useState(null);

//   // Document type mapping for frontend display to backend values
//   const documentTypeOptions = [
//     { label: "Passport", value: "passport" },
//     { label: "Thai National ID", value: "thai_national_id" },
//     { label: "Driving License", value: "driving_licence" },
//   ];

//   // Bank options
//   const bankOptions = [
//     "Bangkok Bank",
//     "Kasikorn Bank",
//     "Siam Commercial Bank",
//     "Krung Thai Bank",
//     "Bank of Ayudhya",
//     "Thanachart Bank",
//     "TMB Bank",
//     "CIMB Thai Bank",
//     "Standard Chartered Bank",
//     "Hongkong and Shanghai Banking Corporation",
//   ];

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError(null);
//   };

//   // Handle file changes
//   const handleLegalIdImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Validate file type (JPEG, JPG, PNG only)
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      
//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Legal ID Image as JPEG, JPG or PNG");
//         return;
//       }
      
//       setLegalIdImageFile(file);
//       setError(null);
//     }
//   };

//   const handlePassbookImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Validate file type (JPEG, JPG, PNG only)
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      
//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Passbook Image as JPEG, JPG or PNG");
//         return;
//       }
      
//       setPassbookImageFile(file);
//       setError(null);
//     }
//   };

//   // Trigger file inputs
//   const triggerLegalIdImageUpload = () => legalIdImageRef.current.click();
//   const triggerPassbookImageUpload = () => passbookImageRef.current.click();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setIsLoading(true);

//     try {
//       // Validation matching backend logic exactly
//       if (!formData.legal_name.trim()) {
//         throw new Error("Legal Name Not Found");
//       }
//       if (!formData.bank_name) {
//         throw new Error("Bank Name Not Found");
//       }
//       if (!formData.bank_account_no.trim()) {
//         throw new Error("Bank Account Number Not Found");
//       }
//       if (!passbookImageFile) {
//         throw new Error("Passbook Image Not Found");
//       }
//       if (!legalIdImageFile) {
//         throw new Error("Legal ID Image Not Found");
//       }
//       if (!formData.document_type) {
//         throw new Error("Document Type Not Found");
//       }

//       // Create FormData for multipart/form-data submission
//       const submitData = new FormData();
//       submitData.append("legal_name", formData.legal_name);
//       submitData.append("bank_name", formData.bank_name);
//       submitData.append("bank_account_no", formData.bank_account_no);
//       submitData.append("document_type", formData.document_type);
//       submitData.append("passbook_image", passbookImageFile);
//       submitData.append("legal_id_image", legalIdImageFile);

//       // API call matching your backend endpoint exactly
//       const response = await fetch("https://sagarxo.app/web-api/customer/legal-details", {
//         method: "POST",
//         headers: {
//           "Authorization": localStorage.getItem("token") || "", // Get token from storage
//         },
//         body: submitData,
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert(result.message || "Customer Legal Details Updated Successfully");
//         // Reset form after successful submission
//         setFormData({
//           legal_name: "",
//           document_type: "passport",
//           bank_name: "",
//           bank_account_no: "",
//         });
//         setLegalIdImageFile(null);
//         setPassbookImageFile(null);
//       } else {
//         throw new Error(result.message || "Failed to update legal details");
//       }
//     } catch (err) {
//       setError(err.message);
//       console.error("Submission error:", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   const handleItemClick = (item) => {
//     setActiveItem(item);
//     if (window.innerWidth <= 992) setIsSidebarOpen(false);
//   };

//   // Upload icon component
//   const UploadIcon = () => (
//     <div className="upload-icon-container">
//       <Upload size={24} />
//     </div>
//   );

//   return (
//     <div className="dashboard-container">
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

//       <main className="main-content">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <div className="content-area">
//           <div className="self-creator-container">
//             <h2 className="self-creator-title">Verify Identity</h2>

//             {/* Error Display */}
//             {error && (
//               <div className="error-message" style={{ 
//                 color: "#dc3545", 
//                 background: "#f8d7da", 
//                 padding: "10px", 
//                 borderRadius: "5px", 
//                 marginBottom: "15px" 
//               }}>
//                 {error}
//               </div>
//             )}

//             <form className="form-wrapper" onSubmit={handleSubmit}>
//               {/* Legal Name */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Legal Name*</label>
//                 <input
//                   type="text"
//                   name="legal_name"
//                   className="form-input-custom"
//                   value={formData.legal_name}
//                   onChange={handleChange}
//                   placeholder="Enter your legal name"
//                   required
//                 />
//                 <span className="helper-text">*as per ID document</span>
//               </div>

//               {/* Document Type */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Choose an ID type</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="document_type"
//                     className="form-select-custom"
//                     value={formData.document_type}
//                     onChange={handleChange}
//                   >
//                     {documentTypeOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Upload Legal ID Image */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">
//                   Upload Photo of Selected ID
//                 </label>
//                 <div 
//                   className="upload-box" 
//                   onClick={triggerLegalIdImageUpload}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <UploadIcon />
//                   <span className="upload-text">
//                     {legalIdImageFile ? legalIdImageFile.name : "Browse & Upload Photo (JPEG, JPG, PNG)"}
//                   </span>
//                 </div>
//                 <input
//                   type="file"
//                   ref={legalIdImageRef}
//                   onChange={handleLegalIdImageChange}
//                   style={{ display: "none" }}
//                   accept=".jpeg,.jpg,.png"
//                 />
//                 {legalIdImageFile && (
//                   <span className="file-selected" style={{ color: "#FFF", fontSize: "12px" }}>
//                     ✓ File selected: {legalIdImageFile.name}
//                   </span>
//                 )}
//               </div>

//               {/* Bank Name */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Choose Your Bank</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="bank_name"
//                     className="form-select-custom"
//                     value={formData.bank_name}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select a bank</option>
//                     {bankOptions.map((bank) => (
//                       <option key={bank} value={bank}>
//                         {bank}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Bank Account Number */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">
//                   Enter Your Bank Account Number
//                 </label>
//                 <input
//                   type="text"
//                   name="bank_account_no"
//                   className="form-input-custom"
//                   placeholder="Enter account number"
//                   value={formData.bank_account_no}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Upload Passbook Image */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">
//                   Upload Bank Passbook Photo
//                 </label>
//                 <div 
//                   className="upload-box" 
//                   onClick={triggerPassbookImageUpload}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <UploadIcon />
//                   <span className="upload-text">
//                     {passbookImageFile ? passbookImageFile.name : "Browse & Upload Photo (JPEG, JPG, PNG)"}
//                   </span>
//                 </div>
//                 <input
//                   type="file"
//                   ref={passbookImageRef}
//                   onChange={handlePassbookImageChange}
//                   style={{ display: "none" }}
//                   accept=".jpeg,.jpg,.png"
//                 />
//                 {passbookImageFile && (
//                   <span className="file-selected" style={{ color: "#fff", fontSize: "12px" }}>
//                     ✓ File selected: {passbookImageFile.name}
//                   </span>
//                 )}
//               </div>

//               <button 
//                 type="submit" 
//                 className="submit-btn-custom"
//                 disabled={isLoading}
//                 style={{ opacity: isLoading ? 0.7 : 1 }}
//               >
//                 {isLoading ? "Submitting..." : "Submit"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SelfCreator;






















// import React, { useState, useRef } from "react";
// import { Upload } from "lucide-react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/SelfCreator.css";
// import { Menu, X } from "lucide-react";

// const SelfCreator = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("verify");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Form data - mapped exactly to backend
//   const [formData, setFormData] = useState({
//     legal_name: "",
//     document_type: "passport",
//     bank_name: "",
//     bank_account_no: "",
//   });

//   // File states
//   const legalIdImageRef = useRef(null);
//   const passbookImageRef = useRef(null);
//   const [legalIdImageFile, setLegalIdImageFile] = useState(null);
//   const [passbookImageFile, setPassbookImageFile] = useState(null);

//   const documentTypeOptions = [
//     { label: "Passport", value: "passport" },
//     { label: "Thai National ID", value: "thai_national_id" },
//     { label: "Driving License", value: "driving_licence" },
//   ];

//   const bankOptions = [
//     "Bangkok Bank",
//     "Kasikorn Bank",
//     "Siam Commercial Bank",
//     "Krung Thai Bank",
//     "Bank of Ayudhya",
//     "Thanachart Bank",
//     "TMB Bank",
//     "CIMB Thai Bank",
//     "Standard Chartered Bank",
//     "Hongkong and Shanghai Banking Corporation",
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError(null);
//   };

//   const handleLegalIdImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      
//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Legal ID Image as JPEG, JPG or PNG");
//         return;
//       }
//       setLegalIdImageFile(file);
//       setError(null);
//     }
//   };

//   const handlePassbookImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      
//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Passbook Image as JPEG, JPG or PNG");
//         return;
//       }
//       setPassbookImageFile(file);
//       setError(null);
//     }
//   };

//   const triggerLegalIdImageUpload = () => legalIdImageRef.current.click();
//   const triggerPassbookImageUpload = () => passbookImageRef.current.click();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setIsLoading(true);

//     try {
//       if (!formData.legal_name.trim()) throw new Error("Legal Name Not Found");
//       if (!formData.bank_name) throw new Error("Bank Name Not Found");
//       if (!formData.bank_account_no.trim()) throw new Error("Bank Account Number Not Found");
//       if (!passbookImageFile) throw new Error("Passbook Image Not Found");
//       if (!legalIdImageFile) throw new Error("Legal ID Image Not Found");
//       if (!formData.document_type) throw new Error("Document Type Not Found");

//       const submitData = new FormData();
//       submitData.append("legal_name", formData.legal_name);
//       submitData.append("bank_name", formData.bank_name);
//       submitData.append("bank_account_no", formData.bank_account_no);
//       submitData.append("document_type", formData.document_type);
//       submitData.append("passbook_image", passbookImageFile);
//       submitData.append("legal_id_image", legalIdImageFile);

//       const response = await fetch("https://sagarxo.app/web-api/customer/legal-details", {
//         method: "POST",
//         headers: {
//           "Authorization": localStorage.getItem("token") || "",
//         },
//         body: submitData,
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert(result.message || "Customer Legal Details Updated Successfully");
//         // Reset form
//         setFormData({
//           legal_name: "",
//           document_type: "passport",
//           bank_name: "",
//           bank_account_no: "",
//         });
//         setLegalIdImageFile(null);
//         setPassbookImageFile(null);
//       } else {
//         throw new Error(result.message || "Failed to update legal details");
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   const UploadIcon = () => (
//     <div className="upload-icon-container">
//       <Upload size={24} />
//     </div>
//   );

//   return (
//     <div className="dashboard-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//       )}

//       <Sidebar show={isSidebarOpen} />

//       <main className="main-content">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <div className="content-area">
//           <div className="self-creator-container">
//             <h2 className="self-creator-title">Verify Identity</h2>

//             {error && (
//               <div className="error-message">
//                 {error}
//               </div>
//             )}

//             <form className="form-wrapper" onSubmit={handleSubmit}>
//               {/* Legal Name */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Legal Name*</label>
//                 <input
//                   type="text"
//                   name="legal_name"
//                   className="form-input-custom"
//                   value={formData.legal_name}
//                   onChange={handleChange}
//                   placeholder="Enter your legal name"
//                   required
//                 />
//                 <span className="helper-text">*as per ID document</span>
//               </div>

//               {/* Document Type - Fixed Dropdown */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Choose an ID type</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="document_type"
//                     className="form-select-custom dark-select"
//                     value={formData.document_type}
//                     onChange={handleChange}
//                   >
//                     {documentTypeOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Upload Legal ID Image */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Upload Photo of Selected ID</label>
//                 <div 
//                   className="upload-box" 
//                   onClick={triggerLegalIdImageUpload}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <UploadIcon />
//                   <span className="upload-text">
//                     {legalIdImageFile ? legalIdImageFile.name : "Browse & Upload Photo (JPEG, JPG, PNG)"}
//                   </span>
//                 </div>
//                 <input
//                   type="file"
//                   ref={legalIdImageRef}
//                   onChange={handleLegalIdImageChange}
//                   style={{ display: "none" }}
//                   accept=".jpeg,.jpg,.png"
//                 />
//               </div>

//               {/* Bank Name - Fixed Dropdown */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Choose Your Bank</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="bank_name"
//                     className="form-select-custom dark-select"
//                     value={formData.bank_name}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select a bank</option>
//                     {bankOptions.map((bank) => (
//                       <option key={bank} value={bank}>
//                         {bank}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Bank Account Number */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Enter Your Bank Account Number</label>
//                 <input
//                   type="text"
//                   name="bank_account_no"
//                   className="form-input-custom"
//                   placeholder="Enter account number"
//                   value={formData.bank_account_no}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Upload Passbook Image */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Upload Bank Passbook Photo</label>
//                 <div 
//                   className="upload-box" 
//                   onClick={triggerPassbookImageUpload}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <UploadIcon />
//                   <span className="upload-text">
//                     {passbookImageFile ? passbookImageFile.name : "Browse & Upload Photo (JPEG, JPG, PNG)"}
//                   </span>
//                 </div>
//                 <input
//                   type="file"
//                   ref={passbookImageRef}
//                   onChange={handlePassbookImageChange}
//                   style={{ display: "none" }}
//                   accept=".jpeg,.jpg,.png"
//                 />
//               </div>

//               <button 
//                 type="submit" 
//                 className="submit-btn-custom"
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Submitting..." : "Submit Verification"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SelfCreator;




















// import React, { useState, useRef, useEffect } from "react";
// import { Upload, CheckCircle, Lock } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/SelfCreator.css";
// import { Menu, X, AlertCircle } from "lucide-react";

// const SelfCreator = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("verify");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [verificationStatus, setVerificationStatus] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [checkingStatus, setCheckingStatus] = useState(true);
//   const navigate = useNavigate();

//   // Form data - mapped exactly to backend
//   const [formData, setFormData] = useState({
//     legal_name: "",
//     document_type: "passport",
//     bank_name: "",
//     bank_account_no: "",
//   });

//   // File states
//   const legalIdImageRef = useRef(null);
//   const passbookImageRef = useRef(null);
//   const [legalIdImageFile, setLegalIdImageFile] = useState(null);
//   const [passbookImageFile, setPassbookImageFile] = useState(null);

//   // Check verification status on component mount
//   useEffect(() => {
//     checkVerificationStatus();
//   }, []);

//   const checkVerificationStatus = async () => {
//     try {
//       setCheckingStatus(true);
//       const token = localStorage.getItem("token");
      
//       if (!token) {
//         navigate("/");
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

//       const data = await response.json();

//       if (data.success && data.data) {
//         const status = data.data.status;
//         setVerificationStatus(status);
        
//         // If already approved, disable all fields
//         if (status === "APPROVED") {
//           setIsVerified(true);
//           // Pre-fill form data if available
//           if (data.data.legal_details) {
//             setFormData({
//               legal_name: data.data.legal_details.legal_name || "",
//               document_type: data.data.legal_details.document_type || "passport",
//               bank_name: data.data.legal_details.bank_name || "",
//               bank_account_no: data.data.legal_details.bank_account_no || "",
//             });
//           }
//         }
//       }
//     } catch (err) {
//       console.error("Error checking verification status:", err);
//     } finally {
//       setCheckingStatus(false);
//     }
//   };

//   const documentTypeOptions = [
//     { label: "Passport", value: "passport" },
//     { label: "Thai National ID", value: "thai_national_id" },
//     { label: "Driving License", value: "driving_licence" },
//   ];

//   const bankOptions = [
//     "Bangkok Bank",
//     "Kasikorn Bank",
//     "Siam Commercial Bank",
//     "Krung Thai Bank",
//     "Bank of Ayudhya",
//     "Thanachart Bank",
//     "TMB Bank",
//     "CIMB Thai Bank",
//     "Standard Chartered Bank",
//     "Hongkong and Shanghai Banking Corporation",
//   ];

//   const handleChange = (e) => {
//     if (isVerified) return; // Don't allow changes if verified
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError(null);
//   };

//   const handleLegalIdImageChange = (e) => {
//     if (isVerified) return; // Don't allow changes if verified
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      
//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Legal ID Image as JPEG, JPG or PNG");
//         return;
//       }
//       setLegalIdImageFile(file);
//       setError(null);
//     }
//   };

//   const handlePassbookImageChange = (e) => {
//     if (isVerified) return; // Don't allow changes if verified
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      
//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Passbook Image as JPEG, JPG or PNG");
//         return;
//       }
//       setPassbookImageFile(file);
//       setError(null);
//     }
//   };

//   const triggerLegalIdImageUpload = () => {
//     if (!isVerified) legalIdImageRef.current.click();
//   };
  
//   const triggerPassbookImageUpload = () => {
//     if (!isVerified) passbookImageRef.current.click();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Don't submit if already verified
//     if (isVerified) {
//       setError("Your identity is already verified. No changes allowed.");
//       return;
//     }

//     setError(null);
//     setIsLoading(true);

//     try {
//       if (!formData.legal_name.trim()) throw new Error("Legal Name Not Found");
//       if (!formData.bank_name) throw new Error("Bank Name Not Found");
//       if (!formData.bank_account_no.trim()) throw new Error("Bank Account Number Not Found");
//       if (!passbookImageFile) throw new Error("Passbook Image Not Found");
//       if (!legalIdImageFile) throw new Error("Legal ID Image Not Found");
//       if (!formData.document_type) throw new Error("Document Type Not Found");

//       const submitData = new FormData();
//       submitData.append("legal_name", formData.legal_name);
//       submitData.append("bank_name", formData.bank_name);
//       submitData.append("bank_account_no", formData.bank_account_no);
//       submitData.append("document_type", formData.document_type);
//       submitData.append("passbook_image", passbookImageFile);
//       submitData.append("legal_id_image", legalIdImageFile);

//       const response = await fetch("https://sagarxo.app/web-api/customer/legal-details", {
//         method: "POST",
//         headers: {
//           "Authorization": localStorage.getItem("token") || "",
//         },
//         body: submitData,
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert(result.message || "Customer Legal Details Updated Successfully");
//         // Reset form
//         setFormData({
//           legal_name: "",
//           document_type: "passport",
//           bank_name: "",
//           bank_account_no: "",
//         });
//         setLegalIdImageFile(null);
//         setPassbookImageFile(null);
//         // Refresh verification status
//         checkVerificationStatus();
//       } else {
//         throw new Error(result.message || "Failed to update legal details");
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   const UploadIcon = () => (
//     <div className="upload-icon-container">
//       <Upload size={24} />
//     </div>
//   );

//   // Show loading while checking status
//   if (checkingStatus) {
//     return (
//       <div className="dashboard-container">
//         <button
//           className="mobile-toggle d-none"
//           onClick={toggleSidebar}
//         >
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//         )}
//         <Sidebar show={isSidebarOpen} />
//         <main className="main-content">
//           <Header toggleSidebar={toggleSidebar} />
//           <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
//             <div className="text-center">
//               <div className="spinner-border" role="status" style={{ color: "#e9527a" }}>
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3 text-muted">Checking verification status...</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={toggleSidebar}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//       )}

//       <Sidebar show={isSidebarOpen} />

//       <main className="main-content">
//         <Header toggleSidebar={toggleSidebar} />

//         <div className="content-area">
//           <div className="self-creator-container">
//             <h2 className="self-creator-title">
//               {isVerified ? (
//                 <>
//                   <CheckCircle size={28} style={{ color: "#28a745", marginRight: "10px" }} />
//                   Identity Verified
//                 </>
//               ) : (
//                 "Verify Identity"
//               )}
//             </h2>

//             {/* Verified Banner */}
//             {isVerified && (
//               <div 
//                 className="verified-banner"
//                 style={{
//                   backgroundColor: "#d4edda",
//                   border: "1px solid #c3e6cb",
//                   borderRadius: "8px",
//                   padding: "16px",
//                   marginBottom: "24px",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "12px",
//                   color: "#155724"
//                 }}
//               >
//                 <Lock size={20} />
//                 <span style={{ fontWeight: "500" }}>
//                   Your identity has been verified. All fields are locked for security.
//                 </span>
//               </div>
//             )}

//             {error && (
//               <div className="error-message">
//                 {error}
//               </div>
//             )}

//             <form className="form-wrapper" onSubmit={handleSubmit}>
//               {/* Legal Name */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Legal Name*</label>
//                 <input
//                   type="text"
//                   name="legal_name"
//                   className="form-input-custom"
//                   value={formData.legal_name}
//                   onChange={handleChange}
//                   placeholder="Enter your legal name"
//                   required
//                   disabled={isVerified}
//                   style={isVerified ? { backgroundColor: "#e9ecef", cursor: "not-allowed" } : {}}
//                 />
//                 <span className="helper-text">*as per ID document</span>
//               </div>

//               {/* Document Type - Fixed Dropdown */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Choose an ID type</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="document_type"
//                     className="form-select-custom dark-select"
//                     value={formData.document_type}
//                     onChange={handleChange}
//                     disabled={isVerified}
//                     style={isVerified ? { backgroundColor: "#e9ecef", cursor: "not-allowed" } : {}}
//                   >
//                     {documentTypeOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Upload Legal ID Image */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Upload Photo of Selected ID</label>
//                 <div 
//                   className="upload-box" 
//                   onClick={triggerLegalIdImageUpload}
//                   style={{ 
//                     cursor: isVerified ? "not-allowed" : "pointer",
//                     opacity: isVerified ? 0.6 : 1,
//                     backgroundColor: isVerified ? "#e9ecef" : undefined
//                   }}
//                 >
//                   <UploadIcon />
//                   <span className="upload-text">
//                     {legalIdImageFile ? legalIdImageFile.name : 
//                      isVerified ? "Document already verified" : 
//                      "Browse & Upload Photo (JPEG, JPG, PNG)"}
//                   </span>
//                 </div>
//                 <input
//                   type="file"
//                   ref={legalIdImageRef}
//                   onChange={handleLegalIdImageChange}
//                   style={{ display: "none" }}
//                   accept=".jpeg,.jpg,.png"
//                   disabled={isVerified}
//                 />
//               </div>

//               {/* Bank Name - Fixed Dropdown */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Choose Your Bank</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="bank_name"
//                     className="form-select-custom dark-select"
//                     value={formData.bank_name}
//                     onChange={handleChange}
//                     required
//                     disabled={isVerified}
//                     style={isVerified ? { backgroundColor: "#e9ecef", cursor: "not-allowed" } : {}}
//                   >
//                     <option value="">Select a bank</option>
//                     {bankOptions.map((bank) => (
//                       <option key={bank} value={bank}>
//                         {bank}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Bank Account Number */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Enter Your Bank Account Number</label>
//                 <input
//                   type="text"
//                   name="bank_account_no"
//                   className="form-input-custom"
//                   placeholder="Enter account number"
//                   value={formData.bank_account_no}
//                   onChange={handleChange}
//                   required
//                   disabled={isVerified}
//                   style={isVerified ? { backgroundColor: "#e9ecef", cursor: "not-allowed" } : {}}
//                 />
//               </div>

//               {/* Upload Passbook Image */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Upload Bank Passbook Photo</label>
//                 <div 
//                   className="upload-box" 
//                   onClick={triggerPassbookImageUpload}
//                   style={{ 
//                     cursor: isVerified ? "not-allowed" : "pointer",
//                     opacity: isVerified ? 0.6 : 1,
//                     backgroundColor: isVerified ? "#e9ecef" : undefined
//                   }}
//                 >
//                   <UploadIcon />
//                   <span className="upload-text">
//                     {passbookImageFile ? passbookImageFile.name : 
//                      isVerified ? "Document already verified" : 
//                      "Browse & Upload Photo (JPEG, JPG, PNG)"}
//                   </span>
//                 </div>
//                 <input
//                   type="file"
//                   ref={passbookImageRef}
//                   onChange={handlePassbookImageChange}
//                   style={{ display: "none" }}
//                   accept=".jpeg,.jpg,.png"
//                   disabled={isVerified}
//                 />
//               </div>

//               {/* Submit Button - Hidden if verified */}
//               {!isVerified && (
//                 <button 
//                   type="submit" 
//                   className="submit-btn-custom"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Submitting..." : "Submit Verification"}
//                 </button>
//               )}

//               {/* Verified Actions */}
//               {isVerified && (
//                 <div style={{ textAlign: "center", marginTop: "20px" }}>
//                   <button
//                     type="button"
//                     onClick={() => navigate("/dashboard")}
//                     className="submit-btn-custom"
//                     style={{ backgroundColor: "#28a745" }}
//                   >
//                     Go to Dashboard
//                   </button>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SelfCreator;


















// import React, { useState, useRef, useEffect } from "react";
// import { Upload, CheckCircle, Lock, Eye } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/SelfCreator.css";
// import { Menu, X } from "lucide-react";

// const SelfCreator = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("verify");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [verificationStatus, setVerificationStatus] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isPending, setIsPending] = useState(false);
//   const [checkingStatus, setCheckingStatus] = useState(true);
//   const navigate = useNavigate();

//   // Form data - mapped exactly to backend
//   const [formData, setFormData] = useState({
//     legal_name: "",
//     document_type: "passport",
//     bank_name: "",
//     bank_account_no: "",
//   });

//   // File states
//   const legalIdImageRef = useRef(null);
//   const passbookImageRef = useRef(null);
//   const [legalIdImageFile, setLegalIdImageFile] = useState(null);
//   const [passbookImageFile, setPassbookImageFile] = useState(null);

//   // Existing image URLs from GET API
//   const [existingLegalIdUrl, setExistingLegalIdUrl] = useState(null);
//   const [existingPassbookUrl, setExistingPassbookUrl] = useState(null);

//   // Check verification status on component mount
//   useEffect(() => {
//     checkVerificationStatus();
//   }, []);

//   const checkVerificationStatus = async () => {
//     try {
//       setCheckingStatus(true);
//       const token = localStorage.getItem("token");
      
//       if (!token) {
//         navigate("/");
//         return;
//       }

//       // First get verification status
//       const statusResponse = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const statusData = await statusResponse.json();

//       if (statusData.success && statusData.data) {
//         const status = statusData.data.status;
//         setVerificationStatus(status);
        
//         if (status === "APPROVED") {
//           setIsVerified(true);
//           setIsPending(false);
//         } else if (status === "PENDING") {
//           setIsVerified(false);
//           setIsPending(true);
//         } else {
//           setIsVerified(false);
//           setIsPending(false);
//         }

//         // Now fetch full legal details (GET) to pre-fill form and images
//         const legalResponse = await fetch(
//           "https://sagarxo.app/web-api/customer/legal-details",
//           {
//             method: "GET",
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const legalData = await legalResponse.json();

//         if (legalData.success && legalData.data?.legal_details) {
//           const legal = legalData.data.legal_details;
          
//           setFormData({
//             legal_name: legal.legal_name || "",
//             document_type: legal.document_type || "passport",
//             bank_name: legal.bank_name || "",
//             bank_account_no: legal.bank_account_no || "",
//           });

//           // Set image URLs for preview
//           setExistingLegalIdUrl(legal.legal_id_image || null);
//           setExistingPassbookUrl(legal.passbook_image || null);
//         }
//       }
//     } catch (err) {
//       console.error("Error checking verification status:", err);
//     } finally {
//       setCheckingStatus(false);
//     }
//   };

//   const documentTypeOptions = [
//     { label: "Passport", value: "passport" },
//     { label: "Thai National ID", value: "thai_national_id" },
//     { label: "Driving License", value: "driving_licence" },
//   ];

//   const bankOptions = [
//     "Bangkok Bank",
//     "Kasikorn Bank",
//     "Siam Commercial Bank",
//     "Krung Thai Bank",
//     "Bank of Ayudhya",
//     "Thanachart Bank",
//     "TMB Bank",
//     "CIMB Thai Bank",
//     "Standard Chartered Bank",
//     "Hongkong and Shanghai Banking Corporation",
//   ];

//   const isFormLocked = isVerified || isPending;

//   // Show popup when clicking anywhere on locked form
//   const showLockedPopup = () => {
//     if (!isFormLocked) return;
    
//     if (isVerified) {
//       alert(
//         "Your profile has been verified. You are now eligible to make withdrawals. " +
//         "If you wish to edit or update your details, please contact our Help & Support team."
//       );
//     } else if (isPending) {
//       alert(
//         "Your identity verification is currently under review. " +
//         "Once it is successfully completed, you will be able to submit a withdrawal request."
//       );
//     }
//   };

//   const handleChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError(null);
//   };

//   const handleLegalIdImageChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      
//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Legal ID Image as JPEG, JPG or PNG");
//         return;
//       }
//       setLegalIdImageFile(file);
//       setExistingLegalIdUrl(null);
//       setError(null);
//     }
//   };

//   const handlePassbookImageChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      
//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Passbook Image as JPEG, JPG or PNG");
//         return;
//       }
//       setPassbookImageFile(file);
//       setExistingPassbookUrl(null);
//       setError(null);
//     }
//   };

//   const triggerLegalIdImageUpload = (e) => {
//     if (isFormLocked) {
//       e.stopPropagation(); // Prevent bubbling to form click
//       showLockedPopup();
//       return;
//     }
//     legalIdImageRef.current.click();
//   };
  
//   const triggerPassbookImageUpload = (e) => {
//     if (isFormLocked) {
//       e.stopPropagation();
//       showLockedPopup();
//       return;
//     }
//     passbookImageRef.current.click();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }

//     setError(null);
//     setIsLoading(true);

//     try {
//       if (!formData.legal_name.trim()) throw new Error("Legal Name Not Found");
//       if (!formData.bank_name) throw new Error("Bank Name Not Found");
//       if (!formData.bank_account_no.trim()) throw new Error("Bank Account Number Not Found");
//       if (!passbookImageFile) throw new Error("Passbook Image Not Found");
//       if (!legalIdImageFile) throw new Error("Legal ID Image Not Found");
//       if (!formData.document_type) throw new Error("Document Type Not Found");

//       const submitData = new FormData();
//       submitData.append("legal_name", formData.legal_name);
//       submitData.append("bank_name", formData.bank_name);
//       submitData.append("bank_account_no", formData.bank_account_no);
//       submitData.append("document_type", formData.document_type);
//       submitData.append("passbook_image", passbookImageFile);
//       submitData.append("legal_id_image", legalIdImageFile);

//       const response = await fetch("https://sagarxo.app/web-api/customer/legal-details", {
//         method: "POST",
//         headers: {
//           "Authorization": localStorage.getItem("token") || "",
//         },
//         body: submitData,
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert(result.message || "Customer Legal Details Updated Successfully");
//         setFormData({
//           legal_name: "",
//           document_type: "passport",
//           bank_name: "",
//           bank_account_no: "",
//         });
//         setLegalIdImageFile(null);
//         setPassbookImageFile(null);
//         setExistingLegalIdUrl(null);
//         setExistingPassbookUrl(null);
//         checkVerificationStatus();
//       } else {
//         throw new Error(result.message || "Failed to update legal details");
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   const UploadIcon = () => (
//     <div className="upload-icon-container">
//       <Upload size={24} />
//     </div>
//   );

//   // Helper to render upload area with preview
//   const renderUploadArea = (type, existingUrl, file, onTrigger, isLocked) => {
//     const hasPreview = existingUrl && !file;
//     const displayImage = file ? URL.createObjectURL(file) : (existingUrl || null);
    
//     if (hasPreview && displayImage) {
//       return (
//         <div 
//           className="upload-box preview-mode" 
//           style={{ cursor: isLocked ? "pointer" : "default", padding: "8px" }}
//           onClick={(e) => {
//             if (isLocked) {
//               e.stopPropagation();
//               showLockedPopup();
//             }
//           }}
//         >
//           <img src={displayImage} alt="Preview" style={{ maxWidth: "100%", maxHeight: "120px", borderRadius: "8px" }} />
//           <div style={{ marginTop: "8px", fontSize: "12px", color: "#666" }}>
//             <Eye size={16} style={{ display: "inline", marginRight: "4px" }} />
//             Document already uploaded
//           </div>
//         </div>
//       );
//     }
    
//     return (
//       <div 
//         className="upload-box" 
//         onClick={onTrigger}
//         style={{ 
//           cursor: isLocked ? "not-allowed" : "pointer",
//           opacity: isLocked ? 0.6 : 1,
//           backgroundColor: isLocked ? "transparent" : undefined
//         }}
//       >
//         <UploadIcon />
//         <span className="upload-text">
//           {file ? file.name : 
//            isLocked ? "Document locked" : 
//            "Browse & Upload Photo (JPEG, JPG, PNG)"}
//         </span>
//       </div>
//     );
//   };

//   // Show loading while checking status
//   if (checkingStatus) {
//     return (
//       <div className="dashboard-container">
//         <button
//           className="mobile-toggle d-none"
//           onClick={toggleSidebar}
//         >
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//         )}
//         <Sidebar show={isSidebarOpen} />
//         <main className="main-content">
//           <Header toggleSidebar={toggleSidebar} />
//           <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
//             <div className="text-center">
//               <div className="spinner-border" role="status" style={{ color: "#e9527a" }}>
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3 text-muted">Checking verification status...</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={toggleSidebar}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//       )}

//       <Sidebar show={isSidebarOpen} />

//       <main className="main-content">
//         <Header toggleSidebar={toggleSidebar} />

//         <div className="content-area">
//           <div className="self-creator-container">
//             <h2 className="self-creator-title">
//               {isVerified ? (
//                 <>
//                   <CheckCircle size={28} style={{ color: "#28a745", marginRight: "10px" }} />
//                   Identity Verified
//                 </>
//               ) : isPending ? (
//                 <>
//                   <Lock size={28} style={{ color: "#ff9800", marginRight: "10px" }} />
//                   Verification Pending
//                 </>
//               ) : (
//                 "Verify Identity"
//               )}
//             </h2>

//             {/* Banners */}
//             {isPending && (
//               <div 
//                 className="pending-banner"
//                 style={{
//                   backgroundColor: "#fff3e0",
//                   border: "1px solid #ffe0b2",
//                   borderRadius: "8px",
//                   padding: "16px",
//                   marginBottom: "24px",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "12px",
//                   color: "#e65100"
//                 }}
//               >
//                 <Lock size={20} />
//                 <span style={{ fontWeight: "500" }}>
//                   Your verification is under review. All fields are locked until the review is completed.
//                 </span>
//               </div>
//             )}

//             {isVerified && (
//               <div 
//                 className="verified-banner"
//                 style={{
//                   backgroundColor: "#d4edda",
//                   border: "1px solid #c3e6cb",
//                   borderRadius: "8px",
//                   padding: "16px",
//                   marginBottom: "24px",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "12px",
//                   color: "#155724"
//                 }}
//               >
//                 <CheckCircle size={20} />
//                 <span style={{ fontWeight: "500" }}>
//                   Your identity has been verified. All fields are locked for security.
//                 </span>
//               </div>
//             )}

//             {error && (
//               <div className="error-message">
//                 {error}
//               </div>
//             )}

//             {/* FORM: onClick on the form itself triggers popup when locked */}
//             <form className="form-wrapper" onSubmit={handleSubmit} onClick={isFormLocked ? showLockedPopup : undefined}>
//               {/* Legal Name */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Legal Name*</label>
//                 <input
//                   type="text"
//                   name="legal_name"
//                   className="form-input-custom"
//                   value={formData.legal_name}
//                   onChange={handleChange}
//                   placeholder="Enter your legal name"
//                   required
//                   disabled={isFormLocked}
//                   style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
//                 />
//                 <span className="helper-text">*as per ID document</span>
//               </div>

//               {/* Document Type */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Choose an ID type</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="document_type"
//                     className="form-select-custom dark-select"
//                     value={formData.document_type}
//                     onChange={handleChange}
//                     disabled={isFormLocked}
//                     style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
//                   >
//                     {documentTypeOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Upload Legal ID Image */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Upload Photo of Selected ID</label>
//                 {renderUploadArea(
//                   "legal",
//                   existingLegalIdUrl,
//                   legalIdImageFile,
//                   triggerLegalIdImageUpload,
//                   isFormLocked
//                 )}
//                 <input
//                   type="file"
//                   ref={legalIdImageRef}
//                   onChange={handleLegalIdImageChange}
//                   style={{ display: "none" }}
//                   accept=".jpeg,.jpg,.png"
//                   disabled={isFormLocked}
//                 />
//               </div>

//               {/* Bank Name */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Choose Your Bank</label>
//                 <div className="select-wrapper">
//                   <select
//                     name="bank_name"
//                     className="form-select-custom dark-select"
//                     value={formData.bank_name}
//                     onChange={handleChange}
//                     required
//                     disabled={isFormLocked}
//                     style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
//                   >
//                     <option value="">Select a bank</option>
//                     {bankOptions.map((bank) => (
//                       <option key={bank} value={bank}>
//                         {bank}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Bank Account Number */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Enter Your Bank Account Number</label>
//                 <input
//                   type="text"
//                   name="bank_account_no"
//                   className="form-input-custom"
//                   placeholder="Enter account number"
//                   value={formData.bank_account_no}
//                   onChange={handleChange}
//                   required
//                   disabled={isFormLocked}
//                   style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
//                 />
//               </div>

//               {/* Upload Passbook Image */}
//               <div className="form-group-custom">
//                 <label className="form-label-custom">Upload Bank Passbook Photo</label>
//                 {renderUploadArea(
//                   "passbook",
//                   existingPassbookUrl,
//                   passbookImageFile,
//                   triggerPassbookImageUpload,
//                   isFormLocked
//                 )}
//                 <input
//                   type="file"
//                   ref={passbookImageRef}
//                   onChange={handlePassbookImageChange}
//                   style={{ display: "none" }}
//                   accept=".jpeg,.jpg,.png"
//                   disabled={isFormLocked}
//                 />
//               </div>

//               {/* Submit Button (only when not locked) */}
//               {!isFormLocked && (
//                 <button 
//                   type="submit" 
//                   className="submit-btn-custom"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Submitting..." : "Submit Verification"}
//                 </button>
//               )}

//               {/* Dashboard button for locked states - prevents popup via stopPropagation */}
//               {isFormLocked && (
//                 <div style={{ textAlign: "center", marginTop: "20px" }}>
//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigate("/dashboard");
//                     }}
//                     className="submit-btn-custom"
//                     style={{ backgroundColor: "#28a745" }}
//                   >
//                     Go to Dashboard
//                   </button>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SelfCreator;






















// import React, { useState, useRef, useEffect } from "react";
// import { Upload, CheckCircle, Lock, Eye } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Dropdown } from "react-bootstrap";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/SelfCreator.css";
// import { Menu, X } from "lucide-react";

// const SelfCreator = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("verify");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [verificationStatus, setVerificationStatus] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isPending, setIsPending] = useState(false);
//   const [checkingStatus, setCheckingStatus] = useState(true);
//   const navigate = useNavigate();

//   // Form data - mapped exactly to backend
//   const [formData, setFormData] = useState({
//     legal_name: "",
//     document_type: "passport",
//     bank_name: "",
//     bank_account_no: "",
//   });

//   // File states
//   const legalIdImageRef = useRef(null);
//   const passbookImageRef = useRef(null);
//   const [legalIdImageFile, setLegalIdImageFile] = useState(null);
//   const [passbookImageFile, setPassbookImageFile] = useState(null);

//   // Existing image URLs from GET API
//   const [existingLegalIdUrl, setExistingLegalIdUrl] = useState(null);
//   const [existingPassbookUrl, setExistingPassbookUrl] = useState(null);

//   // Check verification status on component mount
//   useEffect(() => {
//     checkVerificationStatus();
//   }, []);

//   const checkVerificationStatus = async () => {
//     try {
//       setCheckingStatus(true);
//       const token = localStorage.getItem("token");
      
//       if (!token) {
//         navigate("/");
//         return;
//       }

//       // First get verification status
//       const statusResponse = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const statusData = await statusResponse.json();

//       if (statusData.success && statusData.data) {
//         const status = statusData.data.status;
//         setVerificationStatus(status);
        
//         if (status === "APPROVED") {
//           setIsVerified(true);
//           setIsPending(false);
//         } else if (status === "PENDING") {
//           setIsVerified(false);
//           setIsPending(true);
//         } else {
//           setIsVerified(false);
//           setIsPending(false);
//         }

//         // Now fetch full legal details (GET) to pre-fill form and images
//         const legalResponse = await fetch(
//           "https://sagarxo.app/web-api/customer/legal-details",
//           {
//             method: "GET",
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const legalData = await legalResponse.json();

//         if (legalData.success && legalData.data?.legal_details) {
//           const legal = legalData.data.legal_details;
          
//           setFormData({
//             legal_name: legal.legal_name || "",
//             document_type: legal.document_type || "passport",
//             bank_name: legal.bank_name || "",
//             bank_account_no: legal.bank_account_no || "",
//           });

//           // Set image URLs for preview
//           setExistingLegalIdUrl(legal.legal_id_image || null);
//           setExistingPassbookUrl(legal.passbook_image || null);
//         }
//       }
//     } catch (err) {
//       console.error("Error checking verification status:", err);
//     } finally {
//       setCheckingStatus(false);
//     }
//   };

//   const documentTypeOptions = [
//     { label: "Passport", value: "passport" },
//     { label: "Thai National ID", value: "thai_national_id" },
//     { label: "Driving License", value: "driving_licence" },
//   ];

//   const bankOptions = [
//     "Bangkok Bank",
//     "Kasikorn Bank",
//     "Siam Commercial Bank",
//     "Krung Thai Bank",
//     "Bank of Ayudhya",
//     "Thanachart Bank",
//     "TMB Bank",
//     "CIMB Thai Bank",
//     "Standard Chartered Bank",
//     "Hongkong and Shanghai Banking Corporation",
//   ];

//   const isFormLocked = isVerified || isPending;

//   // Show popup when clicking anywhere on locked form
//   const showLockedPopup = () => {
//     if (!isFormLocked) return;
    
//     if (isVerified) {
//       alert(
//         "Your profile has been verified. You are now eligible to make withdrawals. " +
//         "If you wish to edit or update your details, please contact our Help & Support team."
//       );
//     } else if (isPending) {
//       alert(
//         "Your identity verification is currently under review. " +
//         "Once it is successfully completed, you will be able to submit a withdrawal request."
//       );
//     }
//   };

//   const handleChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError(null);
//   };

//   const handleLegalIdImageChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      
//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Legal ID Image as JPEG, JPG or PNG");
//         return;
//       }
//       setLegalIdImageFile(file);
//       setExistingLegalIdUrl(null);
//       setError(null);
//     }
//   };

//   const handlePassbookImageChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      
//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Passbook Image as JPEG, JPG or PNG");
//         return;
//       }
//       setPassbookImageFile(file);
//       setExistingPassbookUrl(null);
//       setError(null);
//     }
//   };

//   const triggerLegalIdImageUpload = (e) => {
//     if (isFormLocked) {
//       e.stopPropagation();
//       showLockedPopup();
//       return;
//     }
//     legalIdImageRef.current.click();
//   };
  
//   const triggerPassbookImageUpload = (e) => {
//     if (isFormLocked) {
//       e.stopPropagation();
//       showLockedPopup();
//       return;
//     }
//     passbookImageRef.current.click();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }

//     setError(null);
//     setIsLoading(true);

//     try {
//       if (!formData.legal_name.trim()) throw new Error("Legal Name Not Found");
//       if (!formData.bank_name) throw new Error("Bank Name Not Found");
//       if (!formData.bank_account_no.trim()) throw new Error("Bank Account Number Not Found");
//       if (!passbookImageFile) throw new Error("Passbook Image Not Found");
//       if (!legalIdImageFile) throw new Error("Legal ID Image Not Found");
//       if (!formData.document_type) throw new Error("Document Type Not Found");

//       const submitData = new FormData();
//       submitData.append("legal_name", formData.legal_name);
//       submitData.append("bank_name", formData.bank_name);
//       submitData.append("bank_account_no", formData.bank_account_no);
//       submitData.append("document_type", formData.document_type);
//       submitData.append("passbook_image", passbookImageFile);
//       submitData.append("legal_id_image", legalIdImageFile);

//       const response = await fetch("https://sagarxo.app/web-api/customer/legal-details", {
//         method: "POST",
//         headers: {
//           "Authorization": localStorage.getItem("token") || "",
//         },
//         body: submitData,
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert(result.message || "Customer Legal Details Updated Successfully");
//         setFormData({
//           legal_name: "",
//           document_type: "passport",
//           bank_name: "",
//           bank_account_no: "",
//         });
//         setLegalIdImageFile(null);
//         setPassbookImageFile(null);
//         setExistingLegalIdUrl(null);
//         setExistingPassbookUrl(null);
//         checkVerificationStatus();
//       } else {
//         throw new Error(result.message || "Failed to update legal details");
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   const UploadIcon = () => (
//     <div className="upload-icon-container">
//       <Upload size={24} />
//     </div>
//   );

//   // Helper to render upload area with preview
//   const renderUploadArea = (type, existingUrl, file, onTrigger, isLocked) => {
//     const hasPreview = existingUrl && !file;
//     const displayImage = file ? URL.createObjectURL(file) : (existingUrl || null);
    
//     if (hasPreview && displayImage) {
//       return (
//         <div 
//           className="upload-box preview-mode" 
//           style={{ cursor: isLocked ? "pointer" : "default", padding: "8px" }}
//           onClick={(e) => {
//             if (isLocked) {
//               e.stopPropagation();
//               showLockedPopup();
//             }
//           }}
//         >
//           <img src={displayImage} alt="Preview" style={{ maxWidth: "100%", maxHeight: "120px", borderRadius: "8px" }} />
//           <div style={{ marginTop: "8px", fontSize: "12px", color: "#666" }}>
//             <Eye size={16} style={{ display: "inline", marginRight: "4px" }} />
//             Document already uploaded
//           </div>
//         </div>
//       );
//     }
    
//     return (
//       <div 
//         className="upload-box" 
//         onClick={onTrigger}
//         style={{ 
//           cursor: isLocked ? "not-allowed" : "pointer",
//           opacity: isLocked ? 0.6 : 1,
//           backgroundColor: isLocked ? "transparent" : undefined
//         }}
//       >
//         <UploadIcon />
//         <span className="upload-text">
//           {file ? file.name : 
//            isLocked ? "Document locked" : 
//            "Browse & Upload Photo (JPEG, JPG, PNG)"}
//         </span>
//       </div>
//     );
//   };

//   // Show loading while checking status
//   if (checkingStatus) {
//     return (
//       <div className="dashboard-container">
//         <button
//           className="mobile-toggle d-none"
//           onClick={toggleSidebar}
//         >
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//         )}
//         <Sidebar show={isSidebarOpen} />
//         <main className="main-content">
//           <Header toggleSidebar={toggleSidebar} />
//           <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
//             <div className="text-center">
//               <div className="spinner-border" role="status" style={{ color: "#e9527a" }}>
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3 text-muted">Checking verification status...</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={toggleSidebar}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//       )}

//       <Sidebar show={isSidebarOpen} />

//       <main className="main-content">
//         <Header toggleSidebar={toggleSidebar} />

//         <div className="content-area">
//           <div className="self-creator-container">
//             <h2 className="self-creator-title">
//               {isVerified ? (
//                 <>
//                   <CheckCircle size={28} style={{ color: "#28a745", marginRight: "10px" }} />
//                   Identity Verified
//                 </>
//               ) : isPending ? (
//                 <>
//                   <Lock size={28} style={{ color: "#ff9800", marginRight: "10px" }} />
//                   Verification Pending
//                 </>
//               ) : (
//                 "Verify Identity"
//               )}
//             </h2>

//             {/* Banners */}
//             {isPending && (
//               <div 
//                 className="pending-banner"
//                 style={{
//                   backgroundColor: "#fff3e0",
//                   border: "1px solid #ffe0b2",
//                   borderRadius: "8px",
//                   padding: "16px",
//                   marginBottom: "24px",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "12px",
//                   color: "#e65100"
//                 }}
//               >
//                 <Lock size={20} />
//                 <span style={{ fontWeight: "500" }}>
//                   Your verification is under review. All fields are locked until the review is completed.
//                 </span>
//               </div>
//             )}

//             {/* {isVerified && (
//               <div 
//                 className="verified-banner"
//                 style={{
//                   backgroundColor: "#d4edda",
//                   border: "1px solid #c3e6cb",
//                   borderRadius: "8px",
//                   padding: "16px",
//                   marginBottom: "24px",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "12px",
//                   color: "#155724"
//                 }}
//               >
//                 <CheckCircle size={20} />
//                 <span style={{ fontWeight: "500" }}>
//                   Your identity has been verified. All fields are locked for security.
//                 </span>
//               </div>
//             )} */}

//             {error && (
//               <div className="error-message">
//                 {error}
//               </div>
//             )}

//             <form style={{ position: "relative" }} className="form-wrapper" onSubmit={handleSubmit} onClick={isFormLocked ? showLockedPopup : undefined}>
//               {/* Fields container with relative position for overlay */}
//               <div >
//                 {/* Overlay when locked - blurred effect */}
//                 {isFormLocked && (
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       inset:0,
//                       backgroundColor: "rgb(255 255 255 / 34%)",
//                       backdropFilter: "blur(-10px)",
//                       zIndex: 10,
//                       borderRadius: "12px",
//                       pointerEvents: "none", // allow clicks to pass through to form (popup still triggers)
//                     }}
//                   />
//                 )}

//                 {/* Legal Name */}
//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Legal Name*</label>
//                   <input
//                     type="text"
//                     name="legal_name"
//                     className="form-input-custom"
//                     value={formData.legal_name}
//                     onChange={handleChange}
//                     placeholder="Enter your legal name"
//                     required
//                     disabled={isFormLocked}
//                     style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
//                   />
//                   <span className="helper-text">*as per ID document</span>
//                 </div>

//                 {/* Document Type */}
//                 {/* <div className="form-group-custom">
//                   <label className="form-label-custom">Choose an ID type</label>
//                   <div className="select-wrapper">
//                     <select
//                       name="document_type"
//                       className="form-select-custom dark-select"
//                       value={formData.document_type}
//                       onChange={handleChange}
//                       disabled={isFormLocked}
//                       style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
//                     >
//                       {documentTypeOptions.map((option) => (
//                         <option key={option.value} value={option.value}>
//                           {option.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div> */}



//                   <div className="form-group-custom">
//   <label className="form-label-custom">Choose an ID type</label>

//   <Dropdown>
//     <Dropdown.Toggle
//       className="form-select-custom w-100 text-start bg-transparent border-0 d-flex align-items-center justify-content-space-between"
//       disabled={isFormLocked}
//     >
//       {documentTypeOptions.find(opt => opt.value === formData.document_type)?.label || "Select ID"}
//     </Dropdown.Toggle>

//     <Dropdown.Menu className="w-100">
//       {documentTypeOptions.map((option) => (
//         <Dropdown.Item
//           key={option.value}
//           onClick={() =>
//             !isFormLocked &&
//             handleChange({
//               target: { name: "document_type", value: option.value }
//             })
//           }
//         >
//           {option.label}
//         </Dropdown.Item>
//       ))}
//     </Dropdown.Menu>
//   </Dropdown>
// </div>

//                 {/* Upload Legal ID Image */}
//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Upload Photo of Selected ID</label>
//                   {renderUploadArea(
//                     "legal",
//                     existingLegalIdUrl,
//                     legalIdImageFile,
//                     triggerLegalIdImageUpload,
//                     isFormLocked
//                   )}
//                   <input
//                     type="file"
//                     ref={legalIdImageRef}
//                     onChange={handleLegalIdImageChange}
//                     style={{ display: "none" }}
//                     accept=".jpeg,.jpg,.png"
//                     disabled={isFormLocked}
//                   />
//                 </div>

//                 {/* Bank Name */}
//                 {/* <div className="form-group-custom">
//                   <label className="form-label-custom">Choose Your Bank</label>
//                   <div className="select-wrapper">
//                     <select
//                       name="bank_name"
//                       className="form-select-custom dark-select"
//                       value={formData.bank_name}
//                       onChange={handleChange}
//                       required
//                       disabled={isFormLocked}
//                       style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
//                     >
//                       <option value="">Select a bank</option>
//                       {bankOptions.map((bank) => (
//                         <option key={bank} value={bank}>
//                           {bank}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div> */}


//                 <div className="form-group-custom">
//   <label className="form-label-custom">Choose Your Bank</label>

//   <Dropdown>
//     <Dropdown.Toggle
//       className="form-select-custom w-100 text-start bg-transparent border-0 d-flex align-items-center justify-content-between"
//       disabled={isFormLocked}
//     >
//       {formData.bank_name || "Select a bank"}
//     </Dropdown.Toggle>

//     <Dropdown.Menu className="w-100">
//       {bankOptions.map((bank) => (
//         <Dropdown.Item
//           key={bank}
//           onClick={() =>
//             !isFormLocked &&
//             handleChange({
//               target: { name: "bank_name", value: bank }
//             })
//           }
//         >
//           {bank}
//         </Dropdown.Item>
//       ))}
//     </Dropdown.Menu>
//   </Dropdown>
// </div>

//                 {/* Bank Account Number */}
//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Enter Your Bank Account Number</label>
//                   <input
//                     type="text"
//                     name="bank_account_no"
//                     className="form-input-custom"
//                     placeholder="Enter account number"
//                     value={formData.bank_account_no}
//                     onChange={handleChange}
//                     required
//                     disabled={isFormLocked}
//                     style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
//                   />
//                 </div>

//                 {/* Upload Passbook Image */}
//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Upload Bank Passbook Photo</label>
//                   {renderUploadArea(
//                     "passbook",
//                     existingPassbookUrl,
//                     passbookImageFile,
//                     triggerPassbookImageUpload,
//                     isFormLocked
//                   )}
//                   <input
//                     type="file"
//                     ref={passbookImageRef}
//                     onChange={handlePassbookImageChange}
//                     style={{ display: "none" }}
//                     accept=".jpeg,.jpg,.png"
//                     disabled={isFormLocked}
//                   />
//                 </div>
//               </div>

//               {/* Submit Button (only when not locked) */}
//               {!isFormLocked && (
//                 <button 
//                   type="submit" 
//                   className="submit-btn-custom"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Submitting..." : "Submit Verification"}
//                 </button>
//               )}

//               {/* Dashboard button for locked states - prevents popup via stopPropagation */}
//               {isFormLocked && (
//                 <div style={{ textAlign: "center", marginTop: "20px" }}>
//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigate("/helpsupport");
//                     }}
//                     className="submit-btn-custom"
//                     style={{ backgroundColor: "#fff" }}
//                   >
//                     Help and Support
//                   </button>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SelfCreator;



















// import React, { useState, useRef, useEffect } from "react";
// import { Upload, CheckCircle, Lock, Eye } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Dropdown } from "react-bootstrap";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/SelfCreator.css";
// import { Menu, X } from "lucide-react";

// const SelfCreator = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [verificationStatus, setVerificationStatus] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isPending, setIsPending] = useState(false);
//   const [checkingStatus, setCheckingStatus] = useState(true);
//   const navigate = useNavigate();

//   // Form data - mapped exactly to backend
//   const [formData, setFormData] = useState({
//     legal_name: "",
//     document_type: "passport",
//     bank_name: "",
//     bank_account_no: "",
//   });

//   // File states
//   const legalIdImageRef = useRef(null);
//   const passbookImageRef = useRef(null);
//   const [legalIdImageFile, setLegalIdImageFile] = useState(null);
//   const [passbookImageFile, setPassbookImageFile] = useState(null);

//   // Existing image URLs from GET API
//   const [existingLegalIdUrl, setExistingLegalIdUrl] = useState(null);
//   const [existingPassbookUrl, setExistingPassbookUrl] = useState(null);

//   // Check verification status on component mount
//   useEffect(() => {
//     checkVerificationStatus();
//   }, []);

//   const checkVerificationStatus = async () => {
//     try {
//       setCheckingStatus(true);
//       const token = localStorage.getItem("token");
      
//       if (!token) {
//         navigate("/");
//         return;
//       }

//       // First get verification status
//       const statusResponse = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const statusData = await statusResponse.json();

//       if (statusData.success && statusData.data) {
//         const status = statusData.data.status;
//         setVerificationStatus(status);
        
//         if (status === "APPROVED") {
//           setIsVerified(true);
//           setIsPending(false);
//         } else if (status === "PENDING") {
//           setIsVerified(false);
//           setIsPending(true);
//         } else {
//           setIsVerified(false);
//           setIsPending(false);
//         }

//         // Now fetch full legal details (GET) to pre-fill form and images
//         const legalResponse = await fetch(
//           "https://sagarxo.app/web-api/customer/legal-details",
//           {
//             method: "GET",
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const legalData = await legalResponse.json();

//         if (legalData.success && legalData.data?.legal_details) {
//           const legal = legalData.data.legal_details;
          
//           setFormData({
//             legal_name: legal.legal_name || "",
//             document_type: legal.document_type || "passport",
//             bank_name: legal.bank_name || "",
//             bank_account_no: legal.bank_account_no || "",
//           });

//           // Set image URLs for preview
//           setExistingLegalIdUrl(legal.legal_id_image || null);
//           setExistingPassbookUrl(legal.passbook_image || null);
//         }
//       }
//     } catch (err) {
//       console.error("Error checking verification status:", err);
//     } finally {
//       setCheckingStatus(false);
//     }
//   };

//   const documentTypeOptions = [
//     { label: "Passport", value: "passport" },
//     { label: "Thai National ID", value: "thai_national_id" },
//     { label: "Driving License", value: "driving_licence" },
//   ];

//   const bankOptions = [
//     "Bangkok Bank",
//     "Kasikorn Bank",
//     "Siam Commercial Bank",
//     "Krung Thai Bank",
//     "Bank of Ayudhya",
//     "Thanachart Bank",
//     "TMB Bank",
//     "CIMB Thai Bank",
//     "Standard Chartered Bank",
//     "Hongkong and Shanghai Banking Corporation",
//   ];

//   const isFormLocked = isVerified || isPending;

//   // Show popup when clicking anywhere on locked form
//   const showLockedPopup = () => {
//     if (!isFormLocked) return;
    
//     if (isVerified) {
//       alert(
//         "Your profile has been verified. You are now eligible to make withdrawals. " +
//         "If you wish to edit or update your details, please contact our Help & Support team."
//       );
//     } else if (isPending) {
//       alert(
//         "Your identity verification is currently under review. " +
//         "Once it is successfully completed, you will be able to submit a withdrawal request."
//       );
//     }
//   };

//   const handleChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError(null);
//   };

//   const handleLegalIdImageChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      
//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Legal ID Image as JPEG, JPG or PNG");
//         return;
//       }
//       setLegalIdImageFile(file);
//       setExistingLegalIdUrl(null);
//       setError(null);
//     }
//   };

//   const handlePassbookImageChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      
//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Passbook Image as JPEG, JPG or PNG");
//         return;
//       }
//       setPassbookImageFile(file);
//       setExistingPassbookUrl(null);
//       setError(null);
//     }
//   };

//   const triggerLegalIdImageUpload = (e) => {
//     if (isFormLocked) {
//       e.stopPropagation();
//       showLockedPopup();
//       return;
//     }
//     legalIdImageRef.current.click();
//   };
  
//   const triggerPassbookImageUpload = (e) => {
//     if (isFormLocked) {
//       e.stopPropagation();
//       showLockedPopup();
//       return;
//     }
//     passbookImageRef.current.click();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }

//     setError(null);
//     setIsLoading(true);

//     try {
//       if (!formData.legal_name.trim()) throw new Error("Legal Name Not Found");
//       if (!formData.bank_name) throw new Error("Bank Name Not Found");
//       if (!formData.bank_account_no.trim()) throw new Error("Bank Account Number Not Found");
//       if (!passbookImageFile) throw new Error("Passbook Image Not Found");
//       if (!legalIdImageFile) throw new Error("Legal ID Image Not Found");
//       if (!formData.document_type) throw new Error("Document Type Not Found");

//       const submitData = new FormData();
//       submitData.append("legal_name", formData.legal_name);
//       submitData.append("bank_name", formData.bank_name);
//       submitData.append("bank_account_no", formData.bank_account_no);
//       submitData.append("document_type", formData.document_type);
//       submitData.append("passbook_image", passbookImageFile);
//       submitData.append("legal_id_image", legalIdImageFile);

//       const response = await fetch("https://sagarxo.app/web-api/customer/legal-details", {
//         method: "POST",
//         headers: {
//           "Authorization": localStorage.getItem("token") || "",
//         },
//         body: submitData,
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert(result.message || "Customer Legal Details Updated Successfully");
//         setFormData({
//           legal_name: "",
//           document_type: "passport",
//           bank_name: "",
//           bank_account_no: "",
//         });
//         setLegalIdImageFile(null);
//         setPassbookImageFile(null);
//         setExistingLegalIdUrl(null);
//         setExistingPassbookUrl(null);
//         checkVerificationStatus();
//       } else {
//         throw new Error(result.message || "Failed to update legal details");
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   const UploadIcon = () => (
//     <div className="upload-icon-container">
//       <Upload size={24} />
//     </div>
//   );

//   // Helper to render upload area with preview
//   const renderUploadArea = (type, existingUrl, file, onTrigger, isLocked) => {
//     const hasPreview = existingUrl && !file;
//     const displayImage = file ? URL.createObjectURL(file) : (existingUrl || null);
    
//     if (hasPreview && displayImage) {
//       return (
//         <div 
//           className="upload-box preview-mode" 
//           style={{ cursor: isLocked ? "pointer" : "default", padding: "8px" }}
//           onClick={(e) => {
//             if (isLocked) {
//               e.stopPropagation();
//               showLockedPopup();
//             }
//           }}
//         >
//           <img src={displayImage} alt="Preview" style={{ maxWidth: "100%", maxHeight: "120px", borderRadius: "8px" }} />
//           <div style={{ marginTop: "8px", fontSize: "12px", color: "#666" }}>
//             <Eye size={16} style={{ display: "inline", marginRight: "4px" }} />
//             Document already uploaded
//           </div>
//         </div>
//       );
//     }
    
//     return (
//       <div 
//         className="upload-box" 
//         onClick={onTrigger}
//         style={{ 
//           cursor: isLocked ? "not-allowed" : "pointer",
//           opacity: isLocked ? 0.6 : 1,
//           backgroundColor: isLocked ? "transparent" : undefined
//         }}
//       >
//         <UploadIcon />
//         <span className="upload-text">
//           {file ? file.name : 
//            isLocked ? "Document locked" : 
//            "Browse & Upload Photo (JPEG, JPG, PNG)"}
//         </span>
//       </div>
//     );
//   };

//   // Show loading while checking status
//   if (checkingStatus) {
//     return (
//       <div className="dashboard-container">
//         <button
//           className="mobile-toggle d-none"
//           onClick={toggleSidebar}
//         >
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//         )}
//         <Sidebar show={isSidebarOpen} activeItem="verify" />
//         <main className="main-content">
//           <Header toggleSidebar={toggleSidebar} />
//           <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
//             <div className="text-center">
//               <div className="spinner-border" role="status" style={{ color: "#e9527a" }}>
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3 text-muted">Checking verification status...</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard-container">
//       <button
//         className="mobile-toggle d-none"
//         onClick={toggleSidebar}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//       )}

//       <Sidebar show={isSidebarOpen} activeItem="verify" />

//       <main className="main-content">
//         <Header toggleSidebar={toggleSidebar} />

//         <div className="content-area">
//           <div className="self-creator-container">
//             <h2 className="self-creator-title">
//               {isVerified ? (
//                 <>
//                   <CheckCircle size={28} style={{ color: "#28a745", marginRight: "10px" }} />
//                   Identity Verified
//                 </>
//               ) : isPending ? (
//                 <>
//                   <Lock size={28} style={{ color: "#ff9800", marginRight: "10px" }} />
//                   Verification Pending
//                 </>
//               ) : (
//                 "Verify Identity"
//               )}
//             </h2>

//             {/* Banners */}
//             {isPending && (
//               <div 
//                 className="pending-banner"
//                 style={{
//                   backgroundColor: "#fff3e0",
//                   border: "1px solid #ffe0b2",
//                   borderRadius: "8px",
//                   padding: "16px",
//                   marginBottom: "24px",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "12px",
//                   color: "#e65100"
//                 }}
//               >
//                 <Lock size={20} />
//                 <span style={{ fontWeight: "500" }}>
//                   Your verification is under review. All fields are locked until the review is completed.
//                 </span>
//               </div>
//             )}

//             {/* {isVerified && ( ... )} */}

//             {error && (
//               <div className="error-message">
//                 {error}
//               </div>
//             )}

//             <form style={{ position: "relative" }} className="form-wrapper" onSubmit={handleSubmit} onClick={isFormLocked ? showLockedPopup : undefined}>
//               <div>
//                 {/* Overlay when locked - blurred effect */}
//                 {isFormLocked && (
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       inset:0,
//                       backgroundColor: "rgb(255 255 255 / 34%)",
//                       backdropFilter: "blur(-10px)",
//                       zIndex: 10,
//                       borderRadius: "12px",
//                       pointerEvents: "none",
//                     }}
//                   />
//                 )}

//                 {/* Legal Name */}
//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Legal Name*</label>
//                   <input
//                     type="text"
//                     name="legal_name"
//                     className="form-input-custom"
//                     value={formData.legal_name}
//                     onChange={handleChange}
//                     placeholder="Enter your legal name"
//                     required
//                     disabled={isFormLocked}
//                     style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
//                   />
//                   <span className="helper-text">*as per ID document</span>
//                 </div>

//                 {/* Document Type Dropdown */}
//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Choose an ID type</label>
//                   <Dropdown>
//                     <Dropdown.Toggle
//                       className="form-select-custom w-100 text-start bg-transparent border-0 d-flex align-items-center justify-content-space-between"
//                       disabled={isFormLocked}
//                     >
//                       {documentTypeOptions.find(opt => opt.value === formData.document_type)?.label || "Select ID"}
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu className="w-100">
//                       {documentTypeOptions.map((option) => (
//                         <Dropdown.Item
//                           key={option.value}
//                           onClick={() =>
//                             !isFormLocked &&
//                             handleChange({
//                               target: { name: "document_type", value: option.value }
//                             })
//                           }
//                         >
//                           {option.label}
//                         </Dropdown.Item>
//                       ))}
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </div>

//                 {/* Upload Legal ID Image */}
//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Upload Photo of Selected ID</label>
//                   {renderUploadArea(
//                     "legal",
//                     existingLegalIdUrl,
//                     legalIdImageFile,
//                     triggerLegalIdImageUpload,
//                     isFormLocked
//                   )}
//                   <input
//                     type="file"
//                     ref={legalIdImageRef}
//                     onChange={handleLegalIdImageChange}
//                     style={{ display: "none" }}
//                     accept=".jpeg,.jpg,.png"
//                     disabled={isFormLocked}
//                   />
//                 </div>

//                 {/* Bank Name Dropdown */}
//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Choose Your Bank</label>
//                   <Dropdown>
//                     <Dropdown.Toggle
//                       className="form-select-custom w-100 text-start bg-transparent border-0 d-flex align-items-center justify-content-between"
//                       disabled={isFormLocked}
//                     >
//                       {formData.bank_name || "Select a bank"}
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu className="w-100">
//                       {bankOptions.map((bank) => (
//                         <Dropdown.Item
//                           key={bank}
//                           onClick={() =>
//                             !isFormLocked &&
//                             handleChange({
//                               target: { name: "bank_name", value: bank }
//                             })
//                           }
//                         >
//                           {bank}
//                         </Dropdown.Item>
//                       ))}
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </div>

//                 {/* Bank Account Number */}
//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Enter Your Bank Account Number</label>
//                   <input
//                     type="text"
//                     name="bank_account_no"
//                     className="form-input-custom"
//                     placeholder="Enter account number"
//                     value={formData.bank_account_no}
//                     onChange={handleChange}
//                     required
//                     disabled={isFormLocked}
//                     style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
//                   />
//                 </div>

//                 {/* Upload Passbook Image */}
//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Upload Bank Passbook Photo</label>
//                   {renderUploadArea(
//                     "passbook",
//                     existingPassbookUrl,
//                     passbookImageFile,
//                     triggerPassbookImageUpload,
//                     isFormLocked
//                   )}
//                   <input
//                     type="file"
//                     ref={passbookImageRef}
//                     onChange={handlePassbookImageChange}
//                     style={{ display: "none" }}
//                     accept=".jpeg,.jpg,.png"
//                     disabled={isFormLocked}
//                   />
//                 </div>
//               </div>

//               {/* Submit Button (only when not locked) */}
//               {!isFormLocked && (
//                 <button 
//                   type="submit" 
//                   className="submit-btn-custom"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Submitting..." : "Submit Verification"}
//                 </button>
//               )}

//               {/* Dashboard button for locked states - prevents popup via stopPropagation */}
//               {isFormLocked && (
//                 <div style={{ textAlign: "center", marginTop: "20px" }}>
//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigate("/helpsupport");
//                     }}
//                     className="submit-btn-custom"
//                     style={{ backgroundColor: "#fff" }}
//                   >
//                     Help and Support
//                   </button>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SelfCreator;




















// import React, { useState, useRef, useEffect } from "react";
// import { Upload, CheckCircle, Lock, Eye } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Dropdown } from "react-bootstrap";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/SelfCreator.css";
// import { Menu, X } from "lucide-react";

// const SelfCreator = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [verificationStatus, setVerificationStatus] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isPending, setIsPending] = useState(false);
//   const [checkingStatus, setCheckingStatus] = useState(true);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     legal_name: "",
//     document_type: "passport",
//     bank_name: "",
//     bank_account_no: "",
//   });

//   const legalIdImageRef = useRef(null);
//   const passbookImageRef = useRef(null);
//   const [legalIdImageFile, setLegalIdImageFile] = useState(null);
//   const [passbookImageFile, setPassbookImageFile] = useState(null);

//   const [existingLegalIdUrl, setExistingLegalIdUrl] = useState(null);
//   const [existingPassbookUrl, setExistingPassbookUrl] = useState(null);

//   useEffect(() => {
//     checkVerificationStatus();
//   }, []);

//   const checkVerificationStatus = async () => {
//     try {
//       setCheckingStatus(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         navigate("/");
//         return;
//       }

//       const statusResponse = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const statusData = await statusResponse.json();

//       if (statusData.success && statusData.data) {
//         const status = statusData.data.status;
//         setVerificationStatus(status);

//         if (status === "APPROVED") {
//           setIsVerified(true);
//           setIsPending(false);
//         } else if (status === "PENDING") {
//           setIsVerified(false);
//           setIsPending(true);
//         } else {
//           setIsVerified(false);
//           setIsPending(false);
//         }

//         const legalResponse = await fetch(
//           "https://sagarxo.app/web-api/customer/legal-details",
//           {
//             method: "GET",
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const legalData = await legalResponse.json();

//         if (legalData.success && legalData.data?.legal_details) {
//           const legal = legalData.data.legal_details;

//           setFormData({
//             legal_name: legal.legal_name || "",
//             document_type: legal.document_type || "passport",
//             bank_name: legal.bank_name || "",
//             bank_account_no: legal.bank_account_no || "",
//           });

//           setExistingLegalIdUrl(legal.legal_id_image || null);
//           setExistingPassbookUrl(legal.passbook_image || null);
//         }
//       }
//     } catch (err) {
//       console.error("Error checking verification status:", err);
//     } finally {
//       setCheckingStatus(false);
//     }
//   };

//   const documentTypeOptions = [
//     { label: "Passport", value: "passport" },
//     { label: "Thai National ID", value: "thai_national_id" },
//     { label: "Driving License", value: "driving_licence" },
//   ];

//   const bankOptions = [
//     "Bangkok Bank",
//     "Kasikorn Bank",
//     "Siam Commercial Bank",
//     "Krung Thai Bank",
//     "Bank of Ayudhya",
//     "Thanachart Bank",
//     "TMB Bank",
//     "CIMB Thai Bank",
//     "Standard Chartered Bank",
//     "Hongkong and Shanghai Banking Corporation",
//   ];

//   const isFormLocked = isVerified || isPending;

//   const showLockedPopup = () => {
//     if (!isFormLocked) return;

//     if (isVerified) {
//       alert(
//         "Your profile has been verified. You are now eligible to make withdrawals. " +
//         "If you wish to edit or update your details, please contact our Help & Support team."
//       );
//     } else if (isPending) {
//       alert(
//         "Your identity verification is currently under review. " +
//         "Once it is successfully completed, you will be able to submit a withdrawal request."
//       );
//     }
//   };

//   const handleChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError(null);
//   };

//   const handleLegalIdImageChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();

//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Legal ID Image as JPEG, JPG or PNG");
//         return;
//       }
//       setLegalIdImageFile(file);
//       setExistingLegalIdUrl(null);
//       setError(null);
//     }
//   };

//   const handlePassbookImageChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();

//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Passbook Image as JPEG, JPG or PNG");
//         return;
//       }
//       setPassbookImageFile(file);
//       setExistingPassbookUrl(null);
//       setError(null);
//     }
//   };

//   const triggerLegalIdImageUpload = (e) => {
//     if (isFormLocked) {
//       e.stopPropagation();
//       showLockedPopup();
//       return;
//     }
//     legalIdImageRef.current.click();
//   };

//   const triggerPassbookImageUpload = (e) => {
//     if (isFormLocked) {
//       e.stopPropagation();
//       showLockedPopup();
//       return;
//     }
//     passbookImageRef.current.click();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }

//     setError(null);
//     setIsLoading(true);

//     try {
//       if (!formData.legal_name.trim()) throw new Error("Legal Name Not Found");
//       if (!formData.bank_name) throw new Error("Bank Name Not Found");
//       if (!formData.bank_account_no.trim()) throw new Error("Bank Account Number Not Found");
//       if (!passbookImageFile) throw new Error("Passbook Image Not Found");
//       if (!legalIdImageFile) throw new Error("Legal ID Image Not Found");
//       if (!formData.document_type) throw new Error("Document Type Not Found");

//       const submitData = new FormData();
//       submitData.append("legal_name", formData.legal_name);
//       submitData.append("bank_name", formData.bank_name);
//       submitData.append("bank_account_no", formData.bank_account_no);
//       submitData.append("document_type", formData.document_type);
//       submitData.append("passbook_image", passbookImageFile);
//       submitData.append("legal_id_image", legalIdImageFile);

//       const response = await fetch("https://sagarxo.app/web-api/customer/legal-details", {
//         method: "POST",
//         headers: {
//           Authorization: localStorage.getItem("token") || "",
//         },
//         body: submitData,
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert(result.message || "Customer Legal Details Updated Successfully");
//         setFormData({
//           legal_name: "",
//           document_type: "passport",
//           bank_name: "",
//           bank_account_no: "",
//         });
//         setLegalIdImageFile(null);
//         setPassbookImageFile(null);
//         setExistingLegalIdUrl(null);
//         setExistingPassbookUrl(null);
//         checkVerificationStatus();
//       } else {
//         throw new Error(result.message || "Failed to update legal details");
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   const UploadIcon = () => (
//     <div className="upload-icon-container">
//       <Upload size={24} />
//     </div>
//   );

//   const renderUploadArea = (type, existingUrl, file, onTrigger, isLocked) => {
//     const hasPreview = existingUrl && !file;
//     const displayImage = file ? URL.createObjectURL(file) : existingUrl || null;

//     if (hasPreview && displayImage) {
//       return (
//         <div
//           className="upload-box preview-mode"
//           style={{ cursor: isLocked ? "pointer" : "default", padding: "8px" }}
//           onClick={(e) => {
//             if (isLocked) {
//               e.stopPropagation();
//               showLockedPopup();
//             }
//           }}
//         >
//           <img src={displayImage} alt="Preview" style={{ maxWidth: "100%", maxHeight: "120px", borderRadius: "8px" }} />
//           <div style={{ marginTop: "8px", fontSize: "12px", color: "#666" }}>
//             <Eye size={16} style={{ display: "inline", marginRight: "4px" }} />
//             Document already uploaded
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div
//         className="upload-box"
//         onClick={onTrigger}
//         style={{
//           cursor: isLocked ? "not-allowed" : "pointer",
//           opacity: isLocked ? 0.6 : 1,
//           backgroundColor: isLocked ? "transparent" : undefined
//         }}
//       >
//         <UploadIcon />
//         <span className="upload-text">
//           {file ? file.name : isLocked ? "Document locked" : "Browse & Upload Photo (JPEG, JPG, PNG)"}
//         </span>
//       </div>
//     );
//   };

//   if (checkingStatus) {
//     return (
//       <div className="dashboard-container">
//         <button className="mobile-toggle d-lg-none" onClick={toggleSidebar}>
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} activeItem="verify" />
//         <main className="main-content">
//           <Header toggleSidebar={toggleSidebar} />
//           <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
//             <div className="text-center">
//               <div className="spinner-border" role="status" style={{ color: "#e9527a" }}>
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3 text-muted">Checking verification status...</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard-container">
//       <button className="mobile-toggle d-lg-none" onClick={toggleSidebar}>
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} activeItem="verify" />

//       <main className="main-content">
//         <Header toggleSidebar={toggleSidebar} />

//         <div className="content-area">
//           <div className="self-creator-container">
//             <h2 className="self-creator-title">
//               {isVerified ? (
//                 <>
//                   <CheckCircle size={28} style={{ color: "#28a745", marginRight: "10px" }} />
//                   Identity Verified
//                 </>
//               ) : isPending ? (
//                 <>
//                   <Lock size={28} style={{ color: "#ff9800", marginRight: "10px" }} />
//                   Verification Pending
//                 </>
//               ) : (
//                 "Verify Identity"
//               )}
//             </h2>

//             {/* {isPending && (
//               <div
//                 className="pending-banner"
//                 style={{
//                   backgroundColor: "#fff3e0",
//                   border: "1px solid #ffe0b2",
//                   borderRadius: "8px",
//                   padding: "16px",
//                   marginBottom: "24px",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "12px",
//                   color: "#e65100"
//                 }}
//               >
//                 <Lock size={20} />
//                 <span style={{ fontWeight: "500" }}>
//                   Your verification is under review. All fields are locked until the review is completed.
//                 </span>
//               </div>
//             )} */}

//             {error && (
//               <div className="error-message">
//                 {error}
//               </div>
//             )}

//             <form style={{ position: "relative" }} className="form-wrapper" onSubmit={handleSubmit} onClick={isFormLocked ? showLockedPopup : undefined}>
//               <div>
//                 {isFormLocked && (
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       backgroundColor: "rgb(255 255 255 / 34%)",
//                       backdropFilter: "blur(0px)",
//                       zIndex: 10,
//                       borderRadius: "12px",
//                       pointerEvents: "none",
//                     }}
//                   />
//                 )}

//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Legal Name*</label>
//                   <input
//                     type="text"
//                     name="legal_name"
//                     className="form-input-custom"
//                     value={formData.legal_name}
//                     onChange={handleChange}
//                     placeholder="Enter your legal name"
//                     required
//                     disabled={isFormLocked}
//                     style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
//                   />
//                   <span className="helper-text">*as per ID document</span>
//                 </div>

//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Choose an ID type</label>
//                   <Dropdown>
//                     <Dropdown.Toggle
//                       className="form-select-custom w-100 text-start bg-transparent border-0 d-flex align-items-center justify-content-between"
//                       disabled={isFormLocked}
//                     >
//                       {documentTypeOptions.find(opt => opt.value === formData.document_type)?.label || "Select ID"}
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu className="w-100">
//                       {documentTypeOptions.map((option) => (
//                         <Dropdown.Item
//                           key={option.value}
//                           onClick={() =>
//                             !isFormLocked &&
//                             handleChange({
//                               target: { name: "document_type", value: option.value }
//                             })
//                           }
//                         >
//                           {option.label}
//                         </Dropdown.Item>
//                       ))}
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </div>

//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Upload Photo of Selected ID</label>
//                   {renderUploadArea(
//                     "legal",
//                     existingLegalIdUrl,
//                     legalIdImageFile,
//                     triggerLegalIdImageUpload,
//                     isFormLocked
//                   )}
//                   <input
//                     type="file"
//                     ref={legalIdImageRef}
//                     onChange={handleLegalIdImageChange}
//                     style={{ display: "none" }}
//                     accept=".jpeg,.jpg,.png"
//                     disabled={isFormLocked}
//                   />
//                 </div>

//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Choose Your Bank</label>
//                   <Dropdown>
//                     <Dropdown.Toggle
//                       className="form-select-custom w-100 text-start bg-transparent border-0 d-flex align-items-center justify-content-between"
//                       disabled={isFormLocked}
//                     >
//                       {formData.bank_name || "Select a bank"}
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu className="w-100">
//                       {bankOptions.map((bank) => (
//                         <Dropdown.Item
//                           key={bank}
//                           onClick={() =>
//                             !isFormLocked &&
//                             handleChange({
//                               target: { name: "bank_name", value: bank }
//                             })
//                           }
//                         >
//                           {bank}
//                         </Dropdown.Item>
//                       ))}
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </div>

//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Enter Your Bank Account Number</label>
//                   <input
//                     type="text"
//                     name="bank_account_no"
//                     className="form-input-custom"
//                     placeholder="Enter account number"
//                     value={formData.bank_account_no}
//                     onChange={handleChange}
//                     required
//                     disabled={isFormLocked}
//                     style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
//                   />
//                 </div>

//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Upload Bank Passbook Photo</label>
//                   {renderUploadArea(
//                     "passbook",
//                     existingPassbookUrl,
//                     passbookImageFile,
//                     triggerPassbookImageUpload,
//                     isFormLocked
//                   )}
//                   <input
//                     type="file"
//                     ref={passbookImageRef}
//                     onChange={handlePassbookImageChange}
//                     style={{ display: "none" }}
//                     accept=".jpeg,.jpg,.png"
//                     disabled={isFormLocked}
//                   />
//                 </div>
//               </div>

//               {!isFormLocked && (
//                 <button
//                   type="submit"
//                   className="submit-btn-custom"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Submitting..." : "Submit Verification"}
//                 </button>
//               )}

//               {isFormLocked && (
//                 <div style={{ textAlign: "center", marginTop: "20px" }}>
//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigate("/helpsupport");
//                     }}
//                     className="submit-btn-custom"
//                     style={{ backgroundColor: "#fff" }}
//                   >
//                     Help and Support
//                   </button>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SelfCreator;






























// import React, { useState, useRef, useEffect } from "react";
// import { Upload, CheckCircle, Lock, Eye } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Dropdown, Modal, Button } from "react-bootstrap";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/SelfCreator.css";
// import { Menu, X } from "lucide-react";

// const SelfCreator = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [verificationStatus, setVerificationStatus] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isPending, setIsPending] = useState(false);
//   const [checkingStatus, setCheckingStatus] = useState(true);
//   const navigate = useNavigate();

//   // Modal state for popup messages
//   const [showMessageModal, setShowMessageModal] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [modalMessage, setModalMessage] = useState("");

//   const [formData, setFormData] = useState({
//     legal_name: "",
//     document_type: "passport",
//     bank_name: "",
//     bank_account_no: "",
//   });

//   const legalIdImageRef = useRef(null);
//   const passbookImageRef = useRef(null);
//   const [legalIdImageFile, setLegalIdImageFile] = useState(null);
//   const [passbookImageFile, setPassbookImageFile] = useState(null);

//   const [existingLegalIdUrl, setExistingLegalIdUrl] = useState(null);
//   const [existingPassbookUrl, setExistingPassbookUrl] = useState(null);

//   useEffect(() => {
//     checkVerificationStatus();
//   }, []);

//   // Helper to show modal message instead of alert
//   const showMessage = (title, message) => {
//     setModalTitle(title);
//     setModalMessage(message);
//     setShowMessageModal(true);
//   };

//   const checkVerificationStatus = async () => {
//     try {
//       setCheckingStatus(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         navigate("/");
//         return;
//       }

//       const statusResponse = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//         {
//           method: "GET",
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const statusData = await statusResponse.json();

//       if (statusData.success && statusData.data) {
//         const status = statusData.data.status;
//         setVerificationStatus(status);

//         if (status === "APPROVED") {
//           setIsVerified(true);
//           setIsPending(false);
//         } else if (status === "PENDING") {
//           setIsVerified(false);
//           setIsPending(true);
//         } else {
//           setIsVerified(false);
//           setIsPending(false);
//         }

//         const legalResponse = await fetch(
//           "https://sagarxo.app/web-api/customer/legal-details",
//           {
//             method: "GET",
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const legalData = await legalResponse.json();

//         if (legalData.success && legalData.data?.legal_details) {
//           const legal = legalData.data.legal_details;

//           setFormData({
//             legal_name: legal.legal_name || "",
//             document_type: legal.document_type || "passport",
//             bank_name: legal.bank_name || "",
//             bank_account_no: legal.bank_account_no || "",
//           });

//           setExistingLegalIdUrl(legal.legal_id_image || null);
//           setExistingPassbookUrl(legal.passbook_image || null);
//         }
//       }
//     } catch (err) {
//       console.error("Error checking verification status:", err);
//     } finally {
//       setCheckingStatus(false);
//     }
//   };

//   const documentTypeOptions = [
//     { label: "Passport", value: "passport" },
//     { label: "Thai National ID", value: "thai_national_id" },
//     { label: "Driving License", value: "driving_licence" },
//   ];

//   const bankOptions = [
//     "Bangkok Bank",
//     "Kasikorn Bank",
//     "Siam Commercial Bank",
//     "Krung Thai Bank",
//     "Bank of Ayudhya",
//     "Thanachart Bank",
//     "TMB Bank",
//     "CIMB Thai Bank",
//     "Standard Chartered Bank",
//     "Hongkong and Shanghai Banking Corporation",
//   ];

//   const isFormLocked = isVerified || isPending;

//   const showLockedPopup = () => {
//     if (!isFormLocked) return;

//     if (isVerified) {
//       showMessage(
//         "Identity Verified",
//         "Your profile has been verified. You are now eligible to make withdrawals. " +
//         "If you wish to edit or update your details, please contact our Help & Support team."
//       );
//     } else if (isPending) {
//       showMessage(
//         "Verification Pending",
//         "Your identity verification is currently under review. " +
//         "Once it is successfully completed, you will be able to submit a withdrawal request."
//       );
//     }
//   };

//   const handleChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError(null);
//   };

//   const handleLegalIdImageChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();

//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Legal ID Image as JPEG, JPG or PNG");
//         return;
//       }
//       setLegalIdImageFile(file);
//       setExistingLegalIdUrl(null);
//       setError(null);
//     }
//   };

//   const handlePassbookImageChange = (e) => {
//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = [".jpeg", ".jpg", ".png"];
//       const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();

//       if (!validExtensions.includes(fileExtension)) {
//         setError("Please upload Passbook Image as JPEG, JPG or PNG");
//         return;
//       }
//       setPassbookImageFile(file);
//       setExistingPassbookUrl(null);
//       setError(null);
//     }
//   };

//   const triggerLegalIdImageUpload = (e) => {
//     if (isFormLocked) {
//       e.stopPropagation();
//       showLockedPopup();
//       return;
//     }
//     legalIdImageRef.current.click();
//   };

//   const triggerPassbookImageUpload = (e) => {
//     if (isFormLocked) {
//       e.stopPropagation();
//       showLockedPopup();
//       return;
//     }
//     passbookImageRef.current.click();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isFormLocked) {
//       showLockedPopup();
//       return;
//     }

//     setError(null);
//     setIsLoading(true);

//     try {
//       if (!formData.legal_name.trim()) throw new Error("Legal Name Not Found");
//       if (!formData.bank_name) throw new Error("Bank Name Not Found");
//       if (!formData.bank_account_no.trim()) throw new Error("Bank Account Number Not Found");
//       if (!passbookImageFile) throw new Error("Passbook Image Not Found");
//       if (!legalIdImageFile) throw new Error("Legal ID Image Not Found");
//       if (!formData.document_type) throw new Error("Document Type Not Found");

//       const submitData = new FormData();
//       submitData.append("legal_name", formData.legal_name);
//       submitData.append("bank_name", formData.bank_name);
//       submitData.append("bank_account_no", formData.bank_account_no);
//       submitData.append("document_type", formData.document_type);
//       submitData.append("passbook_image", passbookImageFile);
//       submitData.append("legal_id_image", legalIdImageFile);

//       const response = await fetch("https://sagarxo.app/web-api/customer/legal-details", {
//         method: "POST",
//         headers: {
//           Authorization: localStorage.getItem("token") || "",
//         },
//         body: submitData,
//       });

//       const result = await response.json();

//       if (result.success) {
//         showMessage(
//           "Success",
//           result.message || "Customer Legal Details Updated Successfully"
//         );
//         setFormData({
//           legal_name: "",
//           document_type: "passport",
//           bank_name: "",
//           bank_account_no: "",
//         });
//         setLegalIdImageFile(null);
//         setPassbookImageFile(null);
//         setExistingLegalIdUrl(null);
//         setExistingPassbookUrl(null);
//         checkVerificationStatus();
//       } else {
//         throw new Error(result.message || "Failed to update legal details");
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   const UploadIcon = () => (
//     <div className="upload-icon-container">
//       <Upload size={24} />
//     </div>
//   );

//   const renderUploadArea = (type, existingUrl, file, onTrigger, isLocked) => {
//     const hasPreview = existingUrl && !file;
//     const displayImage = file ? URL.createObjectURL(file) : existingUrl || null;

//     if (hasPreview && displayImage) {
//       return (
//         <div
//           className="upload-box preview-mode"
//           style={{ cursor: isLocked ? "pointer" : "default", padding: "8px" }}
//           onClick={(e) => {
//             if (isLocked) {
//               e.stopPropagation();
//               showLockedPopup();
//             }
//           }}
//         >
//           <img src={displayImage} alt="Preview" style={{ maxWidth: "100%", maxHeight: "120px", borderRadius: "8px" }} />
//           <div style={{ marginTop: "8px", fontSize: "12px", color: "#666" }}>
//             <Eye size={16} style={{ display: "inline", marginRight: "4px" }} />
//             Document already uploaded
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div
//         className="upload-box"
//         onClick={onTrigger}
//         style={{
//           cursor: isLocked ? "not-allowed" : "pointer",
//           opacity: isLocked ? 0.6 : 1,
//           backgroundColor: isLocked ? "transparent" : undefined
//         }}
//       >
//         <UploadIcon />
//         <span className="upload-text">
//           {file ? file.name : isLocked ? "Document locked" : "Browse & Upload Photo (JPEG, JPG, PNG)"}
//         </span>
//       </div>
//     );
//   };

//   if (checkingStatus) {
//     return (
//       <div className="dashboard-container">
//         <button className="mobile-toggle d-lg-none" onClick={toggleSidebar}>
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} activeItem="verify" />
//         <main className="main-content">
//           <Header toggleSidebar={toggleSidebar} />
//           <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
//             <div className="text-center">
//               <div className="spinner-border" role="status" style={{ color: "#e9527a" }}>
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <p className="mt-3 text-muted">Checking verification status...</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard-container">
//       {/* <button className="mobile-toggle d-lg-none" onClick={toggleSidebar}>
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button> */}

//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//       )}

//       <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} activeItem="verify" />

//       <main className="main-content">
//         <Header toggleSidebar={toggleSidebar} />

//         <div className="content-area">
//           <div className="self-creator-container">
//             <h2 className="self-creator-title">
//               {isVerified ? (
//                 <>
//                   <CheckCircle size={28} style={{ color: "#28a745", marginRight: "10px" }} />
//                   Identity Verified
//                 </>
//               ) : isPending ? (
//                 <>
//                   <Lock size={28} style={{ color: "#ff9800", marginRight: "10px" }} />
//                   Verification Pending
//                 </>
//               ) : (
//                 "Verify Identity"
//               )}
//             </h2>

//             {error && (
//               <div className="error-message">
//                 {error}
//               </div>
//             )}

//             <form style={{ position: "relative" }} className="form-wrapper" onSubmit={handleSubmit} onClick={isFormLocked ? showLockedPopup : undefined}>
//               <div>
//                 {isFormLocked && (
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       backgroundColor: "rgb(255 255 255 / 34%)",
//                       backdropFilter: "blur(0px)",
//                       zIndex: 10,
//                       borderRadius: "12px",
//                       pointerEvents: "none",
//                     }}
//                   />
//                 )}

//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Legal Name*</label>
//                   <input
//                     type="text"
//                     name="legal_name"
//                     className="form-input-custom"
//                     value={formData.legal_name}
//                     onChange={handleChange}
//                     placeholder="Enter your legal name"
//                     required
//                     disabled={isFormLocked}
//                     style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
//                   />
//                   <span className="helper-text">*as per ID document</span>
//                 </div>

//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Choose an ID type</label>
//                   <Dropdown>
//                     <Dropdown.Toggle
//                       className="form-select-custom w-100 text-start bg-transparent border-0 d-flex align-items-center justify-content-between"
//                       disabled={isFormLocked}
//                     >
//                       {documentTypeOptions.find(opt => opt.value === formData.document_type)?.label || "Select ID"}
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu className="w-100">
//                       {documentTypeOptions.map((option) => (
//                         <Dropdown.Item
//                           key={option.value}
//                           onClick={() =>
//                             !isFormLocked &&
//                             handleChange({
//                               target: { name: "document_type", value: option.value }
//                             })
//                           }
//                         >
//                           {option.label}
//                         </Dropdown.Item>
//                       ))}
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </div>

//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Upload Photo of Selected ID</label>
//                   {renderUploadArea(
//                     "legal",
//                     existingLegalIdUrl,
//                     legalIdImageFile,
//                     triggerLegalIdImageUpload,
//                     isFormLocked
//                   )}
//                   <input
//                     type="file"
//                     ref={legalIdImageRef}
//                     onChange={handleLegalIdImageChange}
//                     style={{ display: "none" }}
//                     accept=".jpeg,.jpg,.png"
//                     disabled={isFormLocked}
//                   />
//                 </div>

//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Choose Your Bank</label>
//                   <Dropdown>
//                     <Dropdown.Toggle
//                       className="form-select-custom w-100 text-start bg-transparent border-0 d-flex align-items-center justify-content-between"
//                       disabled={isFormLocked}
//                     >
//                       {formData.bank_name || "Select a bank"}
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu className="w-100">
//                       {bankOptions.map((bank) => (
//                         <Dropdown.Item
//                           key={bank}
//                           onClick={() =>
//                             !isFormLocked &&
//                             handleChange({
//                               target: { name: "bank_name", value: bank }
//                             })
//                           }
//                         >
//                           {bank}
//                         </Dropdown.Item>
//                       ))}
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </div>

//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Enter Your Bank Account Number</label>
//                   <input
//                     type="text"
//                     name="bank_account_no"
//                     className="form-input-custom"
//                     placeholder="Enter account number"
//                     value={formData.bank_account_no}
//                     onChange={handleChange}
//                     required
//                     disabled={isFormLocked}
//                     style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
//                   />
//                 </div>

//                 <div className="form-group-custom">
//                   <label className="form-label-custom">Upload Bank Passbook Photo</label>
//                   {renderUploadArea(
//                     "passbook",
//                     existingPassbookUrl,
//                     passbookImageFile,
//                     triggerPassbookImageUpload,
//                     isFormLocked
//                   )}
//                   <input
//                     type="file"
//                     ref={passbookImageRef}
//                     onChange={handlePassbookImageChange}
//                     style={{ display: "none" }}
//                     accept=".jpeg,.jpg,.png"
//                     disabled={isFormLocked}
//                   />
//                 </div>
//               </div>

//               {!isFormLocked && (
//                 <button
//                   type="submit"
//                   className="submit-btn-custom"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Submitting..." : "Submit Verification"}
//                 </button>
//               )}

//               {isFormLocked && (
//                 <div style={{ textAlign: "center", marginTop: "20px" }}>
//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                     }}
//                     className="submit-btn-custom"
//                     style={{ backgroundColor: "#fff" }}
//                   >
//                     Your Legal Details Submitted
//                   </button>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </main>

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
// };

// export default SelfCreator;




















import React, { useState, useRef, useEffect } from "react";
import { Upload, CheckCircle, Lock, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Dropdown, Modal, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../css/SelfCreator.css";
import { Menu, X } from "lucide-react";

const SelfCreator = () => {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const navigate = useNavigate();

  // Modal state for popup messages
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const [formData, setFormData] = useState({
    legal_name: "",
    document_type: "passport",
    bank_name: "",
    bank_account_no: "",
  });

  const legalIdImageRef = useRef(null);
  const passbookImageRef = useRef(null);
  const [legalIdImageFile, setLegalIdImageFile] = useState(null);
  const [passbookImageFile, setPassbookImageFile] = useState(null);

  const [existingLegalIdUrl, setExistingLegalIdUrl] = useState(null);
  const [existingPassbookUrl, setExistingPassbookUrl] = useState(null);

  useEffect(() => {
    checkVerificationStatus();
  }, []);

  const showMessage = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
    setShowMessageModal(true);
  };

  const checkVerificationStatus = async () => {
    try {
      setCheckingStatus(true);
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/");
        return;
      }

      const statusResponse = await fetch(
        "https://sagarxo.app/web-api/customer/legal-details-verification-status",
        {
          method: "GET",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      const statusData = await statusResponse.json();

      if (statusData.success && statusData.data) {
        const status = statusData.data.status;
        setVerificationStatus(status);

        if (status === "APPROVED") {
          setIsVerified(true);
          setIsPending(false);
        } else if (status === "PENDING") {
          setIsVerified(false);
          setIsPending(true);
        } else {
          setIsVerified(false);
          setIsPending(false);
        }

        const legalResponse = await fetch(
          "https://sagarxo.app/web-api/customer/legal-details",
          {
            method: "GET",
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        const legalData = await legalResponse.json();

        if (legalData.success && legalData.data?.legal_details) {
          const legal = legalData.data.legal_details;

          setFormData({
            legal_name: legal.legal_name || "",
            document_type: legal.document_type || "passport",
            bank_name: legal.bank_name || "",
            bank_account_no: legal.bank_account_no || "",
          });

          setExistingLegalIdUrl(legal.legal_id_image || null);
          setExistingPassbookUrl(legal.passbook_image || null);
        }
      }
    } catch (err) {
      console.error("Error checking verification status:", err);
    } finally {
      setCheckingStatus(false);
    }
  };

  const documentTypeOptions = [
    { label: t("selfCreator.docPassport"), value: "passport" },
    { label: t("selfCreator.docThaiNationalId"), value: "thai_national_id" },
    { label: t("selfCreator.docDrivingLicense"), value: "driving_licence" },
  ];

  const bankOptions = [
    "Bangkok Bank",
    "Kasikorn Bank",
    "Siam Commercial Bank",
    "Krung Thai Bank",
    "Bank of Ayudhya",
    "Thanachart Bank",
    "TMB Bank",
    "CIMB Thai Bank",
    "Standard Chartered Bank",
    "Hongkong and Shanghai Banking Corporation",
  ];

  const isFormLocked = isVerified || isPending;

  const showLockedPopup = () => {
    if (!isFormLocked) return;

    if (isVerified) {
      showMessage(
        t("selfCreator.verifiedPopupTitle"),
        t("selfCreator.verifiedPopupMessage")
      );
    } else if (isPending) {
      showMessage(
        t("selfCreator.pendingPopupTitle"),
        t("selfCreator.pendingPopupMessage")
      );
    }
  };

  const handleChange = (e) => {
    if (isFormLocked) {
      showLockedPopup();
      return;
    }
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleLegalIdImageChange = (e) => {
    if (isFormLocked) {
      showLockedPopup();
      return;
    }
    const file = e.target.files[0];
    if (file) {
      const validExtensions = [".jpeg", ".jpg", ".png"];
      const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();

      if (!validExtensions.includes(fileExtension)) {
        setError(t("selfCreator.errorImageFormat"));
        return;
      }
      setLegalIdImageFile(file);
      setExistingLegalIdUrl(null);
      setError(null);
    }
  };

  const handlePassbookImageChange = (e) => {
    if (isFormLocked) {
      showLockedPopup();
      return;
    }
    const file = e.target.files[0];
    if (file) {
      const validExtensions = [".jpeg", ".jpg", ".png"];
      const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();

      if (!validExtensions.includes(fileExtension)) {
        setError(t("selfCreator.errorImageFormat"));
        return;
      }
      setPassbookImageFile(file);
      setExistingPassbookUrl(null);
      setError(null);
    }
  };

  const triggerLegalIdImageUpload = (e) => {
    if (isFormLocked) {
      e.stopPropagation();
      showLockedPopup();
      return;
    }
    legalIdImageRef.current.click();
  };

  const triggerPassbookImageUpload = (e) => {
    if (isFormLocked) {
      e.stopPropagation();
      showLockedPopup();
      return;
    }
    passbookImageRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormLocked) {
      showLockedPopup();
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      if (!formData.legal_name.trim()) throw new Error(t("selfCreator.errorLegalName"));
      if (!formData.bank_name) throw new Error(t("selfCreator.errorBankName"));
      if (!formData.bank_account_no.trim()) throw new Error(t("selfCreator.errorAccountNumber"));
      if (!passbookImageFile) throw new Error(t("selfCreator.errorPassbookImage"));
      if (!legalIdImageFile) throw new Error(t("selfCreator.errorLegalIdImage"));
      if (!formData.document_type) throw new Error(t("selfCreator.errorDocumentType"));

      const submitData = new FormData();
      submitData.append("legal_name", formData.legal_name);
      submitData.append("bank_name", formData.bank_name);
      submitData.append("bank_account_no", formData.bank_account_no);
      submitData.append("document_type", formData.document_type);
      submitData.append("passbook_image", passbookImageFile);
      submitData.append("legal_id_image", legalIdImageFile);

      const response = await fetch("https://sagarxo.app/web-api/customer/legal-details", {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        showMessage(
          t("selfCreator.successTitle"),
          result.message || t("selfCreator.successMessage")
        );
        setFormData({
          legal_name: "",
          document_type: "passport",
          bank_name: "",
          bank_account_no: "",
        });
        setLegalIdImageFile(null);
        setPassbookImageFile(null);
        setExistingLegalIdUrl(null);
        setExistingPassbookUrl(null);
        checkVerificationStatus();
      } else {
        throw new Error(result.message || t("selfCreator.successMessage"));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const UploadIcon = () => (
    <div className="upload-icon-container">
      <Upload size={24} />
    </div>
  );

  const renderUploadArea = (type, existingUrl, file, onTrigger, isLocked) => {
    const hasPreview = existingUrl && !file;
    const displayImage = file ? URL.createObjectURL(file) : existingUrl || null;

    if (hasPreview && displayImage) {
      return (
        <div
          className="upload-box preview-mode"
          style={{ cursor: isLocked ? "pointer" : "default", padding: "8px" }}
          onClick={(e) => {
            if (isLocked) {
              e.stopPropagation();
              showLockedPopup();
            }
          }}
        >
          <img src={displayImage} alt="Preview" style={{ maxWidth: "100%", maxHeight: "120px", borderRadius: "8px" }} />
          <div style={{ marginTop: "8px", fontSize: "12px", color: "#666" }}>
            <Eye size={16} style={{ display: "inline", marginRight: "4px" }} />
            {t("selfCreator.alreadyUploaded")}
          </div>
        </div>
      );
    }

    return (
      <div
        className="upload-box"
        onClick={onTrigger}
        style={{
          cursor: isLocked ? "not-allowed" : "pointer",
          opacity: isLocked ? 0.6 : 1,
          backgroundColor: isLocked ? "transparent" : undefined
        }}
      >
        <UploadIcon />
        <span className="upload-text">
          {file ? file.name : isLocked ? t("selfCreator.documentLocked") : t("selfCreator.browseUpload")}
        </span>
      </div>
    );
  };

  if (checkingStatus) {
    return (
      <div className="dashboard-container">
        <button className="mobile-toggle d-lg-none" onClick={toggleSidebar}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
        {isSidebarOpen && (
          <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
        )}
        <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} activeItem="verify" />
        <main className="main-content">
          <Header toggleSidebar={toggleSidebar} />
          <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
            <div className="text-center">
              <div className="spinner-border" role="status" style={{ color: "#e9527a" }}>
                <span className="visually-hidden">{t("selfCreator.checkingStatus")}</span>
              </div>
              <p className="mt-3 text-muted">{t("selfCreator.checkingStatus")}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {isSidebarOpen && (
        <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
      )}

      <Sidebar show={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} activeItem="verify" />

      <main className="main-content">
        <Header toggleSidebar={toggleSidebar} />

        <div className="content-area">
          <div className="self-creator-container">
            <h2 className="self-creator-title">
              {isVerified ? (
                <>
                  <CheckCircle size={28} style={{ color: "#28a745", marginRight: "10px" }} />
                  {t("selfCreator.identityVerified")}
                </>
              ) : isPending ? (
                <>
                  <Lock size={28} style={{ color: "#ff9800", marginRight: "10px" }} />
                  {t("selfCreator.verificationPending")}
                </>
              ) : (
                t("selfCreator.verifyIdentity")
              )}
            </h2>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <form style={{ position: "relative" }} className="form-wrapper" onSubmit={handleSubmit} onClick={isFormLocked ? showLockedPopup : undefined}>
              <div>
                {isFormLocked && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgb(255 255 255 / 34%)",
                      backdropFilter: "blur(0px)",
                      zIndex: 10,
                      borderRadius: "12px",
                      pointerEvents: "none",
                    }}
                  />
                )}

                <div className="form-group-custom">
                  <label className="form-label-custom">{t("selfCreator.legalName")}</label>
                  <input
                    type="text"
                    name="legal_name"
                    className="form-input-custom"
                    value={formData.legal_name}
                    onChange={handleChange}
                    placeholder={t("selfCreator.legalNamePlaceholder")}
                    required
                    disabled={isFormLocked}
                    style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
                  />
                  <span className="helper-text">{t("selfCreator.legalNameHelper")}</span>
                </div>

                <div className="form-group-custom">
                  <label className="form-label-custom">{t("selfCreator.chooseIdType")}</label>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="form-select-custom w-100 text-start bg-transparent border-0 d-flex align-items-center justify-content-between"
                      disabled={isFormLocked}
                    >
                      {documentTypeOptions.find(opt => opt.value === formData.document_type)?.label || t("selfCreator.chooseIdType")}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      {documentTypeOptions.map((option) => (
                        <Dropdown.Item
                          key={option.value}
                          onClick={() =>
                            !isFormLocked &&
                            handleChange({
                              target: { name: "document_type", value: option.value }
                            })
                          }
                        >
                          {option.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="form-group-custom">
                  <label className="form-label-custom">{t("selfCreator.uploadIdPhoto")}</label>
                  {renderUploadArea(
                    "legal",
                    existingLegalIdUrl,
                    legalIdImageFile,
                    triggerLegalIdImageUpload,
                    isFormLocked
                  )}
                  <input
                    type="file"
                    ref={legalIdImageRef}
                    onChange={handleLegalIdImageChange}
                    style={{ display: "none" }}
                    accept=".jpeg,.jpg,.png"
                    disabled={isFormLocked}
                  />
                </div>

                <div className="form-group-custom">
                  <label className="form-label-custom">{t("selfCreator.chooseBank")}</label>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="form-select-custom w-100 text-start bg-transparent border-0 d-flex align-items-center justify-content-between"
                      disabled={isFormLocked}
                    >
                      {formData.bank_name || t("selfCreator.selectBank")}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                      {bankOptions.map((bank) => (
                        <Dropdown.Item
                          key={bank}
                          onClick={() =>
                            !isFormLocked &&
                            handleChange({
                              target: { name: "bank_name", value: bank }
                            })
                          }
                        >
                          {bank}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="form-group-custom">
                  <label className="form-label-custom">{t("selfCreator.accountNumber")}</label>
                  <input
                    type="text"
                    name="bank_account_no"
                    className="form-input-custom"
                    placeholder={t("selfCreator.accountPlaceholder")}
                    value={formData.bank_account_no}
                    onChange={handleChange}
                    required
                    disabled={isFormLocked}
                    style={isFormLocked ? { backgroundColor: "transparent", cursor: "not-allowed" } : {}}
                  />
                </div>

                <div className="form-group-custom">
                  <label className="form-label-custom">{t("selfCreator.uploadPassbook")}</label>
                  {renderUploadArea(
                    "passbook",
                    existingPassbookUrl,
                    passbookImageFile,
                    triggerPassbookImageUpload,
                    isFormLocked
                  )}
                  <input
                    type="file"
                    ref={passbookImageRef}
                    onChange={handlePassbookImageChange}
                    style={{ display: "none" }}
                    accept=".jpeg,.jpg,.png"
                    disabled={isFormLocked}
                  />
                </div>
              </div>

              {!isFormLocked && (
                <button
                  type="submit"
                  className="submit-btn-custom"
                  disabled={isLoading}
                >
                  {isLoading ? t("selfCreator.submitting") : t("selfCreator.submitVerification")}
                </button>
              )}

              {isFormLocked && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="submit-btn-custom"
                    style={{ backgroundColor: "#fff" }}
                  >
                    {t("selfCreator.legalDetailsSubmitted")}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>

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
          <Button
            variant="primary"
            onClick={() => setShowMessageModal(false)}
            style={{ backgroundColor: "#e9527a", border: "none" }}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SelfCreator;