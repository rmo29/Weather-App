import React from "react";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import About from "./components/About";
import Footer from "./components/Footer"; // Import Footer

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Ensure this import is at the top of your file

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
