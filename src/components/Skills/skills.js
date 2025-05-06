import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

/*import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";*/

const Skills = () => {
  return (
    <section id="skills">
      {/* <div> */}
      
      <br />
      <br />
      <img src={UIDesign} alt="UIDesign" className="UIDesign" />
      {/* <div className="skillBarText"> */}
      <h2 className="inline-block">Website UI/UX design</h2>
      {/* </div> */}
      <img src={WebDesign} alt="WebDesign" className="WebDesign" />
      {/* <div className="skillBarText"> */}{" "}
      <h2 className="inline-block">Back-End</h2>
      {/* </div> */}
      <img src={AppDesign} alt="AppDesign" className="AppDesign" />
      {/* <div className="skillBarText"> */}{" "}
      <h2 className="inline-block">Data Analysis</h2>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};
export default Skills;
