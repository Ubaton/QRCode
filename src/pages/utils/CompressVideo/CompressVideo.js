import React, { useState } from "react";
import SideBar from "../../../components/SideBar/SideBar";
import VideoDescription from "./VideoDescription";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

function CompressVideoPage({ darkMode }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setDownloadLink(null);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch(
          "http://your-actual-backend-url.com/compress_video",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const downloadUrl = await response.text();
          setDownloadLink(downloadUrl);
        } else {
          toast.error("Error compressing video");
        }
      } catch (error) {
        toast.error("Network error:", error);
      }
    }
  };

  // Declare handleDownload function before it is used
  const handleDownload = () => {
    if (downloadLink) {
      const downloadLinkElement = document.createElement("a");
      downloadLinkElement.href = downloadLink;
      downloadLinkElement.download = "compressed_video.mp4"; // Set the filename
      downloadLinkElement.click();
    }
  };

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
              onChange={handleFileChange}
              className="mb-4 appearance-none border border-gray-300 rounded-md p-2 w-full text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white"
            />
            <Button
              onClick={handleUpload}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-blod text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
            >
              <span className="text-gray-50">Compress Video</span>
            </Button>
            {downloadLink && (
              <div className="flex items-center justify-center p-2">
                <Button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-blod text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
                >
                  <span className="text-gray-50">
                    Download Compressed Video
                  </span>
                </Button>
              </div>
            )}
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
