import React from "react";

/** 
 * MapView displays the main map area for route navigation.
 * Currently uses mock data and draws placeholder map features.
 * Receives errands, route, and renders children (for marker overlays, etc.)
 */
// PUBLIC_INTERFACE
function MapView({
  errands = [],
  route = [],
  children,
  style = {},
  ...rest
}) {
  return (
    <div
      className="map-view"
      style={{
        width: "100%",
        minHeight: 380,
        background: "#e3f7fe",
        borderRadius: 20,
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 2px 8px 0 rgba(79,195,247,0.09)",
        ...style
      }}
      {...rest}
    >
      {/* Placeholder map backdrop */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(157deg, #e3f7fe 72%, #b4e0f9 100%)",
          zIndex: 1
        }}
      />
      {/* Example route polyline (mock, not dynamic yet) */}
      {route.length > 1 && (
        <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}>
          {/* Optionally, map route to positional points if logic added */}
          {/* For now, stubbed line */}
          <line 
            x1="35" y1="120" x2="240" y2="200" 
            stroke="#81C784" strokeWidth="4"
            opacity="0.33"
          />
        </svg>
      )}
      {/* Markers (passed as children for flexibility) */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3 }}>
        {children}
      </div>
      {/* Decorative map emoji */}
      <div
        style={{
          position: "absolute",
          right: 14,
          bottom: 12,
          fontSize: "2rem",
          color: "#4FC3F7",
          opacity: 0.25,
          pointerEvents: "none"
        }}
      >
        🗺️
      </div>
    </div>
  );
}

export default MapView;
