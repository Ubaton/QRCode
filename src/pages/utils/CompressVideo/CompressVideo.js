import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import VideoDescription from "./VideoDescription";
import { Button } from "@mui/material";

function CompressVideoPage({ darkMode }) {
  return (
    <div
      className={`flex overflow-auto items-center justify-center ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-50"
      }`}
    >
      <div className="fixed left-0">
        <SideBar darkMode={darkMode} />
      </div>
      <div className="flex items-center text-gray-500 justify-center p-4 h-screen grid-cols-2">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 md:ml-60 rounded-md shadow-lg ${
            darkMode ? "dark bg-DarkMode-cards" : "bg-slate-100"
          }`}
        >
          <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-center text-2xl font-semibold mb-4">
              Video Compression
            </h2>
            <input
              type="file"
              accept="video/*"
              className="mb-4 appearance-none border border-gray-300 rounded-md p-2 w-full text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white"
            />
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-blod text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2">
              <span className="text-gray-50">Compress Video</span>
            </Button>
            <div className="flex items-center justify-center p-2">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-blod text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2">
                <span className="text-gray-50">Download Compressed Video</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <VideoDescription />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompressVideoPage;
