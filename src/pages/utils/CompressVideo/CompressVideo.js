import React, { useState, useEffect } from "react";
import SideBar from "../../../components/SideBar/SideBar";
import VideoDescription from "./VideoDescription";
import { Button, Box, CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackgroundHexagon from "../../pattens/BackgroundHexagon";

function CircularIndeterminate(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

function CompressVideoPage({ darkMode }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress);
    });

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setDownloadLink(null);
    setFileName(file ? file.name : "");
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        setLoading(true);

        const response = await fetch("http://localhost:5000/compress_video", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const downloadUrl = await response.text();
          setDownloadLink(downloadUrl);
        } else {
          toast.error("Error compressing video");
        }
      } catch (error) {
        toast.error("Network error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDownload = () => {
    if (downloadLink) {
      const downloadLinkElement = document.createElement("a");
      downloadLinkElement.href = downloadLink;
      downloadLinkElement.download = "compressed_video.mp4";

      try {
        downloadLinkElement.click();
        toast.success("Download successful");
      } catch (error) {
        toast.error("Error during download");
      }
    }
  };

  return (
    <div
      className={`flex overflow-auto items-center justify-center ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-50"
      }`}
    >
      <BackgroundHexagon />
      <div className="fixed left-0">
        <SideBar darkMode={darkMode} />
      </div>
      <div className="flex items-center text-gray-500 justify-center p-4 h-screen grid-cols-2">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 md:ml-60 rounded-md shadow-lg z-10 ${
            darkMode ? "dark bg-DarkMode-cards" : "bg-slate-100"
          }`}
        >
          <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-center text-2xl font-semibold mb-4">
              Video Compression
            </h2>
            <label className="grid grid-cols-2 gap-4 mb-4 text-slate-50 rounded-md p-2 border border-spacing-2 border-gray-500">
              <span className="flex items-center justify-center cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-10 py-2 text-center mr-2 rounded-md">
                Choose Video File
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </span>
              <span className="bg-none">
                {fileName && (
                  <p className="flex items-center justify-center text-gray-600">
                    <span className="p-2">{fileName}</span>
                  </p>
                )}
              </span>
            </label>

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
            <span className="p-4">
              {loading && <CircularIndeterminate value={progress} />}
            </span>
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
