import React from "react";

// PUBLIC_INTERFACE
function HomeRoute() {
  return (
    <div className="home-route" style={{
      maxWidth:"100%", minHeight:"68vh", display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"flex-start", paddingTop:"10px"
    }}>
      <h2 style={{
        color:"#222", fontWeight:600, fontSize:"1.3rem", marginBottom:4
      }}>Today's Errands</h2>
      <div style={{ color:"#4FC3F7", fontWeight:500, marginBottom:16 }}>No errands yet. Tap "+" to add!</div>
      {/* Task list/empty state goes here (implement later in feature build) */}
      <div style={{
        background:"#fff", borderRadius:14, boxShadow:"0 2px 8px 0 rgba(79,195,247,0.07)",
        width:"94%", maxWidth:420, minHeight:220, display:"flex", alignItems:"center", justifyContent:"center"
      }}>
        <span style={{color:"#81C784", fontSize:"2.3rem"}}>📝</span>
      </div>
    </div>
  );
}

export default HomeRoute;
