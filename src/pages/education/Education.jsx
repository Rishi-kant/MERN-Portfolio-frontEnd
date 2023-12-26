import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
function Education() {
  return (
    <>
      <div className="container education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education detail
        </h2>
        <hr />
        <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="February 2023 -Present"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool/>}
        >
          <h4 className="vertical-timeline-element-title">Frontend Developer trainee</h4>
        
          <h3 className="vertical-timeline-element-subtitle"> FunctionUp </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="2021"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool/>}
        >
          <h4 className="vertical-timeline-element-title">B.Teach Mechanical Engineering</h4>
          <h5 className="vertical-timeline-element-subtitle"> CH. CHARAN SINGH                UNIVERSITY, Meerut </h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
      
    </>
  );
}

export default Education;
