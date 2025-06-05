import React from "react";

// PUBLIC_INTERFACE
function AddEditRoute() {
  return (
    <div className="add-edit-route" style={{
      maxWidth: "100%", minHeight:"68vh", display:"flex", flexDirection:"column", alignItems:"center", paddingTop:20
    }}>
      <h2 style={{color: "#222", fontWeight:600, fontSize:"1.25rem"}}>Add / Edit Errand</h2>
      {/* Form/Future content */}
      <div style={{
        background:"#fff", borderRadius:12, boxShadow:"0 2px 8px 0 rgba(79,195,247,0.13)",
        width:"94%", maxWidth:420, minHeight:200, display:"flex", alignItems:"center", justifyContent:"center"
      }}>
        <span style={{color:"#4FC3F7", fontSize:"2.2rem"}}>📍</span>
      </div>
    </div>
  );
}

export default AddEditRoute;
