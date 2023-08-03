import { PDFDocument } from "pdf-lib";
import Docxtemplater from "docxtemplater";
import JSZip from "jszip";
import { saveAs } from "file-saver";

// Function to convert PDF to Word
const convertPdfToWord = async (pdfFile) => {
  try {
    const pdfBytes = await pdfFile.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const content = [];
    const pages = pdfDoc.getPages();
    for (const page of pages) {
      content.push(page.getText());
    }
    const doc = new Docxtemplater();
    doc.loadZip(JSZip.generate(content.join("\n")));
    doc.setData({});
    doc.render();
    const docBytes = doc.getZip().generate({ type: "arraybuffer" });
    const blob = new Blob([docBytes], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    saveAs(blob, "converted.docx");
  } catch (error) {
    console.error("Error converting PDF to Word:", error);
  }
};

// Function to convert Word to PDF
const convertWordToPdf = async (wordFile) => {
  try {
    const wordBytes = await wordFile.arrayBuffer();
    const blob = new Blob([wordBytes], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    const formData = new FormData();
    formData.append("file", blob, "file.docx");
    const response = await fetch("https://api.convertio.co/convert", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "884a393ee60fd3ec6cede030c0920e4d", // Convertio API key
      },
    });

    const data = await response.json();
    if (data && data.data && data.data.id) {
      const taskId = data.data.id;
      const conversionStatusResponse = await fetch(
        `https://api.convertio.co/convert/${taskId}/status`,
        {
          headers: {
            Authorization: "884a393ee60fd3ec6cede030c0920e4d", // Convertio API key
          },
        }
      );
      const conversionStatusData = await conversionStatusResponse.json();
      if (
        conversionStatusData &&
        conversionStatusData.data &&
        conversionStatusData.data.step === "finish"
      ) {
        const downloadUrl = conversionStatusData.data.output.url;
        const downloadResponse = await fetch(downloadUrl);
        const pdfBytes = await downloadResponse.arrayBuffer();
        const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
        saveAs(pdfBlob, "converted.pdf");
      }
    }
  } catch (error) {
    console.error("Error converting Word to PDF:", error);
  }
};

export { convertPdfToWord, convertWordToPdf };
