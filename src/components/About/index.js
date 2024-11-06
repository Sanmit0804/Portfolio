import gsap from "gsap-trial";

import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

let mySplitText = new SplitText(".split", { type: "chars" });
let chars = mySplitText.chars;

gsap.from(chars, {
  yPercent: 130,
  stagger: 0.02,
  ease: "back.out",
  duration: 1,
  scrollTrigger: {
    trigger: ".split",
    start: "top 80%",
    markers: true,
  },
});
