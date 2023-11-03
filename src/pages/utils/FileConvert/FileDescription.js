import React from "react";
import { Collapse } from "antd";

const itemData = [
  {
    key: "1",
    header: <p className="text-gray-500">PDF to Word Conversion</p>,
    text: (
      <p className=" font-semibold ">
        Our PDF to Word conversion tool lets you easily transform PDFs into
        editable Word documents. Here's how it works:
      </p>
    ),
    list: [
      "Upload PDF: Choose your PDF file.",
      "Conversion: We'll convert it into a Word document.",
      "Download: Get your Word file for editing.",
    ],
    text2:
      "Now, you can edit PDFs just like Word documents. Simple and efficient.",
  },
  {
    key: "2",
    header: <p className="text-gray-500">Word to PDF Conversion</p>,
    text: (
      <p className=" font-semibold ">
        Our Word to PDF conversion tool simplifies turning Word documents into
        PDF files. Here's how it works:
      </p>
    ),
    list: [
      "Upload Word Document: Choose your Word file.",
      "Conversion: We'll transform it into a PDF file.",
      "Download: Get your PDF document ready for use.",
    ],
    text2: "Converting Word files to PDF is now quick and straightforward.",
  },
  {
    key: "3",
    header: <p className="text-gray-500">File Size Limitation</p>,
    text: (
      <p className=" font-semibold ">
        File Size Limit" refers to the maximum allowable size for a file that
        can be processed or uploaded. It represents the upper boundary beyond
        which the file may not be accepted or processed by a system or
        application. Here's how it works:
      </p>
    ),
    list: [
      "File Size Limit: Any file size is supported.",
      "Conversion Limit: Only one file can be converted at a time.",
    ],
  },
];

const FileDescription = () => {
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
              <ul className=" p-2 pl-8">
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

export default FileDescription;
