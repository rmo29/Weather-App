import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Weather App</h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Weather
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
