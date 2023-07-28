import React, { useState, useEffect } from "react";

function ImageUpload({ setImage, image }) {
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (loading) {
      // Start the progress animation
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          // Increase the progress by 1 until it reaches 100
          const newProgress = prevProgress + 1;
          // Clear the interval when progress reaches 100
          if (newProgress === 100) {
            clearInterval(interval);
          }
          return newProgress;
        });
      }, 30); // Adjust the interval speed for smoother animation
    }
  }, [loading]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      setUploadProgress(0);
      setFileName(file.name); // Set the file name

      // Delay the image upload by 0.9 seconds
      setTimeout(() => {
        const reader = new FileReader();

        reader.onloadstart = () => {
          setLoading(true);
        };

        reader.onprogress = (progressEvent) => {
          if (progressEvent.lengthComputable) {
            const progress = (progressEvent.loaded / progressEvent.total) * 100;
            setUploadProgress(progress);
          }
        };

        reader.onload = () => {
          setLoading(false);
          setImage(reader.result);
        };

        reader.readAsDataURL(file);
      }, 900); // 0.9 seconds (900 milliseconds)
    }
  };

  // Function to determine the color based on the upload progress
  const getProgressBarColor = () => {
    return "bg-green-500";
  };

  return (
    <div>
      <label className="grid grid-cols-2 gap-4 mb-4 text-slate-50 rounded-md p-2 pl-0">
        <span className="flex items-center justify-center cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 p-2  rounded-md">
          Choose File{" "}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </span>{" "}
        <span className="bg-none">
          {fileName && (
            <p className="flex items-center justify-center text-gray-600">
              <span className="p-2">{fileName}</span>
            </p>
          )}
        </span>
      </label>

      {loading ? (
        <div className="w-full rounded-lg bg-neutral-200 dark:bg-neutral-600">
          <div
            className={`bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100 rounded-lg ${getProgressBarColor()}`}
            style={{ width: `${uploadProgress}%` }}
          >
            {uploadProgress}%
          </div>
        </div>
      ) : (
        // Disable ESLint check for 'image' prop
        /* eslint-disable-next-line no-undef */
        image && (
          <img
            src={image}
            alt="Uploaded logo"
            className="w-25 h-25 object-contain rounded-md"
          />
        )
      )}
    </div>
  );
}

export default ImageUpload;
