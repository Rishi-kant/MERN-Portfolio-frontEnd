import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Layout from "../../components/layout/Layout";
import Resume from "../../assets/docs/Resume-Rishi Kant(Others).pdf"
function Home() {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hi I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["MERN stack developer!", "Full stack developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire me</button>
            <a className="btn btn-cv" href={Resume} download="ResumeRishiKant.pdf">My resume</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
