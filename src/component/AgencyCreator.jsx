import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../css/AgencyCreator.css";
import { Menu, X} from "lucide-react";

const AgencyCreator = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("verify");
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "Suda Chaiyaporn",
    agencyCode: "0420",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      console.log("File selected:", file.name);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", {
      ...formData,
      passportPhoto: uploadedFile,
    });
    alert("Form submitted successfully!");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (window.innerWidth <= 992) {
      setIsSidebarOpen(false);
    }
  };

  const UploadIcon = () => (
    <div className="upload-icon-container">
      <svg
        className="upload-icon-svg"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 15V3M12 3L8 7M12 3L16 7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V17"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  return (
    <div className="dashboard-container">
      <button
        className="mobile-toggle d-none"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay d-lg-none"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar show={isSidebarOpen} />

      <main className="main-content">
        {/* <Header onToggleSidebar={toggleSidebar} /> */}

                <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        

        <div className="content-area">
          <div className="self-creator-container">
            <h2 className="self-creator-title">Agency Creator</h2>

            <form className="form-wrapper" onSubmit={handleSubmit}>
              {/* Enter Name */}
              <div className="form-group-custom">
                <label className="form-label-custom">Enter Name*</label>
                <input
                  type="text"
                  name="name"
                  className="form-input-custom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span className="helper-text">*as per Passport</span>
              </div>

              {/* Upload Passport Photo */}
              <div className="form-group-custom">
                <label className="form-label-custom">
                  Upload Passport Photo
                </label>
                <div className="upload-box" onClick={triggerFileUpload}>
                  <UploadIcon />
                  <span className="upload-text">
                    {uploadedFile ? uploadedFile.name : "Browse & Upload Photo"}
                  </span>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  accept="image/*"
                />
              </div>

              {/* Enter agency code */}
              <div className="form-group-custom">
                <label className="form-label-custom">Enter agency code*</label>
                <input
                  type="text"
                  name="agencyCode"
                  className="form-input-custom"
                  value={formData.agencyCode}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn-custom">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AgencyCreator;
