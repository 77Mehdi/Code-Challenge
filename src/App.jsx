import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/nav";
import "./App.css"; 
import { FocusCards } from "./components/ui/focus-cards";
import PemintPage from "./components/pemintPage";

function StepPage({ label }) {
  return (
    <div className="p-10 text-amber-50">
      <h2 className="text-2xl font-bold">{label}</h2>
      <p>This is the {label} step content.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/select-skip" replace />} />
        <Route path="/postcode" element={<StepPage label="Postcode" />} />
        <Route path="/waste-type" element={<StepPage label="Waste Type" />} />
        <Route path="/select-skip" element={<FocusCards/>} />
        <Route path="/permit-check" element={<PemintPage/>} />
        <Route path="/choose-date" element={<StepPage label="Choose Date" />} />
        <Route path="/payment" element={<StepPage label="Payment" />} />
        <Route path="*" element={<div className="p-10">Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
