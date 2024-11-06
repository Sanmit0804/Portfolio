import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./app.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Play from "./components/Play/Play"; // Play now handles its own loading
import LoadingBar from "react-top-loading-bar";
import PreLoader from "./components/PreLoader/PreLoader";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import GitHubStar from "./components/GitHubStar/GitHubStar";


const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.9,
  },
};

const pageTransition = {
  type: "spring",
  stiffness: 260,
  damping: 15,
  duration: 0.5,
};

const AnimatedRoutes = ({ setProgress }) => {
  const location = useLocation();

  useEffect(() => {
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, [location.pathname, setProgress]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/education"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Education />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/resume"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Resume />
            </motion.div>
          }
        />
        <Route
          path="/play"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Play />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [progress, setProgress] = useState(0);
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3000);
  }, []);

  return (
    <>
    {preloader ? (
      <PreLoader />
    ) : (
      <Router>
      <ColorPicker/>
      <GitHubStar/>
          <LoadingBar
          color="var(--first-color)"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          />
          <Sidebar />
          <main className="main">
          <AnimatedRoutes setProgress={setProgress} />
          </main>
          </Router>
        )}
    </>
  );
}

export default App;
