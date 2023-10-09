import React from "react";
import { Collapse } from "antd";

const itemData = [
  {
    key: "1",
    header: <p className="text-gray-500">Effortless Optimization</p>,
    text: (
      <p className=" font-semibold ">
        Our image compression tool offers effortless optimization for PNG and
        JPEG images. Whether you are a web developer, designer, or anyone
        concerned about reducing image file sizes while preserving quality, our
        service simplifies the process. You can achieve optimal image
        compression without a steep learning curve.
      </p>
    ),
    list: [
      "User-Friendly Interface",
      "Bulk Processing",
      "Preservation of Image Quality",
    ],
  },
  {
    key: "2",
    header: <p className="text-gray-500">Improved Website Performance</p>,
    text: (
      <p className=" font-semibold ">
        By using our tool, you can significantly reduce image file sizes without
        compromising visual quality. This leads to faster website loading times,
        which is crucial for providing a smooth user experience. Additionally,
        reduced bandwidth usage benefits both your website's performance and
        your audience's data consumption.
      </p>
    ),
    list: [
      "Faster Loading Times",
      "Bandwidth Savings",
      "Enhanced User Experience",
    ],
  },
  {
    key: "3",
    header: (
      <p className="text-gray-500">Automatic Analysis and Optimization</p>
    ),
    text: (
      <p className=" font-semibold ">
        Our image compression tool automates image optimization for PNG and JPEG
        files. Our advanced algorithm analyzes and optimizes your images without
        manual tweaking, saving you time and resources for faster web projects.
        Try our smart compression tool now for effortless, efficient results.
      </p>
    ),
    list: ["Time Savings", "Consistency", "Efficiency"],
  },
];

const ImageDescription = () => {
  const onChange = (key) => {};

  return (
    <div className="text-gray-500">
      <h1 className="text-2xl font-bold mb-4">Description</h1>
      <h2>Smart PNG and JPEG Compression</h2>
      <div className="w-80">
        <Collapse className="" defaultActiveKey={["1"]} onChange={onChange}>
          {itemData.map((item) => (
            <Collapse.Panel
              key={item.key}
              header={item.header}
              showArrow={false}
            >
              <p>{item.text}</p>
              <ul className=" p-2 pl-8">
                {item.list.map((listItem, index) => (
                  <li className="list-disc" key={index}>
                    {listItem}
                  </li>
                ))}
              </ul>
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default ImageDescription;
