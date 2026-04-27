// Login.jsx (or Otp.jsx)
import React, { useState, useEffect } from "react";
import "../css/Otp.css";
import Logo from "../assets/Logo.png";
import Otps from "../assets/Otp.png";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // 6 digits
  const [timeLeft, setTimeLeft] = useState(56); // 00:56 in seconds
  const [canResend, setCanResend] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleOtpChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        // Changed from 3 to 5 for 6 digits
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }

    // Handle left arrow
    if (e.key === "ArrowLeft" && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }

    // Handle right arrow
    if (e.key === "ArrowRight" && index < 5) {
      // Changed from 3 to 5
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6); // Get only first 6 digits
    if (/^\d{6}$/.test(pasteData)) {
      const newOtp = pasteData.split("");
      setOtp(newOtp);
      // Focus the last input
      const lastInput = document.getElementById("otp-input-5");
      if (lastInput) lastInput.focus();
    }
  };

  const handleResend = () => {
    if (canResend) {
      // Reset timer and OTP
      setTimeLeft(56);
      setCanResend(false);
      setOtp(["", "", "", "", "", ""]);
      // Focus first input
      const firstInput = document.getElementById("otp-input-0");
      if (firstInput) firstInput.focus();
      // Add your resend OTP logic here
      console.log("Resending OTP...");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      // Changed from 4 to 6
      console.log("OTP Submitted:", otpValue);
      // Add your OTP verification logic here
    } else {
      alert("Please enter a complete 6-digit OTP");
    }
  };

  // Format time as 00:56
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="login-container">
      {/* Left Side - Image */}
      <div className="login-image-side d-lg-flex d-none d-md-none">
        <img src={Otps} alt="Login Visual" className="side-image w-75" />
      </div>

      {/* Right Side - Login Form */}
      <div className="login-form-side">
        <div className="login-card">
          <div className="login-header">
            <img src={Logo} className="img-fluid w-25 mb-4" alt="Logo" />

            <div className="login-image-side d-lg-none d-block d-md-block">
              <img src={Otps} alt="Login Visual" className="side-image w-50" />
            </div>
            <p className=" fs-3 text-white">
              Get OTP from ThaiXO App
            </p>
            <p className="login-instruction text-white">
              Open ThaiXO App → Profile → Your secure OTP.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* OTP Input Fields - 6 digits */}
            <div className="otp-input-group">
              <div className="otp-input-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="otp-input"
                    autoFocus={index === 0}
                    autoComplete="one-time-code"
                  />
                ))}
              </div>
            </div>

            <button type="submit" className="verify-button ">
              Log In
            </button>

            {/* Resend Timer Section */}
            <div className="resend-section mt-5 gap-0">
              <p className="resend-text text-white">Didn't receiving code?</p>
              <div className="resend-timer">
                <button
                  type="button"
                  className={`resend-btn text-white ${
                    canResend ? "active" : "disabled"
                  }`}
                  onClick={handleResend}
                  disabled={!canResend}
                >
                  Resend
                </button>
                <span className="timer text-white">
                  - {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otp;
