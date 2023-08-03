import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Button } from "@mui/material";
import { convertPdfToWord, convertWordToPdf } from "./Convert";
import SideBar from "../../../components/SideBar/SideBar";

function FileConvertPage({ darkMode }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setConvertedFile(null); // Reset converted file when a new file is chosen
  };

  const handlePdfToWord = async () => {
    if (selectedFile && selectedFile.type === "application/pdf") {
      try {
        const convertedBlob = await convertPdfToWord(selectedFile);
        setConvertedFile(convertedBlob);
        toast.success("PDF converted to Word successfully.");
      } catch (error) {
        toast.error("Failed to convert PDF to Word.");
      }
    } else {
      toast.error("Please select a valid PDF file.");
    }
  };

  const handleWordToPdf = async () => {
    if (
      selectedFile &&
      selectedFile.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      try {
        const convertedBlob = await convertWordToPdf(selectedFile);
        setConvertedFile(convertedBlob);
        toast.success("Word converted to PDF successfully.");
      } catch (error) {
        toast.error("Failed to convert Word to PDF.");
      }
    } else {
      toast.error("Please select a valid Word file.");
    }
  };

  const handleDownloadConvertedFile = () => {
    if (convertedFile) {
      // Create a temporary anchor element to trigger the download
      const tempAnchor = document.createElement("a");
      tempAnchor.href = URL.createObjectURL(convertedFile);
      tempAnchor.download = "converted_file";
      tempAnchor.click();
    } else {
      toast.error("No converted file available for download.");
    }
  };

  return (
    <div
      className={`flex  items-center justify-center  ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-100"
      }`}
    >
      <div className="fixed left-0">
        <SideBar darkMode={darkMode} />
      </div>
      <div className="items-center  text-gray-500 justify-center h-screen grid-cols-2 p-8">
        <div className="flex pt-16 items-center justify-center ">
          <div
            className={`w-96 h-96 p-4  rounded-md shadow-lg ${
              darkMode ? "dark bg-DarkMode-cards" : "bg-slate-100"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">File Converter</h2>
            <input
              disabled={!convertedFile}
              type="file"
              onChange={handleFileChange}
              className="mb-4"
            />

            <div className="flex gap-2">
              <Button
                disabled={!convertedFile}
                variant="contained"
                onClick={handlePdfToWord}
                className="flex-1 text-gray-500 rounded-md"
              >
                PDF to Word
              </Button>
              <Button
                disabled={!convertedFile}
                variant="contained"
                onClick={handleWordToPdf}
                className="flex-1  text-gray-500 rounded-md"
              >
                Word to PDF
              </Button>
            </div>

            {convertedFile && (
              <div className="pt-4">
                <p className="mb-2">
                  Converted File Type:{" "}
                  {convertedFile.type === "application/pdf"
                    ? "PDF Document"
                    : "Word Document"}
                </p>
                <div className="w-full h-64 border rounded-md overflow-hidden">
                  <object
                    data={URL.createObjectURL(convertedFile)}
                    type={convertedFile.type}
                    width="100%"
                    height="100%"
                  >
                    <p>Failed to load the converted file.</p>
                  </object>
                </div>
              </div>
            )}

            <div className="flex items-center justify-center pt-16">
              <Button
                variant="contained"
                onClick={handleDownloadConvertedFile}
                className=" bg-green-500 hover:bg-green-600 text-gray-500 px-2 py-2 rounded-md"
                disabled={!convertedFile}
              >
                Download Converted File
              </Button>
            </div>
            <div className="flex items-center justify-center text-green-500 pt-16">
              <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default FileConvertPage;
