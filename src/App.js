import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
//import Dashboard from "./Dashboard"; // Import the Dashboard component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login page route */}
        <Route
          path="/Layout"
          element={
            
              <Layout /> 
          }
        />{" "}
        {/* sidebar route */}
        {/* Add more routes for other pages here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
