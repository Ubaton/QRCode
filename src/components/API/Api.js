import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import qrcode from "qrcode";

const blockSize = 50;

function svg(size, children) {
  return `<svg version="1.1"
    width="${size}"
    height="${size}"
    xmlns="http://www.w3.org/2000/svg">
      ${children.join("")}
  </svg>`;
}

function parseColor(color) {
  const colorRegex = /^#?[a-fA-F0-9]{6}$/;
  if (!colorRegex.test(color)) {
    throw new Error(
      "Invalid 'color' parameter, must be a valid 6 digit hex code."
    );
  }

  if (color[0] !== "#") {
    color = `#${color}`;
  }

  return color;
}

function getPayload(query) {
  let payload = { ...query };

  if (!payload.data) {
    throw new Error("Missing required parameter 'data'.");
  }

  if (payload.color) {
    payload.color = parseColor(payload.color);
  } else {
    payload.color = "#000000";
  }

  return payload;
}

function renderQrCode(payload) {
  const dataToEncode = payload.data;
  const color = payload.color;

  const encodedData = qrcode.create(dataToEncode);
  const codeSize = encodedData.modules.size;
  const codeData = encodedData.modules.data;

  let blocks = [];
  for (let i = 0; i < codeSize; i++) {
    for (let j = 0; j < codeSize; j++) {
      const rowOffset = i * codeSize;
      const isDark = codeData[rowOffset + j];

      if (isDark) {
        const x = i * blockSize;
        const y = j * blockSize;

        let shape;
        switch (payload.shape) {
          case "circle":
            shape = `<circle cx="${x + blockSize / 2}" cy="${
              y + blockSize / 2
            }" r="${blockSize / 2}" fill="${color}"></circle>`;
            break;
          case "diamond":
            shape = `<polygon points="${x + blockSize / 2},${y} ${
              x + blockSize
            },${y + blockSize / 2} ${x + blockSize / 2},${y + blockSize} ${x},${
              y + blockSize / 2
            }" fill="${color}"></polygon>`;
            break;
          case "square":
          default:
            shape = `<rect x="${x}" y="${y}" width="${blockSize}" height="${blockSize}" fill="${color}"></rect>`;
            break;
        }

        blocks.push(shape);
      }
    }
  }

  const svgSize = codeSize * blockSize;
  const response = svg(svgSize, blocks);

  return response;
}

function QrCodePage() {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  const query = {};
  params.forEach((value, key) => {
    query[key] = value;
  });

  let payload;
  try {
    payload = getPayload(query);
  } catch (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  const response = renderQrCode(payload);

  return (
    <div>
      <pre dangerouslySetInnerHTML={{ __html: response }} />
    </div>
  );
}

function NotFoundPage() {
  return (
    <div>
      <p>404, not found!</p>
    </div>
  );
}

function API() {
  return (
    <Router>
      <Route path="/api" exact component={QrCodePage} />
      <Route component={NotFoundPage} />
    </Router>
  );
}

export default API;
