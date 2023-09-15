import React, { useState } from "react";
// import { auth } from "../data/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../data/firebase";
import Logo from "../assets/images/cmg.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Petten from "../assets/images/Petten.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const auth = getAuth();

      // Sign up with email and password using Firebase
      await createUserWithEmailAndPassword(auth, email, password).then(
        async (userCredential) => {
          const user = userCredential.user;
          console.log("User created:", user);

          // Send email verification
          await sendEmailVerification(user);
          console.log("Verification email sent to:", user.email);

          // Add user data to Firestore (example)
          const db = getFirestore(app);
          const usersCollection = collection(db, "users");
          await addDoc(usersCollection, {
            username: username,
            email: email,
          });

          // Redirect the user to the login page on successful signup
          navigate("/login");
        }
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="bg-cover bg-space bg-repeat fixed bottom-0 top-0 max-w-full w-full h-screen"
        style={{ backgroundImage: `url(${Petten})`, zIndex: -5 }}
      ></div>

      <div className="max-w-md w-full bg-slate-100 rounded-md p-5 space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center py-6">
          <img
            src={Logo}
            alt="Creative Minds Graphics"
            width="157"
            height="29"
            className=""
          />
        </div>
        <div>
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-500">
            Sign up for an account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-md shadow-sm border border-spacing-2 space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-center my-2">{error}</div>
          )}

          <div>
            <button
              type="submit"
              onClick={handleSignUp}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Sign up
            </button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <NavLink to="/login">
              <span className="text-blue-500">Login</span>
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
