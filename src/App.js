// App.js
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import ContactPage from "../src/pages/ContactPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply the dark mode class to the root element based on the darkMode state
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Routes>
      <Route
        path="/about"
        element={
          <AboutPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        }
      />
      <Route
        path="/contact"
        element={
          <ContactPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        }
      />
      <Route
        path="/"
        element={
          <HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        }
      />
    </Routes>
  );
}

export default App;
