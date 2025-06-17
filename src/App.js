import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service"; // ✅ Fixed
import About from "./pages/About";
import Footer from "./pages/Footer";

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} /> {/* ✅ Correct route */}
      </Routes>
      {location.pathname === "/" && <Footer />} {/* ✅ Show footer only on Home */}
    </div>
  );
}

export default App;
