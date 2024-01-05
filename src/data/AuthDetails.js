import React, { useEffect, useState } from "react";
import { auth } from "../data/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuBrush } from "react-icons/lu";
import { LuXCircle } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const plan = [
  {
    YourPlan: "Free Plan",
    title: "Your current plan",
    header: "Free plan",
    paragraph: "Get started with our Free Plan and enjoy basic features.",
    list: [
      "Feature 1: Limited downloads",
      "Feature 2: Standard customer support",
      "Feature 3: Basic usage analytics",
      "Feature 4: 15 Colors to Choose from",
    ],
  },
];

const priority = {
  description: `At Creative Minds Graphics (Pty) Ltd, we prioritize transparency as
  an essential element of our commitment to safeguarding your
  information. Your security is of paramount importance to us, and we
  take every measure to ensure the confidentiality and protection of
  your data.`,
};

const AuthDetails = ({ onProfilePictureUpdate, darkMode }) => {
  const handleNavLinkClick = (page) => {};
  const [authUser, setAuthUser] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [isPlanOpen, setIsPlanOpen] = useState(false);

  const togglePlan = () => {
    setIsPlanOpen(!isPlanOpen);
  };

  const handleProfilePictureChange = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageDataUrl = reader.result;
      setProfilePictureUrl(imageDataUrl);

      // Save the image data to local storage
      localStorage.setItem("profilePicture", imageDataUrl);

      // Pass the updated profilePictureUrl to the parent component
      if (onProfilePictureUpdate) {
        onProfilePictureUpdate(imageDataUrl);
      }
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);

        const storedProfilePicture = localStorage.getItem("profilePicture");
        setProfilePictureUrl(storedProfilePicture || "");
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

  const handleRemoveProfilePicture = () => {
    setProfilePictureUrl("");
    localStorage.removeItem("profilePicture");
    if (onProfilePictureUpdate) {
      onProfilePictureUpdate("");
    }
  };

  return (
    <>
      <div className="flex flex-col text-gray-500 items-center justify-center space-y-4">
        <button className="fixed left-4 top-4">
          <NavLink
            onClick={() => handleNavLinkClick("home")}
            exact
            to="/"
            activeClassName="bg-blue-500 text-white"
            className="p-1 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200"
          >
            <ArrowBackIcon />
          </NavLink>
        </button>
        <button className="fixed right-4 top-0" onClick={togglePlan}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </button>
        {authUser ? (
          <div className="flex flex-col items-center p-4 relative">
            <label htmlFor="profilePicture">
              <div className="flex flex-row items-center justify-center space-x-6 bg-gray-300 rounded-full p-1">
                <button>
                  <LuBrush
                    className="text-green-500 cursor-pointer"
                    onClick={() => {
                      const fileInput =
                        document.getElementById("profilePicture");
                      if (fileInput) {
                        fileInput.click();
                      }
                    }}
                  />
                </button>
                <button>
                  <LuXCircle
                    className="text-red-500 cursor-pointer"
                    onClick={handleRemoveProfilePicture}
                  />
                </button>
              </div>
              {profilePictureUrl ? (
                <>
                  <img
                    src={profilePictureUrl}
                    alt="Profile"
                    className="w-20 h-20 rounded-full m-2 border border-spacing-4 border-blue-500"
                  />
                </>
              ) : (
                <IoPersonCircleOutline className="text-4xl text-gray-800 m-4" />
              )}
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                onChange={(event) =>
                  handleProfilePictureChange(event.target.files[0])
                }
                style={{ display: "none" }}
              />
            </label>
            <p className="text-center font-semibold">
              <span className="text-xs">Signed In as</span> <br />
              <span className="text-xl text-blue-500">{authUser.email}</span>
            </p>
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
          <p className="text-center">{priority.description}</p>
          <p className="text-center">
            <NavLink
              to="/privacy-policy"
              className="text-gray-400 hover:underline"
            >
              Privacy Policy
            </NavLink>{" "}
            &{" "}
            <NavLink
              to="/terms-of-use"
              className="text-gray-400 hover:underline"
            >
              Terms of Use
            </NavLink>
          </p>
        </div>
      </div>
      {isPlanOpen && (
        <div
          className="bg-gray-400 text-center text-gray-300 p-2 rounded-md fixed right-4 top-8 w-80"
          style={{ zIndex: 5 }}
        >
          {plan.map((p) => (
            <div key={p.YourPlan}>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1">
                  <span className="text-medium text-2xl font-semibold">
                    {p.title}
                  </span>
                  <span className="text-xl">{p.header}</span>
                  <div className="bg-gray-300 rounded-md p-1">
                    <span className="text-gray-500 text-sm">{p.paragraph}</span>
                  </div>
                  <div className="p-6">
                    <ul className="list-disc pl-6 text-gray-700 mb-4 text-left">
                      {plan[0].list.map((item, index) => (
                        <li key={index}>✔️{item}</li>
                      ))}
                    </ul>
                    <p className="text-gray-300">
                      <Link to="/signup">
                        <span className=" hover:text-blue-500 underline underline-offset-2">
                          Sign-up
                        </span>
                      </Link>{" "}
                      now and experience the benefits of {<span>Pro Plan</span>}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AuthDetails;
