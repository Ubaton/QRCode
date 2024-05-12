import React from "react";

function rederImageSizeInfo(initialSize, compressedSizze) {
  return (
    <div className=" flex flex-row p-2 space-x-2">
      <span className="flex justify-center items-center flex-col text-gray-50">
        <p className="bg-sky-500 rounded-md p-1">{initialSize}</p>
        <p>Initial</p>
      </span>

      <span className="flex justify-center items-center flex-col text-gray-50">
        <p className="bg-sky-500 rounded-md p-1">{compressedSizze}</p>
        <p>After</p>
      </span>
    </div>
  );
}

export default rederImageSizeInfo;
