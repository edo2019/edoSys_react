import React, { useState } from "react";

const SimplePage = () => {
  // Define state using useState hook
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Event handler function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>Welcome to My Simple Page</h1>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "Close Menu" : "Open Menu"}
        </button>
      </nav>
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
      <div className="content">
        <p>This is a simple page.</p>
      </div>
    </div>
  );
};

export default SimplePage;
