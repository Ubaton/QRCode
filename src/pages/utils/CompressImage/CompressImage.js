import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../../../components/SideBar/SideBar";
import ImageDescription from "./ImageDescription";

function CompressImagePage({ darkMode }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setCompressedImage(null);
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

          const maxWidth = 1920; // Maximum width after compression (adjust as needed)
          const maxHeight = 1080; // Maximum height after compression (adjust as needed)
          const imageWidth = img.width;
          const imageHeight = img.height;

          // Scale down the image to fit within the maximum dimensions
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

          // Convert the canvas to a Blob
          canvas.toBlob(
            (blob) => {
              resolve(blob);
            },
            "image/jpeg", // Change to "image/png" for PNG format
            0.7 // Image quality (adjust as needed, lowering the value means higher compression)
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
      <div className="fixed left-0">
        <SideBar darkMode={darkMode} />
      </div>
      <div className="flex items-center justify-center text-gray-500 md:ml-12">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 py-4 shadow-lg rounded-md p-4 ${
            darkMode ? "dark bg-DarkMode-cards" : "bg-slate-100"
          }`}
        >
          <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-center text-2xl font-bold mb-4">
              Image Compression
            </h2>
            <input
              type="file"
              onChange={handleImageChange}
              className="mb-4 appearance-none border border-gray-300 rounded-md p-2 w-full text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white"
            />

            <button
              onClick={handleCompressImage}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-blod text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
              variant="contained"
            >
              Compress Image
            </button>

            {compressedImage && (
              <div className="flex-1 justify-center items-center mt-4 p-4">
                <div className="flex items-center justify-center ">
                  <img
                    src={URL.createObjectURL(compressedImage)}
                    alt="Compressed"
                    className="w-60 h-60 rounded-md"
                  />
                </div>

                <div className="flex justify-center items-center p-2">
                  <button className="p-2">
                    <a
                      href={URL.createObjectURL(compressedImage)}
                      download
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-blod text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
                    >
                      Download Compressed Image
                    </a>
                  </button>
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
