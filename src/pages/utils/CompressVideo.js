import React from "react";
import SideBar from "../../components/SideBar/SideBar";

function CompressVideoPage({ darkMode }) {
  return (
    <div
      className={` items-center justify-center  ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-50"
      }`}
    >
      <div className="fixed left-0">
        <SideBar darkMode={darkMode} />
      </div>
      <div className=" pt-44 items-center  text-gray-500 justify-center h-screen grid-cols-2">
        <div className="flex pt-16  items-center justify-center ">
          <div
            className={`w-92 h-66 p-4  rounded-md shadow-lg ${
              darkMode ? "dark bg-DarkMode-cards" : "bg-slate-100"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4">Video Compression</h2>
            <div className="space-x-5 p-2">
              <input type="file" accept="video/*" className="mb-2" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Compress Video
              </button>
            </div>
            <div className="flex items-center justify-center p-2">
              <button className=" bg-green-500 text-white px-4 py-2 rounded ml-2">
                Download Compressed Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompressVideoPage;
