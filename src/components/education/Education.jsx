import React from "react";
import "./education.css";
import { education } from "../../data";

// For future updates
// https://nodlik.github.io/react-pageflip/

function Education() {
  return (
    <>
      <section id="education">
        <h2 className="section__title__education">Education</h2>
        <div className="card__education">
          <div className="cover">
            <img src="../../public/education.png" alt="education" />
            <img src="../../public/education.png" alt="education" />
          </div>
          <div className="content">
            <h2>
              <a href="https://www.svitvasad.ac.in/" target="_blank">
                Sardar Vallabhbhai Patel Institute of Technology, Vasad
              </a>
            </h2>
            <p>Bachelor of Engineering - Computer Engineering</p>
            <p>7.79 CGPA</p>
            <h2>
              <a href="https://www.parthinstitute.org/" target="_blank">
                Parth School, Vadodara
              </a>
            </h2>
            <p>{education[1].degree}</p>
            <p>{education[1].grade}</p>
            <h2>
              <a href="https://utkarshvidyalaya.org/" target="_blank">
                Utkarsh Vidhyalaya, Vadodara
              </a>
            </h2>
            <p>{education[2].degree}</p>
            <p>{education[2].grade}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
