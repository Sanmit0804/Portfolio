import React from "react";

const Card = ({project, index}) => {
  return (
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
  );
};

export default Card;
