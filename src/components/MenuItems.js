// src/components/MenuItems.js

export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: "fas fa-home"
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
    icon: "fas fa-info-circle"
  },
  {
    title: "Services", // ✅ This is the Service page
    url: "/services",  // ✅ Make sure this matches the Route in App.js
    cName: "nav-links",
    icon: "fas fa-concierge-bell"
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links",
    icon: "fas fa-envelope"
  }
];
