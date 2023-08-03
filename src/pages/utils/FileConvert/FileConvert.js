import React, { useState } from "react";
import { convertPdfToWord, convertWordToPdf } from "./Convert";
import SideBar from "../../../components/SideBar/SideBar";

function FileConvertPage({ darkMode }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handlePdfToWord = () => {
    if (selectedFile && selectedFile.type === "application/pdf") {
      convertPdfToWord(selectedFile);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const handleWordToPdf = () => {
    if (
      selectedFile &&
      selectedFile.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      convertWordToPdf(selectedFile);
    } else {
      alert("Please select a valid Word file.");
    }
  };

  return (
    <div
      className={`flex items-center justify-center ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-100"
      }`}
    >
      <div className="fixed left-0">
        <SideBar darkMode={darkMode} />
      </div>
      <div className="items-center justify-center h-screen grid-cols-2 p-8">
        <div className="flex items-center justify-center h-screen">
          <div className="w-96 p-4 bg-gray-100 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4">File Converter</h2>
            <input type="file" onChange={handleFileChange} className="mb-4" />

            <div className="flex gap-2">
              <button
                onClick={handlePdfToWord}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-md"
              >
                Convert PDF to Word
              </button>
              <button
                onClick={handleWordToPdf}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded-md"
              >
                Convert Word to PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileConvertPage;
