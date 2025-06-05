import React from "react";

// PUBLIC_INTERFACE
function SettingsRoute() {
  return (
    <div className="settings-route" style={{
      maxWidth: "100%", minHeight:"68vh", display:"flex", flexDirection:"column", alignItems:"center", paddingTop:20
    }}>
      <h2 style={{color:"#222", fontWeight:600, fontSize:"1.2rem"}}>Settings</h2>
      {/* Settings controls to be implemented */}
      <div style={{
        background:"#fff", borderRadius:12, boxShadow:"0 2px 8px 0 rgba(129,199,132,0.11)",
        width:"94%", maxWidth:420, minHeight:120, display:"flex", alignItems:"center", justifyContent:"center"
      }}>
        <span style={{color:"#81C784", fontSize:"2rem"}}>⚙️</span>
      </div>
      <div style={{fontSize:"0.98rem", color:"#888", marginTop:18}}>Customize appearance & integrations.</div>
    </div>
  );
}

export default SettingsRoute;
