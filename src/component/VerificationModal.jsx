import React from "react";

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const boxStyle = {
  background: "#fff",
  padding: "0",
  borderRadius: "8px",
  maxWidth: "520px",
  width: "92%",
  boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
  overflow: "hidden",
};

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "18px 20px",
  borderBottom: "1px solid #eee",
};

const titleStyle = { margin: 0, fontSize: "20px", fontWeight: 600 };
const closeStyle = { background: "transparent", border: "none", fontSize: "20px", cursor: "pointer", color: "#666" };

const bodyStyle = { padding: "18px 20px", color: "#333", lineHeight: 1.5 };

const footerStyle = { padding: "12px 20px", borderTop: "1px solid #f1f1f1", display: "flex", justifyContent: "flex-end" };

const okBtnStyle = {
  padding: "8px 14px",
  background: "#e9527a",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: 600,
};

export default function VerificationModal({
  open,
  onClose,
  onConfirm,
  message,
  title = "Verification Status",
  confirmText = "Start Process",
}) {
  if (!open) return null;

  return (
    <div style={overlayStyle} role="dialog" aria-modal="true">
      <div style={boxStyle}>
        <div style={headerStyle}>
          <h3 style={titleStyle}>{title}</h3>
          <button aria-label="close" style={closeStyle} onClick={onClose}>
            ×
          </button>
        </div>

        <div style={bodyStyle}>
          <p style={{ margin: 0 }}>{message || "Please complete identity verification to enable withdrawals."}</p>
        </div>

        <div style={footerStyle}>
          <button
            style={okBtnStyle}
            onClick={() => {
              if (typeof onConfirm === "function") onConfirm();
              else if (typeof onClose === "function") onClose();
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
