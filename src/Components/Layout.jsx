import React from "react";
import DefaultSidebar from "./DefaultSidebar";
import NavbarSimple from "./NavbarSimple";

const Layout=()=>{

return(
    <div className="layout-container"> 
    <NavbarSimple />
    <DefaultSidebar />
    <main> {/* Placeholder for your main content */} </main>
  </div>
);
};
export default Layout;