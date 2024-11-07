import React, { useEffect } from "react";
import "./About.scss";
import Image from "/programmer.jpg";
import { Bio, skills } from "../../data";

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

import { IconCloud } from "./IconCloud";


const About = () => {
  useEffect(() => {
    const scrollReveal = ScrollReveal({
      reset: true,
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    scrollReveal.reveal(".about__data", { delay: 150, origin: "bottom" });
  }, []);

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
                Hii..!! <span className="wave">👋🏻</span> <span className="highlight__text">Sanmit</span> here,
                Computer Engineering student with a passion for coding and
                problem-solving, from{" "}
                <span className="highlight__text">India.</span>
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
          <h1>Find me here</h1>
          <div className="icons__container">
            <a href={Bio.github} target="_blank" title="GitHub">
              <div className="icons__skills" style={{ color: "grey" }}>
                <FaGithub />
                <p>&nbsp; GitHub</p>
              </div>
            </a>
            <a href={Bio.leetcode} target="_blank" title="LeetCode">
              <div className="icons__skills" style={{ color: "orange" }}>
                <SiLeetcode />
                <p>&nbsp; LeetCode</p>
              </div>
            </a>
            <a href={Bio.linkedIn} target="_blank" title="LinkedIn">
              <div className="icons__skills" style={{ color: "blue" }}>
                <FaLinkedin />
                <p>&nbsp; LinkedIn</p>
              </div>
            </a>
          </div>
        </div>


        <div className="about__skills grid">
        <h1>Technologies</h1>
        <div className="icons__container">
          <div className="icons__skills" title="HTML" style={{ color: "#E34F26" }}>
            <FaHtml5 />
          </div>
          <div className="icons__skills" title="CSS" style={{ color: "#1572B6" }}>
            <FaCss3Alt />
          </div>
          <div className="icons__skills" title="JavaScript" style={{ color: "#F7DF1E" }}>
            <IoLogoJavascript />
          </div>
          {/*         <div className="icons__skills" style={{ color: "#38B2AC" }}>
            <RiTailwindCssFill />
          </div>   */}
          <div className="icons__skills" title="React.js" style={{ color: "#61DAFB" }}>
            <RiReactjsLine />
          </div>
          <div className="icons__skills" title="Node.js" style={{ color: "#339933" }}>
            <FaNodeJs />
          </div>
          <div className="icons__skills" title="Express.js" style={{ color: "grey" }}>
            <SiExpress />
          </div>
          <div className="icons__skills" title="MongoDB" style={{ color: "#47A248" }}>
            <SiMongodb />
          </div>
          <div className="icons__skills" title="SQL" style={{ color: "#00758F" }}>
            <TbBrandMysql />
          </div>
          <div className="icons__skills" title="Java" style={{ color: "orange" }}>
            <FaJava />
          </div>
        </div>
      </div>
      <div className="iconcloud">
      <IconCloudDemo/>
      </div>

      </section>
    </>
  );
};

export default About;


const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "mongodb",
  "mysql",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
