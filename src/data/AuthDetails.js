import React, { useEffect, useState } from "react";
import { auth } from "../data/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { IoPersonCircleOutline } from "react-icons/io5";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState("");

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setProfilePictureUrl(
          `https://www.google.com/s2/photos/profile/${user.email}`
        );
      } else {
        setAuthUser(null);
        setProfilePictureUrl("");
      }
    });

    return () => {
      listen();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col text-gray-500 items-center justify-center h-screen">
      <div className="bg-gray-100 p-8 rounded-md shadow-md">
        {authUser ? (
          <>
            <div className="flex items-center justify-center">
              {profilePictureUrl ? (
                <img
                  src={profilePictureUrl}
                  alt="Profile"
                  className="w-16 h-16 rounded-full mr-2"
                />
              ) : (
                <IoPersonCircleOutline className="text-4xl text-gray-500 mr-2" />
              )}
              <p className="text-xl font-semibold">{`Signed In as ${authUser.email}`}</p>
            </div>
            <button
              onClick={handleSignOut}
              className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
            >
              Sign Out
            </button>
          </>
        ) : (
          <p className="text-center">Signed Out</p>
        )}
      </div>
    </div>
  );
};

export default AuthDetails;
