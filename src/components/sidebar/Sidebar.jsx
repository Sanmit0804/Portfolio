import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="aside">
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <i className="icon-home"></i>
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/about" className="nav__link">
                <i className="icon-user-following"></i>
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/education" className="nav__link">
                <i className="icon-graduation"></i>
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/projects" className="nav__link">
                <i className="icon-layers"></i>
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/resume" className="nav__link">
                <i className="icon-briefcase"></i>
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                <i className="icon-bubble"></i>
              </Link>
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
