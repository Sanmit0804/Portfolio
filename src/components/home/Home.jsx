import React from "react";
import "./home.css";
import pdf from "/Sanmit_Resume.pdf";
import { Bio } from "../../data";
import HeaderSocials from "./HeaderSocials";
import Shapes from "./Shapes";
// import Spline from "@splinetool/react-spline";
// <Spline scene="../../public/scene.splinecode" />

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro ">
        <img src={Bio.img} alt="" className="home__img" />
        <h1 className="home__name bounce-text"><span>S</span><span>a</span><span>n</span><span>m</span><span>i</span><span>t</span> <span>S</span><span>u</span><span>t</span><span>h</span><span>a</span><span>r</span></h1>
        <span className="home__education">{Bio.description}</span>

        <HeaderSocials></HeaderSocials>

        <a href={pdf} target="_blank" className="btn">
          Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
