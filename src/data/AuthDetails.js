import React, { useEffect, useState } from "react";
import { auth } from "../data/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { IoPersonCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

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
    <div className="flex flex-col text-gray-500 items-center justify-center space-y-4">
      {authUser ? (
        <div className="flex flex-col items-center">
          {profilePictureUrl ? (
            <img
              src={profilePictureUrl}
              alt="Profile"
              className="w-16 h-16 rounded-full m-4"
            />
          ) : (
            <IoPersonCircleOutline className="text-4xl text-gray-800 m-4" />
          )}
          <p className="text-xl font-semibold">{`Signed In as ${authUser.email}`}</p>
          <button
            onClick={handleSignOut}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <p className="text-center">Signed Out</p>
      )}

      <div className="text-gray-600 mt-4">
        <p className="text-center">
          At Creative Minds Graphics (Pty) Ltd, we prioritize transparency as an
          essential element of our commitment to safeguarding your information.
          Your security is of paramount importance to us, and we take every
          measure to ensure the confidentiality and protection of your data.
        </p>
        <p className="text-center">
          <NavLink
            to="/privacy-policy"
            className="text-gray-400 hover:underline"
          >
            Privacy Policy
          </NavLink>{" "}
          &{" "}
          <NavLink to="/terms-of-use" className="text-gray-400 hover:underline">
            Terms of Use
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default AuthDetails;
