import React from "react";
import "./SocialsPage.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function SocialsPage() {
  return (
    <div className="">
      <div className="flex space-x-4">
        <NavLink
          to="https://www.instagram.com/creativemindsgraphic_cmg/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
          alt="qrcode"
        >
          <span className="text-sm text-gray-50 mr-2">
            <InstagramIcon className="gradient-animation rounded-md" />
          </span>
        </NavLink>
        <div className="border border-gray-500 border-spacing-2"></div>
        <NavLink
          to="https://twitter.com/_GoldManRay"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
          alt="qrcode"
        >
          <span className="text-sm text-gray-50 mr-2">
            <FaXTwitter className="w-6 h-6 gradient-animation rounded-md" />
          </span>
        </NavLink>
        <div className="border border-gray-500 border-spacing-2"></div>
        <NavLink
          to="https://github.com/Ubaton"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
          alt="qrcode"
        >
          <span className="text-sm text-gray-50 mr-2">
            <GitHubIcon className="gradient-animation rounded-md" />
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default SocialsPage;
