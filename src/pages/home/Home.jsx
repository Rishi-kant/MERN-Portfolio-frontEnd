import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Layout from "../../components/layout/Layout";
import Resume from "../../assets/docs/Resume-Rishi Kant(Others).pdf"
import { BsFillMoonStarsFill, } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';
function Home() {
  const[ theme,setTheme]=useTheme()
  //handle theme
  const handleTheme=()=>{
    setTheme((prevstate)=>prevstate==="light"?"dark":"light")
  }
  return (
    <>
      <div className="container-fluid home-container" id="home">
           <div className="theme-btn" onClick={handleTheme}>
             {
              theme==="light"?(<BsFillMoonStarsFill size={30}/>):(<BsFillSunFill size={30}/>)
             }
           </div>
        <div className="container home-content">
          <Fade top>
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
          </Fade>
          <Fade bottom>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire me</button>
            <a className="btn btn-cv" href={Resume} download="ResumeRishiKant.pdf">My resume</a>
          </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Home;
