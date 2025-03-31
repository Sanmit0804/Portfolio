import React, { useEffect, useState } from "react";
import "./Education.css";
import { education } from "../../data";
import useDeviceType from "../../hooks/useDeviceType";

// For future updates
// https://nodlik.github.io/react-pageflip/

function Education() {
  const [descVisible, setDesVisible] = useState(true);
  const device = useDeviceType();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDesVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section id="education">
        <h2 className="section__title__education ">My <span className="highlight__text bounce-text"><span>E</span><span>d</span><span>u</span><span>c</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span></span></h2>
        <div className="card__education">
          <div className="cover">
            <img src="/education.png" alt="education" />
            <img src="/education.png" alt="education" />
          </div>
          <div className="content">
            <h2>
              <a className="school" href="https://www.svitvasad.ac.in/" target="_blank">
                Sardar Vallabhbhai Patel Institute of Technology, Vasad
              </a>
            </h2>
            <p className="education__font">{education[0].degree}</p>
            <p className="education__font">{education[0].grade}</p>
            <p className="education__font">{education[0].date}</p>
            <h2>
              <a className="school" href="https://www.parthinstitute.org/" target="_blank">
                Parth School, Vadodara
              </a>
            </h2>
            <p className="education__font">{education[1].degree}</p>
            <p className="education__font">{education[1].grade}</p>
            <p className="education__font">{education[1].date}</p>
            <h2>
              <a className="school" href="https://utkarshvidyalaya.org/" target="_blank">
                Utkarsh Vidhyalaya, Vadodara
              </a>
            </h2>
            <p className="education__font">{education[2].degree}</p>
            <p className="education__font">{education[2].grade}</p>
            <p className="education__font">{education[2].date}</p>
          </div>
          {descVisible && device == 'mobile' &&
            <div style={{
              textAlign: 'center',
              paddingTop: '1rem'
            }}>Click above</div>
          }
        </div>
      </section>
    </>
  );
}

export default Education;
