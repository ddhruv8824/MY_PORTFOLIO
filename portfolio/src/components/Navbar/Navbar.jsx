/** @format */

import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div id={styles.left}>
        <h1 id={styles.name}>DHRUV SUTHAR</h1>
      </div>
      <div id={styles.right}>
        <div onClick={() => handleScroll("home")} className={styles.navItem}>
          Home
        </div>
        <div onClick={() => handleScroll("about")} className={styles.navItem}>
          About
        </div>
        <div onClick={() => handleScroll("skills")} className={styles.navItem}>
          My Skills
        </div>
        <div onClick={() => handleScroll("projects")} className={styles.navItem}>
          Projects
        </div>
        <div
          onClick={() => handleScroll("statistics")}
          className={styles.navItem}
        >
          Statistics
        </div>
        <div onClick={() => handleScroll("footer")} className={styles.navItem}>
          Contact
        </div>
        <button
          className={styles.resumeButton}
          onClick={() =>
            window.open(
              "https://resume-builder-test-new.masaischool.com/resume/public?resumeId=6794c59bf7b3074e914ac043", // Replace with your resume's URL
              "_blank"
            )
          }
        >
         Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
