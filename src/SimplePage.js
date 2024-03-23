import React, { useState } from "react";

const SimplePage = () => {
  // your code
  return (
    <div className="container mx-auto p-4">
      {" "}
      {/* Basic layout with padding */}
      <nav className="navbar bg-gray-800 text-white py-4">
        {" "}
        {/* Gray background, white text */}
        <div className="navbar-brand flex items-center">
          <h1 className="font-bold">Welcome to My Simple Page</h1>
        </div>
        <button
          className="menu-toggle bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "Close Menu" : "Open Menu"}
        </button>
      </nav>
      <div
        className={`sidebar bg-gray-200 w-64 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Expand sidebar on open */}
        <ul className="list-reset">
          <li className="py-2">Menu Item 1</li>
          <li className="py-2">Menu Item 2</li>
          <li className="py-2">Menu Item 3</li>
        </ul>
      </div>
      <div className="content">
        <p className="mt-4">This is a simple page.</p>
      </div>
    </div>
  );
};

export default SimplePage;
