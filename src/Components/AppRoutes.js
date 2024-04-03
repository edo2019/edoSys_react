import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
//import Dashboard from "./Dashboard"; // Import the Dashboard component
import DefaultSidebar from "../DefaultSidebar";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login page route */}
        <Route path="/sidebar" element={<DefaultSidebar />} />{" "}
        {/* Dashboard route */}
        {/* Add more routes for other pages here */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
