import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false, // Initial login state
  setIsLoggedIn: () => {}, // Placeholder function for updating state
});

// Provider component to manage login state
export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate login logic (replace with your actual authentication process)
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
