import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import "../css/NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-card">
        
        {/* 404 Number */}
        <h1 className="notfound-title">404</h1>

        {/* Heading */}
        <h2 className="notfound-heading">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="notfound-text">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="notfound-buttons">
          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            <Home size={18} />
            Go Home
          </button>

          <button
            className="back-btn mb-0"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}