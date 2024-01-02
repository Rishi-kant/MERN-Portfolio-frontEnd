import React from "react";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// import { CgMail } from "react-icons/cg";
function Contact() {
  return (
    <>
      <div className="contact" id="contactInformation">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg"
                    alt="contact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>Contact with 
                         <FaLinkedin color="blue" 
                         size={20} className="ms-2"/>
                         <FaGithub
                         color="black" 
                         size={20} className="ms-2"
                         />
                          <FaFacebook color="blue" 
                         size={20} className="ms-2"/>
                         {/* <CgMail color="red" 
                         size={30} className="ms-2"/> */}
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button1" type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
