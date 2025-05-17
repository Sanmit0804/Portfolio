import React, { useEffect, useState } from "react";
import "./Projects.css";
import { projects } from "../../data";
import Card from "./Card";
import useDeviceType from "../../hooks/useDeviceType";
import CommonActions from "../../commonActions";

const Projects = () => {
  const [filter, setFilter] = useState("all"); // Default to show all projects
  const device = useDeviceType();

  // Function to handle filtering
  const filteredProjects = () => {
    if (filter === "major") {
      return projects.filter((project) => project.major === true);
    } else if (filter === "minor") {
      return projects.filter((project) => project.major === false);
    }
    return projects; // Show all projects by default
  };

  useEffect(() => {
    CommonActions.scrollToTop();
  }, [])

  return (
    <section className="project container section" id="projects">
      <div>
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
      {
        device != 'mobile' &&
        <div className="radio project_types">
          <input defaultChecked defaultValue="other" name="type" id="all" type="radio" label="All" onClick={() => setFilter("all")} />
          <input defaultValue="male" name="type" id="major" type="radio" label="Major Projects" onClick={() => setFilter("major")} />
          <input defaultValue="female" name="type" id="minor" type="radio" label="Minor Projects" onClick={() => setFilter("minor")} />
        </div>
      }
      <div className="project__container grid">
        {filteredProjects().map((project, index) => (
          <Card project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
