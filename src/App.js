import React, { useState, useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import ContactPage from "../src/pages/ContactPage";
import FileConvertPage from "../src/pages/utils/FileConvert/FileConvert";
import CompressImagePage from "./pages/utils/CompressImage/CompressImage";
import CompressVideoPage from "./pages/utils/CompressVideo/CompressVideo";
import PaymentMethod from "../src/pages/PaymentMethod";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthDetails from "./data/AuthDetails";
import ProfilePage from "./pages/ProfilePage";
import PrivacyPolicy from "./pages/utils/Use/PrivacyPolicy";
import TermsOfUse from "./pages/utils/Use/TermsOfUse";
import SocialsPage from "./components/Socials/SocialsPage";
import { ToastContainer } from "react-toastify";
import LandingPage from "./pages/LandingPage";
import API from "./components/API/Api";

function App() {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode.matches);

  useEffect(() => {
    // Apply the dark mode class to the root element based on the darkMode state
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Watch for changes in system dark mode preference
  useEffect(() => {
    const mediaQueryListener = (e) => {
      setDarkMode(e.matches);
    };
    prefersDarkMode.addEventListener("change", mediaQueryListener);
    return () => {
      prefersDarkMode.removeEventListener("change", mediaQueryListener);
    };
  }, [prefersDarkMode]);

  return (
    <PayPalScriptProvider
      options={{ "client-Id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
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
          path="/home"
          element={
            <HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="/"
          element={
            <LandingPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="/profilepage"
          element={
            <ProfilePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
          path="/login"
          element={
            <Login darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="/authdetails"
          element={
            <AuthDetails darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PrivacyPolicy
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          }
        />
        <Route
          path="/terms-of-use"
          element={
            <TermsOfUse darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="/socials"
          element={
            <SocialsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="/api"
          element={<API darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
      </Routes>
      <ToastContainer />
    </PayPalScriptProvider>
  );
}

export default App;
