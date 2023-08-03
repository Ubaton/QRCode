// App.js
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import ContactPage from "../src/pages/ContactPage";
import FileConvertPage from "../src/pages/utils/FileConvert/FileConvert";
import CompressImagePage from "../src/pages/utils/CompressImage";
import CompressVideoPage from "../src/pages/utils/CompressVideo";
import PaymentMethod from "../src/pages/PaymentMethod";

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
    <>
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
        <Route
          path="/fileconvert"
          element={
            <FileConvertPage
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          }
        />
        <Route
          path="/compressimage"
          element={
            <CompressImagePage
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          }
        />
        <Route
          path="/compressvideo"
          element={
            <CompressVideoPage
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          }
        />
        <Route
          path="/paymentmethod"
          element={
            <PaymentMethod
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
