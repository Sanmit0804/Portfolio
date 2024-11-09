import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Sidebar = () => {
  const location = useLocation();

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
        // Other steps
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
              <Link to="/" className="nav__link" id="home_id">
                <i className="icon-home"></i>
                <div className="tooltip">Home</div>
              </Link>
            </li>
            <li className={`nav__item ${isActive("/about")}`}>
              <Link to="/about" className="nav__link" id="about_id">
                <i className="icon-user-following"></i>
                <div className="tooltip">About Me</div>
              </Link>
            </li>
            <li className={`nav__item ${isActive("/education")}`}>
              <Link to="/education" className="nav__link" id="education_id">
                <i className="icon-graduation" ></i>
                <div className="tooltip">Education</div>
              </Link>
            </li>
            <li className={`nav__item ${isActive("/projects")}`}>
              <Link to="/projects" className="nav__link" id="projects_id">
                <i className="icon-layers"></i>
                <div className="tooltip">Projects</div>
              </Link>
            </li>
            <li className={`nav__item ${isActive("/resume")}`}>
              <Link to="/resume" className="nav__link" id="resume_id">
                <i className="icon-briefcase" ></i>
                <div className="tooltip">Resume</div>
              </Link>
            </li>
            <li className={`nav__item ${isActive("/contact")}`}>
              <Link to="/contact" className="nav__link" id="contact_id">
                <i className="icon-bubble"></i>
                <div className="tooltip">Contact Me</div>
              </Link>
            </li>
            <li className={`nav__item ${isActive("/play")} play__component`}>
              <Link to="/play" className="nav__link" id="play_id">
                <div className="three-body">
                  <div className="three-body__dot"></div>
                  <div className="three-body__dot"></div>
                  <div className="three-body__dot"></div>
                </div>
                <div className="tooltip">Play Area</div>
              </Link>
            </li>
            <li>
              <div className="theme-toggle">
                <ThemeToggle />
                <div className="tooltip">Theme</div>
              </div>
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
