import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { convertPdfToWord, convertWordToPdf } from "./Convert";
import SideBar from "../../../components/SideBar/SideBar";
import PDF from "../../../assets/icons/pdf-96.png";
import WORD from "../../../assets/icons/word-96.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FileDescription from "./FileDescription";

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

  // Function to handle downloading the converted file
  const handleDownloadConvertedFile = () => {
    if (convertedFile) {
      const fileExtension =
        selectedFile.type === "application/pdf" ? "pdf" : "docx";
      const fileName = `converted_file.${fileExtension}`;

      // Create a temporary anchor element to trigger the download
      const tempAnchor = document.createElement("a");
      tempAnchor.href = URL.createObjectURL(convertedFile);
      tempAnchor.download = fileName;
      tempAnchor.click();
    } else {
      toast.error("No converted file available for download.");
    }
  };

  return (
    <div
      className={`flex overflow-auto items-center justify-center  ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-50"
      }`}
    >
      <div className="fixed left-0">
        <SideBar darkMode={darkMode} />
      </div>
      <div className="pt-16 items-center  text-gray-500 justify-center h-screen grid-cols-2">
        <div className="flex pt-16 items-center justify-center ">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 rounded-md shadow-lg ${
              darkMode ? "dark bg-DarkMode-cards" : "bg-slate-100"
            }`}
          >
            <div className="w-92 h-96 p-4 ">
              <h2 className="text-2xl font-bold mb-4">File Converter</h2>
              <input type="file" onChange={handleFileChange} className="mb-4" />

              <div className="flex items-center justify-center gap-2">
                <div>
                  <button
                    onClick={handlePdfToWord}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
                  >
                    <p className="text-gray-300">PDF to Word</p>
                  </button>
                  <div className="grid grid-cols-3 pl-2 p-1">
                    <img src={PDF} alt="PDF" width="32" height="32" />
                    <ArrowRightAltIcon />
                    <img src={WORD} alt="WORD" width="32" height="32" />
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleWordToPdf}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
                  >
                    <p className="text-gray-300">Word to PDF</p>
                  </button>
                  <div className="grid grid-cols-3 pl-2 p-1">
                    <img src={WORD} alt="WORD" width="32" height="32" />
                    <ArrowRightAltIcon />
                    <img src={PDF} alt="PDF" width="32" height="32" />
                  </div>
                </div>
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
                <button
                  variant="contained"
                  onClick={handleDownloadConvertedFile}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
                >
                  <p className="text-gray-300">Download Converted File</p>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center p-4">
              <FileDescription />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileConvertPage;
