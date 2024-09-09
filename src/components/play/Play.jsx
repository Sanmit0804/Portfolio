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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load the scene before rendering
    const loadScene = async () => {
      const url = await playPreLoader();
      setSceneUrl(url);
    };

    loadScene();
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="play" id="play">
      {isLoading && (
        <div className="loading_animation">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <circle
              fill="var(--first-color)"
              stroke="var(--first-color)"
              strokeWidth="15"
              r="15"
              cx="40"
              cy="100"
            >
              <animate
                attributeName="opacity"
                calcMode="spline"
                dur="2s"
                values="1;0;1;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.4s"
              />
            </circle>
            <circle
              fill="var(--first-color)"
              stroke="var(--first-color)"
              strokeWidth="15"
              r="15"
              cx="100"
              cy="100"
            >
              <animate
                attributeName="opacity"
                calcMode="spline"
                dur="2s"
                values="1;0;1;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.2s"
              />
            </circle>
            <circle
              fill="var(--first-color)"
              stroke="var(--first-color)"
              strokeWidth="15"
              r="15"
              cx="160"
              cy="100"
            >
              <animate
                attributeName="opacity"
                calcMode="spline"
                dur="2s"
                values="1;0;1;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="0s"
              />
            </circle>
          </svg>
          <p>Please wait...</p>
          </div>
      )}
      {sceneUrl && (
        <Spline
          scene={sceneUrl}
          onLoad={handleLoad} // Triggered when the Spline scene is fully loaded
        />
      )}
    </section>
  );
}

export default Play;
