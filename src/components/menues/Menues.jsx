import React from "react";
import "./Menues.css";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
// import { FcVoicePresentation } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from 'react-reveal/Fade';
function Menues({ arrowSide }) {
  return (
    <>
      {arrowSide ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="profile pic"
              />
            </div>
          </Zoom>
           <Fade left>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                  Home
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                  About
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook />
                  Education
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="techStack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GrProjects />
                  Projects
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="workExperience"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode />
                  Work Experience
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="contactInformation"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
          </Fade>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcReadingEbook />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="techStack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBiotech />
              </Link>
            </div>
          </div>

          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <GrProjects />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="workExperience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcPortraitMode />
              </Link>
            </div>
          </div>

          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="contactInformation"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessContact />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menues;
