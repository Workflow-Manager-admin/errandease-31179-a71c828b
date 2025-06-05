import React from "react";

// PUBLIC_INTERFACE
function FAB({ onClick, label = "Add Errand", icon = "+", ...rest }) {
  /**
   * Floating Action Button
   * Props:
   * - onClick: click handler
   * - label: accessibility label
   * - icon: button icon
   */
  return (
    <button
      aria-label={label}
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: 80,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#4FC3F7",
        color: "#fff",
        border: "none",
        boxShadow: "0 4px 16px rgba(79,195,247,0.25)",
        fontSize: "2.1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 200,
        transition: "background 0.13s"
      }}
      {...rest}
    >
      <span>{icon}</span>
    </button>
  );
}

export default FAB;
