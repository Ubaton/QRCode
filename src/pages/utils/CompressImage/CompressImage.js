import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../../../components/SideBar/SideBar";
import ImageDescription from "./ImageDescription";
import { Button } from "@mui/material";
import BackgroundHexagon from "../../pattens/BackgroundHexagon";

function CompressImagePage({ darkMode }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setCompressedImage(null);
    setFileName(file ? file.name : "");
  };

  const compressImage = async (imageFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const maxWidth = 1920;
          const maxHeight = 1080;
          const imageWidth = img.width;
          const imageHeight = img.height;

          let newWidth = imageWidth;
          let newHeight = imageHeight;

          if (imageWidth > maxWidth || imageHeight > maxHeight) {
            const scaleFactor = Math.min(
              maxWidth / imageWidth,
              maxHeight / imageHeight
            );
            newWidth = imageWidth * scaleFactor;
            newHeight = imageHeight * scaleFactor;
          }

          canvas.width = newWidth;
          canvas.height = newHeight;

          ctx.drawImage(img, 0, 0, newWidth, newHeight);

          canvas.toBlob(
            (blob) => {
              resolve(blob);
            },
            "image/png",
            1.0
          );
        };
      };

      reader.readAsDataURL(imageFile);
    });
  };

  const handleCompressImage = async () => {
    if (!selectedImage) {
      toast.error("Please select an image.");
      return;
    }

    const compressedBlob = await compressImage(selectedImage);
    const compressedFile = new File(
      [compressedBlob],
      `compressed_${selectedImage.name}`,
      {
        type: compressedBlob.type,
      }
    );

    if (compressedFile.size > 10 * 1024 * 1024) {
      toast.success("Compressed image size exceeds 10MB.");
      return;
    }

    setCompressedImage(compressedFile);
  };

  return (
    <div
      className={`flex overflow-auto items-center justify-center h-screen ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-50"
      }`}
    >
      <BackgroundHexagon />
      <div className="fixed left-0">
        <SideBar darkMode={darkMode} />
      </div>
      <div className="flex items-center justify-center text-gray-500 p-4 mt-44 md:mt-0 md:ml-12 z-10">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 md:ml-44 md:mr-2 md:px-4 py-4 shadow-lg rounded-md${
            darkMode ? "dark bg-DarkMode-cards" : "bg-slate-100"
          }`}
        >
          <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-center text-2xl font-bold mb-4">
              Image Compression
            </h2>
            <label className="grid grid-cols-2 gap-4 mb-4 text-slate-50 rounded-md p-2 border border-spacing-2 border-gray-500">
              <span className="flex items-center justify-center cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-10 py-2 text-center mr-2 rounded-md">
                Choose file
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
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
              onClick={handleCompressImage}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-blod text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
              variant="contained"
            >
              Compress Image
            </Button>

            {compressedImage && (
              <div className="flex-1 justify-center items-center mt-4 p-4">
                <div className="flex items-center justify-center ">
                  <img
                    src={URL.createObjectURL(compressedImage)}
                    alt="Compressed"
                    className="w-96 h-60 rounded-md"
                  />
                </div>

                <div className="flex justify-center items-center p-2">
                  <Button className="p-2">
                    <a
                      href={URL.createObjectURL(compressedImage)}
                      download
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-blod text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
                    >
                      Download Compressed Image
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center p-4">
            <ImageDescription />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompressImagePage;
