import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import { Bio } from "../../data";
import HeaderSocials from "./HeaderSocials";
import Shapes from "./Shapes";
// import Spline from "@splinetool/react-spline";
// <Spline scene="../../public/scene.splinecode" />

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Bio.img} alt="" className="home__img" />
        <h1 className="home__name">{Bio.name}</h1>
        <span className="home__education">{Bio.description}</span>

        <HeaderSocials></HeaderSocials>
        
        <a href="/resume" className="btn">
          Resume
        </a>

      </div>
    </section>
  );
};

export default Home;
