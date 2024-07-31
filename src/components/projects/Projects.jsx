import "./projects.css";
import React from "react";
// import { Cards } from "./Cards";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

export function Projects() {
  return (
    <>
      <section className="project container section" id="projects">
        <h2 className="section__title">Projects</h2>
        <div className="project__container grid">
          <div className="project__card">
            <div className="project__thumb">
              <a href="#">
                <span className="project__category">project1</span>
              </a>
              <a href="#">
                <img src={Image1} alt="" className="project__img" />
              </a>
            </div>
            <div className="project__details">
              <h3 className="project__title"></h3>
              <div className="project__meta">
                <span></span>
                <span className="project__dot">.</span>
                <span>Sanmit</span>
              </div>
            </div>
          </div>
          <div className="project__card">
            <div className="project__thumb">
              <a href="#">
                <span className="project__category">Project2</span>
              </a>
              <a href="#">
                <img src={Image2} alt="" className="project__img" />
              </a>
            </div>
            <div className="project__details">
              <h3 className="project__title"></h3>
              <div className="project__meta">
                <span></span>
                <span className="project__dot">.</span>
                <span>Sanmit</span>
              </div>
            </div>
          </div>
          <div className="project__card">
            <div className="project__thumb">
              <a href="#">
                <span className="project__category">Project3</span>
              </a>
              <a href="#">
                <img src={Image3} alt="" className="project__img" />
              </a>
            </div>
            <div className="project__details">
              <h3 className="project__title"></h3>
              <div className="project__meta">
                <span></span>
                <span className="project__dot">.</span>
                <span>Sanmit</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
