/** @format */

import React from "react";
import styles from "./Skillscard.module.css";

const SkillCard = ({ imageSrc }) => {
  return (
    <div className={styles.skillCard}>
      <img src={imageSrc} alt="Skill Logo" className={styles.skillCardImage} />
    </div>
  );
};

export default SkillCard;
