import React from "react";
import "./Education.css";
import { education } from "../../data";
import HTMLFlipBook from "react-pageflip";

function Education() {
  return (
    <>
      <section id="education">
        <h2 className="section__title__education">
          My{" "}
          <span className="highlight__text bounce-text">
            <span>E</span>
            <span>d</span>
            <span>u</span>
            <span>c</span>
            <span>a</span>
            <span>t</span>
            <span>i</span>
            <span>o</span>
            <span>n</span>
          </span>
        </h2>

        <div className="card__education">
          <div className="cover">
            <img src="/education.png" alt="Education Cover" />
            <img src="/education.png" alt="Education Cover" />
          </div>
          <div className="content">
            <h2>
              <a href="https://www.svitvasad.ac.in/" target="_blank" rel="noopener noreferrer">
                Sardar Vallabhbhai Patel Institute of Technology, Vasad
              </a>
            </h2>
            <p className="education__font">{education[0].degree}</p>
            <p className="education__font">{education[0].grade}</p>
            <p className="education__font">{education[0].date}</p>

            <h2>
              <a href="https://www.parthinstitute.org/" target="_blank" rel="noopener noreferrer">
                Parth School, Vadodara
              </a>
            </h2>
            <p className="education__font">{education[1].degree}</p>
            <p className="education__font">{education[1].grade}</p>
            <p className="education__font">{education[1].date}</p>

            <h2>
              <a href="https://utkarshvidyalaya.org/" target="_blank" rel="noopener noreferrer">
                Utkarsh Vidhyalaya, Vadodara
              </a>
            </h2>
            <p className="education__font">{education[2].degree}</p>
            <p className="education__font">{education[2].grade}</p>
            <p className="education__font">{education[2].date}</p>
          </div>
        </div>
      </section>

      <div className="page-flip">
        <HTMLFlipBook width={300} height={500}>
          <div className="page">
            <img
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt="Nature 1"
              className="page-image"
            />
          </div>
          <div className="page">
            <img
              src="https://images.pexels.com/photos/2308893/pexels-photo-2308893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Nature 2"
              className="page-image"
            />
          </div>
          <div className="page">
            <img
              src="https://source.unsplash.com/random/300x500?nature,3"
              alt="Nature 3"
              className="page-image"
            />
          </div>
          <div className="page">
            <img
              src="https://source.unsplash.com/random/300x500?nature,4"
              alt="Nature 4"
              className="page-image"
            />
          </div>
        </HTMLFlipBook>
      </div>
    </>
  );
}

export default Education;
