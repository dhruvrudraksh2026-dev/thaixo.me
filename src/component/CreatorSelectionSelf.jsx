// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/CreatorSelectionSelf.css";
// import { ChevronDown } from "lucide-react";

// export default function CreatorSelectionSelf() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "Onnaa kndsndknsdkn",
//     idType: "Passport",
//     bank: "Bangkok Bank",
//     accountNumber: "123-4-56789-0",
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSidebarOpen(window.innerWidth >= 992);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="main-screen">
//       <Sidebar show={isSidebarOpen} />
      
//       <div className="content-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <div className="container-fluid">
//           <div className="row justify-content-start responsive-design-card bg-white">
//             <div className="col-12 col-md-10 col-lg-8 col-xl-7">
              
//               <h2 className="h4 mb-4 text-dark font-weight-bold pt-4" style={{ color: '#444' }}>Self Creator</h2>

//               <div className="bank-details-card" style={{ backgroundColor: '#eb869c', border: 'none' }}>
//                 <form className="p-2 p-md-4">
                  
//                   {/* Enter Name */}
//                   <div className="fieldset-container">
//                     <label style={{ backgroundColor: '#eb869c' }}>Enter Name*</label>
//                     <input
//                       type="text"
//                       className="fieldset-field fw-bold"
//                       value={formData.name}
//                       onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     />
//                   </div>

//                   {/* Choose ID Type */}
//                   <div className="fieldset-container">
//                     <label style={{ backgroundColor: '#eb869c' }}>Choose an ID type and upload the photo</label>
//                     <div className="position-relative">
//                       <select 
//                         className="fieldset-field fw-bold appearance-none"
//                         value={formData.idType}
//                         onChange={(e) => setFormData({...formData, idType: e.target.value})}
//                         style={{ appearance: 'none', WebkitAppearance: 'none' }}
//                       >
//                         <option value="Passport">Passport</option>
//                         <option value="ID Card">ID Card</option>
//                         <option value="Driving License">Driving License</option>
//                       </select>
//                       <ChevronDown 
//                         className="position-absolute" 
//                         style={{ right: '15px', top: '15px', pointerEvents: 'none' }} 
//                         size={24}
//                       />
//                     </div>
//                   </div>

//                   {/* Upload Photo of ID */}
//                   <div className="fieldset-container">
//                     <label style={{ backgroundColor: '#eb869c' }}>Upload Photo of Selected ID</label>
//                     <div className="file-upload-display">
//                       <img 
//                         src="https://picsum.photos/seed/id/200/120" 
//                         alt="ID Preview" 
//                         className="file-thumbnail"
//                         referrerPolicy="no-referrer"
//                       />
//                       <span className="file-name-text">passport .Jpg</span>
//                     </div>
//                   </div>

//                   {/* Choose Bank */}
//                   <div className="fieldset-container mt-5">
//                     <label style={{ backgroundColor: '#eb869c' }}>Choose Your Bank</label>
//                     <div className="position-relative">
//                       <select 
//                         className="fieldset-field fw-bold appearance-none"
//                         value={formData.bank}
//                         onChange={(e) => setFormData({...formData, bank: e.target.value})}
//                         style={{ appearance: 'none', WebkitAppearance: 'none' }}
//                       >
//                         <option value="Bangkok Bank">Bangkok Bank</option>
//                         <option value="Kasikorn Bank">Kasikorn Bank</option>
//                         <option value="Siam Commercial Bank">Siam Commercial Bank</option>
//                       </select>
//                       <ChevronDown 
//                         className="position-absolute" 
//                         style={{ right: '15px', top: '15px', pointerEvents: 'none' }} 
//                         size={24}
//                       />
//                     </div>
//                   </div>

//                   {/* Bank Account Number */}
//                   <div className="fieldset-container">
//                     <label style={{ backgroundColor: '#eb869c' }}>Enter Your Bank Account Number</label>
//                     <input
//                       type="text"
//                       className="fieldset-field fw-bold"
//                       value={formData.accountNumber}
//                       onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
//                     />
//                   </div>

//                   {/* Upload Bank Photo */}
//                   <div className="fieldset-container">
//                     <label style={{ backgroundColor: '#eb869c' }}>Upload Bank Passbook Photo</label>
//                     <div className="file-upload-display">
//                       <img 
//                         src="https://picsum.photos/seed/bank/200/120" 
//                         alt="Passbook Preview" 
//                         className="file-thumbnail"
//                         referrerPolicy="no-referrer"
//                       />
//                       <span className="file-name-text">Passbook .Jpg</span>
//                     </div>
//                   </div>

//                 </form>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }













// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "../css/CreatorSelectionSelf.css";
// import { ChevronDown, Loader2 } from "lucide-react";

// export default function CreatorSelectionSelf() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     idType: "",
//     bank: "",
//     accountNumber: "",
//     idImageUrl: "",
//     passbookImageUrl: "",
//   });

//   // Fetch legal details from API
//   useEffect(() => {
//     const fetchLegalDetails = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setError("No authentication token found. Please log in.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           "https://sagarxo.app/web-api/customer/legal-details",
//           {
//             method: "GET",
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const result = await response.json();

//         if (result.success && result.data?.legal_details) {
//           const legal = result.data.legal_details;
          
//           // Map document_type to display label
//           let idTypeLabel = "Passport";
//           if (legal.document_type === "thai_national_id") {
//             idTypeLabel = "Thai National ID";
//           } else if (legal.document_type === "passport") {
//             idTypeLabel = "Passport";
//           } else if (legal.document_type === "driving_license") {
//             idTypeLabel = "Driving License";
//           } else {
//             idTypeLabel = legal.document_type || "Passport";
//           }

//           setFormData({
//             name: legal.legal_name || "",
//             idType: idTypeLabel,
//             bank: legal.bank_name || "",
//             accountNumber: legal.bank_account_no || "",
//             idImageUrl: legal.legal_id_image || "",
//             passbookImageUrl: legal.passbook_image || "",
//           });
//         } else {
//           setError(result.message || "Failed to fetch legal details");
//         }
//       } catch (err) {
//         console.error("Error fetching legal details:", err);
//         setError("Network error. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLegalDetails();
//   }, []);

//   // Handle window resize for sidebar (existing logic)
//   useEffect(() => {
//     const handleResize = () => {
//       setIsSidebarOpen(window.innerWidth >= 992);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Loading state
//   if (loading) {
//     return (
//       <div className="main-screen">
//         <Sidebar show={isSidebarOpen} />
//         <div className="content-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div className="container-fluid">
//             <div className="row justify-content-start responsive-design-card bg-white">
//               <div className="col-12 col-md-10 col-lg-8 col-xl-7 text-center py-5">
//                 <Loader2 size={48} className="spin mb-3" style={{ color: "#e9527a" }} />
//                 <p>Loading your details...</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <style>{`.spin { animation: spin 1s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="main-screen">
//         <Sidebar show={isSidebarOpen} />
//         <div className="content-wrapper">
//           <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//           <div className="container-fluid">
//             <div className="row justify-content-start responsive-design-card bg-white">
//               <div className="col-12 col-md-10 col-lg-8 col-xl-7 text-center py-5">
//                 <p style={{ color: "red" }}>{error}</p>
//                 <button 
//                   className="btn btn-primary mt-3" 
//                   onClick={() => window.location.reload()}
//                 >
//                   Retry
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="main-screen">
//       <Sidebar show={isSidebarOpen} />
      
//       <div className="content-wrapper">
//         <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         <div className="container-fluid">
//           <div className="row justify-content-start responsive-design-card bg-white">
//             <div className="col-12 col-md-10 col-lg-8 col-xl-7">
              
//               <h2 className="h4 mb-4 text-dark font-weight-bold pt-4" style={{ color: '#444' }}>Self Creator</h2>

//               <div className="bank-details-card" style={{ backgroundColor: '#eb869c', border: 'none' }}>
//                 <form className="p-2 p-md-4">
                  
//                   {/* Enter Name - read only */}
//                   <div className="fieldset-container">
//                     <label style={{ backgroundColor: '#eb869c' }}>Enter Name*</label>
//                     <input
//                       type="text"
//                       className="fieldset-field fw-bold"
//                       value={formData.name}
//                       readOnly
//                       disabled
//                     />
//                   </div>

//                   {/* Choose ID Type - read only */}
//                   <div className="fieldset-container">
//                     <label style={{ backgroundColor: '#eb869c' }}>Choose an ID type and upload the photo</label>
//                     <div className="position-relative">
//                       <select 
//                         className="fieldset-field fw-bold appearance-none"
//                         value={formData.idType}
//                         disabled
//                         style={{ appearance: 'none', WebkitAppearance: 'none', backgroundColor: 'transparent' }}
//                       >
//                         <option value={formData.idType}>{formData.idType}</option>
//                       </select>
//                       <ChevronDown 
//                         className="position-absolute" 
//                         style={{ right: '15px', top: '15px', pointerEvents: 'none' }} 
//                         size={24}
//                       />
//                     </div>
//                   </div>

//                   {/* Upload Photo of ID - dynamic from API */}
//                   <div className="fieldset-container">
//                     <label style={{ backgroundColor: '#eb869c' }}>Upload Photo of Selected ID</label>
//                     <div className="file-upload-display">
//                       {formData.idImageUrl ? (
//                         <img 
//                           src={formData.idImageUrl} 
//                           alt="ID Preview" 
//                           className="file-thumbnail"
//                           referrerPolicy="no-referrer"
//                         />
//                       ) : (
//                         <div className="file-placeholder">No image uploaded</div>
//                       )}
//                       {formData.idImageUrl && (
//                         <span className="file-name-text">
//                           {formData.idImageUrl.split('/').pop()}
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Choose Bank - read only */}
//                   <div className="fieldset-container mt-5">
//                     <label style={{ backgroundColor: '#eb869c' }}>Choose Your Bank</label>
//                     <div className="position-relative">
//                       <select 
//                         className="fieldset-field fw-bold appearance-none"
//                         value={formData.bank}
//                         disabled
//                         style={{ appearance: 'none', WebkitAppearance: 'none', backgroundColor: 'transparent' }}
//                       >
//                         <option value={formData.bank}>{formData.bank}</option>
//                       </select>
//                       <ChevronDown 
//                         className="position-absolute" 
//                         style={{ right: '15px', top: '15px', pointerEvents: 'none' }} 
//                         size={24}
//                       />
//                     </div>
//                   </div>

//                   {/* Bank Account Number - read only */}
//                   <div className="fieldset-container">
//                     <label style={{ backgroundColor: '#eb869c' }}>Enter Your Bank Account Number</label>
//                     <input
//                       type="text"
//                       className="fieldset-field fw-bold"
//                       value={formData.accountNumber}
//                       readOnly
//                       disabled
//                     />
//                   </div>

//                   {/* Upload Bank Photo - dynamic from API */}
//                   <div className="fieldset-container">
//                     <label style={{ backgroundColor: '#eb869c' }}>Upload Bank Passbook Photo</label>
//                     <div className="file-upload-display">
//                       {formData.passbookImageUrl ? (
//                         <img 
//                           src={formData.passbookImageUrl} 
//                           alt="Passbook Preview" 
//                           className="file-thumbnail"
//                           referrerPolicy="no-referrer"
//                         />
//                       ) : (
//                         <div className="file-placeholder">No image uploaded</div>
//                       )}
//                       {formData.passbookImageUrl && (
//                         <span className="file-name-text">
//                           {formData.passbookImageUrl.split('/').pop()}
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                 </form>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






















import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../css/CreatorSelectionSelf.css";
import { ChevronDown, Loader2 } from "lucide-react";

export default function CreatorSelectionSelf() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    idType: "",
    bank: "",
    accountNumber: "",
    idImageUrl: "",
    passbookImageUrl: "",
  });

  const [legalStatus, setLegalStatus] = useState(null);

  // Fetch legal details
  useEffect(() => {
    const fetchLegalDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No authentication token found. Please log in.");
          setLoading(false);
          return;
        }

        // First fetch legal details
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

        if (result.success && result.data?.legal_details) {
          const legal = result.data.legal_details;
          
          let idTypeLabel = legal.document_type === "thai_national_id" ? "Thai National ID" :
                           legal.document_type === "driving_licence" ? "Driving License" : "Passport";

          setFormData({
            name: legal.legal_name || "",
            idType: idTypeLabel,
            bank: legal.bank_name || "",
            accountNumber: legal.bank_account_no || "",
            idImageUrl: legal.legal_id_image || "",
            passbookImageUrl: legal.passbook_image || "",
          });
        } else {
          setError(result.message || "Failed to fetch legal details");
        }

        // Then fetch verification status to show popup
        const statusRes = await fetch(
          "https://sagarxo.app/web-api/customer/legal-details-verification-status",
          {
            method: "GET",
            headers: { Authorization: token, "Content-Type": "application/json" },
          }
        );

        const statusResult = await statusRes.json();

        if (statusResult.success && statusResult.data?.status) {
          const status = statusResult.data.status;
          setLegalStatus(status);

          if (status === "PENDING") {
            alert("Your identity verification is currently under review. Once it is successfully completed, you will be able to submit a withdrawal request.");
          } else if (status === "APPROVED") {
            alert("Your profile has been verified. You are now eligible to make withdrawals. If you wish to edit or update your details, please contact our Help & Support team.");
          }
        }
      } catch (err) {
        console.error("Error:", err);
        setError("Network error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLegalDetails();
  }, []);

  // Handle window resize for sidebar
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 992);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) {
    return (
      <div className="main-screen">
        <Sidebar show={isSidebarOpen} />
        <div className="content-wrapper">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div className="container-fluid">
            <div className="row justify-content-start responsive-design-card bg-white">
              <div className="col-12 col-md-10 col-lg-8 col-xl-7 text-center py-5">
                <Loader2 size={48} className="spin mb-3" style={{ color: "#e9527a" }} />
                <p>Loading your details...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main-screen">
        <Sidebar show={isSidebarOpen} />
        <div className="content-wrapper">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div className="container-fluid">
            <div className="row justify-content-start responsive-design-card bg-white">
              <div className="col-12 col-md-10 col-lg-8 col-xl-7 text-center py-5">
                <p style={{ color: "red" }}>{error}</p>
                <button className="btn btn-primary mt-3" onClick={() => window.location.reload()}>
                  Retry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-screen">
      <Sidebar show={isSidebarOpen} />
      
      <div className="content-wrapper">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="container-fluid">
          <div className="row justify-content-start responsive-design-card bg-white">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7">
              
              <h2 className="h4 mb-4 text-dark font-weight-bold pt-4" style={{ color: '#444' }}>Self Creator</h2>

              <div className="bank-details-card" style={{ backgroundColor: '#eb869c', border: 'none' }}>
                <form className="p-2 p-md-4">
                  
                  <div className="fieldset-container">
                    <label style={{ backgroundColor: '#eb869c' }}>Enter Name*</label>
                    <input type="text" className="fieldset-field fw-bold" value={formData.name} readOnly disabled />
                  </div>

                  <div className="fieldset-container">
                    <label style={{ backgroundColor: '#eb869c' }}>Choose an ID type and upload the photo</label>
                    <div className="position-relative">
                      <select className="fieldset-field fw-bold appearance-none" value={formData.idType} disabled>
                        <option value={formData.idType}>{formData.idType}</option>
                      </select>
                      <ChevronDown className="position-absolute" style={{ right: '15px', top: '15px', pointerEvents: 'none' }} size={24} />
                    </div>
                  </div>

                  <div className="fieldset-container">
                    <label style={{ backgroundColor: '#eb869c' }}>Upload Photo of Selected ID</label>
                    <div className="file-upload-display">
                      {formData.idImageUrl ? (
                        <img src={formData.idImageUrl} alt="ID Preview" className="file-thumbnail" referrerPolicy="no-referrer" />
                      ) : (
                        <div className="file-placeholder">No image uploaded</div>
                      )}
                    </div>
                  </div>

                  <div className="fieldset-container mt-5">
                    <label style={{ backgroundColor: '#eb869c' }}>Choose Your Bank</label>
                    <div className="position-relative">
                      <select className="fieldset-field fw-bold appearance-none" value={formData.bank} disabled>
                        <option value={formData.bank}>{formData.bank}</option>
                      </select>
                      <ChevronDown className="position-absolute" style={{ right: '15px', top: '15px', pointerEvents: 'none' }} size={24} />
                    </div>
                  </div>

                  <div className="fieldset-container">
                    <label style={{ backgroundColor: '#eb869c' }}>Enter Your Bank Account Number</label>
                    <input type="text" className="fieldset-field fw-bold" value={formData.accountNumber} readOnly disabled />
                  </div>

                  <div className="fieldset-container">
                    <label style={{ backgroundColor: '#eb869c' }}>Upload Bank Passbook Photo</label>
                    <div className="file-upload-display">
                      {formData.passbookImageUrl ? (
                        <img src={formData.passbookImageUrl} alt="Passbook Preview" className="file-thumbnail" referrerPolicy="no-referrer" />
                      ) : (
                        <div className="file-placeholder">No image uploaded</div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}