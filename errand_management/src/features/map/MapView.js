import React, { useEffect, useRef, useState } from "react";

/**
 * MapView displays an interactive Google Map using the Google Maps JavaScript API.
 * If the REACT_APP_GOOGLE_MAPS_API_KEY environment variable is set, a live map is shown.
 * Otherwise, instructions for setup are rendered as a fallback.
 *
 * To use this component with a live Google Map:
 * 1. Obtain an API key from https://console.cloud.google.com/apis/credentials.
 * 2. Add it to your environment: REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_KEY_HERE
 * 3. Restart your dev server.
 *
 * If the key is missing, you will see fallback instructions.
 */
// PUBLIC_INTERFACE
function MapView({
  errands = [],
  route = [],
  children,
  style = {},
  ...rest
}) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [googleError, setGoogleError] = useState(false);

  // Use environment variable for API key
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    // Only attempt to load when an API key is set and DOM ref is present.
    if (!apiKey || !mapRef.current || window.google?.maps) return;

    // Add the Google Maps JS API script (only if not already loaded)
    const scriptId = "google-maps-js";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onerror = () => setGoogleError(true);

    document.body.appendChild(script);

    script.onload = () => {
      if (!window.google || !window.google.maps) {
        setGoogleError(true);
        return;
      }
      // Trigger a re-render to initialize the map below
      setGoogleError(false);
    };

    // Cleanup script if unmounting
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
    // eslint-disable-next-line
  }, [apiKey]);

  // Initialize the map
  useEffect(() => {
    if (!apiKey || !mapRef.current || !window.google?.maps || googleError) return;

    // Only initialize once!
    if (!mapInstance.current) {
      // Basic center (demo: New York City)
      const center = { lat: 40.7128, lng: -74.006 };
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 12,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });
    }
    // Optionally: Add markers for errands
    // You could extend this section to put markers using errands' coordinates.
    // For now just demo.

    // eslint-disable-next-line
  }, [apiKey, googleError, mapRef.current]);

  // Fallback: Google Maps key missing or failed to load
  if (!apiKey || googleError) {
    return (
      <div
        className="map-view-fallback"
        style={{
          width: "100%",
          minHeight: 380,
          background: "#f9e7e7",
          borderRadius: 20,
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 2px 8px 0 rgba(79,195,247,0.09)",
          color: "#bc2929",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          ...style
        }}
        {...rest}
      >
        <span style={{ fontSize: "2.8rem", marginBottom: 10 }}>🗺️</span>
        <div style={{ fontWeight: 700, fontSize: "1.16rem", marginBottom: 6 }}>
          Google Maps Integration Not Configured
        </div>
        <div style={{ color: "#d44c4c", fontSize: "0.98rem", maxWidth: 310, margin: "0 auto 18px auto", textAlign: "center" }}>
          Set <code>REACT_APP_GOOGLE_MAPS_API_KEY</code> in your <b>.env</b> file and restart the server.<br />
          {/* Dev instructions */}
          {/* 
          How to enable live Google Maps:
          1. Get an API Key: https://console.cloud.google.com/apis/credentials
          2. Add to .env: REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_KEY
          3. Restart `npm start`
          */}
        </div>
        <div style={{
          background: "#ffedea",
          borderRadius: 10,
          padding: "8px 14px",
          color: "#bf2a2a",
          fontSize: "0.96rem"
        }}>
          Developer: See MapView.js for setup instructions.
        </div>
      </div>
    );
  }

  // Render the live Google Map and children overlays
  return (
    <div
      className="map-view"
      style={{
        width: "100%",
        minHeight: 380,
        borderRadius: 20,
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 2px 8px 0 rgba(79,195,247,0.09)",
        ...style
      }}
      {...rest}
    >
      {/* Live Google Map canvas */}
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: 380,
          borderRadius: 20,
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 1,
        }}
        tabIndex={-1}
        aria-label="Google Map"
      />
      {/* Overlay children, eg. custom markers (absolute positioned) */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 3, // higher than the map canvas
        pointerEvents: "none"
      }}>
        {/* Children must apply pointerEvents: auto if they want to be interactable */}
        {children}
      </div>
    </div>
  );
}

export default MapView;
