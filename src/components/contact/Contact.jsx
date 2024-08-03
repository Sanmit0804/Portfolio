import React, { useEffect } from "react";
import "./contact.css";

function Contact() {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div id="contact" className="contact">
        <article className="contact" data-page="contact">
          {/*        <header>
            <h2 className="h2 article-title">Contact</h2>
          </header>  */}

          {/*  <section className="mapbox" data-mapbox>
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117331.54939426926!2d72.5631460538414!3d23.220845994088105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b987c6d6809%3A0xf86f06a7873e0391!2sGandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1722445865236!5m2!1sen!2sin"
                width="400"
                height="300"
                loading="lazy"
              ></iframe>
            </figure>
          </section>    */}

          {/*       <section className="container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>
          
            <div className="contact__container grid">
              <div className="contact__info">
                <h3 className="contact__title">Let's talk about everything!</h3>
                <p className='contact__details'>Don't like forms? Send me an email. 👋🏻</p>
              </div>
          
              <form action="" className="contact__form">
                <div className="contact__form-group">
                  <div className="contact__form-div">
                    <input type="text" className="contact__form-input" placeholder='Insert your name'/>
                  </div>
                  <div className="contact__form-div">
                    <input type="email" className="contact__form-input" placeholder='Insert your email'/>
                  </div>

                  <div className="contact__form-div">
                    <textarea name="" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
                  </div>
          
                  <button className='btn'>Send Message</button>
          
                </div>
              </form>
            </div>
          </section>   */}

          <div className="visme_d" data-title="Untitled Project" data-url="4d64rzgz-untitled-project" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="85891"></div>
        </article>
      </div>
    </>
  );
}

export default Contact;
