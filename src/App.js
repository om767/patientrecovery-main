import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import PatientDashboard from "./pages/PatientDashboard";   // ✅ Patient Dashboard
import DoctorDashboard from "./pages/DoctorDashboard";     // ✅ Doctor Dashboard
import PatientTimeline from "./pages/PatientTimeline";
import Support from "./pages/Chatroom";
import About from "./pages/About";

function App() {
  const location = useLocation();

  // Hide Navbar & Footer on login/register pages
  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/" ||
    location.pathname === "/register";

  return (
    <div className="app">
      {!hideLayout && <Navbar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PatientDashboard />} /> {/* Patient Dashboard */}
          <Route path="/DoctorDashboard" element={<DoctorDashboard />} /> {/* Doctor Dashboard */}
          <Route path="/PatientTimeline" element={<PatientTimeline />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
