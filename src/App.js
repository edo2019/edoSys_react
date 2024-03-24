import React from "react";
import DefaultSidebar from "./DefaultSidebar";
import NavbarSimple from "./NavbarSimple";

function App() {
  return (
   <div className="flex flex-col h-screen">
     <NavbarSimple />
    <div className="flex flex-1">
      <DefaultSidebar />
      <main className="flex-grow p-4">
        {/* Your content here */}
        <h1>Welcome to My App</h1>
      </main>
    </div>
     </div>
  );
}

export default App;
