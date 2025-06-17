import React, { useState } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  const handleClick = () => setClicked(!clicked);

  let pageTitle = "";
  switch (location.pathname) {
    case "/":
      pageTitle = "Home Page";
      break;
    case "/about":
      pageTitle = "About Page";
      break;
      case "/services": // ✅ This matches the route path in App.js
      pageTitle = "Service Page";
      break;
    
      
    case "/contact":
      pageTitle = "Contact Page";
      break;
    default:
      pageTitle = "";
  }

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>

      {/* ✅ Page title displayed in navbar */}
      <div className="page-title-inside-navbar">{pageTitle}</div>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navbar;
