import React, { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { SplitText } from 'gsap-trial/SplitText';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const AnimatedText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    let mySplitText = new SplitText(textRef.current, { type: "chars" });
    let chars = mySplitText.chars;

    gsap.from(chars, {
      yPercent: 130,
      stagger: 0.02,
      ease: "back.out",
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        markers: true,
      },
    });

    return () => {
      // Clean up the split text instance when the component unmounts
      mySplitText.revert();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div className="split" ref={textRef}>
      Your animated text goes here.
    </div>
  );
};

export default AnimatedText;
