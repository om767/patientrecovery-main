import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        {/* Brand */}
        <div className="logo">
          <span className="brand-gradient">SWASTH BHARAT</span>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Dashboard</Link>
          </li>
          <li className={location.pathname === "/DoctorDashboard" ? "active" : ""}>
            <Link to="/DoctorDashboard">Doctor Dashboard</Link>
          </li>
          <li className={location.pathname === "/PatientTimeline" ? "active" : ""}>
            <Link to="/PatientTimeline">Patient Timeline</Link>
          </li>
          <li className={location.pathname === "/support" ? "active" : ""}>
            <Link to="/support">Support</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* Inline Styles */}
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 3rem;
          background: linear-gradient(135deg, #0072ff, #00c6ff);
          border-radius: 18px;
          margin: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          animation: fadeDown 0.8s ease;
        }

        .logo .brand-gradient {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(90deg, #ffffff, #f7f7f7, #ffdf40);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1px;
          animation: shine 4s linear infinite;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 2rem;
        }

        .nav-links li {
          position: relative;
        }

        .nav-links a {
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 500;
          color: #fff;
          transition: all 0.3s ease;
          padding: 6px 10px;
          border-radius: 10px;
        }

        .nav-links a:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
        }

        .nav-links li.active a {
          background: rgba(255, 255, 255, 0.25);
          font-weight: 600;
          transform: scale(1.05);
        }

        @keyframes shine {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
