import { PDFDocument } from "pdf-lib";
import Docxtemplater from "docxtemplater";
import JSZip from "jszip";

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
    return blob;
  } catch (error) {
    console.error("Error converting PDF to Word:", error);
    throw error;
  }
};

// Function to convert Word to PDF
const convertWordToPdf = async (wordFile) => {
  try {
    // ... (Your existing code for converting Word to PDF)
  } catch (error) {
    console.error("Error converting Word to PDF:", error);
    throw error;
  }
};

export { convertPdfToWord, convertWordToPdf };
