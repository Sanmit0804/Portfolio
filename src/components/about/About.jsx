import React, { useEffect } from "react";
import "./about.scss";
import Image from "../../assets/avatar-2.svg";
import { Bio, skills } from "../../data";

// Here I am gonna use ScrollReveal js library
// https://scrollrevealjs.org/

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

  return (
    <>
      <section className="about container section" id="about">
        <div className="bounce-text">
        <h2 className="section__title__about">About <span className="highlight__text">Me</span></h2>
        </div>

        <div className="about__container grid">
          <img src={Image} alt="" className="about__img" />

          <div className="about__data grid">
            <div className="about__info">
              <p className="about__about">{Bio.about[0]}</p>
              <p className="about__about">{Bio.about[1]}</p>
              <p className="about__about">{Bio.about[2]}</p>
              <p className="about__about">{Bio.about[3]}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// const About = () => {
//   return (
//     <section className="about container section" id="about">
//       <h2 className="section__title">About Me</h2>

//       <div className="about__container grid">
//         <img src={Image} alt="" className="about__img" />

//         <div className="about__data grid">
//           <div className="about__info">
//             <p className="about__description">{Bio.description}</p>
//           </div>

//           <div className="about__skills grid">
//             {skills.map((skillCategory, index) => (
//               <div key={index} className="skills__data">
//                 <div className="skills__titles">
//                   <h3 className="skills__name">{skillCategory.title}</h3>
//                   {skillCategory.skills.map((skill, i) => (
//                     <span key={i} className="skills__number development">
//                       {skill.name}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default About;
