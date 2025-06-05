import React from "react";

// PUBLIC_INTERFACE
function Header({ title, rightContent }) {
  /**
   * Simple mobile-first header bar.
   * Props:
   * - title: string or node
   * - rightContent: node (optional) e.g., for action/profile/settings
   */
  return (
    <div
      className="header"
      style={{
        width: "100%",
        background: "#4FC3F7",
        color: "#fff",
        padding: "14px 0",
        position: "sticky",
        top: 0,
        zIndex: 110,
        boxShadow: "0 2px 8px rgba(79,195,247,0.10)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <div style={{
        paddingLeft: 22,
        fontWeight: 700,
        fontSize: "1.2rem",
        letterSpacing: "0.01em"
      }}>
        {title}
      </div>
      <div style={{paddingRight:18}}>
        {rightContent}
      </div>
    </div>
  );
}

export default Header;
