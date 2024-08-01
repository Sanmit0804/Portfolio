import React, { useState } from "react";
import "./resume.css";
import pdf from "/Sanmit_Resume.pdf";
import { Document, Page } from "react-pdf";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <section className="pdf__viewer ResumePage" id="resume">
      <div className="pdf-div">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (x, i) => i + 1).map((page) => (
            <Page
              key={page}
              pageNumber={page}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
      <div className="btn-container">
        <a href={pdf} download="Sanmit_Resume.pdf" className="btn">
          Download Resume
        </a>
        <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn">
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
