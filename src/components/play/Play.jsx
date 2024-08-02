import React from "react";
import Spline from "@splinetool/react-spline";
import "./play.css";

function Play() {
  return (
    <section className="play" id="play">
      <Spline scene="../../public/scene.splinecode" />
    </section>
  );
}

export default Play;
