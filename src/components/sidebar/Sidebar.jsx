import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Sidebar = () => {
  const location = useLocation(); // Get the current location

  const isActive = (path) => (location.pathname === path ? "active" : "");

  useEffect(() => {
    const driverObj = driver({
      popoverClass: "driverjs-theme",
      showProgress: true,
      steps: [
        {
          element: "#home_id",
          popover: {
            title: "Home",
            description: "Navigate to the Home page.",
            side: "left",
            align: "start",
          },
        },
        {
          element: "#about_id",
          popover: {
            title: "About Me",
            description: "Learn more about me on this page.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: "#education_id",
          popover: {
            title: "Education",
            description: "View my educational background here.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: "#projects_id",
          popover: {
            title: "Projects",
            description: "Explore the projects I have worked on.",
            side: "left",
            align: "start",
          },
        },
        {
          element: "#resume_id",
          popover: {
            title: "Resume",
            description: "Check out my resume for more details.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#contact_id",
          popover: {
            title: "Contact",
            description: "Get in touch with me through this page.",
            side: "right",
            align: "start",
          },
        },
        {
          popover: {
            title: "Welcome!",
            description:
              "Feel free to explore the rest of my portfolio. Enjoy your visit!",
          },
        },
      ],
    });

    driverObj.drive();
  }, []);

  return (
    <aside className="aside">
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className={`nav__item ${isActive("/")}`}>
              <Link to="/" className="nav__link" id="home_id" >
                <i className="icon-home" title="Home" ></i>
              </Link>
            </li>
            <li className={`nav__item ${isActive("/about")}`}>
              <Link to="/about" className="nav__link" id="about_id">
                <i className="icon-user-following" title="About me"></i>
              </Link>
            </li>
            <li className={`nav__item ${isActive("/education")}`}>
              <Link to="/education" className="nav__link" id="education_id">
                <i className="icon-graduation" title="Education"></i>
              </Link>
            </li>
            <li className={`nav__item ${isActive("/projects")}`}>
              <Link to="/projects" className="nav__link" id="projects_id">
                <i className="icon-layers" title="Projects"></i>
              </Link>
            </li>
            <li className={`nav__item ${isActive("/resume")}`}>
              <Link to="/resume" className="nav__link" id="resume_id">
                <i className="icon-briefcase" title="Resume"></i>
              </Link>
            </li>
            <li className={`nav__item ${isActive("/contact")}`}>
              <Link to="/contact" className="nav__link" id="contact_id">
                <i className="icon-bubble" title="Contact me"></i>
              </Link>
            </li>
            <li className={`nav__item ${isActive("/play")} play__component`}>
              <Link to="/play" className="nav__link " id="play_id" title="Play area">
                <div className="three-body">
                  <div className="three-body__dot"></div>
                  <div className="three-body__dot"></div>
                  <div className="three-body__dot"></div>
                </div>
              </Link>
            </li>
            <li className={`nav__item`}>
              <ThemeToggle />
            </li>

          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2024 - Sanmit</span>
      </div>
    </aside>
  );
};

export default Sidebar;
