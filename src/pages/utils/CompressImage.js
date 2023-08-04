import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SideBar from "../../components/SideBar/SideBar";
import { Button } from "@mui/material";

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
      className={`flex items-center justify-center ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-100"
      }`}
    >
      <div className="fixed left-0">
        <SideBar darkMode={darkMode} />
      </div>
      <div className="flex items-center justify-center h-screen   pt-8">
        <div className="py-8 bg-slate-200 rounded-md p-4">
          <h2 className="text-2xl font-bold mb-4">Image Compression</h2>
          <input type="file" onChange={handleImageChange} className="mb-4" />

          <Button
            onClick={handleCompressImage}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
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
                  className="max-w-full h-96 rounded-md"
                />
              </div>

              <div className="flex justify-center items-center p-2">
                <Button variant="contained">
                  <a
                    href={URL.createObjectURL(compressedImage)}
                    download
                    className="block text-gray-50 hover:text-gray-100"
                  >
                    Download Compressed Image
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CompressImagePage;
