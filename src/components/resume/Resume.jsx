import React from "react";
import "./resume.css";
import PdfComp from "./PdfComp";
import pdf from "/Sanmit_Resume.pdf";

const Resume = () => {
  return (
    <section className="pdf__viewer" id="resume">
      <PdfComp />
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
