import React, { useEffect } from "react";
import "./about.scss";
import Image from "/programmer.jpg";
import { Bio, skills } from "../../data";
// import gsap from "gsap";
// import styled from "styled-components";
// Skills
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
// Find me here
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

// Here I am gonna use ScrollReveal js library
// https://scrollrevealjs.org/

// const AppContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
//   color: #0000;
//   background-color: var(--body-color);
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* padding-right: 3rem; */
// `;

// const Wrapper = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

// const Line = styled.div`
//   width: 100%;
//   height: 11vw;
//   position: relative;
//   border: 1px solid white;
//   /* overflow: hidden; */
// `;

// const Text = styled.div`
//   position: absolute;
//   font-size: 5vw;
//   color: var(--first-color);
//   line-height: 5vw;

//   span {
//     font-family: "Major Mono Display", monospace;
//     font-size: 8vw;
//   }
// `;

const About = () => {
  useEffect(() => {
    const scrollReveal = ScrollReveal({
      reset: true,
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    scrollReveal.reveal(".about__data", { delay: 150, origin: "bottom" });
    // scrollReveal.reveal(".section__title", { delay: 150, origin: "left" });
    // scrollReveal.reveal(".about__img", { delay: 150, origin: "left" });
  }, []);

  // useEffect(() => {
  //   const t1 = gsap.timeline();
  //   t1.from(".singleLine div", {
  //     y: 200,
  //     ease: "power4.out",
  //     delay: 1,
  //     duration: 1.8,
  //     stagger: {
  //       amount: 0.4,
  //     },
  //   });
  // });

  return (
    <>
      <section className="about container section" id="about">
        <div className="">
          <h2 className="section__title__about">
            About{" "}
            <span className="highlight__text bounce-text">
              <span>M</span>
              <span>e</span>
            </span>
          </h2>
        </div>

        <div className="about__container grid">
          <img src={Image} alt="" className="about__img" />

          <div className="about__data grid">
            <div className="about__info">
              <p className="about__about">
                Hii..!! 👋🏻 <span className="highlight__text">Sanmit</span> here,
                Computer Engineering student with a passion for coding and
                problem-solving, from{" "}
                <span className="highlight__text">India.</span>
              </p>
              <p className="about__about">
                Experienced in Business Central AL language and{" "}
                <span className="highlight__text">Dynamics 365</span> solutions,
                including an internship at TripearlTech Private Limited.
              </p>
              <p className="about__about">
                I am a{" "}
                <span className="highlight__text">
                  MERN stack web developer.
                </span>{" "}
                I have also worked with some of the JS libraries like Socket.io,
                Electron, JWT (JSON Web Tokens). Additionally, I have expertise
                in Data Structures and Algorithms{" "}
                <span className="highlight__text">(DSA) in Java.</span>
              </p>
              <p className="about__about">{Bio.about[3]}</p>
            </div>
          </div>
        </div>

        {/*       <div className="about__skills grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">{skillCategory.title}</h3>
                {skillCategory.skills.map((skill, i) => (
                  <span key={i} className="skills__number development">
                    {skill.name}&nbsp;&nbsp;&nbsp;
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>  */}

        <div className="about__skills grid">
          <h1>Technologies</h1>
          <div className="icons__container">
            <div className="icons__skills" style={{ color: "#E34F26" }}>
              <FaHtml5 />
            </div>
            <div className="icons__skills" style={{ color: "#1572B6" }}>
              <FaCss3Alt />
            </div>
            <div className="icons__skills" style={{ color: "#F7DF1E" }}>
              <IoLogoJavascript />
            </div>
            {/*         <div className="icons__skills" style={{ color: "#38B2AC" }}>
              <RiTailwindCssFill />
            </div>   */}
            <div className="icons__skills" style={{ color: "#61DAFB" }}>
              <RiReactjsLine />
            </div>
            <div className="icons__skills" style={{ color: "#339933" }}>
              <FaNodeJs />
            </div>
            <div className="icons__skills" style={{ color: "white" }}>
              <SiExpress />
            </div>
            <div className="icons__skills" style={{ color: "#47A248" }}>
              <SiMongodb />
            </div>
            <div className="icons__skills" style={{ color: "#00758F" }}>
              <TbBrandMysql />
            </div>
            <div className="icons__skills" style={{ color: "orange" }}>
              <FaJava />
            </div>
          </div>
        </div>

        <div className="about__skills grid">
          <h1>Find me here</h1>
          <div className="icons__container">
            <a href={Bio.github} target="_blank">
              <div className="icons__skills" style={{ color: "white" }}>
                <FaGithub />
                <p>&nbsp; GitHub</p>
              </div>
            </a>
            <a href={Bio.leetcode} target="_blank">
              <div className="icons__skills" style={{ color: "orange" }}>
                <SiLeetcode />
                <p>&nbsp; LeetCode</p>
              </div>
            </a>
            <a href={Bio.linkedIn} target="_blank">
              <div className="icons__skills" style={{ color: "blue" }}>
                <FaLinkedin />
                <p>&nbsp; LinkedIn</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
