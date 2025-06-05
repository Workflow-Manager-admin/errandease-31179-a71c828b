import React from "react";

// PUBLIC_INTERFACE
function OptimizeRouteButton({ onClick, isOptimizing }) {
  /**
   * Props:
   * - onClick: callback when button pressed
   * - isOptimizing: boolean, show spinner/progress
   */
  return (
    <button
      className="btn btn-large"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "#81C784",
        color: "#fff",
        border: "none",
        borderRadius: 6,
        padding: "13px 20px",
        fontSize: "1.11rem",
        fontWeight: 600,
        boxShadow: "0 1px 7px 0 rgba(129,199,132,0.11)",
        cursor: "pointer",
        marginBottom: 18,
        marginTop:4,
        transition: "background 0.18s"
      }}
      disabled={isOptimizing}
    >
      {isOptimizing ?
        <>
          <span
            style={{
              width: 20,
              height: 20,
              border: "3px solid #fff",
              borderTop: "3px solid #4FC3F7",
              borderRadius: "50%",
              display: "inline-block",
              animation: "spin 1s linear infinite"
            }}
          />
          Optimizing...
        </>
        :
        <>
          <span role="img" aria-label="optimize" style={{ fontSize: "1.3rem" }}>🔄</span>
          Optimize Route
        </>
      }
      <style>
        {`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        `}
      </style>
    </button>
  );
}

export default OptimizeRouteButton;
