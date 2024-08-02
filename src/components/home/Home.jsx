// Home.js
import React from "react";
import "./home.css";
import pdf from "/Sanmit_Resume.pdf";
import { Bio } from "../../data";
import HeaderSocials from "./HeaderSocials";
import Shapes from "./Shapes";
import { Link } from "react-router-dom";
import Tilt from "../tilt/Tilt";

const Home = () => {
  const tiltOptions = {
    scale: 1.1,
    speed: 1000,
    max: 25,
  };

  return (
    <>
      <section className="home container" id="home">
        <div className="intro">
          <Tilt options={tiltOptions} className="tilt">
            <img src={Bio.img} alt="" className="home__img" />
          </Tilt>
          <h1 className="home__name bounce-text ">
            <span>S</span>
            <span>a</span>
            <span>n</span>
            <span>m</span>
            <span>i</span>
            <span>t</span> <span>&nbsp;</span>
            <span>S</span>
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
