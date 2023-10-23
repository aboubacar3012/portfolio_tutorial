import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">Mes services</span>
      <span className="skillDesc">
        Je suis passionné par le développement web et mobile, et je suis prêt à vous aider à créer votre site web ou votre application mobile.
        Je peux aussi vous aider à créer votre identité visuelle.
      </span>
      <div className="skillBars">
        <div className="bar">
          {/* Web Design */}
          <div className="skillBar">
            <img src={WebDesign} alt="Web Design" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Web Design</h2>
              <p>
                Je peux vous aider à créer votre site web en utilisant les
                dernières technologies.
              </p>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="skillBar">
            <img src={AppDesign} alt="App Design" className="skillBarImg" />
            <div className="skillBarText">
              <h2>App Design</h2>
              <p>
                Je peux vous aider à créer votre application mobile en utilisant
                les dernières technologies.
              </p>
            </div>
          </div>

          {/* Logo Design */}
          <div className="skillBar">
            <img src={UIDesign} alt="UI Design" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Logo Design</h2>
              <p>
                Je peux vous aider à créer votre logo en utilisant les dernières
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
