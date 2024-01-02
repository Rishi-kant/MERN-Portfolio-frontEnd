import React from "react";
import "./Projects.css";
import Pulse from 'react-reveal/Pulse';
function Projects() {
  return (
    <>
      <div className="project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Here are my top projects with live links and source code
        </p>
        <div className="row" id="ads">
          <Pulse>
          <div className="col-md-4">
            <div className="card ">
              <div className="card-image">
                <span className="card-notify-badge">Front end</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Abstract_Kanban_Board.svg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">react js</span>
                <span className="card-detail-badge">node js</span>
                <span className="card-detail-badge">express js</span>
                <span className="card-detail-badge">mongo db</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-tittle">
                  <h5 className="text-uppercase">Kanban board</h5>
                </div>
                <a className="ad-btn" href="https://kanban-board-project.onrender.com">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Front end</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Abstract_Kanban_Board.svg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">react js</span>
                <span className="card-detail-badge">node js</span>
                <span className="card-detail-badge">express js</span>
                <span className="card-detail-badge">mongo db</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-tittle">
                  <h5 className="text-uppercase">Kanban board</h5>
                </div>
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Front end</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Abstract_Kanban_Board.svg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">react js</span>
                <span className="card-detail-badge">node js</span>
                <span className="card-detail-badge">express js</span>
                <span className="card-detail-badge">mongo db</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-tittle">
                  <h5 className="text-uppercase">Kanban board</h5>
                </div>
                <a className="ad-btn" href="view">
                  View
                </a>
              </div>
            </div>
          </div>
          </Pulse>
        </div>
      </div>
    </>
  );
}

export default Projects;
