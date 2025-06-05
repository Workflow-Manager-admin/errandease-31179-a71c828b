import React from "react";

// PUBLIC_INTERFACE
function BottomSheet({ isOpen = true, children, height = 190, style = {}, ...rest }) {
  /**
   * Simple bottom sheet component.
   * Props:
   * - isOpen: show/hide the bottom sheet
   * - children: content of the sheet
   * - height: pixel height
   */
  if (!isOpen) return null;
  return (
    <div
      className="bottom-sheet-ui"
      style={{
        position: "fixed",
        left: 0, right: 0, bottom: 0,
        height: height,
        background: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        boxShadow: "0 -3px 18px 0 rgba(79,195,247,0.13)",
        zIndex: 300,
        transition: "transform 0.18s",
        ...style
      }}
      {...rest}
    >
      {/* Drag handle for mobile look */}
      <div style={{
        width: 38,
        height: 5,
        borderRadius: 3,
        background: "#e3f7fe",
        margin: "8px auto 10px auto"
      }} />
      <div style={{
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 6,
        maxHeight: height - 24,
        overflowY: "auto"
      }}>
        {children}
      </div>
    </div>
  );
}

export default BottomSheet;
