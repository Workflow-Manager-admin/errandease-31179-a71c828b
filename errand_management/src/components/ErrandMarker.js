import React from "react";

// PUBLIC_INTERFACE
function ErrandMarker({ idx, name, selected, style = {}, ...rest }) {
  /**
   * Displays a round marker for an errand.
   * Props:
   * - idx: sequence number (1-based)
   * - name: optional tooltip/label
   * - selected: highlight (not used yet)
   */
  return (
    <div
      className="errand-marker"
      title={name}
      style={{
        position: "absolute",
        left: 60 + idx * 46,  // mock layout for now
        top: 80 + (idx % 2 ? 20 : 70),
        transform: "translate(-50%, -85%)",
        zIndex: selected ? 7 : 5,
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: selected ? "#81C784" : "#4FC3F7",
        border: selected ? "2.5px solid #fff" : "none",
        boxShadow: "0 3px 13px 0 rgba(79,195,247,0.10)",
        color: "#fff",
        fontWeight: 600,
        fontSize: "1.18rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        ...style
      }}
      {...rest}
    >
      <span role="img" aria-label="marker" style={{marginRight:6}}>📍</span>
      {idx}
    </div>
  );
}

export default ErrandMarker;
