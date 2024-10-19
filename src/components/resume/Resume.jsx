import React from "react";
import "./Resume.scss";
import pdf from "/Sanmit_Resume.pdf";
import { experiences } from "../../data";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__experience">
        {experiences.map((e, index) => (
          <div className="resume__item">
            <div className="resume__title">{e.company}</div>
            <div className="resume__subtitle">{e.role}</div>
            <div className="resume__subtitle">{e.date}</div>
          </div>
        ))}
      </div>

      <div className="resume__buttons">
        <a href={pdf} download="Sanmit_Resume.pdf" className="btn">
          Download Resume
        </a>
        <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn">
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
