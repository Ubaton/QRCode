import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import VideoDescription from "./VideoDescription";

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
              disabled
              type="file"
              accept="video/*"
              className="mb-4 appearance-none border border-gray-300 rounded-md p-2 w-full text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white"
            />
            <button
              disabled
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              <span className="">Compress Video</span>
            </button>
            <div className="flex items-center justify-center p-2">
              <button
                disabled
                className=" bg-green-500 text-white px-4 py-2 rounded ml-2"
              >
                Download Compressed Video
              </button>
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
