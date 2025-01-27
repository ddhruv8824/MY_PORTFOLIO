/** @format */

import React from "react";
import styles from "./Skills.module.css";
import SkillCard from "./SkillCard";

// Import all images
import cssLogo from "./Skills_Logo/css.logo.png";
import expressLogo from "./Skills_Logo/express.logo.png";
import gitLogo from "./Skills_Logo/git.logo.png";
import htmlLogo from "./Skills_Logo/html.logo.png";
import javascriptLogo from "./Skills_Logo/javascript.logo.png";
import mongoLogo from "./Skills_Logo/mongo.logo.png";
import nodeLogo from "./Skills_Logo/node.png";
import reactLogo from "./Skills_Logo/react.logo.png";
import typeScriptLogo from "./Skills_Logo/typeScript.png";
import vsCodeLogo from "./Skills_Logo/vs code.logo.png";

// Create an array of skills
const skillImages = [
  { name: "JavaScript", src: javascriptLogo },
  { name: "HTML", src: htmlLogo },
  { name: "CSS", src: cssLogo },
  { name: "React", src: reactLogo },
  { name: "TypeScript", src: typeScriptLogo },
  { name: "Node.js", src: nodeLogo },
  { name: "Express", src: expressLogo },
  { name: "MongoDB", src: mongoLogo },
  { name: "Git", src: gitLogo },
];

const Skills = () => {
  return (
    <div className={styles.container}>
      <h1 id={styles.Skilltitle}>Skills & Tools</h1>
      <div className={styles.main_content}>
        {skillImages.map((skill, index) => (
          <div key={index} className={styles.inncon}>
            <SkillCard imageSrc={skill.src} skillName={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
