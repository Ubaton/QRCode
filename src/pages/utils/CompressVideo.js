import React from "react";
// import FFmpeg from "ffmpeg.js/ffmpeg-mp4";
import SideBar from "../../components/SideBar/SideBar";

function CompressVideoPage({ darkMode }) {
  // const [compressedFile, setCompressedFile] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  // const compressVideo = async () => {
  //   setIsLoading(true);

  //   try {
  //     const fileBuffer = await selectedFile.arrayBuffer();
  //     const resultBuffer = await FFmpeg({
  //       MEMFS: [{ name: "input.mp4", data: new Uint8Array(fileBuffer) }],
  //       arguments: [
  //         "-i",
  //         "input.mp4",
  //         "-c:v",
  //         "libx264",
  //         "-preset",
  //         "slow",
  //         "output.mp4",
  //       ],
  //     });

  //     const compressedBlob = new Blob([resultBuffer.MEMFS[0].data], {
  //       type: "video/mp4",
  //     });

  //     setCompressedFile(compressedBlob);
  //   } catch (error) {
  //     console.error("Error compressing video:", error);
  //   }

  //   setIsLoading(false);
  // };

  // const downloadCompressedVideo = () => {
  //   if (compressedFile) {
  //     const downloadLink = document.createElement("a");
  //     downloadLink.href = URL.createObjectURL(compressedFile);
  //     downloadLink.download = "compressed_video.mp4";
  //     downloadLink.click();
  //   }
  // };

  return (
    <div
      className={`flex h-screen items-center text-gray-500 justify-center ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-50"
      }`}
    >
      <div className="fixed left-0">
        <SideBar darkMode={darkMode} />
      </div>

      <div
        className={`flex shadow-lg rounded-md items-center justify-center ${
          darkMode ? "dark bg-DarkMode-cards" : "bg-slate-100"
        }`}
      >
        <div className="items-center justify-center grid-cols-2 p-4">
          <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Video Compression</h2>
            <div className="space-x-5 p-8">
              <input
                type="file"
                accept="video/*"
                // onChange={handleFileChange}
                className="mb-2"
              />
              <button
                // onClick={compressVideo}
                // disabled={!selectedFile || isLoading}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Compress Video
                {/* {isLoading ? "Compressing..." : "Compress Video"} */}
              </button>
            </div>
            <div className="flex items-center justify-center p-8">
              {/* {compressedFile && ( */}
              <button
                // onClick={downloadCompressedVideo}
                className=" bg-green-500 text-white px-4 py-2 rounded ml-2"
              >
                Download Compressed Video
              </button>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompressVideoPage;
