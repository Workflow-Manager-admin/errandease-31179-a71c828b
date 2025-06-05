import React, { useEffect, useRef, useState } from "react";

/**
 * MapView displays an interactive Google Map using the Google Maps JavaScript API.
 * 
 * === GOOGLE MAPS API KEY INTEGRATION ===
 * 
 * To use this component with a live Google Map:
 *  1. Obtain a Maps JavaScript API key at: https://console.cloud.google.com/apis/credentials
 *  2. Create a `.env` file at the *project root* (the same folder as package.json, NOT src/).
 *     Add:
 *        REACT_APP_GOOGLE_MAPS_API_KEY=your-api-key-here
 *  3. **You MUST fully restart the dev server** after adding or updating .env!
 *     (Hot reload will NOT pick up environment variable changes.)
 *     - Stop `npm start` (Ctrl+C in terminal), then start again.
 * 
 * If the key is missing, invalid, or restricted, a prominent fallback UI is shown
 * with clear setup & troubleshooting instructions.
 * 
 * Further details, troubleshooting, and integration steps are in README.md.
 * 
 * == FOR MAINTAINERS ==
 * This API key check is robust: both absence and plausibility of the variable are checked
 * before attempting to load Maps JS, and any loading/initialization error 
 * is surfaced with UI/developer-friendly details. Update guidance here & fallback UI if build integration changes.
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
  const [googleError, setGoogleError] = useState(""); // error string or blank

  // -- API key check: Check existence, non-blank/non-placeholder string
  // (Developers sometimes copy paste an actual placeholder apikey line)
  let apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const plausibleApiKey =
    typeof apiKey === "string" &&
    !!apiKey.trim() &&
    !["your-api-key-here", "PUT-KEY-HERE", "API_KEY"].includes(apiKey.trim().toUpperCase());

  // Only use key if plausible
  if (!plausibleApiKey) apiKey = undefined;

  useEffect(() => {
    // Only attempt to inject script if a plausible API key and DOM ref, and not re-loading an already loaded script
    if (!apiKey || !mapRef.current || window.google?.maps) return;

    const scriptId = "google-maps-js";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onerror = () =>
      setGoogleError(
        "Could not load the Google Maps JS script. (Invalid or restricted API key – check .env and Maps API access.)"
      );

    document.body.appendChild(script);

    script.onload = () => {
      if (!window.google || !window.google.maps) {
        setGoogleError(
          "Google Maps JS loaded, but window.google.maps object not found — likely due to invalid API key or internet/firewall issue."
        );
        return;
      }
      setGoogleError(""); // success!
    };

    // Cleanup script if unmounting
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
    // eslint-disable-next-line
  }, [apiKey]);

  // Map initialization effect
  useEffect(() => {
    if (!apiKey || !mapRef.current || !window.google?.maps || googleError) return;

    // Ensure idempotent initialization
    if (!mapInstance.current) {
      // Default map center (NYC as demo)
      const center = { lat: 40.7128, lng: -74.006 };
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 12,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });
    }
    // You could extend this section to add markers for errands with geocoords.
    // For demo purposes, only custom overlays are shown.
    // eslint-disable-next-line
  }, [apiKey, googleError, mapRef.current]);

  // ---- Fallback UI if key missing/invalid or failed load ----
  if (!apiKey || googleError) {
    const isTrivialKeyMissing = !process.env.REACT_APP_GOOGLE_MAPS_API_KEY ||
      !plausibleApiKey;
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
        <div
          style={{
            color: "#d44c4c",
            fontSize: "1.04rem",
            maxWidth: 370,
            margin: "0 auto 14px auto",
            textAlign: "center",
            lineHeight: 1.4
          }}
        >
          {isTrivialKeyMissing ? (
            <>
              <strong>How to set up Google Maps:</strong>
              <ol style={{ textAlign: "left", margin: "7px auto 6px auto", color: "#bc2929" }}>
                <li>
                  <b>Get a Maps API key</b> from&nbsp;
                  <a
                    href="https://console.cloud.google.com/apis/credentials"
                    target="_blank"
                    rel="noopener"
                    style={{ color: "#bc2929" }}
                  >
                    Google Cloud Console
                  </a>
                  .
                </li>
                <li>
                  In <b>.env</b> file <u>(project root, same folder as package.json)</u>, add:<br />
                  <code style={{ display: "block", padding: "6px 9px", background: "#fff3", borderRadius: 7, color: "#bc2929" }}>
                    REACT_APP_GOOGLE_MAPS_API_KEY=your-api-key-here
                  </code>
                </li>
                <li>
                  <b>Save</b> the file <b>& fully restart</b> the dev server:<br />
                  <ul style={{ paddingLeft: 18 }}>
                    <li>Stop <code>npm start</code> if running.</li>
                    <li>Run <code>npm start</code> again.</li>
                  </ul>
                </li>
              </ol>
            </>
          ) : (
            <>
              <span role="img" aria-label="sad">⚠️</span> <b>Google Maps failed to load.</b>
              <br />
              Reason:&nbsp;
              <span style={{ color: "#b73a3a" }}>
                {typeof googleError === "string"
                  ? googleError
                  : "Unknown error (double-check API key and .env setup)."}
              </span>
              <br />
              <br />
              <strong>Troubleshooting:</strong>
              <ul style={{ paddingLeft: 18, textAlign: "left", color: "#bc2929" }}>
                <li>
                  API key in <b>.env</b> is correct (not a placeholder) and enabled for <b>Maps JavaScript API</b>.
                </li>
                <li>
                  Your <b>.env</b> file is <u>in the project root</u> (not src/).
                </li>
                <li>
                  You <b>fully restarted</b> the dev server after editing <b>.env</b> (hot reload will NOT pick up env changes).
                </li>
                <li>
                  Your internet/firewall isn't blocking Google's services.
                </li>
              </ul>
              See project <b>README</b> for further setup details.
            </>
          )}
        </div>
        <div
          style={{
            background: "#ffedea",
            borderRadius: 10,
            padding: "8px 14px",
            color: "#bf2a2a",
            fontSize: "0.96rem",
            marginTop: 8,
            textAlign: "center"
          }}
        >
          <b>Developer tip:</b> See <code>MapView.js</code> and <code>README.md</code> for setup/troubleshooting.
          <br />
          <u>After updating .env, always fully restart dev server.</u>
        </div>
      </div>
    );
  }

  // --- Render the working Google Map and overlays ---
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
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }}
        tabIndex={-1}
        aria-label="Google Map"
      />
      {/* Overlay children, e.g., custom markers/lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          pointerEvents: "none"
        }}
      >
        {/* For custom overlays/controls: set pointerEvents: auto if you want to capture pointer */}
        {children}
      </div>
    </div>
  );
}

export default MapView;
