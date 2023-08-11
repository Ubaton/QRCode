import React from "react";
import AuthDetails from "../data/AuthDetails";

const ProfilePage = () => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center">
      <div className="  bg-white shadow-md rounded-md p-2 space-y-4">
        <h1 className="text-3xl font-bold text-center">Your Profile</h1>
        <div className="flex items-center justify-center">
          <AuthDetails />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
