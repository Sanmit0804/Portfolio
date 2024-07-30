import React from "react";
import pdf from "./Sanmit_Resume.pdf";
import "./resume.css";

// import { Document, Page, pdfjs } from "react-pdf"; // Import from react-pdf

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  return (
    // ------- using Object tag (HTML approach)
    <div className="pdf__viewer" id="resume">
      <object data={pdf} type="application/pdf">
        <p>
          Alternative text - include a link <a href={pdf}>to the PDF!</a>
        </p>
      </object>
    </div>

    // <div>
    //   <Document file={pdf}>
    //     <Page pageNumber={1} width={600} />
    //   </Document>
    // </div>
  );
};

export default Resume;
