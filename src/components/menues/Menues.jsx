import React from "react";
import "./Menues.css";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { FcVoicePresentation } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
function Menues({ arrowSide }) {
  return (
    <>
      {arrowSide ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link"><FcHome/>Home</div>
            </div>
            <div className="nav-item">
              <div className="nav-link"><FcAbout/>About</div>
            </div>
            <div className="nav-item">
              <div className="nav-link"><FcReadingEbook/>Education</div>
            </div>
           
            <div className="nav-item">
              <div className="nav-link"><FcBiotech/>Tech Stack</div>
            </div>
           
            <div className="nav-item">
              <div className="nav-link"><GrProjects/>Projects</div>
            </div>
            <div className="nav-item">
              <div className="nav-link"><FcPortraitMode/>Work Experience</div>
            </div>
            <div className="nav-item">
              <div className="nav-link"><FcVoicePresentation/>Testimonial</div>
            </div>
            <div className="nav-item">
              <div className="nav-link"><FcBusinessContact/>Contact</div>
            </div>
          </div>
        </>
      ):(
        <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link"><FcHome title="Home"/></div>
            </div>
            <div className="nav-item">
              <div className="nav-link"><FcAbout/></div>
            </div>
            <div className="nav-item">
              <div className="nav-link"><FcReadingEbook/></div>
            </div>
          
            <div className="nav-item">
              <div className="nav-link"><FcBiotech/></div>
            </div>
           
            <div className="nav-item">
              <div className="nav-link"><GrProjects/></div>
            </div>
            <div className="nav-item">
              <div className="nav-link"><FcPortraitMode/></div>
            </div>
            <div className="nav-item">
              <div className="nav-link"><FcVoicePresentation/></div>
            </div>
            <div className="nav-item">
              <div className="nav-link"><FcBusinessContact/></div>
            </div>
          </div> 
      )}
    </>
  );
}

export default Menues;
