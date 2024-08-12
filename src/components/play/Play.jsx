// Play.jsx

import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import "./play.css";

// Preloader function to fetch or prepare data before rendering the Play component
export const playPreLoader = async () => {
  // Simulate fetching or loading the Spline scene data
  const sceneUrl = "/scene.splinecode"; // Replace with the actual URL if needed
  return sceneUrl;
};

function Play() {
  const [sceneUrl, setSceneUrl] = useState(null);

  useEffect(() => {
    // Load the scene before rendering
    const loadScene = async () => {
      const url = await playPreLoader();
      setSceneUrl(url);
    };

    loadScene();
  }, []);

  if (!sceneUrl) {
    return <div>Loading...</div>; // You can customize this loading state
  }

  return (
    <section className="play" id="play">
      <Spline scene={sceneUrl} />
    </section>
  );
}

export default Play;
