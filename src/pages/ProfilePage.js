import React from "react";
import AuthDetails from "../data/AuthDetails";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-md p-8">
        <h1 className="text-3xl font-bold text-center">Your Profile</h1>
        <div className="flex items-center justify-center">
          <AuthDetails />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
