// import React from 'react';
// import "../css/CreatorSelection.css";
// import { User, Users } from 'lucide-react';

// const CreatorSelection = () => {
//   return (
//     <div className="creator-cards-container">
//       <div className="creator-card card-self">
//         <div className="card-icon">
//           <User size={48} />
//         </div>
//         <span className="card-title">Self Creator</span>
//       </div>

//       <div className="creator-card card-agency">
//         <div className="card-icon">
//           <Users size={48} />
//         </div>
//         <span className="card-title">Agency Creator</span>
//       </div>
//     </div>
//   );
// };

// export default CreatorSelection;

// import React, { useState } from "react";
// import { User, Users } from "lucide-react";
// import { useNavigate } from 'react-router-dom';


// const CreatorSelection = () => {
//   const [selectedType, setSelectedType] = useState('self');
//   const navigate = useNavigate();


//   const handleSelfClick = () => {
//     setSelectedType("self");
//     navigate("/SelfCreator");
//   };

//   const handleAgencyClick = () => {
//     setSelectedType("agency");
//     navigate("/AgencyCreator");
//   };

//   return (
//     <div className="creator-cards-container">
//       <div
//         className={`creator-card ${selectedType === 'self' ? 'card-selected' : 'card-unselected'}`}
//         onClick={handleSelfClick}
//       >
//         <div className="card-icon">
//           <User size={48} />
//         </div>
//         <span className="card-title">Self Creator</span>
//       </div>

//       <div
//          className={`creator-card ${selectedType === 'agency' ? 'card-selected' : 'card-unselected'}`}
//         onClick={handleAgencyClick}
//       >
//         <div className="card-icon">
//           <Users size={48} />
//         </div>
//         <span className="card-title">Agency Creator</span>
//       </div>
//     </div>
//   );
// };

// export default CreatorSelection;























// import React, { useState } from "react";
// import { User, Users } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const CreatorSelection = () => {
//   const [selectedType, setSelectedType] = useState("self");
//   const navigate = useNavigate();

//   const isAgencyDisabled = true; // ✅ control here

//   const handleSelfClick = () => {
//     setSelectedType("self");
//     navigate("/SelfCreator");
//   };

//   const handleAgencyClick = () => {
//     if (isAgencyDisabled) {
//       alert("Cooming Soon");
//       return;
//     }

//     setSelectedType("agency");
//     navigate("/AgencyCreator");
//   };

//   return (
//     <div className="creator-cards-container">
      
//       {/* Self Creator */}
//       <div
//         className={`creator-card ${
//           selectedType === "self" ? "card-selected" : "card-unselected"
//         }`}
//         onClick={handleSelfClick}
//       >
//         <div className="card-icon">
//           <User size={48} />
//         </div>
//         <span className="card-title">Self Creator</span>
//       </div>

//       {/* Agency Creator (Disabled) */}
//       <div
//         className={`creator-card ${
//           selectedType === "agency" ? "card-selected" : "card-unselected"
//         } ${isAgencyDisabled ? "disabled" : ""}`}
//         onClick={handleAgencyClick}
//       >
//         <div className="card-icon">
//           <Users size={48} />
//         </div>
//         <span className="card-title">Agency Creator</span>

//         {isAgencyDisabled && (
//           <span className="disabled-badge d-none">Disabled</span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreatorSelection;

























// import React, { useState, useEffect } from "react";
// import { User, Users } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const CreatorSelection = () => {
//   const [selectedType, setSelectedType] = useState("self");
//   const [isAgencyDisabled, setIsAgencyDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const [hasLegalDetails, setHasLegalDetails] = useState(false);
//   const navigate = useNavigate();

//   // API Endpoint: Check if customer has legal details submitted
//   useEffect(() => {
//     const checkLegalDetailsStatus = async () => {
//       try {
//         const token = localStorage.getItem("token") || ""; // Adjust based on your token storage
        
//         const response = await fetch(
//           "https://sagarxo.app/web-api/customer/is-legal-details-submitted",
//           {
//             method: "GET",
//             headers: {
//               "Authorization": token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const result = await response.json();

//         if (result.success) {
//           // If is_submitted is true, user has legal details or is from agency
//           setHasLegalDetails(result.data?.is_submitted || false);
          
//           // If already submitted, redirect to dashboard or appropriate page
//           if (result.data?.is_submitted) {
//             // Option 1: Redirect to dashboard if already verified
//             // navigate("/dashboard");
            
//             // Option 2: Show message and stay on page
//             console.log("Legal details already submitted or user is from agency");
//           }
//         } else {
//           console.error("Failed to check legal details status:", result.message);
//         }
//       } catch (error) {
//         console.error("Error checking legal details status:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkLegalDetailsStatus();
//   }, [navigate]);

//   const handleSelfClick = () => {
//     setSelectedType("self");
    
//     // If already has legal details, redirect to dashboard instead of form
//     if (hasLegalDetails) {
//       navigate("/dashboard"); // or your main creator dashboard
//     } else {
//       navigate("/SelfCreator");
//     }
//   };

//   const handleAgencyClick = () => {
//     if (isAgencyDisabled) {
//       alert("Coming Soon");
//       return;
//     }

//     setSelectedType("agency");
//     navigate("/AgencyCreator");
//   };

//   if (isLoading) {
//     return (
//       <div className="creator-cards-container">
//         <div className="loading-spinner">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="creator-cards-container">
//       {/* Self Creator */}
//       <div
//         className={`creator-card ${
//           selectedType === "self" ? "card-selected" : "card-unselected"
//         }`}
//         onClick={handleSelfClick}
//       >
//         <div className="card-icon">
//           <User size={48} />
//         </div>
//         <span className="card-title">Self Creator</span>
//         {hasLegalDetails && (
//           <span className="verified-badge">✓ Verified</span>
//         )}
//       </div>

//       {/* Agency Creator (Disabled) */}
//       <div
//         className={`creator-card ${
//           selectedType === "agency" ? "card-selected" : "card-unselected"
//         } ${isAgencyDisabled ? "disabled" : ""}`}
//         onClick={handleAgencyClick}
//       >
//         <div className="card-icon">
//           <Users size={48} />
//         </div>
//         <span className="card-title">Agency Creator</span>

//         {isAgencyDisabled && (
//           <span className="disabled-badge">Coming Soon</span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreatorSelection;















// import React, { useState, useEffect } from "react";
// import { User, Users } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import "../css/CreatorSelection.css";


// const CreatorSelection = () => {
//   const [selectedType, setSelectedType] = useState("self");
//   const [isAgencyDisabled, setIsAgencyDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const [verificationStatus, setVerificationStatus] = useState(null); // NOTSTARTED, PENDING, APPROVED, REJECTED

//   const navigate = useNavigate();

//   // Fetch verification status using the correct API
//   useEffect(() => {
//     const checkVerificationStatus = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setIsLoading(false);
//           return;
//         }

//         const response = await fetch(
//           "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//           {
//             method: "GET",
//             headers: {
//               "Authorization": token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const result = await response.json();

//         if (result.success && result.data) {
//           const status = result.data.status || "NOTSTARTED";
//           setVerificationStatus(status);
//           console.log("✅ Legal Verification Status:", status);
//         } else {
//           console.error("Failed to fetch verification status:", result.message);
//           setVerificationStatus("NOTSTARTED");
//         }
//       } catch (error) {
//         console.error("Error checking legal details verification status:", error);
//         setVerificationStatus("NOTSTARTED");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkVerificationStatus();
//   }, []);

//   const handleSelfClick = () => {
//     setSelectedType("self");

//     if (verificationStatus === "APPROVED") {
//       // Already verified → go to dashboard
//       navigate("/dashboard");
//     } 
//     else if (verificationStatus === "PENDING") {
//       alert("Your verification is under review. Please wait for approval.");
//     } 
//     else {
//       // NOTSTARTED or REJECTED → go to verification form
//       navigate("/SelfCreator");
//     }
//   };

//   const handleAgencyClick = () => {
//     if (isAgencyDisabled) {
//       alert("Agency Creator is coming soon!");
//       return;
//     }
//     setSelectedType("agency");
//     navigate("/AgencyCreator");
//   };

//   if (isLoading) {
//     return (
//       <div className="creator-cards-container">
//         <div className="loading-spinner text-center py-4">
//           Checking verification status...
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="creator-cards-container">
//       {/* Self Creator Card */}
//       <div
//         className={`creator-card ${
//           selectedType === "self" ? "card-selected" : "card-unselected"
//         }`}
//         onClick={handleSelfClick}
//       >
//         <div className="card-icon">
//           <User size={48} />
//         </div>
//         <span className="card-title">Self Creator</span>
        
//         {verificationStatus === "APPROVED" && (
//           <span className="verified-badge">✓ Verified</span>
//         )}

//         {verificationStatus === "PENDING" && (
//           <span className="pending-badge">Under Review</span>
//         )}

//         {verificationStatus === "REJECTED" && (
//           <span className="rejected-badge">Rejected</span>
//         )}
//       </div>

//       {/* Agency Creator Card */}
//       <div
//         className={`creator-card ${
//           selectedType === "agency" ? "card-selected" : "card-unselected"
//         } ${isAgencyDisabled ? "disabled" : ""}`}
//         onClick={handleAgencyClick}
//       >
//         <div className="card-icon">
//           <Users size={48} />
//         </div>
//         <span className="card-title">Agency Creator</span>
//         {isAgencyDisabled && (
//           <span className="disabled-badge">Coming Soon</span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreatorSelection;

















// import React, { useState, useEffect } from "react";
// import { User, Users } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { Menu, X } from "lucide-react";
// import "../css/CreatorSelection.css";

// const CreatorSelection = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [selectedType, setSelectedType] = useState("self");
//   const [isAgencyDisabled, setIsAgencyDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const [verificationStatus, setVerificationStatus] = useState(null); // NOTSTARTED, PENDING, APPROVED, REJECTED

//   const navigate = useNavigate();

//   // Toggle sidebar function
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   // Fetch verification status using the correct API
//   useEffect(() => {
//     const checkVerificationStatus = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setIsLoading(false);
//           return;
//         }

//         const response = await fetch(
//           "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//           {
//             method: "GET",
//             headers: {
//               "Authorization": token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const result = await response.json();

//         if (result.success && result.data) {
//           const status = result.data.status || "NOTSTARTED";
//           setVerificationStatus(status);
//           console.log("✅ Legal Verification Status:", status);
//         } else {
//           console.error("Failed to fetch verification status:", result.message);
//           setVerificationStatus("NOTSTARTED");
//         }
//       } catch (error) {
//         console.error("Error checking legal details verification status:", error);
//         setVerificationStatus("NOTSTARTED");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkVerificationStatus();
//   }, []);

//   const handleSelfClick = () => {
//     setSelectedType("self");

//     if (verificationStatus === "APPROVED") {
//       // Already verified → go to dashboard
//       navigate("/dashboard");
//     } 
//     else if (verificationStatus === "PENDING") {
//       alert("Your verification is under review. Please wait for approval.");
//     } 
//     else {
//       // NOTSTARTED or REJECTED → go to verification form
//       navigate("/SelfCreator");
//     }
//   };

//   const handleAgencyClick = () => {
//     if (isAgencyDisabled) {
//       alert("Agency Creator is coming soon!");
//       return;
//     }
//     setSelectedType("agency");
//     navigate("/AgencyCreator");
//   };

//   // Loading State with Sidebar
//   if (isLoading) {
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
//       {/* Mobile Toggle Button */}
//       <button
//         className="mobile-toggle d-none"
//         onClick={toggleSidebar}
//       >
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//       )}

//       {/* Sidebar */}
//       <Sidebar show={isSidebarOpen} />

//       {/* Main Content */}
//       <main className="main-content">
//         <Header toggleSidebar={toggleSidebar} />

//         <div className="content-area">
//           {/* ✅ YOUR ORIGINAL DESIGN - UNCHANGED */}
//           <div className="creator-cards-container">
//             {/* Self Creator Card */}
//             <div
//               className={`creator-card ${
//                 selectedType === "self" ? "card-selected" : "card-unselected"
//               }`}
//               onClick={handleSelfClick}
//             >
//               <div className="card-icon">
//                 <User size={48} />
//               </div>
//               <span className="card-title">Self Creator</span>
              
//               {verificationStatus === "APPROVED" && (
//                 <span className="verified-badge">✓ Verified</span>
//               )}

//               {verificationStatus === "PENDING" && (
//                 <span className="pending-badge">Under Review</span>
//               )}

//               {verificationStatus === "REJECTED" && (
//                 <span className="rejected-badge">Rejected</span>
//               )}
//             </div>

//             {/* Agency Creator Card */}
//             <div
//               className={`creator-card ${
//                 selectedType === "agency" ? "card-selected" : "card-unselected"
//               } ${isAgencyDisabled ? "disabled" : ""}`}
//               onClick={handleAgencyClick}
//             >
//               <div className="card-icon">
//                 <Users size={48} />
//               </div>
//               <span className="card-title">Agency Creator</span>
//               {isAgencyDisabled && (
//                 <span className="disabled-badge">Coming Soon</span>
//               )}
//             </div>
//           </div>
//           {/* ✅ END OF YOUR ORIGINAL DESIGN */}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CreatorSelection;




















// import React, { useState, useEffect } from "react";
// import { User, Users } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { Menu, X } from "lucide-react";
// import "../css/CreatorSelection.css";

// const CreatorSelection = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [selectedType, setSelectedType] = useState("self");
//   const [isAgencyDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const [verificationStatus, setVerificationStatus] = useState(null);

//   const navigate = useNavigate();

//   // Toggle Sidebar
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   // Fetch Verification Status
//   useEffect(() => {
//     const checkVerificationStatus = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setIsLoading(false);
//           return;
//         }

//         const response = await fetch(
//           "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//           {
//             method: "GET",
//             headers: {
//               "Authorization": token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const result = await response.json();

//         if (result.success && result.data?.status) {
//           const status = result.data.status;
//           setVerificationStatus(status);
//           console.log("✅ Verification Status:", status);
//         } else {
//           setVerificationStatus("NOTSTARTED");
//         }
//       } catch (error) {
//         console.error("Error fetching status:", error);
//         setVerificationStatus("NOTSTARTED");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkVerificationStatus();
//   }, []);

//   const handleSelfClick = () => {
//     setSelectedType("self");

//     if (verificationStatus === "APPROVED") {
//       // ✅ Redirect to Withdrawal Page when verified
//       navigate("/withdrawal");        // Change this if your route is different
//     } 
//     else if (verificationStatus === "PENDING") {
//       alert("Your verification is under review. Please wait for approval.");
//     } 
//     else {
//       // NOTSTARTED or REJECTED → Go to Self Creator form
//       navigate("/SelfCreator");
//     }
//   };

//   const handleAgencyClick = () => {
//     if (isAgencyDisabled) {
//       alert("Agency Creator is coming soon!");
//       return;
//     }
//     setSelectedType("agency");
//     navigate("/AgencyCreator");
//   };

//   // Loading State with Sidebar
//   if (isLoading) {
//     return (
//       <div className="dashboard-container">
//         <button className="mobile-toggle d-none" onClick={toggleSidebar}>
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
//       {/* Mobile Toggle Button */}
//       <button className="mobile-toggle d-none" onClick={toggleSidebar}>
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//       )}

//       {/* Sidebar */}
//       <Sidebar show={isSidebarOpen} />

//       {/* Main Content */}
//       <main className="main-content">
//         <Header toggleSidebar={toggleSidebar} />

//         <div className="content-area">
//           <div className="creator-cards-container">
//             {/* Self Creator Card */}
//             <div
//               className={`creator-card ${
//                 selectedType === "self" ? "card-selected" : "card-unselected"
//               }`}
//               onClick={handleSelfClick}
//             >
//               <div className="card-icon">
//                 <User size={48} />
//               </div>
//               <span className="card-title">Self Creator</span>
              
//               {verificationStatus === "APPROVED" && (
//                 <span className="verified-badge">✓ Verified</span>
//               )}

//               {verificationStatus === "PENDING" && (
//                 <span className="pending-badge">Under Review</span>
//               )}

//               {verificationStatus === "REJECTED" && (
//                 <span className="rejected-badge">Rejected</span>
//               )}
//             </div>

//             {/* Agency Creator Card */}
//             <div
//               className={`creator-card ${
//                 selectedType === "agency" ? "card-selected" : "card-unselected"
//               } ${isAgencyDisabled ? "disabled" : ""}`}
//               onClick={handleAgencyClick}
//             >
//               <div className="card-icon">
//                 <Users size={48} />
//               </div>
//               <span className="card-title">Agency Creator</span>
//               {isAgencyDisabled && (
//                 <span className="disabled-badge">Coming Soon</span>
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CreatorSelection;


















// import React, { useState, useEffect } from "react";
// import { User, Users } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { Menu, X } from "lucide-react";
// import "../css/CreatorSelection.css";

// const CreatorSelection = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [selectedType, setSelectedType] = useState("self");
//   const [isAgencyDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const [verificationStatus, setVerificationStatus] = useState(null);

//   const navigate = useNavigate();

//   // Toggle Sidebar
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   // Fetch Verification Status
//   useEffect(() => {
//     const checkVerificationStatus = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setIsLoading(false);
//           return;
//         }

//         const response = await fetch(
//           "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//           {
//             method: "GET",
//             headers: {
//               "Authorization": token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const result = await response.json();

//         if (result.success && result.data?.status) {
//           const status = result.data.status;
//           setVerificationStatus(status);
//           console.log("✅ Verification Status:", status);
//         } else {
//           setVerificationStatus("NOTSTARTED");
//         }
//       } catch (error) {
//         console.error("Error fetching status:", error);
//         setVerificationStatus("NOTSTARTED");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkVerificationStatus();
//   }, []);

//   const handleSelfClick = () => {
//     setSelectedType("self");

//     if (verificationStatus === "APPROVED") {
//       // ✅ Show popup then redirect to Self Creator (read-only view)
//       alert(
//         "Your profile has been verified. You are now eligible to make withdrawals. " +
//         "If you wish to edit or update your details, please contact our Help & Support team."
//       );
//       navigate("/SelfCreator");
//     } 
//     else if (verificationStatus === "PENDING") {
//       // ⏳ Show popup, do NOT redirect
//       alert(
//         "Your identity verification is currently under review. " +
//         "Once it is successfully completed, you will be able to submit a withdrawal request."
//       );
//       // Stay on this page
//     } 
//     else {
//       // NOTSTARTED or REJECTED → Go to Self Creator form (fill details)
//       navigate("/SelfCreator");
//     }
//   };

//   const handleAgencyClick = () => {
//     if (isAgencyDisabled) {
//       alert("Agency Creator is coming soon!");
//       return;
//     }
//     setSelectedType("agency");
//     navigate("/AgencyCreator");
//   };

//   // Loading State with Sidebar
//   if (isLoading) {
//     return (
//       <div className="dashboard-container">
//         <button className="mobile-toggle d-none" onClick={toggleSidebar}>
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
//       {/* Mobile Toggle Button */}
//       <button className="mobile-toggle d-none" onClick={toggleSidebar}>
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//       )}

//       {/* Sidebar */}
//       <Sidebar show={isSidebarOpen} />

//       {/* Main Content */}
//       <main className="main-content">
//         <Header toggleSidebar={toggleSidebar} />

//         <div className="content-area">
//           <div className="creator-cards-container">
//             {/* Self Creator Card */}
//             <div
//               className={`creator-card ${
//                 selectedType === "self" ? "card-selected" : "card-unselected"
//               }`}
//               onClick={handleSelfClick}
//             >
//               <div className="card-icon">
//                 <User size={48} />
//               </div>
//               <span className="card-title">Self Creator</span>
              
//               {verificationStatus === "APPROVED" && (
//                 <span className="verified-badge">✓ Verified</span>
//               )}

//               {verificationStatus === "PENDING" && (
//                 <span className="pending-badge">Under Review</span>
//               )}

//               {verificationStatus === "REJECTED" && (
//                 <span className="rejected-badge">Rejected</span>
//               )}
//             </div>

//             {/* Agency Creator Card */}
//             <div
//               className={`creator-card ${
//                 selectedType === "agency" ? "card-selected" : "card-unselected"
//               } ${isAgencyDisabled ? "disabled" : ""}`}
//               onClick={handleAgencyClick}
//             >
//               <div className="card-icon">
//                 <Users size={48} />
//               </div>
//               <span className="card-title">Agency Creator</span>
//               {isAgencyDisabled && (
//                 <span className="disabled-badge">Coming Soon</span>
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CreatorSelection;













// import React, { useState, useEffect } from "react";
// import { User, Users } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { Menu, X } from "lucide-react";
// import "../css/CreatorSelection.css";

// const CreatorSelection = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [selectedType, setSelectedType] = useState("self");
//   const [isAgencyDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const [verificationStatus, setVerificationStatus] = useState(null);

//   const navigate = useNavigate();

//   // Toggle Sidebar
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   // Fetch Verification Status
//   useEffect(() => {
//     const checkVerificationStatus = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setIsLoading(false);
//           return;
//         }

//         const response = await fetch(
//           "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//           {
//             method: "GET",
//             headers: {
//               "Authorization": token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const result = await response.json();

//         if (result.success && result.data?.status) {
//           const status = result.data.status;
//           setVerificationStatus(status);
//           console.log("✅ Verification Status:", status);
//         } else {
//           setVerificationStatus("NOTSTARTED");
//         }
//       } catch (error) {
//         console.error("Error fetching status:", error);
//         setVerificationStatus("NOTSTARTED");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkVerificationStatus();
//   }, []);

//   const handleSelfClick = () => {
//     setSelectedType("self");

//     if (verificationStatus === "APPROVED") {
//       // ✅ Redirect to Self Creator with verified popup message
//       navigate("/SelfCreator", {
//         state: { 
//           popupMessage: "Your profile has been verified. You are now eligible to make withdrawals. If you wish to edit or update your details, please contact our Help & Support team.",
//           popupType: "approved",
//           isReadOnly: true
//         }
//       });
//     } 
//     else if (verificationStatus === "PENDING") {
//       // ⏳ Redirect to Self Creator with pending popup message and blurred view
//       navigate("/SelfCreator", {
//         state: { 
//           popupMessage: "Your identity verification is currently under review. Once it is successfully completed, you will be able to submit a withdrawal request.",
//           popupType: "pending",
//           isReadOnly: true,
//           isBlurred: true
//         }
//       });
//     } 
//     else if (verificationStatus === "REJECTED") {
//       // ❌ Redirect to Self Creator with rejected popup message (editable)
//       navigate("/SelfCreator", {
//         state: { 
//           popupMessage: "Your verification has been rejected. Please update your information and submit again.",
//           popupType: "rejected",
//           isReadOnly: false,
//           isBlurred: false
//         }
//       });
//     }
//     else {
//       // NOTSTARTED → Go to Self Creator form (fill details)
//       navigate("/SelfCreator", {
//         state: {
//           popupMessage: null,
//           popupType: null,
//           isReadOnly: false,
//           isBlurred: false
//         }
//       });
//     }
//   };

//   const handleAgencyClick = () => {
//     if (isAgencyDisabled) {
//       alert("Agency Creator is coming soon!");
//       return;
//     }
//     setSelectedType("agency");
//     navigate("/AgencyCreator");
//   };

//   // Loading State with Sidebar
//   if (isLoading) {
//     return (
//       <div className="dashboard-container">
//         <button className="mobile-toggle d-none" onClick={toggleSidebar}>
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
//       {/* Mobile Toggle Button */}
//       <button className="mobile-toggle d-none" onClick={toggleSidebar}>
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//       )}

//       {/* Sidebar */}
//       <Sidebar show={isSidebarOpen} />

//       {/* Main Content */}
//       <main className="main-content">
//         <Header toggleSidebar={toggleSidebar} />

//         <div className="content-area">
//           <div className="creator-cards-container">
//             {/* Self Creator Card */}
//             <div
//               className={`creator-card ${
//                 selectedType === "self" ? "card-selected" : "card-unselected"
//               }`}
//               onClick={handleSelfClick}
//             >
//               <div className="card-icon">
//                 <User size={48} />
//               </div>
//               <span className="card-title">Self Creator</span>
              
//               {verificationStatus === "APPROVED" && (
//                 <span className="verified-badge">✓ Verified</span>
//               )}

//               {verificationStatus === "PENDING" && (
//                 <span className="pending-badge">Under Review</span>
//               )}

//               {verificationStatus === "REJECTED" && (
//                 <span className="rejected-badge">Rejected</span>
//               )}
//             </div>

//             {/* Agency Creator Card */}
//             <div
//               className={`creator-card ${
//                 selectedType === "agency" ? "card-selected" : "card-unselected"
//               } ${isAgencyDisabled ? "disabled" : ""}`}
//               onClick={handleAgencyClick}
//             >
//               <div className="card-icon">
//                 <Users size={48} />
//               </div>
//               <span className="card-title">Agency Creator</span>
//               {isAgencyDisabled && (
//                 <span className="disabled-badge">Coming Soon</span>
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CreatorSelection;



















// import React, { useState, useEffect } from "react";
// import { User, Users } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { Menu, X } from "lucide-react";
// import "../css/CreatorSelection.css";

// const CreatorSelection = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [selectedType, setSelectedType] = useState("self");
//   const [isAgencyDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const [verificationStatus, setVerificationStatus] = useState(null);

//   const navigate = useNavigate();

//   // Toggle Sidebar
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   // Close Sidebar
//   const handleCloseSidebar = () => setIsSidebarOpen(false);

//   // Fetch Verification Status
//   useEffect(() => {
//     const checkVerificationStatus = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setIsLoading(false);
//           return;
//         }

//         const response = await fetch(
//           "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//           {
//             method: "GET",
//             headers: {
//               "Authorization": token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const result = await response.json();

//         if (result.success && result.data?.status) {
//           const status = result.data.status;
//           setVerificationStatus(status);
//           console.log("✅ Verification Status:", status);
//         } else {
//           setVerificationStatus("NOTSTARTED");
//         }
//       } catch (error) {
//         console.error("Error fetching status:", error);
//         setVerificationStatus("NOTSTARTED");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkVerificationStatus();
//   }, []);

//   const handleSelfClick = () => {
//     setSelectedType("self");

//     if (verificationStatus === "APPROVED") {
//       // ✅ Redirect to Self Creator with verified popup message
//       navigate("/SelfCreator", {
//         state: { 
//           popupMessage: "Your profile has been verified. You are now eligible to make withdrawals. If you wish to edit or update your details, please contact our Help & Support team.",
//           popupType: "approved",
//           isReadOnly: true
//         }
//       });
//     } 
//     else if (verificationStatus === "PENDING") {
//       // ⏳ Redirect to Self Creator with pending popup message and blurred view
//       navigate("/SelfCreator", {
//         state: { 
//           popupMessage: "Your identity verification is currently under review. Once it is successfully completed, you will be able to submit a withdrawal request.",
//           popupType: "pending",
//           isReadOnly: true,
//           isBlurred: true
//         }
//       });
//     } 
//     else if (verificationStatus === "REJECTED") {
//       // ❌ Redirect to Self Creator with rejected popup message (editable)
//       navigate("/SelfCreator", {
//         state: { 
//           popupMessage: "Your verification has been rejected. Please update your information and submit again.",
//           popupType: "rejected",
//           isReadOnly: false,
//           isBlurred: false
//         }
//       });
//     }
//     else {
//       // NOTSTARTED → Go to Self Creator form (fill details)
//       navigate("/SelfCreator", {
//         state: {
//           popupMessage: null,
//           popupType: null,
//           isReadOnly: false,
//           isBlurred: false
//         }
//       });
//     }
//   };

//   const handleAgencyClick = () => {
//     if (isAgencyDisabled) {
//       alert("Agency Creator is coming soon!");
//       return;
//     }
//     setSelectedType("agency");
//     navigate("/AgencyCreator");
//   };

//   // Loading State with Sidebar
//   if (isLoading) {
//     return (
//       <div className="dashboard-container">
//         <button className="mobile-toggle d-none" onClick={toggleSidebar}>
//           {isSidebarOpen ? <X /> : <Menu />}
//         </button>
//         {isSidebarOpen && (
//           <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
//         )}
//         <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
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
//       {/* Mobile Toggle Button */}
//       <button className="mobile-toggle d-none" onClick={toggleSidebar}>
//         {isSidebarOpen ? <X /> : <Menu />}
//       </button>

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
//       )}

//       {/* Sidebar */}
//       <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

//       {/* Main Content */}
//       <main className="main-content">
//         <Header toggleSidebar={toggleSidebar} />

//         <div className="content-area">
//           <div className="creator-cards-container">
//             {/* Self Creator Card */}
//             <div
//               className={`creator-card ${
//                 selectedType === "self" ? "card-selected" : "card-unselected"
//               }`}
//               onClick={handleSelfClick}
//             >
//               <div className="card-icon">
//                 <User size={48} />
//               </div>
//               <span className="card-title">Self Creator</span>
              
//               {verificationStatus === "APPROVED" && (
//                 <span className="verified-badge">✓ Verified</span>
//               )}

//               {verificationStatus === "PENDING" && (
//                 <span className="pending-badge">Under Review</span>
//               )}

//               {verificationStatus === "REJECTED" && (
//                 <span className="rejected-badge">Rejected</span>
//               )}
//             </div>

//             {/* Agency Creator Card */}
//             <div
//               className={`creator-card ${
//                 selectedType === "agency" ? "card-selected" : "card-unselected"
//               } ${isAgencyDisabled ? "disabled" : ""}`}
//               onClick={handleAgencyClick}
//             >
//               <div className="card-icon">
//                 <Users size={48} />
//               </div>
//               <span className="card-title">Agency Creator</span>
//               {isAgencyDisabled && (
//                 <span className="disabled-badge">Coming Soon</span>
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CreatorSelection;














import React, { useState, useEffect } from "react";
import { User, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Menu, X } from "lucide-react";
import "../css/CreatorSelection.css";

const CreatorSelection = () => {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("self");
  const [isAgencyDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState(null);

  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  // Helper to get translated status text for badges
  const getStatusText = (status) => {
    switch (status) {
      case "APPROVED": return t("creatorSelection.verified");
      case "PENDING": return t("creatorSelection.underReview");
      case "REJECTED": return t("creatorSelection.rejected");
      default: return "";
    }
  };

  // Helper to get translated popup message based on status
  const getPopupMessage = (status) => {
    switch (status) {
      case "APPROVED": return t("creatorSelection.approvedPopup");
      case "PENDING": return t("creatorSelection.pendingPopup");
      case "REJECTED": return t("creatorSelection.rejectedPopup");
      default: return null;
    }
  };

  useEffect(() => {
    const checkVerificationStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setIsLoading(false);
          return;
        }

        const response = await fetch(
          "https://sagarxo.app/web-api/customer/legal-details-verification-status",
          {
            method: "GET",
            headers: {
              "Authorization": token,
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();

        if (result.success && result.data?.status) {
          const status = result.data.status;
          setVerificationStatus(status);
          console.log("✅ Verification Status:", status);
        } else {
          setVerificationStatus("NOTSTARTED");
        }
      } catch (error) {
        console.error("Error fetching status:", error);
        setVerificationStatus("NOTSTARTED");
      } finally {
        setIsLoading(false);
      }
    };

    checkVerificationStatus();
  }, []);

  const handleSelfClick = () => {
    setSelectedType("self");

    if (verificationStatus === "APPROVED") {
      navigate("/SelfCreator", {
        state: { 
          popupMessage: getPopupMessage("APPROVED"),
          popupType: "approved",
          isReadOnly: true
        }
      });
    } 
    else if (verificationStatus === "PENDING") {
      navigate("/SelfCreator", {
        state: { 
          popupMessage: getPopupMessage("PENDING"),
          popupType: "pending",
          isReadOnly: true,
          isBlurred: true
        }
      });
    } 
    else if (verificationStatus === "REJECTED") {
      navigate("/SelfCreator", {
        state: { 
          popupMessage: getPopupMessage("REJECTED"),
          popupType: "rejected",
          isReadOnly: false,
          isBlurred: false
        }
      });
    }
    else {
      // NOTSTARTED → Go to Self Creator form (fill details)
      navigate("/SelfCreator", {
        state: {
          popupMessage: null,
          popupType: null,
          isReadOnly: false,
          isBlurred: false
        }
      });
    }
  };

  const handleAgencyClick = () => {
    if (isAgencyDisabled) {
      alert(t("creatorSelection.agencyAlert"));
      return;
    }
    setSelectedType("agency");
    navigate("/AgencyCreator");
  };

  // Loading State
  if (isLoading) {
    return (
      <div className="dashboard-container">
        <button className="mobile-toggle d-none" onClick={toggleSidebar}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
        {isSidebarOpen && (
          <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
        )}
        <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />
        <main className="main-content">
          <Header toggleSidebar={toggleSidebar} />
          <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
            <div className="text-center">
              <div className="spinner-border" role="status" style={{ color: "#e9527a" }}>
                <span className="visually-hidden">{t("creatorSelection.loading")}</span>
              </div>
              <p className="mt-3 text-muted">{t("creatorSelection.loading")}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <button className="mobile-toggle d-none" onClick={toggleSidebar}>
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {isSidebarOpen && (
        <div className="sidebar-overlay d-lg-none" onClick={handleCloseSidebar} />
      )}

      <Sidebar show={isSidebarOpen} onClose={handleCloseSidebar} />

      <main className="main-content">
        <Header toggleSidebar={toggleSidebar} />

        <div className="content-area">
          <div className="creator-cards-container">
            {/* Self Creator Card */}
            <div
              className={`creator-card ${
                selectedType === "self" ? "card-selected" : "card-unselected"
              }`}
              onClick={handleSelfClick}
            >
              <div className="card-icon">
                <User size={48} />
              </div>
              <span className="card-title">{t("creatorSelection.selfCreator")}</span>
              
              {verificationStatus === "APPROVED" && (
                <span className="verified-badge">{t("creatorSelection.verified")}</span>
              )}

              {verificationStatus === "PENDING" && (
                <span className="pending-badge">{t("creatorSelection.underReview")}</span>
              )}

              {verificationStatus === "REJECTED" && (
                <span className="rejected-badge">{t("creatorSelection.rejected")}</span>
              )}
            </div>

            {/* Agency Creator Card */}
            <div
              className={`creator-card ${
                selectedType === "agency" ? "card-selected" : "card-unselected"
              } ${isAgencyDisabled ? "disabled" : ""}`}
              onClick={handleAgencyClick}
            >
              <div className="card-icon">
                <Users size={48} />
              </div>
              <span className="card-title">{t("creatorSelection.agencyCreator")}</span>
              {isAgencyDisabled && (
                <span className="disabled-badge">{t("creatorSelection.comingSoon")}</span>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreatorSelection;













// import React, { useState, useEffect } from "react";
// import { User, Users, CreditCard, Building2, BadgePercent, Wallet, X, FileText, Image as ImageIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { Menu, X as MenuX } from "lucide-react";
// import "../css/CreatorSelection.css";

// const CreatorSelection = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [selectedType, setSelectedType] = useState("self");
//   const [isAgencyDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const [verificationStatus, setVerificationStatus] = useState(null);
  
//   // New State for Legal Details - Dynamic Data
//   const [legalDetails, setLegalDetails] = useState({
//     legal_details: {
//       bank_name: "",
//       legal_name: "",
//       document_type: "",
//       legal_id_image: "",
//       passbook_image: "",
//       bank_account_no: ""
//     },
//     legal_tax_fees_percentage: "0.00",
//     customer_credit: "0.00"
//   });
//   const [showWithdrawalForm, setShowWithdrawalForm] = useState(false);
  
//   // Popup State
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState("");
//   const [popupType, setPopupType] = useState("");

//   const navigate = useNavigate();

//   // Toggle Sidebar
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   // Fetch Verification Status
//   useEffect(() => {
//     const checkVerificationStatus = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setIsLoading(false);
//           return;
//         }

//         const response = await fetch(
//           "https://sagarxo.app/web-api/customer/legal-details-verification-status",
//           {
//             method: "GET",
//             headers: {
//               "Authorization": token,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const result = await response.json();

//         if (result.success && result.data?.status) {
//           const status = result.data.status;
//           setVerificationStatus(status);
//           console.log("✅ Verification Status:", status);
//         } else {
//           setVerificationStatus("NOTSTARTED");
//         }
//       } catch (error) {
//         console.error("Error fetching status:", error);
//         setVerificationStatus("NOTSTARTED");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkVerificationStatus();
//   }, []);

//   // Fetch Legal Details - Dynamic API Call
//   const fetchLegalDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const userId = localStorage.getItem("userId"); // Get userId from localStorage
      
//       if (!token) {
//         console.error("Token not found");
//         return;
//       }

//       const response = await fetch(
//         "https://sagarxo.app/web-api/customer/legal-details",
//         {
//           method: "GET",
//           headers: {
//             "Authorization": token,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (result.success && result.data) {
//         // Set dynamic data from API response
//         setLegalDetails({
//           legal_details: {
//             bank_name: result.data.legal_details?.bank_name || "N/A",
//             legal_name: result.data.legal_details?.legal_name || "N/A",
//             document_type: result.data.legal_details?.document_type || "",
//             legal_id_image: result.data.legal_details?.legal_id_image || "",
//             passbook_image: result.data.legal_details?.passbook_image || "",
//             bank_account_no: result.data.legal_details?.bank_account_no || "N/A"
//           },
//           legal_tax_fees_percentage: result.data.legal_tax_fees_percentage || "0.00",
//           customer_credit: result.data.customer_credit || "0.00"
//         });
//         console.log("✅ Legal Details Fetched:", result.data);
//       } else {
//         console.error("Failed to fetch legal details:", result.message);
//       }
//     } catch (error) {
//       console.error("Error fetching legal details:", error);
//     }
//   };

//   const handleSelfClick = () => {
//     setSelectedType("self");

//     if (verificationStatus === "APPROVED") {
//       // Fetch legal details dynamically and show withdrawal form
//       fetchLegalDetails();
//       setShowWithdrawalForm(true);
//     } 
//     else if (verificationStatus === "PENDING") {
//       setPopupType("pending");
//       setPopupMessage("Your identity verification is currently under review. Once it is successfully completed, you will be able to submit a withdrawal request.");
//       setShowPopup(true);
//     } 
//     else if (verificationStatus === "REJECTED") {
//       setPopupType("rejected");
//       setPopupMessage("Your verification has been rejected. Please update your information and submit again.");
//       setShowPopup(true);
//     }
//     else {
//       navigate("/SelfCreator");
//     }
//   };

//   const handleAgencyClick = () => {
//     if (isAgencyDisabled) {
//       alert("Agency Creator is coming soon!");
//       return;
//     }
//     setSelectedType("agency");
//     navigate("/AgencyCreator");
//   };

//   // Handle form click based on verification status
//   const handleFormClick = () => {
//     if (verificationStatus === "PENDING") {
//       setPopupType("pending");
//       setPopupMessage("Your identity verification is currently under review. Once it is successfully completed, you will be able to submit a withdrawal request.");
//       setShowPopup(true);
//       return;
//     }
    
//     if (verificationStatus === "APPROVED") {
//       setPopupType("approved");
//       setPopupMessage("Your profile has been verified. You are now eligible to make withdrawals. If you wish to edit or update your details, please contact our Help & Support team.");
//       setShowPopup(true);
//       return;
//     }

//     if (verificationStatus === "REJECTED") {
//       setPopupType("rejected");
//       setPopupMessage("Your verification has been rejected. Please update your information and submit again.");
//       setShowPopup(true);
//       return;
//     }
//   };

//   // Close popup
//   const closePopup = () => {
//     setShowPopup(false);
//     setPopupMessage("");
//     setPopupType("");
//   };

//   // Calculate withdrawal amount after tax - Dynamic calculation
//   const calculateAfterTax = (amount) => {
//     if (!legalDetails?.legal_tax_fees_percentage) return amount;
//     const taxPercent = parseFloat(legalDetails.legal_tax_fees_percentage);
//     const taxAmount = (amount * taxPercent) / 100;
//     return (amount - taxAmount).toFixed(2);
//   };

//   // Format document type for display
//   const formatDocumentType = (type) => {
//     if (!type) return "N/A";
//     return type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
//   };

//   // Format currency
//   const formatCurrency = (amount) => {
//     const num = parseFloat(amount);
//     return isNaN(num) ? "0.00" : num.toFixed(2);
//   };

//   // Popup Component
//   const PopupModal = () => {
//     if (!showPopup) return null;

//     const getPopupStyles = () => {
//       switch (popupType) {
//         case "pending":
//           return {
//             icon: "⏳",
//             iconColor: "#f59e0b",
//             title: "Verification In Progress",
//             bgColor: "#fffbeb",
//             borderColor: "#f59e0b"
//           };
//         case "approved":
//           return {
//             icon: "✅",
//             iconColor: "#10b981",
//             title: "Profile Verified",
//             bgColor: "#ecfdf5",
//             borderColor: "#10b981"
//           };
//         case "rejected":
//           return {
//             icon: "❌",
//             iconColor: "#ef4444",
//             title: "Verification Rejected",
//             bgColor: "#fef2f2",
//             borderColor: "#ef4444"
//           };
//         default:
//           return {
//             icon: "ℹ️",
//             iconColor: "#6b7280",
//             title: "Notice",
//             bgColor: "#f3f4f6",
//             borderColor: "#6b7280"
//           };
//       }
//     };

//     const styles = getPopupStyles();

//     return (
//       <div style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: "rgba(0, 0, 0, 0.6)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 9999,
//         padding: "20px"
//       }}>
//         <div style={{
//           backgroundColor: "white",
//           borderRadius: "16px",
//           maxWidth: "450px",
//           width: "100%",
//           boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
//           animation: "popupSlideIn 0.3s ease-out",
//           overflow: "hidden"
//         }}>
//           <div style={{
//             backgroundColor: styles.bgColor,
//             padding: "30px",
//             textAlign: "center",
//             borderBottom: `3px solid ${styles.borderColor}`
//           }}>
//             <div style={{
//               fontSize: "60px",
//               marginBottom: "15px",
//               lineHeight: 1
//             }}>
//               {styles.icon}
//             </div>
//             <h3 style={{
//               margin: 0,
//               color: styles.iconColor,
//               fontSize: "22px",
//               fontWeight: "700"
//             }}>
//               {styles.title}
//             </h3>
//           </div>

//           <div style={{ padding: "30px" }}>
//             <p style={{
//               margin: 0,
//               color: "#4b5563",
//               fontSize: "16px",
//               lineHeight: "1.6",
//               textAlign: "center"
//             }}>
//               {popupMessage}
//             </p>
//           </div>

//           <div style={{
//             padding: "0 30px 30px",
//             display: "flex",
//             gap: "12px"
//           }}>
//             {popupType === "rejected" && (
//               <button
//                 onClick={() => {
//                   closePopup();
//                   navigate("/SelfCreator");
//                 }}
//                 style={{
//                   flex: 1,
//                   padding: "14px",
//                   backgroundColor: "#e9527a",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "10px",
//                   fontSize: "15px",
//                   fontWeight: "600",
//                   cursor: "pointer",
//                   transition: "all 0.3s"
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = "#d64161";
//                   e.target.style.transform = "translateY(-2px)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = "#e9527a";
//                   e.target.style.transform = "translateY(0)";
//                 }}
//               >
//                 Update Details
//               </button>
//             )}
            
//             <button
//               onClick={closePopup}
//               style={{
//                 flex: 1,
//                 padding: "14px",
//                 backgroundColor: popupType === "rejected" ? "#f3f4f6" : "#e9527a",
//                 color: popupType === "rejected" ? "#374151" : "white",
//                 border: "none",
//                 borderRadius: "10px",
//                 fontSize: "15px",
//                 fontWeight: "600",
//                 cursor: "pointer",
//                 transition: "all 0.3s"
//               }}
//               onMouseEnter={(e) => {
//                 if (popupType === "rejected") {
//                   e.target.style.backgroundColor = "#e5e7eb";
//                 } else {
//                   e.target.style.backgroundColor = "#d64161";
//                 }
//                 e.target.style.transform = "translateY(-2px)";
//               }}
//               onMouseLeave={(e) => {
//                 if (popupType === "rejected") {
//                   e.target.style.backgroundColor = "#f3f4f6";
//                 } else {
//                   e.target.style.backgroundColor = "#e9527a";
//                 }
//                 e.target.style.transform = "translateY(0)";
//               }}
//             >
//               {popupType === "rejected" ? "Close" : "Got it"}
//             </button>
//           </div>
//         </div>

//         <style>{`
//           @keyframes popupSlideIn {
//             from {
//               opacity: 0;
//               transform: scale(0.9) translateY(20px);
//             }
//             to {
//               opacity: 1;
//               transform: scale(1) translateY(0);
//             }
//           }
//         `}</style>
//       </div>
//     );
//   };

//   // Loading State
//   if (isLoading) {
//     return (
//       <div className="dashboard-container">
//         <button className="mobile-toggle d-none" onClick={toggleSidebar}>
//           {isSidebarOpen ? <MenuX /> : <Menu />}
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
//       {/* Popup Modal */}
//       <PopupModal />

//       {/* Mobile Toggle Button */}
//       <button className="mobile-toggle d-none" onClick={toggleSidebar}>
//         {isSidebarOpen ? <MenuX /> : <Menu />}
//       </button>

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)} />
//       )}

//       {/* Sidebar */}
//       <Sidebar show={isSidebarOpen} />

//       {/* Main Content */}
//       <main className="main-content">
//         <Header toggleSidebar={toggleSidebar} />

//         <div className="content-area">
//           {/* Withdrawal Form Section - Dynamic Data Display */}
//           {showWithdrawalForm && verificationStatus === "APPROVED" ? (
//             <div 
//               className="withdrawal-form-container" 
//               style={{
//                 maxWidth: "800px",
//                 margin: "0 auto",
//                 padding: "30px",
//                 backgroundColor: "#fff",
//                 borderRadius: "16px",
//                 boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
//                 cursor: "pointer"
//               }}
//               onClick={handleFormClick}
//             >
//               {/* Header */}
//               <div style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 marginBottom: "30px",
//                 paddingBottom: "20px",
//                 borderBottom: "2px solid #f0f0f0"
//               }}>
//                 <h2 style={{
//                   margin: 0,
//                   color: "#333",
//                   fontSize: "24px",
//                   fontWeight: "600"
//                 }}>Withdrawal Request</h2>
//                 <button 
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setShowWithdrawalForm(false);
//                   }}
//                   style={{
//                     background: "none",
//                     border: "none",
//                     fontSize: "24px",
//                     cursor: "pointer",
//                     color: "#666"
//                   }}
//                 >
//                   ×
//                 </button>
//               </div>

//               {/* Available Balance Card - Dynamic Data */}
//               <div style={{
//                 background: "linear-gradient(135deg, #e9527a 0%, #d64161 100%)",
//                 borderRadius: "12px",
//                 padding: "24px",
//                 marginBottom: "30px",
//                 color: "white"
//               }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
//                   <Wallet size={24} />
//                   <span style={{ fontSize: "16px", opacity: 0.9 }}>Available Balance</span>
//                 </div>
//                 <div style={{ fontSize: "32px", fontWeight: "700" }}>
//                   ${formatCurrency(legalDetails.customer_credit)}
//                 </div>
//               </div>

//               {/* Bank Details Section - Dynamic Data */}
//               <div style={{ marginBottom: "30px" }}>
//                 <h3 style={{
//                   fontSize: "18px",
//                   color: "#333",
//                   marginBottom: "20px",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "8px"
//                 }}>
//                   <Building2 size={20} color="#e9527a" />
//                   Bank Details
//                 </h3>
                
//                 <div style={{
//                   backgroundColor: "#f8f9fa",
//                   borderRadius: "12px",
//                   padding: "20px",
//                   display: "grid",
//                   gap: "16px"
//                 }}>
//                   {/* Legal Name - Dynamic */}
//                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                     <span style={{ color: "#666", fontSize: "14px" }}>Account Holder Name</span>
//                     <span style={{ color: "#333", fontWeight: "600", fontSize: "16px" }}>
//                       {legalDetails.legal_details.legal_name}
//                     </span>
//                   </div>

//                   {/* Bank Name - Dynamic */}
//                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                     <span style={{ color: "#666", fontSize: "14px" }}>Bank Name</span>
//                     <span style={{ color: "#333", fontWeight: "600", fontSize: "16px" }}>
//                       {legalDetails.legal_details.bank_name}
//                     </span>
//                   </div>

//                   {/* Account Number - Dynamic */}
//                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                     <span style={{ color: "#666", fontSize: "14px" }}>Account Number</span>
//                     <span style={{ color: "#333", fontWeight: "600", fontSize: "16px" }}>
//                       {legalDetails.legal_details.bank_account_no}
//                     </span>
//                   </div>

//                   {/* Document Type - Dynamic */}
//                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                     <span style={{ color: "#666", fontSize: "14px" }}>Document Type</span>
//                     <span style={{ color: "#333", fontWeight: "600", fontSize: "16px" }}>
//                       {formatDocumentType(legalDetails.legal_details.document_type)}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Tax Information - Dynamic Data */}
//               <div style={{
//                 backgroundColor: "#fff5f7",
//                 borderRadius: "12px",
//                 padding: "20px",
//                 marginBottom: "30px",
//                 border: "1px solid #ffe0e6"
//               }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
//                   <BadgePercent size={20} color="#e9527a" />
//                   <span style={{ color: "#e9527a", fontWeight: "600", fontSize: "16px" }}>
//                     Tax Deduction: {legalDetails.legal_tax_fees_percentage}%
//                   </span>
//                 </div>
//                 <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
//                   A service fee of {legalDetails.legal_tax_fees_percentage}% will be deducted from your withdrawal amount.
//                 </p>
//               </div>

//               {/* Document Images - Dynamic Data */}
//               {(legalDetails.legal_details.legal_id_image || legalDetails.legal_details.passbook_image) && (
//                 <div style={{ marginBottom: "30px" }}>
//                   <h3 style={{
//                     fontSize: "18px",
//                     color: "#333",
//                     marginBottom: "20px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px"
//                   }}>
//                     <ImageIcon size={20} color="#e9527a" />
//                     Uploaded Documents
//                   </h3>
                  
//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
//                     {/* Legal ID Image - Dynamic */}
//                     {legalDetails.legal_details.legal_id_image && (
//                       <div style={{
//                         border: "1px solid #e0e0e0",
//                         borderRadius: "12px",
//                         overflow: "hidden",
//                         backgroundColor: "#fff"
//                       }}>
//                         <div style={{
//                           padding: "12px",
//                           backgroundColor: "#f8f9fa",
//                           borderBottom: "1px solid #e0e0e0"
//                         }}>
//                           <p style={{ margin: 0, fontSize: "14px", color: "#666", fontWeight: "500" }}>
//                             ID Document
//                           </p>
//                         </div>
//                         <img 
//                           src={legalDetails.legal_details.legal_id_image} 
//                           alt="Legal ID"
//                           style={{
//                             width: "100%",
//                             height: "150px",
//                             objectFit: "cover",
//                             display: "block"
//                           }}
//                           onError={(e) => {
//                             e.target.style.display = 'none';
//                             e.target.nextSibling.style.display = 'flex';
//                           }}
//                         />
//                         <div style={{
//                           height: "150px",
//                           display: "none",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           color: "#999",
//                           fontSize: "14px"
//                         }}>
//                           Failed to load image
//                         </div>
//                       </div>
//                     )}
                    
//                     {/* Passbook Image - Dynamic */}
//                     {legalDetails.legal_details.passbook_image && (
//                       <div style={{
//                         border: "1px solid #e0e0e0",
//                         borderRadius: "12px",
//                         overflow: "hidden",
//                         backgroundColor: "#fff"
//                       }}>
//                         <div style={{
//                           padding: "12px",
//                           backgroundColor: "#f8f9fa",
//                           borderBottom: "1px solid #e0e0e0"
//                         }}>
//                           <p style={{ margin: 0, fontSize: "14px", color: "#666", fontWeight: "500" }}>
//                             Passbook / Bank Statement
//                           </p>
//                         </div>
//                         <img 
//                           src={legalDetails.legal_details.passbook_image} 
//                           alt="Passbook"
//                           style={{
//                             width: "100%",
//                             height: "150px",
//                             objectFit: "cover",
//                             display: "block"
//                           }}
//                           onError={(e) => {
//                             e.target.style.display = 'none';
//                             e.target.nextSibling.style.display = 'flex';
//                           }}
//                         />
//                         <div style={{
//                           height: "150px",
//                           display: "none",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           color: "#999",
//                           fontSize: "14px"
//                         }}>
//                           Failed to load image
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* Withdrawal Amount Input */}
//               <div style={{ marginBottom: "30px" }}>
//                 <label style={{
//                   display: "block",
//                   marginBottom: "8px",
//                   color: "#333",
//                   fontWeight: "500",
//                   fontSize: "14px"
//                 }}>
//                   Withdrawal Amount
//                 </label>
//                 <div style={{ position: "relative" }}>
//                   <span style={{
//                     position: "absolute",
//                     left: "16px",
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                     color: "#666",
//                     fontSize: "18px"
//                   }}>$</span>
//                   <input
//                     type="number"
//                     placeholder="Enter amount"
//                     max={parseFloat(legalDetails.customer_credit)}
//                     style={{
//                       width: "100%",
//                       padding: "14px 14px 14px 40px",
//                       border: "2px solid #e0e0e0",
//                       borderRadius: "10px",
//                       fontSize: "16px",
//                       outline: "none",
//                       transition: "border-color 0.3s"
//                     }}
//                     onFocus={(e) => e.target.style.borderColor = "#e9527a"}
//                     onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
//                     onClick={(e) => e.stopPropagation()}
//                   />
//                 </div>
//                 <p style={{ marginTop: "8px", fontSize: "13px", color: "#666" }}>
//                   You will receive: <strong style={{ color: "#e9527a" }}>
//                     ${calculateAfterTax(parseFloat(legalDetails.customer_credit))}
//                   </strong> after tax deduction
//                 </p>
//               </div>

//               {/* Action Buttons */}
//               <div style={{ display: "flex", gap: "16px" }}>
//                 <button
//                   style={{
//                     flex: 1,
//                     padding: "16px",
//                     backgroundColor: "#e9527a",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "10px",
//                     fontSize: "16px",
//                     fontWeight: "600",
//                     cursor: "pointer",
//                     transition: "background-color 0.3s"
//                   }}
//                   onMouseEnter={(e) => e.target.style.backgroundColor = "#d64161"}
//                   onMouseLeave={(e) => e.target.style.backgroundColor = "#e9527a"}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleFormClick();
//                   }}
//                 >
//                   Request Withdrawal
//                 </button>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setShowWithdrawalForm(false);
//                   }}
//                   style={{
//                     flex: 1,
//                     padding: "16px",
//                     backgroundColor: "#f0f0f0",
//                     color: "#666",
//                     border: "none",
//                     borderRadius: "10px",
//                     fontSize: "16px",
//                     fontWeight: "600",
//                     cursor: "pointer",
//                     transition: "background-color 0.3s"
//                   }}
//                   onMouseEnter={(e) => e.target.style.backgroundColor = "#e0e0e0"}
//                   onMouseLeave={(e) => e.target.style.backgroundColor = "#f0f0f0"}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           ) : (
//             /* Original Creator Cards */
//             <div className="creator-cards-container">
//               {/* Self Creator Card */}
//               <div
//                 className={`creator-card ${
//                   selectedType === "self" ? "card-selected" : "card-unselected"
//                 }`}
//                 onClick={handleSelfClick}
//               >
//                 <div className="card-icon">
//                   <User size={48} />
//                 </div>
//                 <span className="card-title">Self Creator</span>
                
//                 {verificationStatus === "APPROVED" && (
//                   <span className="verified-badge">✓ Verified</span>
//                 )}

//                 {verificationStatus === "PENDING" && (
//                   <span className="pending-badge">Under Review</span>
//                 )}

//                 {verificationStatus === "REJECTED" && (
//                   <span className="rejected-badge">Rejected</span>
//                 )}
//               </div>

//               {/* Agency Creator Card */}
//               <div
//                 className={`creator-card ${
//                   selectedType === "agency" ? "card-selected" : "card-unselected"
//                 } ${isAgencyDisabled ? "disabled" : ""}`}
//                 onClick={handleAgencyClick}
//               >
//                 <div className="card-icon">
//                   <Users size={48} />
//                 </div>
//                 <span className="card-title">Agency Creator</span>
//                 {isAgencyDisabled && (
//                   <span className="disabled-badge">Coming Soon</span>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CreatorSelection;