import React from "react";

import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import TechStack from "./pages/teckStack/TechStack";
import Projects from "./pages/projects/Projects";
import Education from "./pages/education/Education";
import WorkExperience from "./pages/workExperience/WorkExperience";
import Contact from "./pages/contactInformation/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <TechStack />
          <Projects />
          <WorkExperience />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <p className="text-center"> Copyright &copy;2023 Rishi Kant</p>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
