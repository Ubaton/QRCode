import React from "react";
import { Collapse } from "antd";

const itemData = [
  {
    key: "1",
    header: <p className="text-gray-500">Video Compression Process</p>,
    text: (
      <p className="font-semibold">
        Our video compression tool helps you reduce the file size of your videos
        while maintaining quality. Here's how it works:
      </p>
    ),
    list: [
      "Upload Video: Choose your video file to upload.",
      "Compression: Our tool will compress your video to reduce its size.",
      "Download: Get your compressed video ready for use.",
    ],
    text2:
      "Compressing your videos allows you to save storage space and make them easier to share.",
  },
  {
    key: "2",
    header: <p className="text-gray-500">Supported Formats</p>,
    text: (
      <p className="font-semibold">
        Our tool supports various video formats for compression:
      </p>
    ),
    list: [
      "MP4: Widely used and compatible with most devices.",
      "AVI: High-quality video format.",
      "MOV: Common format for Apple devices.",
      "WMV: Format used by Windows Media Player.",
    ],
    text2: "You can upload videos in these formats for compression.",
  },
  {
    key: "3",
    header: <p className="text-gray-500">Benefits of Video Compression</p>,
    text: (
      <p className="font-semibold">
        Video compression offers several advantages:
      </p>
    ),
    list: [
      "Reduced File Size: Saves storage space.",
      "Faster Upload/Download: Quicker transfer of video files.",
      "Bandwidth Saving: Lower data usage when streaming or sharing.",
    ],
    text2: "Optimize your videos for better storage and sharing.",
  },
  {
    key: "4",
    header: <p className="text-gray-500">Usage Tips</p>,
    text: (
      <p className="font-semibold">
        Here are some tips to get the best results from our video compression
        tool:
      </p>
    ),
    list: [
      "High-Quality Source: Start with a high-quality video for best compression results.",
      "Choose Appropriate Format: Use the format that best suits your needs.",
      "Check Compressed Quality: Ensure the quality is acceptable after compression.",
    ],
    text2: "Follow these tips to achieve optimal video compression.",
  },
];

const VideoDescription = () => {
  const onChange = (key) => {};

  return (
    <div className="text-gray-500">
      <h1 className="text-2xl font-bold mb-4">Description</h1>
      <div className="w-80">
        <Collapse className="" defaultActiveKey={["1"]} onChange={onChange}>
          {itemData.map((item) => (
            <Collapse.Panel
              key={item.key}
              header={item.header}
              showArrow={false}
            >
              <span>{item.text}</span>
              <ul className="p-2 pl-8">
                {item.list.map((listItem, index) => (
                  <li className="list-disc" key={index}>
                    {listItem}
                  </li>
                ))}
              </ul>
              <span>{item.text2}</span>
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default VideoDescription;
