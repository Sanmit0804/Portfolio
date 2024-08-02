import React from "react";
import "./projects.css";
import { projects } from "../../data";

const Projects = () => {
  return (
    <section className="project container section" id="projects">
      <div >
        <h3 className="section__title">
          My Recent{" "}
          <span className="highlight__text bounce-text">
            <span>W</span>
            <span>o</span>
            <span>r</span>
            <span>k</span>
            <span>s</span>
          </span>
        </h3>
        <h4 className="section__title2">
          Here are a few projects I've worked on recently
        </h4>
      </div>
      <div className="project__container grid">
        {projects.map((project, index) => (
          <div key={index} className="project__card">
            <div className="project__thumb">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <span className="project__category">{project.title}</span>
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project__img"
                />
              </a>
            </div>
            <div className="project__details">
              <h3 className="project__title">{project.title}</h3>
              <div className="project__meta">
                <span>{project.description}</span>
              </div>
              <div className="project__dot">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project__tag">
                    {tag}&nbsp;&nbsp;&nbsp;
                  </span>
                ))}
              </div>
              <div className="btn__project">
                <a href={project.demo} target="_blank" className="btn">
                  Demo
                </a>
                <a href={project.code} target="_blank" className="btn">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
