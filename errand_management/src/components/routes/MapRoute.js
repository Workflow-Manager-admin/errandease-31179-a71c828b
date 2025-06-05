import React from "react";

// PUBLIC_INTERFACE
function MapRoute() {
  return (
    <div className="map-route" style={{
      maxWidth: "100%", minHeight:"68vh", display:"flex", flexDirection:"column", alignItems:"center", paddingTop:18
    }}>
      <h2 style={{color:"#222", fontWeight:600, fontSize:"1.2rem"}}>Map / Route View</h2>
      {/* Map placeholder - will integrate or stub Google Maps and route lines later */}
      <div style={{
        background:"#e3f7fe", borderRadius:18, width:"94%", maxWidth:420, minHeight:300,
        display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 2px 8px 0 rgba(79,195,247,0.09)"
      }}>
        <span style={{color:"#4FC3F7", fontSize:"2.1rem"}}>🗺️</span>
      </div>
    </div>
  );
}

export default MapRoute;
