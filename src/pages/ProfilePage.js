import React from "react";
import AuthDetails from "../data/AuthDetails";

const ProfilePage = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-50"
      }`}
    >
      <div
        className={`max-w-md mx-auto shadow-lg rounded-md p-8 ${
          darkMode ? "dark bg-DarkMode-cards" : "bg-slate-50"
        }`}
      >
        <h1 className="text-3xl font-bold text-center text-gray-500">
          Your Profile
        </h1>
        <div className="flex items-center justify-center">
          <AuthDetails />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
