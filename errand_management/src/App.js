import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MainContainer from "./components/MainContainer";

// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <MainContainer />
    </Router>
  );
}

export default App;
