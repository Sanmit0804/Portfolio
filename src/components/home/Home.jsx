import React from "react";
import "./home.css";
import pdf from "/Sanmit_Resume.pdf";
import { Bio } from "../../data";
import HeaderSocials from "./HeaderSocials";
import Shapes from "./Shapes";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home container" id="home">
        <div className="intro ">
          <img src={Bio.img} alt="" className="home__img" />
          <h1 className="home__name bounce-text ">
            <span>S</span>
            <span>a</span>
            <span>n</span>
            <span>m</span>
            <span>i</span>
            <span>t</span> <span>&nbsp;</span><span>S</span>
            <span>u</span>
            <span>t</span>
            <span>h</span>
            <span>a</span>
            <span>r</span>
          </h1>

          <HeaderSocials></HeaderSocials>

          <div className="btn__project">
            {" "}
            {/* Here i am using btn__project because i want the same style */}
            <Link to="/resume" className="btn">
              Resume
            </Link>
            <Link to="/about" className="btn">
              About me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
