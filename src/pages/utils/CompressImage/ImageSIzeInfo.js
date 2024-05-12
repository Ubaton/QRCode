import React from "react";

function rederImageSizeInfo(initialSize, compressedSize) {
  return (
    <div className=" flex flex-row p-2 space-x-2">
      <span className="flex justify-center items-center flex-col text-gray-50">
        <p className="bg-sky-500 rounded-md p-1">
          {initialSize ? initialSize : "0 KB/0 MB"}
        </p>
        <p>Initial</p>
      </span>

      <span className="flex justify-center items-center flex-col text-gray-50">
        <p className="bg-sky-500 rounded-md p-1">
          {compressedSize ? compressedSize : "0 KB/0 MB"}
        </p>
        <p>After</p>
      </span>
    </div>
  );
}

export default rederImageSizeInfo;
