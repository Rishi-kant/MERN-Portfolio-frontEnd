import React from "react";
import "./About.css"
function About() {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-image">
            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile_pic"/>
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
           <h1>About me</h1>
           <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima est, maiores repellat, aut doloribus eius quasi exercitationem soluta odit beatae sunt enim iste voluptatibus ratione! Porro modi atque placeat tempora ex. Adipisci ut magni id in enim ipsa, dolor eos aliquam earum culpa tempora sequi? Doloremque distinctio quas molestiae velit facilis sint dolores, numquam eaque aliquid? Reiciendis vel, ratione ipsa tenetur placeat hic, ad eos quaerat culpa, in maiores perferendis rem 
           </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default About;
