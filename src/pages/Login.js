import React, { useState } from "react";
import { auth } from "../data/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../assets/images/cmg.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Petten from "../assets/images/Petten.png";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/home");
    } catch (error) {
      if (error.message === "Firebase: Error (auth/user-not-found).") {
        toast.error("User not found. Please check your email and try again.");
      } else {
        toast.error(error.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (error) {
      console.error(error);
      toast.error("Google login failed. Please try again.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="bg-cover bg-space bg-repeat fixed bottom-0 top-0 max-w-full w-full h-screen"
        style={{ backgroundImage: `url(${Petten})`, zIndex: -5 }}
      ></div>
      <div className="max-w-md bg-slate-100 rounded-md p-5 w-full space-y-8">
        <div className="flex items-center justify-center py-6">
          <img
            src={Logo}
            alt="Creative Minds Graphics"
            width="157"
            height="29"
            className=""
          />
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex justify-center items-center gap-2 py-2 px-4 border border-transparent  rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-500"
          >
            <span className="text-md text-white">Continue with</span>{" "}
            <FcGoogle size={22} />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="border border-spacing-2 w-full border-b-gray-300" />
          <p className="text-gray-500 text-lg font-semibold pr-2 pl-2">OR</p>
          <div className="border border-spacing-2 w-full border-b-gray-300" />
        </div>
        <div>
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-500">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-md shadow-sm -space-y-px">
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
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={handleLogin}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Log in
            </button>
          </div>
          <p className="text-center">
            Don't have an account?{" "}
            <NavLink to="/signup">
              <span className="text-blue-500">Sign Up</span>
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
