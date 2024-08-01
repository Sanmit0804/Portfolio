import React from "react";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Education from "./components/education/Education";
// import Pricing from "./components/pricing/Pricing";
// import Testimonials from "./components/testimonials/Testimonials";
// import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <main className="main">
        <Home />
        <About />
        <Education />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
}

export default App;
