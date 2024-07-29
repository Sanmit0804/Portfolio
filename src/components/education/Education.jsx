import React from "react";
import "./education.css";
import { education } from "../../data";

function Education() {
  return (
    <>
      <section id="education">
        <h2 className="section__title__education">Education</h2>
        <div className="card">
          <div className="cover">
            <img src="../../public/education.png" alt="" />
            <img src="../../public/education.png" alt="" />
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
