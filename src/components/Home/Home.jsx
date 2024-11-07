// Home.js
import React from "react";
import "./Home.css";
import { Bio } from "../../data";
import HeaderSocials from "./HeaderSocials";
import { Link } from "react-router-dom";
import Tilt from "../Tilt/Tilt";

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
          <h1 className="home__name bounce-text">
            <span>{Bio.name.charAt(0)}</span>
            <span>{Bio.name.charAt(1)}</span>
            <span>{Bio.name.charAt(2)}</span>
            <span>{Bio.name.charAt(3)}</span>
            <span>{Bio.name.charAt(4)}</span>
            <span>{Bio.name.charAt(5)}</span> <span>&nbsp;</span>
            <span>{Bio.name.charAt(6)}</span>
            <span>{Bio.name.charAt(7)}</span>
            <span>{Bio.name.charAt(8)}</span>
            <span>{Bio.name.charAt(9)}</span>
            <span>{Bio.name.charAt(10)}</span>
            <span>{Bio.name.charAt(11)}</span>
            <span>{Bio.name.charAt(12)}</span>  <span>&nbsp;</span>
            <span className="wave">👋🏻</span>
          </h1>
          <h3 className="highlight__text">- Full Stack Developer -</h3>
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
        <div className="home__img__container" >
          <Tilt options={tiltOptions} className="tilt">
            <img src={Bio.img} alt="" className="home__img" />
          </Tilt>
        </div>
      </section>
    </>
  );
};

export default Home;
