import React, { useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      
      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>Products</li>
        <li>Pricing</li>
        <li>Integrations</li>
        <li>Resources</li>
        <li>Sign in</li>
      </ul>
      
      <div className="navbar-actions">
     
        <button className="navbar-cta">Get Started with Yuga AI</button>
      </div>
    </nav>
  );
}

export default Navbar;
