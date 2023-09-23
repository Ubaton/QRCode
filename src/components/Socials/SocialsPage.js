import React from "react";
import "./SocialsPage.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function SocialsPage() {
  return (
    <div className="rotate-90">
      <div className="hidden sm:flex space-x-4">
        <NavLink
          to="https://www.instagram.com/creativemindsgraphic_cmg/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center  hover:bg-gray-100"
        >
          <span className="text-sm text-gray-300 mr-2 rotate-[270deg]">
            <InstagramIcon className="gradient-animation rounded-xl" />
          </span>
        </NavLink>
        <div className="border border-gray-200 border-spacing-2 rotate-90"></div>
        <NavLink
          to="https://twitter.com/_GoldManRay"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:bg-gray-100"
        >
          <span className="text-sm text-gray-300 mr-2 rotate-[270deg]">
            <FaXTwitter className="w-6 h-6 gradient-animation rounded-xl" />
          </span>
        </NavLink>
        <div className="border border-gray-200 border-spacing-2 rotate-90"></div>
        <NavLink
          to="https://github.com/Ubaton"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center  hover:bg-gray-100"
        >
          <span className="text-sm text-gray-300 mr-2 rotate-[270deg]">
            <GitHubIcon className="gradient-animation rounded-xl" />
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default SocialsPage;
