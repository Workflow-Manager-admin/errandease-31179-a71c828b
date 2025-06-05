import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import AddEditRoute from "./routes/AddEditRoute";
import MapRoute from "./routes/MapRoute";
import SettingsRoute from "./routes/SettingsRoute";

// Used for floating action button placement and mobile navigation
const bottomNavItems = [
  { label: "Home", icon: "🏠", path: "/" },
  { label: "Add", icon: "➕", path: "/add" },
  { label: "Map", icon: "🗺️", path: "/map" },
  { label: "Settings", icon: "⚙️", path: "/settings" }
];

// PUBLIC_INTERFACE
function MainContainer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine selected nav
  const activeNavIndex = bottomNavItems.findIndex(item => item.path === (location.pathname === "/" ? "/" : location.pathname.split("/")[1] ? `/${location.pathname.split("/")[1]}` : location.pathname));

  return (
    <div className="main-container app-theme-light">
      <nav className="main-appbar" style={{background:"#4FC3F7", color:"#fff", padding:"16px 0", boxShadow:"0 2px 8px rgba(79,195,247,0.12)"}}>
        <div className="container" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <div style={{fontWeight:700, fontSize:"1.25rem", letterSpacing:"0.02em"}}>
            <span style={{color:"#81C784"}}>🗺️</span> ErrandEase
          </div>
          <button
            onClick={() => navigate("/settings")}
            className="profile-btn"
            style={{background:"none", border:"none", color:"#fff", fontSize:"1.35rem", cursor:"pointer"}}
            aria-label="Settings"
          >
            <span role="img" aria-label="profile">⚙️</span>
          </button>
        </div>
      </nav>

      <main style={{paddingTop:64, paddingBottom:72, minHeight:'100vh', background:"#f8fafb"}}>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/add" element={<AddEditRoute />} />
          <Route path="/edit/:id" element={<AddEditRoute />} />
          <Route path="/map" element={<MapRoute />} />
          <Route path="/settings" element={<SettingsRoute />} />
          <Route path="*" element={<HomeRoute />} />
        </Routes>
      </main>

      {/* Mobile-first bottom navigation bar */}
      <nav className="main-bottom-nav" style={{
        position:"fixed", left:0, right:0, bottom:0, height:56, background:"#fff", borderTop:"1px solid #e0e0e0",
        display:"flex", justifyContent:"space-around", alignItems:"center", boxShadow:"0 -1px 8px rgba(0,0,0,0.06)", zIndex:100
      }}>
        {bottomNavItems.map((item, i) => (
          <button
            key={item.path}
            className={`bottom-nav-btn${location.pathname === item.path ? " nav-active" : ""}`}
            style={{
              flex:1, background:"none", border:"none", color: location.pathname === item.path ? "#4FC3F7" : "#888", fontSize:"1.3rem",
              padding:"6px 0", display:"flex", flexDirection:"column", alignItems:"center", cursor:"pointer"
            }}
            aria-label={item.label}
            onClick={()=>navigate(item.path)}
          >
            <span>{item.icon}</span>
            <span style={{fontSize:"0.80rem", marginTop:2}}>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Floating Action Button: Prominent on Home only, mobile styled */}
      {(location.pathname === "/" || location.pathname === "/home") && (
        <button className="fab-add-errand"
            style={{
              position:"fixed", bottom:80, right:24, width:56, height:56, borderRadius:"50%",
              background:"#4FC3F7", color:"#fff", border:"none", boxShadow:"0 4px 16px rgba(79,195,247,0.25)",
              fontSize:"2.2rem", display:"flex", alignItems:"center", justifyContent:"center", zIndex:200,
              transition:"background 0.13s"
            }}
            aria-label="Add Errand"
            onClick={()=>navigate("/add")}
        >
          <span>+</span>
        </button>
      )}
    </div>
  );
}

export default MainContainer;
