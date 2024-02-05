import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../../../components/SideBar/SideBar";
import PDF from "../../../assets/icons/pdf-96.png";
import WORD from "../../../assets/icons/word-96.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FileDescription from "./FileDescription";
import { Button } from "@mui/material";
import axios from "axios";
import BackgroundHexagon from "../../pattens/BackgroundHexagon";

function FileConvertPage({ darkMode }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setConvertedFile(null);
    setFileName(file ? file.name : "");
  };

  const handlePdfToWord = async () => {
    if (selectedFile && selectedFile.type === "application/pdf") {
      setLoading(true);

      const formData = new FormData();
      formData.append("pdf_file", selectedFile);

      try {
        const response = await axios.post(
          "http://localhost:5000/pdf-to-word",
          formData,
          {
            responseType: "blob",
          }
        );

        setConvertedFile(response.data);
        toast.success("PDF converted to Word successfully.");
      } catch (error) {
        toast.error("Failed to convert PDF to Word.");
      } finally {
        setLoading(false);
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
      setLoading(true);

      const formData = new FormData();
      formData.append("word_file", selectedFile);

      try {
        await axios.post("http://localhost:5000/word-to-pdf", formData);
        toast.success("Word converted to PDF successfully.");
      } catch (error) {
        toast.error("Failed to convert Word to PDF.");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please select a valid Word file.");
    }
  };

  const handleDownloadConvertedFile = () => {
    if (convertedFile) {
      const fileExtension =
        selectedFile.type === "application/pdf" ? "docx" : "pdf";
      const fileName = `converted_file.${fileExtension}`;

      const url = window.URL.createObjectURL(new Blob([convertedFile]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
    } else {
      toast.error("No converted file available for download.");
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
      <div className="flex items-center text-gray-500 justify-center p-4 h-screen grid-cols-2 z-10">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 md:ml-60 rounded-md shadow-lg ${
            darkMode ? "dark bg-DarkMode-cards" : "bg-slate-100"
          }`}
        >
          <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold mb-4">File Converter</h2>
            <label className="grid grid-cols-2 gap-4 mb-4 text-slate-50 rounded-md p-2 border border-spacing-2 border-gray-500">
              <span className="flex items-center justify-center cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-10 py-2 text-center mr-2 rounded-md">
                Choose file
                <input
                  type="file"
                  accept="file/*"
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

            <div className="flex items-center justify-center gap-2">
              <div>
                <Button
                  onClick={handlePdfToWord}
                  className={`bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  <p className="text-gray-300">PDF to Word</p>
                </Button>
                <div className="grid grid-cols-3 pl-2 p-1">
                  <img src={PDF} alt="PDF" width="32" height="32" />
                  <ArrowRightAltIcon />
                  <img src={WORD} alt="WORD" width="32" height="32" />
                </div>
              </div>
              <div>
                <Button
                  onClick={handleWordToPdf}
                  className={`bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  <p className="text-gray-300">Word to PDF</p>
                </Button>
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
                    <span>Failed to load the converted file.</span>
                  </object>
                </div>
              </div>
            )}

            <div className="flex items-center justify-center pt-16">
              <Button
                variant="contained"
                onClick={handleDownloadConvertedFile}
                className={`bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                <p className="text-gray-300">Download Converted File</p>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <FileDescription />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileConvertPage;
