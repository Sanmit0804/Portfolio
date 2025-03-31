import React, { useEffect, useState } from "react";
import "./Contact.css";
import "./CopyButton.css";
import { Bio } from "../../data";
import { FaCopy } from "react-icons/fa";
import HeaderSocials from "../Home/HeaderSocials";

const copyToClipboard = (text, setCopyStatus) => {
  navigator.clipboard.writeText(text).then(
    () => {
      setCopyStatus(true);
      setTimeout(() => setCopyStatus(false), 3000); // Hide the message after 3 seconds
    },
    (err) => {
      console.error("Failed to copy text: ", err);
    }
  );
};

function Contact() {
  // useEffect(() => {
  //   // Create a script element
  //   const script = document.createElement("script");
  //   script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
  //   script.async = true;

  //   // Append the script to the body
  //   document.body.appendChild(script);

  //   // Cleanup script when component unmounts
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  const [copyStatus, setCopyStatus] = useState(false);

  return (
    <>
      <section className="section container" id="contact">
        <header>
          <h2 className="h2 article-title">
            Get In{" "}
            <span className="highlight__text bounce-text">
              <span>T</span>
              <span>o</span>
              <span>u</span>
              <span>c</span>
              <span>h</span>
              <span>!</span>
            </span>
          </h2>
        </header>
        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117331.54939426926!2d72.5631460538414!3d23.220845994088105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b987c6d6809%3A0xf86f06a7873e0391!2sGandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1722445865236!5m2!1sen!2sin"
              width="400"
              height="300"
              loading="lazy"
            ></iframe>  
           {/*  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777314.828820295!2d68.68500364011504!3d22.399498426760726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959051f5f0ef795%3A0x861bd887ed54522e!2sGujarat!5e0!3m2!1sen!2sin!4v1723476409445!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe>  */}
          </figure>
        </section>
        {
          <section className="contact__container grid">
            <div className="contact__info">
              <h3 className="contact__title">Let's talk about everything!</h3>
              <p className="contact__details">
                Don't like forms? Send me an email. 👋🏻
              </p>

              <a
                href={Bio.emailSend}
                type="email"
                target="_blank"
                className="highlight__text"
              >
                {Bio.email}
              </a>

              <button
                onClick={() => copyToClipboard(Bio.email, setCopyStatus)}
                className="copy-button"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 12px",
                }}
                aria-label="Copy email"
              >
                <span
                  style={{
                    display: copyStatus ? "none" : "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    viewBox="0 0 467 512.22"
                    clipRule="evenodd"
                    fillRule="evenodd"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#0E418F"
                    height="12"
                    width="12"
                    style={{ marginRight: "5px" }}
                  >
                    <path d="M131.07 372.11c.37 1 .57 2.08.57 3.2 0 1.13-.2 2.21-.57 3.21v75.91c0 10.74 4.41 20.53 11.5 27.62s16.87 11.49 27.62 11.49h239.02c10.75 0 20.53-4.4 27.62-11.49s11.49-16.88 11.49-27.62V152.42c0-10.55-4.21-20.15-11.02-27.18l-.47-.43c-7.09-7.09-16.87-11.5-27.62-11.5H170.19c-10.75 0-20.53 4.41-27.62 11.5s-11.5 16.87-11.5 27.61v219.69zm-18.67 12.54H57.23c-15.82 0-30.1-6.58-40.45-17.11C6.41 356.97 0 342.4 0 326.52V57.79c0-15.86 6.5-30.3 16.97-40.78l.04-.04C27.51 6.49 41.94 0 57.79 0h243.63c15.87 0 30.3 6.51 40.77 16.98l.03.03c10.48 10.48 16.99 24.93 16.99 40.78v36.85h50c15.9 0 30.36 6.5 40.82 16.96l.54.58c10.15 10.44 16.43 24.66 16.43 40.24v302.01c0 15.9-6.5 30.36-16.96 40.82-10.47 10.47-24.93 16.97-40.83 16.97H170.19c-15.9 0-30.35-6.5-40.82-16.97-10.47-10.46-16.97-24.92-16.97-40.82v-69.78zM340.54 94.64V57.79c0-10.74-4.41-20.53-11.5-27.63-7.09-7.08-16.86-11.48-27.62-11.48H57.79c-10.78 0-20.56 4.38-27.62 11.45l-.04.04c-7.06 7.06-11.45 16.84-11.45 27.62v268.73c0 10.86 4.34 20.79 11.38 27.97 6.95 7.07 16.54 11.49 27.17 11.49h55.17V152.42c0-15.9 6.5-30.35 16.97-40.82 10.47-10.47 24.92-16.96 40.82-16.96h170.35z" />
                  </svg>
                  Copy email
                </span>
                <span
                  style={{
                    display: copyStatus ? "flex" : "none",
                    alignItems: "center",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-circle"
                    style={{ marginRight: "5px", color: "green" }}
                    width="16"
                    height="16"
                  >
                    <path d="M9 16.2l-4.6-4.6L3 12l6 6 12-12-1.4-1.4z" />
                  </svg>
                  Copied
                </span>
              </button>
              <HeaderSocials></HeaderSocials>
            </div>
            <div className="contact__form">
              <div className="card">
                <form className="form">
                  <div className="group">
                    <input placeholder="‎" type="text" required="" />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="group">
                    <input
                      placeholder="‎"
                      type="email"
                      id="email"
                      name="email"
                      required=""
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="group">
                    <textarea
                      placeholder="‎"
                      id="comment"
                      name="comment"
                      rows="5"
                      required=""
                    ></textarea>
                    <label htmlFor="comment">Comment</label>
                  </div>
                  <button type="submit" className="btn submit__button"  disabled >
                    Submit
                  </button>
                </form>
              </div>
            </div>

          </section>
        }
      </section>

      {/* <div className="visme_d" data-title="Untitled Project" data-url="4d64rzgz-untitled-project" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="85891"></div>
       */}
    </>
  );
}

export default Contact;
