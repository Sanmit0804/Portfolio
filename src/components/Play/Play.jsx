import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import "./Play.css";

// Error Boundary Component
class SplineErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Spline Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="spline-fallback">
          <h3>Play area Unavailable</h3>
          <p>We couldn't load the interactive 3D Play area. This might be due to network restrictions.</p>
          <button 
            className="retry-button btn" 
            style={{ marginTop: '1rem'}}
            onClick={() => this.setState({ hasError: false })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export const playPreLoader = async () => {
  try {
    const sceneUrl = "/scene.splinecode";
    if (!sceneUrl) {
      throw new Error("Scene URL not found");
    }
    return sceneUrl;
  } catch (error) {
    console.error("Error loading scene:", error);
    throw error;
  }
};

function Play() {
  const [sceneUrl, setSceneUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadScene = async () => {
      try {
        const url = await playPreLoader();
        setSceneUrl(url);
      } catch (err) {
        setError("Failed to load scene data. Please try again.");
        setIsLoading(false);
      }
    };

    loadScene();
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleError = () => {
    setError("Failed to load 3D content. This might be due to network restrictions.");
    setIsLoading(false);
  };

  return (
    <section className="play" id="play">
      {isLoading && !error && (
        <div className="loading_animation">
          Loading...
        </div>
      )}
      
      {error && (
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button 
            className="retry-button btn" 
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      )}

      {sceneUrl && !error && (
        <SplineErrorBoundary>
          <Spline 
            scene={sceneUrl} 
            onLoad={handleLoad}
            onError={handleError}
          />
        </SplineErrorBoundary>
      )}
    </section>
  );
}

export default Play;