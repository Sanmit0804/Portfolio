import React, { useState } from "react";
import "./Resume.css";
import pdf from "/Sanmit_Resume.pdf";
import { Document, Page } from "react-pdf";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const [wid, setwid] = useState(window.innerWidth);

  const handleResize = () => {
    setwid(window.innerWidth);
  };

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);
  return (
    <section className="pdf__viewer ResumePage" id="resume">
      <div className="pdf-div">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => {
              return (
                <Page
                  key={page}
                  pageNumber={pageNumber}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1}
                />
              );
            })}
            <p>
              Page {pageNumber} of {numPages}
            </p>
        </Document>
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
